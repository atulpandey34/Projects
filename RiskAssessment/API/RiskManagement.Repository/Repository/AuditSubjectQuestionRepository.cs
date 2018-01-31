﻿using AutoMapper;
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
    public class AuditSubjectQuestionRepository : RepositoryBase<RiskManagement.Data.AuditSubjectQuestion>, IAuditSubjectQuestionRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        
        public AuditSubjectQuestionRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
           
        }

        public AuditSubjectQuestion GetSingle(int id)
        {
            return Get(x => x.AuditSubjectQuestionID == id && x.IsDeleted == false);
        }

        public List<AuditSubjectQuestion> GetAllSubjectQuestion(int auditsubjectidid)
        {
            return GetAll(x => x.AuditSubjectID == auditsubjectidid && x.IsDeleted==false);
        }

        public List<AuditSubjectQuestion> GetAuditSubjectQuestionBuSubjectId(int subjectid)
        {
            return GetMany(x => x.AuditSubjectID == subjectid && x.IsDeleted == false).ToList();
        }

        public void AddUpdateAuditSubjectQuestion(AuditSubject model, int LoggedInOrganizationId)
        {
            List<AuditSubjectQuestion> storeAuditSubjectQus = this.GetAllSubjectQuestion(model.AuditSubjectID);
            foreach (var saudsubqus in storeAuditSubjectQus)
            {
                bool isExist = model.AuditSubjectQuestions.Any(x => x.AuditSubjectQuestionID == saudsubqus.AuditSubjectQuestionID);
                if (!isExist)
                {
                    saudsubqus.IsDeleted = true;
                    base.Update(saudsubqus);
                }
            }

            model.AuditSubjectQuestions.ToList().ForEach(x=> {
                if (x.AuditSubjectQuestionID == 0)
                {
                    x.AuditSubjectID = model.AuditSubjectID;
                    base.Insert(x);
                }
            });
            this._unitOfWork.Save();
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
