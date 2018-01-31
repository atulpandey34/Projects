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
var training_service_1 = require("./training.service");
var TraineeComponent = /** @class */ (function () {
    function TraineeComponent(_trainingService) {
        this._trainingService = _trainingService;
        this.traineeListData = [];
        this.assignmentData = [];
        this.ShowAssignment = false;
        this.score = 44;
    }
    TraineeComponent.prototype.ngOnInit = function () {
        this.getTraineeScheduleListData();
    };
    TraineeComponent.prototype.getTraineeScheduleListData = function () {
        var _this = this;
        this._trainingService.GetTraineeScheduleListByUserId().subscribe(function (res) {
            _this.traineeListData = res;
        });
    };
    ;
    TraineeComponent.prototype.getTraineeAssigmentData = function (TrainingScheduleId, AssignmentId, Retest, IsAssignmentRequired) {
        var _this = this;
        this._trainingService.GetTrainingScheduleAssignmentForUser(TrainingScheduleId, AssignmentId, Retest, IsAssignmentRequired).subscribe(function (res) {
            _this.assignmentData = res;
            _this.ShowAssignment = true;
        });
    };
    ;
    TraineeComponent.prototype.onShowAssignment = function (TrainingScheduleId, AssignmentId, Retest, IsAssignmentRequired, score) {
        this.score = score;
        if (!this.ShowAssignment) {
            this.getTraineeAssigmentData(TrainingScheduleId, AssignmentId, Retest, IsAssignmentRequired);
        }
        else
            this.ShowAssignment = false;
    };
    TraineeComponent.prototype.saveResponse = function () {
        var _this = this;
        this._trainingService.SaveTrainingScheduleAssignmentForUser(this.assignmentData).subscribe(function (res) {
            _this.ShowAssignment = false;
            _this.getTraineeScheduleListData();
        }, function (err) { console.log(err); });
    };
    TraineeComponent = __decorate([
        core_1.Component({
            selector: 'app-trainee-component',
            templateUrl: './trainee.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './training.component.css'
            ],
            providers: [training_service_1.TrainingService]
        }),
        __metadata("design:paramtypes", [training_service_1.TrainingService])
    ], TraineeComponent);
    return TraineeComponent;
}());
exports.TraineeComponent = TraineeComponent;
//# sourceMappingURL=trainee.component.js.map