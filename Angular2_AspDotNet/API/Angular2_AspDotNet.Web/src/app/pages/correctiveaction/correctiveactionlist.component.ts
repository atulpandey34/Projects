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
import { UserViewModel, RoleViewModel, SecurityQuestionModel, OrgaizationViewModel, UserViewListModel, UserViewList } from '../user/user.model';
import { AccordionModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem } from 'primeng/primeng';
import { UserService } from "../user/user.service";
import { CorrectiveActionService } from '../correctiveaction/correctiveaction.service';
import { CorrectiveActionList, CorrectiveActionListModel, CorretiveActionListPageFilterModel } from '../correctiveaction/correctiveaction.model';
@Component({
    selector: 'app-correctiveactionlist',
    templateUrl: './correctiveactionlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [EventActionService, MasterEventDataService, UserService, CorrectiveActionService],


})

export class CorrectiveActionListComponent implements OnInit {
    correctiveActionFilterModel: CorretiveActionListPageFilterModel;
    data: CorrectiveActionListModel[];
    totalRecords: number = 0;
    constructor(private _CorrectiveActionService: CorrectiveActionService, private _UserService: UserService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) {
        this.correctiveActionFilterModel = new CorretiveActionListPageFilterModel();
        this.correctiveActionFilterModel.PageNo = 1;
        this.correctiveActionFilterModel.PageSize = 10;
        this.correctiveActionFilterModel.SortColumn = "Title";
        this.correctiveActionFilterModel.SortOrder = "asc";
    }
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
        this.correctiveActionFilterModel.PageNo = (event.first / event.rows) + 1;
        this.correctiveActionFilterModel.PageSize = event.rows;
        this.correctiveActionFilterModel.SortColumn = event.sortField;
        this.correctiveActionFilterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.correctiveActionFilterModel.TitleFilter = event.filters.Title == undefined ? '' : event.filters.Title.value;
        this.correctiveActionFilterModel.ActionTakenFilter = event.filters.ActionTaken == undefined ? '' : event.filters.ActionTaken.value;
        this.correctiveActionFilterModel.AssignedByFilter = event.filters.AssignedBy == undefined ? '' : event.filters.AssignedBy.value;
        this.correctiveActionFilterModel.CategoryFilter = event.filters.CategoryName == undefined ? '' : event.filters.CategoryName.value;
        this.correctiveActionFilterModel.SourceFilter = event.filters.ActionSource == undefined ? '' : event.filters.ActionSource.value;
        this.correctiveActionFilterModel.DueDateFilter = event.filters.DueDate == undefined ? '' : event.filters.DueDate.value;
        this.correctiveActionFilterModel.RootCauseFilter = event.filters.RootCause == undefined ? '' : event.filters.RootCause.value;

        this.getList();

    }

    getList() {
        this._CorrectiveActionService.getCorrectiveActionList(this.correctiveActionFilterModel)
            .subscribe((res: CorrectiveActionList) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.CorrectiveActionListModel
            });
    }

    public redirectToEditPage(event: CorrectiveActionListModel) {
        this.router.navigate(['/pages/correctiveaction/' + event.CorrectiveActionId]);
    }
    public deleteAction(event: CorrectiveActionListModel) {
        if (confirm("Are you sure want to delete this corrective action ?")) {
            this._CorrectiveActionService.deleteCorrectiveAction(event.CorrectiveActionId).subscribe();
            this.getList();
        }
    }
    redirectToNewPage() {
        this.router.navigate(['/pages/correctiveaction']);
    }
}