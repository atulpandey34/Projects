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
    public class RiskAssessmentTeamRepository : RepositoryBase<Angular2_AspDotNet.Data.RiskAssessmentTeam>, IRiskAssessmentTeamRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;


        public RiskAssessmentTeamRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;

        }
        public void Add(Angular2_AspDotNet.Data.RiskAssessmentTeam entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public  IEnumerable<RiskAssessmentTeam> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
        }

        public List<RiskAssessmentTeam> GetAllWithRiskAssessmentId(int RiskAssessmentId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = base.GetManyQueryable(x => x.RiskAssessmentId == RiskAssessmentId && x.OrganizationId==LoggedInOrganizationId);
            if (data != null)
                return data.ToList();
            else return new List<RiskAssessmentTeam>();
        }

        public RiskAssessmentTeam GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x=>x.RiskAssessmentTeamId==id && x.OrganizationId==LoggedInOrganizationId);
        }


        public  void Update(RiskAssessmentTeam entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }


    }
}

