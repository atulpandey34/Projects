
import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl, AbstractControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DocumentViewModel, DocumentTypeViewModel, DocumentVersionViewModel, MasterReviewFrequencyUnitViewModel, MasterDocumentFolderViewModel, MasterPopupViewModel } from '../document/document.model';
import { DocumentService } from '../document/document.service';
import { environment } from '../../../environments/environment';
import * as FileSaver from 'file-saver';
let apiURL = environment.apiEndpoint;

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',],
    providers: [DocumentService],

})
export class DocumentComponent implements OnInit {
    public apiEndPoint: string;
    myFormDocument: FormGroup; // Model for form
    myFormPopup: FormGroup;
    documentTypeList: DocumentTypeViewModel[];//Model for document type dropdown
    reviewFrequency: MasterReviewFrequencyUnitViewModel[];
    documentFolder: MasterDocumentFolderViewModel[];
    documentVersionListData: DocumentVersionViewModel[] = []; // for document version child grid
    totalDocumentVersionRecords: number = 0;
    DocumentId: number = 0;
    DocumentVersionID: number = 0;
    DocumentPathType: number;
    IsNewVersion: boolean = false;
    MasterFormType: string;
    //MasterFormTypeId: number;
    MasterFormDocumentType: number=0;
    MasterFormReviewFrequencyUnitID: number=0;
    MasterFormFolderID: number = 0;
    @ViewChild('closeDialog') closeDialog;
    constructor(private fb: FormBuilder, private _DocumentService: DocumentService, private route: ActivatedRoute, private router: Router, private location: Location) {
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    ngOnInit() {
        this.onload();
    }

    onload() {
        this.route.params.subscribe(params => {
            this.DocumentId = params['id'] as number; //log the value of id
            this.DocumentId = this.DocumentId === undefined ? 0 : this.DocumentId;
        });
        this.getDocumentTypeList();
        this.getMasterReviewFrequency();
        this.getAllMasterDocumentFolder();
        let documentModel = new DocumentViewModel();
        this.addhtmltoform(documentModel);
        if (this.DocumentId > 0) {
            this._DocumentService.getSingleDocument(this.DocumentId).subscribe((res: DocumentViewModel) => {
                this.DocumentVersionID = res.DocumentVersionID;
                this.DocumentPathType = res.DocumentPathType;
                this.IsNewVersion = false;
                this.addhtmltoform(res);
            });
        }
        this.getDocumentVersionList();
        this.addMasterPopupToForm();
    }
    getDocumentTypeList() {
        this._DocumentService.getDocumentTypeList().subscribe((res: DocumentTypeViewModel[]) => {
            this.documentTypeList = res;
        });
    }
    getAllMasterDocumentFolder() {
        this._DocumentService.getAllMasterDocumentFolder().subscribe((res: MasterDocumentFolderViewModel[]) => {
            this.documentFolder = res;
        });
    }
    getMasterReviewFrequency() {
        this._DocumentService.getMasterReviewFrequency().subscribe((res: MasterReviewFrequencyUnitViewModel[]) => {
            this.reviewFrequency = res;
        });
    }
    addhtmltoform(model: DocumentViewModel) {
        this.myFormDocument = this.fb.group(
            {
                DocumentId: [model.DocumentId],
                DocumentName: [model.DocumentName, [Validators.required]],
                DocumentType: [model.DocumentType, [Validators.required]],
                FolderID: [model.FolderID, [Validators.required]],
                ReviewFrequency: [model.ReviewFrequency, [Validators.required]],
                ReviewFrequencyUnitID: [model.ReviewFrequencyUnitID, [Validators.required]],
                VersionNumber: [model.VersionNumber],
                DocumentPathType: [model.DocumentPathType, [Validators.required]],
                FilePath: [model.FilePath],
                SummaryOfChanges: [model.SummaryOfChanges],
                ExternalLink: [model.ExternalLink],
            });
    }
    formPopupModel: MasterPopupViewModel = new MasterPopupViewModel();
    addMasterPopupToForm() {
        this.myFormPopup = this.fb.group(
            {
                MasterValueText: [this.formPopupModel.MasterValueText, [Validators.required, this.validateDistinct.bind(this)]],
            });
    }
    validateDistinct(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            if (this.MasterFormType == 'Document Type') {
                this._DocumentService.validateDocumentType(control.value).subscribe((res: boolean) => {
                    if (res == false) {
                        result = true;
                        this.myFormPopup.controls["MasterValueText"].setErrors({ remote: "Document type already exists." });
                    }
                });
            }
            else if (this.MasterFormType == 'Review frequency unit') {
                this._DocumentService.validateReviewFrequencyUnit(control.value).subscribe((res: boolean) => {
                    if (res == false) {
                        result = true;
                        this.myFormPopup.controls["MasterValueText"].setErrors({ remote: "Review frequency unit already exists." });
                    }
                });
            }
            else if (this.MasterFormType == 'Folder') {
                this._DocumentService.validateFolder(control.value).subscribe((res: boolean) => {
                    if (res == false) {
                        result = true;
                        this.myFormPopup.controls["MasterValueText"].setErrors({ remote: "Folder already exists." });
                    }
                });
            }
        }
        else
            result = null;
        return result ? { 'MasterValueText': { value: control.value } } : null;
    }
    SaveDocumentFormData(data: DocumentViewModel, button: string) {
        this._DocumentService.saveDocument(data).subscribe(res => {
            this.DocumentVersionID = res.DocumentVersionID
            this.DocumentId = res.DocumentId;
            this.getDocumentVersionList();
            this.saveMaterial();
            //this.router.navigate(['/pages/document/' + res.DocumentId]);
        });
    }
    SaveMasterPopupFormData(data: MasterPopupViewModel, button: string) {
        if (this.MasterFormType == 'Document Type') {
            this._DocumentService.addMasterDocumentType(data.MasterValueText).subscribe((res: number) => {
                this.getDocumentTypeList();
                this.MasterFormDocumentType = res;
                if (this.DocumentId > 0) {
                    this._DocumentService.getSingleDocument(this.DocumentId).subscribe((res: DocumentViewModel) => {
                        if (this.MasterFormDocumentType != 0) {
                            res.DocumentType = this.MasterFormDocumentType;
                        }
                        if (this.MasterFormReviewFrequencyUnitID != 0) {
                            res.ReviewFrequencyUnitID = this.MasterFormReviewFrequencyUnitID;
                        }
                        if (this.MasterFormFolderID != 0) {
                            res.FolderID = this.MasterFormFolderID;
                        }
                        this.addhtmltoform(res);
                    });
                } else {
                    let documentModel = new DocumentViewModel();
                    var docform = this.myFormDocument;
                    documentModel.DocumentName = docform.controls.DocumentName.value;
                    documentModel.ReviewFrequency = docform.controls.ReviewFrequency.value;
                    documentModel.VersionNumber = docform.controls.VersionNumber.value;
                    documentModel.DocumentPathType = docform.controls.DocumentPathType.value;
                    documentModel.DocumentType = this.MasterFormDocumentType;
                    documentModel.ReviewFrequencyUnitID = this.MasterFormReviewFrequencyUnitID;
                    documentModel.FolderID = this.MasterFormFolderID;
                    this.addhtmltoform(documentModel);
                }
            });
        }
        else if (this.MasterFormType == 'Review frequency unit') {
            this._DocumentService.addMasterReviewFrequencyUnit(data.MasterValueText).subscribe((res: number) => {
                this.getMasterReviewFrequency();
                this.MasterFormReviewFrequencyUnitID = res;
                if (this.DocumentId > 0) {
                    this._DocumentService.getSingleDocument(this.DocumentId).subscribe((res: DocumentViewModel) => {
                        if (this.MasterFormDocumentType != 0) {
                            res.DocumentType = this.MasterFormDocumentType;
                        }
                        if (this.MasterFormReviewFrequencyUnitID != 0) {
                            res.ReviewFrequencyUnitID = this.MasterFormReviewFrequencyUnitID;
                        }
                        if (this.MasterFormFolderID != 0) {
                            res.FolderID = this.MasterFormFolderID;
                        }
                        this.addhtmltoform(res);
                    });
                } else {
                    let documentModel = new DocumentViewModel();
                    var docform = this.myFormDocument;
                    documentModel.DocumentName = docform.controls.DocumentName.value;
                    documentModel.ReviewFrequency = docform.controls.ReviewFrequency.value;
                    documentModel.VersionNumber = docform.controls.VersionNumber.value;
                    documentModel.DocumentPathType = docform.controls.DocumentPathType.value;
                    documentModel.DocumentType = this.MasterFormDocumentType;
                    documentModel.ReviewFrequencyUnitID = this.MasterFormReviewFrequencyUnitID;
                    documentModel.FolderID = this.MasterFormFolderID;
                    this.addhtmltoform(documentModel);
                }
            });
        }
        else if (this.MasterFormType == 'Folder') {
            this._DocumentService.addMasterDocumentFolder(data.MasterValueText).subscribe((res: number) => {
                this.getAllMasterDocumentFolder();
                this.MasterFormFolderID = res;
                if (this.DocumentId > 0) {
                    this._DocumentService.getSingleDocument(this.DocumentId).subscribe((res: DocumentViewModel) => {
                        if (this.MasterFormDocumentType != 0) {
                            res.DocumentType = this.MasterFormDocumentType;
                        }
                        if (this.MasterFormReviewFrequencyUnitID != 0) {
                            res.ReviewFrequencyUnitID = this.MasterFormReviewFrequencyUnitID;
                        }
                        if (this.MasterFormFolderID != 0) {
                            res.FolderID = this.MasterFormFolderID;
                        }
                        this.addhtmltoform(res);
                    });
                } else {
                    let documentModel = new DocumentViewModel();
                    var docform = this.myFormDocument;
                    documentModel.DocumentName = docform.controls.DocumentName.value;
                    documentModel.ReviewFrequency = docform.controls.ReviewFrequency.value;
                    documentModel.VersionNumber = docform.controls.VersionNumber.value;
                    documentModel.DocumentPathType = docform.controls.DocumentPathType.value;
                    documentModel.DocumentType = this.MasterFormDocumentType;
                    documentModel.ReviewFrequencyUnitID = this.MasterFormReviewFrequencyUnitID;
                    documentModel.FolderID = this.MasterFormFolderID;
                    this.addhtmltoform(documentModel);
                }
            });
        }

        
        this.closeDialog.nativeElement.click();
    }
    setMasterFormType(masterFormType: string) {
        this.MasterFormType = masterFormType;
        this.addMasterPopupToForm();
    }
    showNewVersionForm() {
        this.IsNewVersion = true;
    }
    getDocumentVersionList() {
        this.documentVersionListData = [];
        this.totalDocumentVersionRecords = 0;
        this._DocumentService.getDocumentVersionList(this.DocumentId).subscribe((res: DocumentVersionViewModel[]) => {
            this.documentVersionListData = res;
            this.totalDocumentVersionRecords = res.length;
        });
    }
    
