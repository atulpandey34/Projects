using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
using System.Data.Entity;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class DocumentFolderRoleRepository : RepositoryBase<Angular2_AspDotNet.Data.DocumentFolderRole>, IDocumentFolderRoleRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public DocumentFolderRoleRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
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

        public void Add(Angular2_AspDotNet.Data.DocumentFolderRole entity, int LoggedInUserId, int LoggedInOrganizationId)
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
