using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IMasterReviewFrequencyUnitRepository
    {
        IEnumerable<RiskManagement.Data.MasterReviewFrequencyUnit> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        bool ValidateReviewFrequencyUnit(string reviewFrequencyUnit, int LoggedInUserId, int LoggedInOrganizationId);
        RiskManagement.Data.MasterReviewFrequencyUnit GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        //void Update(RiskManagement.Data.MasterReviewFrequencyUnit entity, int LoggedInUserId, int LoggedInOrganizationId);
        List<RiskManagement.Models.MasterReviewFrequencyUnitViewModel> GetMasterReviewFrequency( int LoggedInUserId, int LoggedInOrganizationId);
        int AddMasterReviewFrequencyUnit(string frequencyValue, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
