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
var RiskAssessmentService = /** @class */ (function () {
    function RiskAssessmentService(http) {
        this.http = http;
    }
    RiskAssessmentService.prototype.getAllHazard = function () {
        return this.http.get(apiURL + '/RiskAssessment/GetAllHazard').map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getAllDurationUnit = function () {
        return this.http.get(apiURL + '/RiskAssessment/GetAllDurationUnit').map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getAllMonitoringMethod = function () {
        return this.http.get(apiURL + '/RiskAssessment/GetAllMonitoringMethod').map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.addUpdateRiskAssessment = function (model) {
        return this.http.post(apiURL + '/RiskAssessment/AddUpdateRiskAssessment', model).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.addUpdateRiskAssessmentHazard = function (model) {
        return this.http.post(apiURL + '/RiskAssessment/AddUpdateRiskAssessmentHazard', model).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getRiskAssessment = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/GetSingleWithTeam?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getHazardList = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/GetHazardListWithRiskAssessmentId?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getRiskAssessmentList = function (filter) {
        return this.http.post(apiURL + '/RiskAssessment/GetRiskAssessmentListData', filter).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.deleteAssessment = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/Delete?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.updateSignatureDate = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/UpdateSignatureDate?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.updateTrainigRequired = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentTrainingRequired?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.updateRiskAssessmentStatus = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentStatus?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getSignedUserList = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/GetSignedUserList?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.updateReviewDate = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/UpdateReviewDate?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.reviewRiskAssessment = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/ReviewRiskAssessment?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getHazardData = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/GetRiskAssessmentHazardData?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], RiskAssessmentService);
    return RiskAssessmentService;
    var _a;
}());
exports.RiskAssessmentService = RiskAssessmentService;
//# sourceMappingURL=riskassessment.service.js.map