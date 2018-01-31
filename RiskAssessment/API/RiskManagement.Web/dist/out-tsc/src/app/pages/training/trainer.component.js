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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var training_service_1 = require("./training.service");
var assignment_service_1 = require("../assignment/assignment.service");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var user_service_1 = require("../user/user.service");
var environment_1 = require("../../../environments/environment");
var FileSaver = require("file-saver");
var apiURL = environment_1.environment.apiEndpoint;
var TrainerComponent = /** @class */ (function () {
    function TrainerComponent(_UserService, _assignmentService, _masterDataService, _trainingService, router, location, _fb, route) {
        this._UserService = _UserService;
        this._assignmentService = _assignmentService;
        this._masterDataService = _masterDataService;
        this._trainingService = _trainingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.ShowAssignment = false;
        this.scheduleListData = [];
        this.totalScheduleRecords = 0;
        this.userScheduleResultList = [];
        this.trainingMaterialList = [];
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint.replace("/api", "");
    }
    TrainerComponent.prototype.ngOnInit = function () {
        this.getTrainingScheduleListData();
    };
    TrainerComponent.prototype.getTrainingScheduleListData = function () {
        var _this = this;
        this.scheduleListData = [];
        this.totalScheduleRecords = 0;
        this._trainingService.getTrainingScheduleListByUserId().subscribe(function (res) {
            _this.scheduleListData = res;
            _this.totalScheduleRecords = res.length;
        });
    };
    TrainerComponent.prototype.getuserScheduleResultList = function (id) {
        var _this = this;
        this.userScheduleResultList = [];
        this.ShowAssignment = false;
        this._trainingService.getTrainingScheduleUserResultList(id).subscribe(function (res) {
            _this.userScheduleResultList = res;
        });
    };
    TrainerComponent.prototype.UpdateScheduleResult = function (model) {
        var _this = this;
        this._trainingService.addUpdateUserTrainingScheduleResult(model).subscribe(function (res) {
            _this.getuserScheduleResultList(model.TrainingScheduleId);
        });
    };
    TrainerComponent.prototype.updateTrainingScheduleStatus = function (event, status) {
        var _this = this;
        this._trainingService.updateTrainingScheduleStatus(event.TrainingScheduleId, status).subscribe(function (res) {
            _this.getTrainingScheduleListData();
        });
    };
    TrainerComponent.prototype.updateAllTrainerUserRecords = function () {
        for (var _i = 0, _a = this.userScheduleResultList; _i < _a.length; _i++) {
            var aa = _a[_i];
            this.UpdateScheduleResult(aa);
        }
        this.closeDialog.nativeElement.click();
    };
    TrainerComponent.prototype.GetAssignmentForUser = function (TrainingAssignmentAttemptId, UserId) {
        var _this = this;
        this._trainingService.GetAssignmentForUser(TrainingAssignmentAttemptId, UserId).subscribe(function (res) {
            _this.assignmentData = res;
            _this.ShowAssignment = true;
            _this.onScoreChange();
        });
    };
    ;
    TrainerComponent.prototype.onScoreChange = function () {
        var score = 0;
        this.assignmentData.TrainingAssignmentAnswers.forEach(function (answers) {
            score = score + answers.QuestionScore;
        });
        this.assignmentData.Score = score;
    };
    TrainerComponent.prototype.onShowAssignment = function (TrainingAssignmentAttemptId, UserId) {
        if (!this.ShowAssignment) {
            this.GetAssignmentForUser(TrainingAssignmentAttemptId, UserId);
        }
        else
            this.ShowAssignment = false;
    };
    TrainerComponent.prototype.SaveAssignmentScoreForUser = function () {
        var _this = this;
        this._trainingService.SaveAssignmentScoreForUser(this.assignmentData).subscribe(function (res) {
            _this.ShowAssignment = false;
        }, function (err) { console.log(err); });
    };
    TrainerComponent.prototype.getMaterialListData = function (trainingId) {
        var _this = this;
        this.trainingMaterialList = [];
        this._trainingService.getTrainingMaterialList(trainingId).subscribe(function (res) {
            _this.trainingMaterialList = res;
        });
    };
    TrainerComponent.prototype.downloadMaterial = function (id, fileName) {
        this._trainingService.downloadMaterial(id).subscribe(function (res) {
            FileSaver.saveAs(res, fileName);
        });
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], TrainerComponent.prototype, "closeDialog", void 0);
    TrainerComponent = __decorate([
        core_1.Component({
            selector: 'app-trainer-component',
            templateUrl: './trainer.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './training.component.css'
            ],
            providers: [training_service_1.TrainingService, assignment_service_1.AssignmentService, Mastereventdata_1.MasterEventDataService, user_service_1.UserService],
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, assignment_service_1.AssignmentService, Mastereventdata_1.MasterEventDataService, training_service_1.TrainingService, router_1.Router, common_1.Location, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], TrainerComponent);
    return TrainerComponent;
}());
exports.TrainerComponent = TrainerComponent;
//# sourceMappingURL=trainer.component.js.map