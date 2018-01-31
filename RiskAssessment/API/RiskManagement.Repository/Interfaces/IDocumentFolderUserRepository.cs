using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IDocumentFolderUserRepository
    {
        IEnumerable<RiskManagement.Data.DocumentFolderUser> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        RiskManagement.Data.DocumentFolderUser GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void Add(RiskManagement.Data.DocumentFolderUser entity, int LoggedInUserId, int LoggedInOrganizationId);
        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
