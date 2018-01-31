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
var AuditComponent = /** @class */ (function () {
    function AuditComponent(fb, _AuditService, _masterDataService, _measureService, route, router, location) {
        this.fb = fb;
        this._AuditService = _AuditService;
        this._masterDataService = _masterDataService;
        this._measureService = _measureService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.AuditID = 0;
        this.auditeeList = [];
        this.auditorList = [];
        this.frequencyList = [];
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    Object.defineProperty(AuditComponent.prototype, "AuditSubjects", {
        get: function () {
            return this.myFormAudit.get('AuditSubjects');
        },
        enumerable: true,
        configurable: true
    });
    AuditComponent.prototype.AuditSubjectQuestions = function (i) {
        return this.myFormAudit.get(['AuditSubjects', i, 'AuditSubjectQuestions']);
    };
    AuditComponent.prototype.ngOnInit = function () {
        this.onload();
    };
    AuditComponent.prototype.onload = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.AuditID = params['id']; //log the value of id
        });
        this._masterDataService.getAllauditor().subscribe(function (res) { _this.auditorList = res; });
        this._masterDataService.getUserList().subscribe(function (res) { _this.auditeeList = res; });
        this._measureService.getFrequency().subscribe(function (res) {
            _this.frequencyList = res;
        });
        this._masterDataService.getLocationList().subscribe(function (res) {
            _this.locationList = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var location_1 = res_1[_i];
                _this.locationList.push({
                    LocationID: location_1.LocationID,
                    LocationName: location_1.LocationName,
                    RoomName: location_1.RoomName
                });
            }
        });
        this.addhtmltoform();
        this.RemoveAuditSubjectQuestionForm(0, 0);
        if (this.AuditID > 0) {
            this._AuditService.getSingleAudit(this.AuditID).subscribe(function (res) {
                _this.AuditID = res.AuditID;
                _this.RemoveAuditSubjectForm(0);
                _this.sethtmltoform(res);
            });
        }
    };
    AuditComponent.prototype.addhtmltoform = function (model) {
        if (model === void 0) { model = new audit_model_1.AuditViewModel(); }
        this.myFormAudit = this.fb.group({
            AuditID: [model.AuditID],
            Title: [model.Title, [forms_1.Validators.required]],
            Scope: [model.Scope, [forms_1.Validators.required]],
            TermsCondition: [model.TermsCondition, [this.validateTermCondition.bind(this)]],
            AuditSubjects: this.fb.array([this.buildAuditSubject()])
        });
    };
    AuditComponent.prototype.sethtmltoform = function (model) {
        if (model.AuditID != 0) {
            this.myFormAudit.controls['AuditID'].setValue(model.AuditID);
        }
        if (model.Title != '') {
            this.myFormAudit.controls['Title'].setValue(model.Title);
        }
        if (model.Scope != '') {
            this.myFormAudit.controls['Scope'].setValue(model.Scope);
        }
        if (model.AuditSubjects != null && model.AuditSubjects.length > 0) {
            var asubcounter = 0;
            for (var _i = 0, _a = model.AuditSubjects; _i < _a.length; _i++) {
                var asub = _a[_i];
                this.AuditSubjects.push(this.buildAuditSubject(asub));
                for (var _b = 0, _c = asub.AuditSubjectQuestions; _b < _c.length; _b++) {
                    var asubques = _c[_b];
                    this.AuditSubjectQuestions(asubcounter).push(this.buildAuditSubjectQuestion(asubques));
                }
                this.RemoveAuditSubjectQuestionForm(asubcounter, 0);
                asubcounter++;
            }
        }
    };
    AuditComponent.prototype.buildAuditSubject = function (model) {
        if (model === void 0) { model = new audit_model_1.AuditSubject(); }
        return this.fb.group({
            AuditSubjectID: [model.AuditSubjectID],
            AuditID: [model.AuditID],
            Subject: [model.Subject, [forms_1.Validators.required]],
            AuditorID: [model.AuditorID, [forms_1.Validators.required]],
            AuditeeID: [model.AuditeeID],
            Location: [model.Location, [forms_1.Validators.required]],
            Frequency: [model.Frequency, [forms_1.Validators.required]],
            StartDateStruct: [{ year: new Date(model.StartDate).getFullYear(), month: new Date(model.StartDate).getMonth() + 1, day: new Date(model.StartDate).getDate() }, forms_1.Validators.required],
            EndDateStruct: [{ year: new Date(model.EndDate).getFullYear(), month: new Date(model.EndDate).getMonth() + 1, day: new Date(model.EndDate).getDate() }, forms_1.Validators.required],
            InsertQuestion: [model.InsertQuestion],
            AuditSubjectQuestions: this.fb.array([this.buildAuditSubjectQuestion()])
        });
    };
    AuditComponent.prototype.buildAuditSubjectQuestion = function (model) {
        if (model === void 0) { model = new audit_model_1.AuditSubjectQuestion(); }
        return this.fb.group({
            AuditSubjectQuestionID: [model.AuditSubjectQuestionID],
            AuditSubjectID: [model.AuditSubjectID],
            QuestionText: [model.QuestionText],
        });
    };
    AuditComponent.prototype.AddMoreAuditSubjectForm = function () {
        this.AuditSubjects.push(this.buildAuditSubject());
        this.RemoveAuditSubjectQuestionForm(this.AuditSubjects.length - 1, 0);
    };
    AuditComponent.prototype.RemoveAuditSubjectForm = function (i) {
        var control = this.myFormAudit.controls['AuditSubjects'];
        control.removeAt(i);
    };
    AuditComponent.prototype.AddMoreAuditSubjectQuestionForm = function (i, question) {
        var auditSubjectQuestion = new audit_model_1.AuditSubjectQuestion();
        auditSubjectQuestion.QuestionText = question;
        this.AuditSubjectQuestions(i).push(this.buildAuditSubjectQuestion(auditSubjectQuestion));
        var control = this.myFormAudit.get(['AuditSubjects', i]);
        control.controls['InsertQuestion'].setValue('');
    };
    AuditComponent.prototype.RemoveAuditSubjectQuestionForm = function (i, j) {
        var control = this.AuditSubjectQuestions(i);
        control.removeAt(j);
    };
    AuditComponent.prototype.validateTermCondition = function (control) {
        var result = null;
        if (control.parent != undefined && control.parent.get("TermsCondition").value == true)
            result = null;
        else if (control.parent != undefined && control.parent.get("TermsCondition").value == false)
            result = true;
        else
            result = null;
        return result ? { 'TermsCondition': { value: control.value } } : null;
    };
    AuditComponent.prototype.SaveAuditFormData = function (data) {
        var _this = this;
        for (var _i = 0, _a = data.AuditSubjects; _i < _a.length; _i++) {
            var asub = _a[_i];
            asub.StartDate = new Date(asub.StartDateStruct.year, asub.StartDateStruct.month - 1, asub.StartDateStruct.day).toLocaleDateString();
            asub.EndDate = new Date(asub.EndDateStruct.year, asub.EndDateStruct.month - 1, asub.EndDateStruct.day).toLocaleDateString();
        }
        this._AuditService.saveAuditFormData(data).subscribe(function (res) {
            _this.AuditID = res.AuditID;
            _this.router.navigate(['/pages/audit/' + _this.AuditID]);
        });
    };
    AuditComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.fileName = input.files[0].name;
            this.fileToUpload = input.files[0];
        }
    };
    AuditComponent.prototype.removeFile = function () {
        this.fileName = '';
        this.fileToUpload = null;
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], AuditComponent.prototype, "closeDialog", void 0);
    AuditComponent = __decorate([
        core_1.Component({
            selector: 'app-audit',
            templateUrl: './audit.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [audit_service_1.AuditService, Mastereventdata_1.MasterEventDataService, measure_service_1.MeasureService],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, audit_service_1.AuditService, Mastereventdata_1.MasterEventDataService, measure_service_1.MeasureService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], AuditComponent);
    return AuditComponent;
}());
exports.AuditComponent = AuditComponent;
//# sourceMappingURL=audit.component.js.map