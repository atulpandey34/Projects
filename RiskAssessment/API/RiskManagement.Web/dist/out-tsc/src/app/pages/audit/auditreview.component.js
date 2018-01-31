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
var audit_model_1 = require("../audit/audit.model");
var audit_service_1 = require("../audit/audit.service");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var measure_service_1 = require("../measure//measure.service");
var environment_1 = require("../../../environments/environment");
var apiURL = environment_1.environment.apiEndpoint;
var AuditReviewComponent = /** @class */ (function () {
    function AuditReviewComponent(fb, _AuditService, _masterDataService, _measureService, route, router, location) {
        this.fb = fb;
        this._AuditService = _AuditService;
        this._masterDataService = _masterDataService;
        this._measureService = _measureService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.AuditSubjectID = 0;
        this.AuditSubjectReviewID = 0;
        this.auditeeList = [];
        this.auditorList = [];
        this.frequencyList = [];
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    Object.defineProperty(AuditReviewComponent.prototype, "AuditSubjectQuestionResponses", {
        get: function () {
            return this.myFormAudit.get('AuditSubjectQuestionResponses');
        },
        enumerable: true,
        configurable: true
    });
    AuditReviewComponent.prototype.ngOnInit = function () {
        this.onload();
    };
    AuditReviewComponent.prototype.onload = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.AuditSubjectID = params['subid']; //log the value of id
            _this.AuditSubjectID = _this.AuditSubjectID === undefined ? 0 : _this.AuditSubjectID;
            _this.AuditSubjectReviewID = params['id'];
            _this.AuditSubjectReviewID = _this.AuditSubjectReviewID === undefined ? 0 : _this.AuditSubjectReviewID;
        });
        this._masterDataService.getUserList().subscribe(function (res) { _this.auditeeList = res; });
        this.addhtmltoform();
        //this.RemoveAuditSubjectQuestionForm(0, 0);
        if (this.AuditSubjectID > 0 && this.AuditSubjectReviewID == 0) {
            this._AuditService.getAuditSubject(this.AuditSubjectID).subscribe(function (res) {
                if (res != null) {
                    var audsubrevi = new audit_model_1.AuditSubjectReviewViewModel();
                    audsubrevi.AuditID = res.AuditID;
                    audsubrevi.SubjectID = res.AuditSubjectID;
                    audsubrevi.AuditorID = res.AuditorID;
                    audsubrevi.AuditeeID = res.AuditeeID;
                    audsubrevi.LocationID = res.Location;
                    audsubrevi.Subject = res.Subject;
                    _this.sethtmltoform(audsubrevi);
                    if (res.AuditSubjectQuestions != null && res.AuditSubjectQuestions.length > 0) {
                        _this.RemoveAuditSubjectQuestionsForm(0);
                        for (var _i = 0, _a = res.AuditSubjectQuestions; _i < _a.length; _i++) {
                            var asubques = _a[_i];
                            var asubreview = new audit_model_1.AuditSubjectReviewQuestion();
                            asubreview.AuditSubjectQuestionID = asubques.AuditSubjectQuestionID;
                            asubreview.QuestionText = asubques.QuestionText;
                            _this.AuditSubjectQuestionResponses.push(_this.buildAuditReviewSubjectQuestion(asubreview));
                        }
                    }
                }
            });
        }
        else if (this.AuditSubjectID > 0 && this.AuditSubjectReviewID > 0) {
            //get both question and answers of review
            this._AuditService.getAuditSubjectReview(this.AuditSubjectID, this.AuditSubjectReviewID).subscribe(function (res) {
                if (res != null) {
                    _this.sethtmltoform(res);
                    if (res.AuditSubjectQuestionResponses != null && res.AuditSubjectQuestionResponses.length > 0) {
                        _this.RemoveAuditSubjectQuestionsForm(0);
                        for (var _i = 0, _a = res.AuditSubjectQuestionResponses; _i < _a.length; _i++) {
                            var aSubQuesResp = _a[_i];
                            _this.AuditSubjectQuestionResponses.push(_this.buildAuditReviewSubjectQuestion(aSubQuesResp));
                        }
                    }
                }
            });
        }
    };
    AuditReviewComponent.prototype.addhtmltoform = function (model) {
        if (model === void 0) { model = new audit_model_1.AuditSubjectReviewViewModel(); }
        this.myFormAudit = this.fb.group({
            AuditSubjectReviewID: [model.AuditSubjectReviewID],
            AuditID: [model.AuditID],
            SubjectID: [model.SubjectID],
            //AuditDate: [model.AuditDate],
            AuditDateStruct: [{ year: new Date(model.AuditDate).getFullYear(), month: new Date(model.AuditDate).getMonth() + 1, day: new Date(model.AuditDate).getDate() }, forms_1.Validators.required],
            AuditorID: [model.AuditorID],
            AuditeeID: [model.AuditeeID],
            LocationID: [model.LocationID],
            Subject: [model.Subject],
            AuditSubjectQuestionResponses: this.fb.array([this.buildAuditReviewSubjectQuestion()])
        });
    };
    AuditReviewComponent.prototype.sethtmltoform = function (model) {
        if (model.AuditSubjectReviewID != 0) {
            this.myFormAudit.controls['AuditSubjectReviewID'].setValue(model.AuditSubjectReviewID);
        }
        if (model.AuditID != 0) {
            this.myFormAudit.controls['AuditID'].setValue(model.AuditID);
        }
        if (model.SubjectID != 0) {
            this.myFormAudit.controls['SubjectID'].setValue(model.SubjectID);
        }
        if (model.AuditorID != 0) {
            this.myFormAudit.controls['AuditorID'].setValue(model.AuditorID);
        }
        if (model.AuditDate != '') {
            this.myFormAudit.controls['AuditDateStruct'].setValue({ year: new Date(model.AuditDate).getFullYear(), month: new Date(model.AuditDate).getMonth() + 1, day: new Date(model.AuditDate).getDate() });
        }
        if (model.AuditeeID != 0) {
            this.myFormAudit.controls['AuditeeID'].setValue(model.AuditID);
        }
        if (model.LocationID != 0) {
            this.myFormAudit.controls['LocationID'].setValue(model.LocationID);
        }
        if (model.Subject != '') {
            this.myFormAudit.controls['Subject'].setValue(model.Subject);
        }
    };
    AuditReviewComponent.prototype.buildAuditReviewSubjectQuestion = function (model) {
        if (model === void 0) { model = new audit_model_1.AuditSubjectReviewQuestion(); }
        return this.fb.group({
            AuditSubjectQuestionResponseID: [model.AuditSubjectQuestionResponseID],
            AuditSubjectReviewID: [model.AuditSubjectReviewID],
            AuditSubjectQuestionID: [model.AuditSubjectQuestionID],
            Comment: [model.Comment],
            Observation: [model.Observation],
            NonCompliance: [model.NonCompliance],
            QuestionText: [model.QuestionText],
        });
    };
    AuditReviewComponent.prototype.RemoveAuditSubjectQuestionsForm = function (i) {
        var control = this.myFormAudit.controls['AuditSubjectQuestionResponses'];
        control.removeAt(i);
    };
    AuditReviewComponent.prototype.SaveAuditReviewFormData = function (data) {
        var _this = this;
        data.AuditDate = new Date(data.AuditDateStruct.year, data.AuditDateStruct.month - 1, data.AuditDateStruct.day).toLocaleDateString();
        this._AuditService.saveAuditReviewFormData(data).subscribe(function (res) {
            _this.AuditSubjectReviewID = res.AuditSubjectReviewID;
            _this.router.navigate(['/pages/audit/review/' + _this.AuditSubjectID + '/' + _this.AuditSubjectReviewID]);
        });
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], AuditReviewComponent.prototype, "closeDialog", void 0);
    AuditReviewComponent = __decorate([
        core_1.Component({
            selector: 'app-auditreview',
            templateUrl: './auditreview.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [audit_service_1.AuditService, Mastereventdata_1.MasterEventDataService, measure_service_1.MeasureService],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, audit_service_1.AuditService, Mastereventdata_1.MasterEventDataService, measure_service_1.MeasureService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], AuditReviewComponent);
    return AuditReviewComponent;
}());
exports.AuditReviewComponent = AuditReviewComponent;
//# sourceMappingURL=auditreview.component.js.map