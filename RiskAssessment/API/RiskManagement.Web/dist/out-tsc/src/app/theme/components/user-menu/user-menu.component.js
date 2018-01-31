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
var user_menu_service_1 = require("./user-menu.service");
var ngx_cookie_1 = require("ngx-cookie");
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
        core_1.Component({
            selector: 'app-user-menu',
            templateUrl: './user-menu.component.html',
            styleUrls: ['./user-menu.component.scss'],
            providers: [user_menu_service_1.UserMenuService],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ngx_cookie_1.CookieService, router_1.Router, user_menu_service_1.UserMenuService])
    ], UserMenuComponent);
    return UserMenuComponent;
}());
exports.UserMenuComponent = UserMenuComponent;
//# sourceMappingURL=user-menu.component.js.map