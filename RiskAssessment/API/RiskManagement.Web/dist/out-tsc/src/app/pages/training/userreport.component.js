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
var UserReportComponent = /** @class */ (function () {
    function UserReportComponent(_trainingService) {
        this._trainingService = _trainingService;
        this.trainingUserReportData = [];
        this.userList = [];
        this.userId = 0;
    }
    UserReportComponent.prototype.ngOnInit = function () {
        this.filterModel = new training_model_1.TrainingUserReportFilterModel();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getUserList();
        this.getUserReport();
    };
    UserReportComponent.prototype.getUserList = function () {
        var _this = this;
        this._trainingService.getUserList().subscribe(function (res) {
            _this.userList = res;
        });
    };
    UserReportComponent.prototype.getUserReport = function () {
        var _this = this;
        this.filterModel.UserId = this.userId == 0 ? null : this.userId;
        this._trainingService.GetUserReport(this.filterModel).subscribe(function (res) {
            _this.trainingUserReportData = res.ReportModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    ;
    UserReportComponent.prototype.loadTrainingUserReportLazy = function (event) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.getUserReport();
    };
    UserReportComponent.prototype.exportCSV = function () {
        var downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadUserReport(downloadFilterModel).subscribe(function (res) {
            FileSaver.saveAs(res, "TrineeReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    };
    UserReportComponent = __decorate([
        core_1.Component({
            selector: 'app-userreport-component',
            templateUrl: './userreport.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',
                './training.component.css'
            ],
            providers: [training_service_1.TrainingService]
        }),
        __metadata("design:paramtypes", [training_service_1.TrainingService])
    ], UserReportComponent);
    return UserReportComponent;
}());
exports.UserReportComponent = UserReportComponent;
//# sourceMappingURL=userreport.component.js.map