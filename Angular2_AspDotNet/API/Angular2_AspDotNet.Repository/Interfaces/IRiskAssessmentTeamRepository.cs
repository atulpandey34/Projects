using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IRiskAssessmentTeamRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.RiskAssessmentTeam> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.RiskAssessmentTeam entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.RiskAssessmentTeam GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.RiskAssessmentTeam entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<RiskAssessmentTeam> GetAllWithRiskAssessmentId(int RiskAssessmentId, int LoggedInUserId, int LoggedInOrganizationId);

    }
}
