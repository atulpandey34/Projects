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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var eventaction_service_1 = require("../eventactions/eventaction.service");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var formeventdata_1 = require("../calendar/formeventdata");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var meeting_service_1 = require("../meeting/meeting.service");
var performancereviewmeeting_service_1 = require("./performancereviewmeeting.service");
var FileSaver = require("file-saver");
var cronstrue_1 = require("cronstrue");
//import { CronEditorModule } from "cron-editor/cron-editor";
var PerformanceReviewMeetingComponent = /** @class */ (function () {
    function PerformanceReviewMeetingComponent(_PerformanceReviewMeetingDataService, _meetingService, router, location, _fb, _dataService, route, _masterDataService) {
        this._PerformanceReviewMeetingDataService = _PerformanceReviewMeetingDataService;
        this._meetingService = _meetingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.eventId = 0;
        this.revieweeId = 0;
        this.cronExpression = '4 3 2 12 1/1 ? *';
        this.userWithRoleList = [];
        this.eventFilter = new formeventdata_1.EventFilterModel();
        this.getRoleResponsibilityViewModel = [];
        this.cronOptions = {
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
        this.revieweeObjectiveViewModel = [];
        this.revieweeActionViewModel = [];
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
        this.parsedExpression = "";
        this.generatedDate = "";
    }
    PerformanceReviewMeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.eventId = params['id']; //log the value of id
        });
        this.getUserWithRoleNameList();
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
                var location_1 = res_2[_i];
                _this.locationList.push({
                    LocationID: location_1.LocationID,
                    LocationName: location_1.LocationName,
                    RoomName: location_1.RoomName
                });
            }
        });
        this._masterDataService.getEventActionStatusList().subscribe(function (res) {
            _this.eventActionStatusList = [];
            for (var _i = 0, res_3 = res; _i < res_3.length; _i++) {
                var eventAction = res_3[_i];
                var eve = new formeventdata_1.EventActionStatusModel();
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
    PerformanceReviewMeetingComponent.prototype.getUserWithRoleNameList = function () {
        var _this = this;
        this._masterDataService.getUserWithRole().subscribe(function (res) {
            _this.userWithRoleList = res;
        });
    };
    PerformanceReviewMeetingComponent.prototype.getRevieweeObjectives = function (revieweeId) {
        var _this = this;
        this.revieweeObjectiveViewModel = [];
        this._PerformanceReviewMeetingDataService.getRevieweeObjectives(revieweeId).subscribe(function (res) {
            _this.revieweeObjectiveViewModel = res;
        });
    };
    PerformanceReviewMeetingComponent.prototype.getRevieweeAction = function (revieweeId) {
        var _this = this;
        this.revieweeActionViewModel = [];
        this._PerformanceReviewMeetingDataService.getRevieweeAction(revieweeId).subscribe(function (res) {
            _this.revieweeActionViewModel = res;
        });
    };
    PerformanceReviewMeetingComponent.prototype.getRolesResponsibility = function (revieweeId) {
        var _this = this;
        this.getRoleResponsibilityViewModel = [];
        this._PerformanceReviewMeetingDataService.getRolesResponsibility(revieweeId).subscribe(function (res) {
            _this.getRoleResponsibilityViewModel = res;
        });
    };
    PerformanceReviewMeetingComponent.prototype.getRolesResponsibilityWithVersionId = function (id) {
        var _this = this;
        this.getRoleResponsibilityViewModel = [];
        this._PerformanceReviewMeetingDataService.getRoleResponsibilityWithVersionId(id).subscribe(function (res) {
            _this.getRoleResponsibilityViewModel = res;
        });
    };
    PerformanceReviewMeetingComponent.prototype.onTitleIdChange = function (titleId) {
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
    PerformanceReviewMeetingComponent.prototype.addhtmltoform = function (selectedStartTime, selectedEndTime, selectedDate, eventId, EventType, EventSubType, LocalizationID, eventAttendees, eventAction, eventAgenda, reviewee, recurrenceEndDate) {
        if (eventAttendees === void 0) { eventAttendees = [new formeventdata_1.EventAttendeeDataModel()]; }
        if (eventAction === void 0) { eventAction = [new formeventdata_1.ActionDataModel()]; }
        if (eventAgenda === void 0) { eventAgenda = [new formeventdata_1.AgendaDataModel()]; }
        if (reviewee === void 0) { reviewee = 0; }
        if (recurrenceEndDate === void 0) { recurrenceEndDate = ''; }
        var attenlist = [];
        if (eventId > 0)
            attenlist = eventAttendees.map(function (x) { return x.UserID; });
        this.myForm = this._fb.group({
            title: [EventType, [forms_1.Validators.required]],
            eventID: [eventId],
            location: [LocalizationID, [forms_1.Validators.required]],
            subTitle: [5, forms_1.Validators.required],
            startTime: [selectedStartTime, forms_1.Validators.required],
            endTime: [selectedEndTime, forms_1.Validators.required],
            date: [selectedDate, forms_1.Validators.required],
            eventAttendees: [attenlist],
            Reviewee: [reviewee, forms_1.Validators.required],
            RecurrenceEndDate: [recurrenceEndDate, forms_1.Validators.required],
            agendalist: this._fb.array([
                this.initAgenda(new formeventdata_1.AgendaDataModel())
            ]),
            objectivelist: this._fb.array([
                this.initObjective(new formeventdata_1.ObjectiveViewModel())
            ]),
            actionlist: this._fb.array([
                this.initAction(new formeventdata_1.ActionDataModel())
            ])
        });
    };
    PerformanceReviewMeetingComponent.prototype.initObjective = function (eventObjective) {
        if (eventObjective === void 0) { eventObjective = new formeventdata_1.ObjectiveViewModel(); }
        return this._fb.group({
            Text: [eventObjective.Text, forms_1.Validators.required]
        });
    };
    PerformanceReviewMeetingComponent.prototype.initAgenda = function (eventAgenda) {
        if (eventAgenda === void 0) { eventAgenda = new formeventdata_1.AgendaDataModel(); }
        return this._fb.group({
            Id: [],
            title: [eventAgenda.Title, forms_1.Validators.required]
        });
    };
    PerformanceReviewMeetingComponent.prototype.initAction = function (actionModel) {
        if (actionModel === void 0) { actionModel = new formeventdata_1.ActionDataModel(); }
        if (actionModel.ActionResponsiblePersonDataModel == null || actionModel.ActionResponsiblePersonDataModel == undefined)
            actionModel.ActionResponsiblePersonDataModel = [new formeventdata_1.ActionResponsiblePersonDataModel()];
        var actionresp = [];
        if (this.eventId > 0)
            actionresp = actionModel.ActionResponsiblePersonDataModel.map(function (x) { return x.UserID; });
        else
            actionModel.EventActionStatusID = 1;
        return this._fb.group({
            Id: [actionModel.ActionID],
            title: [actionModel.Title, forms_1.Validators.required],
            dueDate: new forms_1.FormControl({ year: new Date(actionModel.Duedate).getFullYear(), month: new Date(actionModel.Duedate).getMonth() + 1, day: new Date(actionModel.Duedate).getDate() }, [this.validateDueDate.bind(this)]),
            responsiblePerson: new forms_1.FormControl(actionresp, [this.validateResponsiblePerson.bind(this)]),
            actionRequired: new forms_1.FormControl(actionModel.IsActionRequired, [this.validateActionRequired.bind(this)]),
            EventActionStatusID: new forms_1.FormControl(actionModel.EventActionStatusID, [this.validateActionStatus.bind(this)])
        });
    };
    PerformanceReviewMeetingComponent.prototype.validateActionRequired = function (control) {
        if (this.eventId === undefined || this.eventId === 0) {
            if (control.value == true) {
                var aa = [];
                aa.push(parseInt(this.revieweeId.toString()));
                control.parent.get("responsiblePerson").setValue(aa);
            }
        }
        return null;
    };
    PerformanceReviewMeetingComponent.prototype.validateDueDate = function (control) {
        var result = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else if (control.value == null || control.value.year == NaN)
            result = true;
        else
            result = null;
        return result ? { 'duedate': { value: control.value } } : null;
    };
    PerformanceReviewMeetingComponent.prototype.validateResponsiblePerson = function (control) {
        var result = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else if (control.value.length == 0)
            result = true;
        else
            result = null;
        return result ? { 'responsibleperson': { value: control.value } } : null;
    };
    PerformanceReviewMeetingComponent.prototype.validateActionStatus = function (control) {
        var result = null;
        if (control.parent != undefined && control.parent.get("actionRequired").value == false)
            result = null;
        else if (control.value == null || control.value == "") {
            result = true;
        }
        else
            result = null;
        //alert(result);
        return (result ? { 'actionStatus': "Status is required" } : null);
    };
    PerformanceReviewMeetingComponent.prototype.validateMinutes = function (g) {
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
    PerformanceReviewMeetingComponent.prototype.AddMoreAgenda = function () {
        // add agenda to the list
        var control = this.myForm.controls['agendalist'];
        control.push(this.initAgenda());
    };
    PerformanceReviewMeetingComponent.prototype.AddMoreAction = function () {
        // add action to the list
        var control = this.myForm.controls['actionlist'];
        control.push(this.initAction());
    };
    PerformanceReviewMeetingComponent.prototype.RemoveAgenda = function (i) {
        // remove agenda from the list
        var control = this.myForm.controls['agendalist'];
        control.removeAt(i);
    };
    PerformanceReviewMeetingComponent.prototype.RemoveAction = function (i) {
        // remove action from the list
        var control = this.myForm.controls['actionlist'];
        control.removeAt(i);
    };
    PerformanceReviewMeetingComponent.prototype.AddMoreObjective = function () {
        var control = this.myForm.controls['objectivelist'];
        control.push(this.initObjective());
    };
    PerformanceReviewMeetingComponent.prototype.RemoveObjective = function (i) {
        var control = this.myForm.controls['objectivelist'];
        control.removeAt(i);
    };
    PerformanceReviewMeetingComponent.prototype.editMeeting = function (id) {
        var _this = this;
        this._meetingService.getEventData(id).subscribe(function (res) {
            _this.revieweeDropDown.nativeElement.disabled = true;
            _this.getRevieweeObjectives(res.EventDataModel[0].Reviewee);
            _this.getRevieweeAction(res.EventDataModel[0].Reviewee);
            _this.revieweeId = res.EventDataModel[0].Reviewee;
            _this.cronExpression = res.EventDataModel[0].RecurrencePattern;
            _this.getRolesResponsibilityWithVersionId(res.EventDataModel[0].RoleResponsibilityVersionId);
            var startTime = new Date(res.EventDataModel[0].StartTime);
            var endTime = new Date(res.EventDataModel[0].EndTime);
            var selectedStartDate = { hour: startTime.getHours(), minute: startTime.getMinutes(), second: startTime.getSeconds() };
            var selectedEndtDate = { hour: endTime.getHours(), minute: endTime.getMinutes(), second: endTime.getSeconds() };
            var date = new Date(res.EventDataModel[0].Date);
            var selectedDate = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
            _this.onTitleIdChange(res.EventDataModel[0].EventType);
            var endRecurrenceDate = new Date(res.EventDataModel[0].RecurrenceEndDate);
            var selectedRecurrenceEndDate = { year: endRecurrenceDate.getFullYear(), month: endRecurrenceDate.getMonth() + 1, day: endRecurrenceDate.getDate() };
            _this.addhtmltoform(selectedStartDate, selectedEndtDate, selectedDate, res.EventDataModel[0].EventID, res.EventDataModel[0].EventType, res.EventDataModel[0].EventSubType, res.EventDataModel[0].LocationID, res.EventAttendeeDataModel, res.ActionDataModel, res.AgendaDataModel, res.EventDataModel[0].Reviewee, selectedRecurrenceEndDate);
            var control = _this.myForm.controls['agendalist'];
            control.removeAt(0);
            for (var _i = 0, _a = res.AgendaDataModel; _i < _a.length; _i++) {
                var x = _a[_i];
                control.push(_this.initAgenda(x));
            }
            //const control1 = <FormArray>this.myForm.controls['actionlist'];
            //control1.removeAt(0);
            //for (let x of res.ActionDataModel as ActionDataModel[]) {
            //    control1.push(this.initAction(x));
            //}
        });
    };
    PerformanceReviewMeetingComponent.prototype.saveeventformdata = function (data) {
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
        currentEvent.EventDataModel.Reviewee = data.Reviewee;
        currentEvent.EventDataModel.RecurrencePattern = this.cronExpression;
        currentEvent.EventDataModel.RecurrenceEndDate = new Date(data.RecurrenceEndDate.year, (data.RecurrenceEndDate.month - 1), data.RecurrenceEndDate.day).toLocaleDateString();
        data.eventAttendees = [data.Reviewee, sessionStorage["UserId"]];
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
        currentEvent.ObjectiveViewModel = [];
        if (data.objectivelist != null && data.objectivelist.length > 0) {
            for (var _b = 0, _c = data.objectivelist; _b < _c.length; _b++) {
                var entry = _c[_b];
                var objModel = new formeventdata_1.ObjectiveViewModel();
                objModel.Text = entry.Text;
                currentEvent.ObjectiveViewModel.push(objModel);
            }
        }
        if (data.agendalist != null && data.agendalist.length > 0) {
            var eventArray = [];
            for (var _d = 0, _e = data.agendalist; _d < _e.length; _d++) {
                var entry = _e[_d];
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
            for (var _f = 0, _g = data.actionlist; _f < _g.length; _f++) {
                var entry = _g[_f];
                var tempmodel = new formeventdata_1.ActionDataModel();
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
                    for (var _h = 0, _j = entry.responsiblePerson; _h < _j.length; _h++) {
                        var entry1 = _j[_h];
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
        this._masterDataService.addPerformanceReviewEvent(currentEvent).subscribe(function (res) {
            _this.router.navigate(['/pages/performancereviewmeeting/list']);
        });
    };
    PerformanceReviewMeetingComponent.prototype.getRevieweeData = function (id) {
        this.revieweeId = id;
        this.getRevieweeAction(id);
        this.getRevieweeObjectives(id);
        this.getRolesResponsibility(id);
    };
    PerformanceReviewMeetingComponent.prototype.downloadMaterial = function (id, fileName) {
        this._PerformanceReviewMeetingDataService.downloadMaterial(id).subscribe(function (res) {
            FileSaver.saveAs(res, fileName);
        });
    };
    PerformanceReviewMeetingComponent.prototype.generateExpression = function () {
        this.parsedExpression = cronstrue_1.default.toString(this.cronExpression);
    };
    PerformanceReviewMeetingComponent.prototype.generateAllOcuurence = function () {
        var _this = this;
        this._PerformanceReviewMeetingDataService.getAllOccurenceOfADate(this.cronExpression).subscribe(function (res) {
            _this.generatedDate = res.join("&#10;");
        });
    };
    __decorate([
        core_1.ViewChild('revieweeDropDown'),
        __metadata("design:type", Object)
    ], PerformanceReviewMeetingComponent.prototype, "revieweeDropDown", void 0);
    PerformanceReviewMeetingComponent = __decorate([
        core_1.Component({
            selector: 'app-performancereviewmeeting',
            templateUrl: './performancereviewmeeting.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                "../performancereviewmeeting/performancereviewmeeting.component.css",
                "../riskassessment/riskassessment.component.css"],
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, meeting_service_1.MeetingDataService, performancereviewmeeting_service_1.PerformanceReviewMeetingDataService],
        }),
        __metadata("design:paramtypes", [performancereviewmeeting_service_1.PerformanceReviewMeetingDataService, meeting_service_1.MeetingDataService, router_1.Router, common_1.Location, forms_1.FormBuilder, eventaction_service_1.EventActionService, router_1.ActivatedRoute, Mastereventdata_1.MasterEventDataService])
    ], PerformanceReviewMeetingComponent);
    return PerformanceReviewMeetingComponent;
}());
exports.PerformanceReviewMeetingComponent = PerformanceReviewMeetingComponent;
//# sourceMappingURL=performancereviewmeeting.component.js.map