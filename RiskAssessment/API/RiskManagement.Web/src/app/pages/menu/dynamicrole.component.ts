import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { UserService } from "../user/user.service";
import { RoleViewModel } from '../user/user.model';
import * as FileSaver from 'file-saver';
import { MenuViewModel, MenuFilterModel, RoleMenuMappingViewModel, RoleMenuMappingListModel } from './customdynamicmenu.model';
import { CustomDynamicMenuService } from './customdynamicmenu.service';

@Component({
    selector: 'app-dynamic-role',
    templateUrl: './dynamicrole.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',],
    providers: [UserService, CustomDynamicMenuService],
})

export class RolesMenuConponent implements OnInit {
    myFormPopup: FormGroup;
    roleList: RoleViewModel[] = [];
    @ViewChild('closeDialog') closeDialog;
    constructor(private _CustomDynamicMenuService: CustomDynamicMenuService, private fb: FormBuilder, private _UserService: UserService, private router: Router, private location: Location, private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.getRoleList();
        this.addMasterPopupHtmlToForm();

    }
    getRoleList() {
        this._UserService.getRoleList().subscribe((res: RoleViewModel[]) => {
            this.roleList = res.filter(x => x.IsAdmin == false);
        });
    }
    addMasterPopupHtmlToForm(model: RoleViewModel = new RoleViewModel()) {
        this.myFormPopup = this.fb.group(
            {
                RoleId: [model.RoleId],
                RoleName: [model.RoleName, [Validators.required]],
            });
    }

    SaveMasterPopupFormData(model: RoleViewModel) {
        this._CustomDynamicMenuService.addUpdateRole(model).subscribe(res => {
            this.closeDialog.nativeElement.click();
            this.getRoleList();
            this.selectedRoleId = 0;
            this.menuItems = [];
            this.allMappingOfARole = [];
        });
    }
    public selectedRoleId: number = 0;
    setRoleId(id: number) {
        this.selectedRoleId = id;
        this.getAllMenu();
    }
    public allMappingOfARole: RoleMenuMappingViewModel[] = [];
    public menuItems: MenuViewModel[] = [];
    getAllMenu() {
        this._CustomDynamicMenuService.getAllMenu().subscribe((res: MenuViewModel[]) => {
            this.menuItems = [];
            this.menuItems = res.filter(x => x.ParentMenuId == 0);
            this._CustomDynamicMenuService.getAllRoleMenu(this.selectedRoleId).subscribe((res: RoleMenuMappingViewModel[]) => {
                this.allMappingOfARole = res;
                for (let dd of res) {
                    this.menuItems.find(x => x.MenuId == dd.MenuId).checked = true;
                }
            });
        });
    }
    public list: RoleMenuMappingListModel;
    SaveRoleMapping() {
        let data: number[] = this.menuItems
            .filter(opt => opt.checked)
            .map(opt => opt.MenuId);
        this.list = new RoleMenuMappingListModel();
        this.list.RoleId = this.selectedRoleId;
        this.list.RoleMenuMappingViewModel = [];
        for (let selected of data) {
            let val = new RoleMenuMappingViewModel();
            val.MenuId = selected;
            val.RoleId = this.selectedRoleId;
            this.list.RoleMenuMappingViewModel.push(val);
        }
        this._CustomDynamicMenuService.addUpdateRoleMenu(this.list).subscribe();
    }
}

