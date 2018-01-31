using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace RiskManagement.Repository.Interfaces
{
    public interface IPerformanceReviewRepository
    {
        IEnumerable<RiskManagement.Data.PerformanceReview> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.PerformanceReview entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.PerformanceReview GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.PerformanceReview entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

      
    }
}
