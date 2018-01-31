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
import { RolesResponsibilityService } from '../rolesresponsibility/rolesresponsibility.service';
import { RolesResponsibilityViewModel, RoleResponsibilityVersionSection, MasterRoleSectionViewModel, RoleViewModel } from '../rolesresponsibility/rolesresponsibility.model';
import * as FileSaver from 'file-saver';

@Component({
    selector: 'app-rolesreponsibility',
    templateUrl: './rolesresponsibility.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',],
    providers: [UserService, RolesResponsibilityService],
})

export class RolesResponsibilityComponent implements OnInit {
    rolesResponsibilityForm: FormGroup; // Model for form
    myFormPopup: FormGroup;
    masterRoleSectionListBackup: MasterRoleSectionViewModel[];
    masterRoleSectionList: MasterRoleSectionViewModel[];
    roles: RoleViewModel[];
    roleresponsibilityVersionListData: RoleResponsibilityVersionSection[] = []; // for role responsibility version child grid
    RoleResponsibilityID: number;
    RoleResponsibilityVersionID: number;
    IsLatestVersionApproved: boolean = false;
    IsNewVersion: boolean=false;
    Type: number;
    @ViewChild('closeDialog') closeDialog;
    @ViewChild('dynamicContainer') dynamicContainer;
    get SectionDetailForm(): FormArray {
        return <FormArray>this.rolesResponsibilityForm.get('SectionDetailForm');
    }
    constructor(private fb: FormBuilder, private _RolesResponsibilityService: RolesResponsibilityService, private _UserService: UserService, private router: Router, private location: Location, private route: ActivatedRoute) {
    }
    ngOnInit() {
        let roleresposibilityModel = new RolesResponsibilityViewModel();
        this.addhtmltoform(roleresposibilityModel);
        this.addMasterPopupHtmlToForm();
        this._UserService.getRoleMultipleList().subscribe((res) => { this.roles = res; });
        this.getAllMasterRoleSection();
        this.RemoveSectionDetails(0);
    }
    addhtmltoform(model: RolesResponsibilityViewModel) {
        this.rolesResponsibilityForm = this.fb.group(
            {
                Type: [model.Type, Validators.required],
                RoleID: [model.RoleID, Validators.required],
                RoleResponsibilityID: [model.RoleResponsibilityID],
                RoleResponsibilityVersionID: [model.RoleResponsibilityVersionID],
                SectionID: [model.SectionID],
                LatestVersion: [model.LatestVersion],
                LatestChanges: [model.LatestChanges],
                SectionDetailForm: this.fb.array([this.buildOptions(new RoleResponsibilityVersionSection())])
            });
    }
    sethtmltoform(model: RolesResponsibilityViewModel) {
        this.IsNewVersion = false;
        if (model.Type != 0) {
            this.Type = model.Type;
            this.rolesResponsibilityForm.controls['Type'].setValue(model.Type);
        }
        if (model.RoleResponsibilityID != 0) {
            this.rolesResponsibilityForm.controls['RoleResponsibilityID'].setValue(model.RoleResponsibilityID);
        }
        if (model.SectionID != 0) {
            this.rolesResponsibilityForm.controls['SectionID'].setValue(model.SectionID);
        }
        this.rolesResponsibilityForm.controls['LatestVersion'].setValue(model.LatestVersion);
        this.rolesResponsibilityForm.controls['LatestChanges'].setValue(model.LatestChanges);
    }
    addMasterPopupHtmlToForm(model: MasterRoleSectionViewModel = new MasterRoleSectionViewModel()) {
        this.myFormPopup = this.fb.group(
            {
                SectionName: [model.SectionName, [Validators.required, this.validateDistinctMasterJobSection.bind(this)]],
            });
    }
    addSectionDetails(): void {
        let roleresponsibilitymodel = new RoleResponsibilityVersionSection();
        roleresponsibilitymodel.SectionID = this.rolesResponsibilityForm.controls['SectionID'].value;

        if (roleresponsibilitymodel.SectionID != undefined && roleresponsibilitymodel.SectionID != null && roleresponsibilitymodel.SectionID != 0) {

            let roleSection = this.masterRoleSectionList.filter(x => x.MasterRoleSectionID == roleresponsibilitymodel.SectionID)[0];

            if (roleSection != undefined && roleSection != null) {
                roleresponsibilitymodel.SectionName = roleSection.SectionName;
                this.SectionDetailForm.push(this.buildOptions(roleresponsibilitymodel));
                this.masterRoleSectionList = this.masterRoleSectionList.filter(x => x.MasterRoleSectionID != roleresponsibilitymodel.SectionID);
            }
        }
    }
    RemoveSectionDetails(i: number, SectionID: number=0) {
        const control = <FormArray>this.rolesResponsibilityForm.controls['SectionDetailForm'];
        if (control.length > 0) {
            control.removeAt(i);
        }

        if (SectionID != 0) {
            this.masterRoleSectionList.push(this.masterRoleSectionListBackup.filter(x => x.MasterRoleSectionID == SectionID)[0]);
        }
    }
    
