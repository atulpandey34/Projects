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
var MeasureService = /** @class */ (function () {
    function MeasureService(http) {
        this.http = http;
    }
    MeasureService.prototype.saveMeasure = function (model) {
        return this.http.post(apiURL + '/measure/SaveMeasure', model).map(function (response) { return response.json(); });
    };
    MeasureService.prototype.getMeasure = function (id) {
        return this.http.get(apiURL + '/measure/GetMeasure/' + id).map(function (response) { return response.json(); });
    };
    MeasureService.prototype.getMeasureList = function () {
        return this.http.get(apiURL + '/measure/GetAllMeasures').map(function (response) { return response.json(); });
    };
    MeasureService.prototype.getMeasureColumns = function (id) {
        return this.http.get(apiURL + '/measure/GetMeasureColumns/' + id).map(function (response) { return response.json(); });
    };
    MeasureService.prototype.getMeasureColumnsDataByDate = function (id) {
        return this.http.get(apiURL + '/measure/GetMeasureColumnDataByDate/' + id).map(function (response) { return response.json(); });
    };
    MeasureService.prototype.getChartData = function (id, id1, sD, eD) {
        if (sD === void 0) { sD = ''; }
        if (eD === void 0) { eD = ''; }
        return this.http.get(apiURL + '/measure/GetChartData?id=' + id
            + "&id1=" + id1
            + "&sD=" + sD
            + "&eD=" + eD).map(function (response) { return response.json(); });
    };
    MeasureService.prototype.getFrequency = function () {
        return this.http.get(apiURL + '/measure/GetFrequency').map(function (response) { return response.json(); });
    };
    MeasureService.prototype.saveMeasureColumn = function (model) {
        return this.http.post(apiURL + '/measure/SaveMeasureColumn', model).map(function (response) { return response.json(); });
    };
    MeasureService.prototype.saveMeasureObjective = function (model) {
        return this.http.post(apiURL + '/measure/SaveMeasureObjective', model).map(function (response) { return response.json(); });
    };
    MeasureService.prototype.saveMeasureColumnData = function (model) {
        return this.http.post(apiURL + '/measure/SaveMeasureColumnData', model).map(function (response) { return response.json(); });
    };
    MeasureService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], MeasureService);
    return MeasureService;
    var _a;
}());
exports.MeasureService = MeasureService;
//# sourceMappingURL=measure.service.js.map