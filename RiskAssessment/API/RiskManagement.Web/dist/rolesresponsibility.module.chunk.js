webpackJsonp(["rolesresponsibility.module"],{

/***/ "../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rolesResponsibilityForm\" novalidate (ngSubmit)=\"SaveRoleResponsibilityFormData(rolesResponsibilityForm.value)\">\r\n    <div style=\"margin-top:10px;\">\r\n        <div style=\"margin:20px;\">\r\n            <div class=\"form-group\" style=\"text-align:right;\">\r\n                <button *ngIf=\"RoleResponsibilityVersionID>0 && IsLatestVersionApproved==false\" type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"approveVersion();\" [disabled]=\"!rolesResponsibilityForm.valid\">Approve</button>\r\n                <button *ngIf=\"IsLatestVersionApproved\" type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"showNewVersionForm();\" [disabled]=\"!rolesResponsibilityForm.valid\">New Version</button>\r\n                <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"SaveRoleResponsibilityFormData(rolesResponsibilityForm.value)\" [disabled]=\"!rolesResponsibilityForm.valid\">Save</button>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Role</label>\r\n                <select formControlName=\"RoleID\" (change)=\"GetRoleResponsibility($event.target.value)\">\r\n                    <option>--Select--</option>\r\n                    <option *ngFor=\"let role of roles \"\r\n                            value={{role.id}}>\r\n                        {{role.name}}\r\n                    </option>\r\n                </select>\r\n                <!--<small [hidden]=\"myFormDocument.controls.DocumentName.valid\" class=\"text-danger\">\r\n                    Document Name is required\r\n                </small>-->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Type</label>\r\n                <label class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"Type\"  value=\"1\" formControlName=\"Type\" [checked]=\"Type ===1\" class=\"custom-control-input\" >\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Template</span>\r\n                </label>\r\n                <label class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"Type\" value=\"2\" formControlName=\"Type\" [checked]=\"Type ===2\" class=\"custom-control-input\">\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Document</span>\r\n                </label>\r\n                <!--<small [hidden]=\"myFormDocument.controls.DocumentName.valid\" class=\"text-danger\">\r\n            Document Name is required\r\n        </small>-->\r\n            </div>\r\n                <div *ngIf=\"IsNewVersion==true || IsLatestVersionApproved==false\">\r\n                    <div class=\"form-group\" *ngIf=\"RoleResponsibilityVersionID>0\">\r\n                        <label>Version</label>\r\n                        <input type=\"text\" maxlength=\"9\" formControlName=\"LatestVersion\" class=\"form-control\" />\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"RoleResponsibilityVersionID>0\">\r\n                        <label>Changes</label>\r\n                        <input type=\"text\" maxlength=\"8000\" formControlName=\"LatestChanges\" class=\"form-control\" />\r\n                    </div>\r\n                </div>\r\n            <div #dynamicContainer>\r\n                <div id=\"sectiontemplate\" [hidden]=\"rolesResponsibilityForm.controls.Type.value!=1\">\r\n                    <div class=\"form-group\">\r\n                        <label>Job Section</label>\r\n                        <select formControlName=\"SectionID\">\r\n                            <option value=\"0\">--Select--</option>\r\n                            <option *ngFor=\"let mrs of masterRoleSectionList \"\r\n                                    value={{mrs.MasterRoleSectionID}}>\r\n                                {{mrs.SectionName}}\r\n                            </option>\r\n                        </select>\r\n                        <button type=\"button\" data-toggle=\"modal\" pButton icon=\"fa-plus\" data-target=\"#lg-modal\" (click)=\"clearMasterJobSectionPopupForm();\" label=\"Add New Section\"></button>\r\n                        <button type=\"button\" data-toggle=\"modal\" pButton icon=\"fa-plus\" (click)=\"addSectionDetails()\" label=\"Add\"></button>\r\n                        <!--<small [hidden]=\"myFormDocument.controls.DocumentName.valid\" class=\"text-danger\">\r\n                    Document Name is required\r\n                </small>-->\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n\r\n                    </div>\r\n                    <div formArrayName=\"SectionDetailForm\" *ngFor=\"let address of SectionDetailForm.controls; let i=index\">\r\n                        <div>\r\n                            <span class=\"fa fa-remove pull-right\" (click)=\"RemoveSectionDetails(i,address.controls.SectionID.value)\">\r\n                            </span>\r\n                        </div>\r\n                        <div [formGroupName]=\"i\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"hidden\" formControlName=\"SectionName\" />\r\n                                <input type=\"hidden\" formControlName=\"SectionID\" />\r\n                                <label>{{address.controls.SectionName.value}}:</label>\r\n                                <p-editor formControlName=\"SectionDetails\" [style]=\"{'height':'180px'}\">\r\n\r\n                                </p-editor>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"sectionrolerespnsibility\" [hidden]=\"rolesResponsibilityForm.controls.Type.value!=2\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group file-upload\">\r\n                            <input type=\"file\" (change)=\"fileChange(input)\" #input class=\"file-upload-btn\" />\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Choose a file...\" value=\"{{fileName}}\">\r\n                            <i class=\"fa fa-times delete-file\" (click)=\"removeFile()\" *ngIf=\"fileToUpload\"></i>\r\n                            <span class=\"input-group-btn\">\r\n                                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                <div class=\"form-group\">\r\n                    <p-dataTable [editable]=\"true\" [value]=\"roleresponsibilityVersionListData\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                                 resizableColumns=\"true\" [responsive]=\"true\">\r\n\r\n\r\n                        <p-column [style]=\"{'width':'10%'}\" field=\"Version\" header=\"Version\"></p-column>\r\n                        <p-column [style]=\"{'width':'12.5%'}\" field=\"ApprovedByName\" header=\"Approved By\"></p-column>\r\n                        <p-column [style]=\"{'width':'12.5%'}\" field=\"ApprovedDate\" header=\"Approved Date\"></p-column>\r\n                        <p-column [style]=\"{'width':'30%'}\" field=\"Changes\" header=\"Changes\"></p-column>\r\n                        <p-column [style]=\"{'width':'10%'}\" field=\"ModifiedByName\" header=\"Modified By\"></p-column>\r\n                        <p-column [style]=\"{'width':'10%'}\" field=\"ModifiedDate\" header=\"Modified Date\"></p-column>\r\n                        <p-column [style]=\"{'width':'15%'}\" styleClass=\"col-button\">\r\n                            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                                <button type=\"button\" title=\"View\" class=\"btn btn-primary\" *ngIf=\"rolesResponsibilityForm.controls.Type.value==1\" (click)=\"ViewRoleResponsibilityVersion(car)\">View</button>\r\n                                <div class=\"form-group\" *ngIf=\"rolesResponsibilityForm.controls.Type.value==2\">\r\n                                    <a class=\"btn btn-primary\" (click)=\"downloadMaterial(car.RoleResponsibilityVersionID, car.DocumentName)\" *ngIf=\"car.DocumentPath !=null\" style=\"text-decoration:underline;\" href=\"javascript:void(0)\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n           </div>\r\n        <div class=\"modal-footer\">\r\n\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n\r\n\r\n<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Add </h4>\r\n                <button #closeDialog type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow:scroll\">\r\n                <form [formGroup]=\"myFormPopup\" novalidate (ngSubmit)=\"SaveMasterJobSectionFormData(myFormPopup.value)\">\r\n                    <div style=\"margin-top:10px;\">\r\n                        <div style=\"margin:20px;\">\r\n                            <div class=\"form-group\">\r\n                                <label>Section</label>\r\n                                <input type=\"text\" formControlName=\"SectionName\" class=\"form-control validation-field\" />\r\n                                <small *ngIf=\"!myFormPopup.controls.SectionName.valid\" class=\"text-danger\">\r\n                                    Section Name is required and must be unique\r\n                                </small>\r\n                            </div>\r\n\r\n                            <div class=\"modal-footer\">\r\n                                <button class=\"btn btn-primary\"\r\n                                        type=\"button\"\r\n                                        (click)=\"SaveMasterJobSectionFormData(myFormPopup.value)\"\r\n                                        [disabled]=\"!myFormPopup.valid\">\r\n                                    Save\r\n                                </button>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesResponsibilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rolesresponsibility_rolesresponsibility_service__ = __webpack_require__("../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__ = __webpack_require__("../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.model.ts");
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









var RolesResponsibilityComponent = /** @class */ (function () {
    function RolesResponsibilityComponent(fb, _RolesResponsibilityService, _UserService, router, location, route) {
        this.fb = fb;
        this._RolesResponsibilityService = _RolesResponsibilityService;
        this._UserService = _UserService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.roleresponsibilityVersionListData = []; // for role responsibility version child grid
        this.IsLatestVersionApproved = false;
        this.IsNewVersion = false;
    }
    Object.defineProperty(RolesResponsibilityComponent.prototype, "SectionDetailForm", {
        get: function () {
            return this.rolesResponsibilityForm.get('SectionDetailForm');
        },
        enumerable: true,
        configurable: true
    });
    RolesResponsibilityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var roleresposibilityModel = new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["c" /* RolesResponsibilityViewModel */]();
        this.addhtmltoform(roleresposibilityModel);
        this.addMasterPopupHtmlToForm();
        this._UserService.getRoleMultipleList().subscribe(function (res) { _this.roles = res; });
        this.getAllMasterRoleSection();
        this.RemoveSectionDetails(0);
    };
    RolesResponsibilityComponent.prototype.addhtmltoform = function (model) {
        this.rolesResponsibilityForm = this.fb.group({
            Type: [model.Type, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            RoleID: [model.RoleID, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            RoleResponsibilityID: [model.RoleResponsibilityID],
            RoleResponsibilityVersionID: [model.RoleResponsibilityVersionID],
            SectionID: [model.SectionID],
            LatestVersion: [model.LatestVersion],
            LatestChanges: [model.LatestChanges],
            SectionDetailForm: this.fb.array([this.buildOptions(new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["b" /* RoleResponsibilityVersionSection */]())])
        });
    };
    RolesResponsibilityComponent.prototype.sethtmltoform = function (model) {
        this.IsNewVersion = false;
        if (model.Type != 0) {
            this.Type = model.Type;
            this.rolesResponsibilityForm.controls['Type'].setValue(model.Type);
        }
        if (model.RoleResponsibilityID != 0) {
            this.rolesResponsibilityForm.controls['RoleResponsibilityID'].setValue(model.RoleResponsibilityID);
        }
        if (model.SectionID != 0) {
            this.rolesResponsibilityForm.controls['SectionID'].setValue(model.SectionID);
        }
        this.rolesResponsibilityForm.controls['LatestVersion'].setValue(model.LatestVersion);
        this.rolesResponsibilityForm.controls['LatestChanges'].setValue(model.LatestChanges);
    };
    RolesResponsibilityComponent.prototype.addMasterPopupHtmlToForm = function (model) {
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["a" /* MasterRoleSectionViewModel */](); }
        this.myFormPopup = this.fb.group({
            SectionName: [model.SectionName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.validateDistinctMasterJobSection.bind(this)]],
        });
    };
    RolesResponsibilityComponent.prototype.addSectionDetails = function () {
        var roleresponsibilitymodel = new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["b" /* RoleResponsibilityVersionSection */]();
        roleresponsibilitymodel.SectionID = this.rolesResponsibilityForm.controls['SectionID'].value;
        if (roleresponsibilitymodel.SectionID != undefined && roleresponsibilitymodel.SectionID != null && roleresponsibilitymodel.SectionID != 0) {
            var roleSection = this.masterRoleSectionList.filter(function (x) { return x.MasterRoleSectionID == roleresponsibilitymodel.SectionID; })[0];
            if (roleSection != undefined && roleSection != null) {
                roleresponsibilitymodel.SectionName = roleSection.SectionName;
                this.SectionDetailForm.push(this.buildOptions(roleresponsibilitymodel));
                this.masterRoleSectionList = this.masterRoleSectionList.filter(function (x) { return x.MasterRoleSectionID != roleresponsibilitymodel.SectionID; });
            }
        }
    };
    RolesResponsibilityComponent.prototype.RemoveSectionDetails = function (i, SectionID) {
        if (SectionID === void 0) { SectionID = 0; }
        var control = this.rolesResponsibilityForm.controls['SectionDetailForm'];
        if (control.length > 0) {
            control.removeAt(i);
        }
        if (SectionID != 0) {
            this.masterRoleSectionList.push(this.masterRoleSectionListBackup.filter(function (x) { return x.MasterRoleSectionID == SectionID; })[0]);
        }
    };
    RolesResponsibilityComponent.prototype.buildOptions = function (model) {
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["b" /* RoleResponsibilityVersionSection */](); }
        return this.fb.group({
            RoleResponsibilityVersionSectionID: [model.RoleResponsibilityVersionSectionID],
            SectionID: [model.SectionID],
            SectionName: [model.SectionName],
            SectionDetails: [model.SectionDetails],
        });
    };
    RolesResponsibilityComponent.prototype.SaveRoleResponsibilityFormData = function (data) {
        var _this = this;
        data.RoleResponsibilityVersionSectionViewModel = [];
        if (data.Type == 1) {
            if (data.SectionDetailForm != undefined && data.SectionDetailForm != null) {
                for (var _i = 0, _a = data.SectionDetailForm; _i < _a.length; _i++) {
                    var aa = _a[_i];
                    var roleResponsibiltyVerSec = new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["b" /* RoleResponsibilityVersionSection */]();
                    roleResponsibiltyVerSec.SectionID = aa.SectionID;
                    roleResponsibiltyVerSec.SectionDetails = aa.SectionDetails;
                    data.RoleResponsibilityVersionSectionViewModel.push(roleResponsibiltyVerSec);
                }
            }
        }
        else if (data.Type == 2) {
            var roleResponsibiltyVerSec = new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["b" /* RoleResponsibilityVersionSection */]();
            roleResponsibiltyVerSec.DocumentName = this.fileName;
            data.RoleResponsibilityVersionSectionViewModel.push(roleResponsibiltyVerSec);
        }
        data.RoleResponsibilityVersionID = this.RoleResponsibilityVersionID;
        this._RolesResponsibilityService.addUpdateRoleResponsibility(data).subscribe(function (res) {
            _this.RoleResponsibilityVersionID = res.RoleResponsibilityVersionID;
            if (data.Type == 2) {
                _this.saveMaterial(res.RoleID);
            }
            else if (data.Type == 1) {
                _this.GetRoleResponsibility(res.RoleID);
            }
        });
    };
    RolesResponsibilityComponent.prototype.getAllMasterRoleSection = function (sectionid) {
        var _this = this;
        if (sectionid === void 0) { sectionid = 0; }
        this._RolesResponsibilityService.getAllMasterRoleSection().subscribe(function (res) {
            _this.masterRoleSectionList = res;
            _this.masterRoleSectionListBackup = res;
            if (sectionid != 0) {
                _this.rolesResponsibilityForm.controls['SectionID'].setValue(sectionid);
            }
        });
    };
    RolesResponsibilityComponent.prototype.GetRoleResponsibility = function (roleid) {
        var _this = this;
        this.Type = 0;
        this.masterRoleSectionList = this.masterRoleSectionListBackup;
        this._RolesResponsibilityService.getRoleResponsibility(roleid).subscribe(function (res) {
            for (var i = 0; i <= _this.SectionDetailForm.controls.length; i++) {
                _this.RemoveSectionDetails(0);
            }
            if (res != null) {
                _this.Type = res.Type;
                _this.RoleResponsibilityID = res.RoleResponsibilityID;
                _this.RoleResponsibilityVersionID = res.RoleResponsibilityVersionID;
                _this.sethtmltoform(res);
                //this.RemoveSectionDetails(0);
                if (res.RoleResponsibilityVersionSectionViewModel != null && res.RoleResponsibilityVersionSectionViewModel.length > 0) {
                    var _loop_1 = function (aa) {
                        _this.masterRoleSectionList = _this.masterRoleSectionList.filter(function (x) { return x.MasterRoleSectionID != aa.SectionID; });
                        ;
                        _this.SectionDetailForm.push(_this.buildOptions(aa));
                    };
                    for (var _i = 0, _a = res.RoleResponsibilityVersionSectionViewModel; _i < _a.length; _i++) {
                        var aa = _a[_i];
                        _loop_1(aa);
                    }
                }
            }
            else {
                var roleresposibilityModel = new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["c" /* RolesResponsibilityViewModel */]();
                roleresposibilityModel.RoleID = roleid;
                _this.sethtmltoform(roleresposibilityModel);
                _this.RoleResponsibilityID = 0;
                _this.RoleResponsibilityVersionID = 0;
                _this.RemoveSectionDetails(0);
            }
            _this.getRoleResponsibilityVersionList();
        });
    };
    RolesResponsibilityComponent.prototype.getRoleResponsibilityVersionList = function () {
        var _this = this;
        this.roleresponsibilityVersionListData = [];
        this._RolesResponsibilityService.getRoleResponsibilityVersionList(this.RoleResponsibilityID).subscribe(function (res) {
            _this.roleresponsibilityVersionListData = res;
            if (res.length > 0 && (res[0].ApprovedDate != null)) {
                _this.IsLatestVersionApproved = true;
                _this.dynamicContainer.nativeElement.style.pointerEvents = 'none';
            }
            else {
                _this.IsLatestVersionApproved = false;
                _this.dynamicContainer.nativeElement.style.pointerEvents = '';
            }
        });
    };
    RolesResponsibilityComponent.prototype.showNewVersionForm = function () {
        this.IsNewVersion = true;
        this.dynamicContainer.nativeElement.style.pointerEvents = '';
        this.rolesResponsibilityForm.controls['LatestChanges'].setValue('');
        //this.RoleResponsibilityVersionID = 0;
    };
    RolesResponsibilityComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.fileName = input.files[0].name;
            this.fileToUpload = input.files[0];
        }
    };
    RolesResponsibilityComponent.prototype.removeFile = function () {
        this.fileName = '';
        this.fileToUpload = null;
    };
    RolesResponsibilityComponent.prototype.saveMaterial = function (roleid) {
        var _this = this;
        if (roleid === void 0) { roleid = 0; }
        if (this.fileToUpload != null && this.fileToUpload != undefined) {
            var file = this.fileToUpload;
            var _formData = new FormData();
            _formData.append("FileName", file.name);
            _formData.append("MyFile", file);
            _formData.append("RoleResponsibilityVersionID", this.RoleResponsibilityVersionID.toString());
            var body = _formData;
            this._RolesResponsibilityService.uploadMaterial(body).subscribe(function (res) {
                _this.removeFile();
                if (roleid != 0) {
                    _this.GetRoleResponsibility(roleid);
                }
            });
        }
    };
    RolesResponsibilityComponent.prototype.ViewRoleResponsibilityVersion = function (event) {
        var _this = this;
        this._RolesResponsibilityService.getRoleResponsibilityVerion(event.RoleResponsibilityVersionID).subscribe(function (res) {
            if (res.LatestRoleResponsibilityVersionID != res.RoleResponsibilityVersionID) {
                _this.dynamicContainer.nativeElement.style.pointerEvents = 'none';
            }
            else {
                _this.dynamicContainer.nativeElement.style.pointerEvents = '';
            }
            if (res != null) {
                for (var i = 0; i < _this.SectionDetailForm.controls.length; i++) {
                    _this.RemoveSectionDetails(0);
                }
                _this.sethtmltoform(res);
                _this.RemoveSectionDetails(0);
                if (res.RoleResponsibilityVersionSectionViewModel != null && res.RoleResponsibilityVersionSectionViewModel.length > 0) {
                    for (var _i = 0, _a = res.RoleResponsibilityVersionSectionViewModel; _i < _a.length; _i++) {
                        var aa = _a[_i];
                        _this.SectionDetailForm.push(_this.buildOptions(aa));
                    }
                }
            }
        });
    };
    RolesResponsibilityComponent.prototype.downloadMaterial = function (id, fileName) {
        this._RolesResponsibilityService.downloadMaterial(id).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_8_file_saver__["saveAs"](res, fileName);
        });
    };
    RolesResponsibilityComponent.prototype.approveVersion = function () {
        var _this = this;
        this._RolesResponsibilityService.approveVersion(this.RoleResponsibilityVersionID).subscribe(function (res) {
            _this.getRoleResponsibilityVersionList();
        });
    };
    RolesResponsibilityComponent.prototype.validateDistinctMasterJobSection = function (control) {
        var _this = this;
        var result = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._RolesResponsibilityService.validateMasterJobSection(control.value).subscribe(function (res) {
                if (res == false) {
                    result = true;
                    _this.myFormPopup.controls["SectionName"].setErrors({ remote: "SectionName already exists." });
                }
            });
        }
        else
            result = null;
        return result ? { 'SectionName': { value: control.value } } : null;
    };
    RolesResponsibilityComponent.prototype.clearMasterJobSectionPopupForm = function () {
        var Model = new __WEBPACK_IMPORTED_MODULE_7__rolesresponsibility_rolesresponsibility_model__["a" /* MasterRoleSectionViewModel */]();
        this.addMasterPopupHtmlToForm(Model);
    };
    RolesResponsibilityComponent.prototype.SaveMasterJobSectionFormData = function (data) {
        var _this = this;
        this._RolesResponsibilityService.SaveMasterJobSectionFormData(data).subscribe(function (res) {
            _this.getAllMasterRoleSection(res);
            ;
            _this.closeDialog.nativeElement.click();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], RolesResponsibilityComponent.prototype, "closeDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dynamicContainer'),
        __metadata("design:type", Object)
    ], RolesResponsibilityComponent.prototype, "dynamicContainer", void 0);
    RolesResponsibilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rolesreponsibility',
            template: __webpack_require__("../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__rolesresponsibility_rolesresponsibility_service__["a" /* RolesResponsibilityService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__rolesresponsibility_rolesresponsibility_service__["a" /* RolesResponsibilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__rolesresponsibility_rolesresponsibility_service__["a" /* RolesResponsibilityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _f || Object])
    ], RolesResponsibilityComponent);
    return RolesResponsibilityComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=rolesresponsibility.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RolesResponsibilityViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoleResponsibilityVersionSection; });
