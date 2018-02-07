import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { CorrectiveActionListComponent } from '../correctiveaction/correctiveactionlist.component';
import { CorrectiveActionComponent } from '../correctiveaction/correctiveaction.component';
import { CorrectiveActionRequiredComponent } from '../correctiveaction/correctiveaction.actionrequired.conmponent';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';

export const routes = [
    { path: '', component: CorrectiveActionComponent, pathMatch: 'full' },
    { path: 'list', component: CorrectiveActionListComponent, data: { breadcrumb: 'Corrective Action List' } },
    { path: 'correctiveaction', component: CorrectiveActionComponent, data: { breadcrumb: 'Corrective Action' } },
    { path: 'actionrequired/:id', component: CorrectiveActionRequiredComponent, data: { breadcrumb: 'Corrective Action Required' } },
    { path: ':id', component: CorrectiveActionComponent, data: { breadcrumb: 'Edit' } },
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
        CorrectiveActionComponent,
        CorrectiveActionListComponent,
        CorrectiveActionRequiredComponent
    ]
})
export class CorrectiveActionModule { }
