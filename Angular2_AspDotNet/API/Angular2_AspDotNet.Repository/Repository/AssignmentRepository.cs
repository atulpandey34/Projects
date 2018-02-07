using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
namespace RiskManagement.Repository.Repository
{
    public class AssignmentRepository : RepositoryBase<RiskManagement.Data.Assignment>, IAssignmentRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IUserRepository _IUserRepository = null;

        public AssignmentRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._IUserRepository = new UserRepository(unitOfWork);
        }
        public void Add(RiskManagement.Data.Assignment entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = GetSingle(id, LoggedInUserId, LoggedInOrganizationId);
            data.IsDeleted = true;
            Update(data);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Assignment> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public List<AssignmentListFilterModel> GetAllAssignment(int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = GetAll(LoggedInUserId, LoggedInOrganizationId).ToList();
            var data1 = data.Where(x => x.Active == true).OrderBy(x => x.Title).ToList();
            return Mapper.Map<List<Assignment>, List<AssignmentListFilterModel>>(data1);
        }

        public Assignment GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.AssignmentID == id && x.OrganizationId == LoggedInOrganizationId);
        }
        public int DeleteAssignment(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            if (base.RepositoryContext.Trainings.Where(t => t.AssignmentID == id && t.OrganizationId == LoggedInOrganizationId).Count() == 0)
                return 0;
            var data = GetSingle(id, LoggedInUserId, LoggedInOrganizationId);
            // data.IsDeleted = true;
            Update(data);
            return 1;
        }
        public void Update(Assignment entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public int AddUpdateAssignment(AssignmentListFilterModel model, int Userid, int OrganizationId)
        {
            Assignment Assigments = Mapper.Map<AssignmentListFilterModel, Assignment>(model);

            if (model.AssignmentID == 0)
            {
                Assigments.Active = true;
                Assigments.OrganizationId = OrganizationId;
                base.Insert(Assigments);
                this._unitOfWork.Save();
            }
            else
            {
                Assigments = GetSingle(model.AssignmentID, Userid, OrganizationId);
                Assigments.Title = model.Title;
                Assigments.Active = model.Active;
                base.Update(Assigments);
            }
            this._unitOfWork.Save();
            return Assigments.AssignmentID;
        }


        public AssignmentListViewResult GetAssignmentListData(AssignmentListFilterModel filter, int LoggedInUserId, int LoggedInOrganizationId)
        {
            AssignmentListViewResult list = new AssignmentListViewResult();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetAssignmentList(
                filter.PageNo, filter.PageSize, filter.SortColumn,
                filter.SortOrder, filter.Title, Convert.ToInt32(filter.Active), LoggedInOrganizationId,
                totalRecords).ToList();
            list.AssignmentListResult = Mapper.Map<List<SP_GetAssignmentList_Result>, List<AssignmentListResult>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }


        public AssignmentListFilterModel GetAssginmentListWithAssignmentId(int AssignmentId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = GetSingle(AssignmentId, LoggedInUserId, LoggedInOrganizationId);
            return Mapper.Map<Assignment, AssignmentListFilterModel>(data);
        }
    }
}
