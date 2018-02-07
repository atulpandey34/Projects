import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PerformanceReviewMeetingListComponent } from './performancereviewmeetinglist.component';
import { PerformanceReviewMeetingComponent } from './performancereviewmeeting.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';
import { CronEditorModule } from "../cron-editor/cron-editor.module";

export const routes = [
    { path: '', component: PerformanceReviewMeetingComponent, pathMatch: 'full' },
    { path: 'list', component: PerformanceReviewMeetingListComponent, data: { breadcrumb: 'Performance Review Meeting List' } },
    { path: 'performancereviewmeeting', component: PerformanceReviewMeetingComponent, data: { breadcrumb: 'Performance Review Meeting' } },
    { path: ':id', component: PerformanceReviewMeetingComponent, data: { breadcrumb: 'Edit' } },
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
        PerformanceReviewMeetingListComponent,
        PerformanceReviewMeetingComponent
    ]
})
export class PerformanceReviewMeetingModule { }