/* unused harmony export RoleViewModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterRoleSectionViewModel; });
// Detail page models
var RolesResponsibilityViewModel = /** @class */ (function () {
    function RolesResponsibilityViewModel() {
    }
    return RolesResponsibilityViewModel;
}());

var RoleResponsibilityVersionSection = /** @class */ (function () {
    function RoleResponsibilityVersionSection() {
    }
    return RoleResponsibilityVersionSection;
}());

var RoleViewModel = /** @class */ (function () {
    function RoleViewModel() {
    }
    return RoleViewModel;
}());

var MasterRoleSectionViewModel = /** @class */ (function () {
    function MasterRoleSectionViewModel() {
    }
    return MasterRoleSectionViewModel;
}());

//# sourceMappingURL=rolesresponsibility.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesResponsibilityModule", function() { return RolesResponsibilityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rolesresponsibility_component__ = __webpack_require__("../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__rolesresponsibility_component__["a" /* RolesResponsibilityComponent */], pathMatch: 'full' },
];
var RolesResponsibilityModule = /** @class */ (function () {
    function RolesResponsibilityModule() {
    }
    RolesResponsibilityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__rolesresponsibility_component__["a" /* RolesResponsibilityComponent */]
            ]
        })
    ], RolesResponsibilityModule);
    return RolesResponsibilityModule;
}());

