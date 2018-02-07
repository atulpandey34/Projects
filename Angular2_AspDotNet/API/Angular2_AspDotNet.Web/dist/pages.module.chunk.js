webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () { };
    BlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__("../../../../../src/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/blank/blank.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-inner\" [ngClass]=\"{ 'vertical-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'vertical'),\r\n                                        'horizontal-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'horizontal') }\">\r\n    \r\n    <app-header></app-header>\r\n\r\n    <div class=\"d-flex h-100\" [ngClass]=\"{'flex-row': settings.theme.menu == 'vertical', 'flex-column': settings.theme.menu != 'vertical'}\">\r\n        <app-sidebar *ngIf=\"settings.theme.menu == 'vertical'\"></app-sidebar> \r\n        <div class=\"main-content\"> \r\n            <app-side-chat></app-side-chat>           \r\n            <app-breadcrumb></app-breadcrumb>            \r\n            <router-outlet></router-outlet>              \r\n        </div>\r\n    </div>   \r\n\r\n</div>\r\n<app-footer></app-footer>\r\n<app-back-top position=\"200\"></app-back-top>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"settings\" [ngClass]=\"{'show': showSetting}\">\r\n    <button class=\"btn btn-default toggle\" (click)=\"showSetting=!showSetting\"><i class=\"fa fa-spin fa-gear\"></i></button>\r\n    <div class=\"card\">\r\n        <div class=\"card-header text-center\">\r\n            Settings\r\n        </div>\r\n      \r\n        <div class=\"card-block mt-2\">\r\n            <h6>Choose menu</h6>  \r\n            <div class=\"form-group\">\r\n                <div class=\"custom-controls-stacked\">\r\n                    <label *ngFor=\"let menu of menus\" class=\"custom-control custom-radio\">\r\n                        <input name=\"menus\" type=\"radio\" class=\"custom-control-input radio-dark-gray\" (change)=\"chooseMenu(menu)\" \r\n                        [checked]=\"menu === menuOption\" [value]=\"menu\">\r\n                        <span class=\"custom-control-indicator\"></span>\r\n                        <span class=\"custom-control-description text-capitalize\">{{menu}}</span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div> \r\n\r\n         <div class=\"card-block\">\r\n            <h6>Choose menu type</h6>\r\n            <div class=\"form-group\">\r\n                <div class=\"custom-controls-stacked\">\r\n                    <label *ngFor=\"let menuType of menuTypes\" class=\"custom-control custom-radio\">\r\n                        <input name=\"menuTypes\" type=\"radio\" class=\"custom-control-input radio-dark-gray\" (change)=\"chooseMenuType(menuType)\" \r\n                        [checked]=\"menuType === menuTypeOption\" [value]=\"menuType\">\r\n                        <span class=\"custom-control-indicator\"></span>\r\n                        <span class=\"custom-control-description text-capitalize\">{{menuType}}</span>\r\n                    </label>\r\n                </div> \r\n            </div> \r\n        </div> \r\n\r\n        <div class=\"card-block mb-3\">\r\n            <h6>Choose theme skin</h6>          \r\n            <div class=\"theme light\" (click)=\"changeTheme('light')\"></div>\r\n            <div class=\"theme dark\" (click)=\"changeTheme('dark')\"></div>\r\n            <div class=\"theme blue\" (click)=\"changeTheme('blue')\"></div>\r\n            <div class=\"theme green\" (click)=\"changeTheme('green')\"></div>\r\n            <div class=\"theme combined\" (click)=\"changeTheme('combined')\"></div>\r\n            <div class=\"theme purple\" (click)=\"changeTheme('purple')\"></div>\r\n            <div class=\"theme orange\" (click)=\"changeTheme('orange')\"></div>\r\n            <div class=\"theme brown\" (click)=\"changeTheme('brown')\"></div>\r\n            <div class=\"theme grey\" (click)=\"changeTheme('grey')\"></div>\r\n            <div class=\"theme pink\" (click)=\"changeTheme('pink')\"></div>\r\n        </div>\r\n      \r\n\r\n        <div class=\"card-block\">\r\n            <h6>Other theme options</h6> \r\n            <div class=\"custom-controls-stacked\">\r\n                <label class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" [checked]=\"settings.theme.navbarIsFixed\" (change)=\"settings.theme.navbarIsFixed = !settings.theme.navbarIsFixed\"/>\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Fixed header</span>\r\n                </label>\r\n                <label class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" [checked]=\"settings.theme.sidebarIsFixed\" (change)=\"settings.theme.sidebarIsFixed = !settings.theme.sidebarIsFixed\"/>\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Fixed sidebar</span>\r\n                </label> \r\n                <label class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" [checked]=\"settings.theme.footerIsFixed\" (change)=\"settings.theme.footerIsFixed = !settings.theme.footerIsFixed\"/>\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Fixed footer</span>\r\n                </label> \r\n                <label class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" [checked]=\"settings.theme.sideChatIsHoverable\" (change)=\"settings.theme.sideChatIsHoverable = !settings.theme.sideChatIsHoverable\"/>\r\n                    <span class=\"custom-control-indicator\"></span>\r\n                    <span class=\"custom-control-description\">Side Chat Hoverable</span>\r\n                </label> \r\n            </div>   \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.wrapper-inner {\n  min-height: 100%;\n  height: auto !important;\n  margin-bottom: -28px;\n  padding: 0 0 28px; }\n\n.main-content {\n  width: 100%;\n  padding: 25px;\n  -webkit-box-flex: 1;\n  min-height: calc(100vh - (46px + 28px));\n  overflow: hidden; }\n\n/*settings*/\n.settings {\n  position: fixed;\n  top: 80px;\n  right: -212px;\n  z-index: 995;\n  width: 210px;\n  transition: all .2s; }\n  .settings.show {\n    right: -1px; }\n  .settings .btn {\n    position: absolute;\n    left: -34px;\n    padding: 7px 12px 7px 10px;\n    z-index: 99;\n    background: #fff;\n    border-color: rgba(0, 0, 0, 0.125);\n    border-style: solid;\n    border-width: 1px 0px 1px 1px;\n    border-radius: 0;\n    border-bottom-left-radius: 4px;\n    border-top-left-radius: 4px;\n    cursor: pointer; }\n    .settings .btn:focus {\n      box-shadow: none; }\n  .settings .card {\n    border-top: none;\n    border-radius: 0; }\n    .settings .card .card-header {\n      padding: 0.34rem 1.25rem;\n      background: #fff !important;\n      border-radius: 0;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      font-weight: bold;\n      border-top: 1px solid rgba(0, 0, 0, 0.125);\n      border-bottom: 0; }\n  .settings .card-block {\n    padding: 2px 20px; }\n    .settings .card-block h6 {\n      border-bottom: 1px solid #eceeef;\n      padding-bottom: 2px; }\n  .settings .theme {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: inline-block;\n    margin-right: 5px;\n    cursor: pointer; }\n    .settings .theme.light {\n      background-color: #ececec; }\n    .settings .theme.dark {\n      background-color: #262626; }\n    .settings .theme.blue {\n      background-color: #1875D1; }\n    .settings .theme.green {\n      background-color: #00786A; }\n    .settings .theme.combined {\n      overflow: hidden;\n      background-color: #262626; }\n      .settings .theme.combined:before {\n        content: \"\";\n        background-color: #f5f5f5;\n        width: 10px;\n        height: 20px;\n        display: inline-block; }\n    .settings .theme.purple {\n      background-color: #7A1EA1; }\n    .settings .theme.orange {\n      background-color: #F47B00; }\n    .settings .theme.brown {\n      background-color: #5C3F36; }\n    .settings .theme.grey {\n      background-color: #445963; }\n    .settings .theme.pink {\n      background-color: #C1175A; }\n  .settings .custom-control .custom-control-description {\n    margin-top: -1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menu_customdynamicmenu_service__ = __webpack_require__("../../../../../src/app/pages/menu/customdynamicmenu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesComponent = /** @class */ (function () {
    function PagesComponent(_CustomDynamicMenuService, appSettings, router) {
        var _this = this;
        this._CustomDynamicMenuService = _CustomDynamicMenuService;
        this.appSettings = appSettings;
        this.router = router;
        this.showMenu = false;
        this.showSetting = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.settings = this.appSettings.settings;
        if (sessionStorage["skin"]) {
            this.settings.theme.skin = sessionStorage["skin"];
        }
        this._CustomDynamicMenuService.getDefaultUrl(router.url).subscribe(function (res) {
            if (res != router.url) {
                _this.router.navigate([res]);
            }
        });
    }
    PagesComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.settings.theme.showMenu = false;
            this.settings.theme.sideChatIsHoverable = false;
        }
        this.showMenu = this.settings.theme.showMenu;
        this.menuOption = this.settings.theme.menu;
        this.menuTypeOption = this.settings.theme.menuType;
    };
    PagesComponent.prototype.chooseMenu = function (menu) {
        this.settings.theme.menu = menu;
        this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function (menuType) {
        this.settings.theme.menuType = menuType;
        if (menuType == 'mini') {
            jQuery('.menu-item-link').tooltip('enable');
        }
        else {
            jQuery('.menu-item-link').tooltip('disable');
        }
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme.skin = theme;
        sessionStorage["skin"] = theme;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    PagesComponent.prototype.onWindowResize = function () {
        var showMenu = !this._showMenu();
        if (this.showMenu !== showMenu) {
            this.showMenuStateChange(showMenu);
        }
        this.showMenu = showMenu;
    };
    PagesComponent.prototype.showMenuStateChange = function (showMenu) {
        this.settings.theme.showMenu = showMenu;
    };
    PagesComponent.prototype._showMenu = function () {
        return window.innerWidth <= 768;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__("../../../../../src/app/pages/pages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pages.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_3__pages_menu_customdynamicmenu_service__["a" /* CustomDynamicMenuService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__pages_menu_customdynamicmenu_service__["a" /* CustomDynamicMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pages_menu_customdynamicmenu_service__["a" /* CustomDynamicMenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object])
    ], PagesComponent);
    return PagesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_components_header_header_component__ = __webpack_require__("../../../../../src/app/theme/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__theme_components_footer_footer_component__ = __webpack_require__("../../../../../src/app/theme/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__theme_components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/theme/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__theme_components_menu_vertical_menu_vertical_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__theme_components_menu_horizontal_menu_horizontal_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__theme_components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__theme_components_back_top_back_top_component__ = __webpack_require__("../../../../../src/app/theme/components/back-top/back-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__theme_components_fullscreen_fullscreen_component__ = __webpack_require__("../../../../../src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__theme_components_applications_applications_component__ = __webpack_require__("../../../../../src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__theme_components_messages_messages_component__ = __webpack_require__("../../../../../src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__theme_components_user_menu_user_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__theme_components_flags_menu_flags_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__theme_components_side_chat_side_chat_component__ = __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__theme_components_favorites_favorites_component__ = __webpack_require__("../../../../../src/app/theme/components/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__blank_blank_component__ = __webpack_require__("../../../../../src/app/pages/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};






















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(PERFECT_SCROLLBAR_CONFIG),
                __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_7__theme_pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_routing__["a" /* routing */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__pages_component__["a" /* PagesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__theme_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__theme_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__theme_components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__theme_components_menu_vertical_menu_vertical_menu_component__["a" /* VerticalMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__theme_components_menu_horizontal_menu_horizontal_menu_component__["a" /* HorizontalMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__theme_components_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_16__theme_components_back_top_back_top_component__["a" /* BackTopComponent */],
                __WEBPACK_IMPORTED_MODULE_17__theme_components_fullscreen_fullscreen_component__["a" /* FullScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_18__theme_components_applications_applications_component__["a" /* ApplicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__theme_components_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__theme_components_user_menu_user_menu_component__["a" /* UserMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_21__theme_components_flags_menu_flags_menu_component__["a" /* FlagsMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_22__theme_components_side_chat_side_chat_component__["a" /* SideChatComponent */],
                __WEBPACK_IMPORTED_MODULE_23__theme_components_favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__blank_blank_component__["a" /* BlankComponent */],
                __WEBPACK_IMPORTED_MODULE_25__search_search_component__["a" /* SearchComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_blank_component__ = __webpack_require__("../../../../../src/app/pages/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'membership', loadChildren: 'app/pages/membership/membership.module#MembershipModule', data: { breadcrumb: 'Membership' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'tools', loadChildren: 'app/pages/tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' } },
            { path: 'calendar', loadChildren: 'app/pages/calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' } },
            { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'blank', component: __WEBPACK_IMPORTED_MODULE_2__blank_blank_component__["a" /* BlankComponent */], data: { breadcrumb: 'Blank page' } },
            { path: 'action', loadChildren: 'app/pages/eventactions/eventaction.list.module#EventActionModule', data: { breadcrumb: 'Action' } },
            { path: 'meeting', loadChildren: 'app/pages/meeting/meeting.module#MeetingModule', data: { breadcrumb: 'Meeting' } },
            { path: 'user', loadChildren: 'app/pages/user/user.module#UserModule', data: { breadcrumb: 'User' } },
            { path: 'correctiveaction', loadChildren: 'app/pages/correctiveaction/correctiveaction.module#CorrectiveActionModule', data: { breadcrumb: 'Corrective Action' } },
            { path: 'riskassessment', loadChildren: 'app/pages/riskassessment/riskassessment.module#RiskAssessmentModule', data: { breadcrumb: 'Risk Assessment' } },
            { path: 'assignment', loadChildren: 'app/pages/assignment/assignment.module#AssignmentModule', data: { breadcrumb: 'Assignment' } },
            { path: 'training', loadChildren: 'app/pages/training/training.module#TrainingModule', data: { breadcrumb: 'Training' } },
            { path: 'measure', loadChildren: 'app/pages/measure/measure.module#MeasureModule', data: { breadcrumb: 'Measure' } },
            { path: 'document', loadChildren: 'app/pages/document/document.module#DocumentModule', data: { breadcrumb: 'Document' } },
            { path: 'folder', loadChildren: 'app/pages/folder/folder.module#FolderModule', data: { breadcrumb: 'Folder' } },
            { path: 'rolesresponsibility', loadChildren: 'app/pages/rolesresponsibility/rolesresponsibility.module#RolesResponsibilityModule', data: { breadcrumb: 'Roles Responsibility' } },
            { path: 'organization', loadChildren: 'app/pages/organization/organization.module#OrganizationModule', data: { breadcrumb: 'Organization' } },
            { path: 'performancereviewmeeting', loadChildren: 'app/pages/performancereviewmeeting/performancereviewmeeting.module#PerformanceReviewMeetingModule', data: { breadcrumb: 'Performance Review Meeting' } },
            { path: 'audit', loadChildren: 'app/pages/audit/audit.module#AuditModule', data: { breadcrumb: 'Audit' } },
            { path: 'menu', loadChildren: 'app/pages/menu/customdynamicmenu.module#CustomDynamicMenuModule', data: { breadcrumb: 'Menu' } },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */], data: { breadcrumb: 'Search' } }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Search results...</h4>"

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/pages/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/search/search.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"applications\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-th\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 box-shadow\" aria-labelledby=\"applications\">\r\n        <div class=\"applications text-center pt-1\" perfect-scrollbar>\r\n            <h5>Applications</h5>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-4 p-1 mb-3 item\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-user text-success\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">My account</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-search text-info\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Search</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-youtube-play text-danger\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Youtube</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-wrench text-primary\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Settings</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-calendar text-warning\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Calendar</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-picture-o text-success\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Gallery</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-file-text-o text-danger\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Documents</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-envelope-o text-info\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Mail</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-globe text-primary\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Maps</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/applications/applications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu .applications {\n  height: 255px;\n  width: 270px;\n  padding: 0 22px; }\n  .dropdown-menu .applications h5 {\n    color: #666; }\n  .dropdown-menu .applications .item {\n    background: transparent;\n    border-radius: 5px; }\n    .dropdown-menu .applications .item:hover {\n      background: #f5f5f5; }\n    .dropdown-menu .applications .item i {\n      font-size: 28px; }\n    .dropdown-menu .applications .item span {\n      color: #666; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/applications/applications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applications',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/theme/components/applications/applications.component.scss")],
            template: __webpack_require__("../../../../../src/app/theme/components/applications/applications.component.html")
        })
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());

//# sourceMappingURL=applications.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/back-top/back-top.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 28px;\n  text-align: center;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  line-height: 34px; }\n  .back-to-top:hover {\n    opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/back-top/back-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackTopComponent = /** @class */ (function () {
    function BackTopComponent() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 700;
    }
    BackTopComponent.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BackTopComponent.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BackTopComponent.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "showSpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "moveSpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('backTop'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], BackTopComponent.prototype, "_selector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], BackTopComponent.prototype, "_onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BackTopComponent.prototype, "_onWindowScroll", null);
    BackTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-back-top',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/theme/components/back-top/back-top.component.scss")],
            template: "\n    <i #backTop class=\"fa fa-angle-up back-to-top transition\" title=\"Back to Top\"></i>\n  "
        })
    ], BackTopComponent);
    return BackTopComponent;
    var _a;
}());

