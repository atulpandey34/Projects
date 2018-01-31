import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { RolesResponsibilityViewModel, RoleResponsibilityVersionSection, MasterRoleSectionViewModel, RoleViewModel } from '../rolesresponsibility/rolesresponsibility.model';
import { environment } from '../../../environments/environment';
import { ResponseContentType } from '@angular/http';
let apiURL = environment.apiEndpoint;
@Injectable()
export class RolesResponsibilityService {

    constructor(private http: Http) {
    }

    getAllMasterRoleSection(): Observable<any> {
        return this.http.get(apiURL + '/roleresponsibility/GetAllMasterRoleSection').map(response => response.json());
    }
    getRoleResponsibility(roleid:number): Observable<any> {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibility?roleid=' + roleid).map(response => response.json());
    } 
    getRoleResponsibilityVerion(id: number): Observable<any> {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibilityVerion?RoleResponsibilityVersionID=' + id).map(response => response.json());
    }
    addUpdateRoleResponsibility(model: RolesResponsibilityViewModel): Observable<any> {

        return this.http.post(apiURL + '/roleresponsibility/AddUpdateRoleResponsibility', model).map(response => response.json());
    }
    getRoleResponsibilityVersionList(roleresponsibilityid: number): Observable<any> {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibilityVersionList?roleresponsibilityid=' + roleresponsibilityid).map(response => response.json());
    }
    approveVersion(id: number): Observable<any> {
        return this.http.get(apiURL + '/roleresponsibility/ApproveVersion?id=' + id).map(response => response.json());
    }
    uploadMaterial(body: FormData) {
        return this.http.post(apiURL + '/roleresponsibility/SaveMaterial', body).map(res => { });
    }
    downloadMaterial(id: number): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob });
        return this.http.get(apiURL + '/roleresponsibility/DownLoadMaterialBlob?id=' + id, options)
            .map(response => <Blob>response.blob());
    }
    SaveMasterJobSectionFormData(model: MasterRoleSectionViewModel): Observable<any> {
        return this.http.post(apiURL + '/roleresponsibility/SaveMasterJobSectionFormData', model).map(response => response.json());
    }
    validateMasterJobSection(value: string): Observable<any> {
        return this.http.get(apiURL + '/roleresponsibility/ValidateMasterJobSection?value=' + value).map(response => response.json());
    }
}