//# sourceMappingURL=rolesresponsibility.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/rolesresponsibility/rolesresponsibility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesResponsibilityService; });
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
var RolesResponsibilityService = /** @class */ (function () {
    function RolesResponsibilityService(http) {
        this.http = http;
    }
    RolesResponsibilityService.prototype.getAllMasterRoleSection = function () {
        return this.http.get(apiURL + '/roleresponsibility/GetAllMasterRoleSection').map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.getRoleResponsibility = function (roleid) {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibility?roleid=' + roleid).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.getRoleResponsibilityVerion = function (id) {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibilityVerion?RoleResponsibilityVersionID=' + id).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.addUpdateRoleResponsibility = function (model) {
        return this.http.post(apiURL + '/roleresponsibility/AddUpdateRoleResponsibility', model).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.getRoleResponsibilityVersionList = function (roleresponsibilityid) {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibilityVersionList?roleresponsibilityid=' + roleresponsibilityid).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.approveVersion = function (id) {
        return this.http.get(apiURL + '/roleresponsibility/ApproveVersion?id=' + id).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/roleresponsibility/SaveMaterial', body).map(function (res) { });
    };
    RolesResponsibilityService.prototype.downloadMaterial = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseContentType */].Blob });
        return this.http.get(apiURL + '/roleresponsibility/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    RolesResponsibilityService.prototype.SaveMasterJobSectionFormData = function (model) {
        return this.http.post(apiURL + '/roleresponsibility/SaveMasterJobSectionFormData', model).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.validateMasterJobSection = function (value) {
        return this.http.get(apiURL + '/roleresponsibility/ValidateMasterJobSection?value=' + value).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], RolesResponsibilityService);
    return RolesResponsibilityService;
    var _a;
}());

//# sourceMappingURL=rolesresponsibility.service.js.map

/***/ })

});
//# sourceMappingURL=rolesresponsibility.module.chunk.js.map