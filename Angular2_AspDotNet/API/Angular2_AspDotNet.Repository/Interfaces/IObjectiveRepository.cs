using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IObjectiveRepository
    {
        IEnumerable<RiskManagement.Data.Objective> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Objective entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Objective GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Objective entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<string> GetAllTextWithCreatedDate(int revieweeId, DateTime? createdDate, int organizationid);
    }
}
