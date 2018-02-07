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
var assignment_service_1 = require("../assignment/assignment.service");
var assignment_model_1 = require("../assignment/assignment.model");
var AssignmentListComponent = /** @class */ (function () {
    function AssignmentListComponent(_AssignmentService, _UserService, router, location, _fb, _dataService, route, _masterDataService) {
        this._AssignmentService = _AssignmentService;
        this._UserService = _UserService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.totalRecords = 0;
    }
    AssignmentListComponent.prototype.ngOnInit = function () {
        this.filterData = new assignment_model_1.AssignmentListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Title";
        this.filterData.SortOrder = "asc";
    };
    AssignmentListComponent.prototype.getList = function () {
        var _this = this;
        this._AssignmentService.getAssignmentList(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.AssignmentListResult;
        });
    };
    AssignmentListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/assignment/' + event.AssignmentID]);
    };
    AssignmentListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this assessment ?")) {
            this._AssignmentService.deleteAssignment(event.AssignmentID).subscribe(function (res) {
                if (res == 0) {
                    alert("Assignment is Active with a training. Please deactivate from training to Delete.");
                }
                else {
                    _this.getList();
                }
            });
        }
    };
    AssignmentListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/assignment']);
    };
    AssignmentListComponent.prototype.loadCarsLazy = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "Title" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.Title = event.filters.Title == undefined ? '' : event.filters.Title.value;
        this.getList();
    };
    AssignmentListComponent = __decorate([
        core_1.Component({
            selector: 'app-assignmentlist',
            templateUrl: './assignmentlist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, user_service_1.UserService, assignment_service_1.AssignmentService],
        }),
        __metadata("design:paramtypes", [assignment_service_1.AssignmentService, user_service_1.UserService, router_1.Router, common_1.Location, forms_1.FormBuilder, eventaction_service_1.EventActionService, router_1.ActivatedRoute, Mastereventdata_1.MasterEventDataService])
    ], AssignmentListComponent);
    return AssignmentListComponent;
}());
exports.AssignmentListComponent = AssignmentListComponent;
//# sourceMappingURL=assignmentlist.component.js.map