import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { TrainingService } from './training.service';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import * as FileSaver from 'file-saver';
import { TrainerReportViewModel, UserListViewModel, TrainerReportFilterModel, ReportViewModel } from './training.model';

@Component({
    selector: 'app-trainerreport-component',
    templateUrl: './trainerreport.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './training.component.css'
    ],
    providers: [TrainingService]
})

export class TrainerReportComponent implements OnInit {
    trainerReportData: TrainerReportViewModel[] = [];
    totalRecords: number;
    trainerList: UserListViewModel[]= [];
    trainerId: number = 0;
    filterModel: TrainerReportFilterModel;

    constructor(private _trainingService: TrainingService, ) { }

    ngOnInit() {
        this.filterModel = new TrainerReportFilterModel();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getTrainerList();
        this.getTrainerReport();
    }

    getTrainerList() {
        this._trainingService.getTrainerList().subscribe((res: UserListViewModel[]) => {
            this.trainerList = res;
        });
    }

    getTrainerReport() {
        this.filterModel.TrainerId = this.trainerId == 0 ? null : this.trainerId;
        this._trainingService.GetTrainerReport(this.filterModel).subscribe((res: ReportViewModel<TrainerReportViewModel>) => {
            this.trainerReportData = res.ReportModel;
            this.totalRecords = res.TotalRecords;
        });
    };

    loadTrainerReportLazy(event: LazyLoadEvent) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";

        this.getTrainerReport();
    }

    exportCSV() {
        let downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadTrainerReport(downloadFilterModel).subscribe(res => {
            FileSaver.saveAs(res, "TrainerReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    }
}