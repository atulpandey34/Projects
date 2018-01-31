import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

export class MonitoringMethodModel {
    public MonitoringMethodId: number;
    public Method: string;
}

export class DurationUnitModel {
    public DurationUnitId: number;
    public Text: string;
}

export class HazardModel {
    public HazardId: number;
    public Text: string;
    public OrganizationId: number;
}


export class RiskAssessmentViewModel {
    public RiskAssessmentId: number;
    public Area: string;
    public AssessmentDate: string;
    public AssessmentDateDateStruct: NgbDateStruct;
    public ReviewDuration; number;
    public ReviewDurationUnit: number;
    public TrainingRequired: boolean;
    public Status: number;
    public IsDeleted: boolean;
    public IsArchived: boolean;
    public RiskAssessmentTeamViewModel: RiskAssessmentTeamViewModel[];
    public RiskAssessmentHazardViewModel: RiskAssessmentHazardViewModel[];
}

export class RiskAssessmentTeamViewModel {
    public RiskAssessmentTeamId: number;
    public RiskAssessmentId: number;
    public UserId: number;
}

export class RiskAssessmentHazardViewModel {

    public RiskAssessmentHarardId: number;
    public HazardId: number;
    public RiskAssessmentId: number;
    public Description: string;
    public IsReadyForReview: boolean = false;
    public RiskAssessmentHazardMeasureViewModel: RiskAssessmentHazardMeasureViewModel[];
    public RiskAssessmentHazardReviewViewModel: RiskAssessmentHazardReviewViewModel[];

}

export class RiskAssessmentHazardMeasureViewModel {
    public RiskAssessmentHazardMeasureId: number;
    public RiskAssessmentId: number;
    public RiskAssessmentHazardId: number;
    public Text: string;
    public DateAdded: Date;
    public ActionId: number;
}

export class RiskAssessmentHazardReviewViewModel {
    public RiskAssessmentHazardReviewId: number;
    public RiskAssessmentHazardId: number;
    public CreatedDate: Date;
    public UpdatedDate: Date;
    public ReviewDate: Date;
    public Consequence: number;
    public Likelihood: number;
    public MonitoringMethodId: number;


}

export class HazardListModel {
    public RiskAssessmentHarardId: number;
    public HazardId: number;
    public HazardText: string;
    public Description: string;
    public Consequence: number;
    public Likelihood: number;
    public Source: number;
    public Method: string;
    public MeasureText: string;
    public ReviewDate: string = '';
    public CreatedDate: string;
    public IsReviewed: boolean;
    public MeasureTextWithReviewDate: string;
    public ScoreColor: string;
    public MeasureTextArray: string[];
    public MeasureTextWithReviewDateArray: string[];
}

export class RiskAssessmentListFilterModel {
    public SubjectFilter: string;
    public AssessmentDateFilter: string;
    public DurationUnitFilter: string;
    public ResponsibleTeamFilter: string;
    public PageNo: number;
    public PageSize: number;
    public SortOrder: string;
    public SortColumn: string;
}

export class RiskAssessmentListResult {
    public Area: string;
    public AssessmentDate: string;
    public ReviewDuration: number;
    public ReviewDurationUnit: number;
    public RiskAssessmentId: number;
    public DuratiuonUnit: string;
    public RowID: number;
    public RiskAssessmentTeam: string;
    public DateColor: string = "black";
    public Status: string;
}

export class RiskAssessmentListData {

    public TotalRecords: number;
    public RiskAssessmentListResult: RiskAssessmentListResult[] = [];
}

export class SignedUserList {
    public UserID: number;
    public Column1: string;
    public SignedDate: string;
    public SignedDateString: string;
}