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
var ngx_toastr_1 = require("ngx-toastr");
var app_settings_1 = require("../../app.settings");
var menu_service_1 = require("../../theme/components/menu/menu.service");
var customdynamicmenu_model_1 = require("./customdynamicmenu.model");
var customdynamicmenu_service_1 = require("./customdynamicmenu.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/debounceTime");
var CustomDynamicMenuComponent = /** @class */ (function () {
    function CustomDynamicMenuComponent(_CustomDynamicMenuService, fb, toastrService, appSettings, menuService, router, route) {
        this._CustomDynamicMenuService = _CustomDynamicMenuService;
        this.fb = fb;
        this.toastrService = toastrService;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.route = route;
        this.targets = ['_blank', '_self'];
        this.menuId = 0;
        this.icons = [
            { name: 'address-card-o', unicode: '&#xf2bc' },
            { name: 'bars', unicode: '&#xf0c9' },
            { name: 'bell-o', unicode: '&#xf0a2' },
            { name: 'calendar', unicode: '&#xf073' },
            { name: 'circle', unicode: '&#xf111' },
            { name: 'circle-o', unicode: '&#xf10c' },
            { name: 'cog', unicode: '&#xf013' },
            { name: 'comment', unicode: '&#xf075' },
            { name: 'comment-o', unicode: '&#xf0e5' },
            { name: 'credit-card', unicode: '&#xf09d' },
            { name: 'desktop', unicode: '&#xf108' },
            { name: 'exclamation-triangle', unicode: '&#xf071' },
            { name: 'folder', unicode: '&#xf07b' },
            { name: 'folder-o', unicode: '&#xf114' },
            { name: 'heart', unicode: '&#xf004' },
            { name: 'search', unicode: '&#xf002' },
            { name: 'users', unicode: '&#xf0c0' }
        ];
        this.menuItems = [];
        this.settings = this.appSettings.settings;
        //if (this.settings.theme.menu == 'vertical') {
        //    this.menuItems = this.menuService.getVerticalMenuItems();
        //}
        //if (this.settings.theme.menu == 'horizontal') {
        //    this.menuItems = this.menuService.getHorizontalMenuItems();
        //}
    }
    CustomDynamicMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addHtmlToForm();
        this.getAllMenu();
        this.route.params.subscribe(function (params) {
            _this.menuId = params['id']; //log the value of id
        });
        this.editMenu();
    };
    CustomDynamicMenuComponent.prototype.editMenu = function () {
        var _this = this;
        if (this.menuId > 0) {
            this._CustomDynamicMenuService.getSingle(this.menuId).subscribe(function (res) {
                _this.addHtmlToForm(res);
                _this.menuItems = _this.menuItems.filter(function (x) { return x.MenuId != res.MenuId; });
            });
        }
    };
    CustomDynamicMenuComponent.prototype.addHtmlToForm = function (model) {
        if (model === void 0) { model = new customdynamicmenu_model_1.MenuViewModel(); }
        this.form = this.fb.group({
            MenuId: [model.MenuId],
            Title: [model.Title, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            RouterLink: [model.RouterLink],
            Href: [model.Href],
            Icon: [model.Icon],
            Target: [model.Target],
            HasSubMenu: [model.HasSubMenu],
            ParentMenuId: [model.ParentMenuId],
            SortOrder: [model.SortOrder, forms_1.Validators.required],
            CreatedDate: [model.CreatedDate],
            CreatedBy: [model.CreatedBy],
            IsActive: [model.IsActive],
            IsDeleted: [model.IsDeleted],
        });
    };
    CustomDynamicMenuComponent.prototype.saveData = function (model) {
        var _this = this;
        this._CustomDynamicMenuService.appUpdateMenu(model).subscribe(function (res) {
            _this.router.navigate(['/pages/menu/list']);
        });
    };
    CustomDynamicMenuComponent.prototype.getAllMenu = function () {
        var _this = this;
        this._CustomDynamicMenuService.getAllMenu().subscribe(function (res) {
            _this.menuItems = res;
        });
    };
    CustomDynamicMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-custom-dynamic-menu',
            templateUrl: './customdynamicmenu.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [menu_service_1.MenuService, customdynamicmenu_service_1.CustomDynamicMenuService]
        }),
        __metadata("design:paramtypes", [customdynamicmenu_service_1.CustomDynamicMenuService, forms_1.FormBuilder,
            ngx_toastr_1.ToastrService,
            app_settings_1.AppSettings,
            menu_service_1.MenuService,
            router_1.Router, router_1.ActivatedRoute])
    ], CustomDynamicMenuComponent);
    return CustomDynamicMenuComponent;
}());
exports.CustomDynamicMenuComponent = CustomDynamicMenuComponent;
//# sourceMappingURL=customdynamicmenu.component.js.map