//# sourceMappingURL=back-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">  \r\n    <li *ngIf=\"router.url != '/pages/dashboard'\" class=\"breadcrumb-item\"><a routerLink=\"/\" (click)=\"closeSubMenus()\"><i class=\"fa fa-home mr-2\"></i>Home</a></li>\r\n    <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\">\r\n        <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>          \r\n        <span [hidden]=\"i != (breadcrumbs.length - 1)\"><i *ngIf=\"router.url == '/pages/dashboard'\" class=\"fa fa-home mr-2\"></i><b>{{breadcrumb.name}}</b></span>\r\n    </li>\r\n</ol>"

/***/ }),

/***/ "../../../../../src/app/theme/components/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        if (menu) {
            for (var i = 0; i < menu.children.length; i++) {
                var child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    };
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/theme/components/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]) === "function" && _d || Object])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
    var _a, _b, _c, _d;
}());

// import { Component, ViewEncapsulation } from '@angular/core';
// import { AppState } from "../../../app.state";
// @Component({
//     selector: 'az-breadcrumb',
//     encapsulation: ViewEncapsulation.None,
//     styleUrls: ['./breadcrumb.component.scss'],
//     templateUrl: './breadcrumb.component.html'
// })
// export class BreadcrumbComponent {
//     public activePageTitle:string = '';
//     constructor(private _state:AppState){
//         this._state.subscribe('menu.activeLink', (activeLink) => {
//             if (activeLink) {
//                 this.activePageTitle = activeLink;
//             }
//         });
//     }
//     public ngOnInit():void {
//         if (!this.activePageTitle) {
//             this.activePageTitle = 'dashboard';
//         }
//     }
// } 
//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-start favorites-container ml-5 hidden-md-down\" [class.show-list]=\"toggle\">\n    <ul *ngIf=\"favorites.length == 0\" class=\"list-inline mb-0\">\n        <li class=\"list-inline-item\"><span class=\"fs-13 font-italic\">Choose favorites <i id=\"arrow\" class=\"fa fa-long-arrow-right\"></i></span></li>\n    </ul> \n    <ul *ngIf=\"favorites.length > 0\" class=\"list-inline mb-0\">\n        <li *ngFor=\"let favorite of favorites\" class=\"list-inline-item\" placement=\"bottom\" [ngbTooltip]=\"favorite.name\">\n            <a *ngIf=\"favorite.href\" href=\"{{favorite.href}}\" target=\"{{favorite.target}}\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\n            <a *ngIf=\"favorite.routerLink\" [routerLink]=\"favorite.routerLink\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\n        </li>\n    </ul>    \n    <ss-multiselect-dropdown id=\"favorites\"\n        [options]=\"favoriteOptions\" \n        [texts]=\"favoriteTexts\" \n        [settings]=\"favoriteSettings\"\n        (dropdownOpened)=\"onDropdownOpened()\"\n        (dropdownClosed)=\"onDropdownClosed()\" \n        [(ngModel)]=\"favoriteModel\"\n        (ngModelChange)=\"onChange()\">\n    </ss-multiselect-dropdown>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/favorites/favorites.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".favorites-container {\n  position: relative;\n  padding: 0 20px 0 6px; }\n  .favorites-container:after {\n    font-family: FontAwesome;\n    content: \"\\F004\";\n    color: #DD1B16;\n    position: absolute;\n    right: 4px;\n    top: 1px;\n    pointer-events: none;\n    cursor: pointer; }\n  .favorites-container.show-list {\n    width: 242px;\n    border: none !important; }\n  .favorites-container ul.list-inline {\n    white-space: nowrap;\n    overflow: hidden; }\n    .favorites-container ul.list-inline .list-inline-item {\n      margin-right: 10px; }\n\n#favorites .dropdown {\n  position: absolute;\n  right: 0;\n  top: -5px;\n  width: 18px;\n  height: 22px;\n  overflow: hidden; }\n  #favorites .dropdown .btn-block {\n    width: 242px;\n    opacity: 0;\n    box-shadow: none;\n    cursor: pointer;\n    position: relative;\n    z-index: 1;\n    border: 0;\n    padding-bottom: 13px; }\n  #favorites .dropdown .dropdown-menu li a {\n    color: #666; }\n    #favorites .dropdown .dropdown-menu li a i.fa-check {\n      color: #378D3B; }\n  #favorites .dropdown.open {\n    overflow: visible;\n    width: auto;\n    height: auto; }\n    #favorites .dropdown.open .btn-block {\n      opacity: 1; }\n  #favorites .dropdown .dropdown-toggle::after {\n    content: none; }\n\n@-webkit-keyframes arrow-jump {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0); } }\n\n@keyframes arrow-jump {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n#arrow {\n  -webkit-animation: arrow-jump 2s infinite;\n  animation: arrow-jump 2s infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_components_menu_menu_model__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(menuService) {
        var _this = this;
        this.menuService = menuService;
        this.favoriteModel = [];
        this.favoriteSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: true
        };
        this.favoriteTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'menu item selected',
            checkedPlural: 'menu items selected',
            searchPlaceholder: 'Find menu item...',
            defaultTitle: 'Select favorite menu items',
            allSelected: 'All selected',
        };
        this.favoriteOptions = [];
        this.menuItems = [];
        this.favorites = [];
        this.menuService.getMenuByRoleId().subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var dd = res_1[_i];
                _this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_2__theme_components_menu_menu_model__["a" /* Menu */](dd.MenuId, dd.Title, dd.RouterLink, dd.Href, dd.Icon, dd.Target, dd.HasSubMenu, dd.ParentMenuId));
            }
            _this.menuItems = _this.menuItems.filter(function (menu) { return menu.routerLink != null || menu.href != null; });
            _this.menuItems.forEach(function (item) {
                var menu = {
                    id: item.id,
                    name: item.title,
                    routerLink: item.routerLink,
                    href: item.href,
                    icon: item.icon,
                    target: item.target
                };
                _this.favoriteOptions.push(menu);
            });
            if (sessionStorage["favorites"]) {
                _this.favorites = JSON.parse(sessionStorage.getItem("favorites"));
                _this.favorites.forEach(function (favorite) {
                    _this.favoriteModel.push(favorite.id);
                });
            }
        });
        //this.menuItems = this.menuService.getVerticalMenuItems().filter(menu => menu.routerLink != null || menu.href != null);
    }
    FavoritesComponent.prototype.onDropdownOpened = function () {
        this.toggle = true;
    };
    FavoritesComponent.prototype.onDropdownClosed = function () {
        this.toggle = false;
    };
    FavoritesComponent.prototype.onChange = function () {
        var _this = this;
        this.favorites.length = 0;
        this.favoriteModel.forEach(function (i) {
            var favorite = _this.favoriteOptions.find(function (mail) { return mail.id === +i; });
            _this.favorites.push(favorite);
        });
        sessionStorage.setItem("favorites", JSON.stringify(this.favorites));
    };
    FavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__("../../../../../src/app/theme/components/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/favorites/favorites.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], FavoritesComponent);
    return FavoritesComponent;
    var _a;
}());

