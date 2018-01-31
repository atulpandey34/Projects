export class ResetPassswordModel {
    public Password: string;
    public ConfirmPassword: string;
    public SecurityQuestion1: number;
    public SecurityAnswer1: string;
    public SecurityQuestion2: number;
    public SecurityAnswer2: string;
    constructor() {
    }
}

export class SecurityQustionOfUserModel {
    public SecurityQuestion1: string;
    public SecurityQuestion2: string;
}

export class LggedInUserModel {
    public UserId: number = 0;
    public Message: string;
    public RoleId: number;
    public Token: string;
    public IsNewUser: boolean = false;
    public UserName: string;
    public Password: string;
    public RoleList: number[] = [];
}