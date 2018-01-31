export class UserViewModel {

    public UserID: number;
    public UserName: string;
    public FirstName: string;
    public LastName: string;
    public EmailID: string;
    public OrganizationID: number;
    public RoleID: number;
    public SecurityQuestion1: number;
    public SecurityQuestion2: number;
    public SecurityAnswer1: string;
    public SecurityAnswer2: string;
    public OverRideOrganizationId: boolean = false;
    public RoleList: number[];

    constructor() {
    }
}

export class RoleViewModel {
    public RoleId: number;
    public RoleName: string;
    public IsAdmin: boolean;

    constructor() {
    }
}

export class SecurityQuestionModel {
    constructor() {
    }

    public SecurityQuestionID: number;
    public Question: string;
}

export class OrgaizationViewModel {
    constructor() {
    }

    public OrganizationID: number;
    public OrganizationName: string;
}
export class UserViewListModel {
    constructor() {
    }
    public UserID: number;
    public UserName: string;
    public FirstName: string;
    public LastName: string;
    public EmailID: string;
    public OrganizationID: number;
    public RoleID: number;
    public SecurityQuestion1: number;
    public SecurityQuestion2: number;
    public SecurityAnswer1: string;
    public SecurityAnswer2: string;
    public OrganizationName: string;
    public RoleName: string;
    public SQ1: string;
    public SQ2: string;
    public RowID: number;
    public InActive: boolean;
    public InActiveText: string;
}

export class UserViewList {
    constructor() {
    }
    public UserViewListModel: UserViewListModel[];
    public TotalRecords: number;
}

export class UserResetPassword {
    public OldPassword: string;
    public Password: string;
    public ConfirmPassword: string;
    constructor() {
    }
}