using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
using System.Data.Entity;
using RiskManagement.Core;

namespace RiskManagement.Repository.Repository
{
    public class AuditSubjectRepository : RepositoryBase<RiskManagement.Data.AuditSubject>, IAuditSubjectRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IAuditSubjectReviewRepository _IAuditSubjectReviewRepository = null;
        private IAuditSubjectQuestionRepository _IAuditSubjectQuestionRepository = null;

        public AuditSubjectRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            _IAuditSubjectReviewRepository = new AuditSubjectReviewRepository(unitOfWork);
            _IAuditSubjectQuestionRepository = new AuditSubjectQuestionRepository(unitOfWork);
        }

        public AuditSubject GetSingle(int id, int orgid)
        {
            return Get(x => x.AuditSubjectID == id && x.OrganizationID == orgid && x.IsDeleted == false);
        }

        public List<AuditSubject> GetAllSubject(int auditid, int orgid)
        {
            return GetAll(x => x.AuditID == auditid && x.OrganizationID == orgid && x.IsDeleted == false);
        }

        public void AddAuditSubject(AuditViewModel model, int LoggedInOrganizationId)
        {
            List<AuditSubject> _auditsubject = Mapper.Map<List<AuditSubjectViewModel>, List<AuditSubject>>(model.AuditSubjects);
            _auditsubject.ToList().ForEach(z =>
            {
                //z.AuditID = model.AuditID;
                z.AuditSubjectID = 0;
                z.OrganizationID = LoggedInOrganizationId;
                z.AuditSubjectQuestions.ToList().ForEach(x =>
                {
                    x.AuditSubjectID = 0;
                    x.AuditSubjectQuestionID = 0;
                });
                base.Insert(z);
            });
            this._unitOfWork.Save();
            foreach (var z in _auditsubject)
            {
                GenerateAuditSubjectReview(z, model.DueDate);
            }
        }

        public void AddUpdateAuditSubject(AuditViewModel model, int LoggedInOrganizationId)
        {
            List<AuditSubject> _auditsubject = Mapper.Map<List<AuditSubjectViewModel>, List<AuditSubject>>(model.AuditSubjects);

            List<AuditSubject> storeAuditSubject = this.GetAllSubject(model.AuditID, LoggedInOrganizationId);
            foreach (var saudsub in storeAuditSubject)
            {
                bool isExist = _auditsubject.Any(x => x.AuditSubjectID == saudsub.AuditSubjectID);
                if (!isExist)
                {
                    saudsub.IsDeleted = true;
                    base.Update(saudsub);
                }
            }

            _auditsubject.ToList().ForEach(z =>
            {
                z.OrganizationID = LoggedInOrganizationId;

                if (z.AuditSubjectID > 0)
                {
                    AuditSubject storedAuditSubject = this.GetSingle(z.AuditSubjectID, LoggedInOrganizationId);
                    storedAuditSubject.Subject = z.Subject;
                    storedAuditSubject.AuditorID = z.AuditorID;
                    storedAuditSubject.AuditeeID = z.AuditeeID;
                    storedAuditSubject.Location = z.Location;
                    storedAuditSubject.FrequencyRecurrence = z.FrequencyRecurrence;
                    storedAuditSubject.OrganizationID = LoggedInOrganizationId;
                    base.Update(storedAuditSubject);
                    _IAuditSubjectQuestionRepository.AddUpdateAuditSubjectQuestion(z, LoggedInOrganizationId);
                }
                else
                {
                    z.AuditSubjectID = 0;
                    z.AuditSubjectQuestions.ToList().ForEach(x =>
                    {
                        x.AuditSubjectID = 0;
                        x.AuditSubjectQuestionID = 0;
                    });
                    base.Insert(z);
                }
            });
            this._unitOfWork.Save();
            foreach (var z in _auditsubject)
            {
                GenerateAuditSubjectReview(z, model.DueDate);
            }
        }

        private void GenerateAuditSubjectReview(AuditSubject z, DateTime duedate)
        {
            List<DateTime> occurences = CommonMethods.GenerateAllDateFromCronExpression(z.FrequencyRecurrence, DateTime.Now, duedate);

            List<AuditSubjectReview> storedallsubrev = _IAuditSubjectReviewRepository.GetAllSubjectReview(z.AuditSubjectID, z.OrganizationID??0);
            foreach (var sr in storedallsubrev)
            {
                bool isExist = occurences.Any(x => x == sr.PlannedAuditDate);
                if (!isExist)
                {
                    _IAuditSubjectReviewRepository.Delete(sr.AuditSubjectReviewID);
                }
            }
            this._unitOfWork.Save();

            foreach (DateTime auditdate in occurences)
            {
                bool isExist = storedallsubrev.Any(x=>x.PlannedAuditDate==auditdate);
                if (!isExist)
                {
                    AuditSubjectReviewViewModel subrev = new AuditSubjectReviewViewModel();
                    subrev.AuditID = z.AuditID;
                    subrev.SubjectID = z.AuditSubjectID;
                    subrev.PlannedAuditDate = auditdate;
                    subrev.AuditDate = null;
                    subrev.AuditorID = z.AuditorID;
                    subrev.AuditeeID = z.AuditeeID;
                    subrev.LocationID = z.Location;
                    List<AuditSubjectQuestion> listauditsubjectqus = _IAuditSubjectQuestionRepository.GetAuditSubjectQuestionBuSubjectId(z.AuditSubjectID);
                    foreach (var asubqus in listauditsubjectqus)
                    {
                        AuditSubjectReviewQuestionViewModel asubqusres = new AuditSubjectReviewQuestionViewModel();
                        asubqusres.AuditSubjectQuestionID = asubqus.AuditSubjectQuestionID;
                        subrev.AuditSubjectQuestionResponses.Add(asubqusres);
                    }
                    subrev.Status = false;
                    _IAuditSubjectReviewRepository.AddUpdateAuditReview(subrev, 0, z.OrganizationID ?? 0);
                }
            }
        }

        public AuditSubjectViewModel GetAuditSubject(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var audsub = GetSingle(id, LoggedInOrganizationId);
            return Mapper.Map<AuditSubject, AuditSubjectViewModel>(audsub);
        }


        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
