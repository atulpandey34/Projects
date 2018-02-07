import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { Title, SubTitle, EventViewModel, EventFilterModel } from '../../pages/calendar/formeventdata';
import { UserViewModel, RoleViewModel, SecurityQuestionModel, OrgaizationViewModel, UserResetPassword } from '../user/user.model';
import { environment } from '../../../environments/environment';
let apiURL = environment.apiEndpoint;
@Injectable()
export class UserService {
    headers: Headers = new Headers();
    options: RequestOptions;
    constructor(private http: Http) {
        this.headers.append('authorization', sessionStorage["apiAuthToken"]);
        this.options = new RequestOptions({ headers: this.headers });
    }

    getRoleList(): Observable<any> {
        return this.http.get(apiURL + '/role/GetAll').map(response => response.json());
    }
    getMultiSelectRoleList(orgid: number): Observable<any> {
        if (orgid == null || orgid == undefined)
            orgid = 0;
        return this.http.get(apiURL + '/role/GetMultiSelectAll?orgId=' + orgid).map(response => response.json());
    }
    getRoleMultipleList(): Observable<any> {
        return this.http.get(apiURL + '/role/GetAllMultiSelect').map(response => response.json());
    }
    getSecurityQuestionList(): Observable<any> {
        return this.http.get(apiURL + '/securityquestion/GetAll').map(response => response.json());
    }
    getOrganizationList(): Observable<any> {
        return this.http.get(apiURL + '/organization/GetAll').map(response => response.json());
    }
    saveUser(data: UserViewModel) {
        return this.http.post(apiURL + '/user/AddUser', data).map(response => response.json());
    }
    validateUserEmail(email: string, userId: number): Observable<any> {
        return this.http.get(apiURL + '/user/ValidateUserEmail?email=' + email + "&userId=" + userId).map(response => response.json());
    }
    validateUserName(userName: string, userId: number): Observable<any> {
        return this.http.get(apiURL + '/user/ValidateUserName?userName=' + userName + "&userId=" + userId).map(response => response.json());
    }
    getSingleUser(id: number): Observable<any> {
        return this.http.get(apiURL + '/user/GetSingle?id=' + id).map(response => response.json());
    }
    getAllUser(pageNo: number, pageSize: number, sortColumn: string, sortOrder: string,
        OrganizationFilte: string, RoleFilter: string, userName: string, firstName: string, lastName: string,
        emailId: string, inactiveFilter: boolean): Observable<any> {
        return this.http.get(apiURL + '/user/GetAllUser?PageNo=' + pageNo + "&PageSize=" + pageSize + "&sortColumn=" + sortColumn + "&sortOrder=" + sortOrder
            + "&inactiveFilter=" + inactiveFilter
            + "&OrganizationFilte=" + OrganizationFilte + "&RoleFilter=" + RoleFilter
            + "&userName=" + userName
            + "&firstName=" + firstName
            + "&lastName=" + lastName
            + "&emailId=" + emailId

        ).map(response => response.json());
    }
    deleteUser(id: number): Observable<any> {
        return this.http.get(apiURL + '/user/DeleteUser?id=' + id).map(response => response.json());
    }
    resetPassword(id: number): Observable<any> {
        return this.http.get(apiURL + '/user/ResetPassword?id=' + id).map(response => response.json());
    }
    inactiveUser(id: number, status: boolean): Observable<any> {
        return this.http.get(apiURL + '/user/UpdateInactive?id=' + id + "&status=" + status).map(response => response.json());
    }
    changePassword(model: UserResetPassword): Observable<any> {
        return this.http.post(apiURL + '/user/ChangePassword', model).map(response => response.json());
    }
    verifyPassword(password: string): Observable<any> {
        return this.http.get(apiURL + '/user/VerifyPassword?password=' + password).map(response => response.json());
    }
}