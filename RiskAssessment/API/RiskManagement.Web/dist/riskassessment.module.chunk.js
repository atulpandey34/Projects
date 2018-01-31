webpackJsonp(["riskassessment.module"],{

/***/ "../../../../../src/app/pages/riskassessment/riskassessment.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"SaveRiskAssessmentFormData(myForm.value,'submit')\">\r\n    <div style=\"margin-top:10px;\">\r\n        <div style=\"margin:20px;\">\r\n            <div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Subject</label>\r\n                    <!--<input type=\"text\" formControlName=\"title\" class=\"form-control\">-->\r\n                    <input type=\"text\" formControlName=\"Area\" class=\"form-control validation-field\" />\r\n                    <!--display error message if agenda is not valid-->\r\n                    <small [hidden]=\"myForm.controls.Area.valid\" class=\"text-danger\">\r\n                        Subject is required\r\n                    </small>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Responsible Team</label>\r\n                    <ss-multiselect-dropdown [options]=\"responsiblePersonOptions\" [texts]=\"responsiblePersonTexts\" [settings]=\"responsiblePersonSettings\" formControlName=\"RiskAssessmentTeam\"></ss-multiselect-dropdown>\r\n                    <small [hidden]=\"myForm.controls.RiskAssessmentTeam.valid\" class=\"text-danger\">\r\n                        Responsible Team is required\r\n                    </small>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Assessment Date</label>\r\n                    <!--<input type=\"text\" formControlName=\"duedate\" type=\"date\" class=\"form-control\">-->\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control validation-field\" placeholder=\"yyyy-mm-dd\" name=\"dueDate\" formControlName=\"AssessmentDateDateStruct\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                            <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <small [hidden]=\"myForm.controls.AssessmentDateDateStruct.valid\" class=\"text-danger\">\r\n                            Assessment date is required\r\n                        </small>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Review Duration Unit</label>\r\n                    <select formControlName=\"ReviewDurationUnit\" class=\"form-control\">\r\n                        <option value=\"\">--Select--</option>\r\n                        <option *ngFor=\"let location of reviewDurationUnitList\"\r\n                                value={{location.DurationUnitId}}>\r\n                            {{location.Text }}\r\n                        </option>\r\n                    </select>\r\n                    <!--display error message if name is not valid-->\r\n                    <small *ngIf=\"!myForm.controls.ReviewDurationUnit.valid\" class=\"text-danger\">\r\n                        Review Duration Unit is required.\r\n                    </small>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Review Duration</label>\r\n                    <!--<input type=\"text\" formControlName=\"title\" class=\"form-control\">-->\r\n                    <input type=\"number\" formControlName=\"ReviewDuration\" max=\"500\" min=\"1\" step=\"5\" class=\"form-control validation-field\" />\r\n                    <!--display error message if agenda is not valid-->\r\n                    <small [hidden]=\"myForm.controls.ReviewDuration.valid\" class=\"text-danger\">\r\n                        Review Duration is required\r\n                    </small>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [hidden]=\"riskAssessmentId ==0\">\r\n                    <label>Signed By User</label>\r\n                    <div class=\"dropdown d-inline-block\">\r\n                        <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"signedUser\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"signedUser\">\r\n                            <div class=\"list\">\r\n\r\n                                <a class=\"dropdown-item\" *ngFor=\"let user of signedUserList\"><i class=\"\"></i>{{user.Column1}}-{{user.SignedDateString}}</a>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <div [hidden]=\"isArchivedRiskAssessment\" class=\"modal-footer\">\r\n                    <button type=\"button\" data-toggle=\"modal\" data-target=\"#lg-modalTraining\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Save</button>\r\n                    <button type=\"button\" #buttonComplete (click)=\"CompleteRiskAssessment()\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Complete</button>\r\n                    <button type=\"button\" #buttonReview (click)=\"ReviewRiskAssessment()\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Review</button>\r\n                    <button type=\"button\" #buttonTraining (click)=\"SetTrainingRequired()\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Trainig required</button>\r\n                    <button type=\"button\" #buttonSignature data-toggle=\"modal\" (click)=\"OpenSignatureDialog()\" [disabled]=\"!myForm.valid\" data-target=\"#lg-modalSignature\" class=\"btn btn-primary\">Verify Signature</button>\r\n                    <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"SaveRiskAssessmentFormData(myForm.value,'hazard')\" data-target=\"#lg-modal\" [disabled]=\"!myForm.valid\" label=\"Add Hazard\">Add Hazard</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Hazard</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"CloseDialog()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"RiskAssessmentHazardViewModelForm\" novalidate (ngSubmit)=\"SaveHazardForm(RiskAssessmentHazardViewModelForm.value)\">\r\n                    <div class=\"form-group\">\r\n                        <label>Hazard</label>\r\n                        <select #hazardDropdown formControlName=\"HazardId\" class=\"form-control validation-field\">\r\n                            <option value=\"\">--Select--</option>\r\n                            <option *ngFor=\"let location of hazardsListV1\"\r\n                                    value={{location.HazardId}}>\r\n                                {{location.Text }}\r\n                            </option>\r\n                        </select>\r\n                        <!--display error message if name is not valid-->\r\n                        <small [hidden]=\"RiskAssessmentHazardViewModelForm.controls.HazardId.valid\" class=\"text-danger\">\r\n                            Hazard is required.\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Description</label>\r\n                        <input #hazardDescription type=\"text\" formControlName=\"Description\" class=\"form-control validation-field\" />\r\n                        <!--display error message if name is not valid-->\r\n                        <small [hidden]=\"RiskAssessmentHazardViewModelForm.controls.Description.valid\" class=\"text-danger\">\r\n                            Description is required.\r\n                        </small>\r\n                    </div>\r\n                    <div style=\"border: 1px solid black;margin-top:10px;\">\r\n                        <span class=\"fa fa-plus-square pull-right\" (click)=\"AddMoreMeasure()\"></span>\r\n                        <div style=\"margin:20px;\" formArrayName=\"RiskAssessmentHazardMeasureViewModel\">\r\n\r\n                            <div style=\"border-bottom:1px solid black;\" *ngFor=\"let acton of RiskAssessmentHazardViewModelForm['controls'].RiskAssessmentHazardMeasureViewModel['controls']; let i=index\">\r\n                                <div>\r\n                                    <span class=\"fa fa-remove pull-right\" *ngIf=\"RiskAssessmentHazardViewModelForm.controls.RiskAssessmentHazardMeasureViewModel.controls.length > 0\" (click)=\"RemoveMeasure(i)\">\r\n                                    </span>\r\n                                </div>\r\n                                <div [formGroupName]=\"i\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Control</label>\r\n                                        <input type=\"text\" formControlName=\"Text\" class=\"form-control validation-field\" />\r\n                                        <!--display error message if name is not valid-->\r\n                                        <small [hidden]=\"RiskAssessmentHazardViewModelForm.controls.RiskAssessmentHazardMeasureViewModel.controls[i].controls.Text.valid\" class=\"text-danger\">\r\n                                            Control is required.\r\n                                        </small>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label></label>\r\n                                        <select formControlName=\"ActionId\" class=\"form-control validation-field\">\r\n                                            <option value=\"\">--Select--</option>\r\n                                            <option value=\"1\">Action</option>\r\n                                            <option value=\"2\">Rule</option>\r\n\r\n                                        </select>\r\n                                        <!--display error message if name is not valid-->\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div style=\"border:1px solid black;margin-top:10px;\" class=\"form-group\">\r\n                        <div style=\"margin:20px;\" formArrayName=\"RiskAssessmentHazardReviewViewModel\">\r\n                            <div style=\"border-bottom:1px solid black;\" *ngFor=\"let agnda1 of RiskAssessmentHazardViewModelForm['controls'].RiskAssessmentHazardReviewViewModel['controls']; let j=index\">\r\n                                <div>\r\n\r\n                                </div>\r\n                                <div [formGroupName]=\"j\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Consequence</label>\r\n                                        <select formControlName=\"Consequence\" class=\"form-control validation-field\">\r\n                                            <option value=\"\">--Select--</option>\r\n                                            <option value=\"1\">Significant</option>\r\n                                            <option value=\"2\">Minor</option>\r\n                                            <option value=\"3\">Moderate</option>\r\n                                            <option value=\"4\">Major</option>\r\n                                            <option value=\"5\">Calastrophic</option>\r\n                                        </select>\r\n                                        <!--display error message if name is not valid-->\r\n                                        <small [hidden]=\"RiskAssessmentHazardViewModelForm.controls.RiskAssessmentHazardReviewViewModel.controls[j].controls.Consequence.valid\" class=\"text-danger\">\r\n                                            Consequence is required.\r\n                                        </small>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label>Likelihood</label>\r\n                                        <select formControlName=\"Likelihood\" class=\"form-control validation-field\">\r\n                                            <option value=\"\">--Select--</option>\r\n                                            <option value=\"1\">Extremely UnLikely</option>\r\n                                            <option value=\"2\">UnLikely</option>\r\n                                            <option value=\"3\">Possible</option>\r\n                                            <option value=\"4\">Likely</option>\r\n                                            <option value=\"5\">Almost Certain</option>\r\n                                        </select>\r\n                                        <!--display error message if name is not valid-->\r\n                                        <small [hidden]=\"RiskAssessmentHazardViewModelForm.controls.RiskAssessmentHazardReviewViewModel.controls[j].controls.Likelihood.valid\" class=\"text-danger\">\r\n                                            Likelihood is required.\r\n                                        </small>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label>Monitoring Method</label>\r\n                                        <select formControlName=\"MonitoringMethodId\" class=\"form-control validation-field\">\r\n                                            <option value=\"\">--Select--</option>\r\n                                            <option *ngFor=\"let location of monitorinMethodList\"\r\n                                                    value={{location.MonitoringMethodId}}>\r\n                                                {{location.Method }}\r\n                                            </option>\r\n                                        </select>\r\n                                        <!--display error message if name is not valid-->\r\n                                        <small [hidden]=\"RiskAssessmentHazardViewModelForm.controls.RiskAssessmentHazardReviewViewModel.controls[j].controls.MonitoringMethodId.valid\" class=\"text-danger\">\r\n                                            Monitoring Method is required.\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!RiskAssessmentHazardViewModelForm.valid\">Save</button>\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"CloseDialog()\" #closeDialog data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<p-dataTable [value]=\"hazardList\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             scrollable=\"true\" rowGroupMode=\"rowspan\" groupField=\"HazardText\" resizableColumns=\"true\" sortField=\"HazardText\" #dt reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n\r\n    <p-column [style]=\"{'width':'300px'}\" scope=\"rowgroup\" field=\"HazardText\" header=\"Hazard\">\r\n        <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <div>\r\n                <span>{{car[col.field]}}</span>\r\n                <br />\r\n                <label><b>Description :</b></label>\r\n                <span class=\"spanWordWrap\">{{car.Description}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </p-column>\r\n    <p-column [style]=\"{'width':'90px'}\" field=\"CreatedDate\" header=\"Date Added\">\r\n    </p-column>\r\n    <!--<p-column [style]=\"{'width':'90px'}\" field=\"Description\" scope=\"rowgroup\" header=\"Description\"></p-column>-->\r\n    <p-column [style]=\"{'width':'300px'}\" field=\"MeasureText\" header=\"Control\">\r\n        <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <div class=\"form-group\" [hidden]=\"car.MeasureTextWithReviewDate ==''\">\r\n                <label>Existing :</label>\r\n                <div class=\"spanWordWrap\" *ngFor=\"let text of car.MeasureTextWithReviewDateArray; let i=index\">\r\n                    {{i + 1}}. {{text}}\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" [hidden]=\"car.MeasureText ==''\">\r\n                <label>Additional controls if needed :</label>\r\n                <div class=\"spanWordWrap\" *ngFor=\"let text of car.MeasureTextArray  ; let i=index\">\r\n                    {{i + 1}}. {{text}}\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </p-column>\r\n    <p-column [style]=\"{'width':'40px'}\" field=\"Consequence\" header=\"Consequence\"></p-column>\r\n    <p-column [style]=\"{'width':'40px'}\" field=\"Likelihood\" header=\"Likelihood\"></p-column>\r\n    <p-column [style]=\"{'width':'40px'}\" field=\"Source\" header=\"Score\">\r\n        <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <div [style.background-color]=\"car.ScoreColor\"><span>{{car[col.field]}}</span></div>\r\n        </ng-template>\r\n    </p-column>\r\n    <p-column [style]=\"{'width':'100px'}\" field=\"Method\" header=\"Monitoring method(s)\"></p-column>\r\n    <p-column [style]=\"{'width':'90px'}\" bodyStyle=\"\">\r\n        <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <!--<div [hidden]=\"car.CreatedDate==''\">\r\n                <span>{{car[col.field]}}</span>\r\n            </div>-->\r\n            <button type=\"button\" [hidden]=\"isArchivedRiskAssessment\" title=\"Edit\" pButton data-target=\"#lg-modal\" data-toggle=\"modal\" (click)=\"OpenHazard(car)\" icon=\"fa fa-file-text-o\"></button>\r\n\r\n        </ng-template>\r\n    </p-column>\r\n    <!--<p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n\r\n\r\n        </ng-template>\r\n\r\n    </p-column>-->\r\n</p-dataTable>\r\n\r\n\r\n<div class=\"modal fade\" id=\"lg-modalSignature\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Signature</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"CloseSignatureDialog()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"signatureForm\" novalidate (ngSubmit)=\"SaveSignature()\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Password </label>\r\n                        <input formControlName=\"OldPassword\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\">\r\n                        <small [hidden]=\"signatureForm['controls'].OldPassword.valid\" class=\"text-danger\">\r\n                            Password is required.\r\n                        </small>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signatureForm.valid\">Save</button>\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"CloseSignatureDialog()\" #closeDialogSignature data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"lg-modalTraining\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Training</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"CloseSignatureDialog()\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"custom-controls-stacked\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input #trainingRequiredCheckbox type=\"checkbox\" class=\"custom-control-input\" checked>\r\n                            <span class=\"custom-control-indicator\"></span>\r\n                            <span class=\"custom-control-description\">Training required</span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SaveRiskAssessmentFormData(myForm.value,'training')\" [disabled]=\"!myForm.valid\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" #closeDialogTraining data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/riskassessment/riskassessment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskAssessmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__ = __webpack_require__("../../../../../src/app/pages/eventactions/eventaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__ = __webpack_require__("../../../../../src/app/pages/meeting/meeting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__ = __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__riskassessment_riskassessment_service__ = __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessment.service.ts");
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











var RiskAssessmentComponent = /** @class */ (function () {
    function RiskAssessmentComponent(_UserService, _RiskAssessmentService, _meetingService, router, location, _fb, _dataService, route, _masterDataService) {
        this._UserService = _UserService;
        this._RiskAssessmentService = _RiskAssessmentService;
        this._meetingService = _meetingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.riskAssessmentId = 0;
        this.hazardId = 0;
        this.reviewDurationUnitList = [];
        this.hazardsList = [];
        this.hazardsListV1 = [];
        this.monitorinMethodList = [];
        this.isArchivedRiskAssessment = false;
        this.responsiblePersonOptions = [];
        this.iscompleted = false;
        this.signedUserList = [];
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
        this.totalRecords = 0;
        this.hazardList = [];
    }
    RiskAssessmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buttonComplete.nativeElement.hidden = true;
        this.buttonTraining.nativeElement.hidden = true;
        this.buttonSignature.nativeElement.hidden = true;
        this.buttonReview.nativeElement.hidden = true;
        var model = new __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__["f" /* RiskAssessmentViewModel */]();
        this.addhtmltoform(model);
        this.addHazaradModelToForm(new __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__["c" /* RiskAssessmentHazardViewModel */]());
        this._masterDataService.getUserList().subscribe(function (res) { _this.responsiblePersonOptions = res; });
        this._RiskAssessmentService.getAllDurationUnit().subscribe(function (res) {
            _this.reviewDurationUnitList = res;
        });
        this._RiskAssessmentService.getAllHazard().subscribe(function (res) {
            _this.hazardsList = res;
            _this.hazardsListV1 = res;
        });
        this._RiskAssessmentService.getAllMonitoringMethod().subscribe(function (res) {
            _this.monitorinMethodList = res;
        });
        this.route.params.subscribe(function (params) {
            _this.riskAssessmentId = params['id']; //log the value of id
            _this.getRiskAssessment();
            _this.getList();
        });
        // this.getRiskAssessment();
        this.initSignaturePassword();
    };
    RiskAssessmentComponent.prototype.getRiskAssessment = function () {
        var _this = this;
        if (this.riskAssessmentId > 0) {
            this.buttonReview.nativeElement.hidden = false;
            this.buttonComplete.nativeElement.hidden = false;
            //this.buttonTraining.nativeElement.hidden = false;
            this.buttonSignature.nativeElement.hidden = false;
            this._RiskAssessmentService.getRiskAssessment(this.riskAssessmentId).subscribe(function (res) {
                _this.isArchivedRiskAssessment = res.IsArchived;
                _this.addhtmltoform(res);
            });
            this._RiskAssessmentService.getSignedUserList(this.riskAssessmentId).subscribe(function (res) {
                _this.signedUserList = res;
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var tooltip = res_1[_i];
                    _this.signedUserTooltip = _this.signedUserTooltip + '<div class="tooltip-inner">Tooltip on the right</div>';
                }
            });
        }
    };
    RiskAssessmentComponent.prototype.addhtmltoform = function (viewModel) {
        var team = [];
        if (this.riskAssessmentId > 0)
            team = viewModel.RiskAssessmentTeamViewModel.map(function (x) { return x.UserId; });
        this.myForm = this._fb.group({
            RiskAssessmentId: [this.riskAssessmentId],
            Area: [viewModel.Area, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            AssessmentDateDateStruct: [{ year: new Date(viewModel.AssessmentDate).getFullYear(), month: new Date(viewModel.AssessmentDate).getMonth() + 1, day: new Date(viewModel.AssessmentDate).getDate() }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            ReviewDuration: [viewModel.ReviewDuration, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            ReviewDurationUnit: [viewModel.ReviewDurationUnit, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            RiskAssessmentTeam: [team, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            IsArchived: [viewModel.IsArchived],
        });
    };
    RiskAssessmentComponent.prototype.addHazaradModelToForm = function (viewModel) {
        this.RiskAssessmentHazardViewModelForm = this.initRiskAssessmentHazard(viewModel);
    };
    RiskAssessmentComponent.prototype.initRiskAssessmentTeam = function (viewModel) {
        return this._fb.group({
            RiskAssessmentTeamId: [viewModel.RiskAssessmentTeamId],
            RiskAssessmentId: [this.riskAssessmentId],
            UserId: [viewModel.UserId]
        });
    };
    RiskAssessmentComponent.prototype.initRiskAssessmentHazard = function (viewModel) {
        return this._fb.group({
            RiskAssessmentHarardId: [viewModel.RiskAssessmentHarardId],
            HazardId: [viewModel.HazardId, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            RiskAssessmentId: [this.riskAssessmentId],
            IsReadyForReview: [viewModel.IsReadyForReview],
            Description: [viewModel.Description, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            RiskAssessmentHazardMeasureViewModel: this._fb.array([
                this.initRiskAssessmentHazardMeasure(new __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__["a" /* RiskAssessmentHazardMeasureViewModel */]())
            ]),
            RiskAssessmentHazardReviewViewModel: this._fb.array([
                this.initRiskAssessmentHazardReview(new __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__["b" /* RiskAssessmentHazardReviewViewModel */]())
            ])
        });
    };
    RiskAssessmentComponent.prototype.initRiskAssessmentHazardMeasure = function (viewModel) {
        return this._fb.group({
            RiskAssessmentHazardMeasureId: [viewModel.RiskAssessmentHazardMeasureId],
            RiskAssessmentId: [this.riskAssessmentId],
            RiskAssessmentHazardId: [viewModel.RiskAssessmentHazardId],
            Text: [viewModel.Text, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            ActionId: [viewModel.ActionId],
            DateAdded: [viewModel.DateAdded]
        });
    };
    RiskAssessmentComponent.prototype.initRiskAssessmentHazardReview = function (viewModel) {
        return this._fb.group({
            RiskAssessmentHazardReviewId: [viewModel.RiskAssessmentHazardReviewId],
            RiskAssessmentHazardId: [viewModel.RiskAssessmentHazardId],
            Consequence: [viewModel.Consequence, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            Likelihood: [viewModel.Likelihood, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            CreatedDate: [viewModel.CreatedDate],
            UpdatedDate: [viewModel.UpdatedDate],
            ReviewDate: [viewModel.ReviewDate],
            MonitoringMethodId: [viewModel.MonitoringMethodId, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    RiskAssessmentComponent.prototype.AddMoreHazard = function () {
        var control = this.myForm.controls['RiskAssessmentHazardViewModel'];
        control.push(this.initRiskAssessmentHazard(new __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__["c" /* RiskAssessmentHazardViewModel */]()));
    };
    RiskAssessmentComponent.prototype.RemoveHazard = function (i) {
        var control = this.myForm.controls['RiskAssessmentHazardViewModel'];
        control.removeAt(i);
    };
    RiskAssessmentComponent.prototype.AddMoreMeasure = function (model) {
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__["a" /* RiskAssessmentHazardMeasureViewModel */](); }
        var control = this.RiskAssessmentHazardViewModelForm.controls["RiskAssessmentHazardMeasureViewModel"];
        control.push(this.initRiskAssessmentHazardMeasure(model));
    };
    RiskAssessmentComponent.prototype.RemoveMeasure = function (i, k) {
        var control = this.RiskAssessmentHazardViewModelForm.controls["RiskAssessmentHazardMeasureViewModel"];
        control.removeAt(k);
    };
    RiskAssessmentComponent.prototype.SaveRiskAssessmentFormData = function (data, button) {
        var _this = this;
        data.TrainingRequired = this.trainingRequiredCheckbox.nativeElement.checked;
        data.AssessmentDate = new Date(data.AssessmentDateDateStruct.year, data.AssessmentDateDateStruct.month - 1, data.AssessmentDateDateStruct.day).toLocaleDateString();
        var riskAssessmentTeam = data.RiskAssessmentTeam;
        if (riskAssessmentTeam != undefined && riskAssessmentTeam != null && riskAssessmentTeam.length > 0) {
            data.RiskAssessmentTeamViewModel = [];
            for (var _i = 0, riskAssessmentTeam_1 = riskAssessmentTeam; _i < riskAssessmentTeam_1.length; _i++) {
                var userId = riskAssessmentTeam_1[_i];
                var team = new __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__["e" /* RiskAssessmentTeamViewModel */]();
                team.UserId = userId;
                team.RiskAssessmentId = this.riskAssessmentId;
                data.RiskAssessmentTeamViewModel.push(team);
            }
        }
        this._RiskAssessmentService.addUpdateRiskAssessment(data).subscribe(function (res) {
            _this.riskAssessmentId = res;
            if (button == "submit") {
                _this.router.navigate(['/pages/riskassessment/' + _this.riskAssessmentId]);
            }
            else if (button == "hazard") {
                _this.hazardsListV1 = _this.hazardsList;
                var hazarddIds = _this.hazardList.map(function (x) { return x.HazardId; });
                var _loop_1 = function (id) {
                    _this.hazardsListV1 = _this.hazardsListV1.filter(function (x) { return x.HazardId != id; });
                };
                for (var _i = 0, hazarddIds_1 = hazarddIds; _i < hazarddIds_1.length; _i++) {
                    var id = hazarddIds_1[_i];
                    _loop_1(id);
                }
                _this.hazardId = 0;
                _this.addHazaradModelToForm(new __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_model__["c" /* RiskAssessmentHazardViewModel */]());
            }
            else if (button == "training") {
                _this.closeDialogTraining.nativeElement.click();
                _this.getRiskAssessment();
                _this.router.navigate(['/pages/riskassessment/' + _this.riskAssessmentId]);
            }
        });
    };
    RiskAssessmentComponent.prototype.SaveHazardForm = function (data) {
        var _this = this;
        data.RiskAssessmentId = this.riskAssessmentId;
        data.RiskAssessmentHarardId = this.hazardId;
        this._RiskAssessmentService.addUpdateRiskAssessmentHazard(data).subscribe(function (res) {
            _this.hazardId = res;
            _this.closeDialog.nativeElement.click();
            _this.getList();
        });
    };
    RiskAssessmentComponent.prototype.loadCarsLazy = function (event) {
        this.getList();
    };
    RiskAssessmentComponent.prototype.getList = function () {
        var _this = this;
        this._RiskAssessmentService.getHazardList(this.riskAssessmentId)
            .subscribe(function (res) {
            _this.totalRecords = res.length;
            _this.hazardList = res;
        });
    };
    RiskAssessmentComponent.prototype.OpenHazard = function (model) {
        var _this = this;
        this._RiskAssessmentService.getHazardData(model.RiskAssessmentHarardId).subscribe(function (hazardModel) {
            _this.hazardsListV1 = _this.hazardsList;
            _this.hazardDropdown.nativeElement.disabled = true;
            //this.hazardDescription.nativeElement.disabled = true;
            //let hazardModel: RiskAssessmentHazardViewModel = res;
            //hazardModel.HazardId = model.HazardId;
            //hazardModel.Description = model.Description;
            //hazardModel.RiskAssessmentHarardId = model.RiskAssessmentHarardId;
            //hazardModel.IsReadyForReview = true;
            _this.addHazaradModelToForm(hazardModel);
            _this.RemoveMeasure(0, 0);
            var control = _this.RiskAssessmentHazardViewModelForm.controls["RiskAssessmentHazardReviewViewModel"];
            control.removeAt(0);
            if (hazardModel.RiskAssessmentHazardMeasureViewModel != null) {
                for (var _i = 0, _a = hazardModel.RiskAssessmentHazardMeasureViewModel; _i < _a.length; _i++) {
                    var m = _a[_i];
                    _this.AddMoreMeasure(m);
                }
            }
            if (hazardModel.RiskAssessmentHazardReviewViewModel != null) {
                for (var _b = 0, _c = hazardModel.RiskAssessmentHazardReviewViewModel; _b < _c.length; _b++) {
                    var m = _c[_b];
                    var control_1 = _this.RiskAssessmentHazardViewModelForm.controls["RiskAssessmentHazardReviewViewModel"];
                    control_1.push(_this.initRiskAssessmentHazardReview(m));
                }
            }
        });
    };
    RiskAssessmentComponent.prototype.CloseDialog = function () {
        this.hazardDropdown.nativeElement.disabled = false;
        this.hazardDescription.nativeElement.disabled = false;
    };
    RiskAssessmentComponent.prototype.initSignaturePassword = function (password) {
        if (password === void 0) { password = ''; }
        this.signatureForm = this._fb.group({
            OldPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](password, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), this.validatePassword.bind(this)])
        });
    };
    RiskAssessmentComponent.prototype.validatePassword = function (control) {
        var _this = this;
        var result = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._UserService.verifyPassword(control.value).subscribe(function (res) {
                if (res == false) {
                    result = true;
                    _this.signatureForm.controls["OldPassword"].setErrors({ remote: "Password doesn't match with old password." });
                }
            });
        }
        else
            result = null;
        return result ? { 'userName': { value: control.value } } : null;
    };
    RiskAssessmentComponent.prototype.SaveSignature = function () {
        var _this = this;
        this._RiskAssessmentService.updateSignatureDate(this.riskAssessmentId).subscribe(function (res) {
            _this.CloseSignatureDialog();
            _this.getRiskAssessment();
        });
    };
    RiskAssessmentComponent.prototype.CloseSignatureDialog = function () {
        this.closeDialogSignature.nativeElement.click();
    };
    RiskAssessmentComponent.prototype.OpenSignatureDialog = function () {
        this.initSignaturePassword('');
    };
    /* signature password section end*/
    RiskAssessmentComponent.prototype.CompleteRiskAssessment = function () {
        var length = this.hazardList.filter(function (x) { return x.ScoreColor == "red" && x.ReviewDate == null; }).length;
        var orangeLength = this.hazardList.filter(function (x) { return x.ScoreColor == "orange" && x.ReviewDate == null; }).length;
        var signedUser = this.signedUserList.filter(function (x) { return x.UserID == sessionStorage["UserId"]; });
        if (length > 0)
            alert("Assessment can't be completed with red score.");
        else if (orangeLength > 0 && signedUser != null && signedUser[0].SignedDate == null) {
            alert("Please verify your signature first to complete this assessment.");
        }
        else
            this._RiskAssessmentService.updateRiskAssessmentStatus(this.riskAssessmentId).subscribe(function (res) { });
    };
    RiskAssessmentComponent.prototype.SetTrainingRequired = function () {
        this._RiskAssessmentService.updateTrainigRequired(this.riskAssessmentId).subscribe(function (res) {
        });
    };
    RiskAssessmentComponent.prototype.ReviewRiskAssessment = function () {
        var _this = this;
        this._RiskAssessmentService.reviewRiskAssessment(this.riskAssessmentId).subscribe(function (res) {
            _this.router.navigate(['/pages/riskassessment/' + res]);
            _this.riskAssessmentId = res;
            // this.ngOnInit();
            // this.getRiskAssessment();
            // this.getList();
            //this.myForm.controls["RiskAssessmentId"].setValue(0);
            //this.riskAssessmentId = 0;
            //this.getList();
            //this.signedUserTooltip = "";
            //this.buttonComplete.nativeElement.hidden = true;
            //this.buttonTraining.nativeElement.hidden = true;
            //this.buttonSignature.nativeElement.hidden = true;
            //this.buttonReview.nativeElement.hidden = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "closeDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hazardDropdown'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "hazardDropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hazardDescription'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "hazardDescription", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('buttonComplete'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "buttonComplete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('buttonTraining'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "buttonTraining", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('buttonSignature'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "buttonSignature", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('buttonReview'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "buttonReview", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialogTraining'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "closeDialogTraining", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trainingRequiredCheckbox'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "trainingRequiredCheckbox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialogSignature'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "closeDialogSignature", void 0);
    RiskAssessmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-riskassessment',
            template: __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessment.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessment.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_10__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */], __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__["a" /* MeetingDataService */], __WEBPACK_IMPORTED_MODULE_9__riskassessment_riskassessment_service__["a" /* RiskAssessmentService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__riskassessment_riskassessment_service__["a" /* RiskAssessmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__riskassessment_riskassessment_service__["a" /* RiskAssessmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__["a" /* MeetingDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__["a" /* MeetingDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _j || Object])
    ], RiskAssessmentComponent);
    return RiskAssessmentComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=riskassessment.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/riskassessment/riskassessment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MonitoringMethodModel */
/* unused harmony export DurationUnitModel */
/* unused harmony export HazardModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RiskAssessmentViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RiskAssessmentTeamViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RiskAssessmentHazardViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskAssessmentHazardMeasureViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RiskAssessmentHazardReviewViewModel; });
/* unused harmony export HazardListModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RiskAssessmentListFilterModel; });
/* unused harmony export RiskAssessmentListResult */
/* unused harmony export RiskAssessmentListData */
/* unused harmony export SignedUserList */
var MonitoringMethodModel = /** @class */ (function () {
    function MonitoringMethodModel() {
    }
    return MonitoringMethodModel;
}());

var DurationUnitModel = /** @class */ (function () {
    function DurationUnitModel() {
    }
    return DurationUnitModel;
}());

var HazardModel = /** @class */ (function () {
    function HazardModel() {
    }
    return HazardModel;
}());

var RiskAssessmentViewModel = /** @class */ (function () {
    function RiskAssessmentViewModel() {
    }
    return RiskAssessmentViewModel;
}());

var RiskAssessmentTeamViewModel = /** @class */ (function () {
    function RiskAssessmentTeamViewModel() {
    }
    return RiskAssessmentTeamViewModel;
}());

var RiskAssessmentHazardViewModel = /** @class */ (function () {
    function RiskAssessmentHazardViewModel() {
        this.IsReadyForReview = false;
    }
    return RiskAssessmentHazardViewModel;
}());

var RiskAssessmentHazardMeasureViewModel = /** @class */ (function () {
    function RiskAssessmentHazardMeasureViewModel() {
    }
    return RiskAssessmentHazardMeasureViewModel;
}());

var RiskAssessmentHazardReviewViewModel = /** @class */ (function () {
    function RiskAssessmentHazardReviewViewModel() {
    }
    return RiskAssessmentHazardReviewViewModel;
}());

var HazardListModel = /** @class */ (function () {
    function HazardListModel() {
        this.ReviewDate = '';
    }
    return HazardListModel;
}());

var RiskAssessmentListFilterModel = /** @class */ (function () {
    function RiskAssessmentListFilterModel() {
    }
    return RiskAssessmentListFilterModel;
}());

var RiskAssessmentListResult = /** @class */ (function () {
    function RiskAssessmentListResult() {
        this.DateColor = "black";
    }
    return RiskAssessmentListResult;
}());

var RiskAssessmentListData = /** @class */ (function () {
    function RiskAssessmentListData() {
        this.RiskAssessmentListResult = [];
    }
    return RiskAssessmentListData;
}());

var SignedUserList = /** @class */ (function () {
    function SignedUserList() {
    }
    return SignedUserList;
}());

//# sourceMappingURL=riskassessment.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/riskassessment/riskassessment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskAssessmentModule", function() { return RiskAssessmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__riskassessmentlist_component__ = __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessmentlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__riskassessment_component__ = __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessment.component.ts");
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__riskassessment_component__["a" /* RiskAssessmentComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__riskassessmentlist_component__["a" /* RiskAssessmentListComponent */], data: { breadcrumb: 'List' } },
    { path: 'riskassessment', component: __WEBPACK_IMPORTED_MODULE_6__riskassessment_component__["a" /* RiskAssessmentComponent */], data: { breadcrumb: 'Risk Assessment' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__riskassessment_component__["a" /* RiskAssessmentComponent */], data: { breadcrumb: 'Edit' } },
];
var RiskAssessmentModule = /** @class */ (function () {
    function RiskAssessmentModule() {
    }
    RiskAssessmentModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_6__riskassessment_component__["a" /* RiskAssessmentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__riskassessmentlist_component__["a" /* RiskAssessmentListComponent */]
            ]
        })
    ], RiskAssessmentModule);
    return RiskAssessmentModule;
}());

//# sourceMappingURL=riskassessment.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/riskassessment/riskassessment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskAssessmentService; });
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
var RiskAssessmentService = /** @class */ (function () {
    function RiskAssessmentService(http) {
        this.http = http;
    }
    RiskAssessmentService.prototype.getAllHazard = function () {
        return this.http.get(apiURL + '/RiskAssessment/GetAllHazard').map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getAllDurationUnit = function () {
        return this.http.get(apiURL + '/RiskAssessment/GetAllDurationUnit').map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getAllMonitoringMethod = function () {
        return this.http.get(apiURL + '/RiskAssessment/GetAllMonitoringMethod').map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.addUpdateRiskAssessment = function (model) {
        return this.http.post(apiURL + '/RiskAssessment/AddUpdateRiskAssessment', model).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.addUpdateRiskAssessmentHazard = function (model) {
        return this.http.post(apiURL + '/RiskAssessment/AddUpdateRiskAssessmentHazard', model).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getRiskAssessment = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/GetSingleWithTeam?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getHazardList = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/GetHazardListWithRiskAssessmentId?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getRiskAssessmentList = function (filter) {
        return this.http.post(apiURL + '/RiskAssessment/GetRiskAssessmentListData', filter).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.deleteAssessment = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/Delete?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.updateSignatureDate = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/UpdateSignatureDate?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.updateTrainigRequired = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentTrainingRequired?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.updateRiskAssessmentStatus = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentStatus?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getSignedUserList = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/GetSignedUserList?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.updateReviewDate = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/UpdateReviewDate?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.reviewRiskAssessment = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/ReviewRiskAssessment?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService.prototype.getHazardData = function (id) {
        return this.http.get(apiURL + '/RiskAssessment/GetRiskAssessmentHazardData?id=' + id).map(function (response) { return response.json(); });
    };
    RiskAssessmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], RiskAssessmentService);
    return RiskAssessmentService;
    var _a;
}());

//# sourceMappingURL=riskassessment.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/riskassessment/riskassessmentlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <!--<p-footer></p-footer>-->\r\n    <p-column field=\"Area\" header=\"Subject\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"AssessmentDate\" header=\"Date\" [filter]=\"true\" [sortable]=\"true\">\r\n        <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <span [style.color]=\"car.DateColor\">{{car[col.field]}}</span>\r\n            \r\n        </ng-template>\r\n    </p-column>\r\n    <!--<p-column field=\"ReviewDuration\" header=\"Review Duration\"></p-column>\r\n    <p-column field=\"DuratiuonUnit\" header=\"Duratiuon Unit\" [filter]=\"true\" [sortable]=\"true\"></p-column>-->\r\n    <p-column field=\"RiskAssessmentTeam\" header=\"Assessment Team\"></p-column>\r\n    <p-column field=\"Status\" header=\"Status\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>"

/***/ }),

/***/ "../../../../../src/app/pages/riskassessment/riskassessmentlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskAssessmentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__ = __webpack_require__("../../../../../src/app/pages/eventactions/eventaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_service__ = __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__riskassessment_riskassessment_model__ = __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessment.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RiskAssessmentListComponent = /** @class */ (function () {
    function RiskAssessmentListComponent(_RiskAssessmentService, _UserService, router, location, _fb, _dataService, route, _masterDataService) {
        this._RiskAssessmentService = _RiskAssessmentService;
        this._UserService = _UserService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.totalRecords = 0;
    }
    RiskAssessmentListComponent.prototype.ngOnInit = function () {
        this.filterData = new __WEBPACK_IMPORTED_MODULE_9__riskassessment_riskassessment_model__["d" /* RiskAssessmentListFilterModel */]();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Area";
        this.filterData.SortOrder = "asc";
    };
    RiskAssessmentListComponent.prototype.getList = function () {
        var _this = this;
        this._RiskAssessmentService.getRiskAssessmentList(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.RiskAssessmentListResult;
        });
    };
    RiskAssessmentListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/riskassessment/' + event.RiskAssessmentId]);
    };
    RiskAssessmentListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this assessment ?")) {
            this._RiskAssessmentService.deleteAssessment(event.RiskAssessmentId).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    RiskAssessmentListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/riskassessment']);
    };
    RiskAssessmentListComponent.prototype.loadCarsLazy = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.SubjectFilter = event.filters.Area == undefined ? '' : event.filters.Area.value;
        this.filterData.AssessmentDateFilter = event.filters.AssessmentDate == undefined ? '' : event.filters.AssessmentDate.value;
        this.filterData.DurationUnitFilter = event.filters.DuratiuonUnit == undefined ? '' : event.filters.DuratiuonUnit.value;
        //this.filterData.ResponsibleTeamFilter = event.filters.FirstName == undefined ? '' : event.filters.FirstName.value;
        this.getList();
    };
    RiskAssessmentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-riskassessmentlist',
            template: __webpack_require__("../../../../../src/app/pages/riskassessment/riskassessmentlist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */], __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_service__["a" /* RiskAssessmentService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_service__["a" /* RiskAssessmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__riskassessment_riskassessment_service__["a" /* RiskAssessmentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _h || Object])
    ], RiskAssessmentListComponent);
    return RiskAssessmentListComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=riskassessmentlist.component.js.map

/***/ })

});
//# sourceMappingURL=riskassessment.module.chunk.js.map