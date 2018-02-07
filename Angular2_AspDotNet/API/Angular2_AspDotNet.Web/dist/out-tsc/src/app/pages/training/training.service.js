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
var http_2 = require("@angular/http");
var environment_1 = require("../../../environments/environment");
var apiURL = environment_1.environment.apiEndpoint;
var TrainingService = /** @class */ (function () {
    function TrainingService(http) {
        this.http = http;
    }
    TrainingService.prototype.addUpdateTraining = function (model) {
        return this.http.post(apiURL + '/training/AddUpdateTraining', model).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/training/SaveMaterial', body).map(function (res) { });
    };
    TrainingService.prototype.addUpdateTrainingSchedule = function (model) {
        return this.http.post(apiURL + '/trainingschedule/AddUpdateTrainingSchedule', model).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getTrainingScheduleList = function (id) {
        return this.http.get(apiURL + '/trainingschedule/GetTrainingScheduleList?id=' + id).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getTrainingScheduleUserList = function (id) {
        return this.http.get(apiURL + '/trainingschedule/GetTrainingScheduleUserList?id=' + id).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getTraining = function (id) {
        return this.http.get(apiURL + '/training/GetTraining?id=' + id).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getTrainingList = function (filterModel) {
        return this.http.post(apiURL + '/training/GetTrainingList', filterModel).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.deleteTraining = function (id) {
        return this.http.get(apiURL + '/training/DeleteTraining?id=' + id).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getTrainingMaterialList = function (id) {
        return this.http.get(apiURL + '/training/GetSngleByTrainingId?id=' + id).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.deleteTrainingMaterial = function (id) {
        return this.http.get(apiURL + '/training/DeleteMaterial?id=' + id).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getTrainingScheduleListByUserId = function () {
        return this.http.get(apiURL + '/trainingschedule/GetTrainingScheduleListByUserId').map(function (response) { return response.json(); });
    };
    TrainingService.prototype.addUpdateUserTrainingScheduleResult = function (model) {
        return this.http.post(apiURL + '/trainingschedule/AddUpdateUserScheduleResult', model).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getTrainingScheduleUserResultList = function (id) {
        return this.http.get(apiURL + '/trainingschedule/GetTrainingScheduleUserResultList?id=' + id).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.GetTraineeScheduleListByUserId = function () {
        return this.http.get(apiURL + '/trainee/GetTraineeScheduleListByUserId').map(function (response) { return response.json(); });
    };
    TrainingService.prototype.deleteTrainingSchedule = function (id) {
        return this.http.get(apiURL + '/trainingschedule/DeleteTrainingSchedule?id=' + id).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.updateTrainingScheduleStatus = function (id, status) {
        return this.http.get(apiURL + '/trainingschedule/UpdateTrainingScheduleStatus?id=' + id + "&Status=" + status).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.GetTrainingScheduleAssignmentForUser = function (trainingScheduleId, assignmentId, Retest, AssignmentRequired) {
        var url = apiURL + '/trainee/GetTrainingScheduleAssignmentForUser/' + trainingScheduleId + "/" + assignmentId + "/" + Retest + "/" + AssignmentRequired;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.SaveTrainingScheduleAssignmentForUser = function (model) {
        return this.http.post(apiURL + '/trainee/SaveTrainingScheduleAssignmentForUser', model).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.downloadMaterial = function (id) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob });
        return this.http.get(apiURL + '/training/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    TrainingService.prototype.GetAssignmentForUser = function (TrainingAssignmentAttemptId, UserId) {
        var url = apiURL + '/trainingschedule/GetAssignmentForUser/' + TrainingAssignmentAttemptId + "/" + UserId;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.SaveAssignmentScoreForUser = function (model) {
        model.TrainingAssignmentAnswers = null;
        return this.http.post(apiURL + '/trainingschedule/SaveAssignmentScoreForUser', model).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.GetTrainingReport = function (filterModel) {
        var url = apiURL + '/training/GetTrainingReport';
        return this.http.get(url, { params: filterModel }).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.DownloadTrainingReport = function (filterModel) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob, params: filterModel });
        return this.http.get(apiURL + '/training/DownloadTrainingReport', options)
            .map(function (response) { return response.blob(); });
    };
    TrainingService.prototype.GetTrainerReport = function (filterModel) {
        var url = apiURL + '/training/GetTrainerReport';
        return this.http.get(url, { params: filterModel }).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.DownloadTrainerReport = function (filterModel) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob, params: filterModel });
        return this.http.get(apiURL + '/training/DownloadTrainerReport', options)
            .map(function (response) { return response.blob(); });
    };
    TrainingService.prototype.GetUserReport = function (filterModel) {
        var url = apiURL + '/training/GetTrainingUserReport';
        return this.http.get(url, { params: filterModel }).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.DownloadUserReport = function (filterModel) {
        var options = new http_1.RequestOptions({ responseType: http_2.ResponseContentType.Blob, params: filterModel });
        return this.http.get(apiURL + '/training/DownloadTrainingUserReport', options)
            .map(function (response) { return response.blob(); });
    };
    TrainingService.prototype.GetTrainingNeedList = function () {
        var url = apiURL + '/training/GetTrainingNeedList';
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getTrainerList = function () {
        var url = apiURL + '/training/GetTrainerList';
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.getUserList = function () {
        var url = apiURL + '/training/GetUserList';
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    TrainingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TrainingService);
    return TrainingService;
}());
exports.TrainingService = TrainingService;
//# sourceMappingURL=training.service.js.map