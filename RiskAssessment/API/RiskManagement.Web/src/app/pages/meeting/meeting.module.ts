import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { MeetingListComponent } from './meetinglist.component';
import { MeetingComponent } from './meeting.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule} from 'primeng/primeng';

export const routes = [
    { path: '', component: MeetingComponent, pathMatch: 'full' },
    { path: 'list', component: MeetingListComponent, data: { breadcrumb: 'Meeting List' } },
    { path: 'meeting', component: MeetingComponent, data: { breadcrumb: 'Meeting' } },
    { path: ':id', component: MeetingComponent, data: { breadcrumb: 'Edit' } },
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
        MeetingListComponent,
        MeetingComponent
    ]
})
export class MeetingModule { }
