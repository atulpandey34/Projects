import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

//Audit Report View Model
export class AuditReportViewModel {
    public AuditReport: AuditReport;

    constructor() {
        this.AuditReport = new AuditReport();
    }
}
export class AuditReport {
    public Title: string;
    public Scope: string;
    public Auditors: string;
    public AuditeeMainContact: string;

    public AuditReportSubjectList: AuditReportSubject[] = [];

    constructor() {

    }
}

export class AuditReportSubject {
    public AuditSubjectID: number;
    public AuditID: number;
    public Subject: string;

    public AuditSubjectReviewList: AuditSubjectReviewViewModel[] = [];//List of Auditdates
    public AuditReportSubjectQuestionResponseList: AuditReportSubjectQuestionResponse[] = [];

    constructor() {
    }
}

export class AuditReportSubjectQuestionResponse {
    public AuditSubjectQuestionResponseID: number;
    public AuditDate: string;
    public Subject: string;
    public QuestionText: string;
    public ActionCode: string;
    public Comment: string;
    public ImagePath: string;
    public ImageName: string;
}
// Audit Review Detail page model
export class AuditSubjectReviewViewModel {
    public AuditSubjectReviewID: number;
    public AuditID: number;
    public SubjectID: number;
    public PlannedAuditDate: string;
    public AuditDate: string;
    public AuditDateStruct: NgbDateStruct;
    public AuditorID: number;
    public AuditeeID: number;
    public LocationID: number;
    public Comment: string;
    public Subject: string;
    public IsDeleted: boolean;

    public AuditSubjectQuestionResponses: AuditSubjectReviewQuestion[] = [];
    constructor() {
    }
}

export class AuditSubjectReviewQuestion {
    public AuditSubjectQuestionResponseID: number;
    public AuditSubjectReviewID: number;
    public AuditSubjectQuestionID: number;
    public Comment: string;
    public Observation: boolean = false;
    public NonCompliance: boolean;
    public None: boolean;
    public ImagePath: string;
    public ImageName: string;
    public QuestionText: string;
    public fileName: string;
    public fileToUpload: File;
}
// Audit Detail page models
export class AuditViewModel {
    public AuditID: number;
    public Title: string;
    public Scope: string;
    public TermsCondition: boolean;
    public DueDate: string;
    public DueDateStruct: NgbDateStruct;
    public SubjectTemp: string;

    public AuditSubjects: AuditSubject[] = [];
    public AuditSubjectReviews: AuditSubjectReviewViewModel[] = [];
    constructor() {
    }
}

export class AuditSubject {
    public AuditSubjectID: number;
    public AuditID: number;
    public Subject: string;
    public AuditorID: number;
    public AuditeeID: number;
    public Location: number;
    public FrequencyRecurrence: string;
    //public cronExpressionValue: string;
    //public StartDate: string;
    //public EndDate: string;
    //public StartDateStruct: NgbDateStruct;
    //public EndDateStruct: NgbDateStruct;
    public InsertQuestion: string;
    public IsDeleted: boolean;
    public IsTabActive: boolean=false;

    public AuditSubjectQuestions: AuditSubjectQuestion[] = [];
    constructor() {
    }
}

export class AuditSubjectQuestion {
    public AuditSubjectQuestionID: number;
    public AuditSubjectID: number;
    public QuestionText: string;
    public IsDeleted: boolean;
}

//Audit Subject list view model
export class AuditSubjectListFilterModel {
    public Subject: string;
    public Auditee: string;
    public Location: string;
    public PlannedAuditDate: string;
    public ReviewStatus: string;
    public PageNo: number;
    public PageSize: number;
    public SortOrder: string;
    public SortColumn: string;
}
export class AuditSubjectListViewResult {

    public TotalRecords: number;
    public AuditSubjectListResult: AuditSubjectListResult[] = [];
}
export class AuditSubjectListResult {
    public AuditSubjectReviewID: number;
    public AuditSubjectID: number;
    public AuditID: number;
    public Subject: string;
    public Auditee: string;
    public Location: string;
    public PlannedAuditDate: string;
    public ReviewStatus: string;
    public RowID: number;
}

// List page models
export class AuditListFilterModel {
    public Title: string;
    public Scope: string;
    //public AuditorName: string;
    //public AuditeeName: string;
    public PageNo: number;
    public PageSize: number;
    public SortOrder: string;
    public SortColumn: string;
}
export class AuditListViewResult {

    public TotalRecords: number;
    public AuditListResult: AuditListResult[] = [];
}
export class AuditListResult {
    public AuditID: number;
    public Title: string;
    public Scope: string;
    public Status: number;
    public AuditSubjects: string;
    public AuditSubjectCount: number;
    public RowID: number;
}