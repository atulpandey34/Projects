using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class RoleResponsibilityVersionSectionRepository : RepositoryBase<Angular2_AspDotNet.Data.RoleResponsibilityVersionSection>, IRoleResponsibilityVersionSectionRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public RoleResponsibilityVersionSectionRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RoleResponsibilityVersionSectionViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Angular2_AspDotNet.Data.RoleResponsibilityVersionSection roleresponsibilityversionsection = Mapper.Map<RoleResponsibilityVersionSectionViewModel, Angular2_AspDotNet.Data.RoleResponsibilityVersionSection>(model);
            roleresponsibilityversionsection.OrganizationId = LoggedInOrganizationId;
            roleresponsibilityversionsection.RoleResponsibilityVersionID = model.RoleResponsibilityVersionID;
            base.Insert(roleresponsibilityversionsection);
            _unitOfWork.Save();
        }
        public IEnumerable<Angular2_AspDotNet.Data.RoleResponsibilityVersionSection> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }


    }
}

