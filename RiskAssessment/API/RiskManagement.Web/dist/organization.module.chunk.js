webpackJsonp(["organization.module"],{

/***/ "../../../../../src/app/pages/organization/organization.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myFormOrganization\" novalidate (ngSubmit)=\"SaveOrganizationFormData(myFormOrganization.value)\">\r\n    <div style=\"margin-top:10px;\">\r\n        <div style=\"margin:20px;\">\r\n            <div class=\"form-group\">\r\n                <label>Organization Name</label>\r\n                <input type=\"text\" formControlName=\"OrganizationName\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                <small [hidden]=\"myFormOrganization.controls.OrganizationName.valid\" class=\"text-danger\">\r\n                    Organization Name is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Address Line</label>\r\n                <input type=\"text\" formControlName=\"AddressLine\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                <small [hidden]=\"myFormOrganization.controls.AddressLine.valid\" class=\"text-danger\">\r\n                    Address Line is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>City</label>\r\n                <input type=\"text\" formControlName=\"City\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                <small [hidden]=\"myFormOrganization.controls.City.valid\" class=\"text-danger\">\r\n                    City is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>State</label>\r\n                <input type=\"text\" formControlName=\"State\" maxlength=\"200\" class=\"form-control validation-field\" />\r\n                <small [hidden]=\"myFormOrganization.controls.State.valid\" class=\"text-danger\">\r\n                    State is required\r\n                </small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <p-checkbox label=\"Is Active\" binary=\"true\"\r\n                            formControlName=\"IsActive\"></p-checkbox>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-group\">\r\n                    <label>Logo</label>\r\n                    <div class=\"input-group file-upload\">\r\n                        <input type=\"file\" (change)=\"fileChange(input)\" #input class=\"file-upload-btn\" />\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Choose a file...\" value=\"{{fileName}}\">\r\n                        <i class=\"fa fa-times delete-file\" (click)=\"removeFile()\" *ngIf=\"fileToUpload\"></i>\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"AddUserToOrganization()\" [disabled]=\"((!myFormOrganization.valid) || OrganizationID==0)\">Add User</button>\r\n            <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-primary\" (click)=\"SaveOrganizationFormData(myFormOrganization.value)\" [disabled]=\"!myFormOrganization.valid\">Save</button>\r\n        </div>\r\n\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/organization/organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organization_organization_model__ = __webpack_require__("../../../../../src/app/pages/organization/organization.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organization_organization_service__ = __webpack_require__("../../../../../src/app/pages/organization/organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var apiURL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiEndpoint;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(fb, _OrganizationService, route, router, location) {
        this.fb = fb;
        this._OrganizationService = _OrganizationService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.OrganizationID = 0;
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    DocumentComponent.prototype.ngOnInit = function () {
        this.onload();
    };
    DocumentComponent.prototype.onload = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.OrganizationID = params['id']; //log the value of id
            _this.OrganizationID = _this.OrganizationID === undefined ? 0 : _this.OrganizationID;
        });
        this.addhtmltoform();
        if (this.OrganizationID > 0) {
            this._OrganizationService.getSingleOrganization(this.OrganizationID).subscribe(function (res) {
                _this.OrganizationID = res.OrganizationID;
                _this.addhtmltoform(res);
            });
        }
    };
    DocumentComponent.prototype.addhtmltoform = function (model) {
        if (model === void 0) { model = new __WEBPACK_IMPORTED_MODULE_5__organization_organization_model__["b" /* OrganizationViewModel */](); }
        this.myFormOrganization = this.fb.group({
            OrganizationID: [model.OrganizationID],
            OrganizationName: [model.OrganizationName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            Logo: [model.Logo],
            State: [model.State, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            City: [model.City, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            AddressLine: [model.AddressLine, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            IsActive: [model.IsActive, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
    };
    DocumentComponent.prototype.SaveOrganizationFormData = function (data) {
        var _this = this;
        this._OrganizationService.saveOrganization(data).subscribe(function (res) {
            _this.OrganizationID = res.OrganizationID;
            _this.router.navigate(['/pages/organization/' + _this.OrganizationID]);
            _this.saveMaterial(res.OrganizationID);
        });
    };
    DocumentComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.fileName = input.files[0].name;
            this.fileToUpload = input.files[0];
        }
    };
    DocumentComponent.prototype.removeFile = function () {
        this.fileName = '';
        this.fileToUpload = null;
    };
    DocumentComponent.prototype.saveMaterial = function (orgid) {
        var _this = this;
        if (this.fileToUpload != null && this.fileToUpload != undefined) {
            var file = this.fileToUpload;
            var _formData = new FormData();
            _formData.append("FileName", file.name);
            _formData.append("MyFile", file);
            _formData.append("OrganizationID", this.OrganizationID.toString());
            var body = _formData;
            this._OrganizationService.uploadMaterial(body).subscribe(function (res) {
                _this.removeFile();
                _this.router.navigate(['/pages/organization/' + orgid]);
            });
        }
    };
    DocumentComponent.prototype.AddUserToOrganization = function () {
        this.router.navigate(['/pages/user/0/' + this.OrganizationID]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeDialog'),
        __metadata("design:type", Object)
    ], DocumentComponent.prototype, "closeDialog", void 0);
    DocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__("../../../../../src/app/pages/organization/organization.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__organization_organization_service__["a" /* OrganizationService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__organization_organization_service__["a" /* OrganizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__organization_organization_service__["a" /* OrganizationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object])
    ], DocumentComponent);
    return DocumentComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=organization.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/organization/organization.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrganizationViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationListFilterModel; });
/* unused harmony export OrganizationListViewResult */
/* unused harmony export OrganizationListResult */
// Detail page models
var OrganizationViewModel = /** @class */ (function () {
    function OrganizationViewModel() {
    }
    return OrganizationViewModel;
}());

// List page models
var OrganizationListFilterModel = /** @class */ (function () {
    function OrganizationListFilterModel() {
    }
    return OrganizationListFilterModel;
}());

var OrganizationListViewResult = /** @class */ (function () {
    function OrganizationListViewResult() {
        this.OrganizationListResult = [];
    }
    return OrganizationListViewResult;
}());

var OrganizationListResult = /** @class */ (function () {
    function OrganizationListResult() {
    }
    return OrganizationListResult;
}());

//# sourceMappingURL=organization.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/organization/organization.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModule", function() { return OrganizationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organizationlist_component__ = __webpack_require__("../../../../../src/app/pages/organization/organizationlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organization_component__ = __webpack_require__("../../../../../src/app/pages/organization/organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__organization_component__["a" /* DocumentComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__organizationlist_component__["a" /* DocumentListComponent */], data: { breadcrumb: 'List' } },
    { path: 'organization', component: __WEBPACK_IMPORTED_MODULE_6__organization_component__["a" /* DocumentComponent */], data: { breadcrumb: 'organization' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__organization_component__["a" /* DocumentComponent */], data: { breadcrumb: 'Edit' } },
];
var OrganizationModule = /** @class */ (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__organization_component__["a" /* DocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__organizationlist_component__["a" /* DocumentListComponent */]
            ]
        })
    ], OrganizationModule);
    return OrganizationModule;
}());

