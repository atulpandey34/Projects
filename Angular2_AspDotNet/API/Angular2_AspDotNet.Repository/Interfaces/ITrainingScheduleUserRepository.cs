using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ITrainingScheduleUserRepository
    {
        IEnumerable<RiskManagement.Data.TrainingScheduleUser> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.TrainingScheduleUser entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.TrainingScheduleUser GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.TrainingScheduleUser entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<TraineeScheduleListByUserIdViewModel> GetTraineeScheduleListByUserId(int UserId, int OrganizationId);

        TrainingAssignmentAttemptViewModel GetTrainingScheduleAssignmentForUser(int trainingScheduleId, int assignmentId, bool retest, bool isAssignmentRequired, int userId, int OrganizationId);

        int SaveTrainingScheduleAssignmentForUser(TrainingAssignmentAttemptViewModel model, int OrganizationId);

    }
}
