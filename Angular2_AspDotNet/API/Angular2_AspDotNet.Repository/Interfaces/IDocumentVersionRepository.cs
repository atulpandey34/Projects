using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IDocumentVersionRepository
    {
        Angular2_AspDotNet.Data.DocumentVersion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void Add(Angular2_AspDotNet.Data.DocumentVersion entity, int LoggedInUserId, int LoggedInOrganizationId);
        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void DeleteDocumentVersion(int documentVersionId, int LoggedInUserId, int LoggedInOrganizationId);
        void DeleteByDocumentId(int documentid, int LoggedInUserId, int LoggedInOrganizationId);
        List<DocumentVersionViewModel> GetDocumentVersionList(int DocumentId, int LoggedInUserId, int LoggedInOrganizationId);
        int UpdateDocumentMaterial(DocumentVersionViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
}
}
