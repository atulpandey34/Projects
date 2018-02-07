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
var measure_service_1 = require("./measure.service");
var measure_model_1 = require("./measure.model");
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
        this.measure = new measure_model_1.MeasureViewModel();
        this.measure.Description = '';
        this.measure.MeasureId = 0;
        this.measure.FrequencyId = 0;
        this.measure.Target = null;
        this.measureColumn = new measure_model_1.MeasureColumnViewModel();
        this.measureColumn.MeasureColumnId = 0;
        this.measureColumn.MeasureId = this.measureId;
        this.measureColumn.ColumnName = "";
        this.measureObjective = new measure_model_1.MeasureObjectiveViewModel();
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
            this.measureColumn = new measure_model_1.MeasureColumnViewModel();
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
                _this.measureColumn = new measure_model_1.MeasureColumnViewModel();
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
            this.measureObjective = new measure_model_1.MeasureObjectiveViewModel();
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
                _this.measureObjective = new measure_model_1.MeasureObjectiveViewModel();
                _this.measureObjective.MeasureObjectiveId = 0;
                _this.measureObjective.MeasureId = _this.measureId;
                _this.measureObjective.Description = "";
            }
        }, function (error) {
            console.log(error);
        });
    };
    MeasureComponent = __decorate([
        core_1.Component({
            selector: 'app-measure-component',
            templateUrl: './newmeasure.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './measure.component.css'
            ],
            providers: [measure_service_1.MeasureService]
        }),
        __metadata("design:paramtypes", [measure_service_1.MeasureService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
    ], MeasureComponent);
    return MeasureComponent;
    var _a, _b;
}());
exports.MeasureComponent = MeasureComponent;
//# sourceMappingURL=newmeasure.component.js.map