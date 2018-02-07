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
var riskassessment_model_1 = require("../riskassessment/riskassessment.model");
var riskassessment_service_1 = require("../riskassessment/riskassessment.service");
var user_service_1 = require("../user/user.service");
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
        var model = new riskassessment_model_1.RiskAssessmentViewModel();
        this.addhtmltoform(model);
        this.addHazaradModelToForm(new riskassessment_model_1.RiskAssessmentHazardViewModel());
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
            Area: [viewModel.Area, forms_1.Validators.required],
            AssessmentDateDateStruct: [{ year: new Date(viewModel.AssessmentDate).getFullYear(), month: new Date(viewModel.AssessmentDate).getMonth() + 1, day: new Date(viewModel.AssessmentDate).getDate() }, forms_1.Validators.required],
            ReviewDuration: [viewModel.ReviewDuration, forms_1.Validators.required],
            ReviewDurationUnit: [viewModel.ReviewDurationUnit, forms_1.Validators.required],
            RiskAssessmentTeam: [team, forms_1.Validators.required],
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
            HazardId: [viewModel.HazardId, forms_1.Validators.required],
            RiskAssessmentId: [this.riskAssessmentId],
            IsReadyForReview: [viewModel.IsReadyForReview],
            Description: [viewModel.Description, forms_1.Validators.required],
            RiskAssessmentHazardMeasureViewModel: this._fb.array([
                this.initRiskAssessmentHazardMeasure(new riskassessment_model_1.RiskAssessmentHazardMeasureViewModel())
            ]),
            RiskAssessmentHazardReviewViewModel: this._fb.array([
                this.initRiskAssessmentHazardReview(new riskassessment_model_1.RiskAssessmentHazardReviewViewModel())
            ])
        });
    };
    RiskAssessmentComponent.prototype.initRiskAssessmentHazardMeasure = function (viewModel) {
        return this._fb.group({
            RiskAssessmentHazardMeasureId: [viewModel.RiskAssessmentHazardMeasureId],
            RiskAssessmentId: [this.riskAssessmentId],
            RiskAssessmentHazardId: [viewModel.RiskAssessmentHazardId],
            Text: [viewModel.Text, forms_1.Validators.required],
            ActionId: [viewModel.ActionId],
            DateAdded: [viewModel.DateAdded]
        });
    };
    RiskAssessmentComponent.prototype.initRiskAssessmentHazardReview = function (viewModel) {
        return this._fb.group({
            RiskAssessmentHazardReviewId: [viewModel.RiskAssessmentHazardReviewId],
            RiskAssessmentHazardId: [viewModel.RiskAssessmentHazardId],
            Consequence: [viewModel.Consequence, forms_1.Validators.required],
            Likelihood: [viewModel.Likelihood, forms_1.Validators.required],
            CreatedDate: [viewModel.CreatedDate],
            UpdatedDate: [viewModel.UpdatedDate],
            ReviewDate: [viewModel.ReviewDate],
            MonitoringMethodId: [viewModel.MonitoringMethodId, forms_1.Validators.required]
        });
    };
    RiskAssessmentComponent.prototype.AddMoreHazard = function () {
        var control = this.myForm.controls['RiskAssessmentHazardViewModel'];
        control.push(this.initRiskAssessmentHazard(new riskassessment_model_1.RiskAssessmentHazardViewModel()));
    };
    RiskAssessmentComponent.prototype.RemoveHazard = function (i) {
        var control = this.myForm.controls['RiskAssessmentHazardViewModel'];
        control.removeAt(i);
    };
    RiskAssessmentComponent.prototype.AddMoreMeasure = function (model) {
        if (model === void 0) { model = new riskassessment_model_1.RiskAssessmentHazardMeasureViewModel(); }
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
                var team = new riskassessment_model_1.RiskAssessmentTeamViewModel();
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
                _this.addHazaradModelToForm(new riskassessment_model_1.RiskAssessmentHazardViewModel());
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
            OldPassword: new forms_1.FormControl(password, [forms_1.Validators.required, forms_1.Validators.minLength(8), this.validatePassword.bind(this)])
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
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "closeDialog", void 0);
    __decorate([
        core_1.ViewChild('hazardDropdown'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "hazardDropdown", void 0);
    __decorate([
        core_1.ViewChild('hazardDescription'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "hazardDescription", void 0);
    __decorate([
        core_1.ViewChild('buttonComplete'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "buttonComplete", void 0);
    __decorate([
        core_1.ViewChild('buttonTraining'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "buttonTraining", void 0);
    __decorate([
        core_1.ViewChild('buttonSignature'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "buttonSignature", void 0);
    __decorate([
        core_1.ViewChild('buttonReview'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "buttonReview", void 0);
    __decorate([
        core_1.ViewChild('closeDialogTraining'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "closeDialogTraining", void 0);
    __decorate([
        core_1.ViewChild('trainingRequiredCheckbox'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "trainingRequiredCheckbox", void 0);
    __decorate([
        core_1.ViewChild('closeDialogSignature'),
        __metadata("design:type", Object)
    ], RiskAssessmentComponent.prototype, "closeDialogSignature", void 0);
    RiskAssessmentComponent = __decorate([
        core_1.Component({
            selector: 'app-riskassessment',
            templateUrl: './riskassessment.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                "./riskassessment.component.css"
            ],
            providers: [user_service_1.UserService, eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, meeting_service_1.MeetingDataService, riskassessment_service_1.RiskAssessmentService],
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, riskassessment_service_1.RiskAssessmentService, meeting_service_1.MeetingDataService, router_1.Router, common_1.Location, forms_1.FormBuilder, eventaction_service_1.EventActionService, router_1.ActivatedRoute, Mastereventdata_1.MasterEventDataService])
    ], RiskAssessmentComponent);
    return RiskAssessmentComponent;
}());
exports.RiskAssessmentComponent = RiskAssessmentComponent;
//# sourceMappingURL=riskassessment.component.js.map