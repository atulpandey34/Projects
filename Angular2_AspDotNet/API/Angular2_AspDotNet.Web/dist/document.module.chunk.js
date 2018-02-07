webpackJsonp(["document.module"],{

/***/ "../../../../../src/app/pages/document/document.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myFormDocument\" novalidate (ngSubmit)=\"SaveDocumentFormData(myFormDocument.value,'save')\">\r\n    <div style=\"margin-top:10px;\">\r\n        <div style=\"margin:20px;\">\r\n            <div class=\"form-group\">\r\n                <label>Document Name</label>\r\n                <input type=\"text\" formControlName=\"DocumentName\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                <small [hidden]=\"myFormDocument.controls.DocumentName.valid\" class=\"text-danger\">\r\n                    Document Name is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Document Type</label>\r\n                <select #DocumentTypeDropdown formControlName=\"DocumentType\" class=\"form-control\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <option *ngFor=\"let documentType of documentTypeList \"\r\n                            value={{documentType.MasterDocumentTypeID}}>\r\n                        {{documentType.Type}}\r\n                    </option>\r\n                </select>\r\n                <!--<i class=\"fa fa-plus fa-3x\" aria-hidden=\"true\" style=\"float:left;\"></i>-->\r\n                <div>\r\n                    <button #buttonDocumentType type=\"button\" pButton icon=\"fa-plus\" data-toggle=\"modal\" data-target=\"#lg-modal\" label=\"Add\" (click)=\"setMasterFormType('Document Type')\" style=\"float: right;margin-top: 4px;\"></button>\r\n                </div>\r\n                <small [hidden]=\"myFormDocument.controls.DocumentType.valid\" class=\"text-danger\">\r\n                    Document Type is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Folder</label>\r\n                <select formControlName=\"FolderID\" class=\"form-control\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <option *ngFor=\"let df of documentFolder \"\r\n                            value={{df.MasterDocumentFolderID}}>\r\n                        {{df.FolderName}}\r\n                    </option>\r\n                </select>\r\n                <div>\r\n                    <button #buttonDocumentType type=\"button\" pButton icon=\"fa-plus\" data-toggle=\"modal\" data-target=\"#lg-modal\" label=\"Add\" (click)=\"setMasterFormType('Folder')\" style=\"float: right;margin-top: 4px;\"></button>\r\n                </div>\r\n                <small [hidden]=\"myFormDocument.controls.FolderID.valid\" class=\"text-danger\">\r\n                    Folder is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Review Frequency Unit</label>\r\n                <select formControlName=\"ReviewFrequencyUnitID\" class=\"form-control\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <option *ngFor=\"let rf of reviewFrequency \"\r\n                            value={{rf.MasterReviewFrequencyUnitID}}>\r\n                        {{rf.ReviewFrequencyUnit}}\r\n                    </option>\r\n                </select>\r\n                <div>\r\n                    <button #buttonDocumentType type=\"button\" pButton icon=\"fa-plus\" data-toggle=\"modal\" data-target=\"#lg-modal\" label=\"Add\" (click)=\"setMasterFormType('Review frequency unit')\" style=\"float: right;margin-top: 4px;\"></button>\r\n                </div>\r\n                <small [hidden]=\"myFormDocument.controls.ReviewFrequencyUnitID.valid\" class=\"text-danger\">\r\n                    ReviewFrequency Unit is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Review Frequency</label>\r\n                <input type=\"text\" maxlength=\"9\" formControlName=\"ReviewFrequency\" class=\"form-control\" />\r\n                <small [hidden]=\"myFormDocument.controls.ReviewFrequency.valid\" class=\"text-danger\">\r\n                    Review Frequency is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Document Path Type</label>\r\n                <label class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"DocumentPathType\" [checked]=\"DocumentPathType ===1\" formControlName=\"DocumentPathType\" (click)=\"EnableDisableLinkOrUpload(1)\" value=\"1\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Url</span>\r\n                </label>\r\n                <label class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"DocumentPathType\" [checked]=\"DocumentPathType === 2\" (click)=\"EnableDisableLinkOrUpload(2)\" formControlName=\"DocumentPathType\" value=\"2\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Physical file</span>\r\n                </label>\r\n                <small [hidden]=\"myFormDocument.controls.DocumentPathType.valid\" class=\"text-danger\">\r\n                    Document Path Type is required\r\n                </small>\r\n                <button *ngIf=\"DocumentVersionID>0\" (click)=\"showNewVersionForm();\" type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" style=\"float:right;\">New Version</button>\r\n            </div>\r\n            <div *ngIf=\"IsNewVersion==true || DocumentId==0\">\r\n                <div class=\"form-group\" *ngIf=\"DocumentPathType==1\">\r\n                    <label>External Link</label>\r\n\r\n                    <input type=\"text\" maxlength=\"200\" #youtubelinktextbox formControlName=\"ExternalLink\" class=\"form-control validation-field\">\r\n\r\n                </div>\r\n                <div class=\"form-group\" *ngIf=\"DocumentPathType==2\">\r\n                    <div class=\"input-group file-upload\">\r\n                        <input type=\"file\" (change)=\"fileChange(input)\" #input class=\"file-upload-btn\" />\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Choose a file...\" value=\"{{fileName}}\">\r\n                        <i class=\"fa fa-times delete-file\" (click)=\"removeFile()\" *ngIf=\"fileToUpload\"></i>\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\" *ngIf=\"DocumentVersionID>0\">\r\n                    <label>Version</label>\r\n                    <input type=\"text\" maxlength=\"9\" formControlName=\"VersionNumber\" class=\"form-control\" />\r\n                </div>\r\n                <div class=\"form-group\" *ngIf=\"DocumentVersionID>0\">\r\n                    <label>Changes</label>\r\n                    <input type=\"text\" maxlength=\"8000\" formControlName=\"SummaryOfChanges\" class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"SaveDocumentFormData(myFormDocument.value,'button')\" [disabled]=\"!myFormDocument.valid\">Save</button>\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n\r\n<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Add {{this.MasterFormType}}</h4>\r\n                <button #closeDialog type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow:scroll\">\r\n                <form [formGroup]=\"myFormPopup\" novalidate (ngSubmit)=\"SaveMasterPopupFormData(myFormPopup.value,'submit')\">\r\n                    <div style=\"margin-top:10px;\">\r\n                        <div style=\"margin:20px;\">\r\n                            <div class=\"form-group\">\r\n                                <label>{{this.MasterFormType}}</label>\r\n                                <input type=\"text\" formControlName=\"MasterValueText\" class=\"form-control validation-field\" />\r\n                                <small *ngIf=\"!myFormPopup.controls.MasterValueText.valid\" class=\"text-danger\">\r\n                                    Value is required and must be unique\r\n                                </small>\r\n                            </div>\r\n\r\n                            <div class=\"modal-footer\">\r\n                                <button class=\"btn btn-primary\"\r\n                                        type=\"button\"\r\n                                        (click)=\"SaveMasterPopupFormData(myFormPopup.value,'submit')\"\r\n                                        [disabled]=\"!myFormPopup.valid\">\r\n                                    Save\r\n                                </button>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n        <p-dataTable [editable]=\"true\" [value]=\"documentVersionListData\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                     resizableColumns=\"true\" [responsive]=\"true\">\r\n\r\n\r\n            <p-column [style]=\"{'width':'5%'}\" field=\"VersionNumber\" header=\"Version\"></p-column>\r\n            <p-column [style]=\"{'width':'30%'}\" field=\"ExternalLink\" header=\"FilePath\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"form-group\" [hidden]=\"car.ExternalLink ==''\">\r\n                        <a style=\"text-decoration:underline;\" target=\"_blank\" href=\"{{car.ExternalLink}}\">{{car.ExternalLink}}</a>\r\n                    </div>\r\n                    <div class=\"form-group\" [hidden]=\"car.FilePath ==null\">\r\n                        <a (click)=\"downloadMaterial(car.DocumentVersionID, car.FileName)\" *ngIf=\"car.FilePath !=null\" style=\"text-decoration:underline;\" href=\"javascript:void(0)\">\r\n                            {{car.FileName}}\r\n                        </a>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'40%'}\" field=\"SummaryOfChanges\" header=\"Changes\">\r\n                <ng-template let-document=\"rowData\" pTemplate=\"body\">\r\n                    <div>\r\n                        <span title=\"{{document.SummaryOfChanges}}\">{{document.SummaryOfChanges}}</span>\r\n                    </div>\r\n                </ng-template>\r\n\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'10%'}\" field=\"UploadDate\" header=\"Upload Date\"></p-column>\r\n            <p-column [style]=\"{'width':'10%'}\" field=\"UploadedBy\" header=\"Uploaded By\"></p-column>\r\n            <p-column [style]=\"{'width':'5%'}\" styleClass=\"col-button\">\r\n                <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n                    <button type=\"button\" title=\"Delete\" pButton (click)=\"deleteDocumentVersion(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n\r\n<iframe style=\"display:none;\" #iframeDownload src=\"\"></iframe>"

/***/ }),

