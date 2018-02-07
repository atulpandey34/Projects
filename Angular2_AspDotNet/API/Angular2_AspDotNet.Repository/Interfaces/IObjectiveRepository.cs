using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IObjectiveRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.Objective> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.Objective entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.Objective GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Objective entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<string> GetAllTextWithCreatedDate(int revieweeId, DateTime? createdDate, int organizationid);
    }
}
