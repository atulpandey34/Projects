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
var app_settings_1 = require("../../../app.settings");
var menu_service_1 = require("../menu/menu.service");
var menu_model_1 = require("../../../theme/components/menu/menu.model");
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
                _this.menuItems.push(new menu_model_1.Menu(dd.MenuId, dd.Title, dd.RouterLink, dd.Href, dd.Icon, dd.Target, dd.HasSubMenu, dd.ParentMenuId));
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
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, menu_service_1.MenuService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map