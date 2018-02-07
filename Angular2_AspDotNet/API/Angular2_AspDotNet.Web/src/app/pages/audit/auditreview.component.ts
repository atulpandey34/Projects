
import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl, AbstractControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuditSubjectReviewViewModel, AuditSubjectReviewQuestion, AuditSubject } from '../audit/audit.model';
import { AuditService } from '../audit/audit.service';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { MeasureService } from '../measure//measure.service';
import { FrequencyViewModel } from '../measure/measure.model';

import { LocationModel } from '../calendar/formeventdata';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;

@Component({
    selector: 'app-auditreview',
    templateUrl: './auditreview.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        "./auditreview.component.css"],
    providers: [AuditService, MasterEventDataService, MeasureService],

})
export class AuditReviewComponent implements OnInit {
    public apiEndPoint: string;
    myFormAudit: FormGroup; // Model for form
    AuditSubjectID: number = 0;
    AuditSubjectReviewID: number = 0;
    auditeeList: IMultiSelectOption[] = [];
    //auditorList: IMultiSelectOption[] = [];
    //frequencyList: FrequencyViewModel[] = [];
    //locationList: LocationModel[];
    @ViewChild('closeDialog') closeDialog;
    get AuditSubjectQuestionResponses(): FormArray {
        return <FormArray>this.myFormAudit.get('AuditSubjectQuestionResponses');
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
            this.AuditSubjectID = params['subid'] as number; //log the value of id
            this.AuditSubjectID = this.AuditSubjectID === undefined ? 0 : this.AuditSubjectID;
            this.AuditSubjectReviewID = params['id'] as number;
            this.AuditSubjectReviewID = this.AuditSubjectReviewID === undefined ? 0 : this.AuditSubjectReviewID;
        });
        this._masterDataService.getUserList().subscribe(res => { this.auditeeList = res; });
        this.addhtmltoform();
        //this.RemoveAuditSubjectQuestionForm(0, 0);
        if (this.AuditSubjectID > 0 && this.AuditSubjectReviewID == 0) {
            this._AuditService.getAuditSubject(this.AuditSubjectID).subscribe((res: AuditSubject) => {
                if (res != null) {
                    let audsubrevi = new AuditSubjectReviewViewModel();
                    audsubrevi.AuditID = res.AuditID;
                    audsubrevi.SubjectID = res.AuditSubjectID;
                    audsubrevi.AuditorID = res.AuditorID;
                    audsubrevi.AuditeeID = res.AuditeeID;
                    audsubrevi.LocationID = res.Location;
                    audsubrevi.Subject = res.Subject;
                    this.sethtmltoform(audsubrevi);
                    if (res.AuditSubjectQuestions != null && res.AuditSubjectQuestions.length > 0) {
                        this.RemoveAuditSubjectQuestionsForm(0);
                        for (let asubques of res.AuditSubjectQuestions) {
                            let asubreview = new AuditSubjectReviewQuestion();
                            asubreview.AuditSubjectQuestionID = asubques.AuditSubjectQuestionID;
                            asubreview.QuestionText = asubques.QuestionText;
                            this.AuditSubjectQuestionResponses.push(this.buildAuditReviewSubjectQuestion(asubreview));
                        }
                    }
                }
            });
        } else if (this.AuditSubjectID > 0 && this.AuditSubjectReviewID > 0) {
            //get both question and answers of review
            this._AuditService.getAuditSubjectReview(this.AuditSubjectID, this.AuditSubjectReviewID).subscribe((res: AuditSubjectReviewViewModel) => {
                if (res != null) {
                    this.sethtmltoform(res);
                    if (res.AuditSubjectQuestionResponses != null && res.AuditSubjectQuestionResponses.length > 0) {
                        this.RemoveAuditSubjectQuestionsForm(0);
                        for (let aSubQuesResp of res.AuditSubjectQuestionResponses) {
                            this.AuditSubjectQuestionResponses.push(this.buildAuditReviewSubjectQuestion(aSubQuesResp));
                        }
                    }
                }
            });
        }

    }

    addhtmltoform(model: AuditSubjectReviewViewModel = new AuditSubjectReviewViewModel()) {
        this.myFormAudit = this.fb.group(
            {
                AuditSubjectReviewID: [model.AuditSubjectReviewID],
                AuditID: [model.AuditID],
                SubjectID: [model.SubjectID],
                //AuditDate: [model.AuditDate],
                AuditDateStruct: [{ year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }, Validators.required],
                AuditorID: [model.AuditorID],
                AuditeeID: [model.AuditeeID, [Validators.required]],
                LocationID: [model.LocationID],
                Comment: [model.Comment],
                Subject: [model.Subject, [Validators.required]],
                AuditSubjectQuestionResponses: this.fb.array([this.buildAuditReviewSubjectQuestion()])
            });
    }
    sethtmltoform(model: AuditSubjectReviewViewModel) {

        if (model.AuditSubjectReviewID != 0) {
            this.myFormAudit.controls['AuditSubjectReviewID'].setValue(model.AuditSubjectReviewID);
        }

        if (model.AuditID != 0) {
            this.myFormAudit.controls['AuditID'].setValue(model.AuditID);
        }
        if (model.SubjectID != 0) {
            this.myFormAudit.controls['SubjectID'].setValue(model.SubjectID);
        }
        if (model.AuditorID != 0) {
            this.myFormAudit.controls['AuditorID'].setValue(model.AuditorID);
        }
        if (model.AuditDate != null) {
            this.myFormAudit.controls['AuditDateStruct'].setValue({ year: new Date(model.AuditDate).getFullYear(), month: new Date(model.AuditDate).getMonth() + 1, day: new Date(model.AuditDate).getDate() });
        }

        if (model.AuditeeID != 0) {
            this.myFormAudit.controls['AuditeeID'].setValue(model.AuditeeID);
        }
        if (model.LocationID != 0) {
            this.myFormAudit.controls['LocationID'].setValue(model.LocationID);
        }

        if (model.Subject != '') {
            this.myFormAudit.controls['Subject'].setValue(model.Subject);
        }

        if (model.Comment != '') {
            this.myFormAudit.controls['Comment'].setValue(model.Comment);
        }
    }
    toggleNCOB(index: number, type: string) {
        const control = <FormArray>this.myFormAudit.get(['AuditSubjectQuestionResponses', index]);

        if (type == 'NC') {
            control.controls['NonCompliance'].setValue(true);
            control.controls['NonComplianceClass'].setValue('toggleTrue');
            control.controls['Observation'].setValue(false);
            control.controls['ObservationClass'].setValue('toggleFalse');
            control.controls['None'].setValue(false);
            control.controls['NoneClass'].setValue('toggleFalse');
        } else if (type == 'OB') {
            control.controls['Observation'].setValue(true);
            control.controls['ObservationClass'].setValue('toggleTrue');
            control.controls['NonCompliance'].setValue(false);
            control.controls['NonComplianceClass'].setValue('toggleFalse');
            control.controls['None'].setValue(false);
            control.controls['NoneClass'].setValue('toggleFalse');
        }else if (type == 'NONE') {
            control.controls['None'].setValue(true);
            control.controls['NoneClass'].setValue('toggleTrue');
            control.controls['NonCompliance'].setValue(false);
            control.controls['NonComplianceClass'].setValue('toggleFalse');
            control.controls['Observation'].setValue(false);
            control.controls['ObservationClass'].setValue('toggleFalse');
        }
    }
    //toggleNC(index: number) {
    //    const control = <FormArray>this.myFormAudit.get(['AuditSubjectQuestionResponses', index]);
    //    let previousValue: boolean = control.controls["NonCompliance"].value as boolean;
    //    control.controls['NonCompliance'].setValue(!previousValue);
    //    let currentvalue: boolean = !previousValue;
    //    if (currentvalue == false) {
    //        control.controls['NonComplianceClass'].setValue('toggleFalse');
    //    } else if (currentvalue == true) {
    //        control.controls['NonComplianceClass'].setValue('toggleTrue');
    //    }
    //}
    buildAuditReviewSubjectQuestion(model: AuditSubjectReviewQuestion = new AuditSubjectReviewQuestion()): FormGroup {
        return this.fb.group({
            AuditSubjectQuestionResponseID: [model.AuditSubjectQuestionResponseID],
            AuditSubjectReviewID: [model.AuditSubjectReviewID],
            AuditSubjectQuestionID: [model.AuditSubjectQuestionID],
            Comment: [model.Comment, [Validators.required]],
            Observation: [model.Observation],
            NonCompliance: [model.NonCompliance],
            None: [model.None],
            QuestionText: [model.QuestionText],
            ObservationClass: [model.Observation == true ? 'toggleTrue' : 'toggleFalse'],
            NonComplianceClass: [model.NonCompliance == true ? 'toggleTrue' : 'toggleFalse'],
            NoneClass: [model.None == true ? 'toggleTrue' : 'toggleFalse'],
            fileToUpload: [model.fileToUpload],
            fileName: [model.fileName],
        });
    }

    RemoveAuditSubjectQuestionsForm(i: number) {
        const control = <FormArray>this.myFormAudit.controls['AuditSubjectQuestionResponses'];
        control.removeAt(i);
    }

    SaveAuditReviewFormData(data: AuditSubjectReviewViewModel) {
        data.AuditDate = new Date(data.AuditDateStruct.year, data.AuditDateStruct.month - 1, data.AuditDateStruct.day).toLocaleDateString();
        this._AuditService.saveAuditReviewFormData(data).subscribe(res => {
            this.AuditSubjectReviewID = res.AuditSubjectReviewID;
            this.saveMaterial(res);
        });
    }

    //fileName: string;
    //fileToUpload: File;
    fileChange(input, index) {
        const reader = new FileReader();
        if (input.files.length) {
            const control = <FormArray>this.myFormAudit.get(['AuditSubjectQuestionResponses', index]);
            control.controls["fileName"].setValue(input.files[0].name);
            control.controls["fileToUpload"].setValue(input.files[0]);
        }
    }

    removeFile(index): void {
        const control = <FormArray>this.myFormAudit.get(['AuditSubjectQuestionResponses', index]);
        control.controls["fileName"].setValue('');
        control.controls["fileToUpload"].setValue(null);
    }

    saveMaterial(res: AuditSubjectReviewViewModel) {
        const control = <FormArray>this.myFormAudit.get('AuditSubjectQuestionResponses')
        let length = control.controls.length;

        for (let i = 0; i < length; i++) {
            const _formarrayAuditSubjectQuestion = <FormArray>this.myFormAudit.get(['AuditSubjectQuestionResponses', i]);
            let _fileName: string = _formarrayAuditSubjectQuestion.controls["fileName"].value as string;
            let _fileToUpload: File = _formarrayAuditSubjectQuestion.controls["fileToUpload"].value as File;
            let _AuditSubjectQuestionResponseID: number = res.AuditSubjectQuestionResponses[i].AuditSubjectQuestionResponseID;
            if (_fileToUpload != null && _fileToUpload != undefined) {
                let file = _fileToUpload;
                let _formData = new FormData();
                _formData.append("FileName", file.name);
                _formData.append("MyFile", file);
                _formData.append("AuditSubjectQuestionResponseID", _AuditSubjectQuestionResponseID.toString());
                let body = _formData;
                this._AuditService.uploadMaterial(body).subscribe(res => {
                    //this.removeFile();
                    //this.router.navigate(['/pages/audit/review/' + this.AuditSubjectID + '/' + this.AuditSubjectReviewID]);
                    this.router.navigate(['/pages/audit/assignedauditlist']);
                });

            }
        }

        //this.router.navigate(['/pages/audit/review/' + this.AuditSubjectID + '/' + this.AuditSubjectReviewID]);
        this.router.navigate(['/pages/audit/assignedauditlist']);
    }

}


