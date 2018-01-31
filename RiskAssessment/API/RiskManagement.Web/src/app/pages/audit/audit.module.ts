import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { AuditListComponent } from './auditlist.component';
import { AuditSubjectReviewListComponent } from './auditsubjectreviewlist.component';
import { AuditComponent } from './audit.component';
import { AuditReviewComponent } from './auditreview.component';
import { AuditReportComponent } from './auditreport.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CronEditorModule } from "../cron-editor/cron-editor.module";
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';

export const routes = [
    { path: '', component: AuditComponent, pathMatch: 'full' },
    { path: 'list', component: AuditListComponent, data: { breadcrumb: 'List' } },
    { path: 'audit', component: AuditComponent, data: { breadcrumb: 'audit' } },
    { path: 'assignedauditlist', component: AuditSubjectReviewListComponent, data: { breadcrumb: 'Assigned Audit' } },
    { path: 'review', component: AuditReviewComponent, data: { breadcrumb: 'review' } },
    { path: 'review/:subid/:id', component: AuditReviewComponent, data: { breadcrumb: 'Review Edit' } },
    { path: 'review/:subid', component: AuditReviewComponent, data: { breadcrumb: 'Review Edit' } },
    { path: 'report/:auditid', component: AuditReportComponent, data: { breadcrumb: 'Report' } },
    { path: ':id', component: AuditComponent, data: { breadcrumb: 'Edit' } },
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        MultiselectDropdownModule,
        NgbModule.forRoot(),
        CalendarModule,
        SharedModule,
        DataTableModule,
        MultiSelectModule,
        CheckboxModule,
        CronEditorModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AuditComponent,
        AuditListComponent,
        AuditSubjectReviewListComponent,
        AuditReviewComponent,
        AuditReportComponent
    ]
})
export class AuditModule { }
