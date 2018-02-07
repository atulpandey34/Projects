
import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { EventActionService } from '../eventactions/eventaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocationModel, TitleModel, SubTitleModel, Title, SubTitle, Action, EventActionStatusModel, events, EventFilterModel, EventViewModel, EventDataModel, EventFilterViewModel, EventAttendeeDataModel, ActionDataModel, ActionResponsiblePersonDataModel, AgendaDataModel } from '../calendar/formeventdata';
import { CategoryModel, ActionSourceModel, ActionCommentsListModel, filterDropDown, ActionList, ActionListViewModel } from '../eventactions/eventaction.model';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { ServerDataSource } from '../../../../node_modules/ng2-smart-table/lib/data-source/server/server.data-source';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { AccordionModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem } from 'primeng/primeng';


@Component({
    selector: 'app-eventaction',
    templateUrl: './eventaction.list.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [EventActionService, MasterEventDataService],
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],

})

export class EventActionComponent implements OnInit {
    eventActionStatusList: EventActionStatusModel[] = [];
    data: ActionList[] = [];
    totalRecords: number = 0;
    pageNumber: number = 1;
    sortColumn: string = "Title";
    sortOrder: string = "asc";
    pageSize: number = 10;
    titleFilter: string = '';
    dueDateFilter: string = '';
    statusFilter: string = '';
    organizerFilter: string = '';
    evantActionStatusFilter = [
        { value: 'To-Do', title: 'To-Do7622' },
        { value: 'In-Progress', title: 'In-Progresser' },
        { value: 'Completed', title: 'Completeder' },
        { value: 'Archived', title: 'Archived' }
    ];
    constructor(private router: Router, private location: Location, private _fb: FormBuilder,
        private _dataService: EventActionService, private route: ActivatedRoute,
        private _masterDataService: MasterEventDataService) { }
    ngOnInit() {


        //this._masterDataService.getEventActionStatusList().subscribe((res: EventActionStatusModel[]) => {
        //    this.eventActionStatusList = [];
        //    for (let eventAction of res) {
        //        let eve: EventActionStatusModel = new EventActionStatusModel();
        //        eve.EventActionStatusID = eventAction.EventActionStatusID;
        //        eve.ActionName = eventAction.ActionName;
        //        this.eventActionStatusList.push(
        //            eve);

        //        //this.evantActionStatusFilter.push({ title: eventAction.ActionName, value: eventAction.EventActionStatusID.toString() });
        //    }
        //});
        //this.getData((data) => {

        //});
    }

    getEventActionStatus() {
        this._masterDataService.getEventActionStatusList().subscribe((res: EventActionStatusModel[]) => {
            this.eventActionStatusList = [];
            for (let eventAction of res) {
                this.evantActionStatusFilter.push({ title: eventAction.ActionName, value: eventAction.EventActionStatusID.toString() });
            }
            return this.evantActionStatusFilter;
        });

    }

    loadCarsLazy(event: LazyLoadEvent) {

        this.pageNumber = (event.first / event.rows) + 1;
        this.pageSize = event.rows;
        this.sortColumn = event.sortField;
        this.sortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.titleFilter = event.filters.Title == undefined ? '' : event.filters.Title.value;
        this.dueDateFilter = event.filters.Duedate == undefined ? '' : event.filters.Duedate.value;
        this.statusFilter = event.filters.EventActionStatusText == undefined ? '' : event.filters.EventActionStatusText.value;
        this.organizerFilter = event.filters.AddedBy == undefined ? '' : event.filters.AddedBy.value;

        this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder
            , this.titleFilter, this.dueDateFilter, this.statusFilter, this.organizerFilter);

    }

    getList(pageNo: number, pageSize: number, sortColumn: string, sortOrder: string,
        titleFilter: string,
        dueDateFilter: string,
        statusFilter: string,
        organizerFilter: string) {
        this._dataService.getActionList(pageNo, pageSize, sortColumn, sortOrder, titleFilter, dueDateFilter, statusFilter, organizerFilter).subscribe((res: ActionListViewModel) => {
            this.data = res.ActionListing;
            this.totalRecords = res.TotalRecords;
        });
    }
    public redirectToEditPage(event: ActionList) {
        this.router.navigate(['/pages/action/' + event.ActionID]);
    }
    public deleteAction(event: ActionList) {
        if (confirm("Are you sure want to archive this action ?")) {
            this._dataService.deleteAction(event.ActionID).subscribe(res => {
                this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.titleFilter, this.dueDateFilter, this.statusFilter, this.organizerFilter);
            });
        }
    }

    redirectToNewPage() {
        this.router.navigate(['/pages/action']);
    }


}

