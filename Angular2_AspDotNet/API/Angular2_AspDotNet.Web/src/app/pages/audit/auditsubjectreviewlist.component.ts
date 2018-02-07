import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { AuditService } from '../audit/audit.service';
import { AuditSubjectListFilterModel, AuditSubjectListViewResult, AuditSubjectListResult } from '../audit/audit.model';

@Component({
    selector: 'app-auditsubjectreviewlist',
    templateUrl: './auditsubjectreviewlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [AuditService],


})

export class AuditSubjectReviewListComponent implements OnInit {
    filterData: AuditSubjectListFilterModel;
    data: AuditSubjectListResult[];
    totalRecords: number = 0;
    constructor(private _AuditService: AuditService, private router: Router, private location: Location, private _fb: FormBuilder, private route: ActivatedRoute) { }
    ngOnInit() {
        this.filterData = new AuditSubjectListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Subject";
        this.filterData.SortOrder = "asc";
    }
    getList() {
        this._AuditService.getAuditSubjectListData(this.filterData)
            .subscribe((res: AuditSubjectListViewResult) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.AuditSubjectListResult;
            });
    }
    
    public redirectToEditAuditReviewPage(event: AuditSubjectListResult) {
        this.router.navigate(['/pages/audit/review/' + event.AuditSubjectID + '/' + event.AuditSubjectReviewID]);
    }

    //public deleteAudit(event: AuditListResult) {
    //    if (confirm("Are you sure want to delete this audit ?")) {
    //        this._AuditService.deleteAudit(event.AuditID).subscribe(res => {
    //            this.getList();
    //        });
    //    }
    //}

    loadAuditorSubjectList(event: LazyLoadEvent) {
        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "Subject" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.Subject = event.filters.Subject == undefined ? '' : event.filters.Subject.value;
        this.filterData.Auditee = event.filters.Auditee == undefined ? '' : event.filters.Auditee.value;
        this.filterData.Location = event.filters.Location == undefined ? '' : event.filters.Location.value;
        this.filterData.PlannedAuditDate = event.filters.PlannedAuditDate == undefined ? '' : event.filters.PlannedAuditDate.value;
        this.getList();
    }

}

