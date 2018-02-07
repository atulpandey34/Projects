using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IMasterRoleSectionRepository
    {
        bool Validate(string sectionName, int LoggedInUserId, int LoggedInOrganizationId);
        IEnumerable<Angular2_AspDotNet.Data.MasterRoleSection> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        Angular2_AspDotNet.Data.MasterRoleSection GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<Angular2_AspDotNet.Models.MasterRoleSectionViewModel> GetAllMasterRoleSection( int LoggedInUserId, int LoggedInOrganizationId);

        int AddMasterRoleSection(string sectionName, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
