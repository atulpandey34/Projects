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
var MeetingDataService = /** @class */ (function () {
    function MeetingDataService(http) {
        this.http = http;
    }
    MeetingDataService.prototype.getEventData = function (id) {
        return this.http.get(apiURL + '/event/GetEventData?EventID=' + id).map(function (response) { return response.json(); });
    };
    MeetingDataService.prototype.getMeetingList = function (pageNo, pageSize, sortColumn, sortOrder, actionFilter, subTitlNameFilter, dateFilter, locationFilter) {
        return this.http.get(apiURL + '/event/GetMeetingList?PageNo=' + pageNo + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&subTitle=" + subTitlNameFilter + "&action=" + actionFilter
            + "&date=" + dateFilter + "&location=" + locationFilter).map(function (response) { return response.json(); });
    };
    MeetingDataService.prototype.getPerformanceReviewMeetingList = function (pageNo, pageSize, sortColumn, sortOrder, actionFilter, subTitlNameFilter, dateFilter, locationFilter, revieweeFilter, reviewer) {
        return this.http.get(apiURL + '/event/GetPerformanceReviewMeetingList?PageNo=' + pageNo + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&subTitle=" + subTitlNameFilter + "&action=" + actionFilter
            + "&date=" + dateFilter + "&location=" + locationFilter
            + "&reviewee=" + revieweeFilter + "&reviewer=" + reviewer).map(function (response) { return response.json(); });
    };
    MeetingDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], MeetingDataService);
    return MeetingDataService;
    var _a;
}());
exports.MeetingDataService = MeetingDataService;
//# sourceMappingURL=meeting.service.js.map