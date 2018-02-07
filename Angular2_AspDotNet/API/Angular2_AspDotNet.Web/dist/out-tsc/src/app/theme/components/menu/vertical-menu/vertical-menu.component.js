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
var menu_service_1 = require("../menu.service");
var app_settings_1 = require("../../../../app.settings");
var menu_model_1 = require("../../../../theme/components/menu/menu.model");
var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
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
                _this.menuItems.push(new menu_model_1.Menu(dd.MenuId, dd.Title, dd.RouterLink, dd.Href, dd.Icon, dd.Target, dd.HasSubMenu, dd.ParentMenuId));
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
        core_1.Input('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    VerticalMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-vertical-menu',
            templateUrl: './vertical-menu.component.html',
            styleUrls: ['./vertical-menu.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings,
            menu_service_1.MenuService,
            router_1.Router,
            core_1.ElementRef])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
}());
exports.VerticalMenuComponent = VerticalMenuComponent;
//# sourceMappingURL=vertical-menu.component.js.map