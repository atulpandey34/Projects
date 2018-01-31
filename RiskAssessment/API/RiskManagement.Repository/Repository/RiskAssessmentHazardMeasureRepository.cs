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
    public class RiskAssessmentHazardMeasureRepository : RepositoryBase<RiskManagement.Data.RiskAssessmentHazardMeasure>, IRiskAssessmentHazardMeasureRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public RiskAssessmentHazardMeasureRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.RiskAssessmentHazardMeasure entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<RiskAssessmentHazardMeasure> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }



        public RiskAssessmentHazardMeasure GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.RiskAssessmentHazardMeasureId == id && x.OrganizationId == LoggedInOrganizationId);
        }
        public List<RiskAssessmentHazardMeasure> GetSingleWithHazardId(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.RiskAssessmentHazardId == id && x.OrganizationId == LoggedInOrganizationId).ToList();
        }

        public void Update(RiskAssessmentHazardMeasure entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}



