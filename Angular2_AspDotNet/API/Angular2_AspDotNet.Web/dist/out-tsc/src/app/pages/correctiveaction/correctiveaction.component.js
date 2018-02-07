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
var formeventdata_1 = require("../calendar/formeventdata");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var correctiveaction_service_1 = require("../correctiveaction/correctiveaction.service");
var correctiveaction_model_1 = require("../correctiveaction/correctiveaction.model");
var CorrectiveActionComponent = /** @class */ (function () {
    function CorrectiveActionComponent(_CorrectiveActionService, router, location, _fb, _dataService, route, _masterDataService) {
        this._CorrectiveActionService = _CorrectiveActionService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.disabledAllControl = false;
        this.hiddenControl = true;
        this.correctiveActionID = 0;
        this.responsiblePersonOptions = [];
        this.eventActionStatusList = [];
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
        this.actionSourceList = [];
        this.categoryList = [];
        this.acitonCommentList = [];
    }
    CorrectiveActionComponent.prototype.onResponsiblePersonChange = function (s) {
    };
    CorrectiveActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataModel = new correctiveaction_model_1.CorrectiveActionDataModel();
        dataModel.AssignedBy = sessionStorage["UserId"];
        this.addhtmltoform(dataModel);
        var control = this.myForm.controls['resultList'];
        control.removeAt(0);
        this.route.params.subscribe(function (params) {
            _this.correctiveActionID = params['id']; //log the value of id
        });
        this._masterDataService.getEventActionStatusList().subscribe(function (res) {
            _this.eventActionStatusList = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var eventAction = res_1[_i];
                var eve = new formeventdata_1.EventActionStatusModel();
                eve.EventActionStatusID = eventAction.EventActionStatusID;
                eve.ActionName = eventAction.ActionName;
                _this.eventActionStatusList.push(eve);
            }
        });
        this._masterDataService.getUserList().subscribe(function (res) { _this.myOptions = res; _this.responsiblePersonOptions = res; });
        this._dataService.getAllCategories().subscribe(function (res) { _this.categoryList = res; });
        this._dataService.getAllActionSource().subscribe(function (res) { _this.actionSourceList = res; });
        this._dataService.getAllCorrectedAction().subscribe(function (res) {
            _this.correctiveList = res;
        });
        if (this.correctiveActionID > 0) {
            this.disabledAllControl = true;
            this.hiddenControl = false;
            this._CorrectiveActionService.getCorrectiveActionData(this.correctiveActionID).subscribe(function (res) {
                _this.addhtmltoform(res);
                //control.removeAt(0);
                for (var _i = 0, _a = res.ResultList; _i < _a.length; _i++) {
                    var x = _a[_i];
                    control.push(_this.initResult(x));
                }
            });
        }
    };
    CorrectiveActionComponent.prototype.RemoveList = function (i) {
        var control = this.myForm.controls['resultList'];
        control.removeAt(i);
    };
    CorrectiveActionComponent.prototype.AddMoreResultList = function () {
        // add action to the list
        var control = this.myForm.controls['resultList'];
        control.push(this.initResult());
    };
    CorrectiveActionComponent.prototype.addhtmltoform = function (actionModel) {
        if (actionModel.ActionResponsiblePersonDataModel == null || actionModel.ActionResponsiblePersonDataModel == undefined)
            actionModel.ActionResponsiblePersonDataModel = [new formeventdata_1.ActionResponsiblePersonDataModel()];
        this.myForm = this._fb.group({
            ActionID: [actionModel.ActionID],
            CorrectiveActionId: [actionModel.CorrectiveActionId],
            Title: [actionModel.Title, forms_1.Validators.required],
            dueDateStruct: [{ year: new Date(actionModel.Duedate).getFullYear(), month: new Date(actionModel.Duedate).getMonth() + 1, day: new Date(actionModel.Duedate).getDate() }, forms_1.Validators.required],
            CategoryID: [actionModel.CategoryID],
            ActionSourceID: [actionModel.ActionSourceID],
            RootCause: [actionModel.RootCause],
            AssignedBy: [actionModel.AssignedBy, forms_1.Validators.required],
            ActionTaken: [actionModel.ActionTaken, forms_1.Validators.required],
            CorrectiveActionNeeded: [actionModel.CorrectiveActionNeeded],
            IdentifiedCorrectiveAction: [actionModel.IdentifiedCorrectiveAction],
            RiskLevel: [actionModel.RiskLevel],
            ResponsibleParty: [actionModel.ResponsibleParty],
            CorrectiveActionDueDateStruct: [{ year: new Date(actionModel.CorrectiveActionDueDate).getFullYear(), month: new Date(actionModel.CorrectiveActionDueDate).getMonth() + 1, day: new Date(actionModel.CorrectiveActionDueDate).getDate() }, forms_1.Validators.required],
            IssueResolved: [actionModel.IssueResolved],
            dateResolved: [{ year: new Date(actionModel.DateResolved).getFullYear(), month: new Date(actionModel.DateResolved).getMonth() + 1, day: new Date(actionModel.DateResolved).getDate() }, forms_1.Validators.required],
            actionResponsiblePersonDataModel: [actionModel.ActionResponsiblePersonDataModel.map(function (x) { return x.UserID; }), forms_1.Validators.required],
            resultList: this._fb.array([
                this.initResult()
            ]),
        });
    };
    CorrectiveActionComponent.prototype.initResult = function (result) {
        if (result === void 0) { result = ''; }
        return this._fb.group({
            Result: [result, forms_1.Validators.required],
        });
    };
    CorrectiveActionComponent.prototype.saveeventformdata = function (data) {
        var _this = this;
        data.ResultList = [];
        data.ActionResponsiblePersonDataModel = [];
        data.Duedate = new Date(data.dueDateStruct.year, data.dueDateStruct.month - 1, data.dueDateStruct.day).toLocaleDateString();
        data.DateResolved = new Date(data.dateResolved.year, data.dateResolved.month - 1, data.dateResolved.day).toLocaleDateString();
        if (data != null && data.actionResponsiblePersonDataModel != null && data.actionResponsiblePersonDataModel.length > 0) {
            for (var _i = 0, _a = data.actionResponsiblePersonDataModel; _i < _a.length; _i++) {
                var childModel = _a[_i];
                if (childModel != undefined) {
                    var childdata = new formeventdata_1.ActionResponsiblePersonDataModel();
                    childdata.UserID = childModel;
                    data.ActionResponsiblePersonDataModel.push(childdata);
                }
            }
        }
        if (data.CorrectiveActionDueDateStruct.year != NaN)
            data.CorrectiveActionDueDate = new Date(data.CorrectiveActionDueDateStruct.year, data.CorrectiveActionDueDateStruct.month - 1, data.CorrectiveActionDueDateStruct.day).toLocaleDateString();
        var d = (data.resultList);
        for (var i = 0; i < d.length; i++) {
            var dString = d[i].Result;
            data.ResultList.push(dString);
        }
        this._CorrectiveActionService.addCorrectiveActionFromAction(data).subscribe(function (res) {
            if (res == "added successfully") {
                _this.router.navigate(['/pages/correctiveaction/list']);
            }
        });
    };
    CorrectiveActionComponent = __decorate([
        core_1.Component({
            selector: 'app-correctiveaction',
            templateUrl: './correctiveaction.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css'
            ],
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, correctiveaction_service_1.CorrectiveActionService],
        }),
        __metadata("design:paramtypes", [correctiveaction_service_1.CorrectiveActionService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, eventaction_service_1.EventActionService, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, Mastereventdata_1.MasterEventDataService])
    ], CorrectiveActionComponent);
    return CorrectiveActionComponent;
    var _a, _b, _c, _d;
}());
exports.CorrectiveActionComponent = CorrectiveActionComponent;
//# sourceMappingURL=correctiveaction.component.js.map