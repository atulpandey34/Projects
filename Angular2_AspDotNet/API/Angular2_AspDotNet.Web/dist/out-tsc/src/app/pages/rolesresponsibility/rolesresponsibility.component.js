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
var user_service_1 = require("../user/user.service");
var rolesresponsibility_service_1 = require("../rolesresponsibility/rolesresponsibility.service");
var rolesresponsibility_model_1 = require("../rolesresponsibility/rolesresponsibility.model");
var FileSaver = require("file-saver");
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
        var roleresposibilityModel = new rolesresponsibility_model_1.RolesResponsibilityViewModel();
        this.addhtmltoform(roleresposibilityModel);
        this.addMasterPopupHtmlToForm();
        this._UserService.getRoleMultipleList().subscribe(function (res) { _this.roles = res; });
        this.getAllMasterRoleSection();
        this.RemoveSectionDetails(0);
    };
    RolesResponsibilityComponent.prototype.addhtmltoform = function (model) {
        this.rolesResponsibilityForm = this.fb.group({
            Type: [model.Type, forms_1.Validators.required],
            RoleID: [model.RoleID, forms_1.Validators.required],
            RoleResponsibilityID: [model.RoleResponsibilityID],
            RoleResponsibilityVersionID: [model.RoleResponsibilityVersionID],
            SectionID: [model.SectionID],
            LatestVersion: [model.LatestVersion],
            LatestChanges: [model.LatestChanges],
            SectionDetailForm: this.fb.array([this.buildOptions(new rolesresponsibility_model_1.RoleResponsibilityVersionSection())])
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
        if (model === void 0) { model = new rolesresponsibility_model_1.MasterRoleSectionViewModel(); }
        this.myFormPopup = this.fb.group({
            SectionName: [model.SectionName, [forms_1.Validators.required, this.validateDistinctMasterJobSection.bind(this)]],
        });
    };
    RolesResponsibilityComponent.prototype.addSectionDetails = function () {
        var roleresponsibilitymodel = new rolesresponsibility_model_1.RoleResponsibilityVersionSection();
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
        if (model === void 0) { model = new rolesresponsibility_model_1.RoleResponsibilityVersionSection(); }
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
                    var roleResponsibiltyVerSec = new rolesresponsibility_model_1.RoleResponsibilityVersionSection();
                    roleResponsibiltyVerSec.SectionID = aa.SectionID;
                    roleResponsibiltyVerSec.SectionDetails = aa.SectionDetails;
                    data.RoleResponsibilityVersionSectionViewModel.push(roleResponsibiltyVerSec);
                }
            }
        }
        else if (data.Type == 2) {
            var roleResponsibiltyVerSec = new rolesresponsibility_model_1.RoleResponsibilityVersionSection();
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
                var roleresposibilityModel = new rolesresponsibility_model_1.RolesResponsibilityViewModel();
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
            FileSaver.saveAs(res, fileName);
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
        var Model = new rolesresponsibility_model_1.MasterRoleSectionViewModel();
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
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], RolesResponsibilityComponent.prototype, "closeDialog", void 0);
    __decorate([
        core_1.ViewChild('dynamicContainer'),
        __metadata("design:type", Object)
    ], RolesResponsibilityComponent.prototype, "dynamicContainer", void 0);
    RolesResponsibilityComponent = __decorate([
        core_1.Component({
            selector: 'app-rolesreponsibility',
            templateUrl: './rolesresponsibility.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',],
            providers: [user_service_1.UserService, rolesresponsibility_service_1.RolesResponsibilityService],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, rolesresponsibility_service_1.RolesResponsibilityService, user_service_1.UserService, router_1.Router, common_1.Location, router_1.ActivatedRoute])
    ], RolesResponsibilityComponent);
    return RolesResponsibilityComponent;
}());
exports.RolesResponsibilityComponent = RolesResponsibilityComponent;
//# sourceMappingURL=rolesresponsibility.component.js.map