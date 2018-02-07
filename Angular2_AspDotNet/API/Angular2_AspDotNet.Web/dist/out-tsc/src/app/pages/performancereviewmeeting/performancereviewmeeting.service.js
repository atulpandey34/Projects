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
var PerformanceReviewMeetingDataService = /** @class */ (function () {
    function PerformanceReviewMeetingDataService(http) {
        this.http = http;
    }
    PerformanceReviewMeetingDataService.prototype.getEventData = function (id) {
        return this.http.get(apiURL + '/event/GetEventData?EventID=' + id).map(function (response) { return response.json(); });
    };
    PerformanceReviewMeetingDataService.prototype.getMeetingList = function (pageNo, pageSize, sortColumn, sortOrder, actionFilter, subTitlNameFilter, dateFilter, locationFilter) {
        return this.http.get(apiURL + '/event/GetMeetingList?PageNo=' + pageNo + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&subTitle=" + subTitlNameFilter + "&action=" + actionFilter
            + "&date=" + dateFilter + "&location=" + locationFilter).map(function (response) { return response.json(); });
    };
    PerformanceReviewMeetingDataService.prototype.getRevieweeObjectives = function (revieweeId) {
        return this.http.get(apiURL + '/event/GetRevieweeObjectives?revieweeId=' + revieweeId).map(function (response) { return response.json(); });
    };
    PerformanceReviewMeetingDataService.prototype.getRevieweeAction = function (revieweeId) {
        return this.http.get(apiURL + '/event/GetRevieweeAction?revieweeId=' + revieweeId).map(function (response) { return response.json(); });
    };
    PerformanceReviewMeetingDataService.prototype.getRolesResponsibility = function (revieweeId) {
        return this.http.get(apiURL + '/roleresponsibility/GetRolesResponsibility?ReviewwUserId=' + revieweeId).map(function (response) { return response.json(); });
    };
    PerformanceReviewMeetingDataService.prototype.getRoleResponsibilityWithVersionId = function (id) {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibilityWithVersionId?RoleResponsibilityVersionId=' + id).map(function (response) { return response.json(); });
    };
    PerformanceReviewMeetingDataService.prototype.downloadMaterial = function (id) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob });
        return this.http.get(apiURL + '/roleresponsibility/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    PerformanceReviewMeetingDataService.prototype.getAllOccurenceOfADate = function (expression) {
        return this.http.get(apiURL + '/event/GenerateAllDateFromCronExpression?expression=' + expression).map(function (response) { return response.json(); });
    };
    PerformanceReviewMeetingDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], PerformanceReviewMeetingDataService);
    return PerformanceReviewMeetingDataService;
    var _a;
}());
exports.PerformanceReviewMeetingDataService = PerformanceReviewMeetingDataService;
//# sourceMappingURL=performancereviewmeeting.service.js.map