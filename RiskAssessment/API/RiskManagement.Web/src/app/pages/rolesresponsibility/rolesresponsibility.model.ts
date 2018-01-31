// Detail page models
export class RolesResponsibilityViewModel {
    public RoleResponsibilityID: number;
    public RoleResponsibilityVersionID: number;
    public RoleID: number;
    public Type: number;
    public SectionID: number;
    public LatestRoleResponsibilityVersionID: number;
    public LatestVersion: string;
    public LatestChanges: string;
    public RoleResponsibilityVersionSectionViewModel: RoleResponsibilityVersionSection[];
}

export class RoleResponsibilityVersionSection {
    //RoleResponsibilityVersion
    public RoleResponsibilityVersionID: number;
    public Version: string;
    public DocumentName: string;
    public DocumentPath: string;
    public Changes: string;
    public ApprovedBy: number;
    public ApprovedByName: number;
    public ApprovedDate: string;
    public CreatedBy: number;
    public CreatedDate: string;
    public ModifiedByName: string;
    public ModifiedDate: string;
    //RoleResponsibilityVersionSection
    public RoleResponsibilityVersionSectionID: number;
    public SectionID: number;
    public SectionName: string;
    public SectionDetails: string;
}

export class RoleViewModel {
    public id: number;
    public name: string;
}
export class MasterRoleSectionViewModel {
    public MasterRoleSectionID: number;
    public SectionName: string;
    public Active: boolean;
}