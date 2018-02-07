export class MeetingListModel {
    public EventID: number;
    public TitleName: string;
    public SubTitleName: string;
    public MeetingDate: string;
    public StartTime: string;
    public EndTime: string;
    public LocationName: string;
    public RoomName: string;
    public AddedBy: string;
    public RowID: number;
    public Attendees: string;
    public TotalAction: number;
    public CompleteAction: number;
    public InCompleteAction: number;
    public Reviewee: string;
    public NextReviewDate: string;
    public RecurrenceDateColor: string;
}
export class MeetingList {

    public MeetingListModel: MeetingListModel[];
    public TotalRecords: number;
}

export class UserModel {
    public id: number;
    public name: string;
    constructor() { }
}