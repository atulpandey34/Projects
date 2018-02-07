using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using AutoMapper;
using RiskManagement.Data;
using RiskManagement.Data.Repository;

namespace RiskManagement.Repository.Repository
{
    public class ActionCommentRepository : RepositoryBase<RiskManagement.Data.ActionComment>, IActionCommentRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IActionResponsiblePersonRepository _ActionResponsiblePersonRepository = null;


        public ActionCommentRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._ActionResponsiblePersonRepository = new ActionResponsiblePersonRepository(unitOfWork);
        }

        public void Add(Data.ActionComment entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);

        }

        public void Update(Data.ActionComment entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_DeleteAction(id, LoggedInOrganizationId);
        }


        public Data.ActionComment GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.ActionCommentID == id && x.OrganizationId == LoggedInOrganizationId);
        }



        public IEnumerable<Data.ActionComment> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x=>x.OrganizationId== LoggedInOrganizationId);
        }



        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
