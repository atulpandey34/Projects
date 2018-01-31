webpackJsonp(["audit.module"],{

/***/ "../../../../../src/app/pages/audit/audit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myFormAudit\" novalidate >\r\n    <div style=\"margin-top:10px;\">\r\n        <div style=\"margin:20px;\">\r\n            <div class=\"form-group\">\r\n                <label>Audit</label>\r\n                <input type=\"text\" formControlName=\"Title\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                <small [hidden]=\"myFormAudit.controls.Title.valid\" class=\"text-danger\">\r\n                    Audit is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Scope</label>\r\n                <input type=\"text\" formControlName=\"Scope\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                <small [hidden]=\"myFormAudit.controls.Scope.valid\" class=\"text-danger\">\r\n                    Scope is required\r\n                </small>\r\n            </div>\r\n            <div>\r\n                <div style=\"width:100%;\">\r\n                    <button class=\"pull-right\" type=\"button\" pButton icon=\"fa-plus\" label=\"Add Subject\" (click)=\"AddMoreAuditSubjectForm()\"></button>\r\n                </div>\r\n            </div> \r\n                <div class=\"card border-0 box-shadow rounded-0\" style=\"margin-top:57px;\">\r\n                    <div class=\"card-block pt-0\" formArrayName=\"AuditSubjects\">\r\n                        <div style=\"margin-top:10px;\">\r\n                            <!--<span class=\"fa fa-plus-square pull-right\" (click)=\"AddMoreAuditSubjectForm()\"></span>-->\r\n\r\n                            <div *ngFor=\"let auditsubjectform of AuditSubjects.controls; let i=index\">\r\n                                <div style=\"border:1px solid black;margin-top:5px;\">\r\n                                    <div style=\"margin:20px;\">\r\n                                        <div>\r\n                                            <!--<span class=\"fa fa-remove pull-right\" (click)=\"RemoveAuditSubjectForm(i)\">\r\n                                    </span>-->\r\n                                            <i class=\"fa fa-trash text-danger pull-right\" [hidden]=\"i==0\" (click)=\"RemoveAuditSubjectForm(i);\"></i>\r\n                                        </div>\r\n                                        <div [formGroupName]=\"i\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Subject</label>\r\n                                                <input type=\"text\" formControlName=\"Subject\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                                                <small [hidden]=\"auditsubjectform.controls.Subject.valid\" class=\"text-danger\">\r\n                                                    Subject is required\r\n                                                </small>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>Auditor</label>\r\n                                                <select formControlName=\"AuditorID\" class=\"form-control\">\r\n                                                    <option value=\"\">--Select--</option>\r\n                                                    <option *ngFor=\"let al of auditorList\"\r\n                                                            value={{al.id}}>\r\n                                                        {{al.name}}\r\n                                                    </option>\r\n                                                </select>\r\n                                                <small [hidden]=\"auditsubjectform.controls.AuditorID.valid\" class=\"text-danger\">\r\n                                                    Auditor is required\r\n                                                </small>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>Auditee</label>\r\n                                                <select formControlName=\"AuditeeID\" class=\"form-control\">\r\n                                                    <option value=\"\">--Select--</option>\r\n                                                    <option *ngFor=\"let al of auditeeList\"\r\n                                                            value={{al.id}}>\r\n                                                        {{al.name}}\r\n                                                    </option>\r\n                                                </select>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>Location</label>\r\n                                                <!--<input type=\"text\" formControlName=\"Location\" maxlength=\"200\" class=\"form-control validation-field\" />-->\r\n                                                <select formControlName=\"Location\" class=\"form-control\">\r\n                                                    <option value=\"\">--Select--</option>\r\n                                                    <option *ngFor=\"let location of locationList \"\r\n                                                            value={{location.LocationID}}>\r\n                                                        {{location.LocationName }}-{{ location.RoomName}}\r\n                                                    </option>\r\n                                                </select>\r\n                                                <small [hidden]=\"auditsubjectform.controls.Location.valid\" class=\"text-danger\">\r\n                                                    Location is required\r\n                                                </small>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>Frequency</label>\r\n                                                <!--<input type=\"text\" formControlName=\"Frequency\" maxlength=\"200\" class=\"form-control validation-field\" />-->\r\n                                                <select formControlName=\"Frequency\" class=\"form-control\">\r\n                                                    <option value=\"0\">--Select--</option>\r\n                                                    <option *ngFor=\"let frequency of frequencyList\"\r\n                                                            value={{frequency.FrequencyId}}>\r\n                                                        {{frequency.Description}}\r\n                                                    </option>\r\n                                                </select>\r\n                                                <small [hidden]=\"auditsubjectform.controls.Frequency.valid\" class=\"text-danger\">\r\n                                                    Frequency is required\r\n                                                </small>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>Start Date</label>\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"input-group\">\r\n                                                        <input class=\"form-control validation-field\" placeholder=\"yyyy-mm-dd\" name=\"StartDateStruct\" formControlName=\"StartDateStruct\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                                        <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                                                            <i class=\"fa fa-calendar\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <small [hidden]=\"auditsubjectform.controls.StartDateStruct.valid\" class=\"text-danger\">\r\n                                                    Start date is required\r\n                                                </small>\r\n                                            </div>\r\n                                            <div class=\"form-group\">\r\n                                                <label>End Date</label>\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"input-group\">\r\n                                                        <input class=\"form-control validation-field\" placeholder=\"yyyy-mm-dd\" name=\"EndDateStruct\" formControlName=\"EndDateStruct\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                                                        <div class=\"input-group-addon\" (click)=\"d1.toggle()\">\r\n                                                            <i class=\"fa fa-calendar\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!--display error message if agenda is not valid-->\r\n                                                <small [hidden]=\"auditsubjectform.controls.EndDateStruct.valid\" class=\"text-danger\">\r\n                                                    End date is required\r\n                                                </small>\r\n                                            </div>\r\n                                            <div class=\"input-group\">\r\n                                                <input type=\"text\" value=\"\" formControlName=\"InsertQuestion\" maxlength=\"200\" class=\"form-control\" placeholder=\"Add Question\" />\r\n                                                <div class=\"input-group-btn\">\r\n                                                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"AddMoreAuditSubjectQuestionForm(i,auditsubjectform.controls.InsertQuestion.value);\">\r\n                                                        <i class=\"fa fa-plus add-item-icon\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div formArrayName=\"AuditSubjectQuestions\" *ngFor=\"let auditsubjectquestionform of auditsubjectform.controls.AuditSubjectQuestions.controls; let j=index\">\r\n                                                <div [formGroupName]=\"j\">\r\n                                                    <input type=\"hidden\" formControlName=\"QuestionText\" class=\"form-control validation-field\" />\r\n                                                    <ul class=\"list-group list-group-flush\">\r\n                                                        <li class=\"list-group-item justify-content-between\">\r\n                                                            {{ auditsubjectquestionform.controls.QuestionText.value }}\r\n                                                            <i class=\"fa fa-trash text-danger\" (click)=\"RemoveAuditSubjectQuestionForm(i,j);\"></i>\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" style=\"margin-left:10px;\">\r\n                        <p-checkbox formControlName=\"TermsCondition\" label=\"Auditors are independent of the processes being audited ?\" binary=\"true\"></p-checkbox>\r\n                        <small [hidden]=\"myFormAudit.controls.TermsCondition.valid\" class=\"text-danger\">\r\n                            Terms Condition is required\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n           \r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"SaveAuditFormData(myFormAudit.value)\" [disabled]=\"!myFormAudit.valid\">Save</button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/audit/audit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__ = __webpack_require__("../../../../../src/app/pages/audit/audit.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__audit_audit_service__ = __webpack_require__("../../../../../src/app/pages/audit/audit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__measure_measure_service__ = __webpack_require__("../../../../../src/app/pages/measure/measure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
                var location = res_1[_i];
                _this.locationList.push({
                    LocationID: location.LocationID,
                    LocationName: location.LocationName,
                    RoomName: location.RoomName
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
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__["f" /* AuditViewModel */](); }
        this.myFormAudit = this.fb.group({
            AuditID: [model.AuditID],
            Title: [model.Title, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Scope: [model.Scope, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
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
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__["b" /* AuditSubject */](); }
        return this.fb.group({
            AuditSubjectID: [model.AuditSubjectID],
            AuditID: [model.AuditID],
            Subject: [model.Subject, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            AuditorID: [model.AuditorID, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            AuditeeID: [model.AuditeeID],
            Location: [model.Location, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Frequency: [model.Frequency, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            StartDateStruct: [{ year: new Date(model.StartDate).getFullYear(), month: new Date(model.StartDate).getMonth() + 1, day: new Date(model.StartDate).getDate() }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            EndDateStruct: [{ year: new Date(model.EndDate).getFullYear(), month: new Date(model.EndDate).getMonth() + 1, day: new Date(model.EndDate).getDate() }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            InsertQuestion: [model.InsertQuestion],
            AuditSubjectQuestions: this.fb.array([this.buildAuditSubjectQuestion()])
        });
    };
    AuditComponent.prototype.buildAuditSubjectQuestion = function (model) {
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__["c" /* AuditSubjectQuestion */](); }
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
        var auditSubjectQuestion = new __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__["c" /* AuditSubjectQuestion */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], AuditComponent.prototype, "closeDialog", void 0);
    AuditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audit',
            template: __webpack_require__("../../../../../src/app/pages/audit/audit.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__audit_audit_service__["a" /* AuditService */], __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_8__measure_measure_service__["a" /* MeasureService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__audit_audit_service__["a" /* AuditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__audit_audit_service__["a" /* AuditService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__measure_measure_service__["a" /* MeasureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__measure_measure_service__["a" /* MeasureService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _g || Object])
    ], AuditComponent);
    return AuditComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=audit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/audit/audit.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AuditSubjectReviewViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AuditSubjectReviewQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AuditViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuditSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AuditSubjectQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditListFilterModel; });
/* unused harmony export AuditListViewResult */
/* unused harmony export AuditListResult */
// Audit Review Detail page model
var AuditSubjectReviewViewModel = /** @class */ (function () {
    function AuditSubjectReviewViewModel() {
        this.AuditSubjectQuestionResponses = [];
    }
    return AuditSubjectReviewViewModel;
}());

var AuditSubjectReviewQuestion = /** @class */ (function () {
    function AuditSubjectReviewQuestion() {
    }
    return AuditSubjectReviewQuestion;
}());

// Audit Detail page models
var AuditViewModel = /** @class */ (function () {
    function AuditViewModel() {
        this.AuditSubjects = [];
    }
    return AuditViewModel;
}());

var AuditSubject = /** @class */ (function () {
    function AuditSubject() {
        this.AuditSubjectQuestions = [];
    }
    return AuditSubject;
}());

var AuditSubjectQuestion = /** @class */ (function () {
    function AuditSubjectQuestion() {
    }
    return AuditSubjectQuestion;
}());

// List page models
var AuditListFilterModel = /** @class */ (function () {
    function AuditListFilterModel() {
    }
    return AuditListFilterModel;
}());

var AuditListViewResult = /** @class */ (function () {
    function AuditListViewResult() {
        this.AuditListResult = [];
    }
    return AuditListViewResult;
}());

var AuditListResult = /** @class */ (function () {
    function AuditListResult() {
    }
    return AuditListResult;
}());

//# sourceMappingURL=audit.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/audit/audit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditModule", function() { return AuditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auditlist_component__ = __webpack_require__("../../../../../src/app/pages/audit/auditlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__audit_component__ = __webpack_require__("../../../../../src/app/pages/audit/audit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auditreview_component__ = __webpack_require__("../../../../../src/app/pages/audit/auditreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__audit_component__["a" /* AuditComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__auditlist_component__["a" /* AuditListComponent */], data: { breadcrumb: 'List' } },
    { path: 'audit', component: __WEBPACK_IMPORTED_MODULE_6__audit_component__["a" /* AuditComponent */], data: { breadcrumb: 'audit' } },
    { path: 'review', component: __WEBPACK_IMPORTED_MODULE_7__auditreview_component__["a" /* AuditReviewComponent */], data: { breadcrumb: 'review' } },
    { path: 'review/:subid/:id', component: __WEBPACK_IMPORTED_MODULE_7__auditreview_component__["a" /* AuditReviewComponent */], data: { breadcrumb: 'Review Edit' } },
    { path: 'review/:subid', component: __WEBPACK_IMPORTED_MODULE_7__auditreview_component__["a" /* AuditReviewComponent */], data: { breadcrumb: 'Review Edit' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__audit_component__["a" /* AuditComponent */], data: { breadcrumb: 'Edit' } },
];
var AuditModule = /** @class */ (function () {
    function AuditModule() {
    }
    AuditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__audit_component__["a" /* AuditComponent */],
                __WEBPACK_IMPORTED_MODULE_5__auditlist_component__["a" /* AuditListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auditreview_component__["a" /* AuditReviewComponent */]
            ]
        })
    ], AuditModule);
    return AuditModule;
}());

//# sourceMappingURL=audit.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/audit/audit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditService; });
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
var AuditService = /** @class */ (function () {
    function AuditService(http) {
        this.http = http;
    }
    AuditService.prototype.getAuditListData = function (filter) {
        return this.http.post(apiURL + '/audit/GetAuditListData', filter).map(function (response) { return response.json(); });
    };
    AuditService.prototype.deleteAudit = function (id) {
        return this.http.get(apiURL + '/audit/DeleteAudit?id=' + id).map(function (response) { return response.json(); });
    };
    AuditService.prototype.saveAuditFormData = function (data) {
        return this.http.post(apiURL + '/audit/AddUpdateAudit', data).map(function (response) { return response.json(); });
    };
    AuditService.prototype.getSingleAudit = function (id) {
        return this.http.get(apiURL + '/audit/GetSingleAudit?id=' + id).map(function (response) { return response.json(); });
    };
    AuditService.prototype.getAuditSubject = function (id) {
        return this.http.get(apiURL + '/audit/GetAuditSubject?id=' + id).map(function (response) { return response.json(); });
    };
    AuditService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/audit/SaveMaterial', body).map(function (res) { });
    };
    AuditService.prototype.downloadMaterial = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseContentType */].Blob });
        return this.http.get(apiURL + '/audit/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    // Audit review
    AuditService.prototype.saveAuditReviewFormData = function (data) {
        return this.http.post(apiURL + '/audit/AddUpdateAuditReview', data).map(function (response) { return response.json(); });
    };
    AuditService.prototype.getAuditSubjectReview = function (AuditSubjectID, AuditSubjectReviewID) {
        return this.http.get(apiURL + '/audit/GetAuditSubjectReview?AuditSubjectID=' + AuditSubjectID + '&AuditSubjectReviewID=' + AuditSubjectReviewID).map(function (response) { return response.json(); });
    };
    AuditService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], AuditService);
    return AuditService;
    var _a;
}());

