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
var EventActionEditComponent = /** @class */ (function () {
    function EventActionEditComponent(router, location, _fb, _dataService, route, _masterDataService) {
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.actionID = 0;
        this.responsiblePersonOptions = [];
        this.eventActionStatusList = [];
        this.responsiblePersonTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.responsiblePersonSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '300px'
        };
        this.actionSourceList = [];
        this.categoryList = [];
        this.acitonCommentList = [];
    }
    EventActionEditComponent.prototype.onResponsiblePersonChange = function (s) {
    };
    EventActionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buttonComplete.nativeElement.hidden = false;
        var dataModel = new formeventdata_1.ActionDataModel();
        dataModel.AssignedBy = sessionStorage["UserId"];
        this.addhtmltoform(dataModel);
        this.route.params.subscribe(function (params) {
            _this.actionID = params['id']; //log the value of id
        });
        this._masterDataService.getEventActionStatusList().subscribe(function (res) {
            _this.eventActionStatusList = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var eventAction = res_1[_i];
                var eve = new formeventdata_1.EventActionStatusModel();
                eve.EventActionStatusID = eventAction.EventActionStatusID;
                eve.ActionName = eventAction.ActionName;
                _this.eventActionStatusList.push(eve);
            }
        });
        this._masterDataService.getUserList().subscribe(function (res) { _this.myOptions = res; _this.responsiblePersonOptions = res; });
        this._dataService.getAllCategories().subscribe(function (res) { _this.categoryList = res; });
        this._dataService.getAllActionSource().subscribe(function (res) { _this.actionSourceList = res; });
        if (this.actionID > 0) {
            this.buttonComplete.nativeElement.hidden = false;
            this._dataService.getActionData(this.actionID).subscribe(function (res) {
                if (res.EventActionStatusID == 3) {
                    _this.buttonComplete.nativeElement.hidden = true;
                    _this.buttonSubmit.nativeElement.hidden = true;
                }
                var control1 = _this.myForm.controls['actionlist'];
                control1.removeAt(0);
                if (res.CorrectiveActionID > 0)
                    res.CorrectionStatusRequired = true;
                control1.push(_this.initAction(res));
                _this.acitonCommentList = res.ActionCommentsListModel;
                //if (res.CorrectiveActionID > 0) {
                //    this.SetCorrectionRequired();
                //    this.setActionText(res.CorrectiveActionID);
                //}
            });
        }
        this._dataService.getAllCorrectedAction().subscribe(function (res) {
            _this.correctiveList = res;
        });
        //this._dataService.downloadActionFile("2017-09-02-10-49-23-685_AJOPS8968C_2017_.pdf");
    };
    EventActionEditComponent.prototype.addhtmltoform = function (content) {
        this.myForm = this._fb.group({
            actionlist: this._fb.array([
                this.initAction(content)
            ])
        });
        this.actionTakenForm = this.initActionTaken();
    };
    EventActionEditComponent.prototype.initAction = function (actionModel) {
        if (actionModel === void 0) { actionModel = new formeventdata_1.ActionDataModel(); }
        if (actionModel.ActionResponsiblePersonDataModel == null || actionModel.ActionResponsiblePersonDataModel == undefined)
            actionModel.ActionResponsiblePersonDataModel = [new formeventdata_1.ActionResponsiblePersonDataModel()];
        return this._fb.group({
            Id: [actionModel.ActionID],
            title: [actionModel.Title, forms_1.Validators.required],
            dueDate: [{ year: new Date(actionModel.Duedate).getFullYear(), month: new Date(actionModel.Duedate).getMonth() + 1, day: new Date(actionModel.Duedate).getDate() }, forms_1.Validators.required],
            responsiblePerson: [actionModel.ActionResponsiblePersonDataModel.map(function (x) { return x.UserID; }), forms_1.Validators.required],
            actionRequired: [actionModel.IsActionRequired],
            CategoryId: [actionModel.CategoryID, forms_1.Validators.required],
            ActionSourceId: [actionModel.ActionSourceID, forms_1.Validators.required],
            RootCause: [actionModel.RootCause],
            eventID: [actionModel.SourceID],
            comments: [''],
            CorrectionStatusRequired: [actionModel.CorrectionStatusRequired],
            CorrectiveActionID: [actionModel.CorrectiveActionID],
            EventActionStatusID: [1],
            AssignedBy: [actionModel.AssignedBy, forms_1.Validators.required],
        });
    };
    EventActionEditComponent.prototype.initActionTaken = function () {
        return this._fb.group({
            ActionTaken: ['', forms_1.Validators.required],
            IsReportedAction: [false, forms_1.Validators.required],
            File: ['']
        });
    };
    EventActionEditComponent.prototype.saveActionTaken = function (data) {
        var _this = this;
        var _formData = new FormData();
        _formData.append("FileName", this.fileName);
        _formData.append("MyFile", this.fileToUpload);
        _formData.append("action", data.ActionTaken);
        _formData.append("IsReportedAction", data.IsReportedAction);
        _formData.append("ActionId", this.actionID.toString());
        var body = _formData;
        this._dataService.postUploadData(body).subscribe(function (res) {
            _this.closeDialog.nativeElement.click();
            if (data.IsReportedAction == "true" || data.IsReportedAction == true)
                _this.router.navigate(['/pages/correctiveaction/actionrequired/' + _this.myForm.controls.actionlist.controls[0].controls.Id.value]);
            else
                _this.router.navigate(['/pages/action/list']);
        });
    };
    EventActionEditComponent.prototype.saveeventformdata = function (data, buttonText) {
        var _this = this;
        var currentEvent = new formeventdata_1.EventViewModel();
        if (data.actionlist != null && data.actionlist.length > 0) {
            var eventArray = [];
            for (var _i = 0, _a = data.actionlist; _i < _a.length; _i++) {
                var entry = _a[_i];
                var tempmodel = new formeventdata_1.ActionDataModel();
                tempmodel.Title = entry.title;
                tempmodel.OrganizationID = 1;
                tempmodel.EventActionStatusID = entry.EventActionStatusID;
                tempmodel.IsActionRequired = entry.actionRequired;
                tempmodel.ActionID = entry.Id;
                tempmodel.Duedate = new Date(entry.dueDate.year, entry.dueDate.month - 1, entry.dueDate.day).toLocaleDateString();
                tempmodel.AddedBy = 1;
                tempmodel.SourceID = entry.eventID;
                tempmodel.CategoryID = entry.CategoryId;
                tempmodel.RootCause = entry.RootCause;
                tempmodel.ActionSourceID = entry.ActionSourceId;
                tempmodel.Comments = entry.comments;
                tempmodel.AssignedBy = entry.AssignedBy;
                tempmodel.CorrectiveActionID = entry.CorrectiveActionID;
                if (entry.responsiblePerson != null && entry.responsiblePerson.length > 0) {
                    var eventArray1 = [];
                    for (var _b = 0, _c = entry.responsiblePerson; _b < _c.length; _b++) {
                        var entry1 = _c[_b];
                        if (entry1 > 0) {
                            var tempmodel1 = new formeventdata_1.ActionResponsiblePersonDataModel();
                            tempmodel1.UserID = entry1;
                            tempmodel.AddedBy = 1;
                            eventArray1.push(tempmodel1);
                        }
                    }
                    tempmodel.ActionResponsiblePersonDataModel = eventArray1;
                }
                eventArray.push(tempmodel);
            }
            currentEvent.ActionDataModel = eventArray;
            this._dataService.updateActionData(eventArray[0]).subscribe(function (res) {
                if (buttonText == "save")
                    _this.router.navigate(['/pages/action/list']);
                else {
                    _this.actionID = res;
                    _this._dataService.getActionData(_this.actionID).subscribe(function (res) {
                        if (res.EventActionStatusID == 3) {
                            _this.buttonComplete.nativeElement.hidden = true;
                            _this.buttonSubmit.nativeElement.hidden = true;
                        }
                        var control1 = _this.myForm.controls['actionlist'];
                        control1.removeAt(0);
                        if (res.CorrectiveActionID > 0)
                            res.CorrectionStatusRequired = true;
                        control1.push(_this.initAction(res));
                        _this.acitonCommentList = res.ActionCommentsListModel;
                    });
                }
            });
        }
    };
    EventActionEditComponent.prototype.setActionText = function (selectedId) {
        if (selectedId == 0) {
            this.myForm.controls.actionlist.controls[0].controls.title.setValue('');
            this.myForm.controls.actionlist.controls[0].controls.title.enable();
            this.myForm.controls.actionlist.controls[0].controls.title.updateValueAndValidity();
            this.myForm.controls.actionlist.controls[0].controls.title.valueChanges();
        }
        else {
            var actionName = this.correctiveList.filter(function (x) { return x.CorrectiveActionId == selectedId; })[0].CorrectiveActionName;
            this.myForm.controls.actionlist.controls[0].controls.title.setValue(actionName);
            this.myForm.controls.actionlist.controls[0].controls.title.disable();
            this.myForm.controls.actionlist.controls[0].controls.title.updateValueAndValidity();
            this.myForm.controls.actionlist.controls[0].controls.title.valueChanges();
            this.myForm.updateValueAndValidity();
        }
    };
    EventActionEditComponent.prototype.SetCorrectionRequired = function () {
        var checked = this.myForm.controls.actionlist.controls[0].controls.CorrectionStatusRequired.value;
        if (checked) {
            this.myForm.controls.actionlist.controls[0].controls.CorrectiveActionID.enable();
            this.myForm.controls.actionlist.controls[0].controls.CorrectiveActionID.updateValueAndValidity();
        }
        else {
            this.myForm.controls.actionlist.controls[0].controls.CorrectiveActionID.setValue("0");
            this.myForm.controls.actionlist.controls[0].controls.CorrectiveActionID.disable();
            this.myForm.controls.actionlist.controls[0].controls.CorrectiveActionID.updateValueAndValidity();
            this.setActionText(0);
        }
    };
    EventActionEditComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.fileName = input.files[0].name;
            this.fileToUpload = input.files[0];
        }
    };
    EventActionEditComponent.prototype.removeFile = function () {
        this.fileName = '';
        this.fileToUpload = null;
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], EventActionEditComponent.prototype, "closeDialog", void 0);
    __decorate([
        core_1.ViewChild('buttonComplete'),
        __metadata("design:type", Object)
    ], EventActionEditComponent.prototype, "buttonComplete", void 0);
    __decorate([
        core_1.ViewChild('buttonSubmit'),
        __metadata("design:type", Object)
    ], EventActionEditComponent.prototype, "buttonSubmit", void 0);
    EventActionEditComponent = __decorate([
        core_1.Component({
            selector: 'app-eventactionedit',
            templateUrl: './eventaction.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService],
            styleUrls: ['../../theme/components/messages/messages.component.scss',
                '../form-elements/controls/file-uploader/file-uploader.component.scss']
            //    styles: [`.modal-dialog{
            //    overflow-y: initial !important
            //}
            //.redclr{
            //color:red;
            //}
            //.modal-body{
            //    height: 400px;
            //    overflow-y: auto;
            //}`]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, eventaction_service_1.EventActionService, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, Mastereventdata_1.MasterEventDataService])
    ], EventActionEditComponent);
    return EventActionEditComponent;
    var _a, _b, _c, _d;
}());
exports.EventActionEditComponent = EventActionEditComponent;
//# sourceMappingURL=eventaction.component.js.map