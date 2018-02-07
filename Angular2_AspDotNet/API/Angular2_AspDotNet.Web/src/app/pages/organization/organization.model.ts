// Detail page models
export class OrganizationViewModel {
    public OrganizationID: number;
    public OrganizationName: string;
    public Logo: string;
    public State: string;
    public City: string;
    public AddressLine: string;
    public IsActive: boolean;
    
    constructor() {
    }
}

// List page models
export class OrganizationListFilterModel {
    public OrganizationName: string;
    public OrganizationAddress: string;
    public PageNo: number;
    public PageSize: number;
    public SortOrder: string;
    public SortColumn: string;
}
export class OrganizationListViewResult {

    public TotalRecords: number;
    public OrganizationListResult: OrganizationListResult[] = [];
}
export class OrganizationListResult {
    public OrganizationID: number;
    public OrganizationName: string;
    public OrganizationAddress: number;
    public OrganizationLogo: string;
    public RowID: number;
}