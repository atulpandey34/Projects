import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { DocumentListFilterModel, DocumentViewModel} from '../document/document.model';
import { environment } from '../../../environments/environment';
import { ResponseContentType } from '@angular/http';
let apiURL = environment.apiEndpoint;
@Injectable()
export class DocumentService {

    constructor(private http: Http) {
    }

    getDocumentList(filter: DocumentListFilterModel): Observable<any> {
        return this.http.post(apiURL + '/Document/GetDocumentListData', filter).map(response => response.json());
    }

    getDocumentTypeList(): Observable<any> {
        return this.http.get(apiURL + '/Document/GetAllDocumentsType').map(response => response.json());
    }

    getAllMasterDocumentFolder(): Observable<any> {
        return this.http.get(apiURL + '/Document/GetAllMasterDocumentFolder').map(response => response.json());
    }

    getMasterReviewFrequency(): Observable<any> {
        return this.http.get(apiURL + '/Document/GetMasterReviewFrequency').map(response => response.json());
    }

    getSingleDocument(id: number): Observable<any> {
        return this.http.get(apiURL + '/Document/GetSingleDocument?id=' + id).map(response => response.json());
    }
    validateDocumentType(documentType: string): Observable<any> {
        return this.http.get(apiURL + '/Document/ValidateDocumentType?documentType=' + documentType).map(response => response.json());
    }
    validateReviewFrequencyUnit(value: string): Observable<any> {
        return this.http.get(apiURL + '/Document/ValidateReviewFrequencyUnit?value=' + value).map(response => response.json());
    }
    validateFolder(value: string): Observable<any> {
        return this.http.get(apiURL + '/Document/ValidateFolder?value=' + value).map(response => response.json());
    }
    saveDocument(document: DocumentViewModel): Observable<any> {
        return this.http.post(apiURL + '/Document/AddUpdateDocument', document).map(response => response.json());
    }

    getDocumentVersionList(documentid: number): Observable<any> {
        return this.http.get(apiURL + '/Document/GetDocumentVersionList?documentid='+documentid).map(response => response.json());
    }
    deleteDocument(id: number): Observable<any> {
        return this.http.get(apiURL + '/Document/DeleteDocument?id=' + id).map(response => response.json());
    }
    deleteDocumentVersion(id: number): Observable<any> {
        return this.http.get(apiURL + '/Document/DeleteDocumentVersion?documentVesionId=' + id).map(response => response.json());
    }
    addMasterReviewFrequencyUnit(MasterValueText: string): Observable<any> {
        return this.http.get(apiURL + '/Document/AddMasterReviewFrequencyUnit?MasterValueText='+ MasterValueText).map(response => response.json());
    }
    addMasterDocumentFolder(MasterValueText: string): Observable<any> {
        return this.http.get(apiURL + '/Document/AddMasterDocumentFolder?MasterValueText='+ MasterValueText).map(response => response.json());
    }
    addMasterDocumentType(MasterValueText: string): Observable<any> {
        return this.http.get(apiURL + '/Document/AddMasterDocumentType?MasterValueText='+ MasterValueText).map(response => response.json());
    }
    uploadMaterial(body: FormData) {
        return this.http.post(apiURL + '/Document/SaveMaterial', body).map(res => { });
    }
    downloadMaterial(id: number): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob });
        return this.http.get(apiURL + '/Document/DownLoadMaterialBlob?id=' + id, options)
            .map(response => <Blob>response.blob());
    }
}