/***/ "../../../../../src/app/pages/document/document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__document_document_model__ = __webpack_require__("../../../../../src/app/pages/document/document.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__document_document_service__ = __webpack_require__("../../../../../src/app/pages/document/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var apiURL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiEndpoint;
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
        this.formPopupModel = new __WEBPACK_IMPORTED_MODULE_5__document_document_model__["c" /* MasterPopupViewModel */]();
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
        var documentModel = new __WEBPACK_IMPORTED_MODULE_5__document_document_model__["b" /* DocumentViewModel */]();
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
            DocumentName: [model.DocumentName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            DocumentType: [model.DocumentType, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            FolderID: [model.FolderID, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            ReviewFrequency: [model.ReviewFrequency, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            ReviewFrequencyUnitID: [model.ReviewFrequencyUnitID, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            VersionNumber: [model.VersionNumber],
            DocumentPathType: [model.DocumentPathType, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            FilePath: [model.FilePath],
            SummaryOfChanges: [model.SummaryOfChanges],
            ExternalLink: [model.ExternalLink],
        });
    };
    DocumentComponent.prototype.addMasterPopupToForm = function () {
        this.myFormPopup = this.fb.group({
            MasterValueText: [this.formPopupModel.MasterValueText, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.validateDistinct.bind(this)]],
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
                    var documentModel = new __WEBPACK_IMPORTED_MODULE_5__document_document_model__["b" /* DocumentViewModel */]();
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
                    var documentModel = new __WEBPACK_IMPORTED_MODULE_5__document_document_model__["b" /* DocumentViewModel */]();
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
                    var documentModel = new __WEBPACK_IMPORTED_MODULE_5__document_document_model__["b" /* DocumentViewModel */]();
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
            __WEBPACK_IMPORTED_MODULE_8_file_saver__["saveAs"](res, fileName);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], DocumentComponent.prototype, "closeDialog", void 0);
    DocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-document',
            template: __webpack_require__("../../../../../src/app/pages/document/document.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__document_document_service__["a" /* DocumentService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__document_document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__document_document_service__["a" /* DocumentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object])
    ], DocumentComponent);
    return DocumentComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=document.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/document/document.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DocumentViewModel; });
/* unused harmony export DocumentTypeViewModel */
/* unused harmony export MasterReviewFrequencyUnitViewModel */
/* unused harmony export MasterDocumentFolderViewModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MasterPopupViewModel; });
/* unused harmony export DocumentVersionViewModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListFilterModel; });
/* unused harmony export DocumentListResultV1 */
/* unused harmony export DocumentListViewResult */
// Detail page models
var DocumentViewModel = /** @class */ (function () {
    function DocumentViewModel() {
    }
    return DocumentViewModel;
}());

var DocumentTypeViewModel = /** @class */ (function () {
    function DocumentTypeViewModel() {
    }
    return DocumentTypeViewModel;
}());

var MasterReviewFrequencyUnitViewModel = /** @class */ (function () {
    function MasterReviewFrequencyUnitViewModel() {
    }
    return MasterReviewFrequencyUnitViewModel;
}());

var MasterDocumentFolderViewModel = /** @class */ (function () {
    function MasterDocumentFolderViewModel() {
    }
    return MasterDocumentFolderViewModel;
}());

var MasterPopupViewModel = /** @class */ (function () {
    function MasterPopupViewModel() {
    }
    return MasterPopupViewModel;
}());

//document version child grid
var DocumentVersionViewModel = /** @class */ (function () {
    function DocumentVersionViewModel() {
    }
    return DocumentVersionViewModel;
}());

// List page models
var DocumentListFilterModel = /** @class */ (function () {
    function DocumentListFilterModel() {
    }
    return DocumentListFilterModel;
}());

var DocumentListResultV1 = /** @class */ (function () {
    function DocumentListResultV1() {
    }
    return DocumentListResultV1;
}());

var DocumentListViewResult = /** @class */ (function () {
    function DocumentListViewResult() {
        this.DocumentListResult = [];
    }
    return DocumentListViewResult;
}());

//# sourceMappingURL=document.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/document/document.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentModule", function() { return DocumentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentlist_component__ = __webpack_require__("../../../../../src/app/pages/document/documentlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__document_component__ = __webpack_require__("../../../../../src/app/pages/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__document_component__["a" /* DocumentComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__documentlist_component__["a" /* DocumentListComponent */], data: { breadcrumb: 'List' } },
    { path: 'document', component: __WEBPACK_IMPORTED_MODULE_6__document_component__["a" /* DocumentComponent */], data: { breadcrumb: 'Document' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__document_component__["a" /* DocumentComponent */], data: { breadcrumb: 'Edit' } },
];
var DocumentModule = /** @class */ (function () {
    function DocumentModule() {
    }
    DocumentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__document_component__["a" /* DocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__documentlist_component__["a" /* DocumentListComponent */]
            ]
        })
    ], DocumentModule);
    return DocumentModule;
}());

