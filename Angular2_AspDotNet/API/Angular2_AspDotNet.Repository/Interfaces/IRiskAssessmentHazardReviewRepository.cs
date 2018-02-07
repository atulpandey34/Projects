using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IRiskAssessmentHazardReviewRepository
    {
        IEnumerable<RiskManagement.Data.RiskAssessmentHazardReview> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.RiskAssessmentHazardReview entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.RiskAssessmentHazardReview GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.RiskAssessmentHazardReview entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<RiskAssessmentHazardReview> GetSingleWithHazardId(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
