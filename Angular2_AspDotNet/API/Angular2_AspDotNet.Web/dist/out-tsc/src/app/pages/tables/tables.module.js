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
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var directives_module_1 = require("../../theme/directives/directives.module");
var basic_tables_component_1 = require("./basic-tables/basic-tables.component");
exports.routes = [
    { path: '', redirectTo: 'basic-tables', pathMatch: 'full' },
    { path: 'basic-tables', component: basic_tables_component_1.BasicTablesComponent, data: { breadcrumb: 'Basic Tables' } },
    { path: 'dynamic-tables', loadChildren: 'app/pages/tables/dynamic-tables/dynamic-tables.module#DynamicTablesModule', data: { breadcrumb: 'Dynamic Tables' } }
];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_datatable_1.NgxDatatableModule,
                directives_module_1.DirectivesModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                basic_tables_component_1.BasicTablesComponent
            ]
        })
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map