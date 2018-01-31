using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ITrainingScheduleRoleRepository
    {
        IEnumerable<RiskManagement.Data.TrainingScheduleRole> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.TrainingScheduleRole entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.TrainingScheduleRole GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.TrainingScheduleRole entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
