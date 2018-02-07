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
    public class RiskAssessmentHazardReviewRepository : RepositoryBase<RiskManagement.Data.RiskAssessmentHazardReview>, IRiskAssessmentHazardReviewRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public RiskAssessmentHazardReviewRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.RiskAssessmentHazardReview entity, int LoggedInUserId, int LoggedInOrganizationId)
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

