webpackJsonp(["customdynamicmenu.module"],{

/***/ "../../../../../src/app/pages/menu/customdynamicmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\r\n    <div class=\"col-xl-6 col-md-8 col-10\">\r\n        <div class=\"card border-0 box-shadow rounded-0\">\r\n            <div class=\"card-block pt-0\">\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"saveData(form.value)\" class=\"text-left mt-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Title</label>\r\n                        <input formControlName=\"Title\" class=\"form-control validation-field\" type=\"text\">\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('Title').touched && form.get('Title').hasError('required')\">Menu title is required</small>\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('Title').touched && form.get('Title').hasError('minlength')\">Menu title isn't long enough, minimum of 3 characters</small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Icon</label>\r\n                        <select class=\"form-control fa-select\" formControlName=\"Icon\">\r\n                            <option [selected]=\"form.controls.Icon.value == null\" value=\"\">-- Select Icon --</option>\r\n                            <option *ngFor=\"let icon of icons\" [selected]=\"icon.name == icon\" [value]=\"icon.name\"><span [innerHTML]=\"icon.unicode\"></span> {{icon.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Router Link</label>\r\n                        <input formControlName=\"RouterLink\" class=\"form-control validation-field\" type=\"text\" placement=\"right\" [ngbTooltip]=\"'e.g. /pages/dashboard'\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input formControlName=\"HasSubMenu\" class=\"custom-control-input checkbox-dark-gray\" type=\"checkbox\">\r\n                            <span class=\"custom-control-indicator\"></span>\r\n                            <span class=\"custom-control-description align-middle\">Has sub menu</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Href</label>\r\n                        <input formControlName=\"Href\" class=\"form-control validation-field\" type=\"text\" placement=\"right\" [ngbTooltip]=\"'e.g. http://themeseason.com'\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Target:</label>\r\n                        <label *ngFor=\"let target of targets\" class=\"custom-control custom-radio\">\r\n                            <input formControlName=\"Target\" type=\"radio\" class=\"custom-control-input radio-dark-gray\" [value]=\"target\">\r\n                            <span class=\"custom-control-indicator\"></span>\r\n                            <span class=\"custom-control-description text-capitalize\">{{target}}</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Parent menu</label>\r\n                        <select class=\"form-control\" formControlName=\"ParentMenuId\">\r\n                            <option  value=\"0\">-- Select Parent Menu --</option>\r\n                            <option *ngFor=\"let item of menuItems\"  [value]=\"item.MenuId\">{{item.Title}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Sort Order</label>\r\n                        <input formControlName=\"SortOrder\" class=\"form-control validation-field\" type=\"number\" placement=\"right\">\r\n                        <small class=\"text-danger\" *ngIf=\"form.get('SortOrder').touched && form.get('SortOrder').hasError('required')\">Menu title is required</small>\r\n                    </div>\r\n                    <div class=\"form-group text-center mb-0\">\r\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-plus mr-2\"></i>Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/menu/customdynamicmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDynamicMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_components_menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customdynamicmenu_model__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customdynamicmenu_service__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_5__customdynamicmenu_model__["b" /* MenuViewModel */](); }
        this.form = this.fb.group({
            MenuId: [model.MenuId],
            Title: [model.Title, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])],
            RouterLink: [model.RouterLink],
            Href: [model.Href],
            Icon: [model.Icon],
            Target: [model.Target],
            HasSubMenu: [model.HasSubMenu],
            ParentMenuId: [model.ParentMenuId],
            SortOrder: [model.SortOrder, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-custom-dynamic-menu',
            template: __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_4__theme_components_menu_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_6__customdynamicmenu_service__["a" /* CustomDynamicMenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__customdynamicmenu_service__["a" /* CustomDynamicMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__customdynamicmenu_service__["a" /* CustomDynamicMenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__theme_components_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__theme_components_menu_menu_service__["a" /* MenuService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["ActivatedRoute"]) === "function" && _g || Object])
    ], CustomDynamicMenuComponent);
    return CustomDynamicMenuComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=customdynamicmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/menu/customdynamicmenu.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuFilterModel; });
/* unused harmony export GetAllMenuListDataViewResult */
/* unused harmony export MenuViewList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RoleMenuMappingViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RoleMenuMappingListModel; });
var MenuViewModel = /** @class */ (function () {
    function MenuViewModel() {
        this.checked = false;
    }
    return MenuViewModel;
}());

var MenuFilterModel = /** @class */ (function () {
    function MenuFilterModel() {
    }
    return MenuFilterModel;
}());

var GetAllMenuListDataViewResult = /** @class */ (function () {
    function GetAllMenuListDataViewResult() {
    }
    return GetAllMenuListDataViewResult;
}());

var MenuViewList = /** @class */ (function () {
    function MenuViewList() {
    }
    return MenuViewList;
}());

var RoleMenuMappingViewModel = /** @class */ (function () {
    function RoleMenuMappingViewModel() {
        this.RoleMenuMappingId = 0;
        this.RoleId = 0;
        this.MenuId = 0;
        this.OrganizationId = 0;
        this.CreatedBy = 0;
    }
    return RoleMenuMappingViewModel;
}());

var RoleMenuMappingListModel = /** @class */ (function () {
    function RoleMenuMappingListModel() {
        this.RoleMenuMappingViewModel = [];
        this.RoleId = 0;
    }
    return RoleMenuMappingListModel;
}());

//# sourceMappingURL=customdynamicmenu.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/menu/customdynamicmenu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDynamicMenuModule", function() { return CustomDynamicMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_component__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customdynamicmenulist_component__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenulist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dynamicrole_component__ = __webpack_require__("../../../../../src/app/pages/menu/dynamicrole.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_component__["a" /* CustomDynamicMenuComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_9__customdynamicmenulist_component__["a" /* CustomDynamicMenuListComponent */], data: { breadcrumb: 'Menu List' } },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_component__["a" /* CustomDynamicMenuComponent */], data: { breadcrumb: 'Menu' } },
    { path: 'role', component: __WEBPACK_IMPORTED_MODULE_10__dynamicrole_component__["a" /* RolesMenuConponent */], data: { breadcrumb: 'Role' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_component__["a" /* CustomDynamicMenuComponent */], data: { breadcrumb: 'Edit' } },
];
var CustomDynamicMenuModule = /** @class */ (function () {
    function CustomDynamicMenuModule() {
    }
    CustomDynamicMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_component__["a" /* CustomDynamicMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dynamicrole_component__["a" /* RolesMenuConponent */],
                __WEBPACK_IMPORTED_MODULE_9__customdynamicmenulist_component__["a" /* CustomDynamicMenuListComponent */]
            ]
        })
    ], CustomDynamicMenuModule);
    return CustomDynamicMenuModule;
}());

