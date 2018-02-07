import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { DocumentService } from '../document/document.service';
import { DocumentListResultV1, DocumentListViewResult, DocumentListFilterModel } from '../document/document.model';

@Component({
    selector: 'app-documentlist',
    templateUrl: './documentlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [DocumentService],


})

export class DocumentListComponent implements OnInit {
    filterData: DocumentListFilterModel;
    data: DocumentListResultV1[];
    totalRecords: number = 0;
    constructor(private _DocumentService: DocumentService, private router: Router, private location: Location, private _fb: FormBuilder, private route: ActivatedRoute) { }
    ngOnInit() {
        this.filterData = new DocumentListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "DocumentName";
        this.filterData.SortOrder = "asc";
    }
    getList() {
        this._DocumentService.getDocumentList(this.filterData)
            .subscribe((res: DocumentListViewResult) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.DocumentListResult;
            });
    }
    public redirectToEditPage(event: DocumentListResultV1) {
        this.router.navigate(['/pages/document/' + event.DocumentID]);
    }

    public deleteAction(event: DocumentListResultV1) {
        if (confirm("Are you sure want to delete this document ?")) {
            this._DocumentService.deleteDocument(event.DocumentID).subscribe(res => {
                this.getList();
            });
        }
    }
    
    redirectToNewPage() {
        this.router.navigate(['/pages/document']);
    }

    loadDocumentList(event: LazyLoadEvent) {

        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "DocumentName" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.DocumentName = event.filters.DocumentName == undefined ? '' : event.filters.DocumentName.value;
        this.filterData.UploadBy = event.filters.UploadedBy == undefined ? '' : event.filters.UploadedBy.value;
        this.filterData.Version = event.filters.VersionNumber == undefined ? '' : event.filters.VersionNumber.value;
        this.filterData.Review = event.filters.Review == undefined ? '' : event.filters.Review.value;
        this.filterData.Type = event.filters.DocumentType == undefined ? '' : event.filters.DocumentType.value;
        this.getList();

    }

}

