import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { RiskAssessmentListComponent } from './riskassessmentlist.component';
import { RiskAssessmentComponent } from './riskassessment.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';

export const routes = [
    { path: '', component: RiskAssessmentComponent, pathMatch: 'full' },
    { path: 'list', component: RiskAssessmentListComponent, data: { breadcrumb: 'List' } },
    { path: 'riskassessment', component: RiskAssessmentComponent, data: { breadcrumb: 'Risk Assessment' } },
    { path: ':id', component: RiskAssessmentComponent, data: { breadcrumb: 'Edit' } },
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
        RouterModule.forChild(routes)
    ],
    declarations: [
        RiskAssessmentComponent,
        RiskAssessmentListComponent
    ]
})
export class RiskAssessmentModule { }
