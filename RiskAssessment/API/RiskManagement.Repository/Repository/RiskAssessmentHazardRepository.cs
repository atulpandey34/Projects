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
    public class RiskAssessmentHazardRepository : RepositoryBase<RiskManagement.Data.RiskAssessmentHazard>, IRiskAssessmentHazardRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public RiskAssessmentHazardRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.RiskAssessmentHazard entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<RiskAssessmentHazard> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public List<RiskAssessmentHazard> GetAllWithRiskAssessmentId(int RiskAssessmentId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.RiskAssessmentId == RiskAssessmentId && x.OrganizationId == LoggedInOrganizationId).ToList();
        }


        public RiskAssessmentHazard GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.RiskAssessmentHarardId == id && x.OrganizationId == LoggedInOrganizationId);
        }


        public void Update(RiskAssessmentHazard entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}



