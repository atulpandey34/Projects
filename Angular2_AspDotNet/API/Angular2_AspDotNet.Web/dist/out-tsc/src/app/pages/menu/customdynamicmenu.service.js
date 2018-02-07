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
var environment_1 = require("../../../environments/environment");
var apiURL = environment_1.environment.apiEndpoint;
var CustomDynamicMenuService = /** @class */ (function () {
    function CustomDynamicMenuService(http) {
        this.http = http;
    }
    CustomDynamicMenuService.prototype.deleteMenu = function (id) {
        return this.http.get(apiURL + '/menu/Delete?id=' + id).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.deactivateMenu = function (id) {
        return this.http.get(apiURL + '/menu/Deactivate?id=' + id).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.appUpdateMenu = function (model) {
        return this.http.post(apiURL + '/menu/AddUpdateMenu', model).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.getSingle = function (id) {
        return this.http.get(apiURL + '/menu/GetSingleById?id=' + id).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.getAllMenu = function () {
        return this.http.get(apiURL + '/menu/GetAllMenu').map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.getListPageData = function (filterModel) {
        return this.http.post(apiURL + '/menu/GetAllMenuListData', filterModel).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.addUpdateRole = function (role) {
        return this.http.post(apiURL + '/role/AddUpdateRole', role).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.addUpdateRoleMenu = function (role) {
        return this.http.post(apiURL + '/role/AddUpdateRoleMenu', role).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.getAllRoleMenu = function (RoleId) {
        return this.http.get(apiURL + '/role/GetAllRoleMenu?RoleId=' + RoleId).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService.prototype.getDefaultUrl = function (url) {
        return this.http.get(apiURL + '/role/GetDefaultUrl?Url=' + url).map(function (response) { return response.json(); });
    };
    CustomDynamicMenuService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], CustomDynamicMenuService);
    return CustomDynamicMenuService;
    var _a;
}());
exports.CustomDynamicMenuService = CustomDynamicMenuService;
//# sourceMappingURL=customdynamicmenu.service.js.map