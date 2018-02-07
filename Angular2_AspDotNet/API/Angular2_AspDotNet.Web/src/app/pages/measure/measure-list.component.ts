import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, ChartModule, MultiSelectModule } from 'primeng/primeng';
import { environment } from '../../../environments/environment';
import { MeasureService } from './measure.service';
import { MeasureViewModel, MeasureColumnChartData, FrequencyViewModel, MeasureColumnViewModel, MeasureObjectiveViewModel, MeasureColumnDataViewModel, MeasureColumnDataByDateViewModel } from './measure.model';

let apiURL = environment.apiEndpoint;

@Component({
    selector: 'app-measureList-component',
    templateUrl: './measure-list.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './measure.component.css'
    ],
    providers: [],


})

export class MeasureListComponent implements OnInit {
    measureId: number = 0;
    measureList: MeasureViewModel[] = [];
    measureColumns: MeasureColumnViewModel[] = [];
    measureObjectives: MeasureObjectiveViewModel[] = [];
    measureColumnsData: MeasureColumnDataViewModel[] = [];
    measureColumnsDataByDate: MeasureColumnDataByDateViewModel[] = [];
    columnDataDate: NgbDateStruct = null;
    measureColumnsChartData: MeasureColumnChartData;
    public startDate: NgbDateStruct;
    public endDate: NgbDateStruct;
    options: any;
    constructor(private _measureService: MeasureService, private router: Router, private location: Location, private route: ActivatedRoute) {
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
    getChartData(measureId: number, measureColumnnId: number) {
        let sD: string = '';
        let eD: string = '';
        if (this.startDate != null && this.startDate != undefined)
            sD = new Date(this.startDate.year, (this.startDate.month - 1), this.startDate.day).toLocaleDateString();
        if (this.endDate != null && this.endDate != undefined)
            eD = new Date(this.endDate.year, (this.endDate.month - 1), this.endDate.day).toLocaleDateString();
        this.measureColumnsChartData = new MeasureColumnChartData();
        this._measureService.getChartData(measureId, measureColumnnId, sD, eD).subscribe((res: MeasureColumnChartData) => {
            this.measureColumnsChartData = res;
        });
    }
    getMeasureList() {
        this._measureService.getMeasureList().subscribe((res: MeasureViewModel[]) => {
            this.measureList = res;
        });
    }

    getMeasureColumns(columns: MeasureColumnViewModel[]) {
        this.measureColumns = columns;
    }

    getMeasureObjectives(objectives: MeasureObjectiveViewModel[]) {
        this.measureObjectives = objectives;
    }

    addEditMeasureColumnData(measure: MeasureViewModel) {
        this.measureColumnsData = [];
        this.columnDataDate = null;
        for (let column of measure.MeasureColumns) {
            let data: MeasureColumnDataViewModel = new MeasureColumnDataViewModel();
            data.MeasureColumnDataId = 0;
            data.MeasureId = column.MeasureId;
            data.MeasureColumnId = column.MeasureColumnId;
            data.ColumnName = column.ColumnName;
            data.ColumnValue = '';
            data.Date = '';
            this.measureColumnsData.push(data);
        }
        //(new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day)).toLocaleDateString()
    }

    saveMeasureColumnData() {
        let dataDate = (new Date(this.columnDataDate.year, this.columnDataDate.month - 1, this.columnDataDate.day)).toLocaleDateString();
        for (let columnData of this.measureColumnsData) {
            columnData.Date = dataDate;
        }
        this._measureService.saveMeasureColumnData(this.measureColumnsData).subscribe((res) => {
            console.log(res);
        }, error => {
            console.log(error);
        });
    }

    getMeasureColumnsData(measureId: number) {
        this._measureService.getMeasureColumnsDataByDate(measureId).subscribe((res: MeasureColumnDataByDateViewModel[]) => {
            this.measureColumnsDataByDate = res;
        });
    }
    public selectedMeasureId: number = 0;
    showChart(measureId: number) {
        this.selectedMeasureId = measureId;
        this.startDate = null;
        this.endDate = null;
        this.getChartData(measureId, 0);
    }
    redirectToNewPage() {
        this.router.navigate(['/pages/measure']);
    }
    filterChartData() {
        this.getChartData(this.selectedMeasureId, 0);
    }
}

