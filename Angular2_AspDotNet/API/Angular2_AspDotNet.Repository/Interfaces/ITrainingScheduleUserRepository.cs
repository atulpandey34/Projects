using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ITrainingScheduleUserRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.TrainingScheduleUser> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.TrainingScheduleUser entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.TrainingScheduleUser GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.TrainingScheduleUser entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<TraineeScheduleListByUserIdViewModel> GetTraineeScheduleListByUserId(int UserId, int OrganizationId);

        TrainingAssignmentAttemptViewModel GetTrainingScheduleAssignmentForUser(int trainingScheduleId, int assignmentId, bool retest, bool isAssignmentRequired, int userId, int OrganizationId);

        int SaveTrainingScheduleAssignmentForUser(TrainingAssignmentAttemptViewModel model, int OrganizationId);

    }
}
