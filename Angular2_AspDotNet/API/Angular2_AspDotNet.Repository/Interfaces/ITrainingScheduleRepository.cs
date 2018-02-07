using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ITrainingScheduleRepository
    {
        IEnumerable<RiskManagement.Data.TrainingSchedule> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.TrainingSchedule entity, int OrganizationId);

        RiskManagement.Data.TrainingSchedule GetSingle(int id, int OrganizationId);

        void Update(RiskManagement.Data.TrainingSchedule entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int OrganizationId);
        int AddUpdateTrainingSchedule(TrainingScheduleViewModel model, int OrganizationId);

        List<TrainingScheduleListViewModel> GetTrainingScheduleList(int TrainingScheduleId, int OrganizationId);
        List<TrainingScheduleUserListViewModel> GetTrainingScheduleUserList(int TrainingScheduleId, int OrganizationId);

        List<TrainingScheduleListByUserIdViewModel> GetTrainingScheduleListByUserId(int UserId, int OrganizationId);

        List<UserScheduleResultViewModel> GetTrainingScheduleUserResultList(int TrainingScheduleId, int OrganizationId);

        void UpdateTrainingScheduleStatus(int TrainingScheduleId, bool Status, int OrganizationId);

        TrainingAssignmentAttemptViewModel GetAssignmentForUser(int TrainingAssignmentAttemptId, int UserId, int OrganizationId);

        int SaveAssignmentScoreForUser(TrainingAssignmentAttemptViewModel model, int OrganizationId);
    }
}
