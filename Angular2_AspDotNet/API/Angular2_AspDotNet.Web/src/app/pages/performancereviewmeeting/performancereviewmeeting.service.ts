import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Title, SubTitle, EventViewModel, EventFilterModel } from '../../pages/calendar/formeventdata';
import { environment } from '../../../environments/environment';
import { ResponseContentType } from '@angular/http';
let apiURL = environment.apiEndpoint;
@Injectable()
export class PerformanceReviewMeetingDataService {

    constructor(private http: Http) {

    }

    getEventData(id: number): Observable<any> {
        return this.http.get(apiURL + '/event/GetEventData?EventID=' + id).map(response => response.json());
    }
    getMeetingList(pageNo: number, pageSize: number, sortColumn: string, sortOrder: string,
        actionFilter: string, subTitlNameFilter: string, dateFilter: string, locationFilter: string
    ): Observable<any> {
        return this.http.get(apiURL + '/event/GetMeetingList?PageNo=' + pageNo + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&subTitle=" + subTitlNameFilter + "&action=" + actionFilter
            + "&date=" + dateFilter + "&location=" + locationFilter
        ).map(response => response.json());
    }

    getRevieweeObjectives(revieweeId:number): Observable<any> {
        return this.http.get(apiURL + '/event/GetRevieweeObjectives?revieweeId=' + revieweeId).map(response => response.json());
    }
    getRevieweeAction(revieweeId: number): Observable<any> {
        return this.http.get(apiURL + '/event/GetRevieweeAction?revieweeId=' + revieweeId).map(response => response.json());
    }
    getRolesResponsibility(revieweeId: number): Observable<any> {
        return this.http.get(apiURL + '/roleresponsibility/GetRolesResponsibility?ReviewwUserId=' + revieweeId).map(response => response.json());
    }
    getRoleResponsibilityWithVersionId(id: number): Observable<any> {
        return this.http.get(apiURL + '/roleresponsibility/GetRoleResponsibilityWithVersionId?RoleResponsibilityVersionId=' + id).map(response => response.json());
    }
    downloadMaterial(id: number): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob });
        return this.http.get(apiURL + '/roleresponsibility/DownLoadMaterialBlob?id=' + id, options)
            .map(response => <Blob>response.blob());
    }
    getAllOccurenceOfADate(expression: string): Observable<any> {
        return this.http.get(apiURL + '/event/GenerateAllDateFromCronExpression?expression=' + expression).map(response => response.json());
    }
}