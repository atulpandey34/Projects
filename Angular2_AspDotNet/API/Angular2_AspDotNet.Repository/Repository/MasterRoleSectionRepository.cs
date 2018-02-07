using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
using System.Data.Entity;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class MasterRoleSectionRepository : RepositoryBase<Angular2_AspDotNet.Data.MasterRoleSection>, IMasterRoleSectionRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        
        public MasterRoleSectionRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public  IEnumerable<MasterRoleSection> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
        }
        public MasterRoleSection GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x=>x.MasterRoleSectionID==id && x.OrganizationId==LoggedInOrganizationId);
        }
        public bool Validate(string sectionName, int LoggedInUserId, int LoggedInOrganizationId)
        {
            bool result = true;
            var data = base.Get(x => x.SectionName.ToLower() == sectionName.ToLower() && x.OrganizationId==LoggedInOrganizationId);
            if (data != null && !string.IsNullOrWhiteSpace(data.SectionName))
            {
                result = false;
            }
            return result;
        }
        

        public List<Angular2_AspDotNet.Models.MasterRoleSectionViewModel> GetAllMasterRoleSection( int LoggedInUserId, int LoggedInOrganizationId)
        {
            var masterrolesection = base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId).Where(x=>x.Active==true).OrderBy(x=>x.SectionName);
            return Mapper.Map<IEnumerable<MasterRoleSection>, IEnumerable<Angular2_AspDotNet.Models.MasterRoleSectionViewModel>>(masterrolesection).ToList();
        }

        public int AddMasterRoleSection(string sectionName, int LoggedInUserId, int LoggedInOrganizationId)
        {
            MasterRoleSection section = new MasterRoleSection();
            section.SectionName = sectionName;
            section.OrganizationId = LoggedInOrganizationId;
            section.Active = true;
            base.Insert(section);
            this._unitOfWork.Save();
            return section.MasterRoleSectionID;
        }

        
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
