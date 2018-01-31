using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IUserScheduleResultRepository
    {
        IEnumerable<RiskManagement.Data.UserScheduleResult> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.UserScheduleResult entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.UserScheduleResult GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.UserScheduleResult entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateUserScheduleResult(UserScheduleResultViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
