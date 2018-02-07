using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IRiskAssessmentReviewRepository
    {
        IEnumerable<RiskAssessmentReview> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.RiskAssessmentReview entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.RiskAssessmentReview GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.RiskAssessmentReview entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
