using Angular2_AspDotNet.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IActionResponsiblePersonRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.ActionResponsiblePerson> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.ActionResponsiblePerson entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.ActionResponsiblePerson GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.ActionResponsiblePerson entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<ActionResponsiblePerson> GetByActionId(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
