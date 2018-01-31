using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IMasterRoleSectionRepository
    {
        bool Validate(string sectionName, int LoggedInUserId, int LoggedInOrganizationId);
        IEnumerable<RiskManagement.Data.MasterRoleSection> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        RiskManagement.Data.MasterRoleSection GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<RiskManagement.Models.MasterRoleSectionViewModel> GetAllMasterRoleSection( int LoggedInUserId, int LoggedInOrganizationId);

        int AddMasterRoleSection(string sectionName, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
