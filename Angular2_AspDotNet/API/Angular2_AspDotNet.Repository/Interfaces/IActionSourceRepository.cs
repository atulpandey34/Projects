using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IActionSourceRepository
    {
        IEnumerable<RiskManagement.Data.ActionSource> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.ActionSource entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.ActionSource GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.ActionSource entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<RiskManagement.Models.ActionSourceModel> GetAllActionSource(int Userid, int OrganizationId);
    }
}
