using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IMasterDocumentTypeRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.MasterDocumentType> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        Angular2_AspDotNet.Data.MasterDocumentType GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        //void Update(Angular2_AspDotNet.Data.MasterDocumentType entity, int LoggedInUserId, int LoggedInOrganizationId);
        List<Angular2_AspDotNet.Models.MasterDocumentTypeViewModel> GetAllDocumentsType(int LoggedInUserId, int LoggedInOrganizationId);
        int AddMasterDocumentType(string documentTypeValue, int LoggedInUserId, int LoggedInOrganizationId);
        bool ValidateDocumentType(string documentType, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
