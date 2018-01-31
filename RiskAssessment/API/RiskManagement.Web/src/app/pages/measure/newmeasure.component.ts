import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MeasureService } from './measure.service';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import * as FileSaver from 'file-saver';
import { MeasureViewModel, FrequencyViewModel, MeasureColumnViewModel, MeasureObjectiveViewModel } from './measure.model';

@Component({
    selector: 'app-measure-component',
    templateUrl: './newmeasure.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './measure.component.css'
    ],
    providers: [MeasureService]
})

export class MeasureComponent implements OnInit {
    measureId: number = 0;
    measure: MeasureViewModel;
    measureColumn: MeasureColumnViewModel;
    measureColumns: MeasureColumnViewModel[] = [];
    measureObjective: MeasureObjectiveViewModel;
    measureObjectives: MeasureObjectiveViewModel[] = [];
    frequencyList: FrequencyViewModel[] = [];
    trainerId: number = 0;
    refreshGrid: boolean = true;

    constructor(private _measureService: MeasureService, private router: Router, private route: ActivatedRoute ) { }

    ngOnInit() {        
        this.getTrainerList();
        this.measure = new MeasureViewModel();
        this.measure.Description = '';
        this.measure.MeasureId = 0;
        this.measure.FrequencyId = 0;
        this.measure.Target = null;

        this.measureColumn = new MeasureColumnViewModel();
        this.measureColumn.MeasureColumnId = 0;
        this.measureColumn.MeasureId = this.measureId;
        this.measureColumn.ColumnName = "";

        this.measureObjective = new MeasureObjectiveViewModel();
        this.measureObjective.MeasureObjectiveId = 0;
        this.measureObjective.MeasureId = this.measureId;
        this.measureObjective.Description = "";

        this.route.params.subscribe(params => {
            this.measureId = params['id'];
        });
        if (this.measureId === undefined || this.measureId === null || this.measureId === 0) {
            this.measure.MeasureId = 0;
        }
        else
        {
            this.getMeasure(this.measureId);
        }
    }

    getTrainerList() {
        this._measureService.getFrequency().subscribe((res: FrequencyViewModel[]) => {
            this.frequencyList = res;
        });
    }

    getMeasure(id) {
        this._measureService.getMeasure(id).subscribe((res: MeasureViewModel) => {
            this.measure = res; 
            this.measureColumns = this.measure.MeasureColumns;
            this.measureObjectives = this.measure.MeasureObjectives;
        });
    }

    onSaveMeasure() {
        debugger;
        this._measureService.saveMeasure(this.measure).subscribe((res: number) => {
            console.log(res);
            this.router.navigate(['/pages/measure/' + res.toString()]);
            }, error => {
                console.log(error);
            });
    }

    addEditMeasureColumn(measure: MeasureColumnViewModel, action: string) {
        if (action == "addmeasure") {
            this.measureColumn = new MeasureColumnViewModel();
            this.measureColumn.MeasureColumnId = 0;
            this.measureColumn.MeasureId = this.measureId;
            this.measureColumn.ColumnName = "";
        }
        else {
            this.measureColumn = measure;
        }
    }

    onSaveColumn(action: string) {
        this.refreshGrid = false;
        let isNewColumn: number = this.measureColumn.MeasureColumnId;
        this._measureService.saveMeasureColumn(this.measureColumn).subscribe((res: MeasureColumnViewModel) => {
            console.log(res);
            if (isNewColumn === 0)
            {
                this.measureColumns.push(res);
            }            
            this.refreshGrid = true;
            if (action === "SaveAndAdd")
            {
                this.measureColumn = new MeasureColumnViewModel();
                this.measureColumn.MeasureColumnId = 0;
                this.measureColumn.MeasureId = this.measureId;
                this.measureColumn.ColumnName = "";
            }
        }, error => {
            console.log(error);
        });
    }

    addEditObjective(objective: MeasureObjectiveViewModel, action: string) {
        if (action == "addobjective") {
            this.measureObjective = new MeasureObjectiveViewModel();
            this.measureObjective.MeasureObjectiveId = 0;
            this.measureObjective.MeasureId = this.measureId;
            this.measureObjective.Description = "";
        }
        else {
            this.measureObjective = objective;
        }
    }

    onSaveObjective(action: string) {
        this.refreshGrid = false;
        let isNewColumn: number = this.measureObjective.MeasureObjectiveId;
        this._measureService.saveMeasureObjective(this.measureObjective).subscribe((res: MeasureObjectiveViewModel) => {
            console.log(res);
            if (isNewColumn === 0) {
                this.measureObjectives.push(res);
            }
            this.refreshGrid = true;
            if (action === "SaveAndAdd") {
                this.measureObjective = new MeasureObjectiveViewModel();
                this.measureObjective.MeasureObjectiveId = 0;
                this.measureObjective.MeasureId = this.measureId;
                this.measureObjective.Description = "";
            }
        }, error => {
            console.log(error);
        });
    }

}