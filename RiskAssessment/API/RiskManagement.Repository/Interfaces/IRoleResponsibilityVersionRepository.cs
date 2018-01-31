using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IRoleResponsibilityVersionRepository
    {
        IEnumerable<RiskManagement.Data.RoleResponsibilityVersion> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        RolesResponsibilityViewModel Add(RolesResponsibilityViewModel entity, int userid, int LoggedInUserId, int LoggedInOrganizationId);
        List<RoleResponsibilityVersionSectionViewModel> GetRoleResponsibilityVersionList(int RoleResponsibilityID, int LoggedInUserId, int LoggedInOrganizationId);
        RolesResponsibilityViewModel GetRoleResponsibilityVerion(int RoleResponsibilityVersionID,int LoggedInUserId, int LoggedInOrganizationId);
        int UpdateRoleResponsibilityMaterial(RoleResponsibilityVersionSectionViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        int ApproveVersion(int RoleResponsibilityVersionID, int LoggedInUserId, int LoggedInOrganizationId);
        RoleResponsibilityVersion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
