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
var user_service_1 = require("../user/user.service");
var riskassessment_service_1 = require("../riskassessment/riskassessment.service");
var riskassessment_model_1 = require("../riskassessment/riskassessment.model");
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
        this.filterData = new riskassessment_model_1.RiskAssessmentListFilterModel();
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
        core_1.Component({
            selector: 'app-riskassessmentlist',
            templateUrl: './riskassessmentlist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, user_service_1.UserService, riskassessment_service_1.RiskAssessmentService],
        }),
        __metadata("design:paramtypes", [riskassessment_service_1.RiskAssessmentService, user_service_1.UserService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, eventaction_service_1.EventActionService, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, Mastereventdata_1.MasterEventDataService])
    ], RiskAssessmentListComponent);
    return RiskAssessmentListComponent;
    var _a, _b, _c, _d;
}());
exports.RiskAssessmentListComponent = RiskAssessmentListComponent;
//# sourceMappingURL=riskassessmentlist.component.js.map