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
import { CalendarModule } from 'primeng/primeng';
import { SignedUserList, HazardListModel, MonitoringMethodModel, DurationUnitModel, HazardModel, RiskAssessmentViewModel, RiskAssessmentTeamViewModel, RiskAssessmentHazardViewModel, RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardReviewViewModel } from '../riskassessment/riskassessment.model';
import { RiskAssessmentService } from '../riskassessment/riskassessment.service';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { MenuItem } from 'primeng/primeng';
import { UserService } from "../user/user.service";

@Component({
    selector: 'app-riskassessment',
    templateUrl: './riskassessment.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        "./riskassessment.component.css"
    ],
    providers: [UserService, EventActionService, MasterEventDataService, MeetingDataService, RiskAssessmentService],


})

export class RiskAssessmentComponent implements OnInit {
    public myForm: FormGroup; // our form model
    public RiskAssessmentHazardViewModelForm: FormGroup;
    riskAssessmentId: number = 0;
    hazardId: number = 0;
    reviewDurationUnitList: DurationUnitModel[] = [];
    hazardsList: HazardModel[] = [];
    hazardsListV1: HazardModel[] = [];
    monitorinMethodList: MonitoringMethodModel[] = [];
    public isArchivedRiskAssessment: boolean = false;
    public responsiblePersonOptions: IMultiSelectOption[] = [];
    iscompleted: boolean = false;
    @ViewChild('closeDialog') closeDialog;
    @ViewChild('hazardDropdown') hazardDropdown;
    @ViewChild('hazardDescription') hazardDescription;
    @ViewChild('buttonComplete') buttonComplete;
    @ViewChild('buttonTraining') buttonTraining;
    @ViewChild('buttonSignature') buttonSignature;
    @ViewChild('buttonReview') buttonReview;
    @ViewChild('closeDialogTraining') closeDialogTraining;
    @ViewChild('trainingRequiredCheckbox') trainingRequiredCheckbox;


