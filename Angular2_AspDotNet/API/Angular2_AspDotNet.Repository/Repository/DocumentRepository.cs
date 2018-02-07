using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
namespace Angular2_AspDotNet.Repository.Repository
{
    public class DocumentRepository : RepositoryBase<Angular2_AspDotNet.Data.Document>, IDocumentRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IDocumentVersionRepository _IDocumentVersionRepository = null;
        private Angular2_AspDotNetEntities db = null;

        public DocumentRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._IDocumentVersionRepository = new DocumentVersionRepository(unitOfWork);
            db = new Angular2_AspDotNetEntities();
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
        public Document GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return Get(x => x.DocumentID == id && x.OrganizationID == LoggedInOrganizationId);
        }
        public Document GetDocumentByFolder(int folderid, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetMany(x => x.FolderID == folderid && x.IsDeleted == false && x.OrganizationID == LoggedInOrganizationId).FirstOrDefault();
        }

        public DocumentViewModel GetSingleDocument(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var document = base.RepositoryContext.SP_GetDocumentById(id, LoggedInOrganizationId).FirstOrDefault();
            return Mapper.Map<SP_GetDocumentById_Result, DocumentViewModel>(document);
        }
        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = GetSingle(id, LoggedInUserId, LoggedInOrganizationId);
            data.IsDeleted = true;
            Update(data);
        }
        public DocumentViewModel AddUpdateDocument(DocumentViewModel model, int Userid, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Document document = null;
            DocumentVersion documentVersion = Mapper.Map<DocumentViewModel, DocumentVersion>(model);

            if (model.DocumentId == 0)
            {
                document = Mapper.Map<DocumentViewModel, Document>(model);
                document.OrganizationID = LoggedInOrganizationId;
                base.Insert(document);
                this._unitOfWork.Save();
                model.DocumentId = document.DocumentID;
                documentVersion.DocumentID = document.DocumentID;
                documentVersion.VersionNumber = 1;
                documentVersion.UploadedBy = Userid;
                documentVersion.ApprovedBy = Userid;
                documentVersion.UploadDate = DateTime.Now;
                documentVersion.OrganizationId = LoggedInOrganizationId;
                _IDocumentVersionRepository.Add(documentVersion,LoggedInUserId,LoggedInOrganizationId);
                model.DocumentVersionID = documentVersion.DocumentVersionID;
            }
            else
            {
                document = GetSingle(model.DocumentId, LoggedInUserId, LoggedInOrganizationId);
                document.DocumentName = model.DocumentName;
                document.DocumentType = model.DocumentType;
                document.FolderID = model.FolderID;
                document.ReviewFrequency = model.ReviewFrequency;
                document.ReviewFrequencyUnitID = model.ReviewFrequencyUnitID;
                document.DocumentPathType = model.DocumentPathType;
                base.Update(document);
                documentVersion.DocumentID = model.DocumentId;
                documentVersion.UploadedBy = Userid;
                documentVersion.ApprovedBy = Userid;
                documentVersion.VersionNumber = model.VersionNumber;
                documentVersion.ExternalLink = model.ExternalLink;
                documentVersion.SummaryOfChanges = model.SummaryOfChanges;
                documentVersion.UploadDate = DateTime.Now;
                documentVersion.OrganizationId = LoggedInOrganizationId;
                _IDocumentVersionRepository.Add(documentVersion, LoggedInUserId, LoggedInOrganizationId);
                model.DocumentVersionID = documentVersion.DocumentVersionID;
            }
            this._unitOfWork.Save();
            return model;
        }
        public void DeleteDocument(int documentid, int LoggedInUserId, int LoggedInOrganizationId)
        {
            this.Delete(documentid, LoggedInUserId, LoggedInOrganizationId);
            _IDocumentVersionRepository.DeleteByDocumentId(documentid, LoggedInUserId, LoggedInOrganizationId);
            this._unitOfWork.Save();
        }

        public DocumentListViewResult GetDocumentListData(DocumentListFilterModel filter, int UserId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            DocumentListViewResult list = new DocumentListViewResult();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetDocumentList(
                filter.PageNo, filter.PageSize, filter.SortColumn,
                filter.SortOrder, filter.DocumentName, filter.UploadBy, filter.Version, filter.Review
                , filter.Type, filter.FolderName, UserId,
              LoggedInOrganizationId,  totalRecords).ToList();
            list.DocumentListResult = Mapper.Map<List<SP_GetDocumentList_Result>, List<DocumentListResult>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
    }
}
