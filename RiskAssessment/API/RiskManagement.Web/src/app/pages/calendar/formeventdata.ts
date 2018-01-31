import { NgbDateParserFormatter, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModel, ActionSourceModel, ActionCommentsListModel } from '../eventactions/eventaction.model';
export interface events {
    eventID: number
    title: number;
    subTitle: number;
    date: NgbDateStruct;
    startTime: NgbTimeStruct;
    endTime: NgbTimeStruct;
    Reviewee: number;
    RecurrenceEndDate: NgbDateStruct;
    attendees: Resources[];
    agendalist: Agenda[];
    actionlist: Action[];
    objectivelist: string[];
    eventAttendees: number[];
    location: number;

}
export class Title {
    //Id:number;
    //name:string;
    constructor(public id: number,
        public name: string) { }
}
export class SubTitle {
    // Id:number;
    // titleId:number;
    // name:string;
    constructor(public id: number,
        public titleId: number,
        public name: string) { }
}
export interface Agenda {
    Id: number;
    title: string;  // required field    
}

export interface Resources {
    Id: number;
    userId: number;
    name: string;
}
export interface Action {
    Id: number;
    title: string;
    responsiblePerson: number[];
    dueDate: NgbDateStruct;
    actionRequired: boolean;
    EventActionStatusID: number;
    CategoryId: number;
    ActionSourceId: number;
    RootCause: string;
    eventID: number;
    comments: string;
    CorrectiveActionID: number;
    ActionTaken: string;
    IsReportedAction: boolean;
    FilePath: string;
    AssignedBy: number;
}

export class EventDataModel {
    public EventID: number;
    public EventType: number;
    public EventSubType: number;
    public Date: string;
    public StartTime: string;
    public EndTime: string;
    public Recurring: boolean;
    public OrganizationID: number;
    public LocationID: number;
    public TitleName: string;
    public SubTitleName: string;
    public AddedBy: number;
    public Reviewee: number;
    public RoleResponsibilityVersionId: number;
    public RecurrencePattern: string;
    public RecurrenceEndDate: string;
    constructor() {
    }

}
export class EventAttendeeDataModel {
    public EventAttendeeID: number;
    public EventID: number;
    public UserID: number;
    constructor() {
    }
}
export class ActionDataModel {
    public ActionID: number;
    public Title: string;
    public Duedate: string;
    public ActionSource: string;
    public SourceID: number;
    public OrganizationID: number;
    public EventActionStatusID: number;
    public IsActionRequired: boolean = false;
    public CategoryID: number;
    public RootCause: string;
    public AddedBy: number;
    public ActionSourceID: number;
    public Comments: string;
    public CorrectiveActionID: number;
    public CorrectionStatusRequired: boolean = false;
    public ActionTaken: string;
    public IsReportedAction: boolean;
    public FilePath: string;
    public AssignedBy: number;
    public ActionCommentsListModel: ActionCommentsListModel[];
    public ActionResponsiblePersonDataModel: ActionResponsiblePersonDataModel[];
    constructor() {
    }
}
export class ActionResponsiblePersonDataModel {
    public ActionResponsiblePersonID: number;
    public ActionID: number;
    public UserID: number;
    public AddedBy: number;
    constructor() {
    }
}
export class AgendaDataModel {
    public AgendaID: number;
    public SourceID: number;
    public OrganizationID: number;
    public AgendaSource: string;
    public Title: string;
    constructor() {
    }

}
export class EventViewModel {
    public EventDataModel: EventDataModel;
    public EventAttendeeDataModel: EventAttendeeDataModel[];
    public ActionDataModel: ActionDataModel[];
    public AgendaDataModel: AgendaDataModel[];
    public ObjectiveViewModel: ObjectiveViewModel[];
   
    public IsAppointmnet: boolean = false;
    constructor() {
    }
}
export class ObjectiveViewModel {
    public ObjectiveId: number;
    public Text: string;
    public OrganizationId: number;
    public SourceId: number;
    public ObjectiveSource: string;
}
export class EventFilterModel {
    public type: number;
    public subType: number;
    public viewType: string;
    public date: string;
    constructor() {
    }
}

export class EventFilterViewModel {
    public EventDataModel: EventDataModel[];
    public EventAttendeeDataModel: EventAttendeeDataModel[];
    public ActionDataModel: ActionDataModel[];
    public AgendaDataModel: AgendaDataModel[];

    constructor() {
    }
}

export class LocationModel {
    public LocationID: number;
    public LocationName: string;
    public RoomName: string;
    constructor() {
    }
}

export class TitleModel {
    constructor() {
    }
    public TitleID: number;
    public TitleName: string;
}

export class SubTitleModel {
    constructor() {
    }

    public SubTitleId: number;
    public TitleID: number;
    public SubTitleName: string;
}

export class EventActionStatusModel {
    constructor() {
    }
    public EventActionStatusID: number;
    public ActionName: string;
}
