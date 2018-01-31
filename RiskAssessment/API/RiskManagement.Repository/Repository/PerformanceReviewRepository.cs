using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;

namespace RiskManagement.Repository.Repository
{
    public class PerformanceReviewRepository : RepositoryBase<RiskManagement.Data.PerformanceReview>, IPerformanceReviewRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public PerformanceReviewRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.PerformanceReview entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationID = LoggedInOrganizationId;
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

        public IEnumerable<PerformanceReview> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationID == LoggedInOrganizationId);
        }



        public PerformanceReview GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.PerformanceReviewID == id && x.OrganizationID == LoggedInOrganizationId);
        }

        
        public void Update(PerformanceReview entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
