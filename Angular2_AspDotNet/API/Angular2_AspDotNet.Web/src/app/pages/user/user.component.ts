
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
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { MeetingDataService } from '../meeting/meeting.service';
import { CalendarModule } from 'primeng/primeng';
import { UserService } from "../user/user.service";
import { UserViewModel, RoleViewModel, SecurityQuestionModel, OrgaizationViewModel } from '../user/user.model';
@Component({
    selector: 'app-meeting',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"
    ],
    providers: [EventActionService, MasterEventDataService, MeetingDataService, UserService],


})

export class UserComponent implements OnInit {


    roleList: RoleViewModel[];
    securityQuestionList: SecurityQuestionModel[];
    securityQuestionList1: SecurityQuestionModel[];
    securityQuestionList2: SecurityQuestionModel[];
    organizationList: OrgaizationViewModel[];
    userId: number;
    orgid: number = 0;
    public multiroleList: IMultiSelectOption[] = [];
    public myForm: FormGroup; // our form model
    constructor(private _UserService: UserService, private _meetingService: MeetingDataService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) {

    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'] as number; //log the value of id
            this.orgid = params['orgid'] as number; //log the value of organization id
        });
        this._UserService.getMultiSelectRoleList(this.orgid).subscribe((res) => {
            this.multiroleList = res;
         });
        this._UserService.getSecurityQuestionList().subscribe((res: SecurityQuestionModel[]) => {
            this.securityQuestionList = res;
            this.securityQuestionList1 = res;
            this.securityQuestionList2 = res;
        });
        this._UserService.getOrganizationList().subscribe((res: OrgaizationViewModel[]) => {
            this.organizationList = res;
        });
        let userModel = new UserViewModel();
        userModel.OrganizationID = 1;
        this.addhtmltoform(userModel);
        if (this.userId > 0) {
            this._UserService.getSingleUser(this.userId).subscribe((res: UserViewModel) => {
                this.addhtmltoform(res);
            });
        }
    }

    addhtmltoform(model: UserViewModel) {
        this.myForm = this._fb.group({
            UserID: [model.UserID],
            UserName: new FormControl(model.UserName, [Validators.required, this.validateDistinctUserName.bind(this)]),
            FirstName: [model.FirstName, Validators.required],
            LastName: [model.LastName, Validators.required],
            EmailID: new FormControl(model.EmailID, [Validators.required, Validators.email, this.validateDistinctEmail.bind(this)]),
            OrganizationID: [model.OrganizationID, Validators.required],
            RoleID: [1],
            RoleList: [model.RoleList, Validators.required],
            SecurityQuestion1: [model.SecurityQuestion1],
            SecurityAnswer2: [model.SecurityAnswer2],
            SecurityAnswer1: [model.SecurityAnswer1],
            SecurityQuestion2: [model.SecurityQuestion2],
            OverRideOrganizationId: [false]
        });
    }

    validateDistinctEmail(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._UserService.validateUserEmail(control.value, this.myForm.controls["UserID"].value).subscribe((res: boolean) => {
                if (res == false) {
                    result = true;
                    this.myForm.controls["EmailID"].setErrors({ remote: "Email already exists." });
                }
            });
        }
        else
            result = null;
        return result ? { 'email': { value: control.value } } : null;
    }

    validateDistinctUserName(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._UserService.validateUserName(control.value, this.myForm.controls["UserID"].value).subscribe((res: boolean) => {
                if (res == false) {
                    result = true;
                    this.myForm.controls["UserName"].setErrors({ remote: "UserName already exists." });
                }
            });
        }
        else
            result = null;
        return result ? { 'userName': { value: control.value } } : null;
    }
    saveeventformdata(data: UserViewModel) {
        if (this.orgid > 0) {
            data.OverRideOrganizationId = true;
            data.OrganizationID = this.orgid;
        }
        this._UserService.saveUser(data).subscribe(res => {
            this.router.navigate(['/pages/user/list']);
        });
    }
    SecurityQuestion1Changesd(questionId: number) {
        this.securityQuestionList2 = this.securityQuestionList;
        this.securityQuestionList2 = this.securityQuestionList2.filter(x => x.SecurityQuestionID != questionId);

    }
    SecurityQuestion2Changesd(questionId: number) {
        this.securityQuestionList1 = this.securityQuestionList;
        this.securityQuestionList1 = this.securityQuestionList1.filter(x => x.SecurityQuestionID != questionId);
    }
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
}

