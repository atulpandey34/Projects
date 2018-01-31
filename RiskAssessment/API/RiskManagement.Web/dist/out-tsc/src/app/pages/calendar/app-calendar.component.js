"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var date_fns_1 = require("date-fns");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var Subject_1 = require("rxjs/Subject");
var forms_1 = require("@angular/forms");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var formeventdata_1 = require("../calendar/formeventdata");
require("rxjs/add/operator/map");
var colors = {
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
var AppCalendarComponent = /** @class */ (function () {
    function AppCalendarComponent(modal, _fb, _dataService) {
        var _this = this;
        this.modal = modal;
        this._fb = _fb;
        this._dataService = _dataService;
        this.IsModelPopupOpen = false;
        this.IsShowClassdisplay = false;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [{
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.editEvent(event);
                    //this.handleEvent('Edited', event);
                }
            }, {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    if (confirm("Are you sure want to cancel this event ?")) {
                        _this._dataService.deleteEvent(event.meta.EventID).subscribe(function (res) {
                            _this.fetchEvents(null);
                            //this.handleEvent('Deleted', event);
                        });
                    }
                    //this.handleEvent('Deleted', event);
                }
            }];
        this.refresh = new Subject_1.Subject();
        this.events = [];
        this.activeDayIsOpen = true;
        this.eventFilter = new formeventdata_1.EventFilterModel();
        this.responsiblePersonSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '300px'
        };
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '300px'
        };
        this.responsiblePersonTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.responsiblePersonOptions = [];
        this.optionsModel = [1, 2];
        // Text configuration
        this.myTexts = {
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
    }
    AppCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addhtmltoform('', '', '', 0, 0, 0, 0);
        this._dataService.getTitleList().subscribe(function (res) {
            _this.titleList = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var title = res_1[_i];
                _this.titleList.push({
                    id: title.TitleID,
                    name: title.TitleName
                });
            }
        });
        this._dataService.getLocationList().subscribe(function (res) {
            _this.locationList = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var location_1 = res_2[_i];
                _this.locationList.push({
                    LocationID: location_1.LocationID,
                    LocationName: location_1.LocationName,
                    RoomName: location_1.RoomName
                });
            }
        });
        this._dataService.getEventActionStatusList().subscribe(function (res) {
            _this.eventActionStatusList = [];
            for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                var eventAction = res_3[_i];
                var eve = new formeventdata_1.EventActionStatusModel();
                eve.EventActionStatusID = eventAction.EventActionStatusID;
                eve.ActionName = eventAction.ActionName;
                _this.eventActionStatusList.push(eve);
            }
        });
        this._dataService.getUserList().subscribe(function (res) { _this.myOptions = res; _this.responsiblePersonOptions = res; });
        this.fetchEvents(null);
    };
    AppCalendarComponent.prototype.fetchEvents = function (selectedView) {
        var _this = this;
        if (selectedView != null && selectedView != undefined && selectedView != '')
            this.view = selectedView;
        this.eventFilter.viewType = this.view;
        this.eventFilter.date = this.viewDate.toLocaleDateString();
        this._dataService.getEventFilteredData(this.eventFilter)
            .subscribe(function (res) {
            _this.events = [];
            var eveModel = new formeventdata_1.EventViewModel();
            var _loop_1 = function (eventModel) {
                eveModel.EventDataModel = eventModel;
                if (res.EventAttendeeDataModel.length > 0) {
                    eveModel.EventAttendeeDataModel = res.EventAttendeeDataModel.filter(function (x) { return x.EventID == eventModel.EventID; });
                }
                if (res.AgendaDataModel.length > 0) {
                    eveModel.AgendaDataModel = res.AgendaDataModel.filter(function (x) { return x.SourceID == eventModel.EventID; });
                }
                if (res.ActionDataModel.length > 0) {
                    eveModel.ActionDataModel = res.ActionDataModel.filter(function (x) { return x.SourceID == eventModel.EventID; });
                }
                _this.events.push({
                    start: new Date(eventModel.StartTime),
                    end: new Date(eventModel.EndTime),
                    title: eventModel.TitleName + " - " + eventModel.SubTitleName,
                    color: colors.red,
                    actions: _this.actions,
                    meta: eveModel //eventModel.EventID
                });
            };
            for (var _i = 0, _a = res.EventDataModel; _i < _a.length; _i++) {
                var eventModel = _a[_i];
                _loop_1(eventModel);
            }
        });
    };
    AppCalendarComponent.prototype.fetchEventListWithTtype = function (titleId) {
        this.eventFilter.type = titleId;
        this.onTitleIdChange(titleId);
        this.fetchEvents(null);
    };
    AppCalendarComponent.prototype.fetchEventListWithSubTtype = function (subTitleId) {
        this.eventFilter.subType = subTitleId;
        this.fetchEvents(null);
    };
    AppCalendarComponent.prototype.onTitleIdChange = function (titleId) {
        var _this = this;
        //this.subTitleList = this._dataService.getSubTitles().filter((item) => item.titleId == titleId);
        this._dataService.getSubTitleList(titleId).subscribe(function (res) {
            _this.subTitleList = [];
            for (var _i = 0, res_4 = res; _i < res_4.length; _i++) {
                var subTitle = res_4[_i];
                _this.subTitleList.push({
                    id: subTitle.SubTitleId,
                    name: subTitle.SubTitleName,
                    titleId: subTitle.TitleID
                });
            }
        });
    };
    AppCalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        var selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this.IsModelPopupOpen = true;
        this.IsShowClassdisplay = true;
        this.addhtmltoform('', '', selectedDate, 0, 0, 0, 0);
        if (date_fns_1.isSameMonth(date, this.viewDate)) {
            if ((date_fns_1.isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    AppCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    AppCalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    AppCalendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: date_fns_1.startOfDay(new Date()),
            end: date_fns_1.endOfDay(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    AppCalendarComponent.prototype.onmodelclose = function () {
        this.IsModelPopupOpen = false;
        this.IsShowClassdisplay = false;
    };
    AppCalendarComponent.prototype.addhtmltoform = function (selectedStartTime, selectedEndTime, selectedDate, eventId, EventType, EventSubType, LocalizationID, eventAttendees, eventAction, eventAgenda) {
        if (eventAttendees === void 0) { eventAttendees = [new formeventdata_1.EventAttendeeDataModel()]; }
        if (eventAction === void 0) { eventAction = [new formeventdata_1.ActionDataModel()]; }
        if (eventAgenda === void 0) { eventAgenda = [new formeventdata_1.AgendaDataModel()]; }
        this.myForm = this._fb.group({
            title: [EventType, [forms_1.Validators.required]],
            eventID: [eventId],
            location: [LocalizationID, [forms_1.Validators.required]],
            subTitle: [EventSubType, forms_1.Validators.required],
            startTime: [selectedStartTime, forms_1.Validators.required],
            endTime: [selectedEndTime, forms_1.Validators.required],
            date: [selectedDate, forms_1.Validators.required],
            eventAttendees: [eventAttendees.map(function (x) { return x.UserID; }), forms_1.Validators.required],
            agendalist: this._fb.array([
                this.initAgenda(new formeventdata_1.AgendaDataModel)
            ])
            //actionlist: this._fb.array([
            //    this.initAction(new ActionDataModel())
            //])
        });
    };
    AppCalendarComponent.prototype.onResponsiblePersonChange = function (s) {
        // console.log(thi);
    };
    AppCalendarComponent.prototype.onEventAttendesChange = function (s) {
        // console.log(thi);
    };
    AppCalendarComponent.prototype.initAgenda = function (eventAgenda) {
        if (eventAgenda === void 0) { eventAgenda = new formeventdata_1.AgendaDataModel(); }
        return this._fb.group({
            Id: [],
            title: [eventAgenda.Title, forms_1.Validators.required]
        });
    };
    AppCalendarComponent.prototype.initAction = function (actionModel) {
        if (actionModel === void 0) { actionModel = new formeventdata_1.ActionDataModel(); }
        if (actionModel.ActionResponsiblePersonDataModel == null || actionModel.ActionResponsiblePersonDataModel == undefined)
            actionModel.ActionResponsiblePersonDataModel = [new formeventdata_1.ActionResponsiblePersonDataModel()];
        return this._fb.group({
            Id: [actionModel.ActionID],
            title: [actionModel.Title, forms_1.Validators.required],
            dueDate: [{ year: new Date(actionModel.Duedate).getFullYear(), month: new Date(actionModel.Duedate).getMonth() + 1, day: new Date(actionModel.Duedate).getDate() }, forms_1.Validators.required],
            responsiblePerson: [actionModel.ActionResponsiblePersonDataModel.map(function (x) { return x.UserID; }), forms_1.Validators.required],
            actionRequired: [actionModel.IsActionRequired],
            EventActionStatusID: [actionModel.EventActionStatusID, forms_1.Validators.required]
        });
    };
    AppCalendarComponent.prototype.AddMoreAgenda = function () {
        // add agenda to the list
        var control = this.myForm.controls['agendalist'];
        control.push(this.initAgenda());
    };
    AppCalendarComponent.prototype.AddMoreAction = function () {
        // add action to the list
        var control = this.myForm.controls['actionlist'];
        control.push(this.initAction());
    };
    AppCalendarComponent.prototype.RemoveAgenda = function (i) {
        // remove agenda from the list
        var control = this.myForm.controls['agendalist'];
        control.removeAt(i);
    };
    AppCalendarComponent.prototype.RemoveAction = function (i) {
        // remove action from the list
        var control = this.myForm.controls['actionlist'];
        control.removeAt(i);
    };
    //[{"id":1,"name":"vishant garg"},{"id":2,"name":"Devinder Singh"},{"id":3,"name":"HarshDeep Singh"}];
    // { id: 1, name: 'Car brands', isLabel: true },
    // { id: 2, name: 'Volvo', parentId: 1 },
    // { id: 3, name: 'Honda', parentId: 1 },
    // { id: 4, name: 'BMW', parentId: 1 },
    // { id: 5, name: 'Colors', isLabel: true },
    // { id: 6, name: 'Blue', parentId: 5 },
    // { id: 7, name: 'Red', parentId: 5 },
    // { id: 8, name: 'White', parentId: 5 }
    AppCalendarComponent.prototype.saveeventformdata = function (data) {
        var _this = this;
        var currentEvent = new formeventdata_1.EventViewModel();
        currentEvent.EventDataModel = new formeventdata_1.EventDataModel();
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
            var eventAttendeeArray = [];
            for (var _i = 0, _a = data.eventAttendees; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry > 0) {
                    var tempmodel = new formeventdata_1.EventAttendeeDataModel();
                    tempmodel.UserID = entry;
                    eventAttendeeArray.push(tempmodel);
                }
            }
            currentEvent.EventAttendeeDataModel = eventAttendeeArray;
        }
        if (data.agendalist != null && data.agendalist.length > 0) {
            var eventArray = [];
            for (var _b = 0, _c = data.agendalist; _b < _c.length; _b++) {
                var entry = _c[_b];
                var tempmodel = new formeventdata_1.AgendaDataModel();
                tempmodel.Title = entry.title;
                tempmodel.OrganizationID = 1;
                tempmodel.AgendaSource = "E";
                eventArray.push(tempmodel);
            }
            currentEvent.AgendaDataModel = eventArray;
        }
        if (data.actionlist != null && data.actionlist.length > 0) {
            var eventArray = [];
            for (var _d = 0, _e = data.actionlist; _d < _e.length; _d++) {
                var entry = _e[_d];
                var tempmodel = new formeventdata_1.ActionDataModel();
                tempmodel.Title = entry.title;
                tempmodel.OrganizationID = 1;
                tempmodel.ActionSource = "E";
                tempmodel.EventActionStatusID = entry.EventActionStatusID;
                tempmodel.IsActionRequired = entry.actionRequired;
                tempmodel.ActionID = entry.Id;
                tempmodel.Duedate = new Date(entry.dueDate.year, entry.dueDate.month - 1, entry.dueDate.day).toLocaleDateString();
                if (entry.responsiblePerson != null && entry.responsiblePerson.length > 0) {
                    var eventArray1 = [];
                    for (var _f = 0, _g = entry.responsiblePerson; _f < _g.length; _f++) {
                        var entry1 = _g[_f];
                        if (entry1 > 0) {
                            var tempmodel1 = new formeventdata_1.ActionResponsiblePersonDataModel();
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
        this._dataService.addEvent(currentEvent).subscribe(function (res) {
            _this.onmodelclose();
            _this.fetchEvents(null);
        });
    };
    AppCalendarComponent.prototype.hourClicked = function (_a) {
        var date = _a.date, events = _a.events;
        var selectedStartDate = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
        var selectedEndHour = new Date(date.getTime() + 30 * 60000);
        var selectedEndtDate = { hour: selectedEndHour.getHours(), minute: selectedEndHour.getMinutes(), second: selectedEndHour.getSeconds() };
        var selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this.IsModelPopupOpen = true;
        this.IsShowClassdisplay = true;
        this.addhtmltoform(selectedStartDate, selectedEndtDate, selectedDate, 0, 0, 0, 0);
        if (date_fns_1.isSameMonth(date, this.viewDate)) {
            if ((date_fns_1.isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    AppCalendarComponent.prototype.editEvent = function (event) {
        var startTime = new Date(event.meta.EventDataModel.StartTime);
        var endTime = new Date(event.meta.EventDataModel.EndTime);
        var selectedStartDate = { hour: startTime.getHours(), minute: startTime.getMinutes(), second: startTime.getSeconds() };
        var selectedEndtDate = { hour: endTime.getHours(), minute: endTime.getMinutes(), second: endTime.getSeconds() };
        var date = new Date(event.meta.EventDataModel.Date);
        var selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this.IsModelPopupOpen = true;
        this.IsShowClassdisplay = true;
        this.onTitleIdChange(event.meta.EventDataModel.EventType);
        this.addhtmltoform(selectedStartDate, selectedEndtDate, selectedDate, event.meta.EventDataModel.EventID, event.meta.EventDataModel.EventType, event.meta.EventDataModel.EventSubType, event.meta.EventDataModel.LocationID, event.meta.EventAttendeeDataModel, event.meta.ActionDataModel, event.meta.AgendaDataModel);
        var control = this.myForm.controls['agendalist'];
        control.removeAt(0);
        for (var _i = 0, _a = event.meta.AgendaDataModel; _i < _a.length; _i++) {
            var x = _a[_i];
            control.push(this.initAgenda(x));
        }
        var control1 = this.myForm.controls['actionlist'];
        control1.removeAt(0);
        for (var _b = 0, _c = event.meta.ActionDataModel; _b < _c.length; _b++) {
            var x = _c[_b];
            control1.push(this.initAction(x));
        }
    };
    AppCalendarComponent.prototype.deleteEvent = function (eventId) {
        var _this = this;
        if (confirm("Are you sure want to cancel this event ?")) {
            this._dataService.deleteEvent(eventId).subscribe(function (res) {
                _this.onmodelclose();
                _this.fetchEvents(null);
            });
        }
    };
    __decorate([
        core_1.ViewChild('modalContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], AppCalendarComponent.prototype, "modalContent", void 0);
    AppCalendarComponent = __decorate([
        core_1.Component({
            selector: 'app-calendar',
            templateUrl: './app-calendar.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [Mastereventdata_1.MasterEventDataService],
            styles: [".modal-dialog{\n    overflow-y: initial !important\n}\n.modal-body{\n    height: 400px;\n    \n    overflow-y: auto;\n}"]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal, forms_1.FormBuilder, Mastereventdata_1.MasterEventDataService])
    ], AppCalendarComponent);
    return AppCalendarComponent;
}());
exports.AppCalendarComponent = AppCalendarComponent;
//# sourceMappingURL=app-calendar.component.js.map