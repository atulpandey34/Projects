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
var UserListComponent = /** @class */ (function () {
    function UserListComponent(_UserService, router, location, _fb, _dataService, route, _masterDataService) {
        this._UserService = _UserService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.isAdminUser = sessionStorage["RoleId"].indexOf(1) > -1 ? true : false;
        this.totalRecords = 0;
        this.pageNumber = 1;
        this.sortColumn = "UserName";
        this.sortOrder = "asc";
        this.pageSize = 10;
        this.organizationFilter = '';
        this.roleFilter = '';
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.loadCarsLazy = function (event) {
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
        this.organizationFilter = event.filters.OrganizationName == undefined ? '' : event.filters.OrganizationName.value;
        this.roleFilter = event.filters.RoleName == undefined ? '' : event.filters.RoleName.value;
        this.userNameFilter = event.filters.UserName == undefined ? '' : event.filters.UserName.value;
        this.firstNameFilter = event.filters.FirstName == undefined ? '' : event.filters.FirstName.value;
        this.lastNameFilter = event.filters.LastName == undefined ? '' : event.filters.LastName.value;
        this.emailIdFilter = event.filters.EmailID == undefined ? '' : event.filters.EmailID.value;
        if (event.filters.InActiveText != undefined) {
            if (event.filters.InActiveText.value.toLocaleLowerCase() == "yes")
                this.inactiveFilter = true;
            else
                this.inactiveFilter = false;
        }
        else
            this.inactiveFilter = null;
        this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.organizationFilter, this.roleFilter, this.userNameFilter, this.firstNameFilter, this.lastNameFilter, this.emailIdFilter, this.inactiveFilter);
    };
    UserListComponent.prototype.getList = function (pageNo, pageSize, sortColumn, sortOrder, organizationFilter, roleFilter, userName, firstName, lastName, emailId, inactiveFilter) {
        var _this = this;
        this._UserService.getAllUser(pageNo, pageSize, sortColumn, sortOrder, organizationFilter, roleFilter, userName, firstName, lastName, emailId, inactiveFilter)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.UserViewListModel;
        });
    };
    UserListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/user/' + event.UserID]);
    };
    UserListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this user ?")) {
            this._UserService.deleteUser(event.UserID).subscribe(function (res) {
                _this.getList(_this.pageNumber, _this.pageSize, _this.sortColumn, _this.sortOrder, _this.organizationFilter, _this.roleFilter, _this.userNameFilter, _this.firstNameFilter, _this.lastNameFilter, _this.emailIdFilter, _this.inactiveFilter);
            });
        }
    };
    UserListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/user']);
    };
    UserListComponent.prototype.resetPassword = function (event) {
        if (confirm("Are you sure want to reset password for this user ?")) {
            this._UserService.resetPassword(event.UserID).subscribe();
        }
    };
    UserListComponent.prototype.inactiveUser = function (event) {
        var _this = this;
        if (confirm("Are you sure want to change status of this user ?")) {
            this._UserService.inactiveUser(event.UserID, !event.InActive).subscribe(function (res) { _this.getList(_this.pageNumber, _this.pageSize, _this.sortColumn, _this.sortOrder, _this.organizationFilter, _this.roleFilter, _this.userNameFilter, _this.firstNameFilter, _this.lastNameFilter, _this.emailIdFilter, _this.inactiveFilter); });
        }
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'app-meetinglist',
            templateUrl: './userlist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, user_service_1.UserService],
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, common_1.Location, forms_1.FormBuilder, eventaction_service_1.EventActionService, router_1.ActivatedRoute, Mastereventdata_1.MasterEventDataService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userlist.component.js.map