using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IRoleResponsibilityRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.RoleResponsibility> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        void Add(Angular2_AspDotNet.Data.RoleResponsibility entity, int LoggedInUserId, int LoggedInOrganizationId);
        RolesResponsibilityViewModel AddUpdateRoleResponsibility(RolesResponsibilityViewModel model, int UserId, int OrganizationId);
        RolesResponsibilityViewModel GetRoleResponsibility(int roleid, int LoggedInOrganizationId);

        List<GetRoleResponsibilityViewModel> GetRolesResponsibility(int ReviewwUserId, int LoggedInUserId, int LoggedInOrganizationId);
        void SetRoleResponsibilityOfPerformanceReview(int RevieweeId, int PerformanceReviewId, int LoggedInOrganizationId);

        List<GetRoleResponsibilityViewModel> GetRoleResponsibilityWithVersionId(int RoleResponsibilityVersionId, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
