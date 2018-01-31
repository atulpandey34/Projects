using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IDocumentFolderRoleRepository
    {
        IEnumerable<RiskManagement.Data.DocumentFolderRole> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        RiskManagement.Data.DocumentFolderRole GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void Add(RiskManagement.Data.DocumentFolderRole entity, int LoggedInUserId, int LoggedInOrganizationId);
        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
