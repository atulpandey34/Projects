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
var ng2_smart_table_1 = require("ng2-smart-table");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var directives_module_1 = require("../../../theme/directives/directives.module");
var smart_component_1 = require("./smart/smart.component");
var ngx_component_1 = require("./ngx/ngx.component");
exports.routes = [
    { path: '', redirectTo: 'smart', pathMatch: 'full' },
    { path: 'smart', component: smart_component_1.SmartComponent, data: { breadcrumb: 'Smart DataTable' } },
    { path: 'ngx', component: ngx_component_1.NgxComponent, data: { breadcrumb: 'NGX DataTable' } }
];
var DynamicTablesModule = /** @class */ (function () {
    function DynamicTablesModule() {
    }
    DynamicTablesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                ngx_datatable_1.NgxDatatableModule,
                directives_module_1.DirectivesModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                smart_component_1.SmartComponent,
                ngx_component_1.NgxComponent
            ]
        })
    ], DynamicTablesModule);
    return DynamicTablesModule;
}());
exports.DynamicTablesModule = DynamicTablesModule;
//# sourceMappingURL=dynamic-tables.module.js.map