//# sourceMappingURL=document.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/document/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var apiURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint;
var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
    }
    DocumentService.prototype.getDocumentList = function (filter) {
        return this.http.post(apiURL + '/Document/GetDocumentListData', filter).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getDocumentTypeList = function () {
        return this.http.get(apiURL + '/Document/GetAllDocumentsType').map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getAllMasterDocumentFolder = function () {
        return this.http.get(apiURL + '/Document/GetAllMasterDocumentFolder').map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getMasterReviewFrequency = function () {
        return this.http.get(apiURL + '/Document/GetMasterReviewFrequency').map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getSingleDocument = function (id) {
        return this.http.get(apiURL + '/Document/GetSingleDocument?id=' + id).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.validateDocumentType = function (documentType) {
        return this.http.get(apiURL + '/Document/ValidateDocumentType?documentType=' + documentType).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.validateReviewFrequencyUnit = function (value) {
        return this.http.get(apiURL + '/Document/ValidateReviewFrequencyUnit?value=' + value).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.validateFolder = function (value) {
        return this.http.get(apiURL + '/Document/ValidateFolder?value=' + value).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.saveDocument = function (document) {
        return this.http.post(apiURL + '/Document/AddUpdateDocument', document).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getDocumentVersionList = function (documentid) {
        return this.http.get(apiURL + '/Document/GetDocumentVersionList?documentid=' + documentid).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.deleteDocument = function (id) {
        return this.http.get(apiURL + '/Document/DeleteDocument?id=' + id).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.deleteDocumentVersion = function (id) {
        return this.http.get(apiURL + '/Document/DeleteDocumentVersion?documentVesionId=' + id).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.addMasterReviewFrequencyUnit = function (MasterValueText) {
        return this.http.get(apiURL + '/Document/AddMasterReviewFrequencyUnit?MasterValueText=' + MasterValueText).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.addMasterDocumentFolder = function (MasterValueText) {
        return this.http.get(apiURL + '/Document/AddMasterDocumentFolder?MasterValueText=' + MasterValueText).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.addMasterDocumentType = function (MasterValueText) {
        return this.http.get(apiURL + '/Document/AddMasterDocumentType?MasterValueText=' + MasterValueText).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/Document/SaveMaterial', body).map(function (res) { });
    };
    DocumentService.prototype.downloadMaterial = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseContentType */].Blob });
        return this.http.get(apiURL + '/Document/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    DocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], DocumentService);
    return DocumentService;
    var _a;
}());

//# sourceMappingURL=document.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/document/documentlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadDocumentList($event)\">\r\n    <p-column field=\"DocumentName\" header=\"Document Name\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"UploadedBy\" header=\"Upload By\" [filter]=\"true\"  [sortable]=\"true\"></p-column>\r\n    <p-column field=\"FolderName\" header=\"Folder\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"VersionNumber\" header=\"Version\" [filter]=\"true\"  [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Review\" header=\"Review\" [filter]=\"true\"  [sortable]=\"true\"></p-column>\r\n    <p-column field=\"DocumentType\" header=\"Type\" [filter]=\"true\"  [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/document/documentlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__document_document_service__ = __webpack_require__("../../../../../src/app/pages/document/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__document_document_model__ = __webpack_require__("../../../../../src/app/pages/document/document.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(_DocumentService, router, location, _fb, route) {
        this._DocumentService = _DocumentService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.totalRecords = 0;
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        this.filterData = new __WEBPACK_IMPORTED_MODULE_6__document_document_model__["a" /* DocumentListFilterModel */]();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "DocumentName";
        this.filterData.SortOrder = "asc";
    };
    DocumentListComponent.prototype.getList = function () {
        var _this = this;
        this._DocumentService.getDocumentList(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.DocumentListResult;
        });
    };
    DocumentListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/document/' + event.DocumentID]);
    };
    DocumentListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this document ?")) {
            this._DocumentService.deleteDocument(event.DocumentID).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    DocumentListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/document']);
    };
    DocumentListComponent.prototype.loadDocumentList = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "DocumentName" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.DocumentName = event.filters.DocumentName == undefined ? '' : event.filters.DocumentName.value;
        this.filterData.UploadBy = event.filters.UploadedBy == undefined ? '' : event.filters.UploadedBy.value;
        this.filterData.Version = event.filters.VersionNumber == undefined ? '' : event.filters.VersionNumber.value;
        this.filterData.Review = event.filters.Review == undefined ? '' : event.filters.Review.value;
        this.filterData.Type = event.filters.DocumentType == undefined ? '' : event.filters.DocumentType.value;
        this.getList();
    };
    DocumentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documentlist',
            template: __webpack_require__("../../../../../src/app/pages/document/documentlist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__document_document_service__["a" /* DocumentService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__document_document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__document_document_service__["a" /* DocumentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object])
    ], DocumentListComponent);
    return DocumentListComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=documentlist.component.js.map

/***/ })

});
//# sourceMappingURL=document.module.chunk.js.map