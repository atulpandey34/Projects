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
var EventActionService = /** @class */ (function () {
    function EventActionService(http) {
        this.http = http;
    }
    EventActionService.prototype.getActionData = function (id) {
        return this.http.get(apiURL + '/event/GetActionData?actionID=' + id).map(function (response) { return response.json(); });
    };
    EventActionService.prototype.getAllCategories = function () {
        return this.http.get(apiURL + '/event/GetAllCategories').map(function (response) { return response.json(); });
    };
    EventActionService.prototype.getAllActionSource = function () {
        return this.http.get(apiURL + '/event/GetAllActionSource').map(function (response) { return response.json(); });
    };
    EventActionService.prototype.updateActionData = function (data) {
        return this.http.post(apiURL + '/event/UpdateAction', data).map(function (response) { return response.json(); });
    };
    EventActionService.prototype.deleteAction = function (id) {
        return this.http.get(apiURL + '/action/Delete?id=' + id).map(function (response) { return response.json(); });
    };
    EventActionService.prototype.getActionList = function (pageNo, pageSize, sortColumn, sortOrder, titleFilter, dueDateFilter, statusFilter, organizerFilter) {
        return this.http.get(apiURL + '/action/GetAllActionDataV1?PageNo=' + pageNo
            + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&titleFilter=" + titleFilter
            + "&dueDateFilter=" + dueDateFilter
            + "&statusFilter=" + statusFilter
            + "&organizerFilter=" + organizerFilter).map(function (response) { return response.json(); });
    };
    EventActionService.prototype.getAllCorrectedAction = function () {
        return this.http.get(apiURL + '/CorrectiveAction/GetAllList').map(function (response) { return response.json(); });
    };
    EventActionService.prototype.postUploadData = function (body) {
        return this.http.post(apiURL + '/action/SaveActionTaken', body).map(function (res) { });
    };
    EventActionService.prototype.downloadActionFile = function (fileName) {
        this.http.get(apiURL + '/action/GetActionFile?fileName=' + fileName).map(function (x) { return x.blob(); });
        //.subscribe((res: Response) => { this.downloadFile(res) });
    };
    EventActionService.prototype.downloadFile = function (data) {
        var blob = new Blob([data]);
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    EventActionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], EventActionService);
    return EventActionService;
    var _a;
}());
exports.EventActionService = EventActionService;
//# sourceMappingURL=eventaction.service.js.map