//# sourceMappingURL=organization.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/organization/organization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var apiURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint;
var OrganizationService = /** @class */ (function () {
    function OrganizationService(http) {
        this.http = http;
    }
    OrganizationService.prototype.getOrganizationListData = function (filter) {
        return this.http.post(apiURL + '/organization/GetOrganizationListData', filter).map(function (response) { return response.json(); });
    };
    OrganizationService.prototype.deleteOrganization = function (id) {
        return this.http.get(apiURL + '/organization/DeleteOrganization?id=' + id).map(function (response) { return response.json(); });
    };
    OrganizationService.prototype.saveOrganization = function (data) {
        return this.http.post(apiURL + '/organization/AddUpdateOrganization', data).map(function (response) { return response.json(); });
    };
    OrganizationService.prototype.getSingleOrganization = function (id) {
        return this.http.get(apiURL + '/organization/GetSingleOrganization?id=' + id).map(function (response) { return response.json(); });
    };
    OrganizationService.prototype.uploadMaterial = function (body) {
        return this.http.post(apiURL + '/organization/SaveMaterial', body).map(function (res) { });
    };
    OrganizationService.prototype.downloadMaterial = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseContentType */].Blob });
        return this.http.get(apiURL + '/organization/DownLoadMaterialBlob?id=' + id, options)
            .map(function (response) { return response.blob(); });
    };
    OrganizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], OrganizationService);
    return OrganizationService;
    var _a;
}());

//# sourceMappingURL=organization.service.js.map

/***/ }),

/***/ "../../../../../src/app/pages/organization/organizationlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadOrganizationList($event)\">\r\n    <p-column field=\"OrganizationName\" header=\"Organization Name\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"OrganizationAddress\" header=\"Address\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-power-off\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <p-column field=\"QuestionText\" header=\"Question\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"DuratiuonUnit\" header=\"Duratiuon Unit\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"QuestionType\" header=\"Question Type\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Score\" header=\"Score\"  [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Active\" header=\"Status\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>-->"

/***/ }),

/***/ "../../../../../src/app/pages/organization/organizationlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__organization_organization_service__ = __webpack_require__("../../../../../src/app/pages/organization/organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__organization_organization_model__ = __webpack_require__("../../../../../src/app/pages/organization/organization.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        this.filterData = new __WEBPACK_IMPORTED_MODULE_6__organization_organization_model__["a" /* OrganizationListFilterModel */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-organizationlist',
            template: __webpack_require__("../../../../../src/app/pages/organization/organizationlist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__organization_organization_service__["a" /* OrganizationService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__organization_organization_service__["a" /* OrganizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__organization_organization_service__["a" /* OrganizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object])
    ], DocumentListComponent);
    return DocumentListComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=organizationlist.component.js.map

/***/ })

});
//# sourceMappingURL=organization.module.chunk.js.map