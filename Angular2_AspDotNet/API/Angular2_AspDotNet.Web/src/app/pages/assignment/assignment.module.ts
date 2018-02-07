import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { AssignmentListComponent } from './assignmentlist.component';
import { AssignmentComponent } from './assignment.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';

export const routes = [
    { path: '', component: AssignmentComponent, pathMatch: 'full' },
    { path: 'list', component: AssignmentListComponent, data: { breadcrumb: 'List' } },
    { path: 'assignment', component: AssignmentComponent, data: { breadcrumb: 'Assignment' } },
    { path: ':id', component: AssignmentComponent, data: { breadcrumb: 'Edit' } },
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
        AssignmentComponent,
        AssignmentListComponent
    ]
})
export class AssignmentModule { }
