using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IRoleResponsibilityVersionRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.RoleResponsibilityVersion> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        RolesResponsibilityViewModel Add(RolesResponsibilityViewModel entity, int userid, int LoggedInUserId, int LoggedInOrganizationId);
        List<RoleResponsibilityVersionSectionViewModel> GetRoleResponsibilityVersionList(int RoleResponsibilityID, int LoggedInUserId, int LoggedInOrganizationId);
        RolesResponsibilityViewModel GetRoleResponsibilityVerion(int RoleResponsibilityVersionID,int LoggedInUserId, int LoggedInOrganizationId);
        int UpdateRoleResponsibilityMaterial(RoleResponsibilityVersionSectionViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        int ApproveVersion(int RoleResponsibilityVersionID, int LoggedInUserId, int LoggedInOrganizationId);
        RoleResponsibilityVersion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