//# sourceMappingURL=audit.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/audit/auditlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadAuditorList($event)\">\r\n    <p-column field=\"Title\" header=\"Audit subject\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Scope\" header=\"Audit scope\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column header=\"Subject\">\r\n        <ng-template let-audit=\"rowData\" pTemplate=\"body\">\r\n            <div class=\"dropdown d-inline-block\">\r\n                {{audit.AuditSubjectCount}}\r\n                <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"auditsubjects\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i data-toggle=\"modal\" (click)=\"getAuditSubjectsData(audit.AuditID)\" data-target=\"#lg-modal-dataview\" class=\"fa fa-info\" aria-hidden=\"true\" title=\"{{audit.AuditSubjects}}\"></i>\r\n                </a>\r\n             </div>\r\n        </ng-template>\r\n    </p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAudit(meeting)\" icon=\"fa fa-trash\"></button>\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToAuditReviewPage(meeting)\" icon=\"fa fa-compress\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>\r\n\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal-dataview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Audit Subjects</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                      <p-dataTable [editable]=\"true\" [value]=\"AuditSubjectsModel\" [responsive]=\"true\">\r\n                          <p-column field=\"Subject\" header=\"Subject\" ></p-column>\r\n                           <p-column field=\"StartDate\" header=\"Due Date\">\r\n                            <ng-template let-col let-report=\"rowData\" pTemplate=\"body\">\r\n                                <label>{{report.StartDate | date: 'MM/dd/yyyy'}}</label>\r\n                            </ng-template>\r\n                        </p-column>\r\n                      \r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <p-column field=\"QuestionText\" header=\"Question\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"DuratiuonUnit\" header=\"Duratiuon Unit\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"QuestionType\" header=\"Question Type\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Score\" header=\"Score\"  [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Active\" header=\"Status\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/audit/auditlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audit_audit_service__ = __webpack_require__("../../../../../src/app/pages/audit/audit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__audit_audit_model__ = __webpack_require__("../../../../../src/app/pages/audit/audit.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuditListComponent = /** @class */ (function () {
    function AuditListComponent(_AuditService, router, location, _fb, route) {
        this._AuditService = _AuditService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.AuditSubjectsModel = [];
        this.totalRecords = 0;
    }
    AuditListComponent.prototype.ngOnInit = function () {
        this.filterData = new __WEBPACK_IMPORTED_MODULE_6__audit_audit_model__["a" /* AuditListFilterModel */]();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Title";
        this.filterData.SortOrder = "asc";
    };
    AuditListComponent.prototype.getList = function () {
        var _this = this;
        this._AuditService.getAuditListData(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.AuditListResult;
        });
    };
    AuditListComponent.prototype.getAuditSubjectsData = function (auditid) {
        var _this = this;
        this._AuditService.getSingleAudit(auditid).subscribe(function (res) {
            _this.AuditSubjectsModel = res.AuditSubjects;
        });
    };
    AuditListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/audit/' + event.AuditID]);
    };
    AuditListComponent.prototype.redirectToAuditReviewPage = function (event) {
        this.router.navigate(['/pages/audit/review/' + event.AuditID]);
    };
    AuditListComponent.prototype.deleteAudit = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this audit ?")) {
            this._AuditService.deleteAudit(event.AuditID).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    AuditListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/audit']);
    };
    AuditListComponent.prototype.loadAuditorList = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "Title" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.Title = event.filters.Title == undefined ? '' : event.filters.Title.value;
        this.filterData.Scope = event.filters.Scope == undefined ? '' : event.filters.Scope.value;
        //this.filterData.AuditorName = event.filters.AuditorName == undefined ? '' : event.filters.AuditorName.value;
        this.getList();
    };
    AuditListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auditlist',
            template: __webpack_require__("../../../../../src/app/pages/audit/auditlist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__audit_audit_service__["a" /* AuditService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__audit_audit_service__["a" /* AuditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__audit_audit_service__["a" /* AuditService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object])
    ], AuditListComponent);
    return AuditListComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=auditlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/audit/auditreview.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myFormAudit\" novalidate>\r\n    <!--<div style=\"margin-top:10px;\">\r\n        <div style=\"margin:20px;\">-->\r\n    <!--<div class=\"form-group\">\r\n        <label>Audit</label>\r\n        <input type=\"text\" formControlName=\"Title\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n        <small [hidden]=\"myFormAudit.controls.Title.valid\" class=\"text-danger\">\r\n            Audit is required\r\n        </small>\r\n    </div>-->\r\n\r\n    <div class=\"card border-0 box-shadow rounded-0\" style=\"margin-top:5px;\">\r\n        <div class=\"card-block pt-0\">\r\n            <div style=\"margin-top:10px;\">\r\n                <div style=\"margin:20px;\">\r\n                    <div class=\"form-group\">\r\n                        <label>Subject</label>\r\n                        <input type=\"text\" formControlName=\"Subject\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                        <!--<small [hidden]=\"myFormAudit.controls.Subject.valid\" class=\"text-danger\">\r\n                            Subject is required\r\n                        </small>-->\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Audit Date</label>\r\n                                <input type=\"text\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                                <!--<small [hidden]=\"myFormAudit.controls.Scope.valid\" class=\"text-danger\">\r\n                                    Scope is required\r\n                                </small>-->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Auditee</label>\r\n                                <select formControlName=\"AuditeeID\" class=\"form-control\">\r\n                                    <option value=\"\">--Select--</option>\r\n                                    <option *ngFor=\"let al of auditeeList\"\r\n                                            value={{al.id}}>\r\n                                        {{al.name}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div formArrayName=\"AuditSubjectQuestionResponses\" *ngFor=\"let auditsubjectquestionform of AuditSubjectQuestionResponses.controls; let j=index\">\r\n                        <div [formGroupName]=\"j\">\r\n                            <input type=\"hidden\" formControlName=\"QuestionText\" class=\"form-control validation-field\" />\r\n                            <div class=\"form-group\">\r\n                                <div>{{ auditsubjectquestionform.controls.QuestionText.value }}</div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <textarea formControlName=\"Comment\" style=\"width:79%;\"></textarea>\r\n                                   <button type=\"button\" pButton icon=\"fa-camera\" style=\"margin-left:1%;\"></button>\r\n                                   <button type=\"button\" pButton icon=\"fa-wrench\" label=\"NC\" style=\"margin-left:1%;\"></button>\r\n                                   <button type=\"button\" pButton icon=\"fa-bullseye\" label=\"OB\" style=\"margin-left:1%;\"></button>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"SaveAuditReviewFormData(myFormAudit.value)\" [disabled]=\"!myFormAudit.valid\">Save</button>\r\n    </div>\r\n\r\n    <!--</div>\r\n    </div>-->\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/audit/auditreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__ = __webpack_require__("../../../../../src/app/pages/audit/audit.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__audit_audit_service__ = __webpack_require__("../../../../../src/app/pages/audit/audit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__measure_measure_service__ = __webpack_require__("../../../../../src/app/pages/measure/measure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
                    var audsubrevi = new __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__["e" /* AuditSubjectReviewViewModel */]();
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
                            var asubreview = new __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__["d" /* AuditSubjectReviewQuestion */]();
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
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__["e" /* AuditSubjectReviewViewModel */](); }
        this.myFormAudit = this.fb.group({
            AuditSubjectReviewID: [model.AuditSubjectReviewID],
            AuditID: [model.AuditID],
            SubjectID: [model.SubjectID],
            AuditDate: [model.AuditDate],
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
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_5__audit_audit_model__["d" /* AuditSubjectReviewQuestion */](); }
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
        this._AuditService.saveAuditReviewFormData(data).subscribe(function (res) {
            _this.AuditSubjectReviewID = res.AuditSubjectReviewID;
            _this.router.navigate(['/pages/audit/review/' + _this.AuditSubjectID + '/' + _this.AuditSubjectReviewID]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], AuditReviewComponent.prototype, "closeDialog", void 0);
    AuditReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auditreview',
            template: __webpack_require__("../../../../../src/app/pages/audit/auditreview.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__audit_audit_service__["a" /* AuditService */], __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_8__measure_measure_service__["a" /* MeasureService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__audit_audit_service__["a" /* AuditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__audit_audit_service__["a" /* AuditService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__measure_measure_service__["a" /* MeasureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__measure_measure_service__["a" /* MeasureService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _g || Object])
    ], AuditReviewComponent);
    return AuditReviewComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=auditreview.component.js.map

/***/ })

});
//# sourceMappingURL=audit.module.chunk.js.map