//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/flags-menu/flags-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"flags-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"flag-icon flag-icon-gb\"></span>\n    </a>\n\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"flags-menu\">\n        <div class=\"flags-menu\">          \n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-gb mr-2\"></span> English</a> \n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-de mr-2\"></span> German</a>        \n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-fr mr-2\"></span> French</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-ru mr-2\"></span> Russian</a>                \n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-tr mr-2\"></span> Turkish</a>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/flags-menu/flags-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flag-icon-background {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat; }\n\n.flag-icon {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  position: relative;\n  display: inline-block;\n  width: 1.33333333em;\n  line-height: 1em; }\n\n.flag-icon:before {\n  content: \"\\A0\"; }\n\n.flag-icon-gb {\n  background-image: url(/assets/img/flags/gb.svg); }\n\n.flag-icon-de {\n  background-image: url(/assets/img/flags/de.svg); }\n\n.flag-icon-fr {\n  background-image: url(/assets/img/flags/fr.svg); }\n\n.flag-icon-ru {\n  background-image: url(/assets/img/flags/ru.svg); }\n\n.flag-icon-tr {\n  background-image: url(/assets/img/flags/tr.svg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/flags-menu/flags-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlagsMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlagsMenuComponent = /** @class */ (function () {
    function FlagsMenuComponent() {
    }
    FlagsMenuComponent.prototype.ngOnInit = function () {
    };
    FlagsMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flags-menu',
            template: __webpack_require__("../../../../../src/app/theme/components/flags-menu/flags-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/flags-menu/flags-menu.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());

//# sourceMappingURL=flags-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer d-flex align-items-center justify-content-between\" [class.fixed-bottom]=\"settings.theme.footerIsFixed\">\n    <span class=\"social-icons\">\n         <a href=\"https://www.facebook.com/themeseason\" target=\"_blank\"><i class=\"fa fa-facebook-square transition\" aria-hidden=\"true\"></i></a>\n         <a href=\"https://twitter.com/themeseason\" target=\"_blank\"><i class=\"fa fa-twitter-square transition\" aria-hidden=\"true\"></i></a>\n         <a href=\"https://www.instagram.com/themeseason\" target=\"_blank\"><i class=\"fa fa-instagram transition\" aria-hidden=\"true\"></i></a>\n         <a href=\"https://www.pinterest.com/themeseason\" target=\"_blank\"><i class=\"fa fa-pinterest-square transition\" aria-hidden=\"true\"></i></a>             \n    </span>\n    <span class=\"copyright\">Copyright © 2017 All Rights Reserved</span>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.app-footer {\n  width: 100%;\n  height: 28px;\n  padding: 0 25px; }\n  .app-footer .copyright {\n    font-size: 12px; }\n  .app-footer .social-icons {\n    font-size: 18px; }\n    .app-footer .social-icons a {\n      color: inherit; }\n    .app-footer .social-icons i {\n      margin-right: 4px;\n      opacity: 0.8; }\n      .app-footer .social-icons i:hover {\n        opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/theme/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/footer/footer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]) === "function" && _a || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/fullscreen/fullscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.toggle = false;
        // @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
        //     if (event.keyCode === 122) {
        //         console.log('F11 pressed');
        //     }
        //     if (event.keyCode === 27) {
        //         console.log('Esc pressed');
        //     }
        // }
    }
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.getFullscreen = function () {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expand'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], FullScreenComponent.prototype, "expand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('compress'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], FullScreenComponent.prototype, "compress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "getFullscreen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "onFullScreenChange", null);
    FullScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fullscreen',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <span class=\"pl-2 pr-2\">\n        <i *ngIf=\"!toggle\" #expand class=\"fa fa-expand transition\"></i>\n        <i *ngIf=\"toggle\" #compress class=\"fa fa-compress transition\"></i>\n    </span>\n  "
        })
    ], FullScreenComponent);
    return FullScreenComponent;
    var _a, _b;
}());