    buildOptions(model: RoleResponsibilityVersionSection = new RoleResponsibilityVersionSection()): FormGroup {
        return this.fb.group({
            RoleResponsibilityVersionSectionID: [model.RoleResponsibilityVersionSectionID],
            SectionID: [model.SectionID],
            SectionName: [model.SectionName],
            SectionDetails: [model.SectionDetails],
        });
    }
    SaveRoleResponsibilityFormData(data: RolesResponsibilityViewModel) {
        data.RoleResponsibilityVersionSectionViewModel = [];
        if (data.Type == 1) {
            if ((data as any).SectionDetailForm != undefined && (data as any).SectionDetailForm != null) {
                for (let aa of (data as any).SectionDetailForm) {
                    let roleResponsibiltyVerSec: RoleResponsibilityVersionSection = new RoleResponsibilityVersionSection();
                    roleResponsibiltyVerSec.SectionID = aa.SectionID;
                    roleResponsibiltyVerSec.SectionDetails = aa.SectionDetails;
                    data.RoleResponsibilityVersionSectionViewModel.push(roleResponsibiltyVerSec);
                }
            }
        } else if (data.Type == 2) {
            let roleResponsibiltyVerSec: RoleResponsibilityVersionSection = new RoleResponsibilityVersionSection();
            roleResponsibiltyVerSec.DocumentName = this.fileName;
            data.RoleResponsibilityVersionSectionViewModel.push(roleResponsibiltyVerSec);
        }

        data.RoleResponsibilityVersionID = this.RoleResponsibilityVersionID;
        this._RolesResponsibilityService.addUpdateRoleResponsibility(data).subscribe((res: RolesResponsibilityViewModel) => {
            this.RoleResponsibilityVersionID = res.RoleResponsibilityVersionID;
            if (data.Type == 2) {
                this.saveMaterial(res.RoleID);
            } else if (data.Type == 1) {
                this.GetRoleResponsibility(res.RoleID);
            }
            });
       
    }

