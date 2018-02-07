using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Data.Entity.Core.Objects;
using System.Linq;
using Angular2_AspDotNet.Security;
using System.Text;
using Angular2_AspDotNet.Core;
using System.Web;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class RoleMenuMappingRepository : RepositoryBase<Angular2_AspDotNet.Data.RoleMenuMapping>, IRoleMenuMappingRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public RoleMenuMappingRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.RoleMenuMapping entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.CreatedBy = LoggedInUserId;
            entity.CreatedDate = DateTime.Now;
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void AddUpdateRoleMenu(RoleMenuMappingListModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_DeleteRoleMenuMapping(model.RoleId);
            if (model != null && model.RoleMenuMappingViewModel != null && model.RoleMenuMappingViewModel.Any())
            {
                foreach (RoleMenuMappingViewModel viewModel in model.RoleMenuMappingViewModel)
                {
                    RoleMenuMapping menu = Mapper.Map<RoleMenuMappingViewModel, RoleMenuMapping>(viewModel);
                    Add(menu, LoggedInUserId, LoggedInOrganizationId);
                }
            }

            this._unitOfWork.Save();

        }


        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public List<RoleMenuMappingViewModel> GetAllMenu(int RoleId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            List<RoleMenuMapping> menu = base.GetAll(x => x.RoleId == RoleId).ToList();
            return Mapper.Map<List<RoleMenuMapping>, List<RoleMenuMappingViewModel>>(menu);
        }

        public List<MenuViewModel> GetMenuByRoleId(List<int> RoleId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            string[] result = RoleId.Select(x => x.ToString()).ToArray();
            var data = base.RepositoryContext.SP_GetMenuByRoleId(string.Join(",", result)).ToList();
            return Mapper.Map<List<SP_GetMenuByRoleId_Result>, List<MenuViewModel>>(data);
        }

        public string GetDefaultUrl(string Url, List<int> roleId, int LoggedINOrganizationId)
        {
            string[] result = roleId.Select(x => x.ToString()).ToArray();
            return base.RepositoryContext.SP_GetDefaultUrlAssignedToRole(Url, string.Join(",", result)).FirstOrDefault();
        }


    }
}
