import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { AccordionModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem } from 'primeng/primeng';
import { TrainingService } from './training.service';
import { TrainingListFilterModel, TrainingList, TrainingListViewModel } from './training.model';

@Component({
    selector: 'app-traininglist-component',
    templateUrl: './traininglist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [TrainingService],


})

export class TrainingListComponent implements OnInit {
    data: TrainingList[];
    filterModel: TrainingListFilterModel;
    totalRecords: number = 0;
    constructor(private _trainingService: TrainingService, private router: Router, private location: Location, private route: ActivatedRoute) { }
    ngOnInit() {
        this.filterModel = new TrainingListFilterModel();
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;
        this.filterModel.SortColumn = "TrainingNeed";
        this.filterModel.SortOrder = "asc";
    }
    getList() {
        this._trainingService.getTrainingList(this.filterModel).subscribe((res: TrainingListViewModel) => {
            this.data = res.TrainingList;
            this.totalRecords = res.TotalRecords;
        });
    }
    public redirectToEditPage(event: TrainingList) {
        this.router.navigate(['/pages/training/' + event.TrainingId]);
    }
    public deleteAction(event: TrainingList) {
        if (confirm("Are you sure want to delete this training ?")) {
            this._trainingService.deleteTraining(event.TrainingId).subscribe(res => {
                this.getList();
            });
        }
    }
    redirectToNewPage() {
        this.router.navigate(['/pages/training']);
    }

    loadCarsLazy(event: LazyLoadEvent) {
        this.filterModel.PageNo = (event.first / event.rows) + 1;
        this.filterModel.PageSize = event.rows;
        this.filterModel.SortColumn = event.sortField;
        this.filterModel.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterModel.Assignment = event.filters.Assignment == undefined ? '' : event.filters.Assignment.value;
        this.filterModel.TrainingNeed = event.filters.TrainingNeed == undefined ? '' : event.filters.TrainingNeed.value;
        this.filterModel.TrainerRequired = event.filters.TrainerRequired == undefined ? null : (event.filters.TrainerRequired.value == "Yes" ? 1 : 0);
        this.filterModel.TrainingType = null;
        if (event.filters.TrainingType != undefined) {
            if (event.filters.TrainingType.value === "Event")
                this.filterModel.TrainingType = 1;
            else if (event.filters.TrainingType.value === "User Specific")
                this.filterModel.TrainingType = 2;
            //else
            //    this.filterModel.TrainingType = null;
        }

        this.getList();

    }

}

