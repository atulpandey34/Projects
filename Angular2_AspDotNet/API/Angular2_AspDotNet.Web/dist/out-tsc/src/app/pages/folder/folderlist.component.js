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
var folder_service_1 = require("../folder/folder.service");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var user_service_1 = require("../user/user.service");
var folder_model_1 = require("../folder/folder.model");
var FolderListComponent = /** @class */ (function () {
    function FolderListComponent(fb, _FolderService, _masterDataService, _UserService, router, location, route) {
        this.fb = fb;
        this._FolderService = _FolderService;
        this._masterDataService = _masterDataService;
        this._UserService = _UserService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.userOptions = [];
        this.rolesOptions = [];
        this.totalRecords = 0;
        this.multiselectTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.multiselectSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '200px'
        };
        this.usermultiselectTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.usermultiselectSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '200px'
        };
    }
    FolderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterData = new folder_model_1.MasterDocumentFolderListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "FolderName";
        this.filterData.SortOrder = "asc";
        this._masterDataService.getUserList().subscribe(function (res) { _this.userOptions = res; });
        this._UserService.getRoleMultipleList().subscribe(function (res) { _this.rolesOptions = res; });
    };
    FolderListComponent.prototype.getList = function () {
        var _this = this;
        this._FolderService.getMasterDocumentFoldertListData(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.DocumentFolderListResult;
        });
    };
    FolderListComponent.prototype.loadDocumentFolderList = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "DocumentName" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.FolderName = event.filters.FolderName == undefined ? '' : event.filters.FolderName.value;
        this.filterData.RoleName = event.filters.RoleName == undefined ? '' : event.filters.RoleName.value;
        this.filterData.UserName = event.filters.UserName == undefined ? '' : event.filters.UserName.value;
        this.getList();
        var folderModel = new folder_model_1.FolderPopupViewModel();
        this.addFolderPopupToForm(folderModel);
    };
    FolderListComponent.prototype.addFolderPopupToForm = function (folderPopupViewModel) {
        this.folderAddPopup = this.fb.group({
            FolderName: [folderPopupViewModel.FolderName, [forms_1.Validators.required, this.validateDistinctFolder.bind(this)]],
            Roles: [folderPopupViewModel.Roles],
            Users: [folderPopupViewModel.Users],
        });
    };
    FolderListComponent.prototype.validateDistinctFolder = function (control) {
        var _this = this;
        var result = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._FolderService.validateFolder(control.value).subscribe(function (res) {
                if (res == false) {
                    result = true;
                    _this.folderAddPopup.controls["FolderName"].setErrors({ remote: "Folder already exists." });
                }
            });
        }
        else
            result = null;
        return result ? { 'FolderName': { value: control.value } } : null;
    };
    FolderListComponent.prototype.clearFolderPopupForm = function () {
        var folderModel = new folder_model_1.FolderPopupViewModel();
        this.addFolderPopupToForm(folderModel);
    };
    FolderListComponent.prototype.SaveFolderFormData = function (data) {
        var _this = this;
        data.MasterDocumentFolderID = this.MasterDocumentFolderID;
        if (data.Users != null && data.Users.length > 0) {
            data.UserList = [];
            for (var _i = 0, _a = data.Users; _i < _a.length; _i++) {
                var d = _a[_i];
                var user = new folder_model_1.DocumentFolderUserViewModel();
                user.DocumentFolderUserID = 0;
                user.UserID = d;
                user.DocumentFolderID = data.MasterDocumentFolderID;
                data.UserList.push(user);
            }
        }
        if (data.Roles != null && data.Roles.length > 0) {
            data.RoleList = [];
            for (var _b = 0, _c = data.Roles; _b < _c.length; _b++) {
                var d = _c[_b];
                var role = new folder_model_1.DocumentFolderRoleViewModel();
                role.DocumentFolderRoleID = 0;
                role.RoleID = d;
                role.DocumentFolderID = data.MasterDocumentFolderID;
                data.RoleList.push(role);
            }
        }
        this._FolderService.SaveFolderFormData(data).subscribe(function (res) {
            _this.getList();
            _this.closeDialog.nativeElement.click();
        });
    };
    FolderListComponent.prototype.EditFolderDetail = function (event) {
        var _this = this;
        this.MasterDocumentFolderID = event.MasterDocumentFolderID;
        this._FolderService.getSingleFolder(this.MasterDocumentFolderID).subscribe(function (res) {
            _this.addFolderPopupToForm(res);
        });
    };
    FolderListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this folder?")) {
            this._FolderService.deleteFolder(event.MasterDocumentFolderID).subscribe(function (res) {
                if (res == 0) {
                    alert("You can't delete this folder as it contain documents.");
                }
                else {
                    _this.getList();
                }
            });
        }
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], FolderListComponent.prototype, "closeDialog", void 0);
    FolderListComponent = __decorate([
        core_1.Component({
            selector: 'app-folderlist',
            templateUrl: './folderlist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [folder_service_1.FolderService, Mastereventdata_1.MasterEventDataService, user_service_1.UserService],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, folder_service_1.FolderService, Mastereventdata_1.MasterEventDataService, user_service_1.UserService, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object])
    ], FolderListComponent);
    return FolderListComponent;
    var _a, _b, _c, _d;
}());
exports.FolderListComponent = FolderListComponent;
//# sourceMappingURL=folderlist.component.js.map