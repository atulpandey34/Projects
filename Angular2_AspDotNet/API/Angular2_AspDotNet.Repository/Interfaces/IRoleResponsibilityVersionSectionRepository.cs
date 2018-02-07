using Angular2_AspDotNet.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IRoleResponsibilityVersionSectionRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.RoleResponsibilityVersionSection> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        void Add(Angular2_AspDotNet.Models.RoleResponsibilityVersionSectionViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
