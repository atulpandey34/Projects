import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { RiskAssessmentListFilterModel, MonitoringMethodModel, RiskAssessmentViewModel, RiskAssessmentHazardViewModel } from '../riskassessment/riskassessment.model';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;
@Injectable()
export class RiskAssessmentService {

    constructor(private http: Http) {
    }

    getAllHazard(): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/GetAllHazard').map(response => response.json());
    }
    getAllDurationUnit(): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/GetAllDurationUnit').map(response => response.json());
    }
    getAllMonitoringMethod(): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/GetAllMonitoringMethod').map(response => response.json());
    }
    addUpdateRiskAssessment(model: RiskAssessmentViewModel): Observable<any> {
        return this.http.post(apiURL + '/RiskAssessment/AddUpdateRiskAssessment', model).map(response => response.json());
    }
    addUpdateRiskAssessmentHazard(model: RiskAssessmentHazardViewModel): Observable<any> {
        return this.http.post(apiURL + '/RiskAssessment/AddUpdateRiskAssessmentHazard', model).map(response => response.json());
    }
    getRiskAssessment(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/GetSingleWithTeam?id=' + id).map(response => response.json());
    }
    getHazardList(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/GetHazardListWithRiskAssessmentId?id=' + id).map(response => response.json());
    }
    getRiskAssessmentList(filter: RiskAssessmentListFilterModel): Observable<any> {
        return this.http.post(apiURL + '/RiskAssessment/GetRiskAssessmentListData', filter).map(response => response.json());
    }
    deleteAssessment(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/Delete?id=' + id).map(response => response.json());
    }
    updateSignatureDate(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/UpdateSignatureDate?id=' + id).map(response => response.json());
    }
    updateTrainigRequired(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentTrainingRequired?id=' + id).map(response => response.json());
    }
    updateRiskAssessmentStatus(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentStatus?id=' + id).map(response => response.json());
    }
    getSignedUserList(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/GetSignedUserList?id=' + id).map(response => response.json());
    }
    updateReviewDate(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/UpdateReviewDate?id=' + id).map(response => response.json());
    }
    reviewRiskAssessment(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/ReviewRiskAssessment?id=' + id).map(response => response.json());
    }
    getHazardData(id: number): Observable<any> {
        return this.http.get(apiURL + '/RiskAssessment/GetRiskAssessmentHazardData?id=' + id).map(response => response.json());
    }
}