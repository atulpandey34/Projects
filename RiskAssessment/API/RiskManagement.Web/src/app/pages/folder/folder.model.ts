// Detail page models
export class FolderPopupViewModel {
    public MasterDocumentFolderID: number;
    public FolderName: string;
    public Users: number[] = [];
    public Roles: number[] = [];
    public RoleList: DocumentFolderRoleViewModel[] = [];
    public UserList: DocumentFolderUserViewModel[] = [];
}
export class DocumentFolderRoleViewModel {
    public DocumentFolderRoleID: number;
    public DocumentFolderID: number;
    public RoleID: number;
}
export class DocumentFolderUserViewModel {
    public DocumentFolderUserID: number;
    public DocumentFolderID: number;
    public UserID: number;
}
// List page models
export class MasterDocumentFolderListFilterModel {
    public FolderName: string;
    public RoleName:string;
    public UserName: string;
    public PageNo: number;
    public PageSize: number;
    public SortOrder: string;
    public SortColumn: string;
}
export class MasterDocumentFolderListViewResult {

    public TotalRecords: number;
    public DocumentFolderListResult: MasterDocumentFolderListResult[] = [];
}
export class MasterDocumentFolderListResult {
    public MasterDocumentFolderID: number;
    public FolderName: string;
    public TotalDocuments: number;
    public RoleName: string;
    public UserName: string;
    public RowID: number;
}