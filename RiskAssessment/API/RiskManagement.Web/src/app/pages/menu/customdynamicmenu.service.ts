import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { ResponseContentType } from '@angular/http';
import { MenuViewModel, MenuFilterModel, RoleMenuMappingViewModel, RoleMenuMappingListModel } from './customdynamicmenu.model';
import { RoleViewModel } from '../user/user.model';
let apiURL = environment.apiEndpoint;
@Injectable()
export class CustomDynamicMenuService {

    constructor(private http: Http) {

    }

    deleteMenu(id: number): Observable<any> {
        return this.http.get(apiURL + '/menu/Delete?id=' + id).map(response => response.json());
    }
    deactivateMenu(id: number): Observable<any> {
        return this.http.get(apiURL + '/menu/Deactivate?id=' + id).map(response => response.json());
    }
    appUpdateMenu(model: MenuViewModel): Observable<any> {
        return this.http.post(apiURL + '/menu/AddUpdateMenu', model).map(response => response.json());
    }
    getSingle(id: number): Observable<any> {
        return this.http.get(apiURL + '/menu/GetSingleById?id=' + id).map(response => response.json());
    }
    getAllMenu(): Observable<any> {
        return this.http.get(apiURL + '/menu/GetAllMenu').map(response => response.json());
    }
    getListPageData(filterModel: MenuFilterModel): Observable<any> {
        return this.http.post(apiURL + '/menu/GetAllMenuListData', filterModel).map(response => response.json());
    }
    addUpdateRole(role: RoleViewModel): Observable<any> {
        return this.http.post(apiURL + '/role/AddUpdateRole', role).map(response => response.json());
    }
    addUpdateRoleMenu(role: RoleMenuMappingListModel): Observable<any> {
        return this.http.post(apiURL + '/role/AddUpdateRoleMenu', role).map(response => response.json());
    }
    getAllRoleMenu(RoleId: number): Observable<any> {
        return this.http.get(apiURL + '/role/GetAllRoleMenu?RoleId=' + RoleId).map(response => response.json());
    }
    getDefaultUrl(url: string): Observable<any> {
        return this.http.get(apiURL + '/role/GetDefaultUrl?Url=' + url).map(response => response.json());
    }
}