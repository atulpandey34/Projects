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
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('authorization', sessionStorage["apiAuthToken"]);
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    UserService.prototype.getRoleList = function () {
        return this.http.get(apiURL + '/role/GetAll').map(function (response) { return response.json(); });
    };
    UserService.prototype.getMultiSelectRoleList = function (orgid) {
        if (orgid == null || orgid == undefined)
            orgid = 0;
        return this.http.get(apiURL + '/role/GetMultiSelectAll?orgId=' + orgid).map(function (response) { return response.json(); });
    };
    UserService.prototype.getRoleMultipleList = function () {
        return this.http.get(apiURL + '/role/GetAllMultiSelect').map(function (response) { return response.json(); });
    };
    UserService.prototype.getSecurityQuestionList = function () {
        return this.http.get(apiURL + '/securityquestion/GetAll').map(function (response) { return response.json(); });
    };
    UserService.prototype.getOrganizationList = function () {
        return this.http.get(apiURL + '/organization/GetAll').map(function (response) { return response.json(); });
    };
    UserService.prototype.saveUser = function (data) {
        return this.http.post(apiURL + '/user/AddUser', data).map(function (response) { return response.json(); });
    };
    UserService.prototype.validateUserEmail = function (email, userId) {
        return this.http.get(apiURL + '/user/ValidateUserEmail?email=' + email + "&userId=" + userId).map(function (response) { return response.json(); });
    };
    UserService.prototype.validateUserName = function (userName, userId) {
        return this.http.get(apiURL + '/user/ValidateUserName?userName=' + userName + "&userId=" + userId).map(function (response) { return response.json(); });
    };
    UserService.prototype.getSingleUser = function (id) {
        return this.http.get(apiURL + '/user/GetSingle?id=' + id).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAllUser = function (pageNo, pageSize, sortColumn, sortOrder, OrganizationFilte, RoleFilter, userName, firstName, lastName, emailId, inactiveFilter) {
        return this.http.get(apiURL + '/user/GetAllUser?PageNo=' + pageNo + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&inactiveFilter=" + inactiveFilter
            + "&OrganizationFilte=" + OrganizationFilte + "&RoleFilter=" + RoleFilter
            + "&userName=" + userName
            + "&firstName=" + firstName
            + "&lastName=" + lastName
            + "&emailId=" + emailId).map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.get(apiURL + '/user/DeleteUser?id=' + id).map(function (response) { return response.json(); });
    };
    UserService.prototype.resetPassword = function (id) {
        return this.http.get(apiURL + '/user/ResetPassword?id=' + id).map(function (response) { return response.json(); });
    };
    UserService.prototype.inactiveUser = function (id, status) {
        return this.http.get(apiURL + '/user/UpdateInactive?id=' + id + "&status=" + status).map(function (response) { return response.json(); });
    };
    UserService.prototype.changePassword = function (model) {
        return this.http.post(apiURL + '/user/ChangePassword', model).map(function (response) { return response.json(); });
    };
    UserService.prototype.verifyPassword = function (password) {
        return this.http.get(apiURL + '/user/VerifyPassword?password=' + password).map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map