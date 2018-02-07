using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class PerformanceReviewRepository : RepositoryBase<Angular2_AspDotNet.Data.PerformanceReview>, IPerformanceReviewRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public PerformanceReviewRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.PerformanceReview entity, int LoggedInUserId, int LoggedInOrganizationId)
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
