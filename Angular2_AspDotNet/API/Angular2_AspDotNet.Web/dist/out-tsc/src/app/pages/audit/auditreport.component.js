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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var audit_model_1 = require("../audit/audit.model");
var audit_service_1 = require("../audit/audit.service");
var environment_1 = require("../../../environments/environment");
var apiURL = environment_1.environment.apiEndpoint;
var FileSaver = require("file-saver");
var jsPDF = require("jspdf");
var html2canvas = require("html2canvas");
var AuditReportComponent = /** @class */ (function () {
    function AuditReportComponent(_AuditService, route, router, location) {
        this._AuditService = _AuditService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.AuditID = 0;
        this.AuditReportObj = new audit_model_1.AuditReport();
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    AuditReportComponent.prototype.ngOnInit = function () {
        this.onload();
    };
    AuditReportComponent.prototype.onload = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.AuditID = params['auditid']; //log the value of id
        });
        this._AuditService.getAuditReport(this.AuditID).subscribe(function (res) {
            _this.AuditReportObj = res.AuditReport;
        });
    };
    AuditReportComponent.prototype.downloadMaterial = function (id, fileName) {
        this._AuditService.downloadMaterial(id).subscribe(function (res) {
            FileSaver.saveAs(res, fileName);
        });
    };
    AuditReportComponent.prototype.downloadPdf = function () {
        var doc = new jsPDF();
        // Add a title to your PDF
        doc.setFontSize(30);
        doc.text(12, 10, "Audit Report");
        // Create your table here (The dynamic table needs to be converted to canvas).
        var element = document.getElementsByClassName("auditreport")[0];
        html2canvas(element)
            .then(function (canvas) {
            doc.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 5, 20, doc.internal.pageSize.width - 10, element.offsetHeight / 5);
            doc.save("Report-" + Date.now() + ".pdf");
        });
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], AuditReportComponent.prototype, "closeDialog", void 0);
    AuditReportComponent = __decorate([
        core_1.Component({
            selector: 'app-auditreport',
            templateUrl: './auditreport.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [audit_service_1.AuditService, { provide: 'Window', useValue: window }],
        }),
        __metadata("design:paramtypes", [audit_service_1.AuditService, typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object])
    ], AuditReportComponent);
    return AuditReportComponent;
    var _a, _b, _c;
}());
exports.AuditReportComponent = AuditReportComponent;
//# sourceMappingURL=auditreport.component.js.map