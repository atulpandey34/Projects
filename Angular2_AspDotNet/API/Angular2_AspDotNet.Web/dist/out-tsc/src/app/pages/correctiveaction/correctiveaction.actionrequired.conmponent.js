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
var CorrectiveActionRequiredComponent = /** @class */ (function () {
    function CorrectiveActionRequiredComponent(_CorrectiveActionService, router, location, _fb, _dataService, route, _masterDataService) {
        this._CorrectiveActionService = _CorrectiveActionService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.actionID = 0;
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
    CorrectiveActionRequiredComponent.prototype.onResponsiblePersonChange = function (s) {
    };
    CorrectiveActionRequiredComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataModel = new correctiveaction_model_1.CorrectiveActionDataModel();
        dataModel.AssignedBy = sessionStorage["UserId"];
        this.addhtmltoform(dataModel);
        this.route.params.subscribe(function (params) {
            _this.actionID = params['id']; //log the value of id
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
        if (this.actionID > 0) {
            this._CorrectiveActionService.getCorrectiveActionByActionId(this.actionID).subscribe(function (res) {
                _this.addhtmltoform(res);
            });
        }
    };
    CorrectiveActionRequiredComponent.prototype.addhtmltoform = function (actionModel) {
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
        });
    };
    CorrectiveActionRequiredComponent.prototype.saveeventformdata = function (data) {
        var _this = this;
        data.Duedate = new Date(data.dueDateStruct.year, data.dueDateStruct.month - 1, data.dueDateStruct.day).toLocaleDateString();
        this._CorrectiveActionService.addCorrectiveActionFromAction(data).subscribe(function (res) {
            if (res == "added successfully") {
                _this.router.navigate(['/pages/correctiveaction/list']);
            }
        });
    };
    CorrectiveActionRequiredComponent = __decorate([
        core_1.Component({
            selector: 'app-correctiveactionrequiored',
            templateUrl: './correctiveaction.actionrequired.conmponent.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css'
            ],
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, correctiveaction_service_1.CorrectiveActionService],
        }),
        __metadata("design:paramtypes", [correctiveaction_service_1.CorrectiveActionService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, eventaction_service_1.EventActionService, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, Mastereventdata_1.MasterEventDataService])
    ], CorrectiveActionRequiredComponent);
    return CorrectiveActionRequiredComponent;
    var _a, _b, _c, _d;
}());
exports.CorrectiveActionRequiredComponent = CorrectiveActionRequiredComponent;
//# sourceMappingURL=correctiveaction.actionrequired.conmponent.js.map