import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { MeasureViewModel, FrequencyViewModel, MeasureColumnViewModel, MeasureObjectiveViewModel, MeasureColumnDataViewModel, MeasureColumnDataByDateViewModel, MeasureColumnChartData } from './measure.model';

import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;
@Injectable()
export class MeasureService {

    constructor(private http: Http) {
    }

    saveMeasure(model: MeasureViewModel): Observable<any> {

        return this.http.post(apiURL + '/measure/SaveMeasure', model).map(response => response.json());
    }

    getMeasure(id: number): Observable<MeasureViewModel> {
        return this.http.get(apiURL + '/measure/GetMeasure/' + id).map(response => response.json());
    }

    getMeasureList(): Observable<MeasureViewModel[]> {
        return this.http.get(apiURL + '/measure/GetAllMeasures').map(response => response.json());
    }

    getMeasureColumns(id: number): Observable<MeasureColumnDataViewModel[]> {
        return this.http.get(apiURL + '/measure/GetMeasureColumns/' + id).map(response => response.json());
    }

    getMeasureColumnsDataByDate(id: number): Observable<MeasureColumnDataByDateViewModel[]> {
        return this.http.get(apiURL + '/measure/GetMeasureColumnDataByDate/' + id).map(response => response.json());
    }

    getChartData(id: number, id1: number, sD: string = '', eD: string = ''): Observable<MeasureColumnChartData> {
        return this.http.get(apiURL + '/measure/GetChartData?id=' + id
            + "&id1=" + id1
            + "&sD=" + sD
            + "&eD=" + eD
        ).map(response => response.json());
    }

    getFrequency(): Observable<FrequencyViewModel[]> {

        return this.http.get(apiURL + '/measure/GetFrequency').map(response => response.json());
    }

    saveMeasureColumn(model: MeasureColumnViewModel): Observable<any> {

        return this.http.post(apiURL + '/measure/SaveMeasureColumn', model).map(response => response.json());
    }

    saveMeasureObjective(model: MeasureObjectiveViewModel): Observable<any> {

        return this.http.post(apiURL + '/measure/SaveMeasureObjective', model).map(response => response.json());
    }

    saveMeasureColumnData(model: MeasureColumnDataViewModel[]): Observable<any> {
        return this.http.post(apiURL + '/measure/SaveMeasureColumnData', model).map(response => response.json());
    }
}