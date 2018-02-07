import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Title, SubTitle, EventViewModel, EventFilterModel } from '../../pages/calendar/formeventdata';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;
@Injectable()
export class MeetingDataService {

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
    getPerformanceReviewMeetingList(pageNo: number, pageSize: number, sortColumn: string, sortOrder: string,
        actionFilter: string, subTitlNameFilter: string, dateFilter: string,
        locationFilter: string, revieweeFilter: string, reviewer: string
    ): Observable<any> {
        return this.http.get(apiURL + '/event/GetPerformanceReviewMeetingList?PageNo=' + pageNo + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&subTitle=" + subTitlNameFilter + "&action=" + actionFilter
            + "&date=" + dateFilter + "&location=" + locationFilter
            + "&reviewee=" + revieweeFilter + "&reviewer=" + reviewer
        ).map(response => response.json());
    }

}