using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ITrainingScheduleRoleRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.TrainingScheduleRole> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.TrainingScheduleRole entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.TrainingScheduleRole GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.TrainingScheduleRole entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
