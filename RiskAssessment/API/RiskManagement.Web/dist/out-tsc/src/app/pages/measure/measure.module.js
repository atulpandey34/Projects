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
var directives_module_1 = require("../../theme/directives/directives.module");
var primeng_1 = require("primeng/primeng");
var newmeasure_component_1 = require("./newmeasure.component");
var measure_list_component_1 = require("./measure-list.component");
var measure_chart_component_1 = require("./measure-chart.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var measure_service_1 = require("./measure.service");
exports.routes = [
    { path: '', component: newmeasure_component_1.MeasureComponent, pathMatch: 'full' },
    { path: 'measure', component: newmeasure_component_1.MeasureComponent, data: { breadcrumb: 'Measure' } },
    { path: 'list', component: measure_list_component_1.MeasureListComponent, data: { breadcrumb: 'List' } },
    { path: 'chart', component: measure_chart_component_1.MeasureChartComponent, data: { breadcrumb: 'Chart' } },
    { path: ':id', component: newmeasure_component_1.MeasureComponent, data: { breadcrumb: 'Edit' } },
];
var MeasureModule = /** @class */ (function () {
    function MeasureModule() {
    }
    MeasureModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                directives_module_1.DirectivesModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                forms_1.FormsModule,
                primeng_1.DataTableModule,
                primeng_1.ChartModule,
                primeng_1.MultiSelectModule,
                primeng_1.SharedModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                measure_list_component_1.MeasureListComponent,
                newmeasure_component_1.MeasureComponent,
                measure_chart_component_1.MeasureChartComponent
            ],
            providers: [measure_service_1.MeasureService]
        })
    ], MeasureModule);
    return MeasureModule;
}());
exports.MeasureModule = MeasureModule;
//# sourceMappingURL=measure.module.js.map