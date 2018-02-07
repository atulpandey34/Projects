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
var FolderService = /** @class */ (function () {
    function FolderService(http) {
        this.http = http;
    }
    FolderService.prototype.getMasterDocumentFoldertListData = function (filter) {
        return this.http.post(apiURL + '/Document/GetMasterDocumentFoldertListData', filter).map(function (response) { return response.json(); });
    };
    FolderService.prototype.SaveFolderFormData = function (model) {
        return this.http.post(apiURL + '/Document/SaveFolderFormData', model).map(function (response) { return response.json(); });
    };
    FolderService.prototype.getSingleFolder = function (id) {
        return this.http.get(apiURL + '/Document/GetSingleFolder?id=' + id).map(function (response) { return response.json(); });
    };
    FolderService.prototype.validateFolder = function (value) {
        return this.http.get(apiURL + '/Document/ValidateFolder?value=' + value).map(function (response) { return response.json(); });
    };
    FolderService.prototype.deleteFolder = function (id) {
        return this.http.get(apiURL + '/Document/DeleteFolder?id=' + id).map(function (response) { return response.json(); });
    };
    FolderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], FolderService);
    return FolderService;
    var _a;
}());
exports.FolderService = FolderService;
//# sourceMappingURL=folder.service.js.map