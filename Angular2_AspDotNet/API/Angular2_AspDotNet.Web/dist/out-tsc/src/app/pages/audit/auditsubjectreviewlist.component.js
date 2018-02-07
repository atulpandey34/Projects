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
var audit_service_1 = require("../audit/audit.service");
var audit_model_1 = require("../audit/audit.model");
var AuditSubjectReviewListComponent = /** @class */ (function () {
    function AuditSubjectReviewListComponent(_AuditService, router, location, _fb, route) {
        this._AuditService = _AuditService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.totalRecords = 0;
    }
    AuditSubjectReviewListComponent.prototype.ngOnInit = function () {
        this.filterData = new audit_model_1.AuditSubjectListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Subject";
        this.filterData.SortOrder = "asc";
    };
    AuditSubjectReviewListComponent.prototype.getList = function () {
        var _this = this;
        this._AuditService.getAuditSubjectListData(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.AuditSubjectListResult;
        });
    };
    AuditSubjectReviewListComponent.prototype.redirectToEditAuditReviewPage = function (event) {
        this.router.navigate(['/pages/audit/review/' + event.AuditSubjectID + '/' + event.AuditSubjectReviewID]);
    };
    //public deleteAudit(event: AuditListResult) {
    //    if (confirm("Are you sure want to delete this audit ?")) {
    //        this._AuditService.deleteAudit(event.AuditID).subscribe(res => {
    //            this.getList();
    //        });
    //    }
    //}
    AuditSubjectReviewListComponent.prototype.loadAuditorSubjectList = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "Subject" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.Subject = event.filters.Subject == undefined ? '' : event.filters.Subject.value;
        this.filterData.Auditee = event.filters.Auditee == undefined ? '' : event.filters.Auditee.value;
        this.filterData.Location = event.filters.Location == undefined ? '' : event.filters.Location.value;
        this.filterData.PlannedAuditDate = event.filters.PlannedAuditDate == undefined ? '' : event.filters.PlannedAuditDate.value;
        this.getList();
    };
    AuditSubjectReviewListComponent = __decorate([
        core_1.Component({
            selector: 'app-auditsubjectreviewlist',
            templateUrl: './auditsubjectreviewlist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [audit_service_1.AuditService],
        }),
        __metadata("design:paramtypes", [audit_service_1.AuditService, router_1.Router, common_1.Location, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], AuditSubjectReviewListComponent);
    return AuditSubjectReviewListComponent;
}());
exports.AuditSubjectReviewListComponent = AuditSubjectReviewListComponent;
//# sourceMappingURL=auditsubjectreviewlist.component.js.map