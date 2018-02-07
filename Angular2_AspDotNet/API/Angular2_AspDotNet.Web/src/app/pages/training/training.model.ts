import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export class TrainingViewModel {
    public TrainingId: number;
    public TrainingNeed: string;
    public TrainerRequired: boolean;
    public TrainingType: number = 2;
    public TrainingEventID: number;
    public IsAssignmentRequired: boolean;
    public AssignmentID: number;
    public Active: boolean;
    public CreatedOn: Date;
    public CreatedBy: number;
    public YouTubeLink: string;
}


export class TrainingMaterialViewModel {
    public TrainingMaterialId: number;
    public YouTubeLink: string;
    public FilePath: string;
    public FileName: string;
    public TrainingId: number;
    public FileExtension: string;
}


export class TrainingScheduleViewModel {

    public TrainingScheduleId: number;
    public TrainingId: number;
    public StartDate: string;
    public EndDate: string;
    public StartDateStruct: NgbDateStruct;
    public EndDateStruct: NgbDateStruct;
    public Trainer: number;
    public Users: number[] = [];
    public Roles: number[] = [];
    public UserList: TrainingScheduleUserViewModel[] = [];
    public RoleList: TrainingScheduleRoleViewModel[] = [];
}

export class TrainingScheduleUserViewModel {
    public TrainingScheduleUserId: number;
    public TrainingScheduleId: number;
    public UserId: number;
}

export class TrainingScheduleRoleViewModel {
    public TrainingScheduleRoleId: number;
    public TrainingScheduleId: number;
    public RoleId: number;
}


export class TrainingScheduleListViewModel {
    public TrainingScheduleId: number;
    public StartDate: string;
    public EndDate: string;
    public Trainer: string;
    public UserCount: number;
    public RoleCount: number;
    public Status: string;
    public Rating: string;
}


export class TrainingScheduleUserListViewModel {
    public TrainingScheduleUserId: number;
    public UserId: number;
    public UserName: string;
    public Attended: string;
    public Signed: string;
    public Result: string;
    public TraineeComment: string;
    public TrainerComment: string;
    public Status: number;
    public UserRating: number;
}

export class TrainingListFilterModel {
    public PageNo: number;
    public PageSize: number;
    public SortColumn: string;
    public SortOrder: string;
    public TrainingNeed: string;
    public TrainerRequired: number;
    public TrainingType: number;
    public Assignment: string;
}

export class TrainingList {
    public TrainingId: number;
    public TrainingNeed: string;
    public TrainerRequired: string;
    public TrainingType: string;
    public Assignment: string;
    public RowID: number;
}

export class TrainingListViewModel {
    public TrainingList: TrainingList[] = [];
    public TotalRecords: number;
}

export class TrainingScheduleListByUserIdViewModel {
    public TrainingScheduleId: number;
    public TrainingId: number;
    public StartDate: string;
    public EndDate: string;
    public Trainer: string;
    public UserCount: number;
    public RoleCount: number;
    public Status: string;
    public Rating: string;
    public TrainingNeed: string;
    public MaterialCount: number;
    public Completed: boolean;
}



export class UserScheduleResultViewModel {
    public UserScheduleResultId: number;
    public TrainingId: number;
    public TrainingScheduleId: number;
    public UserId: number;
    public IsUserAttendedTraining: boolean;
    public ReviewerComment: string;
    public Status: number;
    public UserName: string;
    public TrainingAssignmentAttemptId: number;
    public UserComment: string;
    public UserRating: number;
}

export class TraineeScheduleListByUserIdViewModel {
    public TrainingScheduleUserId: number;
    public TrainingScheduleId: number;
    public TrainingId: number;
    public TrainingNeed: string;
    public AssignmentId: number;
    public TrainerId: number;
    public Trainer: string;
    public StartDate: string;
    public EndDate: string;
}

export class TrainingAssignmentAttemptViewModel {
    public TrainingAssignmentAttemptId: number;
    public TrainingScheduleId: number;
    public AssignmentId: number
    public UserId: number;
    public CommentText: string;
    public Rating: number;
    public Score: number;
    public AttemptDate: string;
    public TrainingAssignmentAnswers: [{
        TrainingAssignmentAnswerId: number;
        TrainingAssignmentAttemptId: number;
        QuestionId: number;
        QuestionText: string;
        QuestionType: number;
        QuestionScore: number;
        Score: number;
        AnswerText: string;
        QuestionOptionId: number;

        AssignmentQuestionOptions: [{
            QuestionOptionID: number;
            QuestionID: number;
            OptionText: string;
        }]
    }]
}

export class ReportViewModel<T>{
    ReportModel: T[];
    TotalRecords: number;
}

export class TrainingReportViewModel {
    public TrainingId: number;
    public TrainingScheduleId: number;
    public TrainingNeed: string;
    public TraineeId: number;
    public TraineeName: string;
    public TraineeComment: string;
    public TrainerId: number;
    public TrainerName: string;
    public TrainerComment: string;
    public IsUserAttendedTraining: boolean;
    public AttemptDate: string;
    public Score: number;
    public TotalScore: number;
}

export class TrainingNeedListViewModel {
    public TrainingId: number;
    public TrainingNeed: string;
}

export class UserListViewModel {
    public UserId: number;
    public UserName: string;
}

export class TrainerReportViewModel {
    public TrainingId: number;
    public TrainingNeed: string;
    public StartDate: string;
    public EndDate: string;
    public UsersAttended: number;
    public AverageRating: number;
}

export class TrainingUserReportViewModel {
    public TrainingId : number;
    public TrainingScheduleId : number;
    public StartDate: string;
    public TrainingNeed: string;
    public TraineeId : number;
    public TraineeName: string;
    public TrainerId: number;
    public TrainerName: string;
    public TrainerComment: string;
    public IsUserAttendedTraining : boolean;
    public Score: number;
    public TotalScore: number;
}

export class BaseFilterModel {
    public PageNo: number;
    public PageSize: number;
    public SortColumn: string;
    public SortOrder: string;
}

export class TrainingReportFilterModel extends BaseFilterModel {    
    public StartDate: string;
    public EndDate: string;
    public TrainingId: number;
}

export class TrainerReportFilterModel extends BaseFilterModel {
    public TrainerId: number;
}

export class TrainingUserReportFilterModel extends BaseFilterModel {
    public UserId: number;
}