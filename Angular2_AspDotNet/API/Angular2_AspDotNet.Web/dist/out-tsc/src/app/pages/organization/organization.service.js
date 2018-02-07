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
var OrganizationService = /** @class */ (function () {
    function OrganizationService(http) {
        this.http = http;
    }
    OrganizationService.prototype.getOrganizationListData = function (filter) {
        return this.http.post(apiURL + '/organization/GetOrganizationListData', filter).map(function (response) { return response.json(); });
    };
    OrganizationService.prototype.deleteOrganization = function (id) {
        return this.http.get(apiURL + '/organization/DeleteOrganization?id=' + id).map(function (response) { return response.json(); });
    };
    OrganizationService.prototype.saveOrganization = function (data) {
        return this.http.post(apiURL + '/organization/AddUpdateOrganization', data).map(function (response) { return response.json(); });
    };
    OrganizationService.prototype.getSingleOrganization = function (id) {
        return this.http.get(apiURL + '/organization/GetSingleOrganization?id=' + id).map(function (response) { return response.json(); });
    };
    OrganizationService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/organization/SaveMaterial', body).map(function (res) { });
    };
    OrganizationService.prototype.downloadMaterial = function (id) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob });
        return this.http.get(apiURL + '/organization/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    OrganizationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], OrganizationService);
    return OrganizationService;
    var _a;
}());
exports.OrganizationService = OrganizationService;
//# sourceMappingURL=organization.service.js.map