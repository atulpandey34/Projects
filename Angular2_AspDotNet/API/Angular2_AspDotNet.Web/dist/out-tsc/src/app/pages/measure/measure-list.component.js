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
var environment_1 = require("../../../environments/environment");
var measure_service_1 = require("./measure.service");
var measure_model_1 = require("./measure.model");
var apiURL = environment_1.environment.apiEndpoint;
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
        this.measureColumnsChartData = new measure_model_1.MeasureColumnChartData();
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
            var data = new measure_model_1.MeasureColumnDataViewModel();
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
        core_1.Component({
            selector: 'app-measureList-component',
            templateUrl: './measure-list.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './measure.component.css'
            ],
            providers: [],
        }),
        __metadata("design:paramtypes", [measure_service_1.MeasureService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
    ], MeasureListComponent);
    return MeasureListComponent;
    var _a, _b, _c;
}());
exports.MeasureListComponent = MeasureListComponent;
//# sourceMappingURL=measure-list.component.js.map