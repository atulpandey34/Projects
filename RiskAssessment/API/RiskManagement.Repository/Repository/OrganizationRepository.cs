using AutoMapper;
using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;

namespace RiskManagement.Repository.Repository
{

    public class OrganizationRepository : RepositoryBase<RiskManagement.Data.Organization>, IOrganizationRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public OrganizationRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.Organization entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationID = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }
        public Organization GetSingle(int id)
        {
            return Get(x => x.OrganizationID == id);
        }

        public OrganizationViewModel AddUpdateOrganization(OrganizationViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Organization _Organization = Mapper.Map<OrganizationViewModel, Organization>(model);

            if (model.OrganizationID == 0)
            {
                base.Insert(_Organization);
                this._unitOfWork.Save();
                Role role = new Role();
                role.Active = true;
                role.OrganizationId = _Organization.OrganizationID;
                role.RoleName = "Admin";
                role.IsAdmin = true;
                base.RepositoryContext.Roles.Add(role);
            }
            else
            {
                _Organization = GetSingle(model.OrganizationID, LoggedInUserId, LoggedInOrganizationId);
                _Organization.OrganizationName = model.OrganizationName;
                _Organization.State = model.State;
                _Organization.City = model.City;
                _Organization.AddressLine = model.AddressLine;
                _Organization.IsActive = model.IsActive;
                base.Update(_Organization);
            }
            this._unitOfWork.Save();
            model.OrganizationID = _Organization.OrganizationID;
            return model;
        }

        public void UpdateOrganizationMaterial(OrganizationViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var _Organization = GetSingle(model.OrganizationID, LoggedInUserId, LoggedInOrganizationId);
            _Organization.Logo = model.Logo;
            base.Update(_Organization);
            this._unitOfWork.Save();
        }
        public OrganizationViewModel GetSingleOrganization(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var org = GetSingle(id);
            return Mapper.Map<Organization, OrganizationViewModel>(org);
        }
        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }

        public void DeleteOrganization(int organizationid, int LoggedInUserId)
        {
            var data = base.GetByID(organizationid);
            data.IsActive = false;
            Update(data);
            this._unitOfWork.Save();
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Organization> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll();
        }
        public List<OrganizationViewModel> GetAllOrganizationist(int Userid, int OrganizationId)
        {
            var data = base.GetAll();
            return Mapper.Map<IEnumerable<Organization>, IEnumerable<RiskManagement.Models.OrganizationViewModel>>(data).ToList();
        }

        public OrganizationListViewResult GetOrganizationListData(OrganizationListFilterModel filter, int LoggedInUserId)
        {
            OrganizationListViewResult list = new OrganizationListViewResult();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetOrganizationList(
                filter.PageNo, filter.PageSize, filter.SortColumn,
                filter.SortOrder, filter.OrganizationName, filter.OrganizationAddress, totalRecords).ToList();
            list.OrganizationListResult = Mapper.Map<List<SP_GetOrganizationList_Result>, List<OrganizationListResult>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
        public Organization GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetByID(id);
        }

        public void Update(Organization entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
