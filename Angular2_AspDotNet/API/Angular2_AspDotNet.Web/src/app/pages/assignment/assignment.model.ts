//import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';



export class Assignment {
    public AssignmentId: number;
    public Title: string;
    public Active: boolean;
    ///public OrganizationId: number;
}

export class AssignmentQuestionOption {
    public QuestionOptionID: number;
    public QuestionID: number;
    public OptionText: string;
    public IsCorrectAnswer: boolean;
}

export class AssignmentListResult {
    public QuestionId: number;
    public AssignmentId: number;
    public QuestionText: string;
    public QuestionType: string;
    public Score: number;
    public Order: number;
    public Active: boolean = true;
    public AssignmentQuestionOptionViewModel: AssignmentQuestionOption[];
}

export class AssignmentListFilterModel {
    public Title: string;
    public Active: boolean;
    public PageNo: number;
    public PageSize: number;
    public SortOrder: string;
    public SortColumn: string;
}



export class AssignmentListData {

    public TotalRecords: number;
    public AssignmentListResult: AssignmentListResult[] = [];
}

export class AssignmentListResultV1 {
    public Title: string
    public RowID: number;
    public AssignmentID: number;
    public Active: string;
}
export class AssignmentListViewResult {

    public TotalRecords: number;
    public AssignmentListResult: AssignmentListResultV1[] = [];
}