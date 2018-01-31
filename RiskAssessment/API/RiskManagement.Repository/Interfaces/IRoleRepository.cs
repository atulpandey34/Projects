using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IRoleRepository
    {
        IEnumerable<Role> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        List<RoleViewModel> GetAllRoleList(int Userid, int OrganizationId);

        void Add(RiskManagement.Data.Role entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Role GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Role entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateRole(RoleViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
