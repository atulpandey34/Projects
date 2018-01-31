"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var blank_component_1 = require("./blank/blank.component");
var search_component_1 = require("./search/search.component");
exports.routes = [
    {
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'membership', loadChildren: 'app/pages/membership/membership.module#MembershipModule', data: { breadcrumb: 'Membership' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'tools', loadChildren: 'app/pages/tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' } },
            { path: 'calendar', loadChildren: 'app/pages/calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' } },
            { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'blank', component: blank_component_1.BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'action', loadChildren: 'app/pages/eventactions/eventaction.list.module#EventActionModule', data: { breadcrumb: 'Action' } },
            { path: 'meeting', loadChildren: 'app/pages/meeting/meeting.module#MeetingModule', data: { breadcrumb: 'Meeting' } },
            { path: 'user', loadChildren: 'app/pages/user/user.module#UserModule', data: { breadcrumb: 'User' } },
            { path: 'correctiveaction', loadChildren: 'app/pages/correctiveaction/correctiveaction.module#CorrectiveActionModule', data: { breadcrumb: 'Corrective Action' } },
            { path: 'riskassessment', loadChildren: 'app/pages/riskassessment/riskassessment.module#RiskAssessmentModule', data: { breadcrumb: 'Risk Assessment' } },
            { path: 'assignment', loadChildren: 'app/pages/assignment/assignment.module#AssignmentModule', data: { breadcrumb: 'Assignment' } },
            { path: 'training', loadChildren: 'app/pages/training/training.module#TrainingModule', data: { breadcrumb: 'Training' } },
            { path: 'measure', loadChildren: 'app/pages/measure/measure.module#MeasureModule', data: { breadcrumb: 'Measure' } },
            { path: 'document', loadChildren: 'app/pages/document/document.module#DocumentModule', data: { breadcrumb: 'Document' } },
            { path: 'folder', loadChildren: 'app/pages/folder/folder.module#FolderModule', data: { breadcrumb: 'Folder' } },
            { path: 'rolesresponsibility', loadChildren: 'app/pages/rolesresponsibility/rolesresponsibility.module#RolesResponsibilityModule', data: { breadcrumb: 'Roles Responsibility' } },
            { path: 'organization', loadChildren: 'app/pages/organization/organization.module#OrganizationModule', data: { breadcrumb: 'Organization' } },
            { path: 'performancereviewmeeting', loadChildren: 'app/pages/performancereviewmeeting/performancereviewmeeting.module#PerformanceReviewMeetingModule', data: { breadcrumb: 'Performance Review Meeting' } },
            { path: 'audit', loadChildren: 'app/pages/audit/audit.module#AuditModule', data: { breadcrumb: 'Audit' } },
            { path: 'menu', loadChildren: 'app/pages/menu/customdynamicmenu.module#CustomDynamicMenuModule', data: { breadcrumb: 'Menu' } },
            { path: 'search', component: search_component_1.SearchComponent, data: { breadcrumb: 'Search' } }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=pages.routing.js.map