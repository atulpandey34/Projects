using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IDocumentVersionRepository
    {
        RiskManagement.Data.DocumentVersion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void Add(RiskManagement.Data.DocumentVersion entity, int LoggedInUserId, int LoggedInOrganizationId);
        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void DeleteDocumentVersion(int documentVersionId, int LoggedInUserId, int LoggedInOrganizationId);
        void DeleteByDocumentId(int documentid, int LoggedInUserId, int LoggedInOrganizationId);
        List<DocumentVersionViewModel> GetDocumentVersionList(int DocumentId, int LoggedInUserId, int LoggedInOrganizationId);
        int UpdateDocumentMaterial(DocumentVersionViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
}
}
