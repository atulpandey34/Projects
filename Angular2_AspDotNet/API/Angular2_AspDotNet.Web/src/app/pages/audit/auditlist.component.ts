import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { AuditService } from '../audit/audit.service';
import { AuditListFilterModel, AuditListViewResult, AuditListResult, AuditViewModel, AuditSubject, AuditSubjectReviewViewModel } from '../audit/audit.model';

@Component({
    selector: 'app-auditlist',
    templateUrl: './auditlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [AuditService],


})

export class AuditListComponent implements OnInit {
    filterData: AuditListFilterModel;
    data: AuditListResult[];
    //AuditSubjectsModel: AuditSubject[] = [];
    AuditSubjectsReviewModel: AuditSubjectReviewViewModel[] = [];
    totalRecords: number = 0;
    constructor(private _AuditService: AuditService, private router: Router, private location: Location, private _fb: FormBuilder, private route: ActivatedRoute) { }
    ngOnInit() {
        this.filterData = new AuditListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Title";
        this.filterData.SortOrder = "asc";
    }
    getList() {
        this._AuditService.getAuditListData(this.filterData)
            .subscribe((res: AuditListViewResult) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.AuditListResult;
            });
    }

    getAuditSubjectsData(auditid: number) {
        this._AuditService.getSingleAudit(auditid).subscribe((res: AuditViewModel) => {
            this.AuditSubjectsReviewModel = res.AuditSubjectReviews = res.AuditSubjectReviews.filter(x => x.IsDeleted == false);
            for (let asr of res.AuditSubjectReviews) {
                let asub = res.AuditSubjects.filter(x => x.AuditSubjectID == asr.SubjectID && x.IsDeleted == false)[0];
                if (asub != undefined && asub != null) {
                    asr.Subject = asub.Subject;
                }
            }
            
        });
    }
    public redirectToEditPage(event: AuditListResult) {
        this.router.navigate(['/pages/audit/' + event.AuditID]);
    }
    public redirectToViewReportPage(event: AuditListResult) {
        this.router.navigate(['/pages/audit/report/' + event.AuditID]);
    }

    public deleteAudit(event: AuditListResult) {
        if (confirm("Are you sure want to delete this audit ?")) {
            this._AuditService.deleteAudit(event.AuditID).subscribe(res => {
                this.getList();
            });
        }
    }
    
    redirectToNewPage() {
        this.router.navigate(['/pages/audit']);
    }

    loadAuditorList(event: LazyLoadEvent) {

        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "Title" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.Title = event.filters.Title == undefined ? '' : event.filters.Title.value;
        this.filterData.Scope = event.filters.Scope == undefined ? '' : event.filters.Scope.value;
        //this.filterData.AuditorName = event.filters.AuditorName == undefined ? '' : event.filters.AuditorName.value;
        this.getList();

    }

}

