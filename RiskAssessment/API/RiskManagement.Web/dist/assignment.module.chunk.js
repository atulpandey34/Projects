webpackJsonp(["assignment.module"],{

/***/ "../../../../../src/app/pages/assignment/assignment.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myFormAssignment\" novalidate (ngSubmit)=\"SaveAssignmentFormData(myFormAssignment.value,'save')\">\r\n    <div style=\"margin-top:10px;\">\r\n        <div style=\"margin:20px;\">\r\n            <div class=\"form-group\">\r\n                <label>Assignment</label>\r\n                <input type=\"text\" formControlName=\"Title\" class=\"form-control validation-field\" />\r\n                <small [hidden]=\"myFormAssignment.controls.Title.valid\" class=\"text-danger\">\r\n                    Title is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <p-checkbox label=\"Is Active\" binary=\"true\"\r\n                            formControlName=\"Active\"></p-checkbox>\r\n                <!--<div class=\"custom-controls-stacked\">\r\n                    <label class=\"custom-control custom-checkbox\">\r\n                        <input formControlName=\"Active\" type=\"checkbox\" class=\"custom-control-input\">\r\n                        <span class=\"custom-control-indicator\"></span>\r\n                        <span class=\"custom-control-description\">Is Active</span>\r\n                    </label>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"SaveAssignmentFormData(myFormAssignment.value,'submit')\" [disabled]=\"!myFormAssignment.valid\">Save</button>\r\n            <!--<button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"SaveAssignmentFormData(myFormAssignment.value)\" data-target=\"#lg-modal\" [disabled]=\"!myFormAssignment.valid\" label=\"Add Question\">Add Question</button>-->\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n\r\n<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Question</h4>\r\n                <button #closeDialog type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow:scroll\">\r\n                <form [formGroup]=\"myFormQuestionAssignment\" novalidate (ngSubmit)=\"SaveAssignmentQuestionFormData(myFormQuestionAssignment.value,'submit')\">\r\n                    <div style=\"margin-top:10px;\">\r\n                        <div style=\"margin:20px;\">\r\n                            <div class=\"form-group\">\r\n                                <label>Question</label>\r\n                                <input type=\"text\" formControlName=\"QuestionText\" class=\"form-control validation-field\" />\r\n                                <small [hidden]=\"myFormQuestionAssignment.controls.QuestionText.valid\" class=\"text-danger\">\r\n                                    Question is required\r\n                                </small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Score</label>\r\n                                <input type=\"text\" formControlName=\"Score\" class=\"form-control validation-field\" />\r\n                                <small [hidden]=\"myFormQuestionAssignment.controls.Score.valid\" class=\"text-danger\">\r\n                                    Score is required\r\n                                </small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Order</label>\r\n                                <input type=\"text\" formControlName=\"Order\" class=\"form-control validation-field\" />\r\n                                <small [hidden]=\"myFormQuestionAssignment.controls.Order.valid\" class=\"text-danger\">\r\n                                    Order is required\r\n                                </small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <!--<label>Status</label>\r\n                                <input type=\"checkbox\" formControlName=\"Active\" class=\"form-control checkbox validation-field\" />-->\r\n                                <p-checkbox label=\"Is Active\" binary=\"true\"\r\n                                            formControlName=\"Active\"></p-checkbox>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Question Type</label>\r\n                                <select formControlName=\"QuestionType\" class=\"form-control validation-field\">\r\n                                    <option value=\"\">--Select--</option>\r\n                                    <option value=\"1\">Single Option</option>\r\n                                    <option value=\"2\">Multiple Option</option>\r\n                                </select>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"myFormQuestionAssignment.get('QuestionType').value==2\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-4 col-md-offset-2\">\r\n                                        <span>\r\n                                            <button class=\"btn btn-primary\"\r\n                                                    type=\"button\"\r\n                                                    [disabled]=\"!QuestionOption.valid\"\r\n                                                    (click)=\"addQuestion()\">\r\n                                                Add Another Option\r\n                                            </button>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div formArrayName=\"QuestionOption\" *ngFor=\"let address of QuestionOption.controls; let i=index\">\r\n                                    <div>\r\n                                        <span class=\"fa fa-remove pull-right\" (click)=\"RemoveQuestion(i)\">\r\n                                        </span>\r\n                                    </div>\r\n                                    <div [formGroupName]=\"i\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Option</label>\r\n                                            <input type=\"text\" formControlName=\"OptionText\" class=\"form-control validation-field\" />\r\n                                            <small [hidden]=\"myFormQuestionAssignment.controls.OptionText.valid\" class=\"text-danger\">\r\n                                                Option is required\r\n                                            </small>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"custom-control custom-radio\">\r\n                                                <input name=\"IsCorrectAnswer\" type=\"radio\" (click)=\"setIsCorrectAnswer(i)\"  formControlName=\"IsCorrectAnswer\" class=\"custom-control-input radio-primary\">\r\n                                                <span class=\"custom-control-indicator\"></span>\r\n                                                <span class=\"custom-control-description\">Is Corrective Answer</span>\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                                <button class=\"btn btn-primary\"\r\n                                        type=\"button\"\r\n                                        (click)=\"SaveAssignmentQuestionFormData(myFormQuestionAssignment.value,'save')\"\r\n                                        [disabled]=\"!myFormQuestionAssignment.valid\">\r\n                                    Save\r\n                                </button>\r\n                                <button class=\"btn btn-primary\"\r\n                                        type=\"button\"\r\n                                        (click)=\"SaveAssignmentQuestionFormData(myFormQuestionAssignment.value,'saveandadd')\"\r\n                                        [disabled]=\"!myFormQuestionAssignment.valid\">\r\n                                    Save and Add\r\n                                </button>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n        <p-dataTable [editable]=\"true\" [value]=\"questionList\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                     resizableColumns=\"true\" #dtscheduleResult [responsive]=\"true\">\r\n\r\n\r\n            <p-column field=\"QuestionText\" header=\"Question Text\"></p-column>\r\n            <p-column [style]=\"{'width':'50px'}\" field=\"Score\" header=\"Score\"></p-column>\r\n            <p-column [style]=\"{'width':'50px'}\" field=\"Order\" header=\"Order\"></p-column>\r\n            <p-column field=\"MultipleOptionSet\" header=\"MultipleOptionSet\">\r\n                <ng-template let-options=\"rowData\" pTemplate=\"body\">\r\n                    <ul>\r\n                        <li *ngFor=\"let option of options.AssignmentQuestionOptions\">\r\n                            {{ option.OptionText }}\r\n                        </li>\r\n                    </ul>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column [style]=\"{'width':'100px'}\" field=\"QuestionType\" header=\"QuestionType\">\r\n                <ng-template let-options=\"rowData\" pTemplate=\"body\">\r\n                    {{options.QuestionType == 1? 'Single Option' : 'Multiple Option'}}\r\n                </ng-template>\r\n                </p-column>\r\n            <p-column styleClass=\"col-button\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                        <button #buttonAddQuestion type=\"button\" pButton icon=\"fa-plus\" data-toggle=\"modal\" (click)=\"SaveAssignmentFormData(myFormAssignment.value,'addquestion')\" data-target=\"#lg-modal\" [disabled]=\"AssignmentId == 0\" label=\"Add\"></button>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n                    <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n                    <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteQuestion(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/assignment/assignment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__ = __webpack_require__("../../../../../src/app/pages/eventactions/eventaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__ = __webpack_require__("../../../../../src/app/pages/meeting/meeting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__ = __webpack_require__("../../../../../src/app/pages/assignment/assignment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assignment_assignment_service__ = __webpack_require__("../../../../../src/app/pages/assignment/assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AssignmentComponent = /** @class */ (function () {
    function AssignmentComponent(fb, _AssignmentService, route, router, location) {
        this.fb = fb;
        this._AssignmentService = _AssignmentService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.AssignmentId = 0;
        this.QuestionId = 0;
        this.QuestionOrder = 0;
        this.AssignmentList = [];
        this.questionDetail = new __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__["b" /* AssignmentListResult */]();
        this.totalRecords = 0;
        this.questionList = [];
    }
    Object.defineProperty(AssignmentComponent.prototype, "QuestionOption", {
        //hazardId: number = 0;
        get: function () {
            return this.myFormQuestionAssignment.get('QuestionOption');
        },
        enumerable: true,
        configurable: true
    });
    AssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myFormAssignment = this.fb.group({
            Title: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Active: true
        });
        this.route.params.subscribe(function (params) {
            _this.AssignmentId = params['id']; //log the value of id
            _this.AssignmentId = _this.AssignmentId === undefined ? 0 : _this.AssignmentId;
        });
        var model = new __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__["c" /* AssignmentQuestionOption */]();
        this.addQuestionToForm();
        this.getQuestionListOfAssignment();
        this.getList();
    };
    AssignmentComponent.prototype.addQuestionToForm = function () {
        this.myFormQuestionAssignment = this.fb.group({
            QuestionText: [this.questionDetail.QuestionText, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)]],
            QuestionType: [this.questionDetail.QuestionType, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Score: [this.questionDetail.Score, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Order: [this.questionDetail.Order, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            OptionText: '',
            Active: [this.questionDetail.Active],
            QuestionId: [this.questionDetail.QuestionId],
            QuestionOption: this.fb.array([this.buildOptions(new __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__["c" /* AssignmentQuestionOption */]())])
        });
    };
    AssignmentComponent.prototype.addQuestion = function () {
        this.QuestionOption.push(this.buildOptions());
    };
    AssignmentComponent.prototype.buildOptions = function (model) {
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__["c" /* AssignmentQuestionOption */](); }
        return this.fb.group({
            QuestionOptionID: [model.QuestionOptionID],
            OptionText: [model.OptionText],
            QuestionID: [model.QuestionID],
            IsCorrectAnswer: [model.IsCorrectAnswer],
            iscoorect: [false],
        });
    };
    AssignmentComponent.prototype.SaveAssignmentFormData = function (data, button) {
        var _this = this;
        if (button === 'addquestion' && this.AssignmentId > 0) {
            this.questionDetail = new __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__["b" /* AssignmentListResult */]();
            if (this.questionList.length != 0) {
                this.QuestionOrder = this.questionList.reduce(function (left, right) { return left.Order > right.Order ? left : right; }).Order;
            }
            this.questionDetail.Order = ++this.QuestionOrder;
            this.addQuestionToForm();
        }
        else {
            data.AssignmentId = this.AssignmentId;
            data.Title = this.myFormAssignment.controls['Title'].value;
            data.Active = data.Active;
            this._AssignmentService.addUpdateAssignment(data).subscribe(function (res) {
                _this.AssignmentId = res;
                _this.router.navigate(['/pages/assignment/' + _this.AssignmentId]);
                _this.questionDetail = new __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__["b" /* AssignmentListResult */]();
                _this.addQuestionToForm();
                _this.getList();
            });
        }
    };
    AssignmentComponent.prototype.getList = function () {
        var _this = this;
        this._AssignmentService.getAssignment(this.AssignmentId)
            .subscribe(function (res) {
            _this.myFormAssignment = _this.fb.group({
                Title: [res.Title, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
                Active: [res.Active],
            });
        });
    };
    AssignmentComponent.prototype.SaveAssignmentQuestionFormData = function (data, button) {
        var _this = this;
        data.QuestionId = this.myFormQuestionAssignment.controls['QuestionId'].value;
        data.AssignmentId = this.AssignmentId;
        data.QuestionText = this.myFormQuestionAssignment.controls['QuestionText'].value;
        data.QuestionType = this.myFormQuestionAssignment.controls['QuestionType'].value;
        data.Score = this.myFormQuestionAssignment.controls['Score'].value;
        data.Order = this.myFormQuestionAssignment.controls['Order'].value;
        data.Active = this.myFormQuestionAssignment.controls['Active'].value;
        data.AssignmentQuestionOptionViewModel = [];
        if (data.QuestionOption != undefined && data.QuestionOption != null) {
            for (var _i = 0, _a = data.QuestionOption; _i < _a.length; _i++) {
                var aa = _a[_i];
                var assignmentOption = new __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__["c" /* AssignmentQuestionOption */]();
                assignmentOption.OptionText = aa.OptionText;
                assignmentOption.IsCorrectAnswer = aa.iscoorect;
                data.AssignmentQuestionOptionViewModel.push(assignmentOption);
            }
        }
        this._AssignmentService.addUpdateQuestionAssignment(data).subscribe(function (res) {
            //this.AssignmentId = res;
            _this.questionDetail = new __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_model__["b" /* AssignmentListResult */]();
            if (_this.questionList.length != 0) {
                _this.QuestionOrder = _this.questionList.reduce(function (left, right) { return left.Order > right.Order ? left : right; }).Order;
            }
            _this.questionDetail.Order = ++_this.QuestionOrder + 1;
            _this.addQuestionToForm();
            if (button == 'save')
                _this.closeDialog.nativeElement.click();
            _this.getQuestionListOfAssignment();
        });
    };
    AssignmentComponent.prototype.setIsCorrectAnswer = function (index) {
        var control = this.myFormQuestionAssignment.controls['QuestionOption'];
        for (var i = 0; i < control.length; i++) {
            var controls = control.controls[i];
            if (index != i) {
                controls.controls["iscoorect"].setValue(false);
            }
            else {
                if (controls.controls["iscoorect"].value == null || controls.controls["iscoorect"].value == false)
                    controls.controls["iscoorect"].setValue(true);
                else
                    controls.controls["iscoorect"].setValue(false);
            }
        }
    };
    AssignmentComponent.prototype.getQuestionList = function () {
        //this._AssignmentService.getAssignment(this.AssignmentId)
        //    .subscribe((res: Assignment[]) => {
        //        this.totalRecords = res.length;
        //        this.AssignmentList = res;
        //    });
    };
    AssignmentComponent.prototype.RemoveQuestion = function (i) {
        var control = this.myFormQuestionAssignment.controls['QuestionOption'];
        control.removeAt(i);
    };
    AssignmentComponent.prototype.getQuestionListOfAssignment = function () {
        var _this = this;
        this.questionList = [];
        this._AssignmentService.getQuestionListOfAssignment(this.AssignmentId).subscribe(function (res) {
            _this.questionList = res;
        });
    };
    AssignmentComponent.prototype.redirectToEditPage = function (event) {
        var _this = this;
        this._AssignmentService.getQuestionDetail(event.QuestionId).subscribe(function (res) {
            _this.buttonAddQuestion.nativeElement.click();
            _this.questionDetail = res;
            _this.addQuestionToForm();
            if (res.AssignmentQuestionOptionViewModel != null && res.AssignmentQuestionOptionViewModel.length > 0) {
                _this.RemoveQuestion(0);
                for (var _i = 0, _a = res.AssignmentQuestionOptionViewModel; _i < _a.length; _i++) {
                    var aa = _a[_i];
                    _this.QuestionOption.push(_this.buildOptions(aa));
                }
            }
        });
    };
    AssignmentComponent.prototype.deleteQuestion = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this question ?")) {
            this._AssignmentService.deleteQuestionWithOption(event.QuestionId).subscribe(function (res) {
                _this.getQuestionListOfAssignment();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], AssignmentComponent.prototype, "closeDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('buttonAddQuestion'),
        __metadata("design:type", Object)
    ], AssignmentComponent.prototype, "buttonAddQuestion", void 0);
    AssignmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assignment',
            template: __webpack_require__("../../../../../src/app/pages/assignment/assignment.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_10__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */], __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__["a" /* MeetingDataService */], __WEBPACK_IMPORTED_MODULE_9__assignment_assignment_service__["a" /* AssignmentService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__assignment_assignment_service__["a" /* AssignmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__assignment_assignment_service__["a" /* AssignmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object])
    ], AssignmentComponent);
    return AssignmentComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=assignment.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/assignment/assignment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Assignment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AssignmentQuestionOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AssignmentListResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentListFilterModel; });
