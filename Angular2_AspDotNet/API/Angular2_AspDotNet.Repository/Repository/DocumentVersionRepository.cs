using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
namespace RiskManagement.Repository.Repository
{
    public class DocumentVersionRepository : RepositoryBase<RiskManagement.Data.DocumentVersion>, IDocumentVersionRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public DocumentVersionRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
        public DocumentVersion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return Get(x => x.DocumentID == id && x.OrganizationId == LoggedInOrganizationId);
        }

        public void Add(RiskManagement.Data.DocumentVersion entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }
        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = GetSingle(id, LoggedInUserId, LoggedInOrganizationId);
            data.IsDeleted = true;
            Update(data);
        }

        public void DeleteDocumentVersion(int documentVersionId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            this.Delete(documentVersionId, LoggedInUserId, LoggedInOrganizationId);
            this._unitOfWork.Save();
        }

        public void DeleteByDocumentId(int documentid, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var documentversion = base.GetMany(x => x.DocumentID == documentid && x.OrganizationId == LoggedInOrganizationId).ToList();
            foreach (var dv in documentversion)
            {
                dv.IsDeleted = true;
                Update(dv);
            }
        }
        public IEnumerable<DocumentVersion> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }
        public List<DocumentVersionViewModel> GetDocumentVersionList(int DocumentId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var list = base.RepositoryContext.SP_GetDocumentVersionList(DocumentId, LoggedInOrganizationId).ToList();
            return Mapper.Map<List<SP_GetDocumentVersionList_Result>, List<DocumentVersionViewModel>>(list);
        }
        public int UpdateDocumentMaterial(DocumentVersionViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            DocumentVersion docVersion = Mapper.Map<DocumentVersionViewModel, DocumentVersion>(model);
            docVersion = GetSingle(model.DocumentVersionID, LoggedInUserId, LoggedInOrganizationId);
            docVersion.FileName = model.FileName;
            docVersion.FilePath = model.FilePath;
            base.Update(docVersion);
            this._unitOfWork.Save();
            return docVersion.DocumentVersionID;
        }
    }
}
