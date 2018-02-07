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
var auditlist_component_1 = require("./auditlist.component");
var auditsubjectreviewlist_component_1 = require("./auditsubjectreviewlist.component");
var audit_component_1 = require("./audit.component");
var auditreview_component_1 = require("./auditreview.component");
var auditreport_component_1 = require("./auditreport.component");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var cron_editor_module_1 = require("../cron-editor/cron-editor.module");
var primeng_1 = require("primeng/primeng");
exports.routes = [
    { path: '', component: audit_component_1.AuditComponent, pathMatch: 'full' },
    { path: 'list', component: auditlist_component_1.AuditListComponent, data: { breadcrumb: 'List' } },
    { path: 'audit', component: audit_component_1.AuditComponent, data: { breadcrumb: 'audit' } },
    { path: 'assignedauditlist', component: auditsubjectreviewlist_component_1.AuditSubjectReviewListComponent, data: { breadcrumb: 'Assigned Audit' } },
    { path: 'review', component: auditreview_component_1.AuditReviewComponent, data: { breadcrumb: 'review' } },
    { path: 'review/:subid/:id', component: auditreview_component_1.AuditReviewComponent, data: { breadcrumb: 'Review Edit' } },
    { path: 'review/:subid', component: auditreview_component_1.AuditReviewComponent, data: { breadcrumb: 'Review Edit' } },
    { path: 'report/:auditid', component: auditreport_component_1.AuditReportComponent, data: { breadcrumb: 'Report' } },
    { path: ':id', component: audit_component_1.AuditComponent, data: { breadcrumb: 'Edit' } },
];
var AuditModule = /** @class */ (function () {
    function AuditModule() {
    }
    AuditModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                directives_module_1.DirectivesModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                primeng_1.CalendarModule,
                primeng_1.SharedModule,
                primeng_1.DataTableModule,
                primeng_1.MultiSelectModule,
                primeng_1.CheckboxModule,
                cron_editor_module_1.CronEditorModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                audit_component_1.AuditComponent,
                auditlist_component_1.AuditListComponent,
                auditsubjectreviewlist_component_1.AuditSubjectReviewListComponent,
                auditreview_component_1.AuditReviewComponent,
                auditreport_component_1.AuditReportComponent
            ]
        })
    ], AuditModule);
    return AuditModule;
}());
exports.AuditModule = AuditModule;
//# sourceMappingURL=audit.module.js.map