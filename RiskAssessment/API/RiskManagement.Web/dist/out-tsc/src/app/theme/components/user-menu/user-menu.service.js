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
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/map");
var environment_1 = require("../../../../environments/environment");
var apiURL = environment_1.environment.apiEndpoint;
var UserMenuService = /** @class */ (function () {
    function UserMenuService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('authorization', sessionStorage["apiAuthToken"]);
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    UserMenuService.prototype.logoutUser = function () {
        return this.http.get(apiURL + "/login/Logout").map(function (response) { return response.json(); });
    };
    UserMenuService.prototype.getUserInformation = function () {
        return this.http.get(apiURL + "/user/GetUserInformation").map(function (response) { return response.json(); });
    };
    UserMenuService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserMenuService);
    return UserMenuService;
}());
exports.UserMenuService = UserMenuService;
//# sourceMappingURL=user-menu.service.js.map