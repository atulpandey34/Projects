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
var apiURL = environment_1.environment.apiEndpoint;
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
        core_1.Input('measureId'),
        __metadata("design:type", Number)
    ], MeasureChartComponent.prototype, "measureId", void 0);
    MeasureChartComponent = __decorate([
        core_1.Component({
            selector: 'app-measureChart-component',
            templateUrl: './measure-chart.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './measure.component.css'
            ],
            providers: [],
        }),
        __metadata("design:paramtypes", [measure_service_1.MeasureService, router_1.Router, common_1.Location, router_1.ActivatedRoute])
    ], MeasureChartComponent);
    return MeasureChartComponent;
}());
exports.MeasureChartComponent = MeasureChartComponent;
//# sourceMappingURL=measure-chart.component.js.map