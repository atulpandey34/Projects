import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { LocationModel, TitleModel, SubTitleModel, Title, SubTitle, Action, EventActionStatusModel, events, EventFilterModel, EventViewModel, EventDataModel, EventFilterViewModel, EventAttendeeDataModel, ActionDataModel, ActionResponsiblePersonDataModel, AgendaDataModel } from '../calendar/formeventdata';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector: 'app-calendar',
    templateUrl: './app-calendar.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [MasterEventDataService],
    styles: [`.modal-dialog{
    overflow-y: initial !important
}
.modal-body{
    height: 400px;
    
    overflow-y: auto;
}`]
})
export class AppCalendarComponent implements OnInit {
    model: NgbDateStruct;
    public myForm: FormGroup; // our form model
    IsModelPopupOpen: boolean = false;
    IsShowClassdisplay: boolean = false;
    @ViewChild('modalContent') modalContent: TemplateRef<any>;

    view: string = 'month';

    viewDate: Date = new Date();

    modalData: {
        action: string,
        event: CalendarEvent
    };



    actions: CalendarEventAction[] = [{
        label: '<i class="fa fa-fw fa-pencil"></i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
            this.editEvent(event);
            //this.handleEvent('Edited', event);
        }
    }, {
        label: '<i class="fa fa-fw fa-times"></i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
            if (confirm("Are you sure want to cancel this event ?")) {
                this._dataService.deleteEvent(event.meta.EventID as number).subscribe(res => {
                    this.fetchEvents(null);
                    //this.handleEvent('Deleted', event);
                });
            }
            //this.handleEvent('Deleted', event);
        }
    }];

    refresh: Subject<any> = new Subject();
    locationList: LocationModel[];
    events: CalendarEvent[] = [
        //   {
        //   start: subDays(startOfDay(new Date()), 1),
        //   end: addDays(new Date(), 1),
        //   title: 'A 3 day event',
        //   color: colors.red,
        //   actions: this.actions
        // }, {
        //   start: startOfDay(new Date()),
        //   title: 'An event with no end date',
        //   color: colors.yellow,
        //   actions: this.actions
        // }, {
        //   start: subDays(endOfMonth(new Date()), 3),
        //   end: addDays(endOfMonth(new Date()), 3),
        //   title: 'A long event that spans 2 months',
        //   color: colors.blue
        // }, {
        //   start: addHours(startOfDay(new Date()), 2),
        //   end: new Date(),
        //   title: 'A draggable and resizable event',
        //   color: colors.yellow,
        //   actions: this.actions,
        //   resizable: {
        //     beforeStart: true,
        //     afterEnd: true
        //   },
        //   draggable: true
        // }
    ];

    activeDayIsOpen: boolean = true;
    titleList: Title[];
    subTitleList: SubTitle[];
    eventActionStatusList: EventActionStatusModel[];
    eventFilter: EventFilterModel = new EventFilterModel();

    constructor(private modal: NgbModal, private _fb: FormBuilder, private _dataService: MasterEventDataService) { }
    ngOnInit() {
        this.addhtmltoform('', '', '', 0, 0, 0, 0);
        this._dataService.getTitleList().subscribe((res: TitleModel[]) => {
            this.titleList = [];
            for (let title of res) {
                this.titleList.push({
                    id: title.TitleID,
                    name: title.TitleName
                });
            }
        });


        this._dataService.getLocationList().subscribe((res: LocationModel[]) => {
            this.locationList = [];
            for (let location of res) {
                this.locationList.push({
                    LocationID: location.LocationID,
                    LocationName: location.LocationName,
                    RoomName: location.RoomName
                });
            }
        });



        this._dataService.getEventActionStatusList().subscribe((res: EventActionStatusModel[]) => {
            this.eventActionStatusList = [];
            for (let eventAction of res) {
                let eve: EventActionStatusModel = new EventActionStatusModel();
                eve.EventActionStatusID = eventAction.EventActionStatusID;
                eve.ActionName = eventAction.ActionName;
                this.eventActionStatusList.push(
                    eve);
            }
        });


        this._dataService.getUserList().subscribe(res => { this.myOptions = res; this.responsiblePersonOptions = res; });
        this.fetchEvents(null);
    }
    fetchEvents(selectedView: string): void {
        if (selectedView != null && selectedView != undefined && selectedView != '')
            this.view = selectedView;
        this.eventFilter.viewType = this.view;
        this.eventFilter.date = this.viewDate.toLocaleDateString();
        this._dataService.getEventFilteredData(this.eventFilter)
            .subscribe((res: EventFilterViewModel) => {

                this.events = [];
                let eveModel: EventViewModel = new EventViewModel();

                for (let eventModel of res.EventDataModel) {
                    eveModel.EventDataModel = eventModel;

                    if (res.EventAttendeeDataModel.length > 0) {
                        eveModel.EventAttendeeDataModel = res.EventAttendeeDataModel.filter(x => x.EventID == eventModel.EventID);
                    }
                    if (res.AgendaDataModel.length > 0) {
                        eveModel.AgendaDataModel = res.AgendaDataModel.filter(x => x.SourceID == eventModel.EventID);
                    }

                    if (res.ActionDataModel.length > 0) {
                        eveModel.ActionDataModel = res.ActionDataModel.filter(x => x.SourceID == eventModel.EventID);
                    }

                    this.events.push({
                        start: new Date(eventModel.StartTime),
                        end: new Date(eventModel.EndTime),
                        title: eventModel.TitleName + " - " + eventModel.SubTitleName,
                        color: colors.red,
                        actions: this.actions,
                        meta: eveModel//eventModel.EventID

                    });
                }
            });
    }
    fetchEventListWithTtype(titleId: number) {
        this.eventFilter.type = titleId;
        this.onTitleIdChange(titleId);
        this.fetchEvents(null);
    }
    fetchEventListWithSubTtype(subTitleId: number) {
        this.eventFilter.subType = subTitleId;
        this.fetchEvents(null);
    }
    onTitleIdChange(titleId: number) {

        //this.subTitleList = this._dataService.getSubTitles().filter((item) => item.titleId == titleId);
        this._dataService.getSubTitleList(titleId).subscribe((res: SubTitleModel[]) => {
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

    dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
        let selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this.IsModelPopupOpen = true;
        this.IsShowClassdisplay = true;
        this.addhtmltoform('', '', selectedDate, 0, 0, 0, 0);
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }



    eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent(): void {
        this.events.push({
            title: 'New event',
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    }
    onmodelclose() {

        this.IsModelPopupOpen = false;
        this.IsShowClassdisplay = false;
    }


    addhtmltoform(selectedStartTime, selectedEndTime, selectedDate,
        eventId: number, EventType: number, EventSubType: number, LocalizationID: number,
        eventAttendees: EventAttendeeDataModel[] = [new EventAttendeeDataModel()],
        eventAction: ActionDataModel[] = [new ActionDataModel()],
        eventAgenda: AgendaDataModel[] = [new AgendaDataModel()]) {
        this.myForm = this._fb.group({
            title: [EventType, [Validators.required]],
            eventID: [eventId],
            location: [LocalizationID, [Validators.required]],
            subTitle: [EventSubType, Validators.required],
            startTime: [selectedStartTime, Validators.required],
            endTime: [selectedEndTime, Validators.required],
            date: [selectedDate, Validators.required],
            eventAttendees: [eventAttendees.map(x => x.UserID) as number[], Validators.required],
            agendalist:
            this._fb.array([
                this.initAgenda(new AgendaDataModel)
            ])
            //actionlist: this._fb.array([
            //    this.initAction(new ActionDataModel())
            //])

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
    public responsiblePersonOptions: IMultiSelectOption[] = [
        // { id: 1, name: 'Sweden'},
        // { id: 2, name: 'Norway' },
        // { id: 3, name: 'Canada' },
        // { id: 4, name: 'USA' }
    ];
    onResponsiblePersonChange(s) {

        // console.log(thi);
    }
    onEventAttendesChange(s) {

        // console.log(thi);
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
        return this._fb.group({
            Id: [actionModel.ActionID],
            title: [actionModel.Title, Validators.required],
            dueDate: [{ year: new Date(actionModel.Duedate).getFullYear(), month: new Date(actionModel.Duedate).getMonth() + 1, day: new Date(actionModel.Duedate).getDate() }, Validators.required],
            responsiblePerson: [actionModel.ActionResponsiblePersonDataModel.map(x => x.UserID), Validators.required],
            actionRequired: [actionModel.IsActionRequired],
            EventActionStatusID: [actionModel.EventActionStatusID, Validators.required]
        })
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

    //[{"id":1,"name":"vishant garg"},{"id":2,"name":"Devinder Singh"},{"id":3,"name":"HarshDeep Singh"}];
    // { id: 1, name: 'Car brands', isLabel: true },
    // { id: 2, name: 'Volvo', parentId: 1 },
    // { id: 3, name: 'Honda', parentId: 1 },
    // { id: 4, name: 'BMW', parentId: 1 },
    // { id: 5, name: 'Colors', isLabel: true },
    // { id: 6, name: 'Blue', parentId: 5 },
    // { id: 7, name: 'Red', parentId: 5 },
    // { id: 8, name: 'White', parentId: 5 }



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
        currentEvent.IsAppointmnet = true;
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



        this._dataService.addEvent(currentEvent).subscribe(res => {
            this.onmodelclose();
            this.fetchEvents(null);
        });
    }

    hourClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
        let selectedStartDate = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
        var selectedEndHour = new Date(date.getTime() + 30 * 60000);
        let selectedEndtDate = { hour: selectedEndHour.getHours(), minute: selectedEndHour.getMinutes(), second: selectedEndHour.getSeconds() };
        let selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this.IsModelPopupOpen = true;
        this.IsShowClassdisplay = true;
        this.addhtmltoform(selectedStartDate, selectedEndtDate, selectedDate, 0, 0, 0, 0);
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    editEvent(event: CalendarEvent): void {
        let startTime: Date = new Date(event.meta.EventDataModel.StartTime);
        let endTime: Date = new Date(event.meta.EventDataModel.EndTime);
        let selectedStartDate = { hour: startTime.getHours(), minute: startTime.getMinutes(), second: startTime.getSeconds() };
        let selectedEndtDate = { hour: endTime.getHours(), minute: endTime.getMinutes(), second: endTime.getSeconds() };
        let date: Date = new Date(event.meta.EventDataModel.Date)
        let selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this.IsModelPopupOpen = true;
        this.IsShowClassdisplay = true;
        this.onTitleIdChange(event.meta.EventDataModel.EventType as number);
        this.addhtmltoform(selectedStartDate, selectedEndtDate, selectedDate,
            event.meta.EventDataModel.EventID as number,
            event.meta.EventDataModel.EventType as number,
            event.meta.EventDataModel.EventSubType as number,
            event.meta.EventDataModel.LocationID as number,
            event.meta.EventAttendeeDataModel as EventAttendeeDataModel[],
            event.meta.ActionDataModel as ActionDataModel[],
            event.meta.AgendaDataModel as AgendaDataModel[]
        );
        const control = <FormArray>this.myForm.controls['agendalist'];
        control.removeAt(0);
        for (let x of event.meta.AgendaDataModel as AgendaDataModel[]) {
            control.push(this.initAgenda(x));
        }
        const control1 = <FormArray>this.myForm.controls['actionlist'];
        control1.removeAt(0);
        for (let x of event.meta.ActionDataModel as ActionDataModel[]) {
            control1.push(this.initAction(x));
        }

    }

    deleteEvent(eventId: number): void {
        if (confirm("Are you sure want to cancel this event ?")) {
            this._dataService.deleteEvent(eventId).subscribe(res => {
                this.onmodelclose();
                this.fetchEvents(null);
            });
        }
    }
}
