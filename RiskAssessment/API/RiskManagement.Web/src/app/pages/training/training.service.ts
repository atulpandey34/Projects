import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { UserScheduleResultViewModel, TrainingViewModel, TrainingScheduleViewModel, TrainingAssignmentAttemptViewModel, TrainingReportFilterModel, TrainerReportFilterModel, TrainingUserReportFilterModel } from './training.model';
import { ResponseContentType } from '@angular/http';

import { environment } from '../../../environments/environment';
import { TrainingListFilterModel, TrainingList, TrainingListViewModel, TrainingReportViewModel } from './training.model';
let apiURL = environment.apiEndpoint;
@Injectable()
export class TrainingService {

    constructor(private http: Http) {
    }
    addUpdateTraining(model: TrainingViewModel): Observable<any> {
        return this.http.post(apiURL + '/training/AddUpdateTraining', model).map(response => response.json());
    }
    uploadMaterial(body: FormData) {
        return this.http.post(apiURL + '/training/SaveMaterial', body).map(res => { });
    }
    addUpdateTrainingSchedule(model: TrainingScheduleViewModel): Observable<any> {
        return this.http.post(apiURL + '/trainingschedule/AddUpdateTrainingSchedule', model).map(response => response.json());
    }
    getTrainingScheduleList(id: number): Observable<any> {
        return this.http.get(apiURL + '/trainingschedule/GetTrainingScheduleList?id=' + id).map(response => response.json());
    }
    getTrainingScheduleUserList(id: number): Observable<any> {
        return this.http.get(apiURL + '/trainingschedule/GetTrainingScheduleUserList?id=' + id).map(response => response.json());
    }
    getTraining(id: number): Observable<any> {
        return this.http.get(apiURL + '/training/GetTraining?id=' + id).map(response => response.json());
    }
    getTrainingList(filterModel: TrainingListFilterModel): Observable<any> {
        return this.http.post(apiURL + '/training/GetTrainingList', filterModel).map(response => response.json());
    }
    deleteTraining(id: number): Observable<any> {
        return this.http.get(apiURL + '/training/DeleteTraining?id=' + id).map(response => response.json());
    }
    getTrainingMaterialList(id: number): Observable<any> {
        return this.http.get(apiURL + '/training/GetSngleByTrainingId?id=' + id).map(response => response.json());
    }
    deleteTrainingMaterial(id: number): Observable<any> {
        return this.http.get(apiURL + '/training/DeleteMaterial?id=' + id).map(response => response.json());
    }
    getTrainingScheduleListByUserId(): Observable<any> {
        return this.http.get(apiURL + '/trainingschedule/GetTrainingScheduleListByUserId').map(response => response.json());
    }
    addUpdateUserTrainingScheduleResult(model: UserScheduleResultViewModel): Observable<any> {
        return this.http.post(apiURL + '/trainingschedule/AddUpdateUserScheduleResult', model).map(response => response.json());
    }
    getTrainingScheduleUserResultList(id: number): Observable<any> {
        return this.http.get(apiURL + '/trainingschedule/GetTrainingScheduleUserResultList?id=' + id).map(response => response.json());
    }

    GetTraineeScheduleListByUserId(): Observable<any> {
        return this.http.get(apiURL + '/trainee/GetTraineeScheduleListByUserId').map(response => response.json());
    }
    deleteTrainingSchedule(id: number): Observable<any> {
        return this.http.get(apiURL + '/trainingschedule/DeleteTrainingSchedule?id=' + id).map(response => response.json());
    }
    updateTrainingScheduleStatus(id: number, status: boolean): Observable<any> {
        return this.http.get(apiURL + '/trainingschedule/UpdateTrainingScheduleStatus?id=' + id + "&Status=" + status).map(response => response.json());
    }

    GetTrainingScheduleAssignmentForUser(trainingScheduleId: number, assignmentId: number, Retest: boolean, AssignmentRequired: boolean): Observable<any> {
        let url = apiURL + '/trainee/GetTrainingScheduleAssignmentForUser/' + trainingScheduleId + "/" + assignmentId + "/" + Retest + "/" + AssignmentRequired;
        return this.http.get(url).map(response => response.json());
    }

    SaveTrainingScheduleAssignmentForUser(model: TrainingAssignmentAttemptViewModel[]): Observable<any> {
        return this.http.post(apiURL + '/trainee/SaveTrainingScheduleAssignmentForUser', model).map(response => response.json());
    }
    downloadMaterial(id: number): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob });
        return this.http.get(apiURL + '/training/DownLoadMaterialBlob?id=' + id, options)
            .map(response => <Blob>response.blob());
    }

    GetAssignmentForUser(TrainingAssignmentAttemptId: number, UserId: number): Observable<any> {
        let url = apiURL + '/trainingschedule/GetAssignmentForUser/' + TrainingAssignmentAttemptId + "/" + UserId;
        return this.http.get(url).map(response => response.json());
    }

    SaveAssignmentScoreForUser(model: TrainingAssignmentAttemptViewModel): Observable<any> {
        model.TrainingAssignmentAnswers = null;
        return this.http.post(apiURL + '/trainingschedule/SaveAssignmentScoreForUser', model).map(response => response.json());
    }

    GetTrainingReport(filterModel: TrainingReportFilterModel): Observable<any> {
        let url = apiURL + '/training/GetTrainingReport';
        return this.http.get(url, { params: filterModel}).map(response => response.json());
    }

    DownloadTrainingReport(filterModel: TrainingReportFilterModel): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob, params: filterModel });
        return this.http.get(apiURL + '/training/DownloadTrainingReport', options)
            .map(response => <Blob>response.blob());
    }

    GetTrainerReport(filterModel: TrainerReportFilterModel): Observable<any> {
        let url = apiURL + '/training/GetTrainerReport';
        return this.http.get(url, { params: filterModel }).map(response => response.json());
    }

    DownloadTrainerReport(filterModel: TrainerReportFilterModel): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob, params: filterModel });
        return this.http.get(apiURL + '/training/DownloadTrainerReport', options)
            .map(response => <Blob>response.blob());
    }

    GetUserReport(filterModel: TrainingUserReportFilterModel): Observable<any> {
        let url = apiURL + '/training/GetTrainingUserReport';
        return this.http.get(url, { params: filterModel }).map(response => response.json());
    }

    DownloadUserReport(filterModel: TrainingUserReportFilterModel): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob, params: filterModel });
        return this.http.get(apiURL + '/training/DownloadTrainingUserReport', options)
            .map(response => <Blob>response.blob());
    }

    GetTrainingNeedList(): Observable<any> {
        let url = apiURL + '/training/GetTrainingNeedList';
        return this.http.get(url).map(response => response.json());
    }

    getTrainerList(): Observable<any> {
        let url = apiURL + '/training/GetTrainerList';
        return this.http.get(url).map(response => response.json());
    }

    getUserList(): Observable<any> {
        let url = apiURL + '/training/GetUserList';
        return this.http.get(url).map(response => response.json());
    }
    
}