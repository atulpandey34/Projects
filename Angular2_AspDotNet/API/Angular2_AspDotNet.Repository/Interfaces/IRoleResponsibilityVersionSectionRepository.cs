using RiskManagement.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IRoleResponsibilityVersionSectionRepository
    {
        IEnumerable<RiskManagement.Data.RoleResponsibilityVersionSection> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        void Add(RiskManagement.Models.RoleResponsibilityVersionSectionViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
