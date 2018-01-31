﻿
import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl, AbstractControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventActionService } from '../eventactions/eventaction.service';
import { Location } from '@angular/common';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { ObjectiveViewModel, LocationModel, TitleModel, SubTitleModel, Title, SubTitle, Action, EventActionStatusModel, events, EventFilterModel, EventViewModel, EventDataModel, EventFilterViewModel, EventAttendeeDataModel, ActionDataModel, ActionResponsiblePersonDataModel, AgendaDataModel } from '../calendar/formeventdata';
import { CategoryModel, ActionSourceModel, ActionCommentsListModel } from '../eventactions/eventaction.model';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { MeetingDataService } from '../meeting/meeting.service';
import { CalendarModule } from 'primeng/primeng';
import { GetUserWithRoleViewResult, RevieweeObjectiveViewModel, GetRoleResponsibilityViewModel } from './performancereviewmeeting.model';
import { PerformanceReviewMeetingDataService } from './performancereviewmeeting.service';
import * as FileSaver from 'file-saver';
import cronstrue from 'cronstrue';
import { CronOptions } from "../cron-editor/CronOptions";
//import { CronEditorModule } from "cron-editor/cron-editor";

@Component({
    selector: 'app-performancereviewmeeting',
    templateUrl: './performancereviewmeeting.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"
        , "../performancereviewmeeting/performancereviewmeeting.component.css"
        , "../riskassessment/riskassessment.component.css"],
    providers: [EventActionService, MasterEventDataService, MeetingDataService, PerformanceReviewMeetingDataService],


})

