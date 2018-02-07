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
var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
    }
    DocumentService.prototype.getDocumentList = function (filter) {
        return this.http.post(apiURL + '/Document/GetDocumentListData', filter).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getDocumentTypeList = function () {
        return this.http.get(apiURL + '/Document/GetAllDocumentsType').map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getAllMasterDocumentFolder = function () {
        return this.http.get(apiURL + '/Document/GetAllMasterDocumentFolder').map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getMasterReviewFrequency = function () {
        return this.http.get(apiURL + '/Document/GetMasterReviewFrequency').map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getSingleDocument = function (id) {
        return this.http.get(apiURL + '/Document/GetSingleDocument?id=' + id).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.validateDocumentType = function (documentType) {
        return this.http.get(apiURL + '/Document/ValidateDocumentType?documentType=' + documentType).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.validateReviewFrequencyUnit = function (value) {
        return this.http.get(apiURL + '/Document/ValidateReviewFrequencyUnit?value=' + value).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.validateFolder = function (value) {
        return this.http.get(apiURL + '/Document/ValidateFolder?value=' + value).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.saveDocument = function (document) {
        return this.http.post(apiURL + '/Document/AddUpdateDocument', document).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.getDocumentVersionList = function (documentid) {
        return this.http.get(apiURL + '/Document/GetDocumentVersionList?documentid=' + documentid).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.deleteDocument = function (id) {
        return this.http.get(apiURL + '/Document/DeleteDocument?id=' + id).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.deleteDocumentVersion = function (id) {
        return this.http.get(apiURL + '/Document/DeleteDocumentVersion?documentVesionId=' + id).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.addMasterReviewFrequencyUnit = function (MasterValueText) {
        return this.http.get(apiURL + '/Document/AddMasterReviewFrequencyUnit?MasterValueText=' + MasterValueText).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.addMasterDocumentFolder = function (MasterValueText) {
        return this.http.get(apiURL + '/Document/AddMasterDocumentFolder?MasterValueText=' + MasterValueText).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.addMasterDocumentType = function (MasterValueText) {
        return this.http.get(apiURL + '/Document/AddMasterDocumentType?MasterValueText=' + MasterValueText).map(function (response) { return response.json(); });
    };
    DocumentService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/Document/SaveMaterial', body).map(function (res) { });
    };
    DocumentService.prototype.downloadMaterial = function (id) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob });
        return this.http.get(apiURL + '/Document/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    DocumentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DocumentService);
    return DocumentService;
}());
exports.DocumentService = DocumentService;
//# sourceMappingURL=document.service.js.map