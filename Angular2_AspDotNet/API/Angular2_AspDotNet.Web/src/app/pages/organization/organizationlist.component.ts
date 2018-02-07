import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { OrganizationService } from '../organization/organization.service';
import { OrganizationListFilterModel, OrganizationListViewResult, OrganizationListResult} from '../organization/organization.model';

@Component({
    selector: 'app-organizationlist',
    templateUrl: './organizationlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [OrganizationService],


})

export class DocumentListComponent implements OnInit {
    filterData: OrganizationListFilterModel;
    data: OrganizationListResult[];
    totalRecords: number = 0;
    constructor(private _OrganizationService: OrganizationService, private router: Router, private location: Location, private _fb: FormBuilder, private route: ActivatedRoute) { }
    ngOnInit() {
        this.filterData = new OrganizationListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "OrganizationName";
        this.filterData.SortOrder = "asc";
    }
    getList() {
        this._OrganizationService.getOrganizationListData(this.filterData)
            .subscribe((res: OrganizationListViewResult) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.OrganizationListResult;
            });
    }
    public redirectToEditPage(event: OrganizationListResult) {
        this.router.navigate(['/pages/organization/' + event.OrganizationID]);
    }

    public deleteAction(event: OrganizationListResult) {
        if (confirm("Are you sure want to deactivate this organization ?")) {
            this._OrganizationService.deleteOrganization(event.OrganizationID).subscribe(res => {
                this.getList();
            });
        }
    }
    
    redirectToNewPage() {
        this.router.navigate(['/pages/organization']);
    }

    loadOrganizationList(event: LazyLoadEvent) {

        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "OrganizationName" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.OrganizationName = event.filters.OrganizationName == undefined ? '' : event.filters.OrganizationName.value;
        this.filterData.OrganizationAddress = event.filters.OrganizationAddress == undefined ? '' : event.filters.OrganizationAddress.value;
        this.getList();

    }

}

