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
    public class AssignmentQuestionOptionRepository : RepositoryBase<RiskManagement.Data.AssignmentQuestionOption>, IAssignmentQuestionOptionRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public AssignmentQuestionOptionRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.AssignmentQuestionOption entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<AssignmentQuestionOption> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public List<AssignmentQuestionOption> GetWithQuestionId(int QuestionId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.QuestionID == QuestionId && x.OrganizationId == LoggedInOrganizationId).ToList();
        }

        public AssignmentQuestionOption GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.QuestionOptionID == id && x.OrganizationId == LoggedInOrganizationId);
        }


        public void Update(AssignmentQuestionOption entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}

