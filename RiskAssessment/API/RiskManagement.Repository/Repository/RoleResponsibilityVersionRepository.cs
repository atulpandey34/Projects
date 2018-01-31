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
    public class RoleResponsibilityVersionRepository : RepositoryBase<RiskManagement.Data.RoleResponsibilityVersion>, IRoleResponsibilityVersionRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IRoleResponsibilityVersionSectionRepository _IRoleResponsibilityVersionSectionRepository = null;
        public RoleResponsibilityVersionRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            _IRoleResponsibilityVersionSectionRepository = new RoleResponsibilityVersionSectionRepository(unitOfWork);
        }
        public RoleResponsibilityVersion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return Get(x => x.RoleResponsibilityVersionID == id && x.OrganizationId == LoggedInOrganizationId);
        }
        public RolesResponsibilityViewModel Add(RolesResponsibilityViewModel model, int userid, int LoggedInUserId, int LoggedInOrganizationId)
        {
            if (model.RoleResponsibilityVersionSectionViewModel != null && model.RoleResponsibilityVersionSectionViewModel.Any())
            {
                RoleResponsibilityVersion roleresponsibilityversion = Mapper.Map<RoleResponsibilityVersionSectionViewModel, RoleResponsibilityVersion>(model.RoleResponsibilityVersionSectionViewModel.First());

                RoleResponsibilityVersion rolerespVersion = null;
                if (model.RoleResponsibilityVersionID > 0)
                {
                    rolerespVersion = GetSingle(model.RoleResponsibilityVersionID, LoggedInUserId, LoggedInOrganizationId);
                }

                if (model.RoleResponsibilityVersionID == 0 || (rolerespVersion != null && rolerespVersion.ApprovedBy != null))
                {
                    //insert RoleResponsibilityVersion
                    roleresponsibilityversion.RoleResponsibilityID = model.RoleResponsibilityID;
                    roleresponsibilityversion.OrganizationId = LoggedInOrganizationId;
                    double versionResult = 1;
                    if (!string.IsNullOrEmpty(model.LatestVersion))
                    {
                        Double.TryParse(model.LatestVersion, out versionResult);
                    }
                    roleresponsibilityversion.Version = versionResult;
                    roleresponsibilityversion.Changes = model.LatestChanges;
                    roleresponsibilityversion.ApprovedBy = null;
                    roleresponsibilityversion.CreatedBy = userid;
                    roleresponsibilityversion.CreatedDate = DateTime.Now;
                    roleresponsibilityversion.ModifiedBy = userid;
                    roleresponsibilityversion.ModifiedDate = DateTime.Now;
                    base.Insert(roleresponsibilityversion);
                    _unitOfWork.Save();
                }
                else
                {
                    roleresponsibilityversion.RoleResponsibilityVersionID = model.RoleResponsibilityVersionID;
                    //update RoleResponsibilityVersion
                    double versionResult = 1;
                    if (!string.IsNullOrEmpty(model.LatestVersion))
                    {
                        Double.TryParse(model.LatestVersion, out versionResult);
                    }
                    rolerespVersion.Version = versionResult;
                    rolerespVersion.Changes = model.LatestChanges;
                    roleresponsibilityversion.ModifiedBy = userid;
                    roleresponsibilityversion.ModifiedDate = DateTime.Now;
                    base.Update(rolerespVersion);
                   this._unitOfWork.Save();

                    base.RepositoryContext.SP_DeleteRoleResponsibilityVersionSection(model.RoleResponsibilityVersionID);
                }

                if (model.Type == 1)
                {
                    foreach (RiskManagement.Models.RoleResponsibilityVersionSectionViewModel rrvs in model.RoleResponsibilityVersionSectionViewModel)
                    {
                        rrvs.RoleResponsibilityVersionID = roleresponsibilityversion.RoleResponsibilityVersionID;
                        rrvs.OrganizationId = model.OrganizationId;
                        _IRoleResponsibilityVersionSectionRepository.Add(rrvs, LoggedInUserId, LoggedInOrganizationId);
                    }
                }
                model.RoleResponsibilityVersionID = roleresponsibilityversion.RoleResponsibilityVersionID;
            }
            return model;
        }

        public int UpdateRoleResponsibilityMaterial(RoleResponsibilityVersionSectionViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            RoleResponsibilityVersion rolerespVersion = Mapper.Map<RoleResponsibilityVersionSectionViewModel, RoleResponsibilityVersion>(model);
            rolerespVersion = GetSingle(model.RoleResponsibilityVersionID, LoggedInUserId, LoggedInOrganizationId);
            rolerespVersion.DocumentName = model.DocumentName;
            rolerespVersion.DocumentPath = model.DocumentPath;
            base.Update(rolerespVersion);
            this._unitOfWork.Save();
            return rolerespVersion.RoleResponsibilityVersionID;
        }

        public int ApproveVersion(int RoleResponsibilityVersionID, int LoggedInUserId, int LoggedInOrganizationId)
        {
            RoleResponsibilityVersion rolerespVersion = GetSingle(RoleResponsibilityVersionID, LoggedInUserId, LoggedInOrganizationId);
            rolerespVersion.ApprovedBy = LoggedInUserId;
            rolerespVersion.ApprovedDate = DateTime.Now;
            base.Update(rolerespVersion);
            this._unitOfWork.Save();
            return rolerespVersion.RoleResponsibilityVersionID;
        }

        public List<RoleResponsibilityVersionSectionViewModel> GetRoleResponsibilityVersionList(int RoleResponsibilityID, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var list = base.RepositoryContext.SP_GetRoleResponsibilityVersionList(RoleResponsibilityID, LoggedInOrganizationId).ToList();
            return Mapper.Map<List<SP_GetRoleResponsibilityVersionList_Result>, List<RoleResponsibilityVersionSectionViewModel>>(list);
        }
        public RolesResponsibilityViewModel GetRoleResponsibilityVerion(int RoleResponsibilityVersionID, int LoggedInUserId, int LoggedInOrganizationId)
        {
            RolesResponsibilityViewModel roleresponsibilityview = new RolesResponsibilityViewModel();
            RoleResponsibilityVersion rolerespVersion = GetSingle(RoleResponsibilityVersionID, LoggedInUserId, LoggedInOrganizationId);

            IEnumerable<RoleResponsibilityVersion> listVersions = base.GetMany(x => x.RoleResponsibilityID == rolerespVersion.RoleResponsibilityID);
            var latestroleresponsibilityversion = listVersions.OrderByDescending(x => x.RoleResponsibilityVersionID).First();

            roleresponsibilityview.LatestRoleResponsibilityVersionID = latestroleresponsibilityversion.RoleResponsibilityVersionID;
            roleresponsibilityview.RoleResponsibilityVersionID = rolerespVersion.RoleResponsibilityVersionID;
            roleresponsibilityview.LatestVersion = Convert.ToString(rolerespVersion.Version);
            roleresponsibilityview.LatestChanges = rolerespVersion.Changes;
            if (rolerespVersion.RoleResponsibilityVersionSections != null)
            {
                roleresponsibilityview.RoleResponsibilityVersionSectionViewModel = Mapper.Map<ICollection<RoleResponsibilityVersionSection>, List<RoleResponsibilityVersionSectionViewModel>>(rolerespVersion.RoleResponsibilityVersionSections);
                int cnt = 0;
                foreach (var item in rolerespVersion.RoleResponsibilityVersionSections)
                {
                    SetRoleResponsibilityView(cnt, roleresponsibilityview.RoleResponsibilityVersionSectionViewModel[cnt], rolerespVersion);
                    cnt++;
                }
            }
            return roleresponsibilityview;
        }

        private void SetRoleResponsibilityView(int cnt, RoleResponsibilityVersionSectionViewModel rrsvm, RoleResponsibilityVersion item)
        {
            rrsvm.RoleResponsibilityVersionID = item.RoleResponsibilityVersionID;
            rrsvm.RoleResponsibilityID = item.RoleResponsibilityID ?? 0;
            rrsvm.Version = Convert.ToString(item.Version);
            rrsvm.DocumentName = item.DocumentName;
            rrsvm.DocumentPath = item.DocumentPath;
            rrsvm.Changes = item.Changes;
            rrsvm.ApprovedBy = item.ApprovedBy ?? 0;
            //rrsvm.ApprovedDate = item.ApprovedDate;
            rrsvm.CreatedBy = item.CreatedBy;
            //rrsvm.CreatedDate = item.CreatedDate;
            rrsvm.OrganizationId = item.OrganizationId;
            rrsvm.SectionName = item.RoleResponsibilityVersionSections.ToList()[cnt].MasterRoleSection.SectionName;
        }

        public IEnumerable<RoleResponsibilityVersion> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }


    }
}