    constructor(private _UserService: UserService, private _RiskAssessmentService: RiskAssessmentService, private _meetingService: MeetingDataService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
    ngOnInit() {
        this.buttonComplete.nativeElement.hidden = true;
        this.buttonTraining.nativeElement.hidden = true;
        this.buttonSignature.nativeElement.hidden = true;
        this.buttonReview.nativeElement.hidden = true;
        let model: RiskAssessmentViewModel = new RiskAssessmentViewModel();
        this.addhtmltoform(model);
        this.addHazaradModelToForm(new RiskAssessmentHazardViewModel());
        this._masterDataService.getUserList().subscribe(res => { this.responsiblePersonOptions = res; });
        this._RiskAssessmentService.getAllDurationUnit().subscribe((res: DurationUnitModel[]) => {
            this.reviewDurationUnitList = res;
        });
        this._RiskAssessmentService.getAllHazard().subscribe((res: HazardModel[]) => {
            this.hazardsList = res;
            this.hazardsListV1 = res;
        });
        this._RiskAssessmentService.getAllMonitoringMethod().subscribe((res: MonitoringMethodModel[]) => {
            this.monitorinMethodList = res;
        });
        this.route.params.subscribe(params => {
            this.riskAssessmentId = params['id'] as number; //log the value of id
            this.getRiskAssessment();
            this.getList();
        });
        

       // this.getRiskAssessment();
        this.initSignaturePassword();
    }
    signedUserList: SignedUserList[] = [];
    signedUserTooltip: string;
    getRiskAssessment() {
        if (this.riskAssessmentId > 0) {
            this.buttonReview.nativeElement.hidden = false;
            this.buttonComplete.nativeElement.hidden = false;
            //this.buttonTraining.nativeElement.hidden = false;
            this.buttonSignature.nativeElement.hidden = false;

            this._RiskAssessmentService.getRiskAssessment(this.riskAssessmentId).subscribe((res: RiskAssessmentViewModel) => {
                this.isArchivedRiskAssessment = res.IsArchived;
                this.addhtmltoform(res);
            });
            this._RiskAssessmentService.getSignedUserList(this.riskAssessmentId).subscribe((res: SignedUserList[]) => {
                this.signedUserList = res;
                for (let tooltip of res) {
                    this.signedUserTooltip = this.signedUserTooltip + '<div class="tooltip-inner">Tooltip on the right</div>';
                }
            });
        }
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
    addhtmltoform(viewModel: RiskAssessmentViewModel) {
        let team = [];
        if (this.riskAssessmentId > 0)
            team = viewModel.RiskAssessmentTeamViewModel.map(x => x.UserId) as number[];
        this.myForm = this._fb.group({
            RiskAssessmentId: [this.riskAssessmentId],
            Area: [viewModel.Area, Validators.required],
            AssessmentDateDateStruct: [{ year: new Date(viewModel.AssessmentDate).getFullYear(), month: new Date(viewModel.AssessmentDate).getMonth() + 1, day: new Date(viewModel.AssessmentDate).getDate() }, Validators.required],
            ReviewDuration: [viewModel.ReviewDuration, Validators.required],
            ReviewDurationUnit: [viewModel.ReviewDurationUnit, Validators.required],
            RiskAssessmentTeam: [team, Validators.required],
            IsArchived: [viewModel.IsArchived],
        });
    }

    addHazaradModelToForm(viewModel: RiskAssessmentHazardViewModel) {
        this.RiskAssessmentHazardViewModelForm = this.initRiskAssessmentHazard(viewModel);
    }

    initRiskAssessmentTeam(viewModel: RiskAssessmentTeamViewModel) {
        return this._fb.group({
            RiskAssessmentTeamId: [viewModel.RiskAssessmentTeamId],
            RiskAssessmentId: [this.riskAssessmentId],
            UserId: [viewModel.UserId]
        })
    }
    initRiskAssessmentHazard(viewModel: RiskAssessmentHazardViewModel) {
        return this._fb.group({
            RiskAssessmentHarardId: [viewModel.RiskAssessmentHarardId],
            HazardId: [viewModel.HazardId, Validators.required],
            RiskAssessmentId: [this.riskAssessmentId],
            IsReadyForReview: [viewModel.IsReadyForReview],
            Description: [viewModel.Description, Validators.required],
            RiskAssessmentHazardMeasureViewModel: this._fb.array([
                this.initRiskAssessmentHazardMeasure(new RiskAssessmentHazardMeasureViewModel())
            ]),
            RiskAssessmentHazardReviewViewModel: this._fb.array([
                this.initRiskAssessmentHazardReview(new RiskAssessmentHazardReviewViewModel())
            ])
        })
    }

    initRiskAssessmentHazardMeasure(viewModel: RiskAssessmentHazardMeasureViewModel) {
        return this._fb.group({
            RiskAssessmentHazardMeasureId: [viewModel.RiskAssessmentHazardMeasureId],
            RiskAssessmentId: [this.riskAssessmentId],
            RiskAssessmentHazardId: [viewModel.RiskAssessmentHazardId],
            Text: [viewModel.Text, Validators.required],
            ActionId: [viewModel.ActionId],
            DateAdded: [viewModel.DateAdded]
        })
    }

    initRiskAssessmentHazardReview(viewModel: RiskAssessmentHazardReviewViewModel) {
        return this._fb.group({
            RiskAssessmentHazardReviewId: [viewModel.RiskAssessmentHazardReviewId],
            RiskAssessmentHazardId: [viewModel.RiskAssessmentHazardId],
            Consequence: [viewModel.Consequence, Validators.required],
            Likelihood: [viewModel.Likelihood, Validators.required],
            CreatedDate: [viewModel.CreatedDate],
            UpdatedDate: [viewModel.UpdatedDate],
            ReviewDate: [viewModel.ReviewDate],
            MonitoringMethodId: [viewModel.MonitoringMethodId, Validators.required]
        })
    }

    AddMoreHazard() {
        const control = <FormArray>this.myForm.controls['RiskAssessmentHazardViewModel'];
        control.push(this.initRiskAssessmentHazard(new RiskAssessmentHazardViewModel()));
    }
    RemoveHazard(i: number) {
        const control = <FormArray>this.myForm.controls['RiskAssessmentHazardViewModel'];
        control.removeAt(i);
    }
    AddMoreMeasure(model: RiskAssessmentHazardMeasureViewModel = new RiskAssessmentHazardMeasureViewModel()) {
        const control = <FormArray>this.RiskAssessmentHazardViewModelForm.controls["RiskAssessmentHazardMeasureViewModel"];
        control.push(this.initRiskAssessmentHazardMeasure(model));
    }
    RemoveMeasure(i: number, k: number) {
        const control = <FormArray>this.RiskAssessmentHazardViewModelForm.controls["RiskAssessmentHazardMeasureViewModel"];
        control.removeAt(k);
    }

    SaveRiskAssessmentFormData(data: RiskAssessmentViewModel, button: string) {
        data.TrainingRequired = this.trainingRequiredCheckbox.nativeElement.checked;
        data.AssessmentDate = new Date(data.AssessmentDateDateStruct.year, data.AssessmentDateDateStruct.month - 1, data.AssessmentDateDateStruct.day).toLocaleDateString();
        var riskAssessmentTeam = (data as any).RiskAssessmentTeam;
        if (riskAssessmentTeam != undefined && riskAssessmentTeam != null && riskAssessmentTeam.length > 0) {
            data.RiskAssessmentTeamViewModel = [];
            for (var userId of riskAssessmentTeam) {
                let team: RiskAssessmentTeamViewModel = new RiskAssessmentTeamViewModel();
                team.UserId = userId;
                team.RiskAssessmentId = this.riskAssessmentId;
                data.RiskAssessmentTeamViewModel.push(team);
            }
        }
        this._RiskAssessmentService.addUpdateRiskAssessment(data).subscribe((res: number) => {
            this.riskAssessmentId = res;
            if (button == "submit") {
                this.router.navigate(['/pages/riskassessment/' + this.riskAssessmentId]);
            }
            else if (button == "hazard") {
                this.hazardsListV1 = this.hazardsList;
                var hazarddIds = this.hazardList.map(x => x.HazardId);
                for (let id of hazarddIds) {
                    this.hazardsListV1 = this.hazardsListV1.filter(x => x.HazardId != id);
                }
                this.hazardId = 0;
                this.addHazaradModelToForm(new RiskAssessmentHazardViewModel());
            }
            else if (button == "training") {
                this.closeDialogTraining.nativeElement.click();
                this.getRiskAssessment();
                this.router.navigate(['/pages/riskassessment/' + this.riskAssessmentId]);
            }

        });
    }
    SaveHazardForm(data: RiskAssessmentHazardViewModel) {
        data.RiskAssessmentId = this.riskAssessmentId;
        data.RiskAssessmentHarardId = this.hazardId;
        this._RiskAssessmentService.addUpdateRiskAssessmentHazard(data).subscribe((res: number) => {
            this.hazardId = res;
            this.closeDialog.nativeElement.click();
            this.getList();
        });
    }


    loadCarsLazy(event: LazyLoadEvent) {

        this.getList();
    }
    totalRecords: number = 0;
    hazardList: HazardListModel[] = [];
    getList() {
        this._RiskAssessmentService.getHazardList(this.riskAssessmentId)
            .subscribe((res: HazardListModel[]) => {
                this.totalRecords = res.length;
                this.hazardList = res;
            });
    }
    OpenHazard(model: HazardListModel) {
        this._RiskAssessmentService.getHazardData(model.RiskAssessmentHarardId).subscribe((hazardModel: RiskAssessmentHazardViewModel) => {
            this.hazardsListV1 = this.hazardsList;
            this.hazardDropdown.nativeElement.disabled = true;
            //this.hazardDescription.nativeElement.disabled = true;
            //let hazardModel: RiskAssessmentHazardViewModel = res;
            //hazardModel.HazardId = model.HazardId;
            //hazardModel.Description = model.Description;
            //hazardModel.RiskAssessmentHarardId = model.RiskAssessmentHarardId;
            //hazardModel.IsReadyForReview = true;
            this.addHazaradModelToForm(hazardModel);
            this.RemoveMeasure(0, 0);
            const control = <FormArray>this.RiskAssessmentHazardViewModelForm.controls["RiskAssessmentHazardReviewViewModel"];
            control.removeAt(0);
            if (hazardModel.RiskAssessmentHazardMeasureViewModel != null) {
                for (let m of hazardModel.RiskAssessmentHazardMeasureViewModel) {
                    this.AddMoreMeasure(m);
                }
            }
            if (hazardModel.RiskAssessmentHazardReviewViewModel != null) {
                for (let m of hazardModel.RiskAssessmentHazardReviewViewModel) {
                    const control = <FormArray>this.RiskAssessmentHazardViewModelForm.controls["RiskAssessmentHazardReviewViewModel"];
                    control.push(this.initRiskAssessmentHazardReview(m));
                }
            }
        });

    }
    CloseDialog() {
        this.hazardDropdown.nativeElement.disabled = false;
        this.hazardDescription.nativeElement.disabled = false;
    }

    /* signature password section*/
    public signatureForm: FormGroup;
    @ViewChild('closeDialogSignature') closeDialogSignature;
    initSignaturePassword(password: string = '') {
        this.signatureForm = this._fb.group({
            OldPassword: new FormControl(password, [Validators.required, Validators.minLength(8), this.validatePassword.bind(this)])
        });
    }

    validatePassword(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._UserService.verifyPassword(control.value).subscribe((res: boolean) => {
                if (res == false) {
                    result = true;
                    this.signatureForm.controls["OldPassword"].setErrors({ remote: "Password doesn't match with old password." });
                }
            });
        }
        else
            result = null;
        return result ? { 'userName': { value: control.value } } : null;
    }
    SaveSignature() {
        this._RiskAssessmentService.updateSignatureDate(this.riskAssessmentId).subscribe(res => {
            this.CloseSignatureDialog();
            this.getRiskAssessment();
        });
    }
    CloseSignatureDialog() {
        this.closeDialogSignature.nativeElement.click();
    }
    OpenSignatureDialog() {
        this.initSignaturePassword('');
    }
    /* signature password section end*/

    CompleteRiskAssessment() {
        let length: number = this.hazardList.filter(x => x.ScoreColor == "red" && x.ReviewDate == null).length;
        let orangeLength: number = this.hazardList.filter(x => x.ScoreColor == "orange" && x.ReviewDate == null).length;
        let signedUser = this.signedUserList.filter(x => x.UserID == sessionStorage["UserId"] as number);
        if (length > 0)
            alert("Assessment can't be completed with red score.");
        else if (orangeLength > 0 && signedUser != null && signedUser[0].SignedDate == null) {
            alert("Please verify your signature first to complete this assessment.");
        }
        else
            this._RiskAssessmentService.updateRiskAssessmentStatus(this.riskAssessmentId).subscribe(res => { });
    }
    SetTrainingRequired() {
        this._RiskAssessmentService.updateTrainigRequired(this.riskAssessmentId).subscribe(res => {

        });
    }
    ReviewRiskAssessment() {
        this._RiskAssessmentService.reviewRiskAssessment(this.riskAssessmentId).subscribe((res: number) => {
            this.router.navigate(['/pages/riskassessment/' + res]);
            this.riskAssessmentId = res;
            // this.ngOnInit();
            // this.getRiskAssessment();
            // this.getList();
            //this.myForm.controls["RiskAssessmentId"].setValue(0);
            //this.riskAssessmentId = 0;
            //this.getList();
            //this.signedUserTooltip = "";
            //this.buttonComplete.nativeElement.hidden = true;
            //this.buttonTraining.nativeElement.hidden = true;
            //this.buttonSignature.nativeElement.hidden = true;
            //this.buttonReview.nativeElement.hidden = true;
        });
    }
}

