using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IRiskAssessmentHazardMeasureRepository
    {
        IEnumerable<RiskManagement.Data.RiskAssessmentHazardMeasure> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.RiskAssessmentHazardMeasure entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.RiskAssessmentHazardMeasure GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.RiskAssessmentHazardMeasure entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<RiskAssessmentHazardMeasure> GetSingleWithHazardId(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
