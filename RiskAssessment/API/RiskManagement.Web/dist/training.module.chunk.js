webpackJsonp(["training.module"],{

/***/ "../../../../../src/app/pages/training/trainee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n        <div *ngIf=\"!ShowAssignment ; else hideAssignment\">\r\n            <p-dataTable [value]=\"traineeListData\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                         #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"traineeListData.length\">\r\n\r\n                <p-column field=\"TrainingNeed\" header=\"Training\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"StartDate\" header=\"Start Date\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"EndDate\" header=\"End Date\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"Trainer\" header=\"Trainer\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"Score\" header=\"Score\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"AssignmentId\">\r\n                    <ng-template let-assignment=\"rowData\" pTemplate=\"body\">\r\n                        <!--<div *ngIf=\"assignment.AssignmentId == null; else assignmentLink\">\r\n\r\n                        </div>\r\n                        <ng-template #assignmentLink><button pButton type=\"button\" (click)=\"onShowAssignment(assignment.TrainingScheduleId,assignment.AssignmentId)\" label=\"assignment\"></button></ng-template>-->\r\n                        <!--<div *ngIf=\"!assignmentId ; else assignmentLink\"></div>\r\n                        <ng-template #assignmentLink><a (click)=\"onShowAssignment()\">assignment</a></ng-template>-->\r\n                        <ng-template [ngIf]=\"assignment.AssignmentId != null && assignment.Retest == true\"><button pButton type=\"button\" (click)=\"onShowAssignment(assignment.TrainingScheduleId,assignment.AssignmentId, true, assignment.IsAssignmentRequired, assignment.Score)\" label=\"reassessment\"></button></ng-template>\r\n                        <ng-template [ngIf]=\"assignment.AssignmentId != null && (assignment.Retest == false || assignment.Retest == null)\"><button pButton type=\"button\" (click)=\"onShowAssignment(assignment.TrainingScheduleId,assignment.AssignmentId, false, assignment.IsAssignmentRequired, assignment.Score)\" label=\"assessment\"></button></ng-template>\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n        <ng-template #hideAssignment>\r\n            <div *ngIf=\"assignmentData\" class=\"container\">\r\n                <div *ngFor=\"let questionary of assignmentData.TrainingAssignmentAnswers;let i=index;\">\r\n                    <div class=\"form-group\">\r\n                        <label><b>Q{{i+1}}. {{questionary.QuestionText}} </b></label>\r\n                        <div *ngIf=\"questionary.QuestionType === 2\">\r\n                            <div class=\"trainee-option\">\r\n                                <div *ngFor=\"let multiple of questionary.AssignmentQuestionOptions; let i = index\" class=\"ui-g-12\">\r\n                                    <p-radioButton [disabled]=\"score != null? true: false\" [value]=\"multiple.QuestionOptionID\" [label]=\"multiple.OptionText\" [(ngModel)]=\"questionary.QuestionOptionId\"></p-radioButton>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"questionary.QuestionType === 1\" class=\"form-group trainee-option\">\r\n                                <textarea [readonly]=\"score != null? true: false\" class=\"form-control\" rows=\"5\" [(ngModel)]=\"questionary.AnswerText\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label><b>Comment</b></label>\r\n                    <div class=\"trainee-option\">\r\n                        <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"assignmentData.CommentText\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label><b>Rating</b></label>\r\n                    <div class=\"trainee-option\">\r\n                        <p-rating [(ngModel)]=\"assignmentData.Rating\" stars=\"5\" [cancel]=\"false\"></p-rating>\r\n                    </div>\r\n                </div>\r\n                <button pButton type=\"button\" (click)=\"saveResponse()\" label=\"Submit\"></button>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/training/trainee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraineeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_service__ = __webpack_require__("../../../../../src/app/pages/training/training.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trainee-component',
            template: __webpack_require__("../../../../../src/app/pages/training/trainee.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/training/training.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]) === "function" && _a || Object])
    ], TraineeComponent);
    return TraineeComponent;
    var _a;
}());

