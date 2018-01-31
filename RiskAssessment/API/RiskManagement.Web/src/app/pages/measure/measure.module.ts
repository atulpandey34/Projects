import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { DataTableModule, SharedModule, ChartModule, MultiSelectModule } from 'primeng/primeng';
import { MeasureComponent } from './newmeasure.component';
import { MeasureListComponent } from './measure-list.component';
import { MeasureChartComponent } from './measure-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MeasureService } from './measure.service';

export const routes = [
    { path: '', component: MeasureComponent, pathMatch: 'full' },
    { path: 'measure', component: MeasureComponent, data: { breadcrumb: 'Measure' } },
    { path: 'list', component: MeasureListComponent, data: { breadcrumb: 'List' } },
    { path: 'chart', component: MeasureChartComponent, data: { breadcrumb: 'Chart' } },
    { path: ':id', component: MeasureComponent, data: { breadcrumb: 'Edit' } },
]

@NgModule({
    imports: [
        CommonModule,
        DirectivesModule,
        NgbModule.forRoot(),
        FormsModule,
        DataTableModule,
        ChartModule,
        MultiSelectModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MeasureListComponent,
        MeasureComponent,
        MeasureChartComponent
    ],
    providers: [MeasureService]
})
export class MeasureModule { }
