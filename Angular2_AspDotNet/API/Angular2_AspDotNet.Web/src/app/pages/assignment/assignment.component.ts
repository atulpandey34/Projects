
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
import { LocationModel, TitleModel, SubTitleModel, Title, SubTitle, Action, EventActionStatusModel, events, EventFilterModel, EventViewModel, EventDataModel, EventFilterViewModel, EventAttendeeDataModel, ActionDataModel, ActionResponsiblePersonDataModel, AgendaDataModel } from '../calendar/formeventdata';
import { CategoryModel, ActionSourceModel, ActionCommentsListModel } from '../eventactions/eventaction.model';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { NgbModal, NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { MeetingDataService } from '../meeting/meeting.service';
import { CalendarModule, CheckboxModule, RadioButtonModule } from 'primeng/primeng';
import { SignedUserList, HazardListModel, MonitoringMethodModel, DurationUnitModel, HazardModel, RiskAssessmentViewModel, RiskAssessmentTeamViewModel, RiskAssessmentHazardViewModel, RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardReviewViewModel } from '../riskassessment/riskassessment.model';
import { AssignmentListFilterModel, AssignmentQuestionOption, Assignment, AssignmentListData, AssignmentListResult } from '../assignment/assignment.model';
import { AssignmentService } from '../assignment/assignment.service';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { MenuItem } from 'primeng/primeng';
import { UserService } from "../user/user.service";

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [UserService, EventActionService, MasterEventDataService, MeetingDataService, AssignmentService],

})
export class AssignmentComponent implements OnInit {
    myFormAssignment: FormGroup;
    myFormQuestionAssignment: FormGroup;
    Title?: string;
    Active: true;
    AssignmentId: number = 0;
    QuestionId: number = 0;
    QuestionOrder: number = 0;
    AssignmentList: Assignment[] = [];
    @ViewChild('closeDialog') closeDialog;
    //hazardId: number = 0;
    get QuestionOption(): FormArray {
        return <FormArray>this.myFormQuestionAssignment.get('QuestionOption');
    }
    constructor(private fb: FormBuilder, private _AssignmentService: AssignmentService, private route: ActivatedRoute, private router: Router, private location: Location) { }
    ngOnInit() {
        this.myFormAssignment = this.fb.group(
            {
                Title: ['', [Validators.required]],
                Active: true
            }

        )
        this.route.params.subscribe(params => {
            this.AssignmentId = params['id'] as number; //log the value of id
            this.AssignmentId = this.AssignmentId === undefined ? 0 : this.AssignmentId;
        });

        let model: AssignmentQuestionOption = new AssignmentQuestionOption();
        this.addQuestionToForm();
        this.getQuestionListOfAssignment();
        this.getList();
    }
    questionDetail: AssignmentListResult = new AssignmentListResult();
    addQuestionToForm() {
        this.myFormQuestionAssignment = this.fb.group(
            {
                QuestionText: [this.questionDetail.QuestionText, [Validators.required, Validators.minLength(3)]],
                QuestionType: [this.questionDetail.QuestionType, [Validators.required]],
                Score: [this.questionDetail.Score, [Validators.required]],
                Order: [this.questionDetail.Order, [Validators.required]],
                OptionText: '',
                Active: [this.questionDetail.Active],
                QuestionId: [this.questionDetail.QuestionId],
                QuestionOption: this.fb.array([this.buildOptions(new AssignmentQuestionOption())])
            });
    }
    addQuestion(): void {
        this.QuestionOption.push(this.buildOptions());
    }
    buildOptions(model: AssignmentQuestionOption = new AssignmentQuestionOption()): FormGroup {
        return this.fb.group({
            QuestionOptionID: [model.QuestionOptionID],
            OptionText: [model.OptionText],
            QuestionID: [model.QuestionID],
            IsCorrectAnswer: [model.IsCorrectAnswer],
            iscoorect: [false],
        });
    }

    SaveAssignmentFormData(data: Assignment, button: string) {
        if (button === 'addquestion' && this.AssignmentId > 0) {
            this.questionDetail = new AssignmentListResult();
            if (this.questionList.length != 0)
            {
                this.QuestionOrder = this.questionList.reduce(function (left, right) { return left.Order > right.Order ? left : right; }).Order;
            }
            this.questionDetail.Order = ++this.QuestionOrder;
            this.addQuestionToForm();
        }
        else {
            data.AssignmentId = this.AssignmentId;
            data.Title = this.myFormAssignment.controls['Title'].value;
            data.Active = data.Active;
            this._AssignmentService.addUpdateAssignment(data).subscribe((res: number) => {
                this.AssignmentId = res;
                this.router.navigate(['/pages/assignment/' + this.AssignmentId]);
                this.questionDetail = new AssignmentListResult();
                this.addQuestionToForm();
                this.getList();
            });
        }
    }
    totalRecords: number = 0;
    getList() {
        this._AssignmentService.getAssignment(this.AssignmentId)
            .subscribe((res: AssignmentListFilterModel) => {
                this.myFormAssignment = this.fb.group(
                    {
                        Title: [res.Title, [Validators.required]],
                        Active: [res.Active],
                    }

                )
            });
    }


