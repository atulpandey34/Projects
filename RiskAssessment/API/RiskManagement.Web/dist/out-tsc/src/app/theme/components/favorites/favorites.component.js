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
var menu_service_1 = require("../menu/menu.service");
var menu_model_1 = require("../../../theme/components/menu/menu.model");
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
                _this.menuItems.push(new menu_model_1.Menu(dd.MenuId, dd.Title, dd.RouterLink, dd.Href, dd.Icon, dd.Target, dd.HasSubMenu, dd.ParentMenuId));
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
        core_1.Component({
            selector: 'app-favorites',
            templateUrl: './favorites.component.html',
            styleUrls: ['./favorites.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [menu_service_1.MenuService])
    ], FavoritesComponent);
    return FavoritesComponent;
}());
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=favorites.component.js.map