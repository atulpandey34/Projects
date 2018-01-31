"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var directives_module_1 = require("../../theme/directives/directives.module");
var dashboard_component_1 = require("./dashboard.component");
var info_panels_component_1 = require("./info-panels/info-panels.component");
var visitors_component_1 = require("./visitors/visitors.component");
var cost_component_1 = require("./cost/cost.component");
var info_cards_component_1 = require("./info-cards/info-cards.component");
var disk_space_component_1 = require("./disk-space/disk-space.component");
var todo_component_1 = require("./todo/todo.component");
exports.routes = [
    { path: '', component: dashboard_component_1.DashboardComponent, pathMatch: 'full' }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ngx_charts_1.NgxChartsModule,
                directives_module_1.DirectivesModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                info_panels_component_1.InfoPanelsComponent,
                visitors_component_1.VisitorsComponent,
                cost_component_1.CostComponent,
                info_cards_component_1.InfoCardsComponent,
                disk_space_component_1.DiskSpaceComponent,
                todo_component_1.TodoComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map