    getAllMasterRoleSection(sectionid : number=0) {
        this._RolesResponsibilityService.getAllMasterRoleSection().subscribe((res: MasterRoleSectionViewModel[]) => {
            this.masterRoleSectionList = res;
            this.masterRoleSectionListBackup = res;
            if (sectionid != 0) {
                this.rolesResponsibilityForm.controls['SectionID'].setValue(sectionid);
            }
        });
    }
    GetRoleResponsibility(roleid: number) {
        this.Type = 0;
        this.masterRoleSectionList = this.masterRoleSectionListBackup;
        this._RolesResponsibilityService.getRoleResponsibility(roleid).subscribe((res: RolesResponsibilityViewModel) => {
            for (let i = 0; i <= this.SectionDetailForm.controls.length; i++) {
                this.RemoveSectionDetails(0);
            }
            if (res != null) {
                this.Type = res.Type;
                this.RoleResponsibilityID = res.RoleResponsibilityID;
                this.RoleResponsibilityVersionID = res.RoleResponsibilityVersionID;
                this.sethtmltoform(res);
                //this.RemoveSectionDetails(0);
                if (res.RoleResponsibilityVersionSectionViewModel != null && res.RoleResponsibilityVersionSectionViewModel.length > 0) {
                    for (let aa of res.RoleResponsibilityVersionSectionViewModel) {
                        this.masterRoleSectionList = this.masterRoleSectionList.filter(x => x.MasterRoleSectionID != aa.SectionID);;
                        this.SectionDetailForm.push(this.buildOptions(aa));
                    }
                }
        
            }
            else {
                
                let roleresposibilityModel = new RolesResponsibilityViewModel();
                roleresposibilityModel.RoleID = roleid;
                this.sethtmltoform(roleresposibilityModel);
                this.RoleResponsibilityID = 0;
                this.RoleResponsibilityVersionID=0
                this.RemoveSectionDetails(0);
            }
            this.getRoleResponsibilityVersionList();
        });
    }
    getRoleResponsibilityVersionList() {
        this.roleresponsibilityVersionListData = [];
        this._RolesResponsibilityService.getRoleResponsibilityVersionList(this.RoleResponsibilityID).subscribe((res: RoleResponsibilityVersionSection[]) => {
            this.roleresponsibilityVersionListData = res;
            if (res.length > 0 && (res[0].ApprovedDate != null)) {
                this.IsLatestVersionApproved = true;
                this.dynamicContainer.nativeElement.style.pointerEvents = 'none';
            } else {
                this.IsLatestVersionApproved = false;
                this.dynamicContainer.nativeElement.style.pointerEvents = '';
            }
        });
    }
    showNewVersionForm() {
        this.IsNewVersion = true;
        this.dynamicContainer.nativeElement.style.pointerEvents = '';
        this.rolesResponsibilityForm.controls['LatestChanges'].setValue('');
        //this.RoleResponsibilityVersionID = 0;
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
    saveMaterial(roleid : number=0) {
        if (this.fileToUpload != null && this.fileToUpload != undefined) {
            let file = this.fileToUpload;
            let _formData = new FormData();
            _formData.append("FileName", file.name);
            _formData.append("MyFile", file);
            _formData.append("RoleResponsibilityVersionID", this.RoleResponsibilityVersionID.toString());
            let body = _formData;
            this._RolesResponsibilityService.uploadMaterial(body).subscribe(res => {
                this.removeFile();

                if (roleid != 0) {
                    this.GetRoleResponsibility(roleid);
                }
            });

        }
    }
    ViewRoleResponsibilityVersion(event: RolesResponsibilityViewModel) {
        this._RolesResponsibilityService.getRoleResponsibilityVerion(event.RoleResponsibilityVersionID).subscribe((res: RolesResponsibilityViewModel) => {
            if (res.LatestRoleResponsibilityVersionID != res.RoleResponsibilityVersionID) {
                this.dynamicContainer.nativeElement.style.pointerEvents = 'none';
            } else {
                this.dynamicContainer.nativeElement.style.pointerEvents = '';
            }
            if (res != null) {
                for (let i = 0; i < this.SectionDetailForm.controls.length; i++) {
                    this.RemoveSectionDetails(0);
                }
                this.sethtmltoform(res);
                this.RemoveSectionDetails(0);
                if (res.RoleResponsibilityVersionSectionViewModel != null && res.RoleResponsibilityVersionSectionViewModel.length > 0) {
                    for (let aa of res.RoleResponsibilityVersionSectionViewModel) {
                        this.SectionDetailForm.push(this.buildOptions(aa));
                    }
                }
            }
        });
    }
    downloadMaterial(id: number, fileName: string) {
        this._RolesResponsibilityService.downloadMaterial(id).subscribe(res => {
            FileSaver.saveAs(res, fileName);
        });
    }
    approveVersion() {
        this._RolesResponsibilityService.approveVersion(this.RoleResponsibilityVersionID).subscribe((res: number) => {
            this.getRoleResponsibilityVersionList();
         });
    }

    validateDistinctMasterJobSection(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._RolesResponsibilityService.validateMasterJobSection(control.value).subscribe((res: boolean) => {
                if (res == false) {
                    result = true;
                    this.myFormPopup.controls["SectionName"].setErrors({ remote: "SectionName already exists." });
                }
            });
        }
        else
            result = null;
        return result ? { 'SectionName': { value: control.value } } : null;
    }
    clearMasterJobSectionPopupForm() {
        let Model = new MasterRoleSectionViewModel();
        this.addMasterPopupHtmlToForm(Model);
    }
    SaveMasterJobSectionFormData(data: MasterRoleSectionViewModel) {
        this._RolesResponsibilityService.SaveMasterJobSectionFormData(data).subscribe(res => {
            this.getAllMasterRoleSection(res);;
             this.closeDialog.nativeElement.click();
        });
    }
}

