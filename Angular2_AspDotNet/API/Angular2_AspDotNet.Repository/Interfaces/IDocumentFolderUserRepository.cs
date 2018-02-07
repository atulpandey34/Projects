using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IDocumentFolderUserRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.DocumentFolderUser> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        Angular2_AspDotNet.Data.DocumentFolderUser GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void Add(Angular2_AspDotNet.Data.DocumentFolderUser entity, int LoggedInUserId, int LoggedInOrganizationId);
        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