//# sourceMappingURL=fullscreen.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = " <nav class=\"navbar box-shadow app-header\" [class.fixed-top]=\"settings.theme.navbarIsFixed\" [class.logo-visible]=\"showInfoContent\">\n    <div class=\"d-flex flex-column w-100\">\n        <div id=\"info-content\" class=\"panel-collapse collapse\">\n            <a class=\"close\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" [class.show]=\"showInfoContent\">\n                <span aria-hidden=\"true\">&times;</span>\n            </a>\n            <div class=\"row align-items-center\">\n                <div class=\"col-md-5\">\n                    <div class=\"d-flex justify-content-center align-items-center pt-md-0 pt-3 info\">\n                        <img src=\"assets/img/users/user.jpg\" class=\"rounded-circle user-img\"> \n                        <div class=\"d-flex flex-column pl-3\">\n                            <h5 class=\"mb-0\">Emilio Verdines <i class=\"fa fa-check-circle fs-13 text-success ml-2\"></i></h5>\n                            <span>Project menecer</span>\n                            <div class=\"pt-3\">\n                                <button class=\"btn btn-success\">Profile</button> \n                                <button class=\"btn btn-gray\">Edit</button> \n                            </div>                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-7\">\n                    <div class=\"row py-4\">                        \n                        <div class=\"col-lg-7 col-sm-8 col-12 left-border\">\n                            <div class=\"info w-280p mx-auto text-center\">\n                                <form>\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Recipients\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Subject\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <textarea class=\"form-control form-control-sm\" placeholder=\"Message\" rows=\"3\"></textarea>\n                                    </div>\n                                    <button type=\"submit\" class=\"btn btn-sm btn-gray\"><i class=\"fa fa-paper-plane mr-2\"></i>Send</button>\n                                </form>\n                            </div>                           \n                        </div>\n                        <div class=\"col-lg-5 col-sm-4 left-border hidden-xs-down\">\n                            <div class=\"info w-100p mx-auto\">\n                                <div class=\"custom-controls-stacked\">\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" checked>\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Notifications</span>\n                                    </label>\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" checked>\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Tasks</span>\n                                    </label>\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Events</span>\n                                    </label>\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" checked>\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Downloads</span>\n                                    </label>\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" checked>\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Messages</span>\n                                    </label>\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" >\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Updates</span>\n                                    </label>\n                                    <label class=\"custom-control custom-checkbox\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" checked>\n                                        <span class=\"custom-control-indicator\"></span>\n                                        <span class=\"custom-control-description\">Settings</span>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"d-flex justify-content-start align-items-center top-navbar\">                  \n            \n            <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">\n                <span class=\"start\">start</span><span class=\"ng\">NG</span>\n            </a>\n\n            <span class=\"navbar-text menu-icon transition ml-3 mr-3\" [ngClass]=\"{'open': settings.theme.showMenu}\"\n                (click)=\"settings.theme.showMenu = !settings.theme.showMenu\">\n                <div class=\"line\"></div>\n                <div class=\"line\"></div>\n                <div class=\"line\"></div>\n                <div class=\"line\"></div>\n            </span>\n\n            <div class=\"ml-2 mr-2 hidden-xs-down\">\n                 <a id=\"info-content-icon\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" class=\"d-flex\" [class.show]=\"showInfoContent\">\n                    <div [@showInfo]=\"showInfoContent\" class=\"triangle\"></div>\n                </a>\n            </div>\n\n            <form class=\"app-search hidden-sm-down ml-3\">\n                <i class=\"fa fa-search\"></i>\n                <input type=\"text\" placeholder=\"Type to search...\" class=\"form-control\">\n            </form>\n\n            <app-favorites></app-favorites>\n\n\n            <div class=\"top-rigth-icons ml-auto\">\n                <span class=\"hidden-xs-down\">\n                    <app-flags-menu></app-flags-menu>\n                </span> \n                <span class=\"hidden-xs-down\">\n                    <app-fullscreen></app-fullscreen>\n                </span> \n                <span class=\"hidden-xs-down\">\n                    <app-applications></app-applications>                    \n                </span> \n                <span class=\"hidden-xs-down\">\n                    <app-messages></app-messages>\n                </span>               \n                <span class=\"hidden-xs-down pl-2 pr-2\" (click)=\"settings.theme.showSideChat = !settings.theme.showSideChat\">\n                    <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n                </span> \n                <span class=\"hidden-xs-down\">\n                    <app-user-menu></app-user-menu>\n                </span> \n                <span class=\"pl-2 pr-2\">\n                    <a routerLink=\"/login\">\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                    </a>                   \n                </span> \n            </div> \n\n            <!--<div class=\"d-flex ml-auto\">\n                <form class=\"app-search hidden-xs-down ml-2 mr-2\">\n                    <i class=\"fa fa-search\"></i>\n                    <input type=\"text\" placeholder=\"Type to search...\" class=\"form-control\">\n                </form>\n                <span class=\"ml-2 mr-2\">\n                    <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                </span>                \n            </div>-->\n\n           \n                \n          \n                \n            <!--<span class=\"navbar-text ml-2 mr-2\">\n                <a id=\"info-content-icon\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" [class.show]=\"showInfoContent\">\n                    <i [@showInfo]=\"showInfoContent\" class=\"fa fa-arrow-circle-o-down\"></i>\n                </a>\n            </span>           -->\n           \n\n            <!--<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n                <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                    <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/login']\">Link</a>\n                    </li>       \n                    <li class=\"nav-item\">\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n                    </li>\n                </ul>\n                <form class=\"form-inline mt-2 mt-md-0 ml-auto \">\n                    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n                    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n                </form>\n            </div>-->\n\n\n        </div>\n\n        <div class=\"horizontal-menu-outer\" *ngIf=\"settings.theme.menu == 'horizontal'\">\n                   \n            <app-horizontal-menu *ngIf=\"showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-horizontal-menu>        \n            <app-vertical-menu *ngIf=\"!showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-vertical-menu>\n\n        </div>\n\n\n\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.navbar.app-header {\n  padding: 0;\n  z-index: 9;\n  transition: z-index 0.5s linear; }\n  .navbar.app-header .top-navbar {\n    padding: 0 1rem;\n    height: 46px; }\n    .navbar.app-header .top-navbar .logo {\n      width: 220px;\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0); }\n  .navbar.app-header.logo-visible {\n    z-index: 99999; }\n\n.top-navbar .app-search {\n  position: relative;\n  margin-left: 20px; }\n  .top-navbar .app-search i {\n    position: absolute;\n    right: 2px;\n    font-size: 14px;\n    cursor: pointer;\n    z-index: 9; }\n  .top-navbar .app-search .form-control {\n    border: none;\n    font-size: 12px;\n    height: 18px;\n    background: transparent;\n    padding: 0;\n    padding-right: 24px;\n    padding-left: 4px;\n    box-shadow: none;\n    width: 190px;\n    opacity: 0.7; }\n    .top-navbar .app-search .form-control:focus {\n      opacity: 1; }\n\n.top-rigth-icons span {\n  font-size: 14px;\n  cursor: pointer; }\n\n.menu-icon {\n  position: relative;\n  width: 18px;\n  cursor: pointer; }\n  .menu-icon .line {\n    width: 100%;\n    height: 2px;\n    position: absolute;\n    background-color: #ccc;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    transition: .15s ease-in-out;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    outline: 1px solid transparent; }\n  .menu-icon .line:nth-child(1) {\n    top: 0; }\n  .menu-icon .line:nth-child(2), .menu-icon .line:nth-child(3) {\n    top: 4px; }\n  .menu-icon .line:nth-child(4) {\n    top: 8px; }\n  .menu-icon.open {\n    -webkit-backface-visibility: hidden; }\n    .menu-icon.open .line:nth-child(1), .menu-icon.open .line:nth-child(4) {\n      top: 4px;\n      width: 0%;\n      left: 50%; }\n    .menu-icon.open .line:nth-child(2) {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n    .menu-icon.open .line:nth-child(3) {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n\n.logo {\n  font-family: \"MoonHouse\";\n  padding: 0;\n  font-size: 27px;\n  display: inline-block;\n  width: 250px; }\n  .logo:hover, .logo:focus {\n    text-decoration: none;\n    color: initial; }\n\n#info-content {\n  z-index: 1; }\n  #info-content .info, #info-content .left-border {\n    opacity: 0;\n    transition: opacity 0.5s ease-out; }\n  #info-content .close {\n    position: absolute;\n    right: 5px;\n    z-index: 1; }\n  #info-content.show .info, #info-content.show .left-border {\n    opacity: 1; }\n  #info-content .user-img {\n    width: 120px; }\n\n.triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 11px 10px 0 10px; }\n\n.horizontal-menu-outer {\n  height: auto; }\n  .horizontal-menu-outer #menu0 {\n    height: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.showHorizontalMenu = true;
        this.showInfoContent = false;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getHorizontalMenuItems();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768)
            this.showHorizontalMenu = false;
    };
    HeaderComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        if (menu) {
            for (var i = 0; i < menu.children.length; i++) {
                var child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    };
    HeaderComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 768) {
            this.showHorizontalMenu = false;
        }
        else {
            this.showHorizontalMenu = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowResize", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/theme/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/header/header.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_3__menu_menu_service__["a" /* MenuService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('showInfo', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('1', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'rotate(180deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('0', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'rotate(0deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__menu_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"horizontal-menu\" class=\"menu-wrapper horizontal-menu-wrapper d-flex justify-content-start align-items-center\"></div>  \n"

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.horizontal-menu-wrapper {\n  min-height: 38px; }\n\n#navigation {\n  margin-left: auto;\n  margin-right: auto; }\n  #navigation .menu {\n    margin-bottom: 0; }\n    #navigation .menu li {\n      display: inline-block;\n      position: relative; }\n      #navigation .menu li a {\n        font-size: 14px;\n        display: block;\n        padding: 0.6em 1em;\n        cursor: pointer; }\n        #navigation .menu li a i {\n          margin-right: 10px; }\n      #navigation .menu li.menu-item-has-children > a:after {\n        font-family: FontAwesome;\n        content: \"\\F107\";\n        margin-left: 10px;\n        font-size: 13px; }\n\n#navigation .menu .sub-menu {\n  display: none;\n  padding: 0;\n  position: absolute;\n  margin-top: 0;\n  left: 0;\n  z-index: 99999;\n  text-align: left; }\n\n#navigation ul.menu ul a,\n#navigation .menu ul ul a {\n  margin: 0;\n  font-size: 14px;\n  padding: 6px 10px;\n  min-width: 160px;\n  line-height: 20px; }\n\n#navigation ul.menu li:hover > ul,\n#navigation .menu ul li:hover > ul {\n  display: block; }\n\n#navigation .menu .sub-menu ul {\n  left: 100%;\n  top: 0; }\n\n#navigation ul.sub-menu > li.menu-item-has-children > a:after {\n  font-family: FontAwesome;\n  content: \"\\F105\";\n  float: right;\n  font-size: 13px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                window.scrollTo(0, 0);
                var activeLink = _this.menuService.getActiveLink(_this.menuItems);
                _this.menuService.setActiveLink(_this.menuItems, activeLink);
                jQuery('.tooltip').tooltip('hide');
            }
        });
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'horizontal');
        if (this.settings.theme.menuType == 'mini')
            jQuery('.menu-item-link').tooltip();
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], HorizontalMenuComponent.prototype, "menuItems", void 0);
    HorizontalMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-horizontal-menu',
            template: __webpack_require__("../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=horizontal-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"vertical-menu\" class=\"menu-wrapper\" perfect-scrollbar></div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-wrapper {\n  height: 100%; }\n  .menu-wrapper .card {\n    border: 0;\n    border-radius: 0;\n    background: transparent; }\n    .menu-wrapper .card a {\n      cursor: pointer;\n      padding: 10px 0;\n      font-size: 14px;\n      display: inline-block;\n      width: 100%;\n      outline: none; }\n      .menu-wrapper .card a i {\n        padding: 0 12px; }\n      .menu-wrapper .card a b {\n        float: right;\n        margin-right: 15px;\n        margin-top: 4px;\n        transition: -webkit-transform 0.2s linear;\n        transition: transform 0.2s linear;\n        transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n      .menu-wrapper .card a.collapsed b {\n        -webkit-transform: rotate(-180deg);\n        transform: rotate(-180deg); }\n  .menu-wrapper .collapsing {\n    transition: height .25s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_components_menu_menu_model__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                window.scrollTo(0, 0);
                var activeLink = _this.menuService.getActiveLink(_this.menuItems);
                _this.menuService.setActiveLink(_this.menuItems, activeLink);
                jQuery('.tooltip').tooltip('hide');
                if (window.innerWidth <= 768) {
                    _this.settings.theme.showMenu = false;
                }
            }
        });
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.getMenuByRoleId().subscribe(function (res) {
            _this.menuItems = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var dd = res_1[_i];
                _this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_4__theme_components_menu_menu_model__["a" /* Menu */](dd.MenuId, dd.Title, dd.RouterLink, dd.Href, dd.Icon, dd.Target, dd.HasSubMenu, dd.ParentMenuId));
            }
            _this.menuService.createMenu(_this.menuItems, menu_wrapper, 'vertical');
            if (_this.settings.theme.menuType == 'mini')
                jQuery('.menu-item-link').tooltip();
        });
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        this.menuService.showActiveSubMenu(this.menuItems);
        var activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    VerticalMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vertical-menu',
            template: __webpack_require__("../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=vertical-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messagesDropDown\" class=\"dropdown d-inline-block\">\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"messages\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\n    </a>\n\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 p-0 mt-3 box-shadow\" aria-labelledby=\"messages\">    \n        <div class=\"clearfix\">            \n            <ul id=\"messagesTabs\" class=\"nav nav-tabs nav-justified border-0\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active transition\" data-toggle=\"tab\" href=\"#comments\"><i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i (click)=\"getNotificationList();\" title=\"Refresh\" class=\"fa fa-refresh \"></i></a>\n                </li>\n                <!--<li class=\"nav-item\">\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#files\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#meetings\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></a>\n                </li>-->                                            \n            </ul>\n        </div>\n        <div class=\"tab-content\" perfect-scrollbar>\n            <div class=\"tab-pane active\" id=\"comments\">\n                <div class=\"list\">\n                    <!--<a *ngFor=\"let message of messages\" href=\"javascript:void(0);\" class=\"transition\">\n                        <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\">                    \n                        <div class=\"list-content\">\n                            <h3>{{message.name}} <span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> {{message.time}}</span></h3>\n                            <p>{{message.text}}</p>\n                        </div>\n                    </a>-->\n                    <a *ngFor=\"let message of notificationList\" href=\"javascript:void(0);\" class=\"transition\">\r\n                        \r\n                        <div>\r\n                            <h3>{{message.AddedByUser}} <span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> {{message.AddedDateString}}&nbsp;&nbsp;&nbsp;<i (click)=\"DismissNotification(message.NotificationID);\" title=\"Dismiss\" class=\"fa fa-close\"></i></span></h3>\r\n                            <p>{{message.Text}}</p>\r\n                        </div>\r\n                    </a>\n                </div> \n            </div>\n            <div class=\"tab-pane\" id=\"files\">\n                <div class=\"list\">\n                    <a *ngFor=\"let file of files\" href class=\"transition\">\n                        <h3>{{file.text}} <span class=\"pull-right\">{{file.size}}</span></h3>\n                        <div class=\"progress progress-sm\">\n                            <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-{{file.class}}\" role=\"progressbar\" [style.width]=\"file.value\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"tab-pane\" id=\"meetings\">\n                <div class=\"list\">\n                    <a *ngFor=\"let meeting of meetings\" href=\"javascript:void(0);\" class=\"transition\">\n                        <div class=\"meeting-day bg-{{meeting.color}} pull-left\">\n                            <span>{{meeting.day}}</span>\n                            <span>{{meeting.month}}</span>\n                        </div>                   \n                        <div class=\"list-content\">\n                            <h2>{{meeting.title}}</h2>\n                            <p>{{meeting.text}}</p>\n                        </div>\n                    </a>\n                </div> \n            </div>\n        </div> \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_service__ = __webpack_require__("../../../../../src/app/theme/components/messages/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.notificationList = [];
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.getNotificationList = function () {
        var _this = this;
        this.notificationList = [];
        this.messagesService.getAllNotificationList().subscribe(function (res) {
            _this.notificationList = res;
        });
    };
    MessagesComponent.prototype.ngOnInit = function () {
        this.getNotificationList();
        jQuery('#messagesTabs').on('click', '.nav-item a', function () {
            var _this = this;
            setTimeout(function () { return jQuery(_this).closest('.dropdown').addClass('show'); });
        });
    };
    MessagesComponent.prototype.DismissNotification = function (id) {
        var _this = this;
        if (confirm("Sre you sure want to dismiss this notification ?")) {
            this.messagesService.disMissNotification(id).subscribe(function (res) {
                _this.getNotificationList();
            });
        }
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/theme/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/messages/messages.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */]) === "function" && _a || Object])
    ], MessagesComponent);
    return MessagesComponent;
    var _a;
}());

