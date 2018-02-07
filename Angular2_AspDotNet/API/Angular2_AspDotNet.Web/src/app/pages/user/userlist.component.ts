
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
@Component({
    selector: 'app-meetinglist',
    templateUrl: './userlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [EventActionService, MasterEventDataService, UserService],


})

export class UserListComponent implements OnInit {
    data: UserViewListModel[];
    isAdminUser: boolean = (sessionStorage["RoleId"] as number[]).indexOf(1) > - 1 ? true : false;
    totalRecords: number = 0;
    pageNumber: number = 1;
    sortColumn: string = "UserName";
    sortOrder: string = "asc";
    pageSize: number = 10;
    organizationFilter: string = '';
    roleFilter: string = '';
    userNameFilter: string;
    firstNameFilter: string;
    lastNameFilter: string;
    emailIdFilter: string;
    inactiveFilter: boolean;
    constructor(private _UserService: UserService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
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
        this.pageNumber = (event.first / event.rows) + 1;
        this.pageSize = event.rows;
        this.sortColumn = event.sortField;
        this.sortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.organizationFilter = event.filters.OrganizationName == undefined ? '' : event.filters.OrganizationName.value;
        this.roleFilter = event.filters.RoleName == undefined ? '' : event.filters.RoleName.value;
        this.userNameFilter = event.filters.UserName == undefined ? '' : event.filters.UserName.value;
        this.firstNameFilter = event.filters.FirstName == undefined ? '' : event.filters.FirstName.value;
        this.lastNameFilter = event.filters.LastName == undefined ? '' : event.filters.LastName.value;
        this.emailIdFilter = event.filters.EmailID == undefined ? '' : event.filters.EmailID.value;
        if (event.filters.InActiveText != undefined) {
            if (event.filters.InActiveText.value.toLocaleLowerCase() == "yes")
                this.inactiveFilter = true;
            else
                this.inactiveFilter = false;
        }
        else
            this.inactiveFilter = null;
        this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.organizationFilter, this.roleFilter
            , this.userNameFilter, this.firstNameFilter, this.lastNameFilter, this.emailIdFilter, this.inactiveFilter);

    }

    getList(pageNo: number, pageSize: number, sortColumn: string, sortOrder: string,
        organizationFilter: string, roleFilter: string, userName: string, firstName: string, lastName: string,
        emailId: string, inactiveFilter: boolean) {
        this._UserService.getAllUser(pageNo, pageSize, sortColumn, sortOrder, organizationFilter, roleFilter,
            userName, firstName, lastName, emailId, inactiveFilter)
            .subscribe((res: UserViewList) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.UserViewListModel
            });
    }

    public redirectToEditPage(event: UserViewListModel) {
        this.router.navigate(['/pages/user/' + event.UserID]);
    }
    public deleteAction(event: UserViewListModel) {
        if (confirm("Are you sure want to delete this user ?")) {
            this._UserService.deleteUser(event.UserID).subscribe(res => {
                this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.organizationFilter, this.roleFilter, this.userNameFilter, this.firstNameFilter, this.lastNameFilter, this.emailIdFilter, this.inactiveFilter);
            });
        }
    }
    redirectToNewPage() {
        this.router.navigate(['/pages/user']);
    }
    public resetPassword(event: UserViewListModel) {
        if (confirm("Are you sure want to reset password for this user ?")) {
            this._UserService.resetPassword(event.UserID).subscribe();
        }
    }
    public inactiveUser(event: UserViewListModel) {
        if (confirm("Are you sure want to change status of this user ?")) {
            this._UserService.inactiveUser(event.UserID, !event.InActive).subscribe(res => { this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.organizationFilter, this.roleFilter, this.userNameFilter, this.firstNameFilter, this.lastNameFilter, this.emailIdFilter, this.inactiveFilter) });
        }
    }
}

