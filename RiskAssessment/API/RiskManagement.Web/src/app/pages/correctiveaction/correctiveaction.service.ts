import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;

@Injectable()
export class CorrectiveActionService {

    constructor(private http: Http) {

    }

    getCorrectiveActionByActionId(id: number): Observable<any> {
        return this.http.get(apiURL + "/CorrectiveAction/GetCorrectiveActionByActionId?actionId=" + id).map(res => res.json());
    }
    addCorrectiveActionFromAction(model: any): Observable<any> {
        return this.http.post(apiURL + "/CorrectiveAction/AddCorrectiveActionFromAction", model).map(res => res.json());
    }
    getCorrectiveActionList(model: any): Observable<any> {
        return this.http.post(apiURL + "/CorrectiveAction/GetCorrectiveActionList", model).map(res => res.json());
    }
    getCorrectiveActionData(id: number): Observable<any> {
        return this.http.get(apiURL + "/CorrectiveAction/GetCorrectiveData?CorrectiveActionDataID=" + id).map(res => res.json());
    }
    deleteCorrectiveAction(id: number) {
        return this.http.get(apiURL + "/CorrectiveAction/DeleteCorrectiveAction?CorrectiveActionId=" + id).map(res => res.json());
    }
}