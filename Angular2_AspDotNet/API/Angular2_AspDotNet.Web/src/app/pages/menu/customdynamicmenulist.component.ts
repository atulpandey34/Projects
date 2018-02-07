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

import { MenuViewModel, MenuFilterModel, GetAllMenuListDataViewResult, MenuViewList } from './customdynamicmenu.model';
import { CustomDynamicMenuService } from './customdynamicmenu.service';

@Component({
    selector: 'app-custom-dynamic-menu-list',
    templateUrl: './customdynamicmenulist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [CustomDynamicMenuService],


})

export class CustomDynamicMenuListComponent implements OnInit {
    data: GetAllMenuListDataViewResult[];
    totalRecords: number = 0;
    filterModel: MenuFilterModel;
    constructor(private _CustomDynamicMenuService: CustomDynamicMenuService, private router: Router, private location: Location, private _fb: FormBuilder, private route: ActivatedRoute) { }
    ngOnInit() {
        this.filterModel = new MenuFilterModel();
        this.filterModel.SortColumn = "Title";
        this.filterModel.SortOrder = "asc";
        this.filterModel.PageNo = 1;
        this.filterModel.PageSize = 10;

    }
    loadCarsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

        //imitate db connection over a network
        this.getList();

    }

    getList() {
        this._CustomDynamicMenuService.getListPageData(this.filterModel).subscribe((res: MenuViewList) => {
            this.data = res.GetAllMenuListDataViewResult;
            this.totalRecords = res.TotalRecords;
        });
    }


    redirectToEditPage(data: GetAllMenuListDataViewResult) {
        this.router.navigate(['/pages/menu/' + data.MenuId]);
    }

    deleteMenu(data: GetAllMenuListDataViewResult) {
        if (confirm("Are you sure want to delete this menu ?")) {
            this._CustomDynamicMenuService.deleteMenu(data.MenuId).subscribe(res => {
                this.getList();

            });
        }
    }
    inactiveMenu(data: GetAllMenuListDataViewResult) {
        if (confirm("Are you sure want to inactive this menu ?")) {
            this._CustomDynamicMenuService.deactivateMenu(data.MenuId).subscribe(res => {
                this.getList();

            });
        }
    }

    redirectToNewPage() {
        this.router.navigate(['/pages/menu']);
    }

}

