using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IMasterDocumentTypeRepository
    {
        IEnumerable<RiskManagement.Data.MasterDocumentType> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        RiskManagement.Data.MasterDocumentType GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        //void Update(RiskManagement.Data.MasterDocumentType entity, int LoggedInUserId, int LoggedInOrganizationId);
        List<RiskManagement.Models.MasterDocumentTypeViewModel> GetAllDocumentsType(int LoggedInUserId, int LoggedInOrganizationId);
        int AddMasterDocumentType(string documentTypeValue, int LoggedInUserId, int LoggedInOrganizationId);
        bool ValidateDocumentType(string documentType, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
