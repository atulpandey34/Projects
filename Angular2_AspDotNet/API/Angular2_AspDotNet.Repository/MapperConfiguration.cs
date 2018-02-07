using AutoMapper;
using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;

namespace RiskMgmtRepository.Services
{
    public class MapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(x => x.AddProfile(new MapperProfileConfiguartion()));
        }
    }
    public class MapperProfileConfiguartion : Profile
    {
        public MapperProfileConfiguartion()
        {
            CreateMap<User, UserModel>();
            CreateMap<Event, EventDataModel>();
            CreateMap<EventDataModel, Event>();
            CreateMap<EventAttendee, EventAttendeeDataModel>();
            CreateMap<EventAttendeeDataModel, EventAttendee>();
            CreateMap<Action, ActionDataModel>();
            CreateMap<ActionDataModel, Action>();
            CreateMap<ActionResponsiblePerson, ActionResponsiblePersonDataModel>();
            CreateMap<ActionResponsiblePersonDataModel, ActionResponsiblePerson>();
            CreateMap<Agendum, AgendaDataModel>();
            CreateMap<AgendaDataModel, Agendum>();

            CreateMap<TitleModel, Title>();
            CreateMap<Title, TitleModel>();

            CreateMap<SubTitleModel, SubTitle>();
            CreateMap<SubTitle, SubTitleModel>();

            CreateMap<LocationModel, Location>();
            CreateMap<Location, LocationModel>();

            CreateMap<EventActionStatusModel, EventActionStatu>();
            CreateMap<EventActionStatu, EventActionStatusModel>();

            CreateMap<CategoryModel, Category>();
            CreateMap<Category, CategoryModel>();

            CreateMap<ActionSourceModel, ActionSource>();
            CreateMap<ActionSource, ActionSourceModel>();

            CreateMap<SP_GetActionComments_Result, ActionCommentsListModel>();
            CreateMap<ActionCommentsListModel, SP_GetActionComments_Result>();

            CreateMap<MeetingListModel, SP_GetMeetingList_Result>();
            CreateMap<SP_GetMeetingList_Result, MeetingListModel>();

            CreateMap<SP_GetEventActionListV1_Result, ActionList>();
            CreateMap<ActionList, SP_GetEventActionListV1_Result>();

            CreateMap<SecurityQuestion, SecurityQuestionModel>();
            CreateMap<SecurityQuestionModel, SecurityQuestion>();

            CreateMap<RoleViewModel, Role>();
            CreateMap<Role, RoleViewModel>();

            CreateMap<User, UserViewModel>();
            CreateMap<UserViewModel, User>();

            CreateMap<SP_GetPerformanceReviewMeetingList_Result, MeetingListModel>();
            CreateMap<MeetingListModel, SP_GetPerformanceReviewMeetingList_Result>();

            CreateMap<OrganizationViewModel, Organization>();
            CreateMap<Organization, OrganizationViewModel>();
            CreateMap<sp_GetUserList_Result, UserViewListModel>();
            CreateMap<UserViewListModel, sp_GetUserList_Result>();


            CreateMap<SecurityQustionOfUserModel, SP_GetSecurityQustionOfUser_Result>();
            CreateMap<SP_GetSecurityQustionOfUser_Result, SecurityQustionOfUserModel>();

            CreateMap<CorrectiveAction, CorrectiveActionModel>();
            CreateMap<CorrectiveActionModel, CorrectiveAction>();

            CreateMap<CorrectiveAction, CorrectiveActionDataModel>();
            CreateMap<CorrectiveActionDataModel, CorrectiveAction>();

            CreateMap<SP_GetCorrectiveActionList_Result, CorrectiveActionListModel>();
            CreateMap<CorrectiveActionListModel, SP_GetCorrectiveActionList_Result>();

            CreateMap<Hazard, HazardModel>();
            CreateMap<HazardModel, Hazard>();

            CreateMap<DurationUnitModel, DurationUnit>();
            CreateMap<DurationUnit, DurationUnitModel>();

            CreateMap<MonitoringMethodModel, MonitoringMethod>();
            CreateMap<MonitoringMethod, MonitoringMethodModel>();

            CreateMap<RiskAssessmentViewModel, RiskAssessment>();
            CreateMap<RiskAssessment, RiskAssessmentViewModel>();

            CreateMap<RiskAssessmentTeamViewModel, RiskAssessmentTeam>();
            CreateMap<RiskAssessmentTeam, RiskAssessmentTeamViewModel>();

            CreateMap<RiskAssessmentHazardViewModel, RiskAssessmentHazard>();
            CreateMap<RiskAssessmentHazard, RiskAssessmentHazardViewModel>();

            CreateMap<RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardMeasure>();
            CreateMap<RiskAssessmentHazardMeasure, RiskAssessmentHazardMeasureViewModel>();

            CreateMap<RiskAssessmentHazardReviewViewModel, RiskAssessmentHazardReview>();
            CreateMap<RiskAssessmentHazardReview, RiskAssessmentHazardReviewViewModel>();

            CreateMap<SP_GetRiskAssessmentHazardList_Result, HazardListModel>();
            CreateMap<HazardListModel, SP_GetRiskAssessmentHazardList_Result>();

            CreateMap<SP_GetRiskAssessmentList_Result, RiskAssessmentListResult>();
            CreateMap<RiskAssessmentListResult, SP_GetRiskAssessmentList_Result>();

            CreateMap<SP_GetSignedUserList_Result, SignedUserList>();
            CreateMap<SignedUserList, SP_GetSignedUserList_Result>();

            CreateMap<AssignmentListFilterModel, Assignment>();
            CreateMap<Assignment, AssignmentListFilterModel>();


            CreateMap<AssignmentListQuestionFilterModel, AssignmentQuestion>();
            CreateMap<AssignmentQuestion, AssignmentListQuestionFilterModel>();

            CreateMap<TrainingViewModel, Training>();
            CreateMap<Training, TrainingViewModel>();

            CreateMap<TrainingMaterialViewModel, TrainingMaterial>();
            CreateMap<TrainingMaterial, TrainingMaterialViewModel>();


            CreateMap<TrainingScheduleViewModel, TrainingSchedule>();
            CreateMap<TrainingSchedule, TrainingScheduleViewModel>();

            CreateMap<TrainingScheduleUserViewModel, TrainingScheduleUser>();
            CreateMap<TrainingScheduleUser, TrainingScheduleUserViewModel>();

            CreateMap<TrainingScheduleRoleViewModel, TrainingScheduleRole>();
            CreateMap<TrainingScheduleRole, TrainingScheduleRoleViewModel>();

            CreateMap<TrainingScheduleListViewModel, SP_GetTrainingScheduleList_Result>();
            CreateMap<SP_GetTrainingScheduleList_Result, TrainingScheduleListViewModel>();

            CreateMap<SP_GetTrainingScheduleUserList_Result, TrainingScheduleUserListViewModel>();
            CreateMap<TrainingScheduleUserListViewModel, SP_GetTrainingScheduleUserList_Result>();

            CreateMap<SP_GetTrainingList_Result, TrainingList>();
            CreateMap<TrainingList, SP_GetTrainingList_Result>();

            CreateMap<SP_GetAssignmentList_Result, AssignmentListResult>();
            CreateMap<AssignmentListResult, SP_GetAssignmentList_Result>();

            CreateMap<SP_GetTrainingScheduleListByUserId_Result, TrainingScheduleListByUserIdViewModel>();
            CreateMap<TrainingScheduleListByUserIdViewModel, SP_GetTrainingScheduleListByUserId_Result>();

            CreateMap<UserScheduleResultViewModel, UserScheduleResult>();
            CreateMap<UserScheduleResult, UserScheduleResultViewModel>();

            CreateMap<SP_GetTrainingScheduleUserResultList_Result, UserScheduleResultViewModel>();
            CreateMap<UserScheduleResultViewModel, SP_GetTrainingScheduleUserResultList_Result>();

            CreateMap<SP_GetTraineeScheduleListByUserId_Result, TraineeScheduleListByUserIdViewModel>();
            CreateMap<TraineeScheduleListByUserIdViewModel, SP_GetTraineeScheduleListByUserId_Result>();

            CreateMap<AssignmentQuestion, AssignmentQuestionsWithOptionViewModel>();
            CreateMap<AssignmentQuestionsWithOptionViewModel, AssignmentQuestion>();

            CreateMap<AssignmentQuestion, AssignmentQuestionViewModel>();
            CreateMap<AssignmentQuestionViewModel, AssignmentQuestion>();

            CreateMap<AssignmentQuestionOption, AssignmentQuestionOptionViewModel>();
            CreateMap<AssignmentQuestionOptionViewModel, AssignmentQuestionOption>();

            CreateMap<TrainingAssignmentAnswer, TrainingAssignmentAnswerViewModel>();
            CreateMap<TrainingAssignmentAnswerViewModel, TrainingAssignmentAnswer>();

            CreateMap<AssignmentQuestion, TrainingAssignmentAnswerViewModel>();
            CreateMap<TrainingAssignmentAnswerViewModel, AssignmentQuestion>();

            CreateMap<TrainingAssignmentAttempt, TrainingAssignmentAttemptViewModel>();
            CreateMap<TrainingAssignmentAttemptViewModel, TrainingAssignmentAttempt>();

            CreateMap<SP_GetTrainingReport_Result, TrainingReportViewModel>();
            CreateMap<TrainingReportViewModel, SP_GetTrainingReport_Result>();

            CreateMap<SP_GetTrainingUserReport_Result, TrainingUserReportViewModel>();
            CreateMap<TrainingUserReportViewModel, SP_GetTrainingUserReport_Result>();

            CreateMap<SP_GetTrainerReport_Result, TrainerReportViewModel>();
            CreateMap<TrainerReportViewModel, SP_GetTrainerReport_Result>();

            CreateMap<DocumentListFilterModel, Document>();
            CreateMap<Document, DocumentListFilterModel>();

            CreateMap<SP_GetDocumentList_Result, DocumentListResult>();
            CreateMap<DocumentListResult, SP_GetDocumentList_Result>();

            CreateMap<MasterDocumentType, MasterDocumentTypeViewModel>();
            CreateMap<MasterDocumentTypeViewModel, MasterDocumentType>();

            CreateMap<Document, DocumentViewModel>();
            CreateMap<DocumentViewModel, Document>();

            CreateMap<DocumentVersion, DocumentViewModel>();
            CreateMap<DocumentViewModel, DocumentVersion>();

            CreateMap<SP_GetDocumentVersionList_Result, DocumentVersionViewModel>();
            CreateMap<DocumentVersionViewModel, SP_GetDocumentVersionList_Result>();

            CreateMap<MasterDocumentFolder, MasterDocumentFolderViewModel>();
            CreateMap<MasterDocumentFolderViewModel, MasterDocumentFolder>();

            CreateMap<MasterReviewFrequencyUnit, MasterReviewFrequencyUnitViewModel>();
            CreateMap<MasterReviewFrequencyUnitViewModel, MasterReviewFrequencyUnit>();

            CreateMap<SP_GetDocumentById_Result, DocumentViewModel>();
            CreateMap<DocumentViewModel, SP_GetDocumentById_Result>();

            CreateMap<DocumentVersionViewModel, DocumentVersion>();
            CreateMap<DocumentVersion, DocumentVersionViewModel>();

            CreateMap<SP_GetDocumentFolder_Result, MasterDocumentFolderListResult>();
            CreateMap<MasterDocumentFolderListResult, SP_GetDocumentFolder_Result>();

            CreateMap<FolderPopupViewModel, MasterDocumentFolder>();
            CreateMap<MasterDocumentFolder, FolderPopupViewModel>();

            CreateMap<DocumentFolderUserViewModel, DocumentFolderUser>();
            CreateMap<DocumentFolderUser, DocumentFolderUserViewModel>();

            CreateMap<DocumentFolderRoleViewModel, DocumentFolderRole>();
            CreateMap<DocumentFolderRole, DocumentFolderRoleViewModel>();

            CreateMap<MasterRoleSectionViewModel, MasterRoleSection>();
            CreateMap<MasterRoleSection, MasterRoleSectionViewModel>();

            CreateMap<RolesResponsibilityViewModel, RoleResponsibility>();
            CreateMap<RoleResponsibility, RolesResponsibilityViewModel>();

            CreateMap<RoleResponsibilityVersionSectionViewModel, Angular2_AspDotNet.Data.RoleResponsibilityVersionSection>();
            CreateMap<Angular2_AspDotNet.Data.RoleResponsibilityVersionSection, RoleResponsibilityVersionSectionViewModel>();

            CreateMap<RoleResponsibilityVersionSectionViewModel, RoleResponsibilityVersion>();
            CreateMap<RoleResponsibilityVersion, RoleResponsibilityVersionSectionViewModel>();

            CreateMap<GetUserWithRoleViewResult, SP_GetUserWithRole_Result>();
            CreateMap<SP_GetUserWithRole_Result, GetUserWithRoleViewResult>();

            CreateMap<Frequency, FrequencyViewModel>();
            CreateMap<FrequencyViewModel, Frequency>();

            CreateMap<Measure, MeasureViewModel>();
            CreateMap<MeasureViewModel, Measure>();

            CreateMap<MeasureColumn, MeasureColumnViewModel>();
            CreateMap<MeasureColumnViewModel, MeasureColumn>();

            CreateMap<MeasureObjective, MeasureObjectiveViewModel>();
            CreateMap<MeasureObjectiveViewModel, MeasureObjective>();

            CreateMap<MeasureColumnData, MeasureColumnDataViewModel>();
            CreateMap<MeasureColumnDataViewModel, MeasureColumnData>();

            CreateMap<SP_GetRoleResponsibilityVersionList_Result, RoleResponsibilityVersionSectionViewModel>();
            CreateMap<RoleResponsibilityVersionSectionViewModel, SP_GetRoleResponsibilityVersionList_Result>();


            CreateMap<Objective, ObjectiveViewModel>();
            CreateMap<ObjectiveViewModel, Objective>();

            CreateMap<SP_GetRoleResponsibility_Result, GetRoleResponsibilityViewModel>();
            CreateMap<GetRoleResponsibilityViewModel, SP_GetRoleResponsibility_Result>();

            CreateMap<SP_GetRoleResponsibilityWithVersionId_Result, GetRoleResponsibilityViewModel>();
            CreateMap<GetRoleResponsibilityViewModel, SP_GetRoleResponsibilityWithVersionId_Result>();

            CreateMap<MenuViewModel, Menu>();
            CreateMap<Menu, MenuViewModel>();
            CreateMap<SP_GetAllMenuListData_Result, GetAllMenuListDataViewResult>();
            CreateMap<GetAllMenuListDataViewResult, SP_GetAllMenuListData_Result>();

            CreateMap<RoleMenuMappingViewModel, RoleMenuMapping>();
            CreateMap<RoleMenuMapping, RoleMenuMappingViewModel>();

            CreateMap<SP_GetMenuByRoleId_Result, MenuViewModel>();
            CreateMap<MenuViewModel, SP_GetMenuByRoleId_Result>();

            CreateMap<SP_GetOrganizationList_Result, OrganizationListResult>();
            CreateMap<OrganizationListResult, SP_GetOrganizationList_Result>();

            CreateMap<Notification, NotificationViewModel>();
            CreateMap<NotificationViewModel, Notification>();
            CreateMap<SP_GetNotificationData_Result, NotificationViewModel>();
            CreateMap<NotificationViewModel, SP_GetNotificationData_Result>();

            CreateMap<SP_GetAuditList_Result, AuditListResult>();
            CreateMap<AuditListResult, SP_GetAuditList_Result>();

            CreateMap<UserRoleViewModel, UserRole>();
            CreateMap<UserRole, UserRoleViewModel>();

            CreateMap<AuditViewModel, Audit>();
            CreateMap<Audit, AuditViewModel>();

            CreateMap<AuditSubjectViewModel, AuditSubject>();
            CreateMap<AuditSubject, AuditSubjectViewModel>();

            CreateMap<AuditSubjectQuestionViewModel, AuditSubjectQuestion>();
            CreateMap<AuditSubjectQuestion, AuditSubjectQuestionViewModel>();

            CreateMap<AuditSubjectReviewViewModel, AuditSubjectReview>();
            CreateMap<AuditSubjectReview, AuditSubjectReviewViewModel>();

            CreateMap<AuditSubjectReviewQuestionViewModel, AuditSubjectQuestionResponse>();
            CreateMap<AuditSubjectQuestionResponse, AuditSubjectReviewQuestionViewModel>();

            CreateMap<SP_GetAuditSubjectList_Result, AuditSubjectListResult>();
            CreateMap<AuditSubjectListResult, SP_GetAuditSubjectList_Result>();
        }
    }
}
