import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { TrainingService } from './training.service';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import * as FileSaver from 'file-saver';
import { TrainingReportViewModel, TrainingNeedListViewModel, TrainingReportFilterModel, ReportViewModel } from './training.model';

@Component({
    selector: 'app-trainingreport-component',
    templateUrl: './trainingreport.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './training.component.css'
    ],
    providers: [TrainingService]
})

export class TrainingReportComponent implements OnInit {
    trainingReportData: TrainingReportViewModel[] = [];
    totalRecords: number;
    trainingList: TrainingNeedListViewModel[]= [];
    trainingId: number = 0;
    startDate: NgbDateStruct= null;
    endDate: NgbDateStruct= null;
    filterModel: TrainingReportFilterModel;

    constructor(private _trainingService: TrainingService, ) { }

    ngOnInit() {
        this.filterModel = new TrainingReportFilterModel();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getTrainingNeedList();
        this.getTrainingReport();
    }

    getTrainingNeedList() {
        this._trainingService.GetTrainingNeedList().subscribe((res: TrainingNeedListViewModel[]) => {
            this.trainingList = res;
        });
    }

    getTrainingReport() {
        this.filterModel.TrainingId = this.trainingId == 0 ? null : this.trainingId;
        this.filterModel.StartDate = this.startDate == null ? "" : (new Date(this.startDate.year, this.startDate.month - 1, this.startDate.day)).toLocaleDateString();
        this.filterModel.EndDate = this.endDate == null ? "" : (new Date(this.endDate.year, this.endDate.month - 1, this.endDate.day)).toLocaleDateString();
        this._trainingService.GetTrainingReport(this.filterModel).subscribe((res: ReportViewModel<TrainingReportViewModel>) => {
            this.trainingReportData = res.ReportModel;
            this.totalRecords = res.TotalRecords;
        });
    };

    loadTrainingReportLazy(event: LazyLoadEvent) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";        
        
        this.getTrainingReport();
    }

    exportCSV() {
        let downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadTrainingReport(downloadFilterModel).subscribe(res => {
            FileSaver.saveAs(res, "TrainingReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    }

}