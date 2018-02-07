"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var document_model_1 = require("../document/document.model");
var document_service_1 = require("../document/document.service");
var environment_1 = require("../../../environments/environment");
var FileSaver = require("file-saver");
var apiURL = environment_1.environment.apiEndpoint;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(fb, _DocumentService, route, router, location) {
        this.fb = fb;
        this._DocumentService = _DocumentService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.documentVersionListData = []; // for document version child grid
        this.totalDocumentVersionRecords = 0;
        this.DocumentId = 0;
        this.DocumentVersionID = 0;
        this.IsNewVersion = false;
        //MasterFormTypeId: number;
        this.MasterFormDocumentType = 0;
        this.MasterFormReviewFrequencyUnitID = 0;
        this.MasterFormFolderID = 0;
        this.formPopupModel = new document_model_1.MasterPopupViewModel();
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    DocumentComponent.prototype.ngOnInit = function () {
        this.onload();
    };
    DocumentComponent.prototype.onload = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.DocumentId = params['id']; //log the value of id
            _this.DocumentId = _this.DocumentId === undefined ? 0 : _this.DocumentId;
        });
        this.getDocumentTypeList();
        this.getMasterReviewFrequency();
        this.getAllMasterDocumentFolder();
        var documentModel = new document_model_1.DocumentViewModel();
        this.addhtmltoform(documentModel);
        if (this.DocumentId > 0) {
            this._DocumentService.getSingleDocument(this.DocumentId).subscribe(function (res) {
                _this.DocumentVersionID = res.DocumentVersionID;
                _this.DocumentPathType = res.DocumentPathType;
                _this.IsNewVersion = false;
                _this.addhtmltoform(res);
            });
        }
        this.getDocumentVersionList();
        this.addMasterPopupToForm();
    };
    DocumentComponent.prototype.getDocumentTypeList = function () {
        var _this = this;
        this._DocumentService.getDocumentTypeList().subscribe(function (res) {
            _this.documentTypeList = res;
        });
    };
    DocumentComponent.prototype.getAllMasterDocumentFolder = function () {
        var _this = this;
        this._DocumentService.getAllMasterDocumentFolder().subscribe(function (res) {
            _this.documentFolder = res;
        });
    };
    DocumentComponent.prototype.getMasterReviewFrequency = function () {
        var _this = this;
        this._DocumentService.getMasterReviewFrequency().subscribe(function (res) {
            _this.reviewFrequency = res;
        });
    };
    DocumentComponent.prototype.addhtmltoform = function (model) {
        this.myFormDocument = this.fb.group({
            DocumentId: [model.DocumentId],
            DocumentName: [model.DocumentName, [forms_1.Validators.required]],
            DocumentType: [model.DocumentType, [forms_1.Validators.required]],
            FolderID: [model.FolderID, [forms_1.Validators.required]],
            ReviewFrequency: [model.ReviewFrequency, [forms_1.Validators.required]],
            ReviewFrequencyUnitID: [model.ReviewFrequencyUnitID, [forms_1.Validators.required]],
            VersionNumber: [model.VersionNumber],
            DocumentPathType: [model.DocumentPathType, [forms_1.Validators.required]],
            FilePath: [model.FilePath],
            SummaryOfChanges: [model.SummaryOfChanges],
            ExternalLink: [model.ExternalLink],
        });
    };
    DocumentComponent.prototype.addMasterPopupToForm = function () {
        this.myFormPopup = this.fb.group({
            MasterValueText: [this.formPopupModel.MasterValueText, [forms_1.Validators.required, this.validateDistinct.bind(this)]],
        });
    };
    DocumentComponent.prototype.validateDistinct = function (control) {
        var _this = this;
        var result = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            if (this.MasterFormType == 'Document Type') {
                this._DocumentService.validateDocumentType(control.value).subscribe(function (res) {
                    if (res == false) {
                        result = true;
                        _this.myFormPopup.controls["MasterValueText"].setErrors({ remote: "Document type already exists." });
                    }
                });
            }
            else if (this.MasterFormType == 'Review frequency unit') {
                this._DocumentService.validateReviewFrequencyUnit(control.value).subscribe(function (res) {
                    if (res == false) {
                        result = true;
                        _this.myFormPopup.controls["MasterValueText"].setErrors({ remote: "Review frequency unit already exists." });
                    }
                });
            }
            else if (this.MasterFormType == 'Folder') {
                this._DocumentService.validateFolder(control.value).subscribe(function (res) {
                    if (res == false) {
                        result = true;
                        _this.myFormPopup.controls["MasterValueText"].setErrors({ remote: "Folder already exists." });
                    }
                });
            }
        }
        else
            result = null;
        return result ? { 'MasterValueText': { value: control.value } } : null;
    };
    DocumentComponent.prototype.SaveDocumentFormData = function (data, button) {
        var _this = this;
        this._DocumentService.saveDocument(data).subscribe(function (res) {
            _this.DocumentVersionID = res.DocumentVersionID;
            _this.DocumentId = res.DocumentId;
            _this.getDocumentVersionList();
            _this.saveMaterial();
            //this.router.navigate(['/pages/document/' + res.DocumentId]);
        });
    };
    DocumentComponent.prototype.SaveMasterPopupFormData = function (data, button) {
        var _this = this;
        if (this.MasterFormType == 'Document Type') {
            this._DocumentService.addMasterDocumentType(data.MasterValueText).subscribe(function (res) {
                _this.getDocumentTypeList();
                _this.MasterFormDocumentType = res;
                if (_this.DocumentId > 0) {
                    _this._DocumentService.getSingleDocument(_this.DocumentId).subscribe(function (res) {
                        if (_this.MasterFormDocumentType != 0) {
                            res.DocumentType = _this.MasterFormDocumentType;
                        }
                        if (_this.MasterFormReviewFrequencyUnitID != 0) {
                            res.ReviewFrequencyUnitID = _this.MasterFormReviewFrequencyUnitID;
                        }
                        if (_this.MasterFormFolderID != 0) {
                            res.FolderID = _this.MasterFormFolderID;
                        }
                        _this.addhtmltoform(res);
                    });
                }
                else {
                    var documentModel = new document_model_1.DocumentViewModel();
                    var docform = _this.myFormDocument;
                    documentModel.DocumentName = docform.controls.DocumentName.value;
                    documentModel.ReviewFrequency = docform.controls.ReviewFrequency.value;
                    documentModel.VersionNumber = docform.controls.VersionNumber.value;
                    documentModel.DocumentPathType = docform.controls.DocumentPathType.value;
                    documentModel.DocumentType = _this.MasterFormDocumentType;
                    documentModel.ReviewFrequencyUnitID = _this.MasterFormReviewFrequencyUnitID;
                    documentModel.FolderID = _this.MasterFormFolderID;
                    _this.addhtmltoform(documentModel);
                }
            });
        }
        else if (this.MasterFormType == 'Review frequency unit') {
            this._DocumentService.addMasterReviewFrequencyUnit(data.MasterValueText).subscribe(function (res) {
                _this.getMasterReviewFrequency();
                _this.MasterFormReviewFrequencyUnitID = res;
                if (_this.DocumentId > 0) {
                    _this._DocumentService.getSingleDocument(_this.DocumentId).subscribe(function (res) {
                        if (_this.MasterFormDocumentType != 0) {
                            res.DocumentType = _this.MasterFormDocumentType;
                        }
                        if (_this.MasterFormReviewFrequencyUnitID != 0) {
                            res.ReviewFrequencyUnitID = _this.MasterFormReviewFrequencyUnitID;
                        }
                        if (_this.MasterFormFolderID != 0) {
                            res.FolderID = _this.MasterFormFolderID;
                        }
                        _this.addhtmltoform(res);
                    });
                }
                else {
                    var documentModel = new document_model_1.DocumentViewModel();
                    var docform = _this.myFormDocument;
                    documentModel.DocumentName = docform.controls.DocumentName.value;
                    documentModel.ReviewFrequency = docform.controls.ReviewFrequency.value;
                    documentModel.VersionNumber = docform.controls.VersionNumber.value;
                    documentModel.DocumentPathType = docform.controls.DocumentPathType.value;
                    documentModel.DocumentType = _this.MasterFormDocumentType;
                    documentModel.ReviewFrequencyUnitID = _this.MasterFormReviewFrequencyUnitID;
                    documentModel.FolderID = _this.MasterFormFolderID;
                    _this.addhtmltoform(documentModel);
                }
            });
        }
        else if (this.MasterFormType == 'Folder') {
            this._DocumentService.addMasterDocumentFolder(data.MasterValueText).subscribe(function (res) {
                _this.getAllMasterDocumentFolder();
                _this.MasterFormFolderID = res;
                if (_this.DocumentId > 0) {
                    _this._DocumentService.getSingleDocument(_this.DocumentId).subscribe(function (res) {
                        if (_this.MasterFormDocumentType != 0) {
                            res.DocumentType = _this.MasterFormDocumentType;
                        }
                        if (_this.MasterFormReviewFrequencyUnitID != 0) {
                            res.ReviewFrequencyUnitID = _this.MasterFormReviewFrequencyUnitID;
                        }
                        if (_this.MasterFormFolderID != 0) {
                            res.FolderID = _this.MasterFormFolderID;
                        }
                        _this.addhtmltoform(res);
                    });
                }
                else {
                    var documentModel = new document_model_1.DocumentViewModel();
                    var docform = _this.myFormDocument;
                    documentModel.DocumentName = docform.controls.DocumentName.value;
                    documentModel.ReviewFrequency = docform.controls.ReviewFrequency.value;
                    documentModel.VersionNumber = docform.controls.VersionNumber.value;
                    documentModel.DocumentPathType = docform.controls.DocumentPathType.value;
                    documentModel.DocumentType = _this.MasterFormDocumentType;
                    documentModel.ReviewFrequencyUnitID = _this.MasterFormReviewFrequencyUnitID;
                    documentModel.FolderID = _this.MasterFormFolderID;
                    _this.addhtmltoform(documentModel);
                }
            });
        }
        this.closeDialog.nativeElement.click();
    };
    DocumentComponent.prototype.setMasterFormType = function (masterFormType) {
        this.MasterFormType = masterFormType;
        this.addMasterPopupToForm();
    };
    DocumentComponent.prototype.showNewVersionForm = function () {
        this.IsNewVersion = true;
    };
    DocumentComponent.prototype.getDocumentVersionList = function () {
        var _this = this;
        this.documentVersionListData = [];
        this.totalDocumentVersionRecords = 0;
        this._DocumentService.getDocumentVersionList(this.DocumentId).subscribe(function (res) {
            _this.documentVersionListData = res;
            _this.totalDocumentVersionRecords = res.length;
        });
    };
    DocumentComponent.prototype.EnableDisableLinkOrUpload = function (value) {
        this.DocumentPathType = value;
    };
    DocumentComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.fileName = input.files[0].name;
            this.fileToUpload = input.files[0];
        }
    };
    DocumentComponent.prototype.removeFile = function () {
        this.fileName = '';
        this.fileToUpload = null;
    };
    DocumentComponent.prototype.saveMaterial = function () {
        var _this = this;
        if (this.fileToUpload != null && this.fileToUpload != undefined) {
            var file = this.fileToUpload;
            var _formData = new FormData();
            _formData.append("FileName", file.name);
            _formData.append("MyFile", file);
            _formData.append("DocumentVersionID", this.DocumentVersionID.toString());
            var body = _formData;
            this._DocumentService.uploadMaterial(body).subscribe(function (res) {
                _this.removeFile();
                _this.router.navigate(['/pages/document/' + _this.DocumentId]);
                _this.onload();
            });
        }
    };
    DocumentComponent.prototype.deleteDocumentVersion = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete?")) {
            this._DocumentService.deleteDocumentVersion(event.DocumentVersionID).subscribe(function (res) {
                _this.getDocumentVersionList();
            });
        }
    };
    DocumentComponent.prototype.downloadMaterial = function (id, fileName) {
        this._DocumentService.downloadMaterial(id).subscribe(function (res) {
            FileSaver.saveAs(res, fileName);
        });
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], DocumentComponent.prototype, "closeDialog", void 0);
    DocumentComponent = __decorate([
        core_1.Component({
            selector: 'app-document',
            templateUrl: './document.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',],
            providers: [document_service_1.DocumentService],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, document_service_1.DocumentService, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _d || Object])
    ], DocumentComponent);
    return DocumentComponent;
    var _a, _b, _c, _d;
}());
exports.DocumentComponent = DocumentComponent;
//# sourceMappingURL=document.component.js.map