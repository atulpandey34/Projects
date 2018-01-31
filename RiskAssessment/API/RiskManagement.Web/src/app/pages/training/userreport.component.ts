import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { TrainingService } from './training.service';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import * as FileSaver from 'file-saver';
import { TrainingUserReportViewModel, UserListViewModel, TrainingUserReportFilterModel, ReportViewModel } from './training.model';

@Component({
    selector: 'app-userreport-component',
    templateUrl: './userreport.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './training.component.css'
    ],
    providers: [TrainingService]
})

export class UserReportComponent implements OnInit {
    trainingUserReportData: TrainingUserReportViewModel[] = [];
    totalRecords: number;
    userList: UserListViewModel[]= [];
    userId: number = 0;
    filterModel: TrainingUserReportFilterModel;

    constructor(private _trainingService: TrainingService, ) { }

    ngOnInit() {
        this.filterModel = new TrainingUserReportFilterModel();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
        this.getUserList();
        this.getUserReport();
    }

    getUserList() {
        this._trainingService.getUserList().subscribe((res: UserListViewModel[]) => {
            this.userList = res;
        });
    }

    getUserReport() {
        this.filterModel.UserId = this.userId == 0 ? null : this.userId;
        this._trainingService.GetUserReport(this.filterModel).subscribe((res: ReportViewModel<TrainingUserReportViewModel>) => {
            this.trainingUserReportData = res.ReportModel;
            this.totalRecords = res.TotalRecords;
        });
    };

    loadTrainingUserReportLazy(event: LazyLoadEvent) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";

        this.getUserReport();
    }

    exportCSV() {
        let downloadFilterModel = this.filterModel;
        downloadFilterModel.PageSize = this.totalRecords;
        this._trainingService.DownloadUserReport(downloadFilterModel).subscribe(res => {
            FileSaver.saveAs(res, "TrineeReport_" + (new Date()).toLocaleDateString() + ".csv");
        });
    }

}