//# sourceMappingURL=trainee.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/trainer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n        <p-dataTable [value]=\"scheduleListData\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                     resizableColumns=\"true\" sortField=\"StartDate\" #dt [responsive]=\"true\">\r\n\r\n            <p-column field=\"TrainingNeed\" header=\"Subject\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n            <p-column field=\"StartDate\" header=\"Start Date\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n            <p-column field=\"EndDate\" header=\"End Date\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n\r\n            <p-column field=\"UserCount\" header=\"Trainee\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"form-group\" [hidden]=\"car.UserCount ==0\">\r\n                        <span>{{car.UserCount}} &nbsp;Trainee &nbsp; <i data-toggle=\"modal\" (click)=\"getuserScheduleResultList(car.TrainingScheduleId)\" data-target=\"#lg-modal\" class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                    <div class=\"form-group\" [hidden]=\"car.RoleCount ==0\">\r\n                        <span>{{car.RoleCount}} &nbsp;Trainee &nbsp; <i data-toggle=\"modal\" (click)=\"getuserScheduleResultList(car.TrainingScheduleId)\" data-target=\"#lg-modal\" class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"MaterialCount\" header=\"Material\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"form-group\" [hidden]=\"car.MaterialCount ==0 || car.MaterialCount == null\">\r\n                        <span>{{car.MaterialCount}} &nbsp;Files &nbsp;<i data-toggle=\"modal\" (click)=\"getMaterialListData(car.TrainingId)\" data-target=\"#lg-modal-training\" class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"Status\" header=\"Status\">\r\n                <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"form-group\" [hidden]=\"car.Completed===true\">\r\n                        <button type=\"button\" title=\"Complete\" class=\"btn btn-primary\" (click)=\"updateTrainingScheduleStatus(car,true)\">Mark as Complete</button>\r\n                    </div>\r\n                    <div class=\"form-group\" [hidden]=\"car.Completed===false\">\r\n                        <button type=\"button\" title=\"Save\" class=\"btn btn-primary\" (click)=\"updateTrainingScheduleStatus(car,false)\">Mark as Incomplete</button>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n\r\n\r\n        </p-dataTable>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Trainee List</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\" [hidden]=\"userScheduleResultList.length ==0\" *ngIf=\"!ShowAssignment ; else hideAssignment\">\r\n                    <p-dataTable  [editable]=\"true\" [value]=\"userScheduleResultList\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                                 resizableColumns=\"true\" #dtscheduleResult [responsive]=\"true\">\r\n\r\n\r\n                        <p-column field=\"UserName\" header=\"Trainee Name\"></p-column>\r\n                        <p-column field=\"IsUserAttendedTraining\" [editable]=\"true\" header=\"Attended Training\">\r\n                            <ng-template let-col let-car=\"rowData\" pTemplate=\"editor\">\r\n                                <p-checkbox appendTo=\"body\" label=\"Attended By User\" binary=\"true\"\r\n                                            [(ngModel)]=\"car[col.field]\"></p-checkbox>\r\n                            </ng-template>\r\n                            <template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                                 {{car.IsUserAttendedTraining ? 'Yes' : ''}}\r\n                            </template>\r\n                        </p-column>\r\n                        <p-column field=\"ReviewerComment\" [editable]=\"true\" header=\"Reviewer Comment\">\r\n\r\n                        </p-column>\r\n                        <p-column styleClass=\"col-button\">\r\n                            <ng-template pTemplate=\"header\">\r\n                                <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                                    <button type=\"button\" pButton icon=\"fa-floppy-o fa\" (click)=\"updateAllTrainerUserRecords()\" label=\"Save All\"></button>\r\n                                </div>\r\n                            </ng-template>\r\n                            <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n                                <button type=\"button\" title=\"Save\" pButton (click)=\"UpdateScheduleResult(meeting)\" label=\"Save\" icon=\"fa-floppy-o fa\"></button>\r\n                            </ng-template>\r\n\r\n                        </p-column>\r\n                        <p-column field=\"TrainingAssignmentAttemptId\" header=\"Assignment\">\r\n                            <ng-template let-col let-assignment=\"rowData\" pTemplate=\"body\">\r\n                                <ng-template [ngIf]=\"assignment.TrainingAssignmentAttemptId != null\"><button pButton type=\"button\" (click)=\"onShowAssignment(assignment.TrainingAssignmentAttemptId, assignment.UserId)\" label=\"Assignment\"></button></ng-template>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <!--<p-column field=\"UserComment\" header=\"Trainee Comment\">\r\n                        </p-column>\r\n                        <p-column field=\"UserRating\" header=\"Trainee Rating\">\r\n\r\n                        </p-column>-->\r\n                    </p-dataTable>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <ng-template #hideAssignment>\r\n                        <div *ngIf=\"assignmentData\">\r\n                            <h4>Trainee response</h4><br />\r\n                            <div class=\"container trainee-response\">\r\n                                <div *ngFor=\"let questionary of assignmentData.TrainingAssignmentAnswers;let i=index\">\r\n                                    <div class=\"form-group\">\r\n                                        <label><b>Q{{i+1}}. {{questionary.QuestionText}}</b></label>\r\n                                        <div *ngIf=\"questionary.QuestionType === 2\">\r\n                                            <div class=\"trainee-option\">\r\n                                                <div *ngFor=\"let multiple of questionary.AssignmentQuestionOptions; let i = index\">\r\n                                                    <p-radioButton disabled=\"true\" [value]=\"multiple.QuestionOptionID\" [label]=\"multiple.OptionText\" [(ngModel)]=\"questionary.QuestionOptionId\"></p-radioButton>\r\n                                                </div>\r\n                                            </div>\r\n                                                <b>Score: </b>\r\n                                                <input readonly type=\"number\" [value]=\"questionary.IsCorrectAnswer ? questionary.QuestionScore: 0\" (change)=\"onScoreChange()\" />\r\n                                        </div>\r\n                                        <div *ngIf=\"questionary.QuestionType === 1\">\r\n                                            <div class=\"trainee-option\">\r\n                                                <textarea class=\"form-control\" pInputTextarea [(ngModel)]=\"questionary.AnswerText\" readonly></textarea>\r\n                                            </div>\r\n                                            <b>Score: </b>\r\n                                            <input type=\"number\" [(ngModel)]=\"questionary.QuestionScore\" [max]=\"questionary.QuestionScore\"\r\n                                                          (change)=\"onScoreChange()\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div><br />\r\n                                <!--<div class=\"form-group\">\r\n                                    <label><b>Comment</b></label>\r\n                                    <div class=\"trainee-option\">\r\n                                        <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"assignmentData.CommentText\" readonly></textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label><b>Rating</b></label>\r\n                                    <div class=\"trainee-option\">\r\n                                        <p-rating [(ngModel)]=\"assignmentData.Rating\" stars=\"5\" [cancel]=\"false\" [readonly]=\"true\"></p-rating>\r\n                                    </div>\r\n                                </div>-->  \r\n                            </div>\r\n                            <br/>\r\n                            <hr/>\r\n                            <div class=\"form-group\">\r\n                                <b>Score: </b><input type=\"number\" [(ngModel)]=\"assignmentData.Score\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <b>Retest : </b><input type=\"checkbox\" [(ngModel)]=\"assignmentData.Retest\" />\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                        <button pButton type=\"button\" (click)=\"SaveAssignmentScoreForUser()\" label=\"Submit\"></button>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal-training\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Training Material List</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\" [hidden]=\"trainingMaterialList.length ==0\" >\r\n                    <p-dataTable [value]=\"trainingMaterialList\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                                 resizableColumns=\"true\" #dtMaterial [responsive]=\"true\">\r\n\r\n\r\n                        <p-column field=\"YouTubeLink\" header=\"Link\">\r\n                            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                                <div class=\"form-group\" [hidden]=\"car.YouTubeLink ==''\">\r\n                                    <a style=\"text-decoration:underline;\" target=\"_blank\" href=\"{{car.YouTubeLink}}\">{{car.YouTubeLink}}</a>\r\n                                </div>\r\n                                <div class=\"form-group\" [hidden]=\"car.FilePath ==null\">\r\n                                    <a (click)=\"downloadMaterial(car.TrainingMaterialId, car.FileName)\" *ngIf=\"car.FilePath !=null\" style=\"text-decoration:underline;\" href=\"javascript:void(0)\">\r\n                                        <!--href=\"{{apiEndPoint+'training/DownLoadMaterial?id='+car.TrainingMaterialId}}\">-->\r\n                                        {{car.FileName}}\r\n                                    </a>\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n                \r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/training/trainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__training_service__ = __webpack_require__("../../../../../src/app/pages/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assignment_assignment_service__ = __webpack_require__("../../../../../src/app/pages/assignment/assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var apiURL = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiEndpoint;
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
            __WEBPACK_IMPORTED_MODULE_10_file_saver__["saveAs"](res, fileName);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], TrainerComponent.prototype, "closeDialog", void 0);
    TrainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trainer-component',
            template: __webpack_require__("../../../../../src/app/pages/training/trainer.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/training/training.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__training_service__["a" /* TrainingService */], __WEBPACK_IMPORTED_MODULE_6__assignment_assignment_service__["a" /* AssignmentService */], __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__assignment_assignment_service__["a" /* AssignmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__assignment_assignment_service__["a" /* AssignmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__training_service__["a" /* TrainingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _h || Object])
    ], TrainerComponent);
    return TrainerComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=trainer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/trainerreport.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:10px;\">\r\n    <div style=\"margin:20px;\">\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label>Trainer</label>\r\n                <select [(ngModel)]=\"trainerId\" class=\"form-control\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <option *ngFor=\"let trainer of trainerList\"\r\n                            value={{trainer.UserId}}>\r\n                        {{trainer.UserName}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <input type=\"button\" class=\"btn btn-primary\" value=\"Filter\" (click)=\"getTrainerReport()\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n            <p-dataTable [value]=\"trainerReportData\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                         #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\"\r\n                         sortField=\"TrainingNeed\" [lazy]=\"true\"  (onLazyLoad)=\"loadTrainerReportLazy($event)\">\r\n                <p-header>\r\n                    <div class=\"ui-helper-clearfix\">\r\n                        <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"Download\" (click)=\"exportCSV()\" style=\"float:left\"></button>\r\n                    </div>\r\n                </p-header>\r\n                <!--<p-footer></p-footer>-->\r\n                <p-column field=\"TrainingNeed\" header=\"Training\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"StartDate\" header=\"Training Date\" [sortable]=\"true\">\r\n                    <ng-template let-col let-report=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{report.StartDate}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"UsersAttended\" header=\"Number of Trainees\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"AverageRating\" header=\"Overall rating\" [sortable]=\"true\"></p-column>\r\n</p-dataTable>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/training/trainerreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_service__ = __webpack_require__("../../../../../src/app/pages/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_model__ = __webpack_require__("../../../../../src/app/pages/training/training.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainerReportComponent = /** @class */ (function () {
    function TrainerReportComponent(_trainingService) {
        this._trainingService = _trainingService;
        this.trainerReportData = [];
        this.trainerList = [];
        this.trainerId = 0;
    }
    TrainerReportComponent.prototype.ngOnInit = function () {
        this.filterModel = new __WEBPACK_IMPORTED_MODULE_3__training_model__["a" /* TrainerReportFilterModel */]();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getTrainerList();
        this.getTrainerReport();
    };
    TrainerReportComponent.prototype.getTrainerList = function () {
        var _this = this;
        this._trainingService.getTrainerList().subscribe(function (res) {
            _this.trainerList = res;
        });
    };
    TrainerReportComponent.prototype.getTrainerReport = function () {
        var _this = this;
        this.filterModel.TrainerId = this.trainerId == 0 ? null : this.trainerId;
        this._trainingService.GetTrainerReport(this.filterModel).subscribe(function (res) {
            _this.trainerReportData = res.ReportModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    ;
    TrainerReportComponent.prototype.loadTrainerReportLazy = function (event) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.getTrainerReport();
    };
    TrainerReportComponent.prototype.exportCSV = function () {
        var downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadTrainerReport(downloadFilterModel).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](res, "TrainerReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    };
    TrainerReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trainerreport-component',
            template: __webpack_require__("../../../../../src/app/pages/training/trainerreport.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/training/training.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]) === "function" && _a || Object])
    ], TrainerReportComponent);
    return TrainerReportComponent;
    var _a;
}());

//# sourceMappingURL=trainerreport.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.disabled {\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.trainee-response {\r\n    border-style: groove;\r\n}\r\n\r\n.trainee-option {\r\n    margin: 10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/training/training.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div style=\"width:100%;\">\r\n        <h6 class=\"mt-4\"></h6>\r\n        <div class=\"clearfix\">\r\n            <ul class=\"nav nav-tabs custom top\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tabTraining\">Training</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [class.disabled]=\"disableTabSchedule ? true : null\" data-toggle=\"tab\" href=\"#tabSchedule\">Schedule</a>\r\n                </li>\r\n\r\n            </ul>\r\n        </div>\r\n        <div class=\"tab-content top\">\r\n            <div class=\"tab-pane active\" id=\"tabTraining\">\r\n                <div class=\"modal-body\">\r\n                    <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"SaveTraining(myForm.value)\">\r\n                        <div class=\"form-group\">\r\n                            <label>Training Need</label>\r\n                            <input type=\"text\" formControlName=\"TrainingNeed\" class=\"form-control validation-field\">\r\n                            <small *ngIf=\"!myForm.controls.TrainingNeed.valid\" class=\"text-danger\">\r\n                                Training Need is required.\r\n                            </small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"custom-controls-stacked\">\r\n                                <label class=\"custom-control custom-checkbox\">\r\n                                    <input formControlName=\"TrainerRequired\" type=\"checkbox\" class=\"custom-control-input\">\r\n                                    <span class=\"custom-control-indicator\"></span>\r\n                                    <span class=\"custom-control-description\">Is Trainer required?</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Training Type</label>\r\n                            <div class=\"custom-controls-stacked\">\r\n                                <label class=\"custom-control custom-radio\">\r\n                                    <input #trainingTypeEvent name=\"TrainingType\" formControlName=\"TrainingType\" type=\"radio\" (click)=\"EnableDisableTrainingEvent(1)\" [value]=\"1\" class=\"custom-control-input\">\r\n                                    <span class=\"custom-control-indicator\"></span>\r\n                                    <span class=\"custom-control-description\">Event</span>\r\n                                </label>\r\n                                <select style=\"width:30%;\" formControlName=\"TrainingEventID\" #dropDownTrainingEvent class=\"form-control\">\r\n                                    <option value=\"0\">--Select--</option>\r\n                                    <option value=\"1\">Event 1</option>\r\n                                    <option value=\"2\">Event 2</option>\r\n                                </select>\r\n                                <label class=\"custom-control custom-radio\">\r\n                                    <input #trainingTypeUser name=\"TrainingType\" formControlName=\"TrainingType\" type=\"radio\" [value]=\"2\" (click)=\"EnableDisableTrainingEvent(2)\" class=\"custom-control-input\">\r\n                                    <span class=\"custom-control-indicator\"></span>\r\n                                    <span class=\"custom-control-description\">Trainee Specific</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"custom-controls-stacked\">\r\n                                <label class=\"custom-control custom-checkbox\">\r\n                                    <input #assigmentResuiredCheckBox (click)=\"EnableDisableAssignmentDropDown()\" formControlName=\"IsAssignmentRequired\" type=\"checkbox\" class=\"custom-control-input\">\r\n                                    <span class=\"custom-control-indicator\"></span>\r\n                                    <span class=\"custom-control-description\">Is Assigment required?</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Assignment</label>\r\n                            <select #assignmentDropDown formControlName=\"AssignmentID\" class=\"form-control\">\r\n                                <option value=\"0\">--Select--</option>\r\n                                <option *ngFor=\"let evebtStatus of assignmentList\"\r\n                                        value={{evebtStatus.AssignmentID}}>\r\n                                    {{evebtStatus.Title}}\r\n                                </option>\r\n                            </select>                            \r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>You Tube Link</label>\r\n\r\n                            <input type=\"text\" #youtubelinktextbox formControlName=\"YouTubeLink\" class=\"form-control validation-field\">\r\n\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group file-upload\">\r\n                                <input type=\"file\" multiple (change)=\"fileChange($event)\" #input class=\"file-upload-btn\" />\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Choose a file...\" value=\"{{fileName}}\">\r\n                                <i class=\"fa fa-times delete-file\" (click)=\"removeFile()\" *ngIf=\"fileToUpload\"></i>\r\n                                <span class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Save</button>\r\n                            <!--<button type=\"button\" #buttonMaterial data-toggle=\"modal\" data-target=\"#lg-modal\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Add Material</button>-->\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n\r\n                <p-dataTable [value]=\"trainingMaterialList\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                             resizableColumns=\"true\" #dtMaterial [responsive]=\"true\">\r\n\r\n\r\n                    <p-column field=\"YouTubeLink\" header=\"Link\">\r\n                        <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                            <div class=\"form-group\" [hidden]=\"car.YouTubeLink ==''\">\r\n                                <a style=\"text-decoration:underline;\" target=\"_blank\" href=\"{{car.YouTubeLink}}\">{{car.YouTubeLink}}</a>\r\n                            </div>\r\n                            <div class=\"form-group\" [hidden]=\"car.FilePath ==null\">\r\n                                <a (click)=\"downloadMaterial(car.TrainingMaterialId, car.FileName)\" *ngIf=\"car.FilePath !=null\" style=\"text-decoration:underline;\" href=\"javascript:void(0)\" >\r\n                                   <!--href=\"{{apiEndPoint+'training/DownLoadMaterial?id='+car.TrainingMaterialId}}\">-->\r\n                                {{car.FileName}}</a>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column styleClass=\"col-button\">\r\n                        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n                            <button type=\"button\" title=\"Delete\" pButton (click)=\"deleteMaterial(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n                        </ng-template>\r\n\r\n                    </p-column>\r\n\r\n                </p-dataTable>\r\n\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"tabSchedule\">\r\n                <div #divMaterial class=\"modal-body\">\r\n                    <form [formGroup]=\"scheduleForm\" novalidate (ngSubmit)=\"saveSchedule(scheduleForm.value)\">\r\n                        <div class=\"form-group\">\r\n                            <label>Start Date</label>\r\n                            <!--<input type=\"text\" formControlName=\"duedate\" type=\"date\" class=\"form-control\">-->\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control validation-field\" placeholder=\"yyyy-mm-dd\" name=\"StartDateStruct\" formControlName=\"StartDateStruct\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--display error message if agenda is not valid-->\r\n                            <small [hidden]=\"scheduleForm.controls.StartDateStruct.valid\" class=\"text-danger\">\r\n                                Start date is required\r\n                            </small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>End Date</label>\r\n                            <!--<input type=\"text\" formControlName=\"duedate\" type=\"date\" class=\"form-control\">-->\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control validation-field\" placeholder=\"yyyy-mm-dd\" name=\"EndDateStruct\" formControlName=\"EndDateStruct\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-addon\" (click)=\"d1.toggle()\">\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--display error message if agenda is not valid-->\r\n                            <small [hidden]=\"scheduleForm.controls.EndDateStruct.valid\" class=\"text-danger\">\r\n                                End date is required\r\n                            </small>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngIf=\"myForm.controls.TrainerRequired.value\">\r\n                            <label>Trainer</label>\r\n                            <select  formControlName=\"Trainer\" class=\"form-control validation-field\">\r\n                                <option value=\"\">--Select--</option>\r\n                                <option *ngFor=\"let evebtStatus of trainersList\"\r\n                                        value={{evebtStatus.id}}>\r\n                                    {{evebtStatus.name}}\r\n                                </option>\r\n                            </select>\r\n                            <!--display error message if name is not valid-->\r\n                            <small [hidden]=\"scheduleForm.controls.Trainer.valid\" class=\"text-danger\">\r\n                                Action Status is required .\r\n                            </small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Assigned To</label>\r\n                            <label class=\"custom-control custom-radio\">\r\n                                <input #assignedToTrainee [disabled]=\"myForm.controls.TrainingType.value === 1\" type=\"radio\" name=\"assignedToRadio\" (click)=\"EnableDisableAssignedTo(1)\" value=\"1\" class=\"custom-control-input\">\r\n                                <span class=\"custom-control-indicator\"></span>\r\n                                <span class=\"custom-control-description\">Trainee</span>\r\n                            </label>\r\n                            <ss-multiselect-dropdown #userDropdown [options]=\"usersOptions\" [texts]=\"responsiblePersonTexts\" [settings]=\"responsiblePersonSettings\" formControlName=\"Users\"></ss-multiselect-dropdown>\r\n                            <label class=\"custom-control custom-radio\">\r\n                                <input [disabled]=\"myForm.controls.TrainingType.value === 1\" type=\"radio\" name=\"assignedToRadio\" (click)=\"EnableDisableAssignedTo(2)\" value=\"2\" class=\"custom-control-input\">\r\n                                <span class=\"custom-control-indicator\"></span>\r\n                                <span class=\"custom-control-description\">Roles</span>\r\n                            </label>\r\n                            <ss-multiselect-dropdown #roleDropdown [options]=\"rolesOptions\" [texts]=\"rolesTexts\" [settings]=\"rolesSettings\" formControlName=\"Roles\"></ss-multiselect-dropdown>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button type=\"submit\" [disabled]=\"!scheduleForm.valid && myForm.controls.TrainerRequired.value\" class=\"btn btn-primary\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n                <p-dataTable [value]=\"scheduleListData\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                             resizableColumns=\"true\" sortField=\"StartDate\" #dt [responsive]=\"true\">\r\n\r\n\r\n                    <p-column field=\"StartDate\" header=\"Start Date\"></p-column>\r\n                    <p-column field=\"EndDate\" header=\"End Date\"></p-column>\r\n                    <p-column field=\"Trainer\" header=\"Trainer\"></p-column>\r\n                    <p-column field=\"UserCount\" header=\"Trainee\">\r\n                        <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                            <div class=\"form-group\" [hidden]=\"car.UserCount ==0\">\r\n                                <span>{{car.UserCount}} &nbsp;Trainee &nbsp; <i data-toggle=\"modal\" (click)=\"getTrainingScheduleUserList(car.TrainingScheduleId)\" data-target=\"#lg-modal\" class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                            </div>\r\n                            <div class=\"form-group\" [hidden]=\"car.RoleCount ==0\">\r\n                                <span>{{car.RoleCount}} &nbsp;Users &nbsp; <i data-toggle=\"modal\" (click)=\"getTrainingScheduleUserList(car.TrainingScheduleId)\" data-target=\"#lg-modal\" class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"Status\" header=\"Status\"></p-column>\r\n                    <p-column field=\"Rating\" header=\"Rating\"></p-column>\r\n                    <p-column styleClass=\"col-button\">\r\n                        <ng-template pTemplate=\"header\">\r\n                            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n                            <button type=\"button\" title=\"Delete\" pButton (click)=\"deleteSchedule(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Trainee List</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p-dataTable [value]=\"trainingScheduleUserList\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                             resizableColumns=\"true\" sortField=\"UserName\" #dt [responsive]=\"true\">\r\n\r\n\r\n                    <p-column field=\"UserName\" header=\"Trainee\"></p-column>\r\n                    <p-column field=\"Attended\" header=\"Attended\"></p-column>\r\n                    <p-column field=\"Signed\" header=\"Signed\"></p-column>\r\n                    <p-column field=\"UserRating\" header=\"Rating\"></p-column>\r\n                    <p-column field=\"TraineeComment\" header=\"Trainee Comment\"></p-column>\r\n                    <p-column field=\"TrainerComment\" header=\"Trainer Comment\"></p-column>\r\n                </p-dataTable>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<iframe  style=\"display:none;\" #iframeDownload src=\"\"></iframe>"

/***/ }),

