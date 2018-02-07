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
import { RiskAssessmentService } from '../riskassessment/riskassessment.service';
import { RiskAssessmentListResult, RiskAssessmentListData, RiskAssessmentListFilterModel, HazardListModel, MonitoringMethodModel, DurationUnitModel, HazardModel, RiskAssessmentViewModel, RiskAssessmentTeamViewModel, RiskAssessmentHazardViewModel, RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardReviewViewModel } from '../riskassessment/riskassessment.model';

@Component({
    selector: 'app-riskassessmentlist',
    templateUrl: './riskassessmentlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [EventActionService, MasterEventDataService, UserService, RiskAssessmentService],


})

export class RiskAssessmentListComponent implements OnInit {
    filterData: RiskAssessmentListFilterModel;
    data: RiskAssessmentListResult[];
    totalRecords: number = 0;
    constructor(private _RiskAssessmentService: RiskAssessmentService, private _UserService: UserService, private router: Router, private location: Location, private _fb: FormBuilder, private _dataService: EventActionService, private route: ActivatedRoute, private _masterDataService: MasterEventDataService) { }
    ngOnInit() {
        this.filterData = new RiskAssessmentListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "Area";
        this.filterData.SortOrder = "asc";
    }
    getList() {
        this._RiskAssessmentService.getRiskAssessmentList(this.filterData)
            .subscribe((res: RiskAssessmentListData) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.RiskAssessmentListResult
            });
    }
    public redirectToEditPage(event: RiskAssessmentListResult) {
        this.router.navigate(['/pages/riskassessment/' + event.RiskAssessmentId]);
    }
    public deleteAction(event: RiskAssessmentListResult) {
        if (confirm("Are you sure want to delete this assessment ?")) {
            this._RiskAssessmentService.deleteAssessment(event.RiskAssessmentId).subscribe(res => {
                this.getList();
            });
        }
    }
    redirectToNewPage() {
        this.router.navigate(['/pages/riskassessment']);
    }

    loadCarsLazy(event: LazyLoadEvent) {

        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.SubjectFilter = event.filters.Area == undefined ? '' : event.filters.Area.value;
        this.filterData.AssessmentDateFilter = event.filters.AssessmentDate == undefined ? '' : event.filters.AssessmentDate.value;
        this.filterData.DurationUnitFilter = event.filters.DuratiuonUnit == undefined ? '' : event.filters.DuratiuonUnit.value;
        //this.filterData.ResponsibleTeamFilter = event.filters.FirstName == undefined ? '' : event.filters.FirstName.value;

        this.getList();

    }

}

