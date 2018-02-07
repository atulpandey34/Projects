import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl, AbstractControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'primeng/primeng';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { MenuItem } from 'primeng/primeng';
import { TrainingService } from './training.service';
import { TrainingScheduleUserListViewModel, TrainingScheduleListViewModel, TrainingScheduleRoleViewModel, TrainingViewModel, TrainingMaterialViewModel, TrainingScheduleViewModel, TrainingScheduleUserViewModel } from './training.model';
import { AssignmentService } from '../assignment/assignment.service';
import { Assignment } from '../assignment/assignment.model';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { UserModel } from '../meeting/meeting.model';
import { UserService } from "../user/user.service";
import { UserViewModel, RoleViewModel } from '../user/user.model';
import { environment } from '../../../environments/environment';
import { AssignmentListFilterModel } from '../assignment/assignment.model';
import * as FileSaver from 'file-saver';
let apiURL = environment.apiEndpoint;
@Component({
    selector: 'app-training-component',
    templateUrl: './training.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './training.component.css'
    ],
    providers: [TrainingService, AssignmentService, MasterEventDataService, UserService],


})

export class TrainingComponent implements OnInit {
    public apiEndPoint: string;
    public myForm: FormGroup; // our form model
    public materialForm: FormGroup;
    public scheduleForm: FormGroup;
    trainingId: number = 0;
    disableTabSchedule: boolean = true;
    usersOptions: IMultiSelectOption[] = [];
    rolesOptions: IMultiSelectOption[] = [];
    trainersList: UserModel[] = [];
    assignmentList: AssignmentListFilterModel[] = [];

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