    SaveAssignmentQuestionFormData(data: AssignmentListResult, button: string) {
        data.QuestionId = this.myFormQuestionAssignment.controls['QuestionId'].value;
        data.AssignmentId = this.AssignmentId;
        data.QuestionText = this.myFormQuestionAssignment.controls['QuestionText'].value;
        data.QuestionType = this.myFormQuestionAssignment.controls['QuestionType'].value;
        data.Score = this.myFormQuestionAssignment.controls['Score'].value;
        data.Order = this.myFormQuestionAssignment.controls['Order'].value;
        data.Active = this.myFormQuestionAssignment.controls['Active'].value;
        data.AssignmentQuestionOptionViewModel = [];
        if ((data as any).QuestionOption != undefined && (data as any).QuestionOption != null) {
            for (let aa of (data as any).QuestionOption) {
                let assignmentOption: AssignmentQuestionOption = new AssignmentQuestionOption();
                assignmentOption.OptionText = aa.OptionText;
                assignmentOption.IsCorrectAnswer = aa.iscoorect;
                data.AssignmentQuestionOptionViewModel.push(assignmentOption);
            }
        }
        this._AssignmentService.addUpdateQuestionAssignment(data).subscribe((res: number) => {
            //this.AssignmentId = res;
            this.questionDetail = new AssignmentListResult();
            if (this.questionList.length != 0)
            {
                this.QuestionOrder = this.questionList.reduce(function (left, right) { return left.Order > right.Order ? left : right; }).Order;
            }            
            this.questionDetail.Order = ++this.QuestionOrder+1;
            this.addQuestionToForm();
            if (button == 'save')
                this.closeDialog.nativeElement.click();
            this.getQuestionListOfAssignment();
        });
    }
    setIsCorrectAnswer(index: number) {
        const control = <FormArray>this.myFormQuestionAssignment.controls['QuestionOption'];
        for (let i = 0; i < control.length; i++) {
            let controls = control.controls[i] as any;
            if (index != i) {
                controls.controls["iscoorect"].setValue(false);
            }
            else {
                if (controls.controls["iscoorect"].value == null || controls.controls["iscoorect"].value == false)
                    controls.controls["iscoorect"].setValue(true);
                else
                    controls.controls["iscoorect"].setValue(false);
            }
        }

    }
    getQuestionList() {
        //this._AssignmentService.getAssignment(this.AssignmentId)
        //    .subscribe((res: Assignment[]) => {
        //        this.totalRecords = res.length;
        //        this.AssignmentList = res;
        //    });
    }







    RemoveQuestion(i: number) {
        const control = <FormArray>this.myFormQuestionAssignment.controls['QuestionOption'];
        control.removeAt(i);
    }

    questionList: AssignmentListResult[] = [];
    getQuestionListOfAssignment() {
        this.questionList = [];
        this._AssignmentService.getQuestionListOfAssignment(this.AssignmentId).subscribe((res: AssignmentListResult[]) => {
            this.questionList = res;
        });
    }


    public redirectToEditPage(event: AssignmentListResult) {
        this._AssignmentService.getQuestionDetail(event.QuestionId).subscribe((res: AssignmentListResult) => {
            this.buttonAddQuestion.nativeElement.click();
            this.questionDetail = res;
            this.addQuestionToForm();

            if (res.AssignmentQuestionOptionViewModel != null && res.AssignmentQuestionOptionViewModel.length > 0) {
                this.RemoveQuestion(0);
                for (let aa of res.AssignmentQuestionOptionViewModel) {
                    this.QuestionOption.push(this.buildOptions(aa));
                }
            }
        });

    }
    public deleteQuestion(event: AssignmentListResult) {
        if (confirm("Are you sure want to delete this question ?")) {
            this._AssignmentService.deleteQuestionWithOption(event.QuestionId).subscribe(res => {
                this.getQuestionListOfAssignment();
            });
        }
    }
    @ViewChild('buttonAddQuestion') buttonAddQuestion;
}

