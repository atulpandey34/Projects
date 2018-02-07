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
var customdynamicmenu_model_1 = require("./customdynamicmenu.model");
var customdynamicmenu_service_1 = require("./customdynamicmenu.service");
var CustomDynamicMenuListComponent = /** @class */ (function () {
    function CustomDynamicMenuListComponent(_CustomDynamicMenuService, router, location, _fb, route) {
        this._CustomDynamicMenuService = _CustomDynamicMenuService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.route = route;
        this.totalRecords = 0;
    }
    CustomDynamicMenuListComponent.prototype.ngOnInit = function () {
        this.filterModel = new customdynamicmenu_model_1.MenuFilterModel();
        this.filterModel.SortColumn = "Title";
        this.filterModel.SortOrder = "asc";
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
    };
    CustomDynamicMenuListComponent.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        this.getList();
    };
    CustomDynamicMenuListComponent.prototype.getList = function () {
        var _this = this;
        this._CustomDynamicMenuService.getListPageData(this.filterModel).subscribe(function (res) {
            _this.data = res.GetAllMenuListDataViewResult;
            _this.totalRecords = res.TotalRecords;
        });
    };
    CustomDynamicMenuListComponent.prototype.redirectToEditPage = function (data) {
        this.router.navigate(['/pages/menu/' + data.MenuId]);
    };
    CustomDynamicMenuListComponent.prototype.deleteMenu = function (data) {
        var _this = this;
        if (confirm("Are you sure want to delete this menu ?")) {
            this._CustomDynamicMenuService.deleteMenu(data.MenuId).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    CustomDynamicMenuListComponent.prototype.inactiveMenu = function (data) {
        var _this = this;
        if (confirm("Are you sure want to inactive this menu ?")) {
            this._CustomDynamicMenuService.deactivateMenu(data.MenuId).subscribe(function (res) {
                _this.getList();
            });
        }
    };
    CustomDynamicMenuListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/menu']);
    };
    CustomDynamicMenuListComponent = __decorate([
        core_1.Component({
            selector: 'app-custom-dynamic-menu-list',
            templateUrl: './customdynamicmenulist.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
            providers: [customdynamicmenu_service_1.CustomDynamicMenuService],
        }),
        __metadata("design:paramtypes", [customdynamicmenu_service_1.CustomDynamicMenuService, router_1.Router, common_1.Location, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], CustomDynamicMenuListComponent);
    return CustomDynamicMenuListComponent;
}());
exports.CustomDynamicMenuListComponent = CustomDynamicMenuListComponent;
//# sourceMappingURL=customdynamicmenulist.component.js.map