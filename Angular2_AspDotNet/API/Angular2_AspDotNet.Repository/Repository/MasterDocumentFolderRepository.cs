using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
using System.Data.Entity;

namespace RiskManagement.Repository.Repository
{
    public class MasterDocumentFolderRepository : RepositoryBase<RiskManagement.Data.MasterDocumentFolder>, IMasterDocumentFolderRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IDocumentFolderRoleRepository _IDocumentFolderRoleRepository = null;
        private IDocumentFolderUserRepository _IDocumentFolderUserRepository = null;
        private IDocumentRepository _IDocumentRepository = null;
        public MasterDocumentFolderRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._IDocumentFolderRoleRepository = new DocumentFolderRoleRepository(unitOfWork);
            this._IDocumentFolderUserRepository = new DocumentFolderUserRepository(unitOfWork);
            this._IDocumentRepository = new DocumentRepository(unitOfWork);
        }
        public IEnumerable<MasterDocumentFolder> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }
        public MasterDocumentFolder GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.MasterDocumentFolderID == id && x.OrganizationId == LoggedInOrganizationId);
        }
        public bool ValidateFolder(string foldername, int LoggedInUserId, int LoggedInOrganizationId)
        {
            bool result = true;
            var data = base.Get(x => x.FolderName == foldername && x.OrganizationId == LoggedInOrganizationId);
            if (data != null && !string.IsNullOrWhiteSpace(data.FolderName))
            {
                result = false;
            }
            return result;
        }
        public FolderPopupViewModel GetSingleFolder(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var folder = Get(x => x.MasterDocumentFolderID == id && x.OrganizationId == LoggedInOrganizationId);
            FolderPopupViewModel folderviewmodel = new FolderPopupViewModel();
            folderviewmodel.MasterDocumentFolderID = folder.MasterDocumentFolderID;
            folderviewmodel.FolderName = folder.FolderName;
            foreach (var role in folder.DocumentFolderRoles)
            {
                folderviewmodel.Roles.Add(role.RoleID ?? 0);
            }
            foreach (var user in folder.DocumentFolderUsers)
            {
                folderviewmodel.Users.Add(user.UserID ?? 0);
            }
            return folderviewmodel;
        }

        public List<RiskManagement.Models.MasterDocumentFolderViewModel> GetAllMasterDocumentFolder(int LoggedInUserId, int LoggedInOrganizationId)
        {
            var userList = base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
            return Mapper.Map<IEnumerable<MasterDocumentFolder>, IEnumerable<RiskManagement.Models.MasterDocumentFolderViewModel>>(userList).ToList();
        }

        public int AddMasterDocumentFolder(string folderValue, int LoggedInUserId, int LoggedInOrganizationId)
        {
            MasterDocumentFolder folder = new MasterDocumentFolder();
            folder.FolderName = folderValue;
            folder.OrganizationId = LoggedInOrganizationId;
            base.Insert(folder);
            this._unitOfWork.Save();
            return folder.MasterDocumentFolderID;
        }

        public MasterDocumentFolderListViewResult GetMasterDocumentFoldertListData(MasterDocumentFolderListFilterModel filter, int LoggedInUserId, int LoggedInOrganizationId)
        {
            MasterDocumentFolderListViewResult list = new MasterDocumentFolderListViewResult();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetDocumentFolder(
                filter.PageNo, filter.PageSize, filter.SortColumn,
                filter.SortOrder, filter.FolderName, filter.RoleName, filter.UserName,
               LoggedInOrganizationId, totalRecords).ToList();
            list.DocumentFolderListResult = Mapper.Map<List<SP_GetDocumentFolder_Result>, List<MasterDocumentFolderListResult>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
        public int SaveFolderFormData(FolderPopupViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            MasterDocumentFolder folder = Mapper.Map<FolderPopupViewModel, MasterDocumentFolder>(model);
            if (folder.MasterDocumentFolderID == 0)
            {
                folder.OrganizationId = LoggedInOrganizationId;
                base.Insert(folder);
                this._unitOfWork.Save();
            }
            else
            {
                var foldertoUpdate = GetSingle(folder.MasterDocumentFolderID, LoggedInUserId, LoggedInOrganizationId);
                foldertoUpdate.FolderName = folder.FolderName;
                Update(foldertoUpdate);
                base.RepositoryContext.SP_DeleteALLDocumentFolderRole(folder.MasterDocumentFolderID, LoggedInOrganizationId);
                base.RepositoryContext.SP_DeleteALLDocumentFolderUser(folder.MasterDocumentFolderID, LoggedInOrganizationId);
            }
            if (model.UserList != null && model.UserList.Any())
            {
                foreach (var data in model.UserList)
                {
                    DocumentFolderUser user = Mapper.Map<DocumentFolderUserViewModel, DocumentFolderUser>(data);
                    user.DocumentFolderID = folder.MasterDocumentFolderID;
                    user.OrganizationId = LoggedInOrganizationId;
                    this._IDocumentFolderUserRepository.Add(user, LoggedInUserId, LoggedInOrganizationId);
                }
            }
            if (model.RoleList != null && model.RoleList.Any())
            {
                foreach (var data in model.RoleList)
                {
                    DocumentFolderRole role = Mapper.Map<DocumentFolderRoleViewModel, DocumentFolderRole>(data);
                    role.DocumentFolderID = folder.MasterDocumentFolderID;
                    role.OrganizationId = LoggedInOrganizationId;
                    this._IDocumentFolderRoleRepository.Add(role, LoggedInUserId, LoggedInOrganizationId);
                }
            }
            this._unitOfWork.Save();
            return folder.MasterDocumentFolderID;
        }
        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = Get(x => x.MasterDocumentFolderID == id && x.OrganizationId == LoggedInOrganizationId);
            data.IsDeleted = true;
            Update(data);
        }
        public int DeleteFolder(int folderid, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var document = _IDocumentRepository.GetDocumentByFolder(folderid, LoggedInUserId, LoggedInOrganizationId);
            if (document != null)
            {
                return 0;
            }
            else
            {
                this.Delete(folderid);
                this._unitOfWork.Save();
                return 1;
            }
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
