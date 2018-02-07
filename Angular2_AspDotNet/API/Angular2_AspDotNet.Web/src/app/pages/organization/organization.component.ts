
import { Component, ViewEncapsulation, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl, AbstractControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OrganizationViewModel } from '../organization/organization.model';
import { OrganizationService } from '../organization/organization.service';
import { environment } from '../../../environments/environment';
import * as FileSaver from 'file-saver';
let apiURL = environment.apiEndpoint;

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',],
    providers: [OrganizationService],

})
export class DocumentComponent implements OnInit {
    public apiEndPoint: string;
    myFormOrganization: FormGroup; // Model for form
    OrganizationID: number = 0;
    @ViewChild('closeDialog') closeDialog;
    constructor(private fb: FormBuilder, private _OrganizationService: OrganizationService, private route: ActivatedRoute, private router: Router, private location: Location) {
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    ngOnInit() {
        this.onload();
    }

    onload() {
        this.route.params.subscribe(params => {
            this.OrganizationID = params['id'] as number; //log the value of id
            this.OrganizationID = this.OrganizationID === undefined ? 0 : this.OrganizationID;
        });

        this.addhtmltoform();
        
        if (this.OrganizationID > 0) {
            this._OrganizationService.getSingleOrganization(this.OrganizationID).subscribe((res: OrganizationViewModel) => {
                this.OrganizationID = res.OrganizationID;
                this.addhtmltoform(res);
            });
        }
    }

    addhtmltoform(model: OrganizationViewModel = new OrganizationViewModel()) {
        this.myFormOrganization = this.fb.group(
            {
                OrganizationID: [model.OrganizationID],
                OrganizationName: [model.OrganizationName, [Validators.required]],
                Logo: [model.Logo],
                State: [model.State, [Validators.required]],
                City: [model.City, [Validators.required]],
                AddressLine: [model.AddressLine, [Validators.required]],
                IsActive: [model.IsActive, [Validators.required]],
            });
    }

    SaveOrganizationFormData(data: OrganizationViewModel) {
        this._OrganizationService.saveOrganization(data).subscribe(res => {
            this.OrganizationID = res.OrganizationID;
            this.router.navigate(['/pages/organization/' + this.OrganizationID]);
            this.saveMaterial(res.OrganizationID);
            
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
    saveMaterial(orgid:number) {
        if (this.fileToUpload != null && this.fileToUpload != undefined) {
            let file = this.fileToUpload;
            let _formData = new FormData();
            _formData.append("FileName", file.name);
            _formData.append("MyFile", file);
            _formData.append("OrganizationID", this.OrganizationID.toString());
            let body = _formData;
            this._OrganizationService.uploadMaterial(body).subscribe(res => {
                this.removeFile();
                this.router.navigate(['/pages/organization/' + orgid ]);
            });

        }
    }
    AddUserToOrganization() {
        this.router.navigate(['/pages/user/0/' + this.OrganizationID]);
    }
}


