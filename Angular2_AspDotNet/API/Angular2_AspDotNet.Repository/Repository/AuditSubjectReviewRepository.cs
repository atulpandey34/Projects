using AutoMapper;
using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class AuditSubjectReviewRepository : RepositoryBase<Angular2_AspDotNet.Data.AuditSubjectReview>, IAuditSubjectReviewRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IAuditSubjectQuestionResponseRepository _IAuditSubjectQuestionResponseRepository = null;

        public AuditSubjectReviewRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._IAuditSubjectQuestionResponseRepository = new AuditSubjectQuestionResponseRepository(this._unitOfWork);
        }

        public AuditSubjectReview GetSingle(int AuditSubjectID, int AuditSubjectReviewID, int orgid)
        {
            return Get(x => x.SubjectID == AuditSubjectID && x.AuditSubjectReviewID == AuditSubjectReviewID && x.OrganizationID == orgid);
        }

        public List<AuditSubjectReview> GetAllSubjectReview(int auditsubjectid, int orgid)
        {
            return GetAll(x => x.SubjectID == auditsubjectid && x.OrganizationID == orgid && x.IsDeleted == false);
        }

        public void Delete(int auditSubjectReviewID)
        {
            var asubre = GetSingle(x=> x.AuditSubjectReviewID== auditSubjectReviewID);
            asubre.IsDeleted = true;
            base.Update(asubre);
        }

        public AuditSubjectReviewViewModel AddUpdateAuditReview(AuditSubjectReviewViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            AuditSubjectReview _auditreview = Mapper.Map<AuditSubjectReviewViewModel, AuditSubjectReview>(model);
            _auditreview.OrganizationID = LoggedInOrganizationId;
            if (model.AuditSubjectReviewID == 0)
            {
                foreach (var auditsubrevquesresp in model.AuditSubjectQuestionResponses)
                {
                    var _auditreviewQusRes = _auditreview.AuditSubjectQuestionResponses.FirstOrDefault(x=>x.AuditSubjectQuestionID== auditsubrevquesresp.AuditSubjectQuestionID);

                    if (auditsubrevquesresp.Observation == true)
                    {
                        _auditreviewQusRes.ObservationStatus = "OB";
                    }
                    else if (auditsubrevquesresp.NonCompliance == true)
                    {
                        _auditreviewQusRes.ObservationStatus = "NC";
                    }
                    else if (auditsubrevquesresp.NonCompliance == true)
                    {
                        _auditreviewQusRes.ObservationStatus = "None";
                    }
                }
                base.Insert(_auditreview);
            }
            else
            {
                _auditreview = GetSingle(model.SubjectID,model.AuditSubjectReviewID, LoggedInOrganizationId);
                _auditreview.AuditeeID = model.AuditeeID;
                _auditreview.AuditDate = model.AuditDate;
                _auditreview.Status = model.Status;
                _auditreview.Comment = model.Comment;
                base.Update(_auditreview);

                _IAuditSubjectQuestionResponseRepository.UpdateAuditSubQueRes(model);
            }
            this._unitOfWork.Save();
            model = Mapper.Map<AuditSubjectReview, AuditSubjectReviewViewModel>(_auditreview);
            return model;
        }

        public AuditSubjectReviewViewModel GetAuditSubjectReview(int AuditSubjectID, int AuditSubjectReviewID, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var audsubrev = GetSingle(AuditSubjectID, AuditSubjectReviewID, LoggedInOrganizationId);
            AuditSubjectReviewViewModel model = Mapper.Map<AuditSubjectReview, AuditSubjectReviewViewModel>(audsubrev);

            if (audsubrev.AuditSubject != null)
            {
                model.Subject = audsubrev.AuditSubject.Subject;
            }

            foreach (var qr in audsubrev.AuditSubjectQuestionResponses)
            {
                AuditSubjectReviewQuestionViewModel qrViewModel = model.AuditSubjectQuestionResponses.FirstOrDefault(x => x.AuditSubjectQuestionResponseID == qr.AuditSubjectQuestionResponseID);
                qrViewModel.QuestionText = qr.AuditSubjectQuestion.QuestionText;
                if (qr.ObservationStatus == "OB")
                {
                    qrViewModel.Observation = true;
                }
                else if (qr.ObservationStatus == "NC")
                {
                    qrViewModel.NonCompliance = true;
                }
                else if (qr.ObservationStatus == "None")
                {
                    qrViewModel.None = true;
                }
            }

            return model;
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
