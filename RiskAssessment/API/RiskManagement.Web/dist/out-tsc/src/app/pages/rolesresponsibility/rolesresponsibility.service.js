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
var http_2 = require("@angular/http");
var apiURL = environment_1.environment.apiEndpoint;
var RolesResponsibilityService = /** @class */ (function () {
    function RolesResponsibilityService(http) {
        this.http = http;
    }
    RolesResponsibilityService.prototype.getAllMasterRoleSection = function () {
        return this.http.get(apiURL + '/roleresponsibility/GetAllMasterRoleSection').map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.getRoleResponsibility = function (roleid) {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibility?roleid=' + roleid).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.getRoleResponsibilityVerion = function (id) {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibilityVerion?RoleResponsibilityVersionID=' + id).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.addUpdateRoleResponsibility = function (model) {
        return this.http.post(apiURL + '/roleresponsibility/AddUpdateRoleResponsibility', model).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.getRoleResponsibilityVersionList = function (roleresponsibilityid) {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibilityVersionList?roleresponsibilityid=' + roleresponsibilityid).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.approveVersion = function (id) {
        return this.http.get(apiURL + '/roleresponsibility/ApproveVersion?id=' + id).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/roleresponsibility/SaveMaterial', body).map(function (res) { });
    };
    RolesResponsibilityService.prototype.downloadMaterial = function (id) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob });
        return this.http.get(apiURL + '/roleresponsibility/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    RolesResponsibilityService.prototype.SaveMasterJobSectionFormData = function (model) {
        return this.http.post(apiURL + '/roleresponsibility/SaveMasterJobSectionFormData', model).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService.prototype.validateMasterJobSection = function (value) {
        return this.http.get(apiURL + '/roleresponsibility/ValidateMasterJobSection?value=' + value).map(function (response) { return response.json(); });
    };
    RolesResponsibilityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RolesResponsibilityService);
    return RolesResponsibilityService;
}());
exports.RolesResponsibilityService = RolesResponsibilityService;
//# sourceMappingURL=rolesresponsibility.service.js.map