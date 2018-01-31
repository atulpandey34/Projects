let apiURL = "http://localriskmanagementapi.com/api";
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
import { MeetingListModel, MeetingList } from './meeting.model';
import { MeetingDataService } from './meeting.service';


@Component({
    selector: 'app-meetinglist',
    templateUrl: './meetinglist.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [EventActionService, MasterEventDataService],


})

export class MeetingListComponent implements OnInit {
    data: MeetingListModel[] = [];
    totalRecords: number = 0;
    constructor(private _meetingService: MeetingDataService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
    ngOnInit() {
        this._meetingService.getMeetingList(1, 10, "", "", "", "", "", "").subscribe((res: MeetingList) => {
            this.data = res.MeetingListModel;
            this.totalRecords = res.TotalRecords;
        });

    }
    loadCarsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network

    }









}