/***/ "../../../../../src/app/pages/training/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__training_service__ = __webpack_require__("../../../../../src/app/pages/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__training_model__ = __webpack_require__("../../../../../src/app/pages/training/training.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assignment_assignment_service__ = __webpack_require__("../../../../../src/app/pages/assignment/assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var apiURL = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].apiEndpoint;
var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(_UserService, _assignmentService, _masterDataService, _trainingService, router, location, _fb, route) {
        this._UserService = _UserService;
        this._assignmentService = _assignmentService;
        this._masterDataService = _masterDataService;
        this._trainingService = _trainingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.trainingId = 0;
        this.disableTabSchedule = true;
        this.usersOptions = [];
        this.rolesOptions = [];
        this.trainersList = [];
        this.assignmentList = [];
        this.responsiblePersonTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.responsiblePersonSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '300px'
        };
        this.rolesTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.rolesSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '300px'
        };
        this.scheduleListData = [];
        this.totalScheduleRecords = 0;
        this.trainingScheduleUserList = [];
        // Material List
        this.trainingMaterialList = [];
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    TrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addhtmltoform(new __WEBPACK_IMPORTED_MODULE_6__training_model__["i" /* TrainingViewModel */]());
        this.addTrainingMaterialHtmlToForm(new __WEBPACK_IMPORTED_MODULE_6__training_model__["c" /* TrainingMaterialViewModel */]());
        this.addTrainingScheduleHtmlToForm(new __WEBPACK_IMPORTED_MODULE_6__training_model__["g" /* TrainingScheduleViewModel */]());
        this.EnableDisableTrainingEvent(2);
        this.trainingTypeUser.nativeElement.checked = true;
        this._assignmentService.getAllAssignment().subscribe(function (res) {
            _this.assignmentList = res;
        });
        this._masterDataService.getUserList().subscribe(function (res) {
            var compare = function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                var comparison = 0;
                if (nameA > nameB) {
                    comparison = 1;
                }
                else if (nameA < nameB) {
                    comparison = -1;
                }
                return comparison;
            };
            res.sort(compare);
            _this.usersOptions = res;
            _this.trainersList = res;
        });
        this._UserService.getRoleMultipleList().subscribe(function (res) {
            _this.rolesOptions = res;
        });
        this.userDropdown.disabled = true;
        this.roleDropdown.disabled = true;
        this.route.params.subscribe(function (params) {
            _this.trainingId = params['id']; //log the value of id
        });
        if (this.trainingId > 0) {
            this.getTrainingScheduleListData();
            this._trainingService.getTraining(this.trainingId).subscribe(function (res) {
                _this.EnableDisableTrainingEvent(res.TrainingType);
                _this.addhtmltoform(res);
                if (res.TrainingType == 1) {
                    _this.trainingTypeEvent.nativeElement.checked = true;
                }
                else {
                    _this.trainingTypeUser.nativeElement.checked = true;
                }
                _this.EnableDisableTrainingEvent(res.TrainingType);
                _this.disableTabSchedule = false;
                _this.getMaterialListData();
                _this._assignmentService.getAssignment(res.AssignmentID).subscribe(function (res) {
                    _this.assignmentList.push(res);
                });
            });
        }
    };
    TrainingComponent.prototype.EnableDisableAssignmentDropDown = function () {
        if (this.assigmentResuiredCheckBox.nativeElement.checked == true) {
            this.assignmentDropDown.nativeElement.disabled = false;
        }
        else {
            this.assignmentDropDown.nativeElement.disabled = true;
            this.assignmentDropDown.nativeElement.value = '0';
        }
    };
    TrainingComponent.prototype.addhtmltoform = function (model) {
        this.myForm = this._fb.group({
            TrainingId: [model.TrainingId],
            TrainingNeed: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](model.TrainingNeed, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            TrainerRequired: [model.TrainerRequired],
            TrainingType: [model.TrainingType],
            TrainingEventID: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](model.TrainingEventID),
            IsAssignmentRequired: [model.IsAssignmentRequired],
            AssignmentID: [model.AssignmentID],
            Active: [model.Active],
            YouTubeLink: [model.YouTubeLink],
        });
    };
    TrainingComponent.prototype.addTrainingMaterialHtmlToForm = function (model) {
        this.materialForm = this._fb.group({
            TrainingMaterialId: [model.TrainingMaterialId],
            YouTubeLink: [model.YouTubeLink],
            FilePath: [model.FilePath],
            FileName: [model.FileName],
            TrainingId: [this.trainingId],
            FileExtension: [model.FileExtension],
            File: [''],
        });
    };
    TrainingComponent.prototype.addTrainingScheduleHtmlToForm = function (model) {
        this.scheduleForm = this._fb.group({
            TrainingScheduleId: [model.TrainingScheduleId],
            TrainingId: [this.trainingId],
            StartDateStruct: [{ year: new Date(model.StartDate).getFullYear(), month: new Date(model.StartDate).getMonth() + 1, day: new Date(model.StartDate).getDate() }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            EndDateStruct: [{ year: new Date(model.EndDate).getFullYear(), month: new Date(model.EndDate).getMonth() + 1, day: new Date(model.EndDate).getDate() }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Trainer: [model.Trainer, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Users: [model.Users],
            Roles: [model.Roles],
        });
    };
    TrainingComponent.prototype.SaveTraining = function (model) {
        var _this = this;
        model.TrainingId = this.trainingId;
        this._trainingService.addUpdateTraining(model).subscribe(function (res) {
            _this.trainingId = res;
            //this.divMaterial.nativeElement.hidden = true;
            _this.getMaterialListData();
            _this.disableTabSchedule = false;
            _this.saveMaterial();
            _this.youtubelinktextbox.nativeElement.value = '';
            _this.router.navigate(['/pages/training/' + res.toString()]);
        });
    };
    TrainingComponent.prototype.EnableDisableTrainingEvent = function (value) {
        this.dropDownTrainingEvent.nativeElement.value = 0;
        if (value == 1) {
            this.dropDownTrainingEvent.nativeElement.disabled = false;
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = true;
            this.roleDropdown.disabled = true;
        }
        else {
            this.dropDownTrainingEvent.nativeElement.disabled = true;
            this.assignedToTrainee.nativeElement.checked = true;
            this.EnableDisableAssignedTo(1);
        }
    };
    TrainingComponent.prototype.EnableDisableAssignedTo = function (value) {
        if (value == 1) {
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = false;
            this.roleDropdown.disabled = true;
        }
        else {
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = true;
            this.roleDropdown.disabled = false;
        }
    };
    TrainingComponent.prototype.saveSchedule = function (data) {
        var _this = this;
        data.TrainingId = this.trainingId;
        data.StartDate = new Date(data.StartDateStruct.year, data.StartDateStruct.month - 1, data.StartDateStruct.day).toLocaleDateString();
        data.EndDate = new Date(data.EndDateStruct.year, data.EndDateStruct.month - 1, data.EndDateStruct.day).toLocaleDateString();
        if (data.Users != null && data.Users.length > 0) {
            data.UserList = [];
            for (var _i = 0, _a = data.Users; _i < _a.length; _i++) {
                var d = _a[_i];
                var user = new __WEBPACK_IMPORTED_MODULE_6__training_model__["f" /* TrainingScheduleUserViewModel */]();
                user.TrainingScheduleUserId = 0;
                user.UserId = d;
                user.TrainingScheduleId = data.TrainingScheduleId;
                data.UserList.push(user);
            }
        }
        if (data.Roles != null && data.Roles.length > 0) {
            data.RoleList = [];
            for (var _b = 0, _c = data.Roles; _b < _c.length; _b++) {
                var d = _c[_b];
                var role = new __WEBPACK_IMPORTED_MODULE_6__training_model__["e" /* TrainingScheduleRoleViewModel */]();
                role.TrainingScheduleRoleId = 0;
                role.RoleId = d;
                role.TrainingScheduleId = data.TrainingScheduleId;
                data.RoleList.push(role);
            }
        }
        this._trainingService.addUpdateTrainingSchedule(data).subscribe(function (res) {
            _this.addTrainingScheduleHtmlToForm(new __WEBPACK_IMPORTED_MODULE_6__training_model__["g" /* TrainingScheduleViewModel */]());
            _this.getTrainingScheduleListData();
        });
    };
    TrainingComponent.prototype.fileChange = function (input) {
        this.fileToUpload = input.target.files;
        //const reader = new FileReader();
        //if (input.files.length) {
        //    this.fileName = input.files[0].name;
        //    this.fileToUpload = input.files[0];
        //}
    };
    TrainingComponent.prototype.removeFile = function () {
        this.fileName = '';
        this.fileToUpload = null;
    };
    TrainingComponent.prototype.saveMaterial = function () {
        var _this = this;
        if (this.fileToUpload != null && this.fileToUpload != undefined && this.fileToUpload.length > 0) {
            var files = this.fileToUpload;
            this.fileToUpload = null;
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var _formData = new FormData();
                _formData.append("FileName", file.name);
                _formData.append("MyFile", file);
                _formData.append("YouTubeLink", '');
                _formData.append("TrainingId", this.trainingId.toString());
                var body = _formData;
                this._trainingService.uploadMaterial(body).subscribe(function (res) {
                    _this.getMaterialListData();
                });
            }
        }
    };
    TrainingComponent.prototype.getTrainingScheduleListData = function () {
        var _this = this;
        this.scheduleListData = [];
        this.totalScheduleRecords = 0;
        this._trainingService.getTrainingScheduleList(this.trainingId).subscribe(function (res) {
            _this.scheduleListData = res;
            _this.totalScheduleRecords = res.length;
        });
    };
    TrainingComponent.prototype.deleteSchedule = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this training schedule ?")) {
            this._trainingService.deleteTrainingSchedule(event.TrainingScheduleId).subscribe(function (res) {
                _this.getTrainingScheduleListData();
            });
        }
    };
    TrainingComponent.prototype.getTrainingScheduleUserList = function (id) {
        var _this = this;
        this.trainingScheduleUserList = [];
        this._trainingService.getTrainingScheduleUserList(id).subscribe(function (res) {
            _this.trainingScheduleUserList = res;
        });
    };
    TrainingComponent.prototype.getMaterialListData = function () {
        var _this = this;
        this.trainingMaterialList = [];
        this._trainingService.getTrainingMaterialList(this.trainingId).subscribe(function (res) {
            _this.trainingMaterialList = res;
        });
    };
    TrainingComponent.prototype.deleteMaterial = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this material ?")) {
            this._trainingService.deleteTrainingMaterial(event.TrainingMaterialId).subscribe(function (res) {
                _this.getMaterialListData();
            });
        }
    };
    TrainingComponent.prototype.downloadMaterial = function (id, fileName) {
        debugger;
        this._trainingService.downloadMaterial(id).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_11_file_saver__["saveAs"](res, fileName);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('assigmentResuiredCheckBox'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "assigmentResuiredCheckBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropDownTrainingEvent'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "dropDownTrainingEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "closeDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('assignmentDropDown'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "assignmentDropDown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('youtubelinktextbox'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "youtubelinktextbox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trainingTypeEvent'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "trainingTypeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trainingTypeUser'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "trainingTypeUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('assignedToTrainee'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "assignedToTrainee", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userDropdown'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "userDropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('roleDropdown'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "roleDropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('iframeDownload'),
        __metadata("design:type", Object)
    ], TrainingComponent.prototype, "iframeDownload", void 0);
    TrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-training-component',
            template: __webpack_require__("../../../../../src/app/pages/training/training.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/training/training.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__training_service__["a" /* TrainingService */], __WEBPACK_IMPORTED_MODULE_7__assignment_assignment_service__["a" /* AssignmentService */], __WEBPACK_IMPORTED_MODULE_8__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_9__user_user_service__["a" /* UserService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__assignment_assignment_service__["a" /* AssignmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__assignment_assignment_service__["a" /* AssignmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__training_service__["a" /* TrainingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _h || Object])
    ], TrainingComponent);
    return TrainingComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=training.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/training.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TrainingViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TrainingMaterialViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TrainingScheduleViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TrainingScheduleUserViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TrainingScheduleRoleViewModel; });
