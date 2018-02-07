import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

//import { SignedUserList, HazardListModel, MonitoringMethodModel, DurationUnitModel, HazardModel, RiskAssessmentViewModel, RiskAssessmentTeamViewModel, RiskAssessmentHazardViewModel, RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardReviewViewModel } from '../riskassessment/riskassessment.model';
import { AssignmentListFilterModel, Assignment, AssignmentListData, AssignmentListResult, AssignmentQuestionOption } from '../assignment/assignment.model';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;
@Injectable()
export class AssignmentService {

    constructor(private http: Http) {
    }

    //getAssignmentList(filter: AssignmentListFilterModel): Observable<any> {
    //    return this.http.get(apiURL + '/Assignment/GetAssignmentList').map(response => response.json());

    //}
    deleteAssignment(id: number): Observable<any> {
        return this.http.get(apiURL + '/Assignment/DeleteAssigment?id=' + id).map(response => response.json());
    }


    //getAllHazard(): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetAllHazard').map(response => response.json());
    //}
    //getAllDurationUnit(): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetAllDurationUnit').map(response => response.json());
    //}
    ////getAllMonitoringMethod(): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetAllMonitoringMethod').map(response => response.json());
    //}
    //addUpdateRiskAssessment(model: RiskAssessmentViewModel): Observable<any> {
    //    return this.http.post(apiURL + '/RiskAssessment/AddUpdateRiskAssessment', model).map(response => response.json());
    //}

    addUpdateQuestionAssignment(model: AssignmentListResult): Observable<any> {

        return this.http.post(apiURL + '/Assignment/AddUpdateQuestionAssignment', model).map(response => response.json());
    }



    addUpdateAssignment(model: Assignment): Observable<any> {

        return this.http.post(apiURL + '/Assignment/AddUpdateAssignment', model).map(response => response.json());
    }
    //getRiskAssessment(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetSingleWithTeam?id=' + id).map(response => response.json());
    //}
    getAssignment(id: number): Observable<any> {
        return this.http.get(apiURL + '/Assignment/GetAssginmentListWithAssignmentId?id=' + id).map(response => response.json());
    }
    getAllAssignment(): Observable<any> {
        return this.http.get(apiURL + '/Assignment/GetAllAssignment').map(response => response.json());
    }
    getAssignmentList(filter: AssignmentListFilterModel): Observable<any> {
        return this.http.post(apiURL + '/Assignment/GetAssignmentListData', filter).map(response => response.json());
    }
    //deleteAssessment(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/Delete?id=' + id).map(response => response.json());
    //}
    //updateSignatureDate(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/UpdateSignatureDate?id=' + id).map(response => response.json());
    //}
    //updateTrainigRequired(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentTrainingRequired?id=' + id).map(response => response.json());
    //}
    //updateRiskAssessmentStatus(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/UpdateRiskAssessmentStatus?id=' + id).map(response => response.json());
    //}
    //getSignedUserList(id: number): Observable<any> {
    //    return this.http.get(apiURL + '/RiskAssessment/GetSignedUserList?id=' + id).map(response => response.json());
    //}


    getQuestionListOfAssignment(id: number): Observable<any> {
        return this.http.get(apiURL + '/Assignment/GetQuestionOptionList/' + id).map(response => response.json());
    }
    deleteQuestionWithOption(id: number): Observable<any> {
        return this.http.get(apiURL + '/Assignment/DeleteQuestionWithOption/' + id).map(response => response.json());
    }
    getQuestionDetail(id: number): Observable<any> {
        return this.http.get(apiURL + '/Assignment/GetQuestionDetailData/' + id).map(response => response.json());
    }
}