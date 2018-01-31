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
import { CalendarModule, CheckboxModule, InputTextareaModule, InputTextModule } from 'primeng/primeng';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { MenuItem } from 'primeng/primeng';
import { TrainingService } from './training.service';
import { UserScheduleResultViewModel, TrainingScheduleListByUserIdViewModel, TrainingScheduleUserListViewModel, TrainingScheduleListViewModel, TrainingScheduleRoleViewModel, TrainingViewModel, TrainingMaterialViewModel, TrainingScheduleViewModel, TrainingScheduleUserViewModel, TrainingAssignmentAttemptViewModel  } from './training.model';
import { AssignmentService } from '../assignment/assignment.service';
import { Assignment } from '../assignment/assignment.model';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { UserModel } from '../meeting/meeting.model';
import { UserService } from "../user/user.service";
import { UserViewModel, RoleViewModel } from '../user/user.model';
import { environment } from '../../../environments/environment';
import * as FileSaver from 'file-saver';
let apiURL = environment.apiEndpoint;
@Component({
    selector: 'app-trainer-component',
    templateUrl: './trainer.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './training.component.css'
    ],
    providers: [TrainingService, AssignmentService, MasterEventDataService, UserService],


})

export class TrainerComponent implements OnInit {
    public apiEndPoint: string;
    public myForm: FormGroup; // our form model
    ShowAssignment: boolean = false;
    assignmentData: TrainingAssignmentAttemptViewModel;

    constructor(private _UserService: UserService, private _assignmentService: AssignmentService, private _masterDataService: MasterEventDataService, private _trainingService: TrainingService, private router: Router, private location: Location, private _fb: FormBuilder, private route: ActivatedRoute) {
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint.replace("/api", "");
    }
    ngOnInit() {
        this.getTrainingScheduleListData();

    }
    scheduleListData: TrainingScheduleListByUserIdViewModel[] = [];
    totalScheduleRecords: number = 0;
    getTrainingScheduleListData(): void {
        this.scheduleListData = [];
        this.totalScheduleRecords = 0;
        this._trainingService.getTrainingScheduleListByUserId().subscribe((res: TrainingScheduleListByUserIdViewModel[]) => {
            this.scheduleListData = res;
            this.totalScheduleRecords = res.length;
        });
    }

    userScheduleResultList: UserScheduleResultViewModel[] = [];

    getuserScheduleResultList(id: number): void {
        this.userScheduleResultList = [];
        this.ShowAssignment = false;

        this._trainingService.getTrainingScheduleUserResultList(id).subscribe((res: UserScheduleResultViewModel[]) => {
            this.userScheduleResultList = res;
        });
    }
    UpdateScheduleResult(model: UserScheduleResultViewModel) {
        this._trainingService.addUpdateUserTrainingScheduleResult(model).subscribe(res => {
            this.getuserScheduleResultList(model.TrainingScheduleId);
        });
    }
    updateTrainingScheduleStatus(event: TrainingScheduleListByUserIdViewModel, status: boolean) {
        this._trainingService.updateTrainingScheduleStatus(event.TrainingScheduleId, status).subscribe(res => {
            this.getTrainingScheduleListData();
        });
    }
    @ViewChild('closeDialog') closeDialog;
    updateAllTrainerUserRecords() {
        for (let aa of this.userScheduleResultList) {
            this.UpdateScheduleResult(aa);
        }
        this.closeDialog.nativeElement.click();
    }

    GetAssignmentForUser(TrainingAssignmentAttemptId: number, UserId: number) {
        this._trainingService.GetAssignmentForUser(TrainingAssignmentAttemptId, UserId).subscribe((res: TrainingAssignmentAttemptViewModel) => {
            this.assignmentData = res;
            this.ShowAssignment = true;
            this.onScoreChange();
        });
    };

    onScoreChange()
    {
        let score = 0;
        this.assignmentData.TrainingAssignmentAnswers.forEach(answers => {
            score = score + answers.QuestionScore;
        });
        this.assignmentData.Score = score;
    }


    onShowAssignment(TrainingAssignmentAttemptId: number, UserId: number) {
        if (!this.ShowAssignment) {
            this.GetAssignmentForUser(TrainingAssignmentAttemptId, UserId);
        }
        else this.ShowAssignment = false;
    }

    SaveAssignmentScoreForUser() {        
        this._trainingService.SaveAssignmentScoreForUser(this.assignmentData).subscribe((res: any) => {
            this.ShowAssignment = false;
        }, err => { console.log(err); });
    }

    trainingMaterialList: TrainingMaterialViewModel[] = [];
    getMaterialListData(trainingId) {
        this.trainingMaterialList = [];
        this._trainingService.getTrainingMaterialList(trainingId).subscribe((res: TrainingMaterialViewModel[]) => {
            this.trainingMaterialList = res;

        });
    }

    downloadMaterial(id: number, fileName: string) {
        this._trainingService.downloadMaterial(id).subscribe(res => {
            FileSaver.saveAs(res, fileName);
        });
    }

}

