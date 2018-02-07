using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IMasterReviewFrequencyUnitRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.MasterReviewFrequencyUnit> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        bool ValidateReviewFrequencyUnit(string reviewFrequencyUnit, int LoggedInUserId, int LoggedInOrganizationId);
        Angular2_AspDotNet.Data.MasterReviewFrequencyUnit GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        //void Update(Angular2_AspDotNet.Data.MasterReviewFrequencyUnit entity, int LoggedInUserId, int LoggedInOrganizationId);
        List<Angular2_AspDotNet.Models.MasterReviewFrequencyUnitViewModel> GetMasterReviewFrequency( int LoggedInUserId, int LoggedInOrganizationId);
        int AddMasterReviewFrequencyUnit(string frequencyValue, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