//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/messages/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
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
var MessagesService = /** @class */ (function () {
    function MessagesService(http) {
        this.http = http;
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'startng.zip',
                size: '~7.2 MB',
                value: '47%',
                class: 'danger'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33%',
                class: 'info'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60%',
                class: 'success'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80%',
                class: 'warning'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55%',
                class: 'primary'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75%',
                class: 'info'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    MessagesService.prototype.getMessages = function () {
        return this.messages;
    };
    MessagesService.prototype.getFiles = function () {
        return this.files;
    };
    MessagesService.prototype.getMeetings = function () {
        return this.meetings;
    };
    MessagesService.prototype.getAllNotificationList = function () {
        return this.http.get(apiURL + '/notification/GetAllNotificationList').map(function (response) { return response.json(); });
    };
    MessagesService.prototype.disMissNotification = function (id) {
        return this.http.get(apiURL + '/notification/DisMissNotification?id=' + id).map(function (response) { return response.json(); });
    };
    MessagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], MessagesService);
    return MessagesService;
    var _a;
}());

//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-chat h-100 transition\" [class.hoverable]=\"settings.theme.sideChatIsHoverable\" [class.show]=\"settings.theme.showSideChat\" [class.show-chat-item]=\"showHoverableChatItem\" [class.show-chat-window]=\"showChatWindow\">\n   <div [hidden]=\"showChatWindow\" class=\"media p-1 rounded-left transition person-search-media align-items-center\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\">\n        <i class=\"fa fa-search mr-1\" aria-hidden=\"true\"></i>\n        <div class=\"media-body\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control form-control-sm person-search\" placeholder=\"Search person...\">      \n        </div>\n    </div>   \n    \n       \n        <div class=\"chat-list h-100\" [hidden]=\"showChatWindow\" perfect-scrollbar>\n            <div *ngFor=\"let chat of chats | ChatPersonSearchPipe : searchText\" class=\"media p-1 rounded-left transition\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\" (click)=\"getChat(chat)\">\n                <img class=\"d-flex mr-3 rounded\" [src]=\"chat.image\">\n                <div class=\"media-body\">\n                    <h6 class=\"mb-1 mt-1 text-white\">{{chat.author}}</h6>\n                    <span [ngSwitch]=\"chat.authorStatus\">\n                        <i *ngSwitchCase=\"'Online'\" class=\"fa fa-check-circle text-success\" aria-hidden=\"true\"></i>\n                        <i *ngSwitchCase=\"'Offline'\" class=\"fa fa-times-circle text-danger\" aria-hidden=\"true\"></i> \n                        <i *ngSwitchCase=\"'Away'\" class=\"fa fa-clock-o text-info\" aria-hidden=\"true\"></i> \n                        <i *ngSwitchCase=\"'Do not disturb'\" class=\"fa fa-minus-circle text-warning\" aria-hidden=\"true\"></i>   \n                    </span>              \n                    <span class=\"status\">{{chat.authorStatus}}</span>\n                </div>\n            </div>\n        </div>\n      \n\n        <div class=\"chat-window\" [hidden]=\"!showChatWindow\">\n            <div class=\"d-flex justify-content-between align-items-center header\"> \n                 <span class=\"pl-2 pr-2 back\" (click)=\"back()\"> \n                    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> \n                </span>               \n                <h6 class=\"text-white mb-0 mr-2\">{{interlocutor}}</h6>                \n            </div>\n\n            <div class=\"chat-talk-list pt-2\" perfect-scrollbar>\n                <div *ngFor=\"let talk of talks\" class=\"media p-1 mb-1 border-0\"> \n                    <img *ngIf=\"talk.side=='left'\" class=\"d-flex mr-3 rounded\" src=\"{{ talk.image }}\">        \n                    <div class=\"media-body rounded pl-2 pr-2 {{talk.side}}\">\n                        <span class=\"d-block talk-text\">{{talk.text}}</span>\n                        <small class=\"mt-2 mb-1 pull-right\">{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>  \n                    </div>\n                    <img *ngIf=\"talk.side=='right'\" class=\"d-flex ml-3 rounded\" src=\"{{ talk.image }}\">\n                </div>\n\n            </div>\n           \n          \n            <div class=\"d-flex align-items-center pl-1 pr-1 footer\">\n                <div class=\"input-group\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your text...\"\n                    (keyup)=\"addChatItem($event)\" [(ngModel)]=\"newChatText\">\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-main\" type=\"button\" (click)=\"addChatItem($event)\">\n                            <i class=\"fa fa-paper-plane send\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n     \n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--<div class=\"side-chat h-100 transition\" [class.hoverable]=\"settings.theme.sideChatIsHoverable\" [class.show]=\"settings.theme.showSideChat\" [class.show-chat-item]=\"showHoverableChatItem\" [class.show-chat-window]=\"showChatWindow\">\n   <div [hidden]=\"showChatWindow\" class=\"media p-1 rounded-left transition person-search-media align-items-center\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\">\n        <i class=\"fa fa-search mr-1\" aria-hidden=\"true\"></i>\n        <div class=\"media-body\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control form-control-sm person-search\" placeholder=\"Search person...\">      \n        </div>\n    </div>   \n    <div class=\"h-100 side-chat-inner\" perfect-scrollbar>\n       \n        <div class=\"chat-list\" [hidden]=\"showChatWindow\">\n            <div *ngFor=\"let chat of chats | ChatPersonSearchPipe : searchText\" class=\"media p-1 rounded-left transition\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\" (click)=\"getChat(chat)\">\n                <img class=\"d-flex mr-3 rounded\" src=\"{{ chat.image }}\">\n                <div class=\"media-body\">\n                    <h6 class=\"mb-1 mt-1 text-white\">{{chat.author}}</h6>\n                    <span [ngSwitch]=\"chat.authorStatus\">\n                        <i *ngSwitchCase=\"'Online'\" class=\"fa fa-check-circle text-success\" aria-hidden=\"true\"></i>\n                        <i *ngSwitchCase=\"'Offline'\" class=\"fa fa-times-circle text-danger\" aria-hidden=\"true\"></i> \n                        <i *ngSwitchCase=\"'Away'\" class=\"fa fa-clock-o text-info\" aria-hidden=\"true\"></i> \n                        <i *ngSwitchCase=\"'Do not disturb'\" class=\"fa fa-minus-circle text-warning\" aria-hidden=\"true\"></i>   \n                    </span>              \n                    <span class=\"status\">{{chat.authorStatus}}</span>\n                </div>\n            </div>\n        </div>\n      \n\n        <div class=\"chat-window\" [hidden]=\"!showChatWindow\">\n            <div class=\"d-flex justify-content-between align-items-center header mb-2\">               \n                <h6 class=\"text-white mb-0 ml-2\">{{activeChat.author}}</h6>\n                <span class=\"mr-2\"> \n                    <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"showChatWindow = false\"></i> \n                </span>   \n            </div>\n\n            <div class=\"h-100\" perfect-scrollbar>\n                <div class=\"media p-1 rounded-left transition border-0\">\n                    <img class=\"d-flex mr-3 rounded\" src=\"{{ activeChat.image }}\">\n                    <div class=\"media-body rounded pl-2 pr-2\">\n                        <span>{{activeChat.text}}</span>\n                        <small class=\"mt-2 mb-1 pull-right\">{{activeChat.date | date:\"dd MMMM, yyyy 'at' HH:mm a\"}}</small>  \n                    </div>\n                </div>\n                <div class=\"media p-1 rounded-left transition border-0\">\n                    <img class=\"d-flex mr-3 rounded\" src=\"{{ activeChat.image }}\">\n                    <div class=\"media-body rounded pl-2 pr-2\">\n                        <span>{{activeChat.text}}</span>\n                        <small class=\"mt-2 mb-1 pull-right\">{{activeChat.date | date:\"dd MMMM, yyyy 'at' HH:mm a\"}}</small>  \n                    </div>\n                </div>\n                <div class=\"media p-1 rounded-left transition border-0\">\n                    <img class=\"d-flex mr-3 rounded\" src=\"{{ activeChat.image }}\">\n                    <div class=\"media-body rounded pl-2 pr-2\">\n                        <span>{{activeChat.text}}</span>\n                        <small class=\"mt-2 mb-1 pull-right\">{{activeChat.date | date:\"dd MMMM, yyyy 'at' HH:mm a\"}}</small>  \n                    </div>\n                </div>\n\n                <p> dddd</p>\n                <p> ssss</p>\n\n            </div>\n           \n          \n            <div class=\"footer mb-3 p-1\">\n                <div class=\"input-group\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your text...\">\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-main\" type=\"button\" >\n                            <i class=\"fa fa-paper-plane send\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>   \n</div>-->\n\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.side-chat {\n  position: fixed;\n  right: -52px;\n  z-index: 999;\n  width: 0;\n  top: 47px; }\n  .side-chat .person-search-media {\n    height: 32px; }\n    .side-chat .person-search-media .fa-search {\n      font-size: 18px;\n      padding: 0px 16px 4px; }\n    .side-chat .person-search-media .person-search {\n      border: none;\n      background: rgba(255, 255, 255, 0.15);\n      padding: 4px 6px 2px;\n      box-shadow: none;\n      border-radius: 0;\n      color: #fff; }\n  .side-chat .media {\n    position: relative;\n    width: 230px;\n    right: 0;\n    z-index: 9999999;\n    color: #fff; }\n    .side-chat .media img {\n      width: 45px; }\n    .side-chat .media h6 {\n      font-weight: 400; }\n    .side-chat .media .status {\n      font-size: 12px; }\n  .side-chat .chat-list {\n    padding-bottom: 78px; }\n    .side-chat .chat-list .ps__scrollbar-y-rail {\n      z-index: 99999999; }\n    .side-chat .chat-list .media {\n      cursor: pointer; }\n  .side-chat .chat-window {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: block; }\n    .side-chat .chat-window .header {\n      height: 30px; }\n      .side-chat .chat-window .header .back {\n        font-size: 18px;\n        cursor: pointer; }\n    .side-chat .chat-window .chat-talk-list {\n      height: calc(100vh - (46px + 30px + 46px)); }\n      .side-chat .chat-window .chat-talk-list .talk-text {\n        width: 150px;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n      .side-chat .chat-window .chat-talk-list .ps__scrollbar-y-rail {\n        z-index: 99999999; }\n    .side-chat .chat-window .media {\n      right: 0 !important; }\n      .side-chat .chat-window .media .media-body {\n        background: rgba(255, 255, 255, 0.05); }\n        .side-chat .chat-window .media .media-body.left:before {\n          content: \"\";\n          border: 7px solid transparent;\n          border-right-color: rgba(255, 255, 255, 0.05);\n          position: absolute;\n          top: 18px;\n          left: 49px; }\n        .side-chat .chat-window .media .media-body.right:before {\n          content: \"\";\n          border: 7px solid transparent;\n          border-left-color: rgba(255, 255, 255, 0.05);\n          position: absolute;\n          top: 18px;\n          right: 48px; }\n    .side-chat .chat-window .footer {\n      position: fixed;\n      bottom: 0;\n      height: 46px; }\n      .side-chat .chat-window .footer input[type='text'] {\n        border: 1px solid #fff; }\n  .side-chat.show {\n    right: 0;\n    width: 230px; }\n  .side-chat.show-chat-item {\n    width: 230px; }\n  .side-chat.hoverable.show {\n    width: 52px; }\n    .side-chat.hoverable.show.show-chat-window {\n      width: 230px !important; }\n  .side-chat.hoverable.show-chat-item {\n    width: 230px; }\n    .side-chat.hoverable.show-chat-item .media {\n      right: -178px; }\n      .side-chat.hoverable.show-chat-item .media:hover {\n        right: 0; }\n  .side-chat.hoverable .chat-list {\n    padding-bottom: 78px; }\n    .side-chat.hoverable .chat-list .ps__scrollbar-y-rail {\n      z-index: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__side_chat_service__ = __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_chat_model__ = __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideChatComponent = /** @class */ (function () {
    function SideChatComponent(appSettings, sideChatService) {
        this.appSettings = appSettings;
        this.sideChatService = sideChatService;
        this.showHoverableChatItem = false;
        this.showChatWindow = false;
        this.settings = this.appSettings.settings;
        this.chats = sideChatService.getChats();
        this.talks = this.sideChatService.getTalk();
    }
    SideChatComponent.prototype.ngOnInit = function () {
    };
    SideChatComponent.prototype.back = function () {
        this.showChatWindow = false;
        this.talks.shift();
        console.log(this.talks);
        this.talks.length = 2;
    };
    SideChatComponent.prototype.getChat = function (chat) {
        this.searchText = '';
        this.showChatWindow = true;
        this.interlocutor = chat.author;
        this.talks.forEach(function (item) {
            if (item.side == 'left') {
                item.image = chat.image;
            }
        });
        this.talks.unshift(chat);
    };
    SideChatComponent.prototype.addChatItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.talks.push(new __WEBPACK_IMPORTED_MODULE_3__side_chat_model__["a" /* SideChat */]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newChatText, new Date(), 'right'));
            this.newChatText = '';
            var chatContainer_1 = document.querySelector('.chat-talk-list');
            setTimeout(function () {
                var nodes = chatContainer_1.querySelectorAll('.media');
                var newChatTextHeight = nodes[nodes.length - 1];
                chatContainer_1.scrollTop = chatContainer_1.scrollHeight + newChatTextHeight.clientHeight;
            });
        }
    };
    SideChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-chat',
            template: __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__side_chat_service__["a" /* SideChatService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__side_chat_service__["a" /* SideChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__side_chat_service__["a" /* SideChatService */]) === "function" && _b || Object])
    ], SideChatComponent);
    return SideChatComponent;
    var _a, _b;
}());