/* unused harmony export AssignmentListData */
/* unused harmony export AssignmentListResultV1 */
/* unused harmony export AssignmentListViewResult */
//import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
var Assignment = /** @class */ (function () {
    function Assignment() {
    }
    return Assignment;
}());

var AssignmentQuestionOption = /** @class */ (function () {
    function AssignmentQuestionOption() {
    }
    return AssignmentQuestionOption;
}());

var AssignmentListResult = /** @class */ (function () {
    function AssignmentListResult() {
        this.Active = true;
    }
    return AssignmentListResult;
}());

var AssignmentListFilterModel = /** @class */ (function () {
    function AssignmentListFilterModel() {
    }
    return AssignmentListFilterModel;
}());

var AssignmentListData = /** @class */ (function () {
    function AssignmentListData() {
        this.AssignmentListResult = [];
    }
    return AssignmentListData;
}());

var AssignmentListResultV1 = /** @class */ (function () {
    function AssignmentListResultV1() {
    }
    return AssignmentListResultV1;
}());

var AssignmentListViewResult = /** @class */ (function () {
    function AssignmentListViewResult() {
        this.AssignmentListResult = [];
    }
    return AssignmentListViewResult;
}());

//# sourceMappingURL=assignment.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/assignment/assignment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentModule", function() { return AssignmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assignmentlist_component__ = __webpack_require__("../../../../../src/app/pages/assignment/assignmentlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assignment_component__ = __webpack_require__("../../../../../src/app/pages/assignment/assignment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__assignment_component__["a" /* AssignmentComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__assignmentlist_component__["a" /* AssignmentListComponent */], data: { breadcrumb: 'List' } },
    { path: 'assignment', component: __WEBPACK_IMPORTED_MODULE_6__assignment_component__["a" /* AssignmentComponent */], data: { breadcrumb: 'Assignment' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__assignment_component__["a" /* AssignmentComponent */], data: { breadcrumb: 'Edit' } },
];
var AssignmentModule = /** @class */ (function () {
    function AssignmentModule() {
    }
    AssignmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__assignment_component__["a" /* AssignmentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__assignmentlist_component__["a" /* AssignmentListComponent */]
            ]
        })
    ], AssignmentModule);
    return AssignmentModule;
}());

