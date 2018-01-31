using RiskManagement.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IActionResponsiblePersonRepository
    {
        IEnumerable<RiskManagement.Data.ActionResponsiblePerson> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.ActionResponsiblePerson entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.ActionResponsiblePerson GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.ActionResponsiblePerson entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<ActionResponsiblePerson> GetByActionId(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
