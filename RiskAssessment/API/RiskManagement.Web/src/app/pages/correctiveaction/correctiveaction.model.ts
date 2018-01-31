import { NgbDateParserFormatter, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { LocationModel, TitleModel, SubTitleModel, Title, SubTitle, Action, EventActionStatusModel, events, EventFilterModel, EventViewModel, EventDataModel, EventFilterViewModel, EventAttendeeDataModel, ActionDataModel, ActionResponsiblePersonDataModel, AgendaDataModel } from '../calendar/formeventdata';
export class CorrectiveActionDataModel {
    public ActionID: number;
    public CorrectiveActionId: number;
    public Title: string;
    public AssignedBy: number;
    public CategoryID: number;
    public ActionSourceID: number;
    public ActionTaken: string;
    public Duedate: string;
    public dueDateStruct: NgbDateStruct;
    public RootCause: string;
    public CorrectiveActionNeeded: boolean;
    public IdentifiedCorrectiveAction: string;
    public RiskLevel: number;
    public ResponsibleParty: number;
    public CorrectiveActionDueDate: string;
    public CorrectiveActionDueDateStruct: NgbDateStruct;
    public IssueResolved: boolean;
    public DateResolved: string;
    public dateResolved: NgbDateStruct;
    public resultList: string[];
    public ResultList: string[];
    public ActionResponsiblePersonDataModel: ActionResponsiblePersonDataModel[];
    public actionResponsiblePersonDataModel: ActionResponsiblePersonDataModel[];
    constructor() {
    }
}

export class CorretiveActionListPageFilterModel {
    public PageNo: number;
    public PageSize: number;
    public SortColumn: string;
    public SortOrder: string;
    public TitleFilter: string;
    public AssignedByFilter: string;
    public CategoryFilter: string;
    public SourceFilter: string;
    public ActionTakenFilter: string;
    public DueDateFilter: string;
    public RootCauseFilter: string;
}

export class CorrectiveActionListModel {
    public CorrectiveActionId: number;
    public Title: string;
    public AssignedBy: string;
    public CategoryName: string;
    public ActionSource: string;
    public ActionTaken: string;
    public DueDate: string;
    public RootCause: string;
    public RowID: number;
}

export class CorrectiveActionList {

    public CorrectiveActionListModel: CorrectiveActionListModel[];
    public TotalRecords: number;
}