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
var eventaction_service_1 = require("../eventactions/eventaction.service");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var meeting_service_1 = require("../meeting/meeting.service");
var assignment_model_1 = require("../assignment/assignment.model");
var assignment_service_1 = require("../assignment/assignment.service");
var user_service_1 = require("../user/user.service");
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
        this.questionDetail = new assignment_model_1.AssignmentListResult();
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
            Title: ['', [forms_1.Validators.required]],
            Active: true
        });
        this.route.params.subscribe(function (params) {
            _this.AssignmentId = params['id']; //log the value of id
            _this.AssignmentId = _this.AssignmentId === undefined ? 0 : _this.AssignmentId;
        });
        var model = new assignment_model_1.AssignmentQuestionOption();
        this.addQuestionToForm();
        this.getQuestionListOfAssignment();
        this.getList();
    };
    AssignmentComponent.prototype.addQuestionToForm = function () {
        this.myFormQuestionAssignment = this.fb.group({
            QuestionText: [this.questionDetail.QuestionText, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            QuestionType: [this.questionDetail.QuestionType, [forms_1.Validators.required]],
            Score: [this.questionDetail.Score, [forms_1.Validators.required]],
            Order: [this.questionDetail.Order, [forms_1.Validators.required]],
            OptionText: '',
            Active: [this.questionDetail.Active],
            QuestionId: [this.questionDetail.QuestionId],
            QuestionOption: this.fb.array([this.buildOptions(new assignment_model_1.AssignmentQuestionOption())])
        });
    };
    AssignmentComponent.prototype.addQuestion = function () {
        this.QuestionOption.push(this.buildOptions());
    };
    AssignmentComponent.prototype.buildOptions = function (model) {
        if (model === void 0) { model = new assignment_model_1.AssignmentQuestionOption(); }
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
            this.questionDetail = new assignment_model_1.AssignmentListResult();
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
                _this.questionDetail = new assignment_model_1.AssignmentListResult();
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
                Title: [res.Title, [forms_1.Validators.required]],
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
                var assignmentOption = new assignment_model_1.AssignmentQuestionOption();
                assignmentOption.OptionText = aa.OptionText;
                assignmentOption.IsCorrectAnswer = aa.iscoorect;
                data.AssignmentQuestionOptionViewModel.push(assignmentOption);
            }
        }
        this._AssignmentService.addUpdateQuestionAssignment(data).subscribe(function (res) {
            //this.AssignmentId = res;
            _this.questionDetail = new assignment_model_1.AssignmentListResult();
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
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], AssignmentComponent.prototype, "closeDialog", void 0);
    __decorate([
        core_1.ViewChild('buttonAddQuestion'),
        __metadata("design:type", Object)
    ], AssignmentComponent.prototype, "buttonAddQuestion", void 0);
    AssignmentComponent = __decorate([
        core_1.Component({
            selector: 'app-assignment',
            templateUrl: './assignment.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [user_service_1.UserService, eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, meeting_service_1.MeetingDataService, assignment_service_1.AssignmentService],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, assignment_service_1.AssignmentService, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _d || Object])
    ], AssignmentComponent);
    return AssignmentComponent;
    var _a, _b, _c, _d;
}());
exports.AssignmentComponent = AssignmentComponent;
//# sourceMappingURL=assignment.component.js.map