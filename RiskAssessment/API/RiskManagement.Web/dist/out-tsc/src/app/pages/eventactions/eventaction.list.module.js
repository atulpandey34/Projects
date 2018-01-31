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
var forms_1 = require("@angular/forms");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var directives_module_1 = require("../../theme/directives/directives.module");
var eventaction_list_component_1 = require("./eventaction.list.component");
var eventaction_component_1 = require("./eventaction.component");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var primeng_1 = require("primeng/primeng");
var _401_service_1 = require("../../pages/errors/401.service");
var http_1 = require("@angular/http");
exports.routes = [
    { path: '', component: eventaction_component_1.EventActionEditComponent, pathMatch: 'full' },
    { path: 'list', component: eventaction_list_component_1.EventActionComponent, data: { breadcrumb: 'Action List' } },
    { path: 'action', component: eventaction_component_1.EventActionEditComponent, data: { breadcrumb: 'Action' } },
    { path: ':id', component: eventaction_component_1.EventActionEditComponent, data: { breadcrumb: 'Edit' } },
];
var EventActionModule = /** @class */ (function () {
    function EventActionModule() {
    }
    EventActionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng2_smart_table_1.Ng2SmartTableModule,
                ngx_datatable_1.NgxDatatableModule,
                directives_module_1.DirectivesModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                primeng_1.CalendarModule,
                primeng_1.SharedModule,
                primeng_1.DataTableModule,
                primeng_1.MultiSelectModule,
                primeng_1.CheckboxModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            providers: [{ provide: http_1.Http, useClass: _401_service_1.AuthenticatedHttpService }],
            declarations: [
                eventaction_list_component_1.EventActionComponent,
                eventaction_component_1.EventActionEditComponent
            ]
        })
    ], EventActionModule);
    return EventActionModule;
}());
exports.EventActionModule = EventActionModule;
//# sourceMappingURL=eventaction.list.module.js.map