/* unused harmony export TrainingScheduleListViewModel */
/* unused harmony export TrainingScheduleUserListViewModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TrainingListFilterModel; });
/* unused harmony export TrainingList */
/* unused harmony export TrainingListViewModel */
/* unused harmony export TrainingScheduleListByUserIdViewModel */
/* unused harmony export UserScheduleResultViewModel */
/* unused harmony export TraineeScheduleListByUserIdViewModel */
/* unused harmony export TrainingAssignmentAttemptViewModel */
/* unused harmony export ReportViewModel */
/* unused harmony export TrainingReportViewModel */
/* unused harmony export TrainingNeedListViewModel */
/* unused harmony export UserListViewModel */
/* unused harmony export TrainerReportViewModel */
/* unused harmony export TrainingUserReportViewModel */
/* unused harmony export BaseFilterModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TrainingReportFilterModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerReportFilterModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TrainingUserReportFilterModel; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TrainingViewModel = /** @class */ (function () {
    function TrainingViewModel() {
        this.TrainingType = 2;
    }
    return TrainingViewModel;
}());

var TrainingMaterialViewModel = /** @class */ (function () {
    function TrainingMaterialViewModel() {
    }
    return TrainingMaterialViewModel;
}());

var TrainingScheduleViewModel = /** @class */ (function () {
    function TrainingScheduleViewModel() {
        this.Users = [];
        this.Roles = [];
        this.UserList = [];
        this.RoleList = [];
    }
    return TrainingScheduleViewModel;
}());

