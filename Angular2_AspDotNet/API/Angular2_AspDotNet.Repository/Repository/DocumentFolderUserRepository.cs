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

namespace RiskManagement.Repository.Repository
{
    public class DocumentFolderUserRepository : RepositoryBase<RiskManagement.Data.DocumentFolderUser>, IDocumentFolderUserRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public DocumentFolderUserRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public  IEnumerable<DocumentFolderUser> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationId == LoggedInOrganizationId);
        }
        public DocumentFolderUser GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return Get(x => x.DocumentFolderUserID == id && x.OrganizationId == LoggedInOrganizationId);
        }

        public void Add(RiskManagement.Data.DocumentFolderUser entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);

        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
