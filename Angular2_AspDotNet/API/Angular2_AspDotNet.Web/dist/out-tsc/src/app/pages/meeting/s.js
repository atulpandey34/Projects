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
var apiURL = "http://localriskmanagementapi.com/api";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var eventaction_service_1 = require("../eventactions/eventaction.service");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var meeting_service_1 = require("./meeting.service");
var MeetingListComponent = /** @class */ (function () {
    function MeetingListComponent(_meetingService, router, location, _fb, _dataService, route, _masterDataService) {
        this._meetingService = _meetingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.data = [];
        this.totalRecords = 0;
    }
    MeetingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._meetingService.getMeetingList(1, 10, "", "", "", "", "", "").subscribe(function (res) {
            _this.data = res.MeetingListModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    MeetingListComponent.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
    };
    MeetingListComponent = __decorate([
        core_1.Component({
            selector: 'app-meetinglist',
            templateUrl: './meetinglist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService],
        }),
        __metadata("design:paramtypes", [meeting_service_1.MeetingDataService, router_1.Router, common_1.Location, forms_1.FormBuilder, eventaction_service_1.EventActionService, router_1.ActivatedRoute, Mastereventdata_1.MasterEventDataService])
    ], MeetingListComponent);
    return MeetingListComponent;
}());
exports.MeetingListComponent = MeetingListComponent;
//# sourceMappingURL=s.js.map