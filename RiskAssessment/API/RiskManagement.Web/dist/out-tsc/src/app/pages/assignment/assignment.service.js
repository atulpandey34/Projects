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
var AssignmentService = /** @class */ (function () {
    function AssignmentService(http) {
        this.http = http;
    }
    //getAssignmentList(filter: AssignmentListFilterModel): Observable<any> {
    //    return this.http.get(apiURL + '/Assignment/GetAssignmentList').map(response => response.json());
    //}
    AssignmentService.prototype.deleteAssignment = function (id) {
        return this.http.get(apiURL + '/Assignment/DeleteAssigment?id=' + id).map(function (response) { return response.json(); });
    };
    //getAllHazard(): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetAllHazard').map(response => response.json());
    //}
    //getAllDurationUnit(): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetAllDurationUnit').map(response => response.json());
    //}
    ////getAllMonitoringMethod(): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetAllMonitoringMethod').map(response => response.json());
    //}
    //addUpdateRiskAssessment(model: RiskAssessmentViewModel): Observable<any> {
    //    return this.http.post(apiURL + '/RiskAssessment/AddUpdateRiskAssessment', model).map(response => response.json());
    //}
    AssignmentService.prototype.addUpdateQuestionAssignment = function (model) {
        return this.http.post(apiURL + '/Assignment/AddUpdateQuestionAssignment', model).map(function (response) { return response.json(); });
    };
    AssignmentService.prototype.addUpdateAssignment = function (model) {
        return this.http.post(apiURL + '/Assignment/AddUpdateAssignment', model).map(function (response) { return response.json(); });
    };
    //getRiskAssessment(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetSingleWithTeam?id=' + id).map(response => response.json());
    //}
    AssignmentService.prototype.getAssignment = function (id) {
        return this.http.get(apiURL + '/Assignment/GetAssginmentListWithAssignmentId?id=' + id).map(function (response) { return response.json(); });
    };
    AssignmentService.prototype.getAllAssignment = function () {
        return this.http.get(apiURL + '/Assignment/GetAllAssignment').map(function (response) { return response.json(); });
    };
    AssignmentService.prototype.getAssignmentList = function (filter) {
        return this.http.post(apiURL + '/Assignment/GetAssignmentListData', filter).map(function (response) { return response.json(); });
    };
    //deleteAssessment(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/Delete?id=' + id).map(response => response.json());
    //}
    //updateSignatureDate(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/UpdateSignatureDate?id=' + id).map(response => response.json());
    //}
    //updateTrainigRequired(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentTrainingRequired?id=' + id).map(response => response.json());
    //}
    //updateRiskAssessmentStatus(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentStatus?id=' + id).map(response => response.json());
    //}
    //getSignedUserList(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetSignedUserList?id=' + id).map(response => response.json());
    //}
    AssignmentService.prototype.getQuestionListOfAssignment = function (id) {
        return this.http.get(apiURL + '/Assignment/GetQuestionOptionList/' + id).map(function (response) { return response.json(); });
    };
    AssignmentService.prototype.deleteQuestionWithOption = function (id) {
        return this.http.get(apiURL + '/Assignment/DeleteQuestionWithOption/' + id).map(function (response) { return response.json(); });
    };
    AssignmentService.prototype.getQuestionDetail = function (id) {
        return this.http.get(apiURL + '/Assignment/GetQuestionDetailData/' + id).map(function (response) { return response.json(); });
    };
    AssignmentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AssignmentService);
    return AssignmentService;
}());
exports.AssignmentService = AssignmentService;
//# sourceMappingURL=assignment.service.js.map