var TrainingScheduleUserViewModel = /** @class */ (function () {
    function TrainingScheduleUserViewModel() {
    }
    return TrainingScheduleUserViewModel;
}());

var TrainingScheduleRoleViewModel = /** @class */ (function () {
    function TrainingScheduleRoleViewModel() {
    }
    return TrainingScheduleRoleViewModel;
}());

var TrainingScheduleListViewModel = /** @class */ (function () {
    function TrainingScheduleListViewModel() {
    }
    return TrainingScheduleListViewModel;
}());

var TrainingScheduleUserListViewModel = /** @class */ (function () {
    function TrainingScheduleUserListViewModel() {
    }
    return TrainingScheduleUserListViewModel;
}());

var TrainingListFilterModel = /** @class */ (function () {
    function TrainingListFilterModel() {
    }
    return TrainingListFilterModel;
}());

var TrainingList = /** @class */ (function () {
    function TrainingList() {
    }
    return TrainingList;
}());

var TrainingListViewModel = /** @class */ (function () {
    function TrainingListViewModel() {
        this.TrainingList = [];
    }
    return TrainingListViewModel;
}());

var TrainingScheduleListByUserIdViewModel = /** @class */ (function () {
    function TrainingScheduleListByUserIdViewModel() {
    }
    return TrainingScheduleListByUserIdViewModel;
}());

