using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class TrainingScheduleViewModel
    {
        public TrainingScheduleViewModel()
        {
            this.UserList = new List<TrainingScheduleUserViewModel>();
            this.RoleList = new List<TrainingScheduleRoleViewModel>();
        }
        public int TrainingScheduleId { get; set; }
        public int TrainingId { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<int> Trainer { get; set; }

        public Nullable<bool> Completed { get; set; }

        public List<TrainingScheduleUserViewModel> UserList { get; set; }
        public List<TrainingScheduleRoleViewModel> RoleList { get; set; }
    }
    public class TrainingScheduleUserViewModel
    {
        public int TrainingScheduleUserId { get; set; }
        public Nullable<int> TrainingScheduleId { get; set; }
        public Nullable<int> UserId { get; set; }
    }

    public class TrainingScheduleRoleViewModel
    {
        public int TrainingScheduleRoleId { get; set; }
        public Nullable<int> TrainingScheduleId { get; set; }
        public Nullable<int> RoleId { get; set; }
    }

    public class TrainingScheduleListViewModel
    {
        public int TrainingScheduleId { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Trainer { get; set; }
        public Nullable<int> UserCount { get; set; }
        public Nullable<int> RoleCount { get; set; }
        public string Status { get; set; }
    }
    public class TrainingScheduleListByUserIdViewModel
    {
        public int TrainingScheduleId { get; set; }
        public Nullable<int> TrainingId { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Trainer { get; set; }
        public Nullable<int> UserCount { get; set; }
        public Nullable<int> RoleCount { get; set; }
        public string TrainingNeed { get; set; }
        public Nullable<int> MaterialCount { get; set; }
        public Nullable<bool> Completed { get; set; }
    }
    public class TrainingScheduleUserListViewModel
    {
        public int TrainingScheduleUserId { get; set; }
        public Nullable<int> UserId { get; set; }
        public string UserName { get; set; }
        public string Attended { get; set; }
        public string Signed { get; set; }
        public string TrainerComment { get; set; }
        public Nullable<int> Status { get; set; }
        public string TraineeComment { get; set; }
        public Nullable<int> UserRating { get; set; }
    }


    public class UserScheduleResultViewModel
    {
        public int UserScheduleResultId { get; set; }
        public Nullable<int> TrainingId { get; set; }
        public Nullable<int> TrainingScheduleId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<bool> IsUserAttendedTraining { get; set; }
        public string ReviewerComment { get; set; }
        public Nullable<int> Status { get; set; }

        public string UserName { get; set; }

        public Nullable<int> TrainingAssignmentAttemptId { get; set; }
        public string UserComment { get; set; }
        public Nullable<int> UserRating { get; set; }
    }

    public class TraineeScheduleListByUserIdViewModel
    {
        public int TrainingScheduleUserId { get; set; }
        public Nullable<int> TrainingScheduleId { get; set; }
        public Nullable<int> TrainingId { get; set; }
        public string TrainingNeed { get; set; }
        public Nullable<int> AssignmentId { get; set; }
        public Nullable<int> TrainerId { get; set; }
        public string Trainer { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public Nullable<bool> Retest { get; set; }
        public Nullable<int> Score { get; set; }
        public Nullable<bool> IsAssignmentRequired { get; set; }
    }

    public class AssignmentQuestionsWithOptionViewModel
    {
        public AssignmentQuestionsWithOptionViewModel()
        {
            this.AssignmentQuestionOptions = new List<AssignmentQuestionOptionViewModel>();
        }

        public int AssignmentId { get; set; }
        public int QuestionId { get; set; }
        public string QuestionText { get; set; }
        public int QuestionType { get; set; }
        public int Score { get; set; }

        public List<AssignmentQuestionOptionViewModel> AssignmentQuestionOptions { get; set; }
    }

    public class TrainingAssignmentAttemptViewModel
    {
        public TrainingAssignmentAttemptViewModel()
        {
            this.TrainingAssignmentAnswers = new List<TrainingAssignmentAnswerViewModel>();
        }

        public int TrainingAssignmentAttemptId { get; set; }
        public int TrainingScheduleId { get; set; }
        public int AssignmentId { get; set; }
        public int UserId { get; set; }
        public string CommentText { get; set; }
        public Nullable<int> Rating { get; set; }
        public Nullable<int> Score { get; set; }
        public Nullable<System.DateTime> AttemptDate { get; set; }
        public Nullable<bool> Retest { get; set; }

        public List<TrainingAssignmentAnswerViewModel> TrainingAssignmentAnswers { get; set; }
    }

    public class TrainingAssignmentAnswerViewModel
    {
        public TrainingAssignmentAnswerViewModel()
        {
            this.AssignmentQuestionOptions = new List<AssignmentQuestionOptionViewModel>();
        }
        public int TrainingAssignmentAnswerId { get; set; }
        public int TrainingAssignmentAttemptId { get; set; }
        public int QuestionId { get; set; }
        public string QuestionText { get; set; }
        public Nullable<int> QuestionType { get; set; }
        public Nullable<int> QuestionScore { get; set; }
        public string AnswerText { get; set; }
        public Nullable<int> QuestionOptionId { get; set; }
        public Nullable<bool> IsCorrectAnswer { get; set; }

        public List<AssignmentQuestionOptionViewModel> AssignmentQuestionOptions { get; set; }
    }

    public class ReportViewModel<T>
    {
        public List<T> ReportModel { get; set; }
        public int TotalRecords { get; set; }
    }

    public class TrainingReportViewModel
    {
        public int TrainingId { get; set; }
        public int TrainingScheduleId { get; set; }
        public string TrainingNeed { get; set; }
        public int TraineeId { get; set; }
        public string TraineeName { get; set; }
        public string TraineeComment { get; set; }
        public int TrainerId { get; set; }
        public string TrainerName { get; set; }
        public string TrainerComment { get; set; }
        public Nullable<bool> IsUserAttendedTraining { get; set; }
        public string AttemptDate { get; set; }
        public Nullable<int> Score { get; set; }
        public Nullable<int> TotalScore { get; set; }
    }

    public class TrainerReportViewModel
    {
        public int TrainingId { get; set; }
        public string TrainingNeed { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public Nullable<int> UsersAttended { get; set; }
        public Nullable<int> AverageRating { get; set; }
    }

    public class TrainingUserReportViewModel
    {
        public int TrainingId { get; set; }
        public int TrainingScheduleId { get; set; }
        public string StartDate { get; set; }
        public string TrainingNeed { get; set; }
        public int TraineeId { get; set; }
        public string TraineeName { get; set; }
        public int TrainerId { get; set; }
        public string TrainerName { get; set; }
        public string TrainerComment { get; set; }
        public Nullable<bool> IsUserAttendedTraining { get; set; }
        public Nullable<int> Score { get; set; }
        public Nullable<int> TotalScore { get; set; }
    }
}
