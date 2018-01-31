export class RevieweeObjectiveViewModel {
    public CreatedDate: string;
    public Text: string[];
}



export class GetUserWithRoleViewResult {
    public UserName: string;
    public UserID: number;
    public RoleId: number;
}

export class GetRoleResponsibilityViewModel {
    public Type: number;
    public SectionDetails: string;
    public SectionName: string;
    public DocumentName: string;
    public DocumentPath: string;
    public RoleResponsibilityVersionID: number;
    public RoleResponsibilityID: number;
    public Changes: string;
}