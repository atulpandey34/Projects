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
    public class RoleResponsibilityRepository : RepositoryBase<RiskManagement.Data.RoleResponsibility>, IRoleResponsibilityRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IRoleResponsibilityVersionRepository _IRoleResponsibilityVersionRepository = null;

        public RoleResponsibilityRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            _IRoleResponsibilityVersionRepository = new RoleResponsibilityVersionRepository(unitOfWork);
        }
        public void Add(RiskManagement.Data.RoleResponsibility entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }
        public IEnumerable<RoleResponsibility> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public RolesResponsibilityViewModel GetRoleResponsibility(int roleid, int LoggedInOrganizationId)
        {
            RolesResponsibilityViewModel roleresponsibilityview = null;
            RoleResponsibility roleresponsibility = base.GetMany(x => x.RoleID == roleid).FirstOrDefault();
            if (roleresponsibility != null)
            {
                roleresponsibilityview = Mapper.Map<RoleResponsibility, RolesResponsibilityViewModel>(roleresponsibility);
                if (roleresponsibility.RoleResponsibilityVersions.FirstOrDefault() != null)
                {
                    var latestroleresponsibilityversion = roleresponsibility.RoleResponsibilityVersions.OrderByDescending(x => x.RoleResponsibilityVersionID).First();
                    roleresponsibilityview.RoleResponsibilityVersionID = latestroleresponsibilityversion.RoleResponsibilityVersionID;
                    roleresponsibilityview.LatestVersion = Convert.ToString(latestroleresponsibilityversion.Version);
                    roleresponsibilityview.LatestChanges = latestroleresponsibilityversion.Changes;
                    if (latestroleresponsibilityversion.RoleResponsibilityVersionSections != null)
                    {
                        roleresponsibilityview.RoleResponsibilityVersionSectionViewModel = Mapper.Map<ICollection<RoleResponsibilityVersionSection>, List<RoleResponsibilityVersionSectionViewModel>>(latestroleresponsibilityversion.RoleResponsibilityVersionSections);
                        int cnt = 0;
                        foreach (var item in latestroleresponsibilityversion.RoleResponsibilityVersionSections)
                        {
                            SetRoleResponsibilityView(cnt, roleresponsibilityview.RoleResponsibilityVersionSectionViewModel[cnt], latestroleresponsibilityversion);
                            cnt++;
                        }
                    }
                    else
                    {
                        roleresponsibilityview.RoleResponsibilityVersionSectionViewModel = Mapper.Map<ICollection<RoleResponsibilityVersion>, List<RoleResponsibilityVersionSectionViewModel>>(roleresponsibility.RoleResponsibilityVersions);
                    }
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

        public RolesResponsibilityViewModel AddUpdateRoleResponsibility(RolesResponsibilityViewModel model, int UserId, int OrganizationId)
        {
            RoleResponsibility roleresponsibility = Mapper.Map<RolesResponsibilityViewModel, RoleResponsibility>(model);

            if (model.RoleResponsibilityID == 0)
            {
                roleresponsibility.OrganizationId = OrganizationId;
                base.Insert(roleresponsibility);
                this._unitOfWork.Save();
            }
            else
            {
                roleresponsibility = GetByID(model.RoleResponsibilityID);
                roleresponsibility.RoleID = model.RoleID;
                roleresponsibility.Type = model.Type;
                roleresponsibility.OrganizationId = OrganizationId;
                base.Update(roleresponsibility);
            }
            //base.RepositoryContext.SP_DeleteQuestionOptions(AssigmentQuestion.QuestionID);
            model.RoleResponsibilityID = roleresponsibility.RoleResponsibilityID;
            var rolerespover = this._IRoleResponsibilityVersionRepository.Add(model, UserId, UserId, OrganizationId);
            model.RoleResponsibilityVersionID = rolerespover.RoleResponsibilityVersionID;
            //this._unitOfWork.Save();
            //return AssigmentQuestion.QuestionID;
            return model;
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public List<GetRoleResponsibilityViewModel> GetRolesResponsibility(int ReviewwUserId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            List<SP_GetRoleResponsibility_Result> data = base.RepositoryContext.SP_GetRoleResponsibility(ReviewwUserId, LoggedInOrganizationId).ToList();
            return Mapper.Map<List<SP_GetRoleResponsibility_Result>, List<GetRoleResponsibilityViewModel>>(data);
        }

        public void SetRoleResponsibilityOfPerformanceReview(int RevieweeId, int PerformanceReviewId , int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_SetRoleResponsibilityOfPerformanceReview(RevieweeId, PerformanceReviewId, LoggedInOrganizationId);
        }

        public List<GetRoleResponsibilityViewModel> GetRoleResponsibilityWithVersionId(int RoleResponsibilityVersionId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            List<SP_GetRoleResponsibilityWithVersionId_Result> data = base.RepositoryContext.SP_GetRoleResponsibilityWithVersionId(RoleResponsibilityVersionId, LoggedInOrganizationId).ToList();
            return Mapper.Map<List<SP_GetRoleResponsibilityWithVersionId_Result>, List<GetRoleResponsibilityViewModel>>(data);
        }
    }
}

