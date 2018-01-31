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
var AuditService = /** @class */ (function () {
    function AuditService(http) {
        this.http = http;
    }
    AuditService.prototype.getAuditListData = function (filter) {
        return this.http.post(apiURL + '/audit/GetAuditListData', filter).map(function (response) { return response.json(); });
    };
    AuditService.prototype.deleteAudit = function (id) {
        return this.http.get(apiURL + '/audit/DeleteAudit?id=' + id).map(function (response) { return response.json(); });
    };
    AuditService.prototype.saveAuditFormData = function (data) {
        return this.http.post(apiURL + '/audit/AddUpdateAudit', data).map(function (response) { return response.json(); });
    };
    AuditService.prototype.getSingleAudit = function (id) {
        return this.http.get(apiURL + '/audit/GetSingleAudit?id=' + id).map(function (response) { return response.json(); });
    };
    AuditService.prototype.getAuditSubject = function (id) {
        return this.http.get(apiURL + '/audit/GetAuditSubject?id=' + id).map(function (response) { return response.json(); });
    };
    AuditService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/audit/SaveMaterial', body).map(function (res) { });
    };
    AuditService.prototype.downloadMaterial = function (id) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob });
        return this.http.get(apiURL + '/audit/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    // Audit review
    AuditService.prototype.saveAuditReviewFormData = function (data) {
        return this.http.post(apiURL + '/audit/AddUpdateAuditReview', data).map(function (response) { return response.json(); });
    };
    AuditService.prototype.getAuditSubjectReview = function (AuditSubjectID, AuditSubjectReviewID) {
        return this.http.get(apiURL + '/audit/GetAuditSubjectReview?AuditSubjectID=' + AuditSubjectID + '&AuditSubjectReviewID=' + AuditSubjectReviewID).map(function (response) { return response.json(); });
    };
    AuditService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuditService);
    return AuditService;
}());
exports.AuditService = AuditService;
//# sourceMappingURL=audit.service.js.map