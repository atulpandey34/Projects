using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IAgendaRepository
    {
        IEnumerable<RiskManagement.Data.Agendum> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Agendum entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Agendum GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Agendum entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
