import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventActionService } from '../eventactions/eventaction.service';
import { Location } from '@angular/common';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocationModel, TitleModel, SubTitleModel, Title, SubTitle, Action, EventActionStatusModel, events, EventFilterModel, EventViewModel, EventDataModel, EventFilterViewModel, EventAttendeeDataModel, ActionDataModel, ActionResponsiblePersonDataModel, AgendaDataModel } from '../calendar/formeventdata';
import { CategoryModel, ActionSourceModel, ActionCommentsListModel } from '../eventactions/eventaction.model';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { UserViewModel, RoleViewModel, SecurityQuestionModel, OrgaizationViewModel, UserViewListModel, UserViewList } from '../user/user.model';
import { AccordionModule, MultiSelectModule, SelectItem, CheckboxModule, MenuItem } from 'primeng/primeng';     //accordion and accordion tab
import { UserService } from "../user/user.service";
import { AssignmentService } from '../assignment/assignment.service';

import { AssignmentListResultV1, AssignmentListViewResult, AssignmentListFilterModel, AssignmentListResult, AssignmentListData } from '../assignment/assignment.model';
@Component({
    selector: 'app-assignmentlist',
    templateUrl: './assignmentlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [EventActionService, MasterEventDataService, UserService, AssignmentService],


})

export class AssignmentListComponent implements OnInit {
    filterData: AssignmentListFilterModel;
    data: AssignmentListResultV1[];
    totalRecords: number = 0;
    constructor(private _AssignmentService: AssignmentService, private _UserService: UserService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
    ngOnInit() {
        this.filterData = new AssignmentListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Title";
        this.filterData.SortOrder = "asc";
    }
    getList() {
        this._AssignmentService.getAssignmentList(this.filterData)
            .subscribe((res: AssignmentListViewResult) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.AssignmentListResult;
            });
    }
    public redirectToEditPage(event: AssignmentListResultV1) {
        this.router.navigate(['/pages/assignment/' + event.AssignmentID]);
    }
    public deleteAction(event: AssignmentListResultV1) {
        if (confirm("Are you sure want to delete this assessment ?")) {
            this._AssignmentService.deleteAssignment(event.AssignmentID).subscribe(res => {
                if (res == 0){
                    alert("Assignment is Active with a training. Please deactivate from training to Delete.");
                }
                else {
                    this.getList();
                }
            });
        }
    }
    redirectToNewPage() {
        this.router.navigate(['/pages/assignment']);
    }

    loadCarsLazy(event: LazyLoadEvent) {

        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "Title" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.Title = event.filters.Title == undefined ? '' : event.filters.Title.value;

        this.getList();

    }

}

