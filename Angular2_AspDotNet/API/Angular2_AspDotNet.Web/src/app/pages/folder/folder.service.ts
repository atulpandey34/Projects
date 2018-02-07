import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { MasterDocumentFolderListFilterModel, FolderPopupViewModel} from '../folder/folder.model';
import { environment } from '../../../environments/environment';
import { ResponseContentType } from '@angular/http';
let apiURL = environment.apiEndpoint;
@Injectable()
export class FolderService {

    constructor(private http: Http) {
    }

    getMasterDocumentFoldertListData(filter: MasterDocumentFolderListFilterModel): Observable<any> {
        return this.http.post(apiURL + '/Document/GetMasterDocumentFoldertListData', filter).map(response => response.json());
    }
    SaveFolderFormData(model: FolderPopupViewModel): Observable<any> {
        return this.http.post(apiURL + '/Document/SaveFolderFormData', model).map(response => response.json());
    }
    getSingleFolder(id: number): Observable<any> {
        return this.http.get(apiURL + '/Document/GetSingleFolder?id=' + id).map(response => response.json());
    }
    validateFolder(value: string): Observable<any> {
        return this.http.get(apiURL + '/Document/ValidateFolder?value=' + value).map(response => response.json());
    }
    deleteFolder(id: number): Observable<any> {
        return this.http.get(apiURL + '/Document/DeleteFolder?id=' + id).map(response => response.json());
    }  
}