var UserScheduleResultViewModel = /** @class */ (function () {
    function UserScheduleResultViewModel() {
    }
    return UserScheduleResultViewModel;
}());

var TraineeScheduleListByUserIdViewModel = /** @class */ (function () {
    function TraineeScheduleListByUserIdViewModel() {
    }
    return TraineeScheduleListByUserIdViewModel;
}());

var TrainingAssignmentAttemptViewModel = /** @class */ (function () {
    function TrainingAssignmentAttemptViewModel() {
    }
    return TrainingAssignmentAttemptViewModel;
}());

var ReportViewModel = /** @class */ (function () {
    function ReportViewModel() {
    }
    return ReportViewModel;
}());

var TrainingReportViewModel = /** @class */ (function () {
    function TrainingReportViewModel() {
    }
    return TrainingReportViewModel;
}());

var TrainingNeedListViewModel = /** @class */ (function () {
    function TrainingNeedListViewModel() {
    }
    return TrainingNeedListViewModel;
}());

var UserListViewModel = /** @class */ (function () {
    function UserListViewModel() {
    }
    return UserListViewModel;
}());

var TrainerReportViewModel = /** @class */ (function () {
    function TrainerReportViewModel() {
    }
    return TrainerReportViewModel;
}());

var TrainingUserReportViewModel = /** @class */ (function () {
    function TrainingUserReportViewModel() {
    }
    return TrainingUserReportViewModel;
}());

