
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
import { MeetingListModel, MeetingList, UserModel } from '../meeting/meeting.model';
import { MeetingDataService } from '../meeting/meeting.service';
import { AccordionModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem } from 'primeng/primeng';

@Component({
    selector: 'app-performancereviewmeetinglist',
    templateUrl: './performancereviewmeetinglist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [EventActionService, MasterEventDataService, MeetingDataService],


})

export class PerformanceReviewMeetingListComponent implements OnInit {
    data: MeetingListModel[] = [];
    totalRecords: number = 0;
    pageNumber: number = 1;
    sortColumn: string = "SubTitleName";
    sortOrder: string = "asc";
    pageSize: number = 10;
    ActionFilter: string;
    SubTitleFilter: string;
    DateFilter: string;
    LocationFilter: string;
    revieweeUserFilter: string;
    reviewerFilter: string;
    Users: SelectItem[];
    selectedAction: string[] = [];
    constructor(private _meetingService: MeetingDataService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
    ngOnInit() {


    }
    loadCarsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
        this.pageNumber = (event.first / event.rows) + 1;
        this.pageSize = event.rows;
        this.sortColumn = event.sortField;
        this.sortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.SubTitleFilter = event.filters.SubTitleName == undefined ? '' : event.filters.SubTitleName.value;
        this.ActionFilter = this.selectedAction.join(",");
        this.DateFilter = event.filters.MeetingDate == undefined ? '' : event.filters.MeetingDate.value;
        this.LocationFilter = event.filters.LocationName == undefined ? '' : event.filters.LocationName.value;
        this.revieweeUserFilter = event.filters.Reviewee == undefined ? '' : event.filters.Reviewee.value;
        this.reviewerFilter = event.filters.AddedBy == undefined ? '' : event.filters.AddedBy.value;
        this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder,
            this.ActionFilter, this.SubTitleFilter, this.DateFilter, this.LocationFilter,
            this.revieweeUserFilter, this.reviewerFilter);

    }

    getList(pageNo: number, pageSize: number, sortColumn: string, sortOrder: string,
        actionFilter: string, subTitlNameFilter: string, dateFilter: string, locationFilter: string,
        revieweeFilter: string, reviewer: string) {
        this.data = [];
        this._meetingService.getPerformanceReviewMeetingList(pageNo, pageSize, sortColumn,
            sortOrder, actionFilter, subTitlNameFilter, dateFilter,
            locationFilter, revieweeFilter, reviewer).subscribe((res: MeetingList) => {
            this.data = res.MeetingListModel;
            this.totalRecords = res.TotalRecords;
        });
    }


    editMeeting(meetingData: MeetingListModel) {
        this.router.navigate(['/pages/performancereviewmeeting/' + meetingData.EventID]);
    }

    deletingMeeting(meetingData: MeetingListModel) {
        if (confirm("Are you sure want to cancel this meeting ?")) {
            this._masterDataService.deleteEvent(meetingData.EventID).subscribe(res => {
                this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.ActionFilter, this.SubTitleFilter, this.DateFilter, this.LocationFilter, this.revieweeUserFilter, this.reviewerFilter);

            });
        }
    }


    redirectToNewPage() {
        this.router.navigate(['/pages/performancereviewmeeting']);
    }

}

