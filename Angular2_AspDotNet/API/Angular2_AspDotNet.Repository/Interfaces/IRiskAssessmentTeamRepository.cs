using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IRiskAssessmentTeamRepository
    {
        IEnumerable<RiskManagement.Data.RiskAssessmentTeam> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.RiskAssessmentTeam entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.RiskAssessmentTeam GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.RiskAssessmentTeam entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<RiskAssessmentTeam> GetAllWithRiskAssessmentId(int RiskAssessmentId, int LoggedInUserId, int LoggedInOrganizationId);

    }
}
