webpackJsonp(["meeting.module"],{

/***/ "../../../../../src/app/pages/meeting/meeting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngb-tp {\r\n    padding-left: 30% !important;\r\n    padding-right: 30% !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/meeting/meeting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n    <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"saveeventformdata(myForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label>Meeting</label>\r\n            <select formControlName=\"subTitle\" class=\"form-control\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let subtitle of subTitleList \"\r\n                        value={{subtitle.id}}>\r\n                    {{subtitle.name}}\r\n                </option>\r\n            </select>\r\n            <!--display error message if name is not valid-->\r\n            <small *ngIf=\"!myForm.controls.subTitle.valid\" class=\"text-danger\">\r\n                Sub title is required .\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Location</label>\r\n            <select formControlName=\"location\" class=\"form-control\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let location of locationList \"\r\n                        value={{location.LocationID}}>\r\n                    {{location.LocationName }}-{{ location.RoomName}}\r\n                </option>\r\n            </select>\r\n            <!--display error message if name is not valid-->\r\n            <small *ngIf=\"!myForm.controls.subTitle.valid\" class=\"text-danger\">\r\n                Location is required .\r\n            </small>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label>Date</label>\r\n            <!--<input type=\"text\" formControlName=\"date\" class=\"form-control\" type=\"date\" />-->\r\n            <!--<form class=\"form-inline\">-->\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"eventDate\" formControlName=\"date\" ngbDatepicker #p=\"ngbDatepicker\">\r\n                    <div class=\"input-group-addon\" (click)=\"p.toggle()\">\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                    </div>\r\n                </div>\r\n                <small *ngIf=\"!myForm.controls.date.valid\" class=\"text-danger\">\r\n                    Date is required .\r\n                </small>\r\n            </div>\r\n            <!--</form>-->\r\n\r\n        </div>\r\n        <div class=\"form-group\" style=\"width:48%;float:right;\">\r\n            <label>End Time</label>\r\n            <!--<input type=\"text\" class=\"form-control\" formControlName=\"endTime\" />-->\r\n            <ngb-timepicker formControlName=\"endTime\" class=\"form-control\"></ngb-timepicker>\r\n            <small *ngIf=\"!myForm.controls.endTime.valid\" class=\"text-danger\">\r\n                End Time is required .\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\" style=\"width:48%;\">\r\n            <label>Start Time</label>\r\n            <!--<input type=\"text\" class=\"form-control\" formControlName=\"startTime\" />-->\r\n            <ngb-timepicker formControlName=\"startTime\" class=\"form-control\"></ngb-timepicker>\r\n            <small *ngIf=\"!myForm.controls.startTime.valid\" class=\"text-danger\">\r\n                Start Time is required .\r\n            </small>\r\n        </div>\r\n\r\n        <div>\r\n            <label>Event Attendees</label>\r\n            <ss-multiselect-dropdown [options]=\"myOptions\" [texts]=\"myTexts\" [settings]=\"mySettings\" formControlName=\"eventAttendees\"></ss-multiselect-dropdown>\r\n            <small *ngIf=\"!myForm.controls.eventAttendees.valid\" class=\"text-danger\">\r\n                Event Attendees is required .\r\n            </small>\r\n            <!--<ss-multiselect-dropdown [options]=\"responsiblePersonOptions\" [texts]=\"responsiblePersonTexts\" [settings]=\"responsiblePersonSettings\" formControlName=\"responsiblePerson\" (ngModelChange)=\"onResponsiblePersonChange($event)\"></ss-multiselect-dropdown>\r\n            -->\r\n        </div>\r\n        <div style=\"border:1px solid black;margin-top:10px;\">\r\n            <div style=\"margin:20px;\" formArrayName=\"agendalist\">\r\n                <span class=\"fa fa-plus-square pull-right\" (click)=\"AddMoreAgenda()\"></span>\r\n                <div style=\"border-bottom:1px solid black;\" *ngFor=\"let agnda of myForm['controls'].agendalist['controls']; let i=index\">\r\n                    <div>\r\n                        <!--<span>Agenda {{i + 1}}</span>-->\r\n\r\n\r\n                        <span class=\"fa fa-remove pull-right\" *ngIf=\"myForm.controls.agendalist.controls.length > 0\" (click)=\"RemoveAgenda(i)\">\r\n                        </span>\r\n                    </div>\r\n                    <div [formGroupName]=\"i\">\r\n                        <!--agenda-->\r\n                        <div>\r\n\r\n                            <label>Agenda</label>\r\n                            <!--<a (click)=\"AddMoreAgenda()\" style=\"cursor: default;float:right;\">\r\n                                +\r\n                            </a>-->\r\n\r\n                            <input type=\"text\" formControlName=\"title\" class=\"form-control\">\r\n                            <!--display error message if agenda is not valid-->\r\n                            <small [hidden]=\"myForm.controls.agendalist.controls[i].controls.title.valid\" class=\"text-danger\">\r\n                                Agenda is required\r\n                            </small>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--<div style=\"margin:20px;\" class=\"margin-20\">\r\n                <a (click)=\"AddMoreAgenda()\" style=\"cursor: default\">\r\n                    Add another Agenda +\r\n                </a>\r\n            </div>-->\r\n        </div>\r\n        <div style=\"border: 1px solid black;margin-top:10px;\">\r\n            <div style=\"margin:20px;\" formArrayName=\"actionlist\">\r\n                <span class=\"fa fa-plus-square pull-right\" (click)=\"AddMoreAction()\"></span>\r\n                <div style=\"border-bottom:1px solid black;\" *ngFor=\"let acton of myForm['controls'].actionlist['controls']; let i=index\">\r\n                    <div>\r\n                        <!--<span>Agenda {{i + 1}}</span>-->\r\n\r\n\r\n\r\n\r\n                        <span class=\"fa fa-remove pull-right\" *ngIf=\"myForm.controls.actionlist.controls.length > 0\" (click)=\"RemoveAction(i)\">\r\n                        </span>\r\n                    </div>\r\n                    <div [formGroupName]=\"i\">\r\n                        <!--agenda-->\r\n                        <div>\r\n                            <label>Minutes</label>\r\n                            <!--<a (click)=\"AddMoreAction()\" style=\"cursor: default;float:right;\">\r\n                                +\r\n                            </a>-->\r\n\r\n                            <input type=\"text\" formControlName=\"title\" class=\"form-control\">\r\n\r\n\r\n                            <!--display error message if agenda is not valid-->\r\n                            <small [hidden]=\"myForm.controls.actionlist.controls[i].controls.title.valid\" class=\"text-danger\">\r\n                                Action is required\r\n                            </small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Action required </label>\r\n                            <input style=\"float:right;width:90%;\" id=\"chkboxactionrequired\" type=\"checkbox\" formControlName=\"actionRequired\" class=\"form-control\">\r\n                            <!--display error message if agenda is not valid-->\r\n\r\n                        </div>\r\n                        <div *ngIf=\"myForm.controls.actionlist.controls[i].controls.actionRequired.value\">\r\n                            <label>Due Date</label>\r\n                            <!--<input type=\"text\" formControlName=\"duedate\" type=\"date\" class=\"form-control\">-->\r\n                            <div class=\"form-group\">\r\n                                \r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dueDate\" formControlName=\"dueDate\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <small *ngIf=\"!myForm.controls.actionlist.controls[i].controls.dueDate.valid\" class=\"text-danger\">\r\n                                    Due Date is required\r\n                                </small>\r\n                            </div>\r\n                            <!--display error message if agenda is not valid-->\r\n\r\n                        </div>\r\n                        <div *ngIf=\"myForm.controls.actionlist.controls[i].controls.actionRequired.value\">\r\n                            <label>Responsible Persons</label>\r\n                            <ss-multiselect-dropdown [options]=\"responsiblePersonOptions\" [texts]=\"responsiblePersonTexts\" [settings]=\"responsiblePersonSettings\" formControlName=\"responsiblePerson\"></ss-multiselect-dropdown>\r\n                            <small [hidden]=\"myForm.controls.actionlist.controls[i].controls.responsiblePerson.valid\" class=\"text-danger\">\r\n                                Responsible Person is required\r\n                            </small>\r\n                            <!--<ss-multiselect-dropdown [options]=\"responsiblePersonOptions\" [texts]=\"responsiblePersonTexts\" [settings]=\"responsiblePersonSettings\" formControlName=\"responsiblePerson\" (ngModelChange)=\"onResponsiblePersonChange($event)\"></ss-multiselect-dropdown>\r\n                            -->\r\n                        </div>\r\n                        <div *ngIf=\"myForm.controls.actionlist.controls[i].controls.actionRequired.value\" class=\"form-group\">\r\n                            <label>Status</label>\r\n                            <select formControlName=\"EventActionStatusID\" class=\"form-control\">\r\n                                <option value=\"\">--Select--</option>\r\n                                <option *ngFor=\"let evebtStatus of eventActionStatusList \"\r\n                                        value={{evebtStatus.EventActionStatusID}}>\r\n                                    {{evebtStatus.ActionName}}\r\n                                </option>\r\n                            </select>\r\n                            <!--display error message if name is not valid-->\r\n                            <small [hidden]=\"myForm.controls.actionlist.controls[i].controls.EventActionStatusID.valid\" class=\"text-danger\">\r\n                                Status is required\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--<div style=\"margin:20px;\" class=\"margin-20\">\r\n                <a (click)=\"AddMoreAction()\" style=\"cursor: default\">\r\n                    Add another Minute +\r\n                </a>\r\n            </div>-->\r\n        </div>\r\n        <!-- we will place our fields here -->\r\n        <!--<button type=\"submit\" [disabled]=\"!myForm.valid\">Submit</button>-->\r\n\r\n        <div class=\"modal-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Save</button>\r\n\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/meeting/meeting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__ = __webpack_require__("../../../../../src/app/pages/eventactions/eventaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/formeventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__meeting_meeting_service__ = __webpack_require__("../../../../../src/app/pages/meeting/meeting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MeetingComponent = /** @class */ (function () {
    function MeetingComponent(_meetingService, router, location, _fb, _dataService, route, _masterDataService) {
        this._meetingService = _meetingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.eventId = 0;
        this.eventFilter = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["g" /* EventFilterModel */]();
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
    MeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.eventId = params['id']; //log the value of id
        });
        this.onTitleIdChange(1);
        this.addhtmltoform('', '', '', this.eventId, 1, 0, 0);
        this._masterDataService.getTitleList().subscribe(function (res) {
            _this.titleList = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var title = res_1[_i];
                _this.titleList.push({
                    id: title.TitleID,
                    name: title.TitleName
                });
            }
        });
        this._masterDataService.getLocationList().subscribe(function (res) {
            _this.locationList = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var location = res_2[_i];
                _this.locationList.push({
                    LocationID: location.LocationID,
                    LocationName: location.LocationName,
                    RoomName: location.RoomName
                });
            }
        });
        this._masterDataService.getEventActionStatusList().subscribe(function (res) {
            _this.eventActionStatusList = [];
            for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                var eventAction = res_3[_i];
                var eve = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["d" /* EventActionStatusModel */]();
                eve.EventActionStatusID = eventAction.EventActionStatusID;
                eve.ActionName = eventAction.ActionName;
                _this.eventActionStatusList.push(eve);
            }
        });
        this._masterDataService.getUserList().subscribe(function (res) { _this.myOptions = res; _this.responsiblePersonOptions = res; });
        if (this.eventId > 0) {
            this.editMeeting(this.eventId);
        }
    };
    MeetingComponent.prototype.onTitleIdChange = function (titleId) {
        var _this = this;
        //this.subTitleList = this._dataService.getSubTitles().filter((item) => item.titleId == titleId);
        this._masterDataService.getSubTitleList(titleId).subscribe(function (res) {
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
    MeetingComponent.prototype.addhtmltoform = function (selectedStartTime, selectedEndTime, selectedDate, eventId, EventType, EventSubType, LocalizationID, eventAttendees, eventAction, eventAgenda) {
        if (eventAttendees === void 0) { eventAttendees = [new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["e" /* EventAttendeeDataModel */]()]; }
        if (eventAction === void 0) { eventAction = [new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["a" /* ActionDataModel */]()]; }
        if (eventAgenda === void 0) { eventAgenda = [new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["c" /* AgendaDataModel */]()]; }
        var attenlist = [];
        if (eventId > 0)
            attenlist = eventAttendees.map(function (x) { return x.UserID; });
        this.myForm = this._fb.group({
            title: [EventType, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            eventID: [eventId],
            location: [LocalizationID, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            subTitle: [EventSubType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            startTime: [selectedStartTime, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            endTime: [selectedEndTime, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            date: [selectedDate, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            eventAttendees: [attenlist, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            agendalist: this._fb.array([
                this.initAgenda(new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["c" /* AgendaDataModel */]())
            ]),
            actionlist: this._fb.array([
                this.initAction(new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["a" /* ActionDataModel */]())
            ])
        });
    };
    MeetingComponent.prototype.initAgenda = function (eventAgenda) {
        if (eventAgenda === void 0) { eventAgenda = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["c" /* AgendaDataModel */](); }
        return this._fb.group({
            Id: [],
            title: [eventAgenda.Title, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    MeetingComponent.prototype.initAction = function (actionModel) {
        if (actionModel === void 0) { actionModel = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["a" /* ActionDataModel */](); }
        if (actionModel.ActionResponsiblePersonDataModel == null || actionModel.ActionResponsiblePersonDataModel == undefined)
            actionModel.ActionResponsiblePersonDataModel = [new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["b" /* ActionResponsiblePersonDataModel */]()];
        var actionresp = [];
        if (this.eventId > 0)
            actionresp = actionModel.ActionResponsiblePersonDataModel.map(function (x) { return x.UserID; });
        else
            actionModel.EventActionStatusID = 1;
        return this._fb.group({
            Id: [actionModel.ActionID],
            title: [actionModel.Title, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            dueDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ year: new Date(actionModel.Duedate).getFullYear(), month: new Date(actionModel.Duedate).getMonth() + 1, day: new Date(actionModel.Duedate).getDate() }, [this.validateDueDate.bind(this)]),
            responsiblePerson: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](actionresp, [this.validateResponsiblePerson.bind(this)]),
            actionRequired: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](actionModel.IsActionRequired, [this.validateActionRequired.bind(this)]),
            EventActionStatusID: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](actionModel.EventActionStatusID, [this.validateActionStatus.bind(this)])
        });
    };
    MeetingComponent.prototype.validateActionRequired = function (control) {
        return null;
    };
    MeetingComponent.prototype.validateDueDate = function (control) {
        var result = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else if (control.value == null || control.value.year == NaN)
            result = true;
        else
            result = null;
        console.log(control.value);
        return result ? { 'duedate': { value: control.value } } : null;
    };
    MeetingComponent.prototype.validateResponsiblePerson = function (control) {
        var result = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else if (control.value.length == 0)
            result = true;
        else
            result = null;
        console.log(control.value);
        return result ? { 'responsibleperson': { value: control.value } } : null;
    };
    MeetingComponent.prototype.validateActionStatus = function (control) {
        var result = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else if (control.value == null || control.value == "") {
            result = true;
        }
        else
            result = null;
        console.log(control.value);
        //alert(result);
        return (result ? { 'actionStatus': "Status is required" } : null);
    };
    MeetingComponent.prototype.validateMinutes = function (g) {
        var result = true;
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
    };
    MeetingComponent.prototype.AddMoreAgenda = function () {
        // add agenda to the list
        var control = this.myForm.controls['agendalist'];
        control.push(this.initAgenda());
    };
    MeetingComponent.prototype.AddMoreAction = function () {
        // add action to the list
        var control = this.myForm.controls['actionlist'];
        control.push(this.initAction());
    };
    MeetingComponent.prototype.RemoveAgenda = function (i) {
        // remove agenda from the list
        var control = this.myForm.controls['agendalist'];
        control.removeAt(i);
    };
    MeetingComponent.prototype.RemoveAction = function (i) {
        // remove action from the list
        var control = this.myForm.controls['actionlist'];
        control.removeAt(i);
    };
    MeetingComponent.prototype.editMeeting = function (id) {
        var _this = this;
        this._meetingService.getEventData(id).subscribe(function (res) {
            var startTime = new Date(res.EventDataModel[0].StartTime);
            var endTime = new Date(res.EventDataModel[0].EndTime);
            var selectedStartDate = { hour: startTime.getHours(), minute: startTime.getMinutes(), second: startTime.getSeconds() };
            var selectedEndtDate = { hour: endTime.getHours(), minute: endTime.getMinutes(), second: endTime.getSeconds() };
            var date = new Date(res.EventDataModel[0].Date);
            var selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
            _this.onTitleIdChange(res.EventDataModel[0].EventType);
            _this.addhtmltoform(selectedStartDate, selectedEndtDate, selectedDate, res.EventDataModel[0].EventID, res.EventDataModel[0].EventType, res.EventDataModel[0].EventSubType, res.EventDataModel[0].LocationID, res.EventAttendeeDataModel, res.ActionDataModel, res.AgendaDataModel);
            var control = _this.myForm.controls['agendalist'];
            control.removeAt(0);
            for (var _i = 0, _a = res.AgendaDataModel; _i < _a.length; _i++) {
                var x = _a[_i];
                control.push(_this.initAgenda(x));
            }
            var control1 = _this.myForm.controls['actionlist'];
            control1.removeAt(0);
            for (var _b = 0, _c = res.ActionDataModel; _b < _c.length; _b++) {
                var x = _c[_b];
                control1.push(_this.initAction(x));
            }
        });
    };
    MeetingComponent.prototype.saveeventformdata = function (data) {
        var _this = this;
        var currentEvent = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["h" /* EventViewModel */]();
        currentEvent.EventDataModel = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["f" /* EventDataModel */]();
        currentEvent.EventDataModel.EventType = data.title;
        currentEvent.EventDataModel.EventSubType = data.subTitle;
        currentEvent.EventDataModel.Date = new Date(data.date.year, (data.date.month - 1), data.date.day).toLocaleDateString();
        currentEvent.EventDataModel.StartTime = new Date(data.date.year, (data.date.month - 1), data.date.day, data.startTime.hour, data.startTime.minute, data.startTime.second).toLocaleString();
        currentEvent.EventDataModel.EndTime = new Date(data.date.year, (data.date.month - 1), data.date.day, data.endTime.hour, data.endTime.minute, data.endTime.second).toLocaleString();
        currentEvent.EventDataModel.Recurring = false;
        currentEvent.EventDataModel.OrganizationID = 1;
        currentEvent.EventDataModel.LocationID = data.location;
        currentEvent.EventDataModel.EventID = data.eventID;
        if (data.eventAttendees != null && data.eventAttendees.length > 0) {
            var eventAttendeeArray = [];
            for (var _i = 0, _a = data.eventAttendees; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry > 0) {
                    var tempmodel = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["e" /* EventAttendeeDataModel */]();
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
                var tempmodel = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["c" /* AgendaDataModel */]();
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
                var tempmodel = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["a" /* ActionDataModel */]();
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
                    var eventArray1 = [];
                    for (var _f = 0, _g = entry.responsiblePerson; _f < _g.length; _f++) {
                        var entry1 = _g[_f];
                        if (entry1 > 0) {
                            var tempmodel1 = new __WEBPACK_IMPORTED_MODULE_6__calendar_formeventdata__["b" /* ActionResponsiblePersonDataModel */]();
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
        this._masterDataService.addEvent(currentEvent).subscribe(function (res) {
            _this.router.navigate(['/pages/meeting/list']);
        });
    };
    MeetingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meeting',
            template: __webpack_require__("../../../../../src/app/pages/meeting/meeting.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css"), __webpack_require__("../../../../../src/app/pages/meeting/meeting.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */], __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_8__meeting_meeting_service__["a" /* MeetingDataService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__meeting_meeting_service__["a" /* MeetingDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__meeting_meeting_service__["a" /* MeetingDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _g || Object])
    ], MeetingComponent);
    return MeetingComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=meeting.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/meeting/meeting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingModule", function() { return MeetingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meetinglist_component__ = __webpack_require__("../../../../../src/app/pages/meeting/meetinglist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meeting_component__ = __webpack_require__("../../../../../src/app/pages/meeting/meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__meeting_component__["a" /* MeetingComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__meetinglist_component__["a" /* MeetingListComponent */], data: { breadcrumb: 'Meeting List' } },
    { path: 'meeting', component: __WEBPACK_IMPORTED_MODULE_6__meeting_component__["a" /* MeetingComponent */], data: { breadcrumb: 'Meeting' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__meeting_component__["a" /* MeetingComponent */], data: { breadcrumb: 'Edit' } },
];
var MeetingModule = /** @class */ (function () {
    function MeetingModule() {
    }
    MeetingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__meetinglist_component__["a" /* MeetingListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__meeting_component__["a" /* MeetingComponent */]
            ]
        })
    ], MeetingModule);
    return MeetingModule;
}());

//# sourceMappingURL=meeting.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/meeting/meetinglist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\"  [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <!--<p-footer>\r\n    \r\n    </p-footer>-->\r\n     <p-headerColumnGroup>\r\n        <p-row>\r\n            <p-column field=\"SubTitleName\" header=\"Sub Title\" [sortable]=\"true\" [filter]=\"true\" rowspan=\"2\"></p-column>\r\n\r\n            <p-column field=\"MeetingDate\" header=\"Date\" [sortable]=\"true\" [filter]=\"true\" rowspan=\"2\"></p-column>\r\n            <p-column header=\"Time Slot\" rowspan=\"2\"></p-column>\r\n\r\n            <p-column field=\"LocationName\" header=\"Location\" [sortable]=\"true\" [filter]=\"true\" rowspan=\"2\"></p-column>\r\n            <p-column field=\"Attendees\" header=\"Attendees\" rowspan=\"2\">\r\n                <!--<ng-template pTemplate=\"filter\" let-col>\r\n                    <p-multiSelect [options]=\"Users\" defaultLabel=\"All Attendees\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"></p-multiSelect>\r\n                </ng-template>-->\r\n            </p-column>\r\n            <p-column field=\"AddedBy\" header=\"Organizer\" [sortable]=\"true\" rowspan=\"2\"></p-column>\r\n            <p-column field=\"Actions\" header=\"Actions\" [filter]=\"true\" colspan=\"3\">\r\n                <ng-template pTemplate=\"filter\" let-col>\r\n                    <br/>\r\n                    <p-checkbox name=\"actionfilter\" (onChange)=\"dt.filter($event.value)\" value=\"2,1\" label=\"In-Completed\" inputId=\"2\" [(ngModel)]=\"selectedAction\"></p-checkbox>\r\n                    <p-checkbox name=\"actionfilter\" (onChange)=\"dt.filter($event.value)\" value=\"3\" label=\"Completed\" inputId=\"3\" [(ngModel)]=\"selectedAction\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"Operations\" rowspan=\"2\"></p-column>\r\n\r\n        </p-row>\r\n        <p-row>\r\n            <p-column header=\"Total\"></p-column>\r\n            <p-column header=\"In-Completed\"></p-column>\r\n            <p-column header=\"Completed\"></p-column>\r\n        </p-row>\r\n\r\n    </p-headerColumnGroup>\r\n    <p-column field=\"SubTitleName\" [sortable]=\"true\"></p-column>\r\n\r\n\r\n\r\n    <p-column field=\"MeetingDate\" header=\"Meeting Date\" [sortable]=\"true\"></p-column>\r\n    <p-column header=\"Meeting Slot\">\r\n        <ng-template let-col let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <span>{{meeting.StartTime }} To {{ meeting.EndTime}}</span>\r\n        </ng-template>\r\n    </p-column>\r\n    <!--<p-column field=\"StartTime\" header=\"Start Time\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"EndTime\" header=\"End Time\" [sortable]=\"true\"></p-column>-->\r\n    <p-column field=\"LocationName\" header=\"Location\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"Attendees\"></p-column>\r\n    <p-column field=\"AddedBy\" header=\"Organizer\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"TotalAction\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"InCompleteAction\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"CompleteAction\" [sortable]=\"true\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\"><button type=\"button\" pButton icon=\"fa-plus\"  (click)=\"redirectToNewPage()\" label=\"Add\"></button></div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"editMeeting(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deletingMeeting(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>"

/***/ }),

/***/ "../../../../../src/app/pages/meeting/meetinglist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__ = __webpack_require__("../../../../../src/app/pages/eventactions/eventaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meeting_service__ = __webpack_require__("../../../../../src/app/pages/meeting/meeting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MeetingListComponent = /** @class */ (function () {
    function MeetingListComponent(_meetingService, router, location, _fb, _dataService, route, _masterDataService) {
        this._meetingService = _meetingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.data = [];
        this.totalRecords = 0;
        this.pageNumber = 1;
        this.sortColumn = "SubTitleName";
        this.sortOrder = "asc";
        this.pageSize = 10;
        this.selectedAction = [];
    }
    MeetingListComponent.prototype.ngOnInit = function () {
        //this._masterDataService.getUserList().subscribe((res: UserModel[]) => {
        //    this.Users = [];
        //    for (let user of res) {
        //        this.Users.push({ label: user.name, value: user.id });
        //    }
        //});
        //this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.ActionFilter, this.SubTitleFilter, this.DateFilter, this.LocationFilter);
    };
    MeetingListComponent.prototype.loadCarsLazy = function (event) {
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
        this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.ActionFilter, this.SubTitleFilter, this.DateFilter, this.LocationFilter);
    };
    MeetingListComponent.prototype.getList = function (pageNo, pageSize, sortColumn, sortOrder, actionFilter, subTitlNameFilter, dateFilter, locationFilter) {
        var _this = this;
        this._meetingService.getMeetingList(pageNo, pageSize, sortColumn, sortOrder, actionFilter, subTitlNameFilter, dateFilter, locationFilter).subscribe(function (res) {
            _this.data = res.MeetingListModel;
            _this.totalRecords = res.TotalRecords;
        });
    };
    MeetingListComponent.prototype.editMeeting = function (meetingData) {
        this.router.navigate(['/pages/meeting/' + meetingData.EventID]);
    };
    MeetingListComponent.prototype.deletingMeeting = function (meetingData) {
        var _this = this;
        if (confirm("Are you sure want to cancel this meeting ?")) {
            this._masterDataService.deleteEvent(meetingData.EventID).subscribe(function (res) {
                _this.getList(_this.pageNumber, _this.pageSize, _this.sortColumn, _this.sortOrder, _this.ActionFilter, _this.SubTitleFilter, _this.DateFilter, _this.LocationFilter);
            });
        }
    };
    MeetingListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/meeting']);
    };
    MeetingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meetinglist',
            template: __webpack_require__("../../../../../src/app/pages/meeting/meetinglist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */], __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_7__meeting_service__["a" /* MeetingDataService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__meeting_service__["a" /* MeetingDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__meeting_service__["a" /* MeetingDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _g || Object])
    ], MeetingListComponent);
    return MeetingListComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=meetinglist.component.js.map

/***/ })

});
//# sourceMappingURL=meeting.module.chunk.js.map