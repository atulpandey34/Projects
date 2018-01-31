
import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl, AbstractControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuditViewModel, AuditSubject, AuditSubjectQuestion } from '../audit/audit.model';
import { AuditService } from '../audit/audit.service';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { MeasureService } from '../measure//measure.service';
import { FrequencyViewModel } from '../measure/measure.model';

import { LocationModel } from '../calendar/formeventdata';
import { environment } from '../../../environments/environment';
import { CronOptions } from "../cron-editor/CronOptions";
import { CronGenComponent } from "../cron-editor/cron-editor.component";
let apiURL = environment.apiEndpoint;

@Component({
    selector: 'app-audit',
    templateUrl: './audit.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [AuditService, MasterEventDataService, MeasureService],

})
export class AuditComponent implements OnInit {
    public apiEndPoint: string;
    myFormAudit: FormGroup; // Model for form
    AuditID: number = 0;
    auditeeList: IMultiSelectOption[] = [];
    auditorList: IMultiSelectOption[] = [];
    //frequencyList: FrequencyViewModel[] = [];
    locationList: LocationModel[];
    public cronExpression: string = '4 3 2 12 1/1 ? *';
    public cronOptions: CronOptions = {
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
    @ViewChild('closeDialog') closeDialog;
    get AuditSubjects(): FormArray {
        return <FormArray>this.myFormAudit.get('AuditSubjects');
    }
    AuditSubjectQuestions(i): FormArray {
        return <FormArray>this.myFormAudit.get(['AuditSubjects', i, 'AuditSubjectQuestions']);
    }
    constructor(private fb: FormBuilder, private _AuditService: AuditService, private _masterDataService: MasterEventDataService, private _measureService: MeasureService, private route: ActivatedRoute, private router: Router, private location: Location) {
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    ngOnInit() {
        this.onload();
    }

    onload() {
        this.route.params.subscribe(params => {
            this.AuditID = params['id'] as number; //log the value of id
        });
        this._masterDataService.getAllauditor().subscribe(res => { this.auditorList = res; });
        this._masterDataService.getUserList().subscribe(res => { this.auditeeList = res; });
        //this._measureService.getFrequency().subscribe((res: FrequencyViewModel[]) => {
        //    this.frequencyList = res;
        //});
        this._masterDataService.getLocationList().subscribe((res: LocationModel[]) => {
            this.locationList = [];
            for (let location of res) {
                this.locationList.push({
                    LocationID: location.LocationID,
                    LocationName: location.LocationName,
                    RoomName: location.RoomName
                });
            }
        });
        this.addhtmltoform();
        this.RemoveAuditSubjectQuestionForm(0, 0);
        if (this.AuditID > 0) {
            this._AuditService.getSingleAudit(this.AuditID).subscribe((res: AuditViewModel) => {
                this.AuditID = res.AuditID;
                res.AuditSubjects = res.AuditSubjects.filter(x => x.IsDeleted == false);
                this.RemoveAuditSubjectForm(0);
                this.sethtmltoform(res);
            });
        }

    }

    addhtmltoform(model: AuditViewModel = new AuditViewModel()) {
        let asub = new AuditSubject();
        asub.Subject = 'Subject 1';
        asub.FrequencyRecurrence = '4 3 2 12 1/1 ? *';
        asub.IsTabActive = true;
        this.myFormAudit = this.fb.group(
            {
                AuditID: [model.AuditID],
                Title: [model.Title, [Validators.required]],
                Scope: [model.Scope, [Validators.required]],
                TermsCondition: [model.TermsCondition, [this.validateTermCondition.bind(this)]],
                DueDateStruct: [{ year: new Date(model.DueDate).getFullYear(), month: new Date(model.DueDate).getMonth() + 1, day: new Date(model.DueDate).getDate() }, Validators.required],
                SubjectTemp: [model.SubjectTemp],
                AuditSubjects: this.fb.array([this.buildAuditSubject(asub)])
            });
    }
    sethtmltoform(model: AuditViewModel) {

        if (model.AuditID != 0) {
            this.myFormAudit.controls['AuditID'].setValue(model.AuditID);
        }

        if (model.Title != '') {
            this.myFormAudit.controls['Title'].setValue(model.Title);
        }

        if (model.Scope != '') {
            this.myFormAudit.controls['Scope'].setValue(model.Scope);
        }

        if (model.DueDate != null && model.DueDate != '') {
            this.myFormAudit.controls['DueDateStruct'].setValue({ year: new Date(model.DueDate).getFullYear(), month: new Date(model.DueDate).getMonth() + 1, day: new Date(model.DueDate).getDate() });
        }

        if (model.AuditSubjects != null && model.AuditSubjects.length > 0) {
            let asubcounter: number = 0;

            for (let asub of model.AuditSubjects) {
                asub.IsTabActive = false;
            }
            model.AuditSubjects[0].IsTabActive = true;

            for (let asub of model.AuditSubjects) {
                this.AuditSubjects.push(this.buildAuditSubject(asub));

                asub.AuditSubjectQuestions = asub.AuditSubjectQuestions.filter(x => x.IsDeleted == false);
                for (let asubques of asub.AuditSubjectQuestions) {
                    this.AuditSubjectQuestions(asubcounter).push(this.buildAuditSubjectQuestion(asubques));
                }
                this.RemoveAuditSubjectQuestionForm(asubcounter, 0);
                asubcounter++;
            }
        }
    }

    buildAuditSubject(model: AuditSubject = new AuditSubject()): FormGroup {
        return this.fb.group({
            AuditSubjectID: [model.AuditSubjectID],
            AuditID: [model.AuditID],
            Subject: [model.Subject, [Validators.required]],
            AuditorID: [model.AuditorID, [Validators.required]],
            AuditeeID: [model.AuditeeID],
            Location: [model.Location, [Validators.required]],
            FrequencyRecurrence: [model.FrequencyRecurrence],
            //StartDateStruct: [{ year: new Date(model.StartDate).getFullYear(), month: new Date(model.StartDate).getMonth() + 1, day: new Date(model.StartDate).getDate() }, Validators.required],
            //EndDateStruct: [{ year: new Date(model.EndDate).getFullYear(), month: new Date(model.EndDate).getMonth() + 1, day: new Date(model.EndDate).getDate() }, Validators.required],
            InsertQuestion: [model.InsertQuestion],
            IsTabActive: [model.IsTabActive],
            //cronExpressionValue: [model.cronExpressionValue],
            AuditSubjectQuestions: this.fb.array([this.buildAuditSubjectQuestion()])
        });
    }
    buildAuditSubjectQuestion(model: AuditSubjectQuestion = new AuditSubjectQuestion()): FormGroup {
        return this.fb.group({
            AuditSubjectQuestionID: [model.AuditSubjectQuestionID],
            AuditSubjectID: [model.AuditSubjectID],
            QuestionText: [model.QuestionText],
        });
    }

    AddMoreAuditSubjectForm(data: AuditViewModel): void {
        let asub = new AuditSubject();
        asub.Subject = data.SubjectTemp;
        asub.FrequencyRecurrence = '4 3 2 12 1/1 ? *';
        this.AuditSubjects.push(this.buildAuditSubject(asub));
        this.RemoveAuditSubjectQuestionForm(this.AuditSubjects.length - 1, 0);
        this.myFormAudit.controls['SubjectTemp'].setValue('');
    }
    RemoveAuditSubjectForm(i: number) {
        const control = <FormArray>this.myFormAudit.controls['AuditSubjects'];
        control.removeAt(i);
        this.myFormAudit.controls['AuditSubjects'].updateValueAndValidity();
        this.HandleTab(0);
    }

    HandleTab(index:number) {

        {
            const asubcontrol = <FormArray>this.myFormAudit.get('AuditSubjects')
            let length = asubcontrol.controls.length;

            for (let j = 0; j < length; j++) {

                const _formarrayAuditSubject = <FormArray>this.myFormAudit.get(['AuditSubjects', j]);
                if (_formarrayAuditSubject != null) {
                    _formarrayAuditSubject.controls['IsTabActive'].setValue(false);
                }
            }

            const con = <FormArray>this.myFormAudit.get(['AuditSubjects', index]);
            if (con != null) {
                con.controls['IsTabActive'].setValue(true);
            }
        }

    }
    AddMoreAuditSubjectQuestionForm(i: number, question: string): void {
        if (question != undefined && question != null && question != '') {
            let auditSubjectQuestion = new AuditSubjectQuestion();
            auditSubjectQuestion.QuestionText = question;
            this.AuditSubjectQuestions(i).push(this.buildAuditSubjectQuestion(auditSubjectQuestion));
            const control = <FormArray>this.myFormAudit.get(['AuditSubjects', i]);
            control.controls['InsertQuestion'].setValue('');
        }
    }
    RemoveAuditSubjectQuestionForm(i: number, j: number) {
        const control = <FormArray>this.AuditSubjectQuestions(i);
        control.removeAt(j);
    }
    validateTermCondition(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;

        if (control.parent != undefined && control.parent.get("TermsCondition").value == true) {
            //console.log(control.parent.get("TermsCondition").value);
            result = null;
        }
        else if (control.parent != undefined && control.parent.get("TermsCondition").value == false) {
            //console.log(control.parent.get("TermsCondition").value);
            result = true;// display error
        }
        else
            result = true;// display error

        return result ? { 'TermsCondition': { value: control.value } } : null;


    }
    SaveAuditFormData(data: AuditViewModel) {
        data.DueDate = new Date(data.DueDateStruct.year, data.DueDateStruct.month - 1, data.DueDateStruct.day).toLocaleDateString();
        //for (let asub of data.AuditSubjects) {
        //    //asub.StartDate = new Date(asub.StartDateStruct.year, asub.StartDateStruct.month - 1, asub.StartDateStruct.day).toLocaleDateString();
        //    //asub.EndDate = new Date(asub.EndDateStruct.year, asub.EndDateStruct.month - 1, asub.EndDateStruct.day).toLocaleDateString();
        //    asub.FrequencyRecurrence = asub.cronExpressionValue;
        //}

        this._AuditService.saveAuditFormData(data).subscribe(res => {
            this.AuditID = res.AuditID;
            //this.router.navigate(['/pages/audit/' + this.AuditID]);
            this.router.navigate(['/pages/audit/list']);
        });
    }

    fileName: string;
    fileToUpload: File;
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
    //FireChangeEvent(event,i:number) {
    //    const control = <FormArray>this.myFormAudit.get(['AuditSubjects', i]);
    //    control.controls['FrequencyRecurrence'].setValue(event);
    //}
}


