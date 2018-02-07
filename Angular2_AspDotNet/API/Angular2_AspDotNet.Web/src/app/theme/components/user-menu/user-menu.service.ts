import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
let apiURL = environment.apiEndpoint;
@Injectable()

export class UserMenuService {
    headers: Headers = new Headers();
    options: RequestOptions;

    constructor(private http: Http) {
        this.headers.append('authorization', sessionStorage["apiAuthToken"]);
        this.options = new RequestOptions({ headers: this.headers });
    }
    logoutUser(): Observable<any> {
        return this.http.get(apiURL + "/login/Logout").map(response => response.json());
    }
    getUserInformation(): Observable<any> {
        return this.http.get(apiURL + "/user/GetUserInformation").map(response => response.json());
    }
}