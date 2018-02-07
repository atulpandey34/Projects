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
var eventaction_service_1 = require("../eventactions/eventaction.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var EventActionComponent = /** @class */ (function () {
    function EventActionComponent(router, location, _fb, _dataService, route, _masterDataService) {
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.eventActionStatusList = [];
        this.data = [];
        this.totalRecords = 0;
        this.pageNumber = 1;
        this.sortColumn = "Title";
        this.sortOrder = "asc";
        this.pageSize = 10;
        this.titleFilter = '';
        this.dueDateFilter = '';
        this.statusFilter = '';
        this.organizerFilter = '';
        this.evantActionStatusFilter = [
            { value: 'To-Do', title: 'To-Do7622' },
            { value: 'In-Progress', title: 'In-Progresser' },
            { value: 'Completed', title: 'Completeder' },
            { value: 'Archived', title: 'Archived' }
        ];
    }
    EventActionComponent.prototype.ngOnInit = function () {
        //this._masterDataService.getEventActionStatusList().subscribe((res: EventActionStatusModel[]) => {
        //    this.eventActionStatusList = [];
        //    for (let eventAction of res) {
        //        let eve: EventActionStatusModel = new EventActionStatusModel();
        //        eve.EventActionStatusID = eventAction.EventActionStatusID;
        //        eve.ActionName = eventAction.ActionName;
        //        this.eventActionStatusList.push(
        //            eve);
        //        //this.evantActionStatusFilter.push({ title: eventAction.ActionName, value: eventAction.EventActionStatusID.toString() });
        //    }
        //});
        //this.getData((data) => {
        //});
    };
    EventActionComponent.prototype.getEventActionStatus = function () {
        var _this = this;
        this._masterDataService.getEventActionStatusList().subscribe(function (res) {
            _this.eventActionStatusList = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var eventAction = res_1[_i];
                _this.evantActionStatusFilter.push({ title: eventAction.ActionName, value: eventAction.EventActionStatusID.toString() });
            }
            return _this.evantActionStatusFilter;
        });
    };
    EventActionComponent.prototype.loadCarsLazy = function (event) {
        this.pageNumber = (event.first / event.rows) + 1;
        this.pageSize = event.rows;
        this.sortColumn = event.sortField;
        this.sortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.titleFilter = event.filters.Title == undefined ? '' : event.filters.Title.value;
        this.dueDateFilter = event.filters.Duedate == undefined ? '' : event.filters.Duedate.value;
        this.statusFilter = event.filters.EventActionStatusText == undefined ? '' : event.filters.EventActionStatusText.value;
        this.organizerFilter = event.filters.AddedBy == undefined ? '' : event.filters.AddedBy.value;
        this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.titleFilter, this.dueDateFilter, this.statusFilter, this.organizerFilter);
    };
    EventActionComponent.prototype.getList = function (pageNo, pageSize, sortColumn, sortOrder, titleFilter, dueDateFilter, statusFilter, organizerFilter) {
        var _this = this;
        this._dataService.getActionList(pageNo, pageSize, sortColumn, sortOrder, titleFilter, dueDateFilter, statusFilter, organizerFilter).subscribe(function (res) {
            _this.data = res.ActionListing;
            _this.totalRecords = res.TotalRecords;
        });
    };
    EventActionComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/action/' + event.ActionID]);
    };
    EventActionComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to archive this action ?")) {
            this._dataService.deleteAction(event.ActionID).subscribe(function (res) {
                _this.getList(_this.pageNumber, _this.pageSize, _this.sortColumn, _this.sortOrder, _this.titleFilter, _this.dueDateFilter, _this.statusFilter, _this.organizerFilter);
            });
        }
    };
    EventActionComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/action']);
    };
    EventActionComponent = __decorate([
        core_1.Component({
            selector: 'app-eventaction',
            templateUrl: './eventaction.list.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService],
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, eventaction_service_1.EventActionService, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, Mastereventdata_1.MasterEventDataService])
    ], EventActionComponent);
    return EventActionComponent;
    var _a, _b, _c, _d;
}());
exports.EventActionComponent = EventActionComponent;
//# sourceMappingURL=eventaction.list.component.js.map