using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IDocumentFolderRoleRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.DocumentFolderRole> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        Angular2_AspDotNet.Data.DocumentFolderRole GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void Add(Angular2_AspDotNet.Data.DocumentFolderRole entity, int LoggedInUserId, int LoggedInOrganizationId);
        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
