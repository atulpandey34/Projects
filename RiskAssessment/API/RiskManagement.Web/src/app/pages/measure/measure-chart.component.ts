import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import { CalendarModule, ChartModule, MultiSelectModule } from 'primeng/primeng';
import { environment } from '../../../environments/environment';
import { MeasureService } from './measure.service';
import { MeasureViewModel, FrequencyViewModel, MeasureColumnViewModel, MeasureObjectiveViewModel, MeasureColumnDataViewModel, MeasureColumnDataByDateViewModel, MeasureColumnChartData } from './measure.model';

let apiURL = environment.apiEndpoint;

@Component({
    selector: 'app-measureChart-component',
    templateUrl: './measure-chart.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './measure.component.css'
    ],
    providers: [],


})

export class MeasureChartComponent implements OnInit {
    @Input('measureId') measureId: number = 0;
    measureColumnId: number = 0;
    measureList: MeasureViewModel[] = [];
    measureColumns: MeasureColumnViewModel[] = [];
    measureColumnsData: MeasureColumnDataViewModel[] = [];
    measureColumnsChartData: MeasureColumnChartData;
    public startDate: NgbDateStruct;
    public endDate: NgbDateStruct;
    options: any;


    data: any;

    constructor(private _measureService: MeasureService, private router: Router, private location: Location, private route: ActivatedRoute) {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.options = {
            title: {
                display: true,
                text: 'Measure Chart',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            },
            trendlines: { 0: {} }
        };
    }
    ngOnInit() {

        this.getMeasureList();
    }

    getMeasureList() {
        this._measureService.getMeasureList().subscribe((res: MeasureViewModel[]) => {
            this.measureList = res;
        });
    }

    onMeasureChange() {
        this.getChartData(this.measureId, 0);
        //this.getMeasureColumns(this.measureId);
    }

    getMeasureColumns(id: number) {
        this._measureService.getMeasureColumns(id).subscribe((res: MeasureColumnViewModel[]) => {
            this.measureColumns = res;
        });
    }

    onMeasureColumnChange() {
        this.getChartData(this.measureId, this.measureColumnId);
    }

    getChartData(measureId: number, measureColumnnId: number) {
        let sD: string = '';
        let eD: string = '';
        if (this.startDate != null && this.startDate != undefined)
            sD = new Date(this.startDate.year, (this.startDate.month - 1), this.startDate.day).toLocaleDateString();
        if (this.endDate != null && this.endDate != undefined)
            eD = new Date(this.endDate.year, (this.endDate.month - 1), this.endDate.day).toLocaleDateString();
        this._measureService.getChartData(measureId, measureColumnnId, sD, eD).subscribe((res: MeasureColumnChartData) => {
            this.measureColumnsChartData = res;
        });
    }
}