//# sourceMappingURL=customdynamicmenu.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/menu/customdynamicmenulist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <!--<p-footer></p-footer>-->\r\n    <p-column field=\"Title\" header=\"Title\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"RouterLink\" header=\"Router Link\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Href\" header=\"Href\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Icon\" header=\"Icon\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Target\" [filter]=\"true\" header=\"Target\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"ParentMenu\" header=\"Parent Menu\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Delete\" pButton (click)=\"deleteMenu(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n            <button type=\"button\"  title=\"Inactive\" pButton (click)=\"inactiveMenu(meeting)\" icon=\"fa fa-ban\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>"

/***/ }),

/***/ "../../../../../src/app/pages/menu/customdynamicmenulist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDynamicMenuListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customdynamicmenu_model__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customdynamicmenu_service__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomDynamicMenuListComponent = /** @class */ (function () {
    function CustomDynamicMenuListComponent(_CustomDynamicMenuService, router, location, _fb, route) {
        this._CustomDynamicMenuService = _CustomDynamicMenuService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.totalRecords = 0;
    }
    CustomDynamicMenuListComponent.prototype.ngOnInit = function () {
        this.filterModel = new __WEBPACK_IMPORTED_MODULE_5__customdynamicmenu_model__["a" /* MenuFilterModel */]();
        this.filterModel.SortColumn = "Title";
        this.filterModel.SortOrder = "asc";
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
    };
    CustomDynamicMenuListComponent.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        this.getList();
    };
    CustomDynamicMenuListComponent.prototype.getList = function () {
        var _this = this;
        this._CustomDynamicMenuService.getListPageData(this.filterModel).subscribe(function (res) {
            _this.data = res.GetAllMenuListDataViewResult;
            _this.totalRecords = res.TotalRecords;
        });
    };
    CustomDynamicMenuListComponent.prototype.redirectToEditPage = function (data) {
        this.router.navigate(['/pages/menu/' + data.MenuId]);
    };
    CustomDynamicMenuListComponent.prototype.deleteMenu = function (data) {
        var _this = this;
        if (confirm("Are you sure want to delete this menu ?")) {
            this._CustomDynamicMenuService.deleteMenu(data.MenuId).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    CustomDynamicMenuListComponent.prototype.inactiveMenu = function (data) {
        var _this = this;
        if (confirm("Are you sure want to inactive this menu ?")) {
            this._CustomDynamicMenuService.deactivateMenu(data.MenuId).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    CustomDynamicMenuListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/menu']);
    };
    CustomDynamicMenuListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-custom-dynamic-menu-list',
            template: __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenulist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__customdynamicmenu_service__["a" /* CustomDynamicMenuService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__customdynamicmenu_service__["a" /* CustomDynamicMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__customdynamicmenu_service__["a" /* CustomDynamicMenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object])
    ], CustomDynamicMenuListComponent);
    return CustomDynamicMenuListComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=customdynamicmenulist.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/menu/dynamicrole.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-top:10px;\">\r\n    <div style=\"margin:20px;\">\r\n        <div class=\"form-group\" style=\"text-align:right;\">\r\n            <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\"  icon=\"fa-plus\" data-target=\"#lg-modal\" label=\"Add New Role\">Add New Role</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" icon=\"fa-floppy-o\"  (click)=\"SaveRoleMapping()\" [disabled]=\"selectedRoleId == 0\" label=\"Save\">Save</button>\r\n        </div>\r\n        \r\n\r\n    </div>\r\n    <div>\r\n        <div class=\"form-group\">\r\n            <label>Role</label>\r\n            <select class=\"form-control\" (change)=\"setRoleId($event.target.value)\">\r\n                <option value=\"0\">--Select--</option>\r\n                <option *ngFor=\"let mrs of roleList \"\r\n                        value={{mrs.RoleId}}>\r\n                    {{mrs.RoleName}}\r\n                </option>\r\n            </select>\r\n\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div *ngFor=\"let option of menuItems\">\r\n                <label class=\"custom-control custom-checkbox\">\r\n                    <input value=\"{{option.MenuId}}\" class=\"custom-control-input checkbox-dark-gray\" [(ngModel)]=\"option.checked\" type=\"checkbox\">\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description align-middle\">{{option.Title}}</span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display:none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Add </h4>\r\n                <button #closeDialog type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow:scroll\">\r\n                <form [formGroup]=\"myFormPopup\" novalidate (ngSubmit)=\"SaveMasterPopupFormData(myFormPopup.value)\">\r\n                    <div style=\"margin-top:10px;\">\r\n                        <div style=\"margin:20px;\">\r\n                            <div class=\"form-group\">\r\n                                <label>Role</label>\r\n                                <input type=\"text\" formControlName=\"RoleName\" class=\"form-control validation-field\" />\r\n                                <small *ngIf=\"!myFormPopup.controls.RoleName.valid\" class=\"text-danger\">\r\n                                    Role Name is required\r\n                                </small>\r\n                            </div>\r\n\r\n                            <div class=\"modal-footer\">\r\n                                <button class=\"btn btn-primary\"\r\n                                        type=\"button\"\r\n                                        (click)=\"SaveMasterPopupFormData(myFormPopup.value)\"\r\n                                        [disabled]=\"!myFormPopup.valid\">\r\n                                    Save\r\n                                </button>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/menu/dynamicrole.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesMenuConponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_model__ = __webpack_require__("../../../../../src/app/pages/user/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customdynamicmenu_model__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_service__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_6__user_user_model__["a" /* RoleViewModel */](); }
        this.myFormPopup = this.fb.group({
            RoleId: [model.RoleId],
            RoleName: [model.RoleName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
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
        this.list = new __WEBPACK_IMPORTED_MODULE_7__customdynamicmenu_model__["c" /* RoleMenuMappingListModel */]();
        this.list.RoleId = this.selectedRoleId;
        this.list.RoleMenuMappingViewModel = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var selected = data_1[_i];
            var val = new __WEBPACK_IMPORTED_MODULE_7__customdynamicmenu_model__["d" /* RoleMenuMappingViewModel */]();
            val.MenuId = selected;
            val.RoleId = this.selectedRoleId;
            this.list.RoleMenuMappingViewModel.push(val);
        }
        this._CustomDynamicMenuService.addUpdateRoleMenu(this.list).subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], RolesMenuConponent.prototype, "closeDialog", void 0);
    RolesMenuConponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamic-role',
            template: __webpack_require__("../../../../../src/app/pages/menu/dynamicrole.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_service__["a" /* CustomDynamicMenuService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_service__["a" /* CustomDynamicMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__customdynamicmenu_service__["a" /* CustomDynamicMenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _f || Object])
    ], RolesMenuConponent);
    return RolesMenuConponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=dynamicrole.component.js.map

/***/ })

});
//# sourceMappingURL=customdynamicmenu.module.chunk.js.map