var BaseFilterModel = /** @class */ (function () {
    function BaseFilterModel() {
    }
    return BaseFilterModel;
}());

var TrainingReportFilterModel = /** @class */ (function (_super) {
    __extends(TrainingReportFilterModel, _super);
    function TrainingReportFilterModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrainingReportFilterModel;
}(BaseFilterModel));

var TrainerReportFilterModel = /** @class */ (function (_super) {
    __extends(TrainerReportFilterModel, _super);
    function TrainerReportFilterModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrainerReportFilterModel;
}(BaseFilterModel));

var TrainingUserReportFilterModel = /** @class */ (function (_super) {
    __extends(TrainingUserReportFilterModel, _super);
    function TrainingUserReportFilterModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrainingUserReportFilterModel;
}(BaseFilterModel));

//# sourceMappingURL=training.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/training.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__traininglist_component__ = __webpack_require__("../../../../../src/app/pages/training/traininglist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__training_component__ = __webpack_require__("../../../../../src/app/pages/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trainer_component__ = __webpack_require__("../../../../../src/app/pages/training/trainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trainee_component__ = __webpack_require__("../../../../../src/app/pages/training/trainee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trainingreport_component__ = __webpack_require__("../../../../../src/app/pages/training/trainingreport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__trainerreport_component__ = __webpack_require__("../../../../../src/app/pages/training/trainerreport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__userreport_component__ = __webpack_require__("../../../../../src/app/pages/training/userreport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__training_component__["a" /* TrainingComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__traininglist_component__["a" /* TrainingListComponent */], data: { breadcrumb: 'List' } },
    { path: 'training', component: __WEBPACK_IMPORTED_MODULE_6__training_component__["a" /* TrainingComponent */], data: { breadcrumb: 'Training' } },
    { path: 'trainer', component: __WEBPACK_IMPORTED_MODULE_7__trainer_component__["a" /* TrainerComponent */], data: { breadcrumb: 'Trainer' } },
    { path: 'trainee', component: __WEBPACK_IMPORTED_MODULE_8__trainee_component__["a" /* TraineeComponent */], data: { breadcrumb: 'Trainee' } },
    { path: 'trainingreport', component: __WEBPACK_IMPORTED_MODULE_9__trainingreport_component__["a" /* TrainingReportComponent */], data: { breadcrumb: 'Training Report' } },
    { path: 'userreport', component: __WEBPACK_IMPORTED_MODULE_11__userreport_component__["a" /* UserReportComponent */], data: { breadcrumb: 'User Report' } },
    { path: 'trainerreport', component: __WEBPACK_IMPORTED_MODULE_10__trainerreport_component__["a" /* TrainerReportComponent */], data: { breadcrumb: 'Trainer Report' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__training_component__["a" /* TrainingComponent */], data: { breadcrumb: 'Edit' } },
];
var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__traininglist_component__["a" /* TrainingListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__training_component__["a" /* TrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__trainer_component__["a" /* TrainerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__trainee_component__["a" /* TraineeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__trainingreport_component__["a" /* TrainingReportComponent */],
                __WEBPACK_IMPORTED_MODULE_10__trainerreport_component__["a" /* TrainerReportComponent */],
                __WEBPACK_IMPORTED_MODULE_11__userreport_component__["a" /* UserReportComponent */]
            ]
        })
    ], TrainingModule);
    return TrainingModule;
}());

//# sourceMappingURL=training.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/training.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var apiURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint;
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
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseContentType */].Blob });
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
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseContentType */].Blob, params: filterModel });
        return this.http.get(apiURL + '/training/DownloadTrainingReport', options)
            .map(function (response) { return response.blob(); });
    };
    TrainingService.prototype.GetTrainerReport = function (filterModel) {
        var url = apiURL + '/training/GetTrainerReport';
        return this.http.get(url, { params: filterModel }).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.DownloadTrainerReport = function (filterModel) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseContentType */].Blob, params: filterModel });
        return this.http.get(apiURL + '/training/DownloadTrainerReport', options)
            .map(function (response) { return response.blob(); });
    };
    TrainingService.prototype.GetUserReport = function (filterModel) {
        var url = apiURL + '/training/GetTrainingUserReport';
        return this.http.get(url, { params: filterModel }).map(function (response) { return response.json(); });
    };
    TrainingService.prototype.DownloadUserReport = function (filterModel) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseContentType */].Blob, params: filterModel });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], TrainingService);
    return TrainingService;
    var _a;
}());

//# sourceMappingURL=training.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/traininglist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\"\r\n             sortField=\"TrainingNeed\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <!--<p-footer></p-footer>-->\r\n    <p-column field=\"TrainingNeed\" header=\"Training Need\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"TrainerRequired\" header=\"Trainer Required\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"TrainingType\" header=\"Training Type\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Assignment\" header=\"Assignment\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>"

/***/ }),

