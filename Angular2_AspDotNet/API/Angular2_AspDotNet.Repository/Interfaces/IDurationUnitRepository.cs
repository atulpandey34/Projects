using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IDurationUnitRepository
    {
        IEnumerable<RiskManagement.Data.DurationUnit> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.DurationUnit entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.DurationUnit GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.DurationUnit entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<DurationUnitModel> GetAllDurationUnit( int LoggedInUserId, int LoggedInOrganizationId);
    }
}