    public rolesTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find...',
        defaultTitle: 'Select',
        allSelected: 'All selected',
    };
    public rolesSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-secondary btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true,
        maxHeight: '300px'
    };
    @ViewChild('assigmentResuiredCheckBox') assigmentResuiredCheckBox;
    @ViewChild('dropDownTrainingEvent') dropDownTrainingEvent;
    @ViewChild('closeDialog') closeDialog;
    @ViewChild('assignmentDropDown') assignmentDropDown;
    @ViewChild('youtubelinktextbox') youtubelinktextbox;
    @ViewChild('trainingTypeEvent') trainingTypeEvent;
    @ViewChild('trainingTypeUser') trainingTypeUser;
    @ViewChild('assignedToTrainee') assignedToTrainee;

    constructor(private _UserService: UserService, private _assignmentService: AssignmentService, private _masterDataService: MasterEventDataService, private _trainingService: TrainingService, private router: Router, private location: Location, private _fb: FormBuilder, private route: ActivatedRoute) {
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    ngOnInit() {

        this.addhtmltoform(new TrainingViewModel());
        this.addTrainingMaterialHtmlToForm(new TrainingMaterialViewModel());
        this.addTrainingScheduleHtmlToForm(new TrainingScheduleViewModel());
        this.EnableDisableTrainingEvent(2);
        this.trainingTypeUser.nativeElement.checked = true;
        this._assignmentService.getAllAssignment().subscribe((res: AssignmentListFilterModel[]) => {
            this.assignmentList = res;
        });
        this._masterDataService.getUserList().subscribe(res => {

            let compare = (a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                let comparison = 0;
                if (nameA > nameB) {
                    comparison = 1;
                } else if (nameA < nameB) {
                    comparison = -1;
                }
                return comparison;
            }
            res.sort(compare);
            this.usersOptions = res;
            this.trainersList = res;
        });
        this._UserService.getRoleMultipleList().subscribe((res) => {

            this.rolesOptions = res;

        });
        this.userDropdown.disabled = true;
        this.roleDropdown.disabled = true;
        this.route.params.subscribe(params => {
            this.trainingId = params['id'] as number; //log the value of id
        });
        if (this.trainingId > 0) {
            this.getTrainingScheduleListData();
            this._trainingService.getTraining(this.trainingId).subscribe((res: TrainingViewModel) => {
                this.EnableDisableTrainingEvent(res.TrainingType);

                this.addhtmltoform(res);
                if (res.TrainingType == 1) {
                    this.trainingTypeEvent.nativeElement.checked = true;
                }
                else {
                    this.trainingTypeUser.nativeElement.checked = true;
                }
                this.EnableDisableTrainingEvent(res.TrainingType);
                this.disableTabSchedule = false;
                this.getMaterialListData();
                this._assignmentService.getAssignment(res.AssignmentID).subscribe((res: AssignmentListFilterModel) => {
                    this.assignmentList.push(res);
                });
            });
        }
    }
    EnableDisableAssignmentDropDown() {
        if (this.assigmentResuiredCheckBox.nativeElement.checked == true) {
            this.assignmentDropDown.nativeElement.disabled = false;
        }
        else {
            this.assignmentDropDown.nativeElement.disabled = true;
            this.assignmentDropDown.nativeElement.value = '0';
        }

    }
    addhtmltoform(model: TrainingViewModel) {
        this.myForm = this._fb.group({
            TrainingId: [model.TrainingId],
            TrainingNeed: new FormControl(model.TrainingNeed, [Validators.required]),
            TrainerRequired: [model.TrainerRequired],
            TrainingType: [model.TrainingType],
            TrainingEventID: new FormControl(model.TrainingEventID),
            IsAssignmentRequired: [model.IsAssignmentRequired],
            AssignmentID: [model.AssignmentID],
            Active: [model.Active],
            YouTubeLink: [model.YouTubeLink],
        });
    }
    addTrainingMaterialHtmlToForm(model: TrainingMaterialViewModel) {
        this.materialForm = this._fb.group({
            TrainingMaterialId: [model.TrainingMaterialId],
            YouTubeLink: [model.YouTubeLink],
            FilePath: [model.FilePath],
            FileName: [model.FileName],
            TrainingId: [this.trainingId],
            FileExtension: [model.FileExtension],
            File: [''],
        })
    }
    addTrainingScheduleHtmlToForm(model: TrainingScheduleViewModel) {
        this.scheduleForm = this._fb.group({
            TrainingScheduleId: [model.TrainingScheduleId],
            TrainingId: [this.trainingId],
            StartDateStruct: [{ year: new Date(model.StartDate).getFullYear(), month: new Date(model.StartDate).getMonth() + 1, day: new Date(model.StartDate).getDate() }, Validators.required],
            EndDateStruct: [{ year: new Date(model.EndDate).getFullYear(), month: new Date(model.EndDate).getMonth() + 1, day: new Date(model.EndDate).getDate() }, Validators.required],
            Trainer: [model.Trainer, Validators.required],
            Users: [model.Users],
            Roles: [model.Roles],
        })
    }

    SaveTraining(model: TrainingViewModel) {
        model.TrainingId = this.trainingId;
        this._trainingService.addUpdateTraining(model).subscribe((res: number) => {
            this.trainingId = res;
            //this.divMaterial.nativeElement.hidden = true;
            this.getMaterialListData();
            this.disableTabSchedule = false;
            this.saveMaterial();
            this.youtubelinktextbox.nativeElement.value = '';
            this.router.navigate(['/pages/training/' + res.toString()]);

        });
    }
    EnableDisableTrainingEvent(value: number) {
        this.dropDownTrainingEvent.nativeElement.value = 0;
        if (value == 1) {
            this.dropDownTrainingEvent.nativeElement.disabled = false;
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = true;
            this.roleDropdown.disabled = true;
        }
        else {
            this.dropDownTrainingEvent.nativeElement.disabled = true;
            this.assignedToTrainee.nativeElement.checked = true;
            this.EnableDisableAssignedTo(1);
        }
    }
    @ViewChild('userDropdown') userDropdown;
    @ViewChild('roleDropdown') roleDropdown;

    EnableDisableAssignedTo(value: number) {
        if (value == 1) {
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = false;
            this.roleDropdown.disabled = true;
        }
        else {
            this.scheduleForm['controls'].Users.setValue([]);
            this.scheduleForm['controls'].Roles.setValue([]);
            this.userDropdown.disabled = true;
            this.roleDropdown.disabled = false;
        }
    }
    saveSchedule(data: TrainingScheduleViewModel) {
        data.TrainingId = this.trainingId;
        data.StartDate = new Date(data.StartDateStruct.year, data.StartDateStruct.month - 1, data.StartDateStruct.day).toLocaleDateString();
        data.EndDate = new Date(data.EndDateStruct.year, data.EndDateStruct.month - 1, data.EndDateStruct.day).toLocaleDateString();
        if (data.Users != null && data.Users.length > 0) {
            data.UserList = [];
            for (let d of data.Users) {
                var user: TrainingScheduleUserViewModel = new TrainingScheduleUserViewModel();
                user.TrainingScheduleUserId = 0;
                user.UserId = d;
                user.TrainingScheduleId = data.TrainingScheduleId;
                data.UserList.push(user);
            }
        }
        if (data.Roles != null && data.Roles.length > 0) {
            data.RoleList = [];
            for (let d of data.Roles) {
                var role: TrainingScheduleRoleViewModel = new TrainingScheduleRoleViewModel();
                role.TrainingScheduleRoleId = 0;
                role.RoleId = d;
                role.TrainingScheduleId = data.TrainingScheduleId;
                data.RoleList.push(role);
            }
        }
        this._trainingService.addUpdateTrainingSchedule(data).subscribe(res => {

            this.addTrainingScheduleHtmlToForm(new TrainingScheduleViewModel());
            this.getTrainingScheduleListData();
        });
    }
    fileName: string;
    fileToUpload: Array<File>;
    fileChange(input) {
        this.fileToUpload = <Array<File>>input.target.files;
        //const reader = new FileReader();
        //if (input.files.length) {
        //    this.fileName = input.files[0].name;
        //    this.fileToUpload = input.files[0];
        //}
    }

    removeFile(): void {
        this.fileName = '';
        this.fileToUpload = null;
    }

    saveMaterial() {
        if (this.fileToUpload != null && this.fileToUpload != undefined && this.fileToUpload.length > 0) {
            let files = this.fileToUpload;
            this.fileToUpload = null;
            for (let file of files) {
                let _formData = new FormData();
                _formData.append("FileName", file.name);
                _formData.append("MyFile", file);
                _formData.append("YouTubeLink", '');
                _formData.append("TrainingId", this.trainingId.toString());
                let body = _formData;
                this._trainingService.uploadMaterial(body).subscribe(res => {

                    this.getMaterialListData();
                });

            }
        }
    }
    scheduleListData: TrainingScheduleListViewModel[] = [];
    totalScheduleRecords: number = 0;
    getTrainingScheduleListData() {
        this.scheduleListData = [];
        this.totalScheduleRecords = 0;
        this._trainingService.getTrainingScheduleList(this.trainingId).subscribe((res: TrainingScheduleListViewModel[]) => {
            this.scheduleListData = res;
            this.totalScheduleRecords = res.length;
        });
    }
    deleteSchedule(event: TrainingScheduleListViewModel) {
        if (confirm("Are you sure want to delete this training schedule ?")) {
            this._trainingService.deleteTrainingSchedule(event.TrainingScheduleId).subscribe(res => {
                this.getTrainingScheduleListData();
            });
        }
    }
    trainingScheduleUserList: TrainingScheduleUserListViewModel[] = [];
    getTrainingScheduleUserList(id: number) {
        this.trainingScheduleUserList = [];
        this._trainingService.getTrainingScheduleUserList(id).subscribe((res: TrainingScheduleUserListViewModel[]) => {
            this.trainingScheduleUserList = res;
        });
    }

    // Material List
    trainingMaterialList: TrainingMaterialViewModel[] = [];
    getMaterialListData() {
        this.trainingMaterialList = [];
        this._trainingService.getTrainingMaterialList(this.trainingId).subscribe((res: TrainingMaterialViewModel[]) => {
            this.trainingMaterialList = res;

        });
    }
    deleteMaterial(event: TrainingMaterialViewModel) {
        if (confirm("Are you sure want to delete this material ?")) {
            this._trainingService.deleteTrainingMaterial(event.TrainingMaterialId).subscribe(res => {
                this.getMaterialListData();
            });
        }
    }
    @ViewChild('iframeDownload') iframeDownload;
    downloadMaterial(id: number, fileName: string) {
        debugger;
        this._trainingService.downloadMaterial(id).subscribe(res => {
            FileSaver.saveAs(res, fileName);
        });
    }
    //Material List End
}

