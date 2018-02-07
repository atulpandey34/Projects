using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IActionSourceRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.ActionSource> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.ActionSource entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.ActionSource GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.ActionSource entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<Angular2_AspDotNet.Models.ActionSourceModel> GetAllActionSource(int Userid, int OrganizationId);
    }
}
