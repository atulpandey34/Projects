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
var formeventdata_1 = require("../../pages/calendar/formeventdata");
var environment_1 = require("../../../environments/environment");
var apiURL = environment_1.environment.apiEndpoint;
var MasterEventDataService = /** @class */ (function () {
    function MasterEventDataService(http) {
        this.http = http;
    }
    MasterEventDataService.prototype.getTitles = function () {
        return [
            new formeventdata_1.Title(1, 'Meeting'),
            new formeventdata_1.Title(2, 'Performance Review'),
            new formeventdata_1.Title(3, 'Training')
        ];
    };
    MasterEventDataService.prototype.getSubTitles = function () {
        return [
            new formeventdata_1.SubTitle(1, 1, 'Management Review'),
            new formeventdata_1.SubTitle(2, 1, 'Production Meeting'),
            new formeventdata_1.SubTitle(3, 1, 'Finance Meeting'),
            new formeventdata_1.SubTitle(4, 1, 'Strategic Metting'),
            new formeventdata_1.SubTitle(5, 2, 'Performance Review'),
            new formeventdata_1.SubTitle(8, 3, 'Training'),
        ];
    };
    MasterEventDataService.prototype.addEvent = function (data) {
        return this.http.post(apiURL + '/event/AddEvent', data).map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.addPerformanceReviewEvent = function (data) {
        return this.http.post(apiURL + '/event/AddPerformanceReviewMeeting', data).map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.getUserList = function () {
        return this.http.get(apiURL + '/event/GetAllUser').map(function (response) { return response.json(); });
        //	.subscribe();
    };
    MasterEventDataService.prototype.getAllauditor = function () {
        return this.http.get(apiURL + '/event/GetAllauditor').map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.getEventFilteredData = function (filterData) {
        return this.http.post(apiURL + '/event/GetEventFilteredData', filterData).map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.getTitleList = function () {
        return this.http.get(apiURL + '/event/GeTitleList').map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.getLocationList = function () {
        return this.http.get(apiURL + '/event/GetLocationList').map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.getSubTitleList = function (title) {
        return this.http.get(apiURL + '/event/GeSubTitleList?titleID=' + title).map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.getEventActionStatusList = function () {
        return this.http.get(apiURL + '/event/GeEventStatusList').map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.deleteEvent = function (id) {
        return this.http.get(apiURL + '/event/DeleteEvent?eventID=' + id).map(function (response) { return response.json(); });
    };
    MasterEventDataService.prototype.getUserWithRole = function () {
        return this.http.get(apiURL + '/user/GetUserWithRole').map(function (response) { return response.json(); });
    };
    MasterEventDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MasterEventDataService);
    return MasterEventDataService;
}());
exports.MasterEventDataService = MasterEventDataService;
//# sourceMappingURL=Mastereventdata.js.map