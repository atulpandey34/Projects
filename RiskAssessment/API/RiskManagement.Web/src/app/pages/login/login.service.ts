import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ResetPassswordModel } from '../login/login.model';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;
@Injectable()

export class LoginService {


    constructor(private http: Http) {




    }

    loginUser(userName: string, password: string): Observable<any> {
        return this.http.get(apiURL + '/login/LoginUser?'
            + "userName=" + userName
            + "&password=" + password
        ).map(response => response.json());
    }
    loginEncryptedUser(userName: string, password: string): Observable<any> {
        return this.http.get(apiURL + '/login/LoginEncryptedUser?'
            + "userName=" + userName
            + "&password=" + password
        ).map(response => response.json());
    }
    logoutUser(): Observable<any> {
        return this.http.get(apiURL + "/login/Logout").map(response => response.json());

    }
    getSecurityQuestion(): Observable<any> {
        return this.http.get(apiURL + "/user/GetAllSecurityQuestion").map(response => response.json());

    }
    resetPassword(model: any): Observable<any> {
        return this.http.post(apiURL + "/user/ResetPassword", model).map(response => response.json());
    }
    forgotPassword(model: any): Observable<any> {
        return this.http.post(apiURL + "/login/ForgotPassword", model).map(response => response.json());
    }
    getSecurityQuestionOfUser(username: string): Observable<any> {
        return this.http.get(apiURL + "/login/GetSecurityQuestinOfUser?UserName=" + username).map(response => response.json());
    }
}