//# sourceMappingURL=side-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideChat; });
var SideChat = /** @class */ (function () {
    function SideChat(image, author, authorStatus, text, date, side) {
        this.image = image;
        this.author = author;
        this.authorStatus = authorStatus;
        this.text = text;
        this.date = date;
        this.side = side;
    }
    return SideChat;
}());

//# sourceMappingURL=side-chat.model.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_chat_model__ = __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
var chats = [
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-3.png', 'Andy Warhol', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-7.png', 'Lusia Manuel', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/users/default-user.jpg', 'unknown', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-1.png', 'Jeremi Powell', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-8.png', 'Calico Jack', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-5.png', 'Michelle Ormond', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-6.png', 'Sean Connery', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left')
];
var talks = [
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, StartNG is a fully responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), 'right'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute + 3), 'left'),
];
var SideChatService = /** @class */ (function () {
    function SideChatService() {
    }
    SideChatService.prototype.getChats = function () {
        return chats;
    };
    SideChatService.prototype.getTalk = function () {
        return talks;
    };
    SideChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SideChatService);
    return SideChatService;
}());

// import {Injectable} from '@angular/core'
// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();
// @Injectable()
// export class SideChatService {
//     private chats = [
//         {
//             image: 'assets/img/profile/ashley.jpg',
//             author: 'Ashley Ahlberg', 
//             authorStatus: 'Online',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/bruno.jpg',
//             author: 'Bruno Vespa', 
//             authorStatus: 'Do not disturb',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/julia.jpg',
//             author: 'Julia Aniston', 
//             authorStatus: 'Away',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/users/default-user.jpg',
//             author: 'unknown',
//             authorStatus: 'Offline',
//             text: 'After you get up and running, you can place Font Awesome icons just about...',
//             time: '1 min ago'
//         },
//         // {
//         //     image: 'michael',
//         //     author: 'Michael Blair',
//         //     text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
//         //     time: '2 hrs ago'
//         // },
//         // {
//         //     image: 'julia',
//         //     author: 'Julia Aniston',
//         //     text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
//         //     time: '10 hrs ago'
//         // },
//         // {
//         //     image: 'bruno',
//         //     author: 'Bruno Vespa',
//         //     text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'tereza',
//         //     author: 'Tereza Stiles',
//         //     text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'adam',
//         //     author: 'Adam Sandler',
//         //     text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
//         //     time: '2 days ago'
//         // },
//     ]; 
//     public getChats():Array<Object> {
//         return this.chats;
//     }
// } 
//# sourceMappingURL=side-chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-outer\">\n    <a class=\"logo d-flex align-items-center\" routerLink=\"/\" (click)=\"closeSubMenus()\" *ngIf=\"settings.theme.sidebarIsFixed\">\n        <span class=\"start\">start</span><span class=\"ng\">NG</span>\n    </a>\n    <app-vertical-menu [menuItems]=\"menuItems\">></app-vertical-menu>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.sidebar-outer {\n  height: 100%;\n  width: 250px; }\n  .sidebar-outer .logo {\n    height: 46px;\n    padding: 0 14px;\n    width: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_components_menu_menu_model__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(appSettings, menuService) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.menuItems = [];
        this.settings = this.appSettings.settings;
        this.menuService.getMenuByRoleId().subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var dd = res_1[_i];
                _this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_3__theme_components_menu_menu_model__["a" /* Menu */](dd.MenuId, dd.Title, dd.RouterLink, dd.Href, dd.Icon, dd.Target, dd.HasSubMenu, dd.ParentMenuId));
            }
        });
        //this.menuItems = this.menuService.getVerticalMenuItems();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage["userMenuItems"]) {
            var ids = JSON.parse(sessionStorage.getItem("userMenuItems"));
            var newArr_1 = [];
            ids.forEach(function (id) {
                var newMenuItem = _this.menuItems.filter(function (mail) { return mail.id == id; });
                newArr_1.push(newMenuItem[0]);
            });
            this.menuItems = newArr_1;
        }
    };
    SidebarComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        for (var i = 0; i < menu.children.length; i++) {
            var child = menu.children[i].children[1];
            if (child) {
                if (child.classList.contains('show')) {
                    child.classList.remove('show');
                    menu.children[i].children[0].classList.add('collapsed');
                }
            }
        }
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/theme/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/sidebar/sidebar.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__menu_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__menu_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/user-menu/user-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"user-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\r\n    </a>\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"user-menu\">\r\n        <div class=\"user-menu\">\r\n            <div class=\"user-info text-center p-3\">\r\n                <!--<img src=\"assets/img/users/user.jpg\" alt=\"user-img\" class=\"user-img rounded-circle\">-->\r\n                <p class=\"mt-1 mb-0\">\r\n                    {{LoggedInUserName}}\r\n                    <small>Member since {{AddedDate}}</small>\r\n                </p>\r\n            </div>\r\n            <a class=\"dropdown-item\" (click)=\"NavigateToUser()\"><i class=\"fa fa-user mr-2\"></i>Profile</a>\r\n            <!--<a class=\"dropdown-item\" routerLink=\"settings\"><i class=\"fa fa-cog mr-2\"></i>Settings</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fa fa-lock mr-2\"></i>Lock screen</a>-->\r\n            <a class=\"dropdown-item mb-1\" (click)=\"NavigateToChangePassword()\"><i class=\"fa fa-key mr-2\"></i>Change Password</a>\r\n            <a class=\"dropdown-item mb-1\" (click)=\"Logout()\"><i class=\"fa fa-power-off mr-2\"></i>Log out</a>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/user-menu/user-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu .user-menu {\n  width: 240px;\n  padding: 0; }\n  .dropdown-menu .user-menu .user-img {\n    width: 100px; }\n  .dropdown-menu .user-menu .dropdown-item {\n    color: #666 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/user-menu/user-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/user-menu/user-menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(_cookieService, router, userMenuService) {
        this._cookieService = _cookieService;
        this.userMenuService = userMenuService;
        this.router = router;
    }
    UserMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userMenuService.getUserInformation().subscribe(function (res) {
            _this.LoggedInUserId = res.UserId;
            _this.AddedDate = res.AddedDate;
            _this.LoggedInUserName = res.FirstName + " " + res.LastName;
        });
    };
    UserMenuComponent.prototype.Logout = function () {
        var _this = this;
        this.userMenuService.logoutUser().subscribe(function (res) {
            sessionStorage.removeItem("apiAuthToken");
            document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
            _this.router.navigate(['login']);
        });
    };
    UserMenuComponent.prototype.NavigateToUser = function () {
        this.router.navigate(['pages/user/' + this.LoggedInUserId]);
    };
    UserMenuComponent.prototype.NavigateToChangePassword = function () {
        this.router.navigate(['pages/user/changepassword']);
    };
    UserMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__("../../../../../src/app/theme/components/user-menu/user-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/user-menu/user-menu.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__user_menu_service__["a" /* UserMenuService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_cookie__["b" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_menu_service__["a" /* UserMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_menu_service__["a" /* UserMenuService */]) === "function" && _c || Object])
    ], UserMenuComponent);
    return UserMenuComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=user-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/theme/components/user-menu/user-menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuService; });
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
var UserMenuService = /** @class */ (function () {
    function UserMenuService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('authorization', sessionStorage["apiAuthToken"]);
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ headers: this.headers });
    }
    UserMenuService.prototype.logoutUser = function () {
        return this.http.get(apiURL + "/login/Logout").map(function (response) { return response.json(); });
    };
    UserMenuService.prototype.getUserInformation = function () {
        return this.http.get(apiURL + "/user/GetUserInformation").map(function (response) { return response.json(); });
    };
    UserMenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], UserMenuService);
    return UserMenuService;
    var _a;
}());

//# sourceMappingURL=user-menu.service.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map