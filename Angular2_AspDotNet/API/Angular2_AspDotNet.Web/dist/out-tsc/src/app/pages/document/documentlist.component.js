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
var document_service_1 = require("../document/document.service");
var document_model_1 = require("../document/document.model");
var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(_DocumentService, router, location, _fb, route) {
        this._DocumentService = _DocumentService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.totalRecords = 0;
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        this.filterData = new document_model_1.DocumentListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "DocumentName";
        this.filterData.SortOrder = "asc";
    };
    DocumentListComponent.prototype.getList = function () {
        var _this = this;
        this._DocumentService.getDocumentList(this.filterData)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.DocumentListResult;
        });
    };
    DocumentListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/document/' + event.DocumentID]);
    };
    DocumentListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this document ?")) {
            this._DocumentService.deleteDocument(event.DocumentID).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    DocumentListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/document']);
    };
    DocumentListComponent.prototype.loadDocumentList = function (event) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "DocumentName" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.DocumentName = event.filters.DocumentName == undefined ? '' : event.filters.DocumentName.value;
        this.filterData.UploadBy = event.filters.UploadedBy == undefined ? '' : event.filters.UploadedBy.value;
        this.filterData.Version = event.filters.VersionNumber == undefined ? '' : event.filters.VersionNumber.value;
        this.filterData.Review = event.filters.Review == undefined ? '' : event.filters.Review.value;
        this.filterData.Type = event.filters.DocumentType == undefined ? '' : event.filters.DocumentType.value;
        this.getList();
    };
    DocumentListComponent = __decorate([
        core_1.Component({
            selector: 'app-documentlist',
            templateUrl: './documentlist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [document_service_1.DocumentService],
        }),
        __metadata("design:paramtypes", [document_service_1.DocumentService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object])
    ], DocumentListComponent);
    return DocumentListComponent;
    var _a, _b, _c, _d;
}());
exports.DocumentListComponent = DocumentListComponent;
//# sourceMappingURL=documentlist.component.js.map