using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IRiskAssessmentHazardRepository
    {
        IEnumerable<RiskManagement.Data.RiskAssessmentHazard> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.RiskAssessmentHazard entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.RiskAssessmentHazard GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.RiskAssessmentHazard entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<RiskAssessmentHazard> GetAllWithRiskAssessmentId(int RiskAssessmentId, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
