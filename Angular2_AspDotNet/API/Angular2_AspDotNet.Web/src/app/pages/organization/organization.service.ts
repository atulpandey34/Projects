import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { OrganizationListFilterModel, OrganizationViewModel } from '../organization/organization.model';
import { environment } from '../../../environments/environment';
import { ResponseContentType } from '@angular/http';
let apiURL = environment.apiEndpoint;
@Injectable()
export class OrganizationService {

    constructor(private http: Http) {
    }

    getOrganizationListData(filter: OrganizationListFilterModel): Observable<any> {
        return this.http.post(apiURL + '/organization/GetOrganizationListData', filter).map(response => response.json());
    }

    deleteOrganization(id: number): Observable<any> {
        return this.http.get(apiURL + '/organization/DeleteOrganization?id=' + id).map(response => response.json());
    }
    saveOrganization(data: OrganizationViewModel): Observable<any> {
        return this.http.post(apiURL + '/organization/AddUpdateOrganization', data).map(response => response.json());
    }
    getSingleOrganization(id: number): Observable<any> {
        return this.http.get(apiURL + '/organization/GetSingleOrganization?id=' + id).map(response => response.json());
    }
    uploadMaterial(body: FormData) {
        return this.http.post(apiURL + '/organization/SaveMaterial', body).map(res => { });
    }
    downloadMaterial(id: number): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob });
        return this.http.get(apiURL + '/organization/DownLoadMaterialBlob?id=' + id, options)
            .map(response => <Blob>response.blob());
    }
}