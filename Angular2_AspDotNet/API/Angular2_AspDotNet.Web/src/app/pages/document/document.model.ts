// Detail page models
export class DocumentViewModel {
    public DocumentId: number;
    public DocumentName: string;
    public DocumentType: number;
    public FolderID: number;
    public ReviewFrequency: string;
    public ReviewFrequencyUnitID: number;
    public DocumentVersionID: number;
    public VersionNumber: number;
    public DocumentPathType: number;
    public FilePath: string;
    public SummaryOfChanges: string;
    public ExternalLink: string;

    constructor() {
    }
}
export class DocumentTypeViewModel {
    public MasterDocumentTypeID: number;
    public Type: string;

    constructor() {
    }
}
export class MasterReviewFrequencyUnitViewModel {
    public MasterReviewFrequencyUnitID: number;
    public ReviewFrequencyUnit: string;
}
export class MasterDocumentFolderViewModel {
    public MasterDocumentFolderID: number;
    public FolderName: string;
}
export class MasterPopupViewModel {
    public MasterValueText: string;
}
//document version child grid
export class DocumentVersionViewModel {
    public DocumentVersionID: number;
    public DocumentId: number;
    public UploadedBy: string;
    public ApprovedBy: number;
    public VersionNumber: string;
    public FilePath: string;
    public FileName: string;
    public ExternalLink: string;
    public UploadDate: string;
    public SummaryOfChanges: string;

    constructor() {
    }

}

// List page models
export class DocumentListFilterModel {
    public DocumentName: string;
    public UploadBy: string;
    public Version: string;
    public Review: string;
    public Type: string;
    public FolderName: string;
    public PageNo: number;
    public PageSize: number;
    public SortOrder: string;
    public SortColumn: string;
}
export class DocumentListResultV1 {
    public DocumentID: number;
    public DocumentName: string;
    public UploadedBy: string;
    public VersionNumber: string;
    public Review: string;
    public DocumentType: string;
    public FolderName: string;
    public RowID: number;
}
export class DocumentListViewResult {

    public TotalRecords: number;
    public DocumentListResult: DocumentListResultV1[] = [];
}