    EnableDisableLinkOrUpload(value: number) {
        this.DocumentPathType = value;
    }
    fileName: string;
    fileToUpload: File;
    fileChange(input) {
        const reader = new FileReader();
        if (input.files.length) {
            this.fileName = input.files[0].name;
            this.fileToUpload = input.files[0];
        }
    }

    removeFile(): void {
        this.fileName = '';
        this.fileToUpload = null;
    }

    saveMaterial() {
        if (this.fileToUpload != null && this.fileToUpload != undefined) {
            let file = this.fileToUpload;
            let _formData = new FormData();
            _formData.append("FileName", file.name);
            _formData.append("MyFile", file);
            _formData.append("DocumentVersionID", this.DocumentVersionID.toString());
            let body = _formData;
            this._DocumentService.uploadMaterial(body).subscribe(res => {
                this.removeFile();
                this.router.navigate(['/pages/document/' + this.DocumentId]);
                this.onload();
            });

        }
    }
    deleteDocumentVersion(event: DocumentVersionViewModel) {
        if (confirm("Are you sure want to delete?")) {
            this._DocumentService.deleteDocumentVersion(event.DocumentVersionID).subscribe(res => {
                this.getDocumentVersionList();
            });
        }
    }
    downloadMaterial(id: number, fileName: string) {
        this._DocumentService.downloadMaterial(id).subscribe(res => {
            FileSaver.saveAs(res, fileName);
        });
    }

}


