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
var TrainingReportComponent = /** @class */ (function () {
    function TrainingReportComponent(_trainingService) {
        this._trainingService = _trainingService;
        this.trainingReportData = [];
        this.trainingList = [];
        this.trainingId = 0;
        this.startDate = null;
        this.endDate = null;
    }
    TrainingReportComponent.prototype.ngOnInit = function () {
        this.filterModel = new training_model_1.TrainingReportFilterModel();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getTrainingNeedList();
        this.getTrainingReport();
    };
    TrainingReportComponent.prototype.getTrainingNeedList = function () {
        var _this = this;
        this._trainingService.GetTrainingNeedList().subscribe(function (res) {
            _this.trainingList = res;
        });
    };
    TrainingReportComponent.prototype.getTrainingReport = function () {
        var _this = this;
        this.filterModel.TrainingId = this.trainingId == 0 ? null : this.trainingId;
        this.filterModel.StartDate = this.startDate == null ? "" : (new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day)).toLocaleDateString();
        this.filterModel.EndDate = this.endDate == null ? "" : (new Date(this.endDate.year, this.endDate.month - 1, this.endDate.day)).toLocaleDateString();
        this._trainingService.GetTrainingReport(this.filterModel).subscribe(function (res) {
            _this.trainingReportData = res.ReportModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    ;
    TrainingReportComponent.prototype.loadTrainingReportLazy = function (event) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.getTrainingReport();
    };
    TrainingReportComponent.prototype.exportCSV = function () {
        var downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadTrainingReport(downloadFilterModel).subscribe(function (res) {
            FileSaver.saveAs(res, "TrainingReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    };
    TrainingReportComponent = __decorate([
        core_1.Component({
            selector: 'app-trainingreport-component',
            templateUrl: './trainingreport.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './training.component.css'
            ],
            providers: [training_service_1.TrainingService]
        }),
        __metadata("design:paramtypes", [training_service_1.TrainingService])
    ], TrainingReportComponent);
    return TrainingReportComponent;
}());
exports.TrainingReportComponent = TrainingReportComponent;
//# sourceMappingURL=trainingreport.component.js.map