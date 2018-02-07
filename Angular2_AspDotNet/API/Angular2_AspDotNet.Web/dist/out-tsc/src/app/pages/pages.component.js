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
var router_1 = require("@angular/router");
var app_settings_1 = require("../app.settings");
var customdynamicmenu_service_1 = require("../pages/menu/customdynamicmenu.service");
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
        core_1.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        core_1.Component({
            selector: 'app-pages',
            templateUrl: './pages.component.html',
            styleUrls: ['./pages.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [customdynamicmenu_service_1.CustomDynamicMenuService],
        }),
        __metadata("design:paramtypes", [customdynamicmenu_service_1.CustomDynamicMenuService, app_settings_1.AppSettings, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
    ], PagesComponent);
    return PagesComponent;
    var _a;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map