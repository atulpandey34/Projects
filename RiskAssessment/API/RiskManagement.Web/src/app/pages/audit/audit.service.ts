import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { AuditSubjectListFilterModel, AuditListFilterModel, AuditViewModel, AuditSubjectReviewViewModel } from '../audit/audit.model';
import { environment } from '../../../environments/environment';
import { ResponseContentType } from '@angular/http';
let apiURL = environment.apiEndpoint;
@Injectable()
export class AuditService {

    constructor(private http: Http) {
    }

    getAuditListData(filter: AuditListFilterModel): Observable<any> {
        return this.http.post(apiURL + '/audit/GetAuditListData', filter).map(response => response.json());
    }
    getAuditSubjectListData(filter: AuditSubjectListFilterModel): Observable<any> {
        return this.http.post(apiURL + '/audit/GetAuditSubjectListData', filter).map(response => response.json());
    }
    deleteAudit(id: number): Observable<any> {
        return this.http.get(apiURL + '/audit/DeleteAudit?id=' + id).map(response => response.json());
    }
    saveAuditFormData(data: AuditViewModel): Observable<any> {
        return this.http.post(apiURL + '/audit/AddUpdateAudit', data).map(response => response.json());
    }
    getSingleAudit(id: number): Observable<any> {
        return this.http.get(apiURL + '/audit/GetSingleAudit?id=' + id).map(response => response.json());
    }
    getAuditSubject(id: number): Observable<any> {
        return this.http.get(apiURL + '/audit/GetAuditSubject?id=' + id).map(response => response.json());
    }
    uploadMaterial(body: FormData) {
        return this.http.post(apiURL + '/audit/SaveMaterial', body).map(res => { });
    }
    downloadMaterial(id: number): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob });
        return this.http.get(apiURL + '/audit/DownLoadMaterialBlob?id=' + id, options)
            .map(response => <Blob>response.blob());
    }

    // Audit review
    saveAuditReviewFormData(data: AuditSubjectReviewViewModel): Observable<any> {
        return this.http.post(apiURL + '/audit/AddUpdateAuditReview', data).map(response => response.json());
    }
    getAuditSubjectReview(AuditSubjectID: number, AuditSubjectReviewID: number): Observable<any> {
        return this.http.get(apiURL + '/audit/GetAuditSubjectReview?AuditSubjectID=' + AuditSubjectID + '&AuditSubjectReviewID=' + AuditSubjectReviewID).map(response => response.json());
    }
    //Audit Review Report
    getAuditReport(id: number): Observable<any> {
        return this.http.get(apiURL + '/audit/GetAuditReport?Auditid=' + id).map(response => response.json());
    }
}