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
var training_service_1 = require("./training.service");
var FileSaver = require("file-saver");
var training_model_1 = require("./training.model");
var TrainerReportComponent = /** @class */ (function () {
    function TrainerReportComponent(_trainingService) {
        this._trainingService = _trainingService;
        this.trainerReportData = [];
        this.trainerList = [];
        this.trainerId = 0;
    }
    TrainerReportComponent.prototype.ngOnInit = function () {
        this.filterModel = new training_model_1.TrainerReportFilterModel();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getTrainerList();
        this.getTrainerReport();
    };
    TrainerReportComponent.prototype.getTrainerList = function () {
        var _this = this;
        this._trainingService.getTrainerList().subscribe(function (res) {
            _this.trainerList = res;
        });
    };
    TrainerReportComponent.prototype.getTrainerReport = function () {
        var _this = this;
        this.filterModel.TrainerId = this.trainerId == 0 ? null : this.trainerId;
        this._trainingService.GetTrainerReport(this.filterModel).subscribe(function (res) {
            _this.trainerReportData = res.ReportModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    ;
    TrainerReportComponent.prototype.loadTrainerReportLazy = function (event) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.getTrainerReport();
    };
    TrainerReportComponent.prototype.exportCSV = function () {
        var downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadTrainerReport(downloadFilterModel).subscribe(function (res) {
            FileSaver.saveAs(res, "TrainerReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    };
    TrainerReportComponent = __decorate([
        core_1.Component({
            selector: 'app-trainerreport-component',
            templateUrl: './trainerreport.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './training.component.css'
            ],
            providers: [training_service_1.TrainingService]
        }),
        __metadata("design:paramtypes", [training_service_1.TrainingService])
    ], TrainerReportComponent);
    return TrainerReportComponent;
}());
exports.TrainerReportComponent = TrainerReportComponent;
//# sourceMappingURL=trainerreport.component.js.map