export class PerformanceReviewMeetingComponent implements OnInit {
    public eventId: number = 0;
    public revieweeId: number = 0;
    model: NgbDateStruct;
    public myForm: FormGroup; // our form model
    locationList: LocationModel[];
    titleList: Title[];
    subTitleList: SubTitle[];
    public cronExpression: string = '4 3 2 12 1/1 ? *';
    userWithRoleList: GetUserWithRoleViewResult[] = [];
    eventActionStatusList: EventActionStatusModel[];
    eventFilter: EventFilterModel = new EventFilterModel();
    public getRoleResponsibilityViewModel: GetRoleResponsibilityViewModel[] = [];
    @ViewChild('revieweeDropDown') revieweeDropDown;
    public cronOptions: CronOptions = {
        formInputClass: 'form-control cron-editor-input',
        formSelectClass: 'form-control cron-editor-select',
        formRadioClass: 'cron-editor-radio',
        formCheckboxClass: 'cron-editor-checkbox',

        defaultTime: "10:00:00",

        hideMinutesTab: true,
        hideHourlyTab: true,
        hideDailyTab: true,
        hideWeeklyTab: true,
        hideMonthlyTab: false,
        hideYearlyTab: false,
        hideAdvancedTab: true,

        use24HourTime: true,
        hideSeconds: true
    };
    constructor(private _PerformanceReviewMeetingDataService: PerformanceReviewMeetingDataService, private _meetingService: MeetingDataService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
    ngOnInit() {

        this.route.params.subscribe(params => {
            this.eventId = params['id'] as number; //log the value of id
        });
        this.getUserWithRoleNameList();
        this.onTitleIdChange(1);
        this.addhtmltoform('', '', '', this.eventId, 1, 0, 0);
        this._masterDataService.getTitleList().subscribe((res: TitleModel[]) => {
            this.titleList = [];
            for (let title of res) {
                this.titleList.push({
                    id: title.TitleID,
                    name: title.TitleName
                });
            }
        });


        this._masterDataService.getLocationList().subscribe((res: LocationModel[]) => {
            this.locationList = [];
            for (let location of res) {
                this.locationList.push({
                    LocationID: location.LocationID,
                    LocationName: location.LocationName,
                    RoomName: location.RoomName
                });
            }
        });



        this._masterDataService.getEventActionStatusList().subscribe((res: EventActionStatusModel[]) => {
            this.eventActionStatusList = [];
            for (let eventAction of res) {
                let eve: EventActionStatusModel = new EventActionStatusModel();
                eve.EventActionStatusID = eventAction.EventActionStatusID;
                eve.ActionName = eventAction.ActionName;
                this.eventActionStatusList.push(
                    eve);
            }
        });


        this._masterDataService.getUserList().subscribe(res => { this.myOptions = res; this.responsiblePersonOptions = res; });

        if (this.eventId > 0) {
            this.editMeeting(this.eventId);
        }

    }
    getUserWithRoleNameList() {
        this._masterDataService.getUserWithRole().subscribe((res: GetUserWithRoleViewResult[]) => {
            this.userWithRoleList = res;
        });
    }
    public revieweeObjectiveViewModel: RevieweeObjectiveViewModel[] = [];
    getRevieweeObjectives(revieweeId: number) {
        this.revieweeObjectiveViewModel = [];
        this._PerformanceReviewMeetingDataService.getRevieweeObjectives(revieweeId).subscribe((res: RevieweeObjectiveViewModel[]) => {
            this.revieweeObjectiveViewModel = res;
        });
    }
    public revieweeActionViewModel: RevieweeObjectiveViewModel[] = [];
    getRevieweeAction(revieweeId: number) {
        this.revieweeActionViewModel = [];
        this._PerformanceReviewMeetingDataService.getRevieweeAction(revieweeId).subscribe((res: RevieweeObjectiveViewModel[]) => {
            this.revieweeActionViewModel = res;
        });
    }
    getRolesResponsibility(revieweeId: number) {
        this.getRoleResponsibilityViewModel = [];
        this._PerformanceReviewMeetingDataService.getRolesResponsibility(revieweeId).subscribe((res: GetRoleResponsibilityViewModel[]) => {
            this.getRoleResponsibilityViewModel = res;
        });
    }
    getRolesResponsibilityWithVersionId(id: number) {
        this.getRoleResponsibilityViewModel = [];
        this._PerformanceReviewMeetingDataService.getRoleResponsibilityWithVersionId(id).subscribe((res: GetRoleResponsibilityViewModel[]) => {
            this.getRoleResponsibilityViewModel = res;
        });
    }
    onTitleIdChange(titleId: number) {

        //this.subTitleList = this._dataService.getSubTitles().filter((item) => item.titleId == titleId);
        this._masterDataService.getSubTitleList(titleId).subscribe((res: SubTitleModel[]) => {
            this.subTitleList = [];

            for (let subTitle of res) {
                this.subTitleList.push({
                    id: subTitle.SubTitleId,
                    name: subTitle.SubTitleName,
                    titleId: subTitle.TitleID
                });

            }
        });
    }


    addhtmltoform(selectedStartTime, selectedEndTime, selectedDate,
        eventId: number, EventType: number, EventSubType: number, LocalizationID: number,
        eventAttendees: EventAttendeeDataModel[] = [new EventAttendeeDataModel()],
        eventAction: ActionDataModel[] = [new ActionDataModel()],
        eventAgenda: AgendaDataModel[] = [new AgendaDataModel()], reviewee: number = 0, recurrenceEndDate: any = '') {
        var attenlist = [];
        if (eventId > 0)
            attenlist = eventAttendees.map(x => x.UserID);
        this.myForm = this._fb.group({
            title: [EventType, [Validators.required]],
            eventID: [eventId],
            location: [LocalizationID, [Validators.required]],
            subTitle: [5, Validators.required],
            startTime: [selectedStartTime, Validators.required],
            endTime: [selectedEndTime, Validators.required],
            date: [selectedDate, Validators.required],
            eventAttendees: [attenlist],
            Reviewee: [reviewee, Validators.required],
            RecurrenceEndDate: [recurrenceEndDate, Validators.required],
            agendalist:
            this._fb.array([
                this.initAgenda(new AgendaDataModel())
            ]),
            objectivelist:
            this._fb.array([
                this.initObjective(new ObjectiveViewModel())
            ]),
            actionlist: this._fb.array([
                this.initAction(new ActionDataModel())
            ])

        });
    }

    public responsiblePersonSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-secondary btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true,
        maxHeight: '300px'
    };
    // Settings configuration
    mySettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-default btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true,
        maxHeight: '300px'
    };
    public responsiblePersonTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find...',
        defaultTitle: 'Select',
        allSelected: 'All selected',
    };
    public responsiblePersonOptions: IMultiSelectOption[] = [];
    initObjective(eventObjective: ObjectiveViewModel = new ObjectiveViewModel()) {
        return this._fb.group({
            Text: [eventObjective.Text, Validators.required]
        })
    }
    initAgenda(eventAgenda: AgendaDataModel = new AgendaDataModel()) {
        return this._fb.group({
            Id: [],
            title: [eventAgenda.Title, Validators.required]
        })
    }
    initAction(actionModel: ActionDataModel = new ActionDataModel()) {
        if (actionModel.ActionResponsiblePersonDataModel == null || actionModel.ActionResponsiblePersonDataModel == undefined)
            actionModel.ActionResponsiblePersonDataModel = [new ActionResponsiblePersonDataModel()];
        let actionresp = [];
        if (this.eventId > 0)
            actionresp = actionModel.ActionResponsiblePersonDataModel.map(x => x.UserID) as number[];
        else
            actionModel.EventActionStatusID = 1;
        return this._fb.group({
            Id: [actionModel.ActionID],
            title: [actionModel.Title, Validators.required],
            dueDate: new FormControl({ year: new Date(actionModel.Duedate).getFullYear(), month: new Date(actionModel.Duedate).getMonth() + 1, day: new Date(actionModel.Duedate).getDate() }, [this.validateDueDate.bind(this)]),
            responsiblePerson: new FormControl(actionresp, [this.validateResponsiblePerson.bind(this)]),
            actionRequired: new FormControl(actionModel.IsActionRequired, [this.validateActionRequired.bind(this)]),
            EventActionStatusID: new FormControl(actionModel.EventActionStatusID, [this.validateActionStatus.bind(this)])

        })
    }
    validateActionRequired(control: AbstractControl): { [key: string]: any } {
        if (this.eventId === undefined || this.eventId === 0) {
            if (control.value == true) {
                let aa: number[] = [];
                aa.push(parseInt(this.revieweeId.toString()));
                control.parent.get("responsiblePerson").setValue(aa);
            }
        }
        return null;
    }
    validateDueDate(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else if (control.value == null || control.value.year == NaN)
            result = true;
        else
            result = null;

        return result ? { 'duedate': { value: control.value } } : null;


    }
    validateResponsiblePerson(control: AbstractControl): { [key: string]: any } {

        let result: boolean = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else if (control.value.length == 0)
            result = true;
        else
            result = null;

        return result ? { 'responsibleperson': { value: control.value } } : null;


    }
    validateActionStatus(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else
            if (control.value == null || control.value == "") {
                result = true;

            }
            else
                result = null;
        //alert(result);
        return (result ? { 'actionStatus': "Status is required" } : null);


    }


    validateMinutes(g: FormGroup): boolean {
        let result: boolean = true;
        if (g.get("actionRequired").value == false)
            result = true;
        else {
            if (g.get("title").value === ""
                || g.get("dueDate").value.year === NaN
                || g.get("responsiblePerson").value.length === 0
                || g.get("EventActionStatusID").value === null)
                result = false;
        }
        return result;
    }
    AddMoreAgenda() {
        // add agenda to the list
        const control = <FormArray>this.myForm.controls['agendalist'];
        control.push(this.initAgenda());
    }
    AddMoreAction() {
        // add action to the list
        const control = <FormArray>this.myForm.controls['actionlist'];
        control.push(this.initAction());
    }
    RemoveAgenda(i: number) {

        // remove agenda from the list
        const control = <FormArray>this.myForm.controls['agendalist'];
        control.removeAt(i);
    }
    RemoveAction(i: number) {

        // remove action from the list
        const control = <FormArray>this.myForm.controls['actionlist'];
        control.removeAt(i);
    }
    AddMoreObjective() {
        const control = <FormArray>this.myForm.controls['objectivelist'];
        control.push(this.initObjective());
    }
    RemoveObjective(i: number) {
        const control = <FormArray>this.myForm.controls['objectivelist'];
        control.removeAt(i);
    }
    optionsModel: number[] = [1, 2];



    // Text configuration
    myTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find',
        searchEmptyResult: 'Nothing found...',
        searchNoRenderText: 'Type in search box to see results...',
        defaultTitle: 'Select',
        allSelected: 'All selected',
    };

    // Labels / Parents
    myOptions: IMultiSelectOption[];

    editMeeting(id: number): void {
        this._meetingService.getEventData(id).subscribe((res: EventFilterViewModel) => {
            this.revieweeDropDown.nativeElement.disabled = true;
            this.getRevieweeObjectives(res.EventDataModel[0].Reviewee);
            this.getRevieweeAction(res.EventDataModel[0].Reviewee);
            this.revieweeId = res.EventDataModel[0].Reviewee;
            this.cronExpression = res.EventDataModel[0].RecurrencePattern;
            this.getRolesResponsibilityWithVersionId(res.EventDataModel[0].RoleResponsibilityVersionId);
            let startTime: Date = new Date(res.EventDataModel[0].StartTime);
            let endTime: Date = new Date(res.EventDataModel[0].EndTime);
            let selectedStartDate = { hour: startTime.getHours(), minute: startTime.getMinutes(), second: startTime.getSeconds() };
            let selectedEndtDate = { hour: endTime.getHours(), minute: endTime.getMinutes(), second: endTime.getSeconds() };
            let date: Date = new Date(res.EventDataModel[0].Date)
            let selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
            this.onTitleIdChange(res.EventDataModel[0].EventType as number);
            let endRecurrenceDate: Date = new Date(res.EventDataModel[0].RecurrenceEndDate);
            let selectedRecurrenceEndDate = { year: endRecurrenceDate.getFullYear(), month: endRecurrenceDate.getMonth() + 1, day: endRecurrenceDate.getDate() };
            this.addhtmltoform(selectedStartDate, selectedEndtDate, selectedDate,
                res.EventDataModel[0].EventID as number,
                res.EventDataModel[0].EventType as number,
                res.EventDataModel[0].EventSubType as number,
                res.EventDataModel[0].LocationID as number,
                res.EventAttendeeDataModel as EventAttendeeDataModel[],
                res.ActionDataModel as ActionDataModel[],
                res.AgendaDataModel as AgendaDataModel[],
                res.EventDataModel[0].Reviewee,
                selectedRecurrenceEndDate
            );
            const control = <FormArray>this.myForm.controls['agendalist'];
            control.removeAt(0);
            for (let x of res.AgendaDataModel as AgendaDataModel[]) {
                control.push(this.initAgenda(x));
            }
            //const control1 = <FormArray>this.myForm.controls['actionlist'];
            //control1.removeAt(0);
            //for (let x of res.ActionDataModel as ActionDataModel[]) {
            //    control1.push(this.initAction(x));
            //}
        });

    }
    saveeventformdata(data: events) {
        let currentEvent: EventViewModel = new EventViewModel();

        currentEvent.EventDataModel = new EventDataModel();
        currentEvent.EventDataModel.EventType = data.title;
        currentEvent.EventDataModel.EventSubType = data.subTitle;
        currentEvent.EventDataModel.Date = new Date(data.date.year, (data.date.month - 1), data.date.day).toLocaleDateString();
        currentEvent.EventDataModel.StartTime = new Date(data.date.year, (data.date.month - 1), data.date.day, data.startTime.hour, data.startTime.minute, data.startTime.second).toLocaleString();
        currentEvent.EventDataModel.EndTime = new Date(data.date.year, (data.date.month - 1), data.date.day, data.endTime.hour, data.endTime.minute, data.endTime.second).toLocaleString();
        currentEvent.EventDataModel.Recurring = false;
        currentEvent.EventDataModel.OrganizationID = 1;
        currentEvent.EventDataModel.LocationID = data.location;
        currentEvent.EventDataModel.EventID = data.eventID;
        currentEvent.EventDataModel.Reviewee = data.Reviewee;
        currentEvent.EventDataModel.RecurrencePattern = this.cronExpression;
        currentEvent.EventDataModel.RecurrenceEndDate = new Date(data.RecurrenceEndDate.year, (data.RecurrenceEndDate.month - 1), data.RecurrenceEndDate.day).toLocaleDateString();

        data.eventAttendees = [data.Reviewee, sessionStorage["UserId"] as number];

        if (data.eventAttendees != null && data.eventAttendees.length > 0) {
            let eventAttendeeArray: Array<EventAttendeeDataModel> = [];
            for (let entry of data.eventAttendees) {
                if (entry > 0) {
                    let tempmodel: EventAttendeeDataModel = new EventAttendeeDataModel();
                    tempmodel.UserID = entry;
                    eventAttendeeArray.push(tempmodel);
                }
            }
            currentEvent.EventAttendeeDataModel = eventAttendeeArray;
        }
        currentEvent.ObjectiveViewModel = [];
        if (data.objectivelist != null && data.objectivelist.length > 0) {
            for (let entry of data.objectivelist) {
                let objModel: ObjectiveViewModel = new ObjectiveViewModel();
                objModel.Text = (entry as any).Text;
                currentEvent.ObjectiveViewModel.push(objModel);
            }
        }

        if (data.agendalist != null && data.agendalist.length > 0) {
            let eventArray: AgendaDataModel[] = [];
            for (let entry of data.agendalist) {
                let tempmodel: AgendaDataModel = new AgendaDataModel();
                tempmodel.Title = entry.title;
                tempmodel.OrganizationID = 1;
                tempmodel.AgendaSource = "E";
                eventArray.push(tempmodel);
            }
            currentEvent.AgendaDataModel = eventArray;
        }

        if (data.actionlist != null && data.actionlist.length > 0) {
            let eventArray: ActionDataModel[] = [];
            for (let entry of data.actionlist) {
                let tempmodel: ActionDataModel = new ActionDataModel();
                tempmodel.Title = entry.title;
                tempmodel.OrganizationID = 1;
                tempmodel.ActionSource = "E";
                tempmodel.EventActionStatusID = entry.EventActionStatusID;
                tempmodel.IsActionRequired = entry.actionRequired;
                tempmodel.ActionID = entry.Id;
                tempmodel.ActionSourceID = 1;
                tempmodel.CategoryID = 6;
                tempmodel.Duedate = new Date(entry.dueDate.year, entry.dueDate.month - 1, entry.dueDate.day).toLocaleDateString();

                if (entry.responsiblePerson != null && entry.responsiblePerson.length > 0) {
                    let eventArray1: ActionResponsiblePersonDataModel[] = [];
                    for (let entry1 of entry.responsiblePerson) {
                        if (entry1 > 0) {
                            let tempmodel1: ActionResponsiblePersonDataModel = new ActionResponsiblePersonDataModel();
                            tempmodel1.UserID = entry1;
                            eventArray1.push(tempmodel1);
                        }
                    }
                    tempmodel.ActionResponsiblePersonDataModel = eventArray1;
                }

                eventArray.push(tempmodel);
            }

            currentEvent.ActionDataModel = eventArray;
        }



        this._masterDataService.addPerformanceReviewEvent(currentEvent).subscribe(res => {

            this.router.navigate(['/pages/performancereviewmeeting/list']);
        });
    }

    getRevieweeData(id: number) {
        this.revieweeId = id;
        this.getRevieweeAction(id);
        this.getRevieweeObjectives(id);
        this.getRolesResponsibility(id);
    }

    downloadMaterial(id: number, fileName: string) {
        this._PerformanceReviewMeetingDataService.downloadMaterial(id).subscribe(res => {
            FileSaver.saveAs(res, fileName);
        });
    }
    public parsedExpression: string = "";
    generateExpression() {
        this.parsedExpression = cronstrue.toString(this.cronExpression);
    }
    public generatedDate: string = "";
    generateAllOcuurence() {
        this._PerformanceReviewMeetingDataService.getAllOccurenceOfADate(this.cronExpression).subscribe((res: string[]) => {
            this.generatedDate = res.join("&#10;");
        });
    }
}
