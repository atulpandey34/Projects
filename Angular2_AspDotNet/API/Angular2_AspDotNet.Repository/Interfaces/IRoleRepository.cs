using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IRoleRepository
    {
        IEnumerable<Role> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        List<RoleViewModel> GetAllRoleList(int Userid, int OrganizationId);

        void Add(Angular2_AspDotNet.Data.Role entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.Role GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Role entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateRole(RoleViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
