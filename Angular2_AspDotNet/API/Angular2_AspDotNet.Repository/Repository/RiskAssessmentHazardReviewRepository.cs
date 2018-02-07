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
    public class RiskAssessmentHazardReviewRepository : RepositoryBase<Angular2_AspDotNet.Data.RiskAssessmentHazardReview>, IRiskAssessmentHazardReviewRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public RiskAssessmentHazardReviewRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.RiskAssessmentHazardReview entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public  IEnumerable<RiskAssessmentHazardReview> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
        }



        public RiskAssessmentHazardReview GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x=>x.RiskAssessmentHazardReviewId==id && x.OrganizationId==LoggedInOrganizationId);
        }
        public List<RiskAssessmentHazardReview> GetSingleWithHazardId(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.RiskAssessmentHazardId == id && x.OrganizationId==LoggedInOrganizationId).ToList();
        }

        public  void Update(RiskAssessmentHazardReview entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}

