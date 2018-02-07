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
var user_model_1 = require("../user/user.model");
var customdynamicmenu_model_1 = require("./customdynamicmenu.model");
var customdynamicmenu_service_1 = require("./customdynamicmenu.service");
var RolesMenuConponent = /** @class */ (function () {
    function RolesMenuConponent(_CustomDynamicMenuService, fb, _UserService, router, location, route) {
        this._CustomDynamicMenuService = _CustomDynamicMenuService;
        this.fb = fb;
        this._UserService = _UserService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.roleList = [];
        this.selectedRoleId = 0;
        this.allMappingOfARole = [];
        this.menuItems = [];
    }
    RolesMenuConponent.prototype.ngOnInit = function () {
        this.getRoleList();
        this.addMasterPopupHtmlToForm();
    };
    RolesMenuConponent.prototype.getRoleList = function () {
        var _this = this;
        this._UserService.getRoleList().subscribe(function (res) {
            _this.roleList = res.filter(function (x) { return x.IsAdmin == false; });
        });
    };
    RolesMenuConponent.prototype.addMasterPopupHtmlToForm = function (model) {
        if (model === void 0) { model = new user_model_1.RoleViewModel(); }
        this.myFormPopup = this.fb.group({
            RoleId: [model.RoleId],
            RoleName: [model.RoleName, [forms_1.Validators.required]],
        });
    };
    RolesMenuConponent.prototype.SaveMasterPopupFormData = function (model) {
        var _this = this;
        this._CustomDynamicMenuService.addUpdateRole(model).subscribe(function (res) {
            _this.closeDialog.nativeElement.click();
            _this.getRoleList();
            _this.selectedRoleId = 0;
            _this.menuItems = [];
            _this.allMappingOfARole = [];
        });
    };
    RolesMenuConponent.prototype.setRoleId = function (id) {
        this.selectedRoleId = id;
        this.getAllMenu();
    };
    RolesMenuConponent.prototype.getAllMenu = function () {
        var _this = this;
        this._CustomDynamicMenuService.getAllMenu().subscribe(function (res) {
            _this.menuItems = [];
            _this.menuItems = res.filter(function (x) { return x.ParentMenuId == 0; });
            _this._CustomDynamicMenuService.getAllRoleMenu(_this.selectedRoleId).subscribe(function (res) {
                _this.allMappingOfARole = res;
                var _loop_1 = function (dd) {
                    _this.menuItems.find(function (x) { return x.MenuId == dd.MenuId; }).checked = true;
                };
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var dd = res_1[_i];
                    _loop_1(dd);
                }
            });
        });
    };
    RolesMenuConponent.prototype.SaveRoleMapping = function () {
        var data = this.menuItems
            .filter(function (opt) { return opt.checked; })
            .map(function (opt) { return opt.MenuId; });
        this.list = new customdynamicmenu_model_1.RoleMenuMappingListModel();
        this.list.RoleId = this.selectedRoleId;
        this.list.RoleMenuMappingViewModel = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var selected = data_1[_i];
            var val = new customdynamicmenu_model_1.RoleMenuMappingViewModel();
            val.MenuId = selected;
            val.RoleId = this.selectedRoleId;
            this.list.RoleMenuMappingViewModel.push(val);
        }
        this._CustomDynamicMenuService.addUpdateRoleMenu(this.list).subscribe();
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], RolesMenuConponent.prototype, "closeDialog", void 0);
    RolesMenuConponent = __decorate([
        core_1.Component({
            selector: 'app-dynamic-role',
            templateUrl: './dynamicrole.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',],
            providers: [user_service_1.UserService, customdynamicmenu_service_1.CustomDynamicMenuService],
        }),
        __metadata("design:paramtypes", [customdynamicmenu_service_1.CustomDynamicMenuService, forms_1.FormBuilder, user_service_1.UserService, router_1.Router, common_1.Location, router_1.ActivatedRoute])
    ], RolesMenuConponent);
    return RolesMenuConponent;
}());
exports.RolesMenuConponent = RolesMenuConponent;
//# sourceMappingURL=dynamicrole.component.js.map