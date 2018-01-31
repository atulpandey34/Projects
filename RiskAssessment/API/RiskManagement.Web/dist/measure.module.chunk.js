webpackJsonp(["measure.module"],{

/***/ "../../../../../src/app/pages/measure/measure-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:10px;\">\r\n    <div style=\"margin:20px;\">\r\n        <div>\r\n            <div class=\"form-group\">\r\n                <label>Measure</label>\r\n                <select [(ngModel)]=\"measureId\" class=\"form-control\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <option *ngFor=\"let measure of measureList\"\r\n                            value={{measure.MeasureId}}>\r\n                        {{measure.Description}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div style=\"display:none;\" class=\"form-group\">\r\n                <label>Column</label>\r\n                <select [(ngModel)]=\"measureColumnId\" class=\"form-control\"\r\n                        (change)=\"onMeasureColumnChange()\">\r\n                    <option value=\"0\">--Select--</option>\r\n                    <option *ngFor=\"let column of measureColumns\"\r\n                            value={{column.MeasureColumnId}}>\r\n                        {{column.ColumnName}}\r\n                    </option>\r\n                </select>\r\n                <!--<p-multiSelect  [options]=\"measureColumns\" [(ngModel)]=\"selectedMeasureIds\" (change)=\"onMeasureColumnChange($event.value)\"></p-multiSelect>-->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Start Date</label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"startDate\" [(ngModel)]=\"startDate\" ngbDatepicker #p=\"ngbDatepicker\">\r\n                        <div class=\"input-group-addon\" (click)=\"p.toggle()\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>End Date</label>\r\n                <div class=\"form-group\">\r\n                    <div class=\"input-group\">\r\n                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"endDate\" [(ngModel)]=\"endDate\" ngbDatepicker #p1=\"ngbDatepicker\">\r\n                        <div class=\"input-group-addon\" (click)=\"p1.toggle()\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" (click)=\"onMeasureColumnChange();\" class=\"btn btn-primary\">Get Data</button>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <p-chart type=\"line\" [data]=\"measureColumnsChartData\" [options]=\"options\"></p-chart>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/measure/measure-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__measure_service__ = __webpack_require__("../../../../../src/app/pages/measure/measure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var apiURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint;
var MeasureChartComponent = /** @class */ (function () {
    function MeasureChartComponent(_measureService, router, location, route) {
        this._measureService = _measureService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.measureId = 0;
        this.measureColumnId = 0;
        this.measureList = [];
        this.measureColumns = [];
        this.measureColumnsData = [];
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.options = {
            title: {
                display: true,
                text: 'Measure Chart',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            trendlines: { 0: {} }
        };
    }
    MeasureChartComponent.prototype.ngOnInit = function () {
        this.getMeasureList();
    };
    MeasureChartComponent.prototype.getMeasureList = function () {
        var _this = this;
        this._measureService.getMeasureList().subscribe(function (res) {
            _this.measureList = res;
        });
    };
    MeasureChartComponent.prototype.onMeasureChange = function () {
        this.getChartData(this.measureId, 0);
        //this.getMeasureColumns(this.measureId);
    };
    MeasureChartComponent.prototype.getMeasureColumns = function (id) {
        var _this = this;
        this._measureService.getMeasureColumns(id).subscribe(function (res) {
            _this.measureColumns = res;
        });
    };
    MeasureChartComponent.prototype.onMeasureColumnChange = function () {
        this.getChartData(this.measureId, this.measureColumnId);
    };
    MeasureChartComponent.prototype.getChartData = function (measureId, measureColumnnId) {
        var _this = this;
        var sD = '';
        var eD = '';
        if (this.startDate != null && this.startDate != undefined)
            sD = new Date(this.startDate.year, (this.startDate.month - 1), this.startDate.day).toLocaleDateString();
        if (this.endDate != null && this.endDate != undefined)
            eD = new Date(this.endDate.year, (this.endDate.month - 1), this.endDate.day).toLocaleDateString();
        this._measureService.getChartData(measureId, measureColumnnId, sD, eD).subscribe(function (res) {
            _this.measureColumnsChartData = res;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('measureId'),
        __metadata("design:type", Number)
    ], MeasureChartComponent.prototype, "measureId", void 0);
    MeasureChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-measureChart-component',
            template: __webpack_require__("../../../../../src/app/pages/measure/measure-chart.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/measure/measure.component.css")],
            providers: [],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__measure_service__["a" /* MeasureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__measure_service__["a" /* MeasureService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
    ], MeasureChartComponent);
    return MeasureChartComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=measure-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/measure/measure-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n\r\n        <p-dataTable [value]=\"measureList\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n                     resizableColumns=\"true\" sortField=\"StartDate\" #dt [responsive]=\"true\">\r\n\r\n            <p-column field=\"Description\" header=\"Measure\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n            <p-column field=\"Frequency.Description\" header=\"Frequency\" [filter]=\"true\" [sortable]=\"true\"></p-column>-->\r\n            <p-column field=\"Target\" header=\"Target\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n            <p-column header=\"Columns\">\r\n                <ng-template let-col let-cols=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"form-group\" [hidden]=\"cols.MeasureColumns.length ==0\">\r\n                        <span>{{cols.MeasureColumns.length}} &nbsp;Columns &nbsp; <i data-toggle=\"modal\" (click)=\"getMeasureColumns(cols.MeasureColumns)\" data-target=\"#lg-modal-cols\" class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"Objectives\">\r\n                <ng-template let-col let-cols=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"form-group\" [hidden]=\"cols.MeasureObjectives.length ==0\">\r\n                        <span>{{cols.MeasureObjectives.length}} &nbsp;Objectives &nbsp; <i data-toggle=\"modal\" (click)=\"getMeasureObjectives(cols.MeasureObjectives)\" data-target=\"#lg-modal-objs\" class=\"fa fa-info\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"Data\">\r\n                <ng-template let-col let-cols=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"form-group\">\r\n                        <span>\r\n                            Data &nbsp; <i data-toggle=\"modal\" (click)=\"getMeasureColumnsData(cols.MeasureId)\" data-target=\"#lg-modal-dataview\" class=\"fa fa-info\" aria-hidden=\"true\"></i>\r\n                            &nbsp; <i data-toggle=\"modal\" (click)=\"showChart(cols.MeasureId)\" data-target=\"#lg-modalChart\" class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"LastDate\" header=\"Last Date\" [filter]=\"false\" [sortable]=\"false\"></p-column>\r\n            <p-column field=\"NextDate\" header=\"Next Date\" [filter]=\"false\" [sortable]=\"false\"></p-column>\r\n            <p-column styleClass=\"col-button\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <div class=\"form-group\" style=\"width:100%\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" pButton icon=\"fa-plus\" (click)=\"redirectToNewPage()\" label=\"Add\">Add New</button>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template let-cols=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"form-group\" [hidden]=\"cols.MeasureColumns.length ==0\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#lg-modal-data\" (click)=\"addEditMeasureColumnData(cols)\" label=\"Add\">Add Data</button>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n\r\n        </p-dataTable>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<!--Columns-->\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal-cols\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Column List</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <p-dataTable [editable]=\"true\" [value]=\"measureColumns\" [responsive]=\"true\">\r\n                        <p-column field=\"ColumnName\" header=\"Column Names\"></p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Objectives-->\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal-objs\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Objectives</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <p-dataTable [editable]=\"true\" [value]=\"measureObjectives\" [responsive]=\"true\">\r\n                        <p-column field=\"Description\" header=\"Objectives\"></p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Columns Data-->\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal-dataview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Data</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <p-dataTable [editable]=\"true\" [value]=\"measureColumnsDataByDate\" [responsive]=\"true\">\r\n                        <p-column field=\"Date\" header=\"Date\" [sortable]=\"true\">\r\n                            <ng-template let-col let-report=\"rowData\" pTemplate=\"body\">\r\n                                <label>{{report.Date | date: 'dd/MM/yyyy'}}</label>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"Data\">\r\n                            <ng-template let-col let-report=\"rowData\" pTemplate=\"body\">\r\n                                <div class=\"form-group\" *ngFor=\"let data of report.MeasureColumnData\">\r\n                                    <label><h6>{{data.ColumnName}}</h6></label>&nbsp;:&nbsp;\r\n                                    <input type=\"text\" readonly [ngModel]=\"data.ColumnValue\" />\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Column Data Form-->\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal-data\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Add Data</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label>Date</label>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control validation-field\" [(ngModel)]=\"columnDataDate\" placeholder=\"yyyy-mm-dd\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                            <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <small [hidden]=\"columnDataDate\" class=\"text-danger\">\r\n                            Date is required\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div *ngFor=\"let column of measureColumnsData;let i=index;\">\r\n                        <div class=\"form-group\">\r\n                            <label><b>{{column.ColumnName}} </b></label>\r\n                            <div class=\"form-group\">\r\n                                <input type=\"number\" min=\"0\" class=\"form-control\" rows=\"5\" [(ngModel)]=\"column.ColumnValue\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <input type=\"button\" #closeDialog data-dismiss=\"modal\" class=\"btn btn-primary\" value=\"Save\" (click)=\"saveMeasureColumnData()\" [disabled]=\"!columnDataDate\" />\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"lg-modalChart\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display:none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Measure Chart </h4>\r\n                <button #closeDialogChart type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\" style=\"overflow:scroll\">\r\n                <div class=\"form-group\">\r\n                    <label>Start Date</label>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"startDate\" [(ngModel)]=\"startDate\" ngbDatepicker #p=\"ngbDatepicker\">\r\n                            <div class=\"input-group-addon\" (click)=\"p.toggle()\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>End Date</label>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"endDate\" [(ngModel)]=\"endDate\" ngbDatepicker #p1=\"ngbDatepicker\">\r\n                            <div class=\"input-group-addon\" (click)=\"p1.toggle()\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" (click)=\"filterChartData();\" class=\"btn btn-primary\">Get Data</button>\r\n\r\n\r\n                </div>\r\n                <p-chart type=\"line\" [data]=\"measureColumnsChartData\" [options]=\"options\"></p-chart>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/measure/measure-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__measure_service__ = __webpack_require__("../../../../../src/app/pages/measure/measure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__measure_model__ = __webpack_require__("../../../../../src/app/pages/measure/measure.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var apiURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint;
var MeasureListComponent = /** @class */ (function () {
    function MeasureListComponent(_measureService, router, location, route) {
        this._measureService = _measureService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.measureId = 0;
        this.measureList = [];
        this.measureColumns = [];
        this.measureObjectives = [];
        this.measureColumnsData = [];
        this.measureColumnsDataByDate = [];
        this.columnDataDate = null;
        this.selectedMeasureId = 0;
        this.options = {
            title: {
                display: true,
                text: 'Measure Chart',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            trendlines: { 0: {} }
        };
    }
    MeasureListComponent.prototype.ngOnInit = function () {
        this.getMeasureList();
    };
    MeasureListComponent.prototype.getChartData = function (measureId, measureColumnnId) {
        var _this = this;
        var sD = '';
        var eD = '';
        if (this.startDate != null && this.startDate != undefined)
            sD = new Date(this.startDate.year, (this.startDate.month - 1), this.startDate.day).toLocaleDateString();
        if (this.endDate != null && this.endDate != undefined)
            eD = new Date(this.endDate.year, (this.endDate.month - 1), this.endDate.day).toLocaleDateString();
        this.measureColumnsChartData = new __WEBPACK_IMPORTED_MODULE_5__measure_model__["a" /* MeasureColumnChartData */]();
        this._measureService.getChartData(measureId, measureColumnnId, sD, eD).subscribe(function (res) {
            _this.measureColumnsChartData = res;
        });
    };
    MeasureListComponent.prototype.getMeasureList = function () {
        var _this = this;
        this._measureService.getMeasureList().subscribe(function (res) {
            _this.measureList = res;
        });
    };
    MeasureListComponent.prototype.getMeasureColumns = function (columns) {
        this.measureColumns = columns;
    };
    MeasureListComponent.prototype.getMeasureObjectives = function (objectives) {
        this.measureObjectives = objectives;
    };
    MeasureListComponent.prototype.addEditMeasureColumnData = function (measure) {
        this.measureColumnsData = [];
        this.columnDataDate = null;
        for (var _i = 0, _a = measure.MeasureColumns; _i < _a.length; _i++) {
            var column = _a[_i];
            var data = new __WEBPACK_IMPORTED_MODULE_5__measure_model__["b" /* MeasureColumnDataViewModel */]();
            data.MeasureColumnDataId = 0;
            data.MeasureId = column.MeasureId;
            data.MeasureColumnId = column.MeasureColumnId;
            data.ColumnName = column.ColumnName;
            data.ColumnValue = '';
            data.Date = '';
            this.measureColumnsData.push(data);
        }
        //(new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day)).toLocaleDateString()
    };
    MeasureListComponent.prototype.saveMeasureColumnData = function () {
        var dataDate = (new Date(this.columnDataDate.year, this.columnDataDate.month - 1, this.columnDataDate.day)).toLocaleDateString();
        for (var _i = 0, _a = this.measureColumnsData; _i < _a.length; _i++) {
            var columnData = _a[_i];
            columnData.Date = dataDate;
        }
        this._measureService.saveMeasureColumnData(this.measureColumnsData).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    MeasureListComponent.prototype.getMeasureColumnsData = function (measureId) {
        var _this = this;
        this._measureService.getMeasureColumnsDataByDate(measureId).subscribe(function (res) {
            _this.measureColumnsDataByDate = res;
        });
    };
    MeasureListComponent.prototype.showChart = function (measureId) {
        this.selectedMeasureId = measureId;
        this.startDate = null;
        this.endDate = null;
        this.getChartData(measureId, 0);
    };
    MeasureListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/measure']);
    };
    MeasureListComponent.prototype.filterChartData = function () {
        this.getChartData(this.selectedMeasureId, 0);
    };
    MeasureListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-measureList-component',
            template: __webpack_require__("../../../../../src/app/pages/measure/measure-list.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/measure/measure.component.css")],
            providers: [],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__measure_service__["a" /* MeasureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__measure_service__["a" /* MeasureService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
    ], MeasureListComponent);
    return MeasureListComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=measure-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/measure/measure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/measure/measure.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FrequencyViewModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MeasureViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MeasureColumnViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MeasureObjectiveViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MeasureColumnDataViewModel; });
/* unused harmony export MeasureColumnDataByDateViewModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureColumnChartData; });
/* unused harmony export MeasureColumnDataSet */
var FrequencyViewModel = /** @class */ (function () {
    function FrequencyViewModel() {
    }
    return FrequencyViewModel;
}());

var MeasureViewModel = /** @class */ (function () {
    function MeasureViewModel() {
    }
    return MeasureViewModel;
}());

var MeasureColumnViewModel = /** @class */ (function () {
    function MeasureColumnViewModel() {
    }
    return MeasureColumnViewModel;
}());

var MeasureObjectiveViewModel = /** @class */ (function () {
    function MeasureObjectiveViewModel() {
    }
    return MeasureObjectiveViewModel;
}());

var MeasureColumnDataViewModel = /** @class */ (function () {
    function MeasureColumnDataViewModel() {
    }
    return MeasureColumnDataViewModel;
}());

var MeasureColumnDataByDateViewModel = /** @class */ (function () {
    function MeasureColumnDataByDateViewModel() {
    }
    return MeasureColumnDataByDateViewModel;
}());

var MeasureColumnChartData = /** @class */ (function () {
    function MeasureColumnChartData() {
    }
    return MeasureColumnChartData;
}());

var MeasureColumnDataSet = /** @class */ (function () {
    function MeasureColumnDataSet() {
    }
    return MeasureColumnDataSet;
}());

//# sourceMappingURL=measure.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/measure/measure.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasureModule", function() { return MeasureModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__newmeasure_component__ = __webpack_require__("../../../../../src/app/pages/measure/newmeasure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__measure_list_component__ = __webpack_require__("../../../../../src/app/pages/measure/measure-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__measure_chart_component__ = __webpack_require__("../../../../../src/app/pages/measure/measure-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__measure_service__ = __webpack_require__("../../../../../src/app/pages/measure/measure.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__newmeasure_component__["a" /* MeasureComponent */], pathMatch: 'full' },
    { path: 'measure', component: __WEBPACK_IMPORTED_MODULE_6__newmeasure_component__["a" /* MeasureComponent */], data: { breadcrumb: 'Measure' } },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_7__measure_list_component__["a" /* MeasureListComponent */], data: { breadcrumb: 'List' } },
    { path: 'chart', component: __WEBPACK_IMPORTED_MODULE_8__measure_chart_component__["a" /* MeasureChartComponent */], data: { breadcrumb: 'Chart' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__newmeasure_component__["a" /* MeasureComponent */], data: { breadcrumb: 'Edit' } },
];
var MeasureModule = /** @class */ (function () {
    function MeasureModule() {
    }
    MeasureModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__measure_list_component__["a" /* MeasureListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__newmeasure_component__["a" /* MeasureComponent */],
                __WEBPACK_IMPORTED_MODULE_8__measure_chart_component__["a" /* MeasureChartComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__measure_service__["a" /* MeasureService */]]
        })
    ], MeasureModule);
    return MeasureModule;
}());

//# sourceMappingURL=measure.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/measure/newmeasure.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:10px;\">\r\n    <div style=\"margin:20px;\">\r\n        <div class=\"form-group\">\r\n            <label>Measure</label>\r\n            <input name=\"description\" type=\"text\" class=\"form-control\" [(ngModel)]=\"measure.Description\" />\r\n            <small [hidden]=\"measure.Description\" class=\"text-danger\">\r\n                Measure is required\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Frequency</label>\r\n            <select [(ngModel)]=\"measure.FrequencyId\" class=\"form-control\">\r\n                <option value=\"0\">--Select--</option>\r\n                <option *ngFor=\"let frequency of frequencyList\"\r\n                        value={{frequency.FrequencyId}}>\r\n                    {{frequency.Description}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Target</label>\r\n            <input name=\"target\" type=\"number\" class=\"form-control\" [(ngModel)]=\"measure.Target\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" (click)=\"onSaveMeasure()\" class=\"btn btn-primary\" [disabled]=\"measure.Description && measure.FrequencyId ===0\">Save</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"form-group\" *ngIf=\"measureId>0\">\r\n    <h4>Column List</h4>\r\n    <p-dataTable [editable]=\"true\" [value]=\"measureColumns\" [responsive]=\"true\" *ngIf=\"refreshGrid\">\r\n        <p-column field=\"ColumnName\" header=\"Column Names\" ></p-column>\r\n        <p-column styleClass=\"col-button\">\r\n            <ng-template pTemplate=\"header\">\r\n                <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#lg-modal\" (click)=\"addEditMeasureColumn(null,'addmeasure')\" [disabled]=\"measureId == 0\" label=\"Add\">Add</button>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template let-measure=\"rowData\" pTemplate=\"body\">\r\n                <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#lg-modal\" (click)=\"addEditMeasureColumn(measure,'editmeasure')\" [disabled]=\"measureId == 0\" label=\"Add\">Edit</button>\r\n                </div>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Add Column</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label>Column</label>\r\n                    <input name=\"column\" type=\"text\" class=\"form-control\" [(ngModel)]=\"measureColumn.ColumnName\" />\r\n                    <small [hidden]=\"measureColumn.ColumnName\" class=\"text-danger\">\r\n                        Column is required\r\n                    </small>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" #closeDialog data-dismiss=\"modal\" (click)=\"onSaveColumn('')\" data-toggle=\"modal\" class=\"btn btn-primary\" [disabled]=\"!measureColumn.ColumnName\">Save</button>\r\n                    <button type=\"button\" (click)=\"onSaveColumn('SaveAndAdd')\" data-toggle=\"modal\" class=\"btn btn-primary\" [disabled]=\"!measureColumn.ColumnName\">Save and Add</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--Objectives-->\r\n<div class=\"form-group\" *ngIf=\"measureId>0\">\r\n    <h4>Objectives</h4>\r\n    <p-dataTable [editable]=\"true\" [value]=\"measureObjectives\" [responsive]=\"true\" *ngIf=\"refreshGrid\">\r\n        <p-column field=\"Description\" header=\"Objectives\"></p-column>\r\n        <p-column styleClass=\"col-button\">\r\n            <ng-template pTemplate=\"header\">\r\n                <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#lg-modal-objective\" (click)=\"addEditObjective(null,'addobjective')\" [disabled]=\"measureId == 0\" label=\"Add\">Add</button>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template let-measure=\"rowData\" pTemplate=\"body\">\r\n                <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#lg-modal-objective\" (click)=\"addEditObjective(measure,'editobjective')\" [disabled]=\"measureId == 0\" label=\"Add\">Edit</button>\r\n                </div>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" id=\"lg-modal-objective\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header state modal-primary\">\r\n                <h4 class=\"modal-title\" id=\"modal-large-label\">Add Objective</h4>\r\n                <button type=\"button\" #closeDialog class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <label>Objective</label>\r\n                    <input name=\"column\" type=\"text\" class=\"form-control\" [(ngModel)]=\"measureObjective.Description\" />\r\n                    <small [hidden]=\"measureObjective.Description\" class=\"text-danger\">\r\n                        Objective is required\r\n                    </small>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" #closeDialog data-dismiss=\"modal\" (click)=\"onSaveObjective('')\" data-toggle=\"modal\" class=\"btn btn-primary\" [disabled]=\"!measureObjective.Description\">Save</button>\r\n                    <button type=\"button\" (click)=\"onSaveObjective('SaveAndAdd')\" data-toggle=\"modal\" class=\"btn btn-primary\" [disabled]=\"!measureObjective.Description\">Save and Add</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/measure/newmeasure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeasureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__measure_service__ = __webpack_require__("../../../../../src/app/pages/measure/measure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__measure_model__ = __webpack_require__("../../../../../src/app/pages/measure/measure.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeasureComponent = /** @class */ (function () {
    function MeasureComponent(_measureService, router, route) {
        this._measureService = _measureService;
        this.router = router;
        this.route = route;
        this.measureId = 0;
        this.measureColumns = [];
        this.measureObjectives = [];
        this.frequencyList = [];
        this.trainerId = 0;
        this.refreshGrid = true;
    }
    MeasureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTrainerList();
        this.measure = new __WEBPACK_IMPORTED_MODULE_3__measure_model__["e" /* MeasureViewModel */]();
        this.measure.Description = '';
        this.measure.MeasureId = 0;
        this.measure.FrequencyId = 0;
        this.measure.Target = null;
        this.measureColumn = new __WEBPACK_IMPORTED_MODULE_3__measure_model__["c" /* MeasureColumnViewModel */]();
        this.measureColumn.MeasureColumnId = 0;
        this.measureColumn.MeasureId = this.measureId;
        this.measureColumn.ColumnName = "";
        this.measureObjective = new __WEBPACK_IMPORTED_MODULE_3__measure_model__["d" /* MeasureObjectiveViewModel */]();
        this.measureObjective.MeasureObjectiveId = 0;
        this.measureObjective.MeasureId = this.measureId;
        this.measureObjective.Description = "";
        this.route.params.subscribe(function (params) {
            _this.measureId = params['id'];
        });
        if (this.measureId === undefined || this.measureId === null || this.measureId === 0) {
            this.measure.MeasureId = 0;
        }
        else {
            this.getMeasure(this.measureId);
        }
    };
    MeasureComponent.prototype.getTrainerList = function () {
        var _this = this;
        this._measureService.getFrequency().subscribe(function (res) {
            _this.frequencyList = res;
        });
    };
    MeasureComponent.prototype.getMeasure = function (id) {
        var _this = this;
        this._measureService.getMeasure(id).subscribe(function (res) {
            _this.measure = res;
            _this.measureColumns = _this.measure.MeasureColumns;
            _this.measureObjectives = _this.measure.MeasureObjectives;
        });
    };
    MeasureComponent.prototype.onSaveMeasure = function () {
        var _this = this;
        debugger;
        this._measureService.saveMeasure(this.measure).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/pages/measure/' + res.toString()]);
        }, function (error) {
            console.log(error);
        });
    };
    MeasureComponent.prototype.addEditMeasureColumn = function (measure, action) {
        if (action == "addmeasure") {
            this.measureColumn = new __WEBPACK_IMPORTED_MODULE_3__measure_model__["c" /* MeasureColumnViewModel */]();
            this.measureColumn.MeasureColumnId = 0;
            this.measureColumn.MeasureId = this.measureId;
            this.measureColumn.ColumnName = "";
        }
        else {
            this.measureColumn = measure;
        }
    };
    MeasureComponent.prototype.onSaveColumn = function (action) {
        var _this = this;
        this.refreshGrid = false;
        var isNewColumn = this.measureColumn.MeasureColumnId;
        this._measureService.saveMeasureColumn(this.measureColumn).subscribe(function (res) {
            console.log(res);
            if (isNewColumn === 0) {
                _this.measureColumns.push(res);
            }
            _this.refreshGrid = true;
            if (action === "SaveAndAdd") {
                _this.measureColumn = new __WEBPACK_IMPORTED_MODULE_3__measure_model__["c" /* MeasureColumnViewModel */]();
                _this.measureColumn.MeasureColumnId = 0;
                _this.measureColumn.MeasureId = _this.measureId;
                _this.measureColumn.ColumnName = "";
            }
        }, function (error) {
            console.log(error);
        });
    };
    MeasureComponent.prototype.addEditObjective = function (objective, action) {
        if (action == "addobjective") {
            this.measureObjective = new __WEBPACK_IMPORTED_MODULE_3__measure_model__["d" /* MeasureObjectiveViewModel */]();
            this.measureObjective.MeasureObjectiveId = 0;
            this.measureObjective.MeasureId = this.measureId;
            this.measureObjective.Description = "";
        }
        else {
            this.measureObjective = objective;
        }
    };
    MeasureComponent.prototype.onSaveObjective = function (action) {
        var _this = this;
        this.refreshGrid = false;
        var isNewColumn = this.measureObjective.MeasureObjectiveId;
        this._measureService.saveMeasureObjective(this.measureObjective).subscribe(function (res) {
            console.log(res);
            if (isNewColumn === 0) {
                _this.measureObjectives.push(res);
            }
            _this.refreshGrid = true;
            if (action === "SaveAndAdd") {
                _this.measureObjective = new __WEBPACK_IMPORTED_MODULE_3__measure_model__["d" /* MeasureObjectiveViewModel */]();
                _this.measureObjective.MeasureObjectiveId = 0;
                _this.measureObjective.MeasureId = _this.measureId;
                _this.measureObjective.Description = "";
            }
        }, function (error) {
            console.log(error);
        });
    };
    MeasureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-measure-component',
            template: __webpack_require__("../../../../../src/app/pages/measure/newmeasure.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/form-elements/controls/file-uploader/file-uploader.component.scss"), __webpack_require__("../../../../../src/app/pages/measure/measure.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__measure_service__["a" /* MeasureService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__measure_service__["a" /* MeasureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__measure_service__["a" /* MeasureService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
    ], MeasureComponent);
    return MeasureComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=newmeasure.component.js.map

/***/ })

});
//# sourceMappingURL=measure.module.chunk.js.map