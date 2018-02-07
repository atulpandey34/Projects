using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using AutoMapper;
using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class RiskAssessmentReviewRepository : RepositoryBase<Angular2_AspDotNet.Data.RiskAssessmentReview>, IRiskAssessmentReviewRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;



        public RiskAssessmentReviewRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;

        }

        public void Add(Data.RiskAssessmentReview entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);

        }

        public  void Update(Data.RiskAssessmentReview entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_DeleteAction(id, LoggedInOrganizationId);
        }


        public Data.RiskAssessmentReview GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x=>x.RiskAssessmentReviewID==id && x.OrganizationId==LoggedInOrganizationId);
        }

        public  IEnumerable<RiskAssessmentReview> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);

        }





        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}