//# sourceMappingURL=assignment.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/assignment/assignmentlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <p-column field=\"Title\" header=\"Title\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Active\" header=\"Status\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <p-column field=\"QuestionText\" header=\"Question\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"DuratiuonUnit\" header=\"Duratiuon Unit\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"QuestionType\" header=\"Question Type\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Score\" header=\"Score\"  [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Active\" header=\"Status\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>-->"

/***/ }),

/***/ "../../../../../src/app/pages/assignment/assignmentlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__ = __webpack_require__("../../../../../src/app/pages/eventactions/eventaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_service__ = __webpack_require__("../../../../../src/app/pages/assignment/assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assignment_assignment_model__ = __webpack_require__("../../../../../src/app/pages/assignment/assignment.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssignmentListComponent = /** @class */ (function () {
    function AssignmentListComponent(_AssignmentService, _UserService, router, location, _fb, _dataService, route, _masterDataService) {
        this._AssignmentService = _AssignmentService;
        this._UserService = _UserService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.totalRecords = 0;
    }
    AssignmentListComponent.prototype.ngOnInit = function () {
        this.filterData = new __WEBPACK_IMPORTED_MODULE_9__assignment_assignment_model__["a" /* AssignmentListFilterModel */]();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Title";
        this.filterData.SortOrder = "asc";
    };
    AssignmentListComponent.prototype.getList = function () {
        var _this = this;
        this._AssignmentService.getAssignmentList(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.AssignmentListResult;
        });
    };
    AssignmentListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/assignment/' + event.AssignmentID]);
    };
    AssignmentListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this assessment ?")) {
            this._AssignmentService.deleteAssignment(event.AssignmentID).subscribe(function (res) {
                if (res == 0) {
                    alert("Assignment is Active with a training. Please deactivate from training to Delete.");
                }
                else {
                    _this.getList();
                }
            });
        }
    };
    AssignmentListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/assignment']);
    };
    AssignmentListComponent.prototype.loadCarsLazy = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "Title" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.Title = event.filters.Title == undefined ? '' : event.filters.Title.value;
        this.getList();
    };
    AssignmentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assignmentlist',
            template: __webpack_require__("../../../../../src/app/pages/assignment/assignmentlist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */], __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_service__["a" /* AssignmentService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_service__["a" /* AssignmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__assignment_assignment_service__["a" /* AssignmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _h || Object])
    ], AssignmentListComponent);
    return AssignmentListComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=assignmentlist.component.js.map

/***/ })

});
//# sourceMappingURL=assignment.module.chunk.js.map