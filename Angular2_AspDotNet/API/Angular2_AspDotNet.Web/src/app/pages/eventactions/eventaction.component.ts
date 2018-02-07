
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
import { CategoryModel, ActionSourceModel, ActionCommentsListModel, CorrectiveActionModel } from '../eventactions/eventaction.model';
import { MasterEventDataService } from '../calendar/Mastereventdata';

@Component({
    selector: 'app-eventactionedit',
    templateUrl: './eventaction.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [EventActionService, MasterEventDataService],
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
})

export class EventActionEditComponent implements OnInit {
    actionID: number = 0;
    fileToUpload: File;
    public responsiblePersonOptions: IMultiSelectOption[] = [];
    myOptions: IMultiSelectOption[];
    eventActionStatusList: EventActionStatusModel[] = [];
    public responsiblePersonTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find...',
        defaultTitle: 'Select',
        allSelected: 'All selected',
    };
    public responsiblePersonSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-secondary btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true,
        maxHeight: '300px'
    };
    correctiveList: CorrectiveActionModel[];
    onResponsiblePersonChange(s) {
    }
    actionSourceList: ActionSourceModel[] = [];
    categoryList: CategoryModel[] = [];
    @ViewChild('closeDialog') closeDialog;
    @ViewChild('buttonComplete') buttonComplete;
    @ViewChild('buttonSubmit') buttonSubmit;
    constructor(private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
    ngOnInit() {
        this.buttonComplete.nativeElement.hidden = false;
        let dataModel: ActionDataModel = new ActionDataModel();
        dataModel.AssignedBy = sessionStorage["UserId"] as number;
        this.addhtmltoform(dataModel);
        this.route.params.subscribe(params => {
            this.actionID = params['id'] as number; //log the value of id
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
        this._dataService.getAllCategories().subscribe(res => { this.categoryList = res; });
        this._dataService.getAllActionSource().subscribe(res => { this.actionSourceList = res; });
        if (this.actionID > 0) {
            this.buttonComplete.nativeElement.hidden = false;

            this._dataService.getActionData(this.actionID).subscribe((res: ActionDataModel) => {
                if (res.EventActionStatusID == 3) {
                    this.buttonComplete.nativeElement.hidden = true;
                    this.buttonSubmit.nativeElement.hidden = true;
                }
                const control1 = <FormArray>this.myForm.controls['actionlist'];
                control1.removeAt(0);
                if (res.CorrectiveActionID > 0)
                    res.CorrectionStatusRequired = true;
                control1.push(this.initAction(res));
                this.acitonCommentList = res.ActionCommentsListModel;
                //if (res.CorrectiveActionID > 0) {
                //    this.SetCorrectionRequired();
                //    this.setActionText(res.CorrectiveActionID);
                //}

            });
        }
        this._dataService.getAllCorrectedAction().subscribe((res: CorrectiveActionModel[]) => {
            this.correctiveList = res;
        });
        //this._dataService.downloadActionFile("2017-09-02-10-49-23-685_AJOPS8968C_2017_.pdf");
    }
    acitonCommentList: ActionCommentsListModel[] = [];
    public myForm: FormGroup; // our form model
    public actionTakenForm: FormGroup;

    addhtmltoform(content: ActionDataModel) {
        this.myForm = this._fb.group({
            actionlist: this._fb.array([
                this.initAction(content)
            ])

        });
        this.actionTakenForm = this.initActionTaken();
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
            CategoryId: [actionModel.CategoryID, Validators.required],
            ActionSourceId: [actionModel.ActionSourceID, Validators.required],
            RootCause: [actionModel.RootCause],
            eventID: [actionModel.SourceID],
            comments: [''],
            CorrectionStatusRequired: [actionModel.CorrectionStatusRequired],
            CorrectiveActionID: [actionModel.CorrectiveActionID],
            EventActionStatusID: [1],
            AssignedBy: [actionModel.AssignedBy, Validators.required],
        })
    }
    initActionTaken() {
        return this._fb.group({
            ActionTaken: ['', Validators.required],
            IsReportedAction: [false, Validators.required],
            File: ['']
        });
    }
    saveActionTaken(data: any) {
        let _formData = new FormData();
        _formData.append("FileName", this.fileName);
        _formData.append("MyFile", this.fileToUpload);
        _formData.append("action", data.ActionTaken);
        _formData.append("IsReportedAction", data.IsReportedAction);
        _formData.append("ActionId", this.actionID.toString());
        let body = _formData;
        this._dataService.postUploadData(body).subscribe(res => {
            this.closeDialog.nativeElement.click();
            if (data.IsReportedAction == "true" || data.IsReportedAction == true)
                this.router.navigate(['/pages/correctiveaction/actionrequired/' + (this.myForm.controls.actionlist as any).controls[0].controls.Id.value]);
            else
                this.router.navigate(['/pages/action/list']);
        });
    }

    saveeventformdata(data: events, buttonText: string) {
        let currentEvent: EventViewModel = new EventViewModel();
        if (data.actionlist != null && data.actionlist.length > 0) {
            let eventArray: ActionDataModel[] = [];
            for (let entry of data.actionlist) {
                let tempmodel: ActionDataModel = new ActionDataModel();
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
                    let eventArray1: ActionResponsiblePersonDataModel[] = [];
                    for (let entry1 of entry.responsiblePerson) {
                        if (entry1 > 0) {
                            let tempmodel1: ActionResponsiblePersonDataModel = new ActionResponsiblePersonDataModel();
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
            this._dataService.updateActionData(eventArray[0]).subscribe((res: number) => {
                if (buttonText == "save")
                    this.router.navigate(['/pages/action/list']);
                else {
                    this.actionID = res;
                    this._dataService.getActionData(this.actionID).subscribe((res: ActionDataModel) => {
                        if (res.EventActionStatusID == 3) {
                            this.buttonComplete.nativeElement.hidden = true;
                            this.buttonSubmit.nativeElement.hidden = true;
                        }
                        const control1 = <FormArray>this.myForm.controls['actionlist'];
                        control1.removeAt(0);
                        if (res.CorrectiveActionID > 0)
                            res.CorrectionStatusRequired = true;
                        control1.push(this.initAction(res));
                        this.acitonCommentList = res.ActionCommentsListModel;
                    });
                }
            });
        }
    }
    setActionText(selectedId: number) {
        if (selectedId == 0) {
            (this.myForm.controls.actionlist as any).controls[0].controls.title.setValue('');
            (this.myForm.controls.actionlist as any).controls[0].controls.title.enable();
            (this.myForm.controls.actionlist as any).controls[0].controls.title.updateValueAndValidity();
            (this.myForm.controls.actionlist as any).controls[0].controls.title.valueChanges();

        }
        else {
            let actionName = this.correctiveList.filter(x => x.CorrectiveActionId == selectedId)[0].CorrectiveActionName;

            (this.myForm.controls.actionlist as any).controls[0].controls.title.setValue(actionName);
            (this.myForm.controls.actionlist as any).controls[0].controls.title.disable();
            (this.myForm.controls.actionlist as any).controls[0].controls.title.updateValueAndValidity();
            (this.myForm.controls.actionlist as any).controls[0].controls.title.valueChanges();
            this.myForm.updateValueAndValidity();

        }

    }

    SetCorrectionRequired() {
        let checked: boolean = (this.myForm.controls.actionlist as any).controls[0].controls.CorrectionStatusRequired.value;
        if (checked) {
            (this.myForm.controls.actionlist as any).controls[0].controls.CorrectiveActionID.enable();
            (this.myForm.controls.actionlist as any).controls[0].controls.CorrectiveActionID.updateValueAndValidity();
        }
        else {
            (this.myForm.controls.actionlist as any).controls[0].controls.CorrectiveActionID.setValue("0");
            (this.myForm.controls.actionlist as any).controls[0].controls.CorrectiveActionID.disable();
            (this.myForm.controls.actionlist as any).controls[0].controls.CorrectiveActionID.updateValueAndValidity();
            this.setActionText(0);
        }
    }
    fileName: string;
    fileChange(input) {
        const reader = new FileReader();
        if (input.files.length) {
            this.fileName = input.files[0].name;
            this.fileToUpload = input.files[0];
        }
    }

    removeFile(): void {
        this.fileName = '';
        this.fileToUpload = null;
    }

}

