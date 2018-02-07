import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { LocationModel, TitleModel, SubTitleModel, Title, SubTitle, Action, EventActionStatusModel, events, EventFilterModel, EventViewModel, EventDataModel, EventFilterViewModel, EventAttendeeDataModel, ActionDataModel, ActionResponsiblePersonDataModel, AgendaDataModel } from '../calendar/formeventdata';
import { CategoryModel, ActionSourceModel } from '../eventactions/eventaction.model';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;
@Injectable()
export class EventActionService {

    constructor(private http: Http) {

    }

    getActionData(id: number): Observable<any> {
        return this.http.get(apiURL + '/event/GetActionData?actionID=' + id).map(response => response.json());
    }

    getAllCategories(): Observable<any> {
        return this.http.get(apiURL + '/event/GetAllCategories').map(response => response.json());
    }

    getAllActionSource(): Observable<any> {
        return this.http.get(apiURL + '/event/GetAllActionSource').map(response => response.json());
    }

    updateActionData(data: ActionDataModel): Observable<any> {
        return this.http.post(apiURL + '/event/UpdateAction', data).map(response => response.json());
    }

    deleteAction(id: number): Observable<any> {
        return this.http.get(apiURL + '/action/Delete?id=' + id).map(response => response.json());
    }

    getActionList(pageNo: number, pageSize: number, sortColumn: string, sortOrder: string,
        titleFilter: string,
        dueDateFilter: string,
        statusFilter: string,
        organizerFilter: string
    ): Observable<any> {
        return this.http.get(apiURL + '/action/GetAllActionDataV1?PageNo=' + pageNo
            + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&titleFilter=" + titleFilter
            + "&dueDateFilter=" + dueDateFilter
            + "&statusFilter=" + statusFilter
            + "&organizerFilter=" + organizerFilter
        ).map(response => response.json());
    }

    getAllCorrectedAction(): Observable<any> {
        return this.http.get(apiURL + '/CorrectiveAction/GetAllList').map(response => response.json());
    }
    postUploadData(body: FormData) {
        return this.http.post(apiURL + '/action/SaveActionTaken', body).map(res => { });
    }
    downloadActionFile(fileName: string): void {
        this.http.get(apiURL + '/action/GetActionFile?fileName=' + fileName).map(x => x.blob());
            //.subscribe((res: Response) => { this.downloadFile(res) });
    }

    downloadFile(data: Response) {
        var blob = new Blob([data]);
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    }
}