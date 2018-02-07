using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IOrganizationRepository
    {
        IEnumerable<RiskManagement.Data.Organization> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        RiskManagement.Data.Organization GetSingle(int id);
        void Add(RiskManagement.Data.Organization entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Organization GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Organization entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void DeleteOrganization(int organizationid, int LoggedInUserId);
        List<OrganizationViewModel> GetAllOrganizationist(int Userid, int OrganizationId);
        OrganizationListViewResult GetOrganizationListData(OrganizationListFilterModel filter, int LoggedInUserId);
        OrganizationViewModel AddUpdateOrganization(OrganizationViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        OrganizationViewModel GetSingleOrganization(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void UpdateOrganizationMaterial(OrganizationViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
