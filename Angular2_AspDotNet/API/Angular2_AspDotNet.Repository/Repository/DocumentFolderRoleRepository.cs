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
    public class DocumentFolderRoleRepository : RepositoryBase<RiskManagement.Data.DocumentFolderRole>, IDocumentFolderRoleRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public DocumentFolderRoleRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public IEnumerable<DocumentFolderRole> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationId == LoggedInOrganizationId);
        }
        public DocumentFolderRole GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return Get(x => x.DocumentFolderRoleID == id && x.OrganizationId == LoggedInOrganizationId);
        }

        public void Add(RiskManagement.Data.DocumentFolderRole entity, int LoggedInUserId, int LoggedInOrganizationId)
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
