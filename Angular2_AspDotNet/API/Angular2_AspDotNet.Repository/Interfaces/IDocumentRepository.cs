using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IDocumentRepository
    {
        RiskManagement.Data.Document GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        RiskManagement.Data.Document GetDocumentByFolder(int folderid, int LoggedInUserId, int LoggedInOrganizationId);
        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void DeleteDocument(int documentid, int LoggedInUserId, int LoggedInOrganizationId);
        DocumentListViewResult GetDocumentListData(DocumentListFilterModel filter, int UserId, int LoggedInUserId, int LoggedInOrganizationId);
        DocumentViewModel AddUpdateDocument(DocumentViewModel model, int Userid, int LoggedInUserId, int LoggedInOrganizationId);
        DocumentViewModel GetSingleDocument(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
