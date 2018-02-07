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
    public class DocumentFolderUserRepository : RepositoryBase<Angular2_AspDotNet.Data.DocumentFolderUser>, IDocumentFolderUserRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public DocumentFolderUserRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
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

        public void Add(Angular2_AspDotNet.Data.DocumentFolderUser entity, int LoggedInUserId, int LoggedInOrganizationId)
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
