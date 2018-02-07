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
var training_service_1 = require("./training.service");
var training_model_1 = require("./training.model");
var TrainingListComponent = /** @class */ (function () {
    function TrainingListComponent(_trainingService, router, location, route) {
        this._trainingService = _trainingService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.totalRecords = 0;
    }
    TrainingListComponent.prototype.ngOnInit = function () {
        this.filterModel = new training_model_1.TrainingListFilterModel();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
    };
    TrainingListComponent.prototype.getList = function () {
        var _this = this;
        this._trainingService.getTrainingList(this.filterModel).subscribe(function (res) {
            _this.data = res.TrainingList;
            _this.totalRecords = res.TotalRecords;
        });
    };
    TrainingListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/training/' + event.TrainingId]);
    };
    TrainingListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this training ?")) {
            this._trainingService.deleteTraining(event.TrainingId).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    TrainingListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/training']);
    };
    TrainingListComponent.prototype.loadCarsLazy = function (event) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterModel.Assignment = event.filters.Assignment == undefined ? '' : event.filters.Assignment.value;
        this.filterModel.TrainingNeed = event.filters.TrainingNeed == undefined ? '' : event.filters.TrainingNeed.value;
        this.filterModel.TrainerRequired = event.filters.TrainerRequired == undefined ? null : (event.filters.TrainerRequired.value == "Yes" ? 1 : 0);
        this.filterModel.TrainingType = null;
        if (event.filters.TrainingType != undefined) {
            if (event.filters.TrainingType.value === "Event")
                this.filterModel.TrainingType = 1;
            else if (event.filters.TrainingType.value === "User Specific")
                this.filterModel.TrainingType = 2;
            //else
            //    this.filterModel.TrainingType = null;
        }
        this.getList();
    };
    TrainingListComponent = __decorate([
        core_1.Component({
            selector: 'app-traininglist-component',
            templateUrl: './traininglist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [training_service_1.TrainingService],
        }),
        __metadata("design:paramtypes", [training_service_1.TrainingService, router_1.Router, common_1.Location, router_1.ActivatedRoute])
    ], TrainingListComponent);
    return TrainingListComponent;
}());
exports.TrainingListComponent = TrainingListComponent;
//# sourceMappingURL=traininglist.component.js.map