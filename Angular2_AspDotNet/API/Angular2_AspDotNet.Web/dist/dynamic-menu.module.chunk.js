webpackJsonp(["dynamic-menu.module"],{

/***/ "../../../../../src/app/pages/dynamic-menu/dynamic-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n    <div class=\"col-xl-6 col-md-8 col-10\">\n        <div class=\"card border-0 box-shadow rounded-0\">          \n            <div class=\"card-block pt-0\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\n                    <div class=\"form-group\">\n                        <label>Menu title</label>\n                        <input formControlName=\"title\" class=\"form-control validation-field\" type=\"text\">                      \n                        <small class=\"text-danger\" *ngIf=\"form.get('title').touched && form.get('title').hasError('required')\">Menu title is required</small>                              \n                        <small class=\"text-danger\" *ngIf=\"form.get('title').touched && form.get('title').hasError('minlength')\">Menu title isn't long enough, minimum of 3 characters</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Icon</label>\n                        <select class=\"form-control fa-select\" formControlName=\"icon\">\n                          <option [selected]=\"form.controls.icon.value == null\" value=\"\">-- Select Icon --</option>\n                          <option *ngFor=\"let icon of icons\" [selected]=\"icon.name == icon\" [value]=\"icon.name\"><span [innerHTML]=\"icon.unicode\"></span> {{icon.name}}</option>\n                        </select>\n                    </div> \n                    <div class=\"form-group\">\n                        <label>RouterLink</label>\n                        <input formControlName=\"routerLink\" class=\"form-control validation-field\" type=\"text\" placement=\"right\" [ngbTooltip]=\"'e.g. /pages/dashboard'\">                       \n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input formControlName=\"hasSubMenu\" class=\"custom-control-input checkbox-dark-gray\" type=\"checkbox\" >\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description align-middle\">Has sub menu</span>\n                        </label>                       \n                    </div>\n                    <div class=\"form-group\">\n                        <label>Href</label>\n                        <input formControlName=\"href\" class=\"form-control validation-field\" type=\"text\" placement=\"right\" [ngbTooltip]=\"'e.g. http://themeseason.com'\">                       \n                    </div>                     \n                    <div class=\"form-group\">\n                        <label>Target:</label>\n                        <label *ngFor=\"let target of targets\" class=\"custom-control custom-radio\">\n                            <input formControlName=\"target\" type=\"radio\" class=\"custom-control-input radio-dark-gray\" [value]=\"target\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description text-capitalize\">{{target}}</span>\n                        </label>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Parent menu</label>\n                        <select class=\"form-control\" formControlName=\"parentId\">\n                          <option [selected]=\"form.controls.parentId.value == 0\" value=\"0\">-- Select Parent Menu --</option>\n                          <option *ngFor=\"let item of menuItems\" [selected]=\"item.id == parentId\" [value]=\"item.id\">{{item.title}}</option>\n                        </select>\n                    </div> \n                    <div class=\"form-group text-center mb-0\">\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-plus mr-2\"></i>Add New Menu</button>\n                    </div>\n                </form>\n            </div>        \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dynamic-menu/dynamic-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_components_menu_menu_model__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_components_menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DynamicMenuComponent = /** @class */ (function () {
    function DynamicMenuComponent(fb, toastrService, appSettings, menuService) {
        this.fb = fb;
        this.toastrService = toastrService;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.targets = ['_blank', '_self'];
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
            { name: 'search', unicode: '&#xf002' }
        ];
        this.settings = this.appSettings.settings;
        if (this.settings.theme.menu == 'vertical') {
            this.menuItems = this.menuService.getVerticalMenuItems();
        }
        if (this.settings.theme.menu == 'horizontal') {
            this.menuItems = this.menuService.getHorizontalMenuItems();
        }
    }
    DynamicMenuComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])],
            routerLink: null,
            href: null,
            icon: null,
            target: null,
            hasSubMenu: false,
            parentId: 0
        });
    };
    DynamicMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.form.valueChanges.debounceTime(500).subscribe(function (menu) {
            if (menu.routerLink && menu.routerLink != '') {
                _this.form.controls['href'].setValue(null);
                _this.form.controls['href'].disable();
                _this.form.controls['target'].setValue(null);
                _this.form.controls['target'].disable();
            }
            else {
                _this.form.controls['href'].enable();
                _this.form.controls['target'].enable();
            }
            if (menu.href && menu.href != '') {
                _this.form.controls['routerLink'].setValue(null);
                _this.form.controls['routerLink'].disable();
                _this.form.controls['hasSubMenu'].setValue(false);
                _this.form.controls['hasSubMenu'].disable();
            }
            else {
                _this.form.controls['routerLink'].enable();
                _this.form.controls['hasSubMenu'].enable();
            }
        });
    };
    DynamicMenuComponent.prototype.onSubmit = function (menu) {
        if (this.form.valid) {
            var lastId = this.menuItems[this.menuItems.length - 1].id;
            var newMenuItem = new __WEBPACK_IMPORTED_MODULE_4__theme_components_menu_menu_model__["a" /* Menu */](lastId + 1, menu['title'], menu['routerLink'], menu['href'], menu['icon'], menu['target'], menu['hasSubMenu'], parseInt(menu['parentId']));
            this.menuService.addNewMenuItem(this.menuItems, newMenuItem, this.settings.theme.menu);
            this.toastrService.success('New menu item successfully added !', menu['title']);
            this.form.reset({
                hasSubMenu: false,
                parentId: 0
            });
        }
        if (this.settings.theme.menuType == 'mini') {
            jQuery('.menu-item-link').tooltip('enable');
        }
        else {
            jQuery('.menu-item-link').tooltip('disable');
        }
    };
    DynamicMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamic-menu',
            template: __webpack_require__("../../../../../src/app/pages/dynamic-menu/dynamic-menu.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_5__theme_components_menu_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__theme_components_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__theme_components_menu_menu_service__["a" /* MenuService */]) === "function" && _d || Object])
    ], DynamicMenuComponent);
    return DynamicMenuComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=dynamic-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dynamic-menu/dynamic-menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicMenuModule", function() { return DynamicMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dynamic_menu_component__ = __webpack_require__("../../../../../src/app/pages/dynamic-menu/dynamic-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__dynamic_menu_component__["a" /* DynamicMenuComponent */], pathMatch: 'full' }
];
var DynamicMenuModule = /** @class */ (function () {
    function DynamicMenuModule() {
    }
    DynamicMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__dynamic_menu_component__["a" /* DynamicMenuComponent */]
            ]
        })
    ], DynamicMenuModule);
    return DynamicMenuModule;
}());

//# sourceMappingURL=dynamic-menu.module.js.map

/***/ })

});
//# sourceMappingURL=dynamic-menu.module.chunk.js.map