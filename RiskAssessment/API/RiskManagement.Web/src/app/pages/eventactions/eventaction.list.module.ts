import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { EventActionComponent } from './eventaction.list.component';
import { EventActionEditComponent } from './eventaction.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';
import { AuthenticatedHttpService } from '../../pages/errors/401.service';
import { HttpModule, Http } from '@angular/http';

export const routes = [
    { path: '', component: EventActionEditComponent, pathMatch: 'full' },
    { path: 'list', component: EventActionComponent, data: { breadcrumb: 'Action List' } },
    { path: 'action', component: EventActionEditComponent, data: { breadcrumb: 'Action' } },
    { path: ':id', component: EventActionEditComponent, data: { breadcrumb: 'Edit' } },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SmartTableModule,
        NgxDatatableModule,
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
    providers: [{ provide: Http, useClass: AuthenticatedHttpService }],
    declarations: [
        EventActionComponent,
        EventActionEditComponent
    ]
})
export class EventActionModule { }
