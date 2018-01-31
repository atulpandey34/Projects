export class MenuViewModel {
    public MenuId: number;
    public Title: string;
    public RouterLink: string;
    public Href: string;
    public Icon: string;
    public Target: string;
    public HasSubMenu: boolean;
    public ParentMenuId: number;
    public SortOrder: number;
    public CreatedDate: Date;
    public CreatedBy: number;
    public IsActive: boolean;
    public IsDeleted: boolean;
    public checked: boolean = false;
}


export class MenuFilterModel {
    public PageNo: number;
    public PageSize: number;
    public SortColumn: string;
    public SortOrder: string;
    public TitleFilter: string;
    public HrefFilter: string;
    public RouterFilter: string;
    public ParentMenuFilter: string;

}

export class GetAllMenuListDataViewResult {
    public MenuId: number;
    public Title: string;
    public RouterLink: string;
    public Href: string;
    public Icon: string;
    public Target: string;
    public HasSubMenu: boolean;
    public ParentMenuId: number;
    public SortOrder: number;
    public CreatedDate: Date;
    public CreatedBy: number;
    public IsActive: boolean;
    public IsDeleted: boolean;
    public ParentMenu: string;
}

export class MenuViewList {
    public GetAllMenuListDataViewResult: GetAllMenuListDataViewResult[];
    public TotalRecords: number;
}

export class RoleMenuMappingViewModel {
    public RoleMenuMappingId: number = 0;
    public RoleId: number = 0;
    public MenuId: number = 0;
    public OrganizationId: number = 0;
    public CreatedBy: number = 0;
    public CreatedDate: Date;
}

export class RoleMenuMappingListModel {

    public RoleMenuMappingViewModel: RoleMenuMappingViewModel[] = [];
    public RoleId: number = 0;
}