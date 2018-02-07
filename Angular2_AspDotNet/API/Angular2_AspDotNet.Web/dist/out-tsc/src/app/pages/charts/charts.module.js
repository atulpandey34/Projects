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
var ngx_charts_1 = require("@swimlane/ngx-charts");
var directives_module_1 = require("../../theme/directives/directives.module");
var bar_component_1 = require("./bar/bar.component");
var pie_component_1 = require("./pie/pie.component");
var line_component_1 = require("./line/line.component");
var bubble_component_1 = require("./bubble/bubble.component");
exports.routes = [
    { path: '', redirectTo: 'bar', pathMatch: 'full' },
    { path: 'bar', component: bar_component_1.BarComponent, data: { breadcrumb: 'Bar Charts' } },
    { path: 'pie', component: pie_component_1.PieComponent, data: { breadcrumb: 'Pie Charts' } },
    { path: 'line', component: line_component_1.LineComponent, data: { breadcrumb: 'Line Charts' } },
    { path: 'bubble', component: bubble_component_1.BubbleComponent, data: { breadcrumb: 'Bubble Charts' } }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_charts_1.NgxChartsModule,
                directives_module_1.DirectivesModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                bar_component_1.BarComponent,
                pie_component_1.PieComponent,
                line_component_1.LineComponent,
                bubble_component_1.BubbleComponent
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map