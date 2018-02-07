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
var AuditListComponent = /** @class */ (function () {
    function AuditListComponent(_AuditService, router, location, _fb, route) {
        this._AuditService = _AuditService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        //AuditSubjectsModel: AuditSubject[] = [];
        this.AuditSubjectsReviewModel = [];
        this.totalRecords = 0;
    }
    AuditListComponent.prototype.ngOnInit = function () {
        this.filterData = new audit_model_1.AuditListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Title";
        this.filterData.SortOrder = "asc";
    };
    AuditListComponent.prototype.getList = function () {
        var _this = this;
        this._AuditService.getAuditListData(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.AuditListResult;
        });
    };
    AuditListComponent.prototype.getAuditSubjectsData = function (auditid) {
        var _this = this;
        this._AuditService.getSingleAudit(auditid).subscribe(function (res) {
            _this.AuditSubjectsReviewModel = res.AuditSubjectReviews = res.AuditSubjectReviews.filter(function (x) { return x.IsDeleted == false; });
            var _loop_1 = function (asr) {
                var asub = res.AuditSubjects.filter(function (x) { return x.AuditSubjectID == asr.SubjectID && x.IsDeleted == false; })[0];
                if (asub != undefined && asub != null) {
                    asr.Subject = asub.Subject;
                }
            };
            for (var _i = 0, _a = res.AuditSubjectReviews; _i < _a.length; _i++) {
                var asr = _a[_i];
                _loop_1(asr);
            }
        });
    };
    AuditListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/audit/' + event.AuditID]);
    };
    AuditListComponent.prototype.redirectToViewReportPage = function (event) {
        this.router.navigate(['/pages/audit/report/' + event.AuditID]);
    };
    AuditListComponent.prototype.deleteAudit = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this audit ?")) {
            this._AuditService.deleteAudit(event.AuditID).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    AuditListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/audit']);
    };
    AuditListComponent.prototype.loadAuditorList = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "Title" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.Title = event.filters.Title == undefined ? '' : event.filters.Title.value;
        this.filterData.Scope = event.filters.Scope == undefined ? '' : event.filters.Scope.value;
        //this.filterData.AuditorName = event.filters.AuditorName == undefined ? '' : event.filters.AuditorName.value;
        this.getList();
    };
    AuditListComponent = __decorate([
        core_1.Component({
            selector: 'app-auditlist',
            templateUrl: './auditlist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [audit_service_1.AuditService],
        }),
        __metadata("design:paramtypes", [audit_service_1.AuditService, router_1.Router, common_1.Location, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], AuditListComponent);
    return AuditListComponent;
}());
exports.AuditListComponent = AuditListComponent;
//# sourceMappingURL=auditlist.component.js.map