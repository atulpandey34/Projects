
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
import { CorrectiveActionService } from '../correctiveaction/correctiveaction.service';
import { CorrectiveActionDataModel } from '../correctiveaction/correctiveaction.model';

@Component({
    selector: 'app-correctiveactionrequiored',
    templateUrl: './correctiveaction.actionrequired.conmponent.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css'

    ],
    providers: [EventActionService, MasterEventDataService, CorrectiveActionService],


})

export class CorrectiveActionRequiredComponent implements OnInit {

    actionID: number = 0;
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

    constructor(private _CorrectiveActionService: CorrectiveActionService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
    ngOnInit() {

        let dataModel: CorrectiveActionDataModel = new CorrectiveActionDataModel();
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
        this._dataService.getAllCorrectedAction().subscribe((res: CorrectiveActionModel[]) => {
            this.correctiveList = res;
        });
        if (this.actionID > 0) {


            this._CorrectiveActionService.getCorrectiveActionByActionId(this.actionID).subscribe((res: CorrectiveActionDataModel) => {

                this.addhtmltoform(res);

            });
        }

    }
    acitonCommentList: ActionCommentsListModel[] = [];
    public myForm: FormGroup; // our form model


    addhtmltoform(actionModel: CorrectiveActionDataModel) {
        this.myForm = this._fb.group({
            ActionID: [actionModel.ActionID],
            CorrectiveActionId: [actionModel.CorrectiveActionId],
            Title: [actionModel.Title, Validators.required],
            dueDateStruct: [{ year: new Date(actionModel.Duedate).getFullYear(), month: new Date(actionModel.Duedate).getMonth() + 1, day: new Date(actionModel.Duedate).getDate() }, Validators.required],
            CategoryID: [actionModel.CategoryID],
            ActionSourceID: [actionModel.ActionSourceID],
            RootCause: [actionModel.RootCause],
            AssignedBy: [actionModel.AssignedBy, Validators.required],
            ActionTaken: [actionModel.ActionTaken, Validators.required],
        });
    }





    saveeventformdata(data: CorrectiveActionDataModel) {
        data.Duedate = new Date(data.dueDateStruct.year, data.dueDateStruct.month - 1, data.dueDateStruct.day).toLocaleDateString();
        this._CorrectiveActionService.addCorrectiveActionFromAction(data).subscribe((res: string) => {
            if (res == "added successfully") {
                this.router.navigate(['/pages/correctiveaction/list']);
            }
        });
    }





}

