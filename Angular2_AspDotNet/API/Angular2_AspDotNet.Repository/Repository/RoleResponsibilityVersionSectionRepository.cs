using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Linq;

namespace RiskManagement.Repository.Repository
{
    public class RoleResponsibilityVersionSectionRepository : RepositoryBase<RiskManagement.Data.RoleResponsibilityVersionSection>, IRoleResponsibilityVersionSectionRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public RoleResponsibilityVersionSectionRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RoleResponsibilityVersionSectionViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            RiskManagement.Data.RoleResponsibilityVersionSection roleresponsibilityversionsection = Mapper.Map<RoleResponsibilityVersionSectionViewModel, RiskManagement.Data.RoleResponsibilityVersionSection>(model);
            roleresponsibilityversionsection.OrganizationId = LoggedInOrganizationId;
            roleresponsibilityversionsection.RoleResponsibilityVersionID = model.RoleResponsibilityVersionID;
            base.Insert(roleresponsibilityversionsection);
            _unitOfWork.Save();
        }
        public IEnumerable<RiskManagement.Data.RoleResponsibilityVersionSection> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }


    }
}