/***/ "../../../../../src/app/pages/training/traininglist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_service__ = __webpack_require__("../../../../../src/app/pages/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__training_model__ = __webpack_require__("../../../../../src/app/pages/training/training.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrainingListComponent = /** @class */ (function () {
    function TrainingListComponent(_trainingService, router, location, route) {
        this._trainingService = _trainingService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.totalRecords = 0;
    }
    TrainingListComponent.prototype.ngOnInit = function () {
        this.filterModel = new __WEBPACK_IMPORTED_MODULE_5__training_model__["b" /* TrainingListFilterModel */]();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
    };
    TrainingListComponent.prototype.getList = function () {
        var _this = this;
        this._trainingService.getTrainingList(this.filterModel).subscribe(function (res) {
            _this.data = res.TrainingList;
            _this.totalRecords = res.TotalRecords;
        });
    };
    TrainingListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/training/' + event.TrainingId]);
    };
    TrainingListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this training ?")) {
            this._trainingService.deleteTraining(event.TrainingId).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    TrainingListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/training']);
    };
    TrainingListComponent.prototype.loadCarsLazy = function (event) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterModel.Assignment = event.filters.Assignment == undefined ? '' : event.filters.Assignment.value;
        this.filterModel.TrainingNeed = event.filters.TrainingNeed == undefined ? '' : event.filters.TrainingNeed.value;
        this.filterModel.TrainerRequired = event.filters.TrainerRequired == undefined ? null : (event.filters.TrainerRequired.value == "Yes" ? 1 : 0);
        this.filterModel.TrainingType = null;
        if (event.filters.TrainingType != undefined) {
            if (event.filters.TrainingType.value === "Event")
                this.filterModel.TrainingType = 1;
            else if (event.filters.TrainingType.value === "User Specific")
                this.filterModel.TrainingType = 2;
            //else
            //    this.filterModel.TrainingType = null;
        }
        this.getList();
    };
    TrainingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-traininglist-component',
            template: __webpack_require__("../../../../../src/app/pages/training/traininglist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__training_service__["a" /* TrainingService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__training_service__["a" /* TrainingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
    ], TrainingListComponent);
    return TrainingListComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=traininglist.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/trainingreport.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:10px;\">\r\n    <div style=\"margin:20px;\">\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label>Training</label>\r\n                <select [(ngModel)]=\"trainingId\" class=\"form-control\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <option *ngFor=\"let training of trainingList\"\r\n                            value={{training.TrainingId}}>\r\n                        {{training.TrainingNeed}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Start Date</label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control validation-field\" [(ngModel)]=\"startDate\" placeholder=\"yyyy-mm-dd\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                        <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>End Date</label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"endDate\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                        <div class=\"input-group-addon\" (click)=\"d1.toggle()\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <input type=\"button\" class=\"btn btn-primary\" value=\"Filter\" (click)=\"getTrainingReport()\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    <p-dataTable [value]=\"trainingReportData\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                 #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\"\r\n                 sortField=\"TrainingNeed\" [lazy]=\"true\"  (onLazyLoad)=\"loadTrainingReportLazy($event)\">\r\n        <p-header>\r\n        <div class=\"ui-helper-clearfix\">\r\n            <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"Download\" (click)=\"exportCSV()\" style=\"float:left\"></button>\r\n        </div>\r\n        </p-header>\r\n        <!--<p-footer></p-footer>-->\r\n        <p-column field=\"TrainingNeed\" header=\"Training\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"TraineeName\" header=\"Trainee\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"TrainerName\" header=\"Trainer\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"AttemptDate\" header=\"Date Attended\" [sortable]=\"true\">\r\n            <ng-template let-col let-report=\"rowData\" pTemplate=\"body\">\r\n                <span>{{report.AttemptDate}}</span>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"Score\" header=\"Score\" [sortable]=\"true\">\r\n            <ng-template let-report=\"rowData\" pTemplate=\"body\">\r\n                <span>{{report.Score != null?  report.Score + '/' + report.TotalScore: ''}}</span>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"TrainerComment\" header=\"Trainer Comment\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"TraineeComment\" header=\"Trainee Comment\" [sortable]=\"true\"></p-column>\r\n    </p-dataTable>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/training/trainingreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_service__ = __webpack_require__("../../../../../src/app/pages/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_model__ = __webpack_require__("../../../../../src/app/pages/training/training.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainingReportComponent = /** @class */ (function () {
    function TrainingReportComponent(_trainingService) {
        this._trainingService = _trainingService;
        this.trainingReportData = [];
        this.trainingList = [];
        this.trainingId = 0;
        this.startDate = null;
        this.endDate = null;
    }
    TrainingReportComponent.prototype.ngOnInit = function () {
        this.filterModel = new __WEBPACK_IMPORTED_MODULE_3__training_model__["d" /* TrainingReportFilterModel */]();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getTrainingNeedList();
        this.getTrainingReport();
    };
    TrainingReportComponent.prototype.getTrainingNeedList = function () {
        var _this = this;
        this._trainingService.GetTrainingNeedList().subscribe(function (res) {
            _this.trainingList = res;
        });
    };
    TrainingReportComponent.prototype.getTrainingReport = function () {
        var _this = this;
        this.filterModel.TrainingId = this.trainingId == 0 ? null : this.trainingId;
        this.filterModel.StartDate = this.startDate == null ? "" : (new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day)).toLocaleDateString();
        this.filterModel.EndDate = this.endDate == null ? "" : (new Date(this.endDate.year, this.endDate.month - 1, this.endDate.day)).toLocaleDateString();
        this._trainingService.GetTrainingReport(this.filterModel).subscribe(function (res) {
            _this.trainingReportData = res.ReportModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    ;
    TrainingReportComponent.prototype.loadTrainingReportLazy = function (event) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.getTrainingReport();
    };
    TrainingReportComponent.prototype.exportCSV = function () {
        var downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadTrainingReport(downloadFilterModel).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](res, "TrainingReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    };
    TrainingReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trainingreport-component',
            template: __webpack_require__("../../../../../src/app/pages/training/trainingreport.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/training/training.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]) === "function" && _a || Object])
    ], TrainingReportComponent);
    return TrainingReportComponent;
    var _a;
}());

//# sourceMappingURL=trainingreport.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/training/userreport.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:10px;\">\r\n    <div style=\"margin:20px;\">\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label>Trainee</label>\r\n                <select [(ngModel)]=\"userId\" class=\"form-control\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <option *ngFor=\"let user of userList\"\r\n                            value={{user.UserId}}>\r\n                        {{user.UserName}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <input type=\"button\" class=\"btn btn-primary\" value=\"Filter\" (click)=\"getUserReport()\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n            <p-dataTable [value]=\"trainingUserReportData\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                         #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\"\r\n                         sortField=\"TrainingNeed\" [lazy]=\"true\"  (onLazyLoad)=\"loadTrainingUserReportLazy($event)\">\r\n                <p-header>\r\n                    <div class=\"ui-helper-clearfix\">\r\n                        <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"Download\" (click)=\"exportCSV()\" style=\"float:left\"></button>\r\n                    </div>\r\n                </p-header>\r\n                <!--<p-footer></p-footer>-->\r\n                <p-column field=\"TrainingNeed\" header=\"Training\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"TraineeName\" header=\"Trainee\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"TrainerName\" header=\"Trainer\" [sortable]=\"true\"></p-column>                \r\n                <p-column field=\"StartDate\" header=\"Attempt Date\" [sortable]=\"true\">\r\n                    <ng-template let-col let-report=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{report.StartDate}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"IsUserAttendedTraining\" header=\"Attended\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"Score\" header=\"Score\" [sortable]=\"true\">\r\n                    <ng-template let-report=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{report.Score != null?  report.Score + '/' + report.TotalScore: ''}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"TrainerComment\" header=\"Trainer Comment\" [sortable]=\"true\"></p-column>\r\n</p-dataTable>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/training/userreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_service__ = __webpack_require__("../../../../../src/app/pages/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_model__ = __webpack_require__("../../../../../src/app/pages/training/training.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserReportComponent = /** @class */ (function () {
    function UserReportComponent(_trainingService) {
        this._trainingService = _trainingService;
        this.trainingUserReportData = [];
        this.userList = [];
        this.userId = 0;
    }
    UserReportComponent.prototype.ngOnInit = function () {
        this.filterModel = new __WEBPACK_IMPORTED_MODULE_3__training_model__["h" /* TrainingUserReportFilterModel */]();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getUserList();
        this.getUserReport();
    };
    UserReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._trainingService.getUserList().subscribe(function (res) {
            _this.userList = res;
        });
    };
    UserReportComponent.prototype.getUserReport = function () {
        var _this = this;
        this.filterModel.UserId = this.userId == 0 ? null : this.userId;
        this._trainingService.GetUserReport(this.filterModel).subscribe(function (res) {
            _this.trainingUserReportData = res.ReportModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    ;
    UserReportComponent.prototype.loadTrainingUserReportLazy = function (event) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.getUserReport();
    };
    UserReportComponent.prototype.exportCSV = function () {
        var downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadUserReport(downloadFilterModel).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](res, "TrineeReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    };
    UserReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userreport-component',
            template: __webpack_require__("../../../../../src/app/pages/training/userreport.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/training/training.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__training_service__["a" /* TrainingService */]) === "function" && _a || Object])
    ], UserReportComponent);
    return UserReportComponent;
    var _a;
}());

//# sourceMappingURL=userreport.component.js.map

/***/ })

});
//# sourceMappingURL=training.module.chunk.js.map