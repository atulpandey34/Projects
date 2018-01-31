using AutoMapper;
using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;

namespace RiskManagement.Repository.Repository
{
    public class AuditSubjectQuestionResponseRepository : RepositoryBase<RiskManagement.Data.AuditSubjectQuestionResponse>, IAuditSubjectQuestionResponseRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        
        public AuditSubjectQuestionResponseRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
           
        }

        public AuditSubjectQuestionResponse GetSingle(int id)
        {
            return Get(x => x.AuditSubjectQuestionResponseID == id);
        }

        public void UpdateAuditSubQueRes(AuditSubjectReviewViewModel model)
        {
            foreach (var auditsubrevquesresp in model.AuditSubjectQuestionResponses)
            {
                AuditSubjectQuestionResponse _auditreviewQusRes = GetSingle(auditsubrevquesresp.AuditSubjectQuestionResponseID);
                _auditreviewQusRes.Comment = auditsubrevquesresp.Comment;
                //_auditreviewQusRes.Observation = auditsubrevquesresp.Observation;
                //_auditreviewQusRes.NonCompliance = auditsubrevquesresp.NonCompliance;
                if (auditsubrevquesresp.Observation == true)
                {
                    _auditreviewQusRes.ObservationStatus = "OB";
                }
                else if (auditsubrevquesresp.NonCompliance == true)
                {
                    _auditreviewQusRes.ObservationStatus = "NC";
                }
                else if (auditsubrevquesresp.None == true)
                {
                    _auditreviewQusRes.ObservationStatus = "None";
                }

                base.Update(_auditreviewQusRes);
            }
        }

        public void UpdateAuditSubQueResMaterial(AuditSubjectReviewQuestionViewModel model)
        {
            var _auditreviewQusRes = GetSingle(model.AuditSubjectQuestionResponseID);
            _auditreviewQusRes.ImagePath = model.ImagePath;
            _auditreviewQusRes.ImageName = model.ImageName;
            base.Update(_auditreviewQusRes);
            this._unitOfWork.Save();
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
