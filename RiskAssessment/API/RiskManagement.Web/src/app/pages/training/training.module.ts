import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { TrainingListComponent } from './traininglist.component';
import { TrainingComponent } from './training.component';
import { TrainerComponent } from './trainer.component';
import { TraineeComponent } from './trainee.component';
import { TrainingReportComponent } from './trainingreport.component';
import { TrainerReportComponent } from './trainerreport.component';
import { UserReportComponent } from './userreport.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule, RadioButtonModule, InputTextareaModule, RatingModule } from 'primeng/primeng';

export const routes = [
    { path: '', component: TrainingComponent, pathMatch: 'full' },
    { path: 'list', component: TrainingListComponent, data: { breadcrumb: 'List' } },
    { path: 'training', component: TrainingComponent, data: { breadcrumb: 'Training' } },
    { path: 'trainer', component: TrainerComponent, data: { breadcrumb: 'Trainer' } },
    { path: 'trainee', component: TraineeComponent, data: { breadcrumb: 'Trainee' } },
    { path: 'trainingreport', component: TrainingReportComponent, data: { breadcrumb: 'Training Report' } },
    { path: 'userreport', component: UserReportComponent, data: { breadcrumb: 'User Report' } },
    { path: 'trainerreport', component: TrainerReportComponent, data: { breadcrumb: 'Trainer Report' } },
    { path: ':id', component: TrainingComponent, data: { breadcrumb: 'Edit' } },
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
        InputTextareaModule,
        RatingModule,
        RadioButtonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        TrainingListComponent,
        TrainingComponent,
        TrainerComponent,
        TraineeComponent,
        TrainingReportComponent,
        TrainerReportComponent,
        UserReportComponent
    ]
})
export class TrainingModule { }
