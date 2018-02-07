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
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var organization_service_1 = require("../organization/organization.service");
var organization_model_1 = require("../organization/organization.model");
var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(_OrganizationService, router, location, _fb, route) {
        this._OrganizationService = _OrganizationService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.totalRecords = 0;
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        this.filterData = new organization_model_1.OrganizationListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "OrganizationName";
        this.filterData.SortOrder = "asc";
    };
    DocumentListComponent.prototype.getList = function () {
        var _this = this;
        this._OrganizationService.getOrganizationListData(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.OrganizationListResult;
        });
    };
    DocumentListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/organization/' + event.OrganizationID]);
    };
    DocumentListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to deactivate this organization ?")) {
            this._OrganizationService.deleteOrganization(event.OrganizationID).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    DocumentListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/organization']);
    };
    DocumentListComponent.prototype.loadOrganizationList = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "OrganizationName" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.OrganizationName = event.filters.OrganizationName == undefined ? '' : event.filters.OrganizationName.value;
        this.filterData.OrganizationAddress = event.filters.OrganizationAddress == undefined ? '' : event.filters.OrganizationAddress.value;
        this.getList();
    };
    DocumentListComponent = __decorate([
        core_1.Component({
            selector: 'app-organizationlist',
            templateUrl: './organizationlist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [organization_service_1.OrganizationService],
        }),
        __metadata("design:paramtypes", [organization_service_1.OrganizationService, router_1.Router, common_1.Location, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], DocumentListComponent);
    return DocumentListComponent;
}());
exports.DocumentListComponent = DocumentListComponent;
//# sourceMappingURL=organizationlist.component.js.map