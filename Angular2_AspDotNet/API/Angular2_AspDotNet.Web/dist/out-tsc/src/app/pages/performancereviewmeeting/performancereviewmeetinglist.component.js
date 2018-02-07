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
var PerformanceReviewMeetingListComponent = /** @class */ (function () {
    function PerformanceReviewMeetingListComponent(_meetingService, router, location, _fb, _dataService, route, _masterDataService) {
        this._meetingService = _meetingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.data = [];
        this.totalRecords = 0;
        this.pageNumber = 1;
        this.sortColumn = "SubTitleName";
        this.sortOrder = "asc";
        this.pageSize = 10;
        this.selectedAction = [];
    }
    PerformanceReviewMeetingListComponent.prototype.ngOnInit = function () {
    };
    PerformanceReviewMeetingListComponent.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        this.pageNumber = (event.first / event.rows) + 1;
        this.pageSize = event.rows;
        this.sortColumn = event.sortField;
        this.sortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.SubTitleFilter = event.filters.SubTitleName == undefined ? '' : event.filters.SubTitleName.value;
        this.ActionFilter = this.selectedAction.join(",");
        this.DateFilter = event.filters.MeetingDate == undefined ? '' : event.filters.MeetingDate.value;
        this.LocationFilter = event.filters.LocationName == undefined ? '' : event.filters.LocationName.value;
        this.revieweeUserFilter = event.filters.Reviewee == undefined ? '' : event.filters.Reviewee.value;
        this.reviewerFilter = event.filters.AddedBy == undefined ? '' : event.filters.AddedBy.value;
        this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.ActionFilter, this.SubTitleFilter, this.DateFilter, this.LocationFilter, this.revieweeUserFilter, this.reviewerFilter);
    };
    PerformanceReviewMeetingListComponent.prototype.getList = function (pageNo, pageSize, sortColumn, sortOrder, actionFilter, subTitlNameFilter, dateFilter, locationFilter, revieweeFilter, reviewer) {
        var _this = this;
        this.data = [];
        this._meetingService.getPerformanceReviewMeetingList(pageNo, pageSize, sortColumn, sortOrder, actionFilter, subTitlNameFilter, dateFilter, locationFilter, revieweeFilter, reviewer).subscribe(function (res) {
            _this.data = res.MeetingListModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    PerformanceReviewMeetingListComponent.prototype.editMeeting = function (meetingData) {
        this.router.navigate(['/pages/performancereviewmeeting/' + meetingData.EventID]);
    };
    PerformanceReviewMeetingListComponent.prototype.deletingMeeting = function (meetingData) {
        var _this = this;
        if (confirm("Are you sure want to cancel this meeting ?")) {
            this._masterDataService.deleteEvent(meetingData.EventID).subscribe(function (res) {
                _this.getList(_this.pageNumber, _this.pageSize, _this.sortColumn, _this.sortOrder, _this.ActionFilter, _this.SubTitleFilter, _this.DateFilter, _this.LocationFilter, _this.revieweeUserFilter, _this.reviewerFilter);
            });
        }
    };
    PerformanceReviewMeetingListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/performancereviewmeeting']);
    };
    PerformanceReviewMeetingListComponent = __decorate([
        core_1.Component({
            selector: 'app-performancereviewmeetinglist',
            templateUrl: './performancereviewmeetinglist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, meeting_service_1.MeetingDataService],
        }),
        __metadata("design:paramtypes", [meeting_service_1.MeetingDataService, router_1.Router, common_1.Location, forms_1.FormBuilder, eventaction_service_1.EventActionService, router_1.ActivatedRoute, Mastereventdata_1.MasterEventDataService])
    ], PerformanceReviewMeetingListComponent);
    return PerformanceReviewMeetingListComponent;
}());
exports.PerformanceReviewMeetingListComponent = PerformanceReviewMeetingListComponent;
//# sourceMappingURL=performancereviewmeetinglist.component.js.map