export class CategoryModel {
    constructor() {
    }
    public CategoryID: number;
    public CategoryName: string;
}

export class ActionSourceModel {
    constructor() {
    }
    public ActionSourceID: number;
    public Source: string;
}

export class ActionCommentsListModel {
    constructor() {
    }
    public Comment: string;
    public AddedON: Date;
    public AddedBy: string;
}
export class filterDropDown {
    constructor() { }
    public title: string;
    public value: string;
}

export class ActionList {
    public ActionID: number;
    public Title: string;
    public Duedate: string;
    public EventActionStatusID: number;
    public EventActionStatusText: string;
    public SourceText: string;
    public SourceID: number;
    public AddedBy: string;
    public AssignedTo: string;
    public RowID: number;
}

export class ActionListViewModel {
    public ActionListing: ActionList[];
    public TotalRecords: number;
}

export class CorrectiveActionModel {
    public CorrectiveActionId: number;
    public CorrectiveActionName: string;
}