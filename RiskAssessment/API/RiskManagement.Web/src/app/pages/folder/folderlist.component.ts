import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LazyLoadEvent, FilterMetadata } from 'primeng/components/common/api';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { FolderService } from '../folder/folder.service';
import { MasterEventDataService } from '../calendar/Mastereventdata';
import { UserService } from "../user/user.service";
import { MasterDocumentFolderListResult, MasterDocumentFolderListViewResult, MasterDocumentFolderListFilterModel, FolderPopupViewModel, DocumentFolderUserViewModel, DocumentFolderRoleViewModel } from '../folder/folder.model';

@Component({
    selector: 'app-folderlist',
    templateUrl: './folderlist.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css"],
    providers: [FolderService, MasterEventDataService, UserService],
})

export class FolderListComponent implements OnInit {
    filterData: MasterDocumentFolderListFilterModel;
    folderAddPopup: FormGroup; // Model for form
    data: MasterDocumentFolderListResult[];
    public userOptions: IMultiSelectOption[] = []; 
    public rolesOptions: IMultiSelectOption[] = []; 
    totalRecords: number = 0;
    MasterDocumentFolderID: number;
    @ViewChild('closeDialog') closeDialog;
    constructor(private fb: FormBuilder, private _FolderService: FolderService, private _masterDataService: MasterEventDataService, private _UserService: UserService, private router: Router, private location: Location, private route: ActivatedRoute) { }
    ngOnInit() {
        this.filterData = new MasterDocumentFolderListFilterModel();
        this.filterData.PageNo = 1;
        this.filterData.PageSize = 10;
        this.filterData.SortColumn = "FolderName";
        this.filterData.SortOrder = "asc";

        this._masterDataService.getUserList().subscribe(res => { this.userOptions = res; });
        this._UserService.getRoleMultipleList().subscribe((res) => { this.rolesOptions = res; });
    }
    getList() {
        this._FolderService.getMasterDocumentFoldertListData(this.filterData)
            .subscribe((res: MasterDocumentFolderListViewResult) => {
                this.totalRecords = res.TotalRecords;
                this.data = res.DocumentFolderListResult;
            });
    }
    loadDocumentFolderList(event: LazyLoadEvent) {

        this.filterData.PageNo = (event.first / event.rows) + 1;
        this.filterData.PageSize = event.rows;
        this.filterData.SortColumn = event.sortField == undefined ? "DocumentName" : event.sortField;
        this.filterData.SortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.filterData.FolderName = event.filters.FolderName == undefined ? '' : event.filters.FolderName.value;
        this.filterData.RoleName = event.filters.RoleName == undefined ? '' : event.filters.RoleName.value;
        this.filterData.UserName = event.filters.UserName == undefined ? '' : event.filters.UserName.value;
        this.getList();
        let folderModel = new FolderPopupViewModel();
        this.addFolderPopupToForm(folderModel);

    }
    public multiselectTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find...',
        defaultTitle: 'Select',
        allSelected: 'All selected',
    };
    public multiselectSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-secondary btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true,
        maxHeight: '200px'
    };

    public usermultiselectTexts: IMultiSelectTexts = {
        checkAll: 'Select all',
        uncheckAll: 'Unselect all',
        checked: 'item selected',
        checkedPlural: 'items selected',
        searchPlaceholder: 'Find...',
        defaultTitle: 'Select',
        allSelected: 'All selected',
    };
    public usermultiselectSettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-secondary btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true,
        maxHeight: '200px'
    };
    addFolderPopupToForm(folderPopupViewModel: FolderPopupViewModel) {
        this.folderAddPopup = this.fb.group(
            {
                FolderName: [folderPopupViewModel.FolderName, [Validators.required, this.validateDistinctFolder.bind(this)]],
                Roles: [folderPopupViewModel.Roles],
                Users: [folderPopupViewModel.Users],
            });
    }
    validateDistinctFolder(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._FolderService.validateFolder(control.value).subscribe((res: boolean) => {
                    if (res == false) {
                        result = true;
                        this.folderAddPopup.controls["FolderName"].setErrors({ remote: "Folder already exists." });
                    }
                });
        }
        else
            result = null;
        return result ? { 'FolderName': { value: control.value } } : null;
    }
    clearFolderPopupForm() {
        let folderModel = new FolderPopupViewModel();
        this.addFolderPopupToForm(folderModel);
    }
    SaveFolderFormData(data: FolderPopupViewModel) {
        data.MasterDocumentFolderID = this.MasterDocumentFolderID;
        if (data.Users != null && data.Users.length > 0) {
            data.UserList = [];
            for (let d of data.Users) {
                var user: DocumentFolderUserViewModel = new DocumentFolderUserViewModel();
                user.DocumentFolderUserID = 0;
                user.UserID = d;
                user.DocumentFolderID = data.MasterDocumentFolderID;
                data.UserList.push(user);
            }
        }
        if (data.Roles != null && data.Roles.length > 0) {
            data.RoleList = [];
            for (let d of data.Roles) {
                var role: DocumentFolderRoleViewModel = new DocumentFolderRoleViewModel();
                role.DocumentFolderRoleID = 0;
                role.RoleID = d;
                role.DocumentFolderID = data.MasterDocumentFolderID;
                data.RoleList.push(role);
            }
        }
        this._FolderService.SaveFolderFormData(data).subscribe(res => {
            this.getList();
            this.closeDialog.nativeElement.click();
        });
    }
    public EditFolderDetail(event: MasterDocumentFolderListResult) {
        this.MasterDocumentFolderID = event.MasterDocumentFolderID;
        this._FolderService.getSingleFolder(this.MasterDocumentFolderID).subscribe((res : FolderPopupViewModel) => {
            this.addFolderPopupToForm(res);
        });
    }

    public deleteAction(event: MasterDocumentFolderListResult) {
        if (confirm("Are you sure want to delete this folder?")) {
            this._FolderService.deleteFolder(event.MasterDocumentFolderID).subscribe(res => {
                if (res == 0) {
                    alert("You can't delete this folder as it contain documents.");
                }
                else {
                    this.getList();
                }
            });
        }
    }

}

