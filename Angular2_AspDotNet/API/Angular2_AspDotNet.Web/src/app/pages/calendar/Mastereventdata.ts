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
export class MasterEventDataService {

    constructor(private http: Http) {

    }

    getTitles() {
        return [
            new Title(1, 'Meeting'),
            new Title(2, 'Performance Review'),
            new Title(3, 'Training')
        ];
    }
    getSubTitles() {
        return [
            new SubTitle(1, 1, 'Management Review'),
            new SubTitle(2, 1, 'Production Meeting'),
            new SubTitle(3, 1, 'Finance Meeting'),
            new SubTitle(4, 1, 'Strategic Metting'),
            new SubTitle(5, 2, 'Performance Review'),
            new SubTitle(8, 3, 'Training'),

        ];
    }

    addEvent(data: EventViewModel): Observable<any> {

        return this.http.post(apiURL + '/event/AddEvent', data).map(response => response.json());

    }
    addPerformanceReviewEvent(data: EventViewModel): Observable<any> {

        return this.http.post(apiURL + '/event/AddPerformanceReviewMeeting', data).map(response => response.json());

    }
    getUserList(): Observable<any> {

        return this.http.get(apiURL + '/event/GetAllUser').map(response => response.json());
        //	.subscribe();
    }
    getAllauditor(): Observable<any> {

        return this.http.get(apiURL + '/event/GetAllauditor').map(response => response.json());
    }

    getEventFilteredData(filterData: EventFilterModel): Observable<any> {
        return this.http.post(apiURL + '/event/GetEventFilteredData', filterData).map(response => response.json());
    }


    getTitleList(): Observable<any> {
        return this.http.get(apiURL + '/event/GeTitleList').map(response => response.json());
    }

    getLocationList(): Observable<any> {
        return this.http.get(apiURL + '/event/GetLocationList').map(response => response.json());
    }

    getSubTitleList(title: number): Observable<any> {
        return this.http.get(apiURL + '/event/GeSubTitleList?titleID=' + title).map(response => response.json());
    }

    getEventActionStatusList(): Observable<any> {
        return this.http.get(apiURL + '/event/GeEventStatusList').map(response => response.json());
    }

    deleteEvent(id: number): Observable<any> {
        return this.http.get(apiURL + '/event/DeleteEvent?eventID=' + id).map(response => response.json());
    }
    getUserWithRole(): Observable<any> {
        return this.http.get(apiURL + '/user/GetUserWithRole').map(response => response.json());
    }
}