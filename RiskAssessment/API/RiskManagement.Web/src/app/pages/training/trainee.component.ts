import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { TrainingService } from './training.service';

import { TraineeScheduleListByUserIdViewModel, TrainingAssignmentAttemptViewModel } from './training.model';

@Component({
    selector: 'app-trainee-component',
    templateUrl: './trainee.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
        "../../../../node_modules/primeng/resources/themes/omega/theme.css",
        '../form-elements/controls/file-uploader/file-uploader.component.scss',
        './training.component.css'
    ],
    providers: [TrainingService]
})

export class TraineeComponent implements OnInit {
    traineeListData: TraineeScheduleListByUserIdViewModel[] = [];
    assignmentData: TrainingAssignmentAttemptViewModel[] = [];
    ShowAssignment: boolean = false;
    score: number = 44;

    constructor(private _trainingService: TrainingService, ) { }

    ngOnInit() {
        this.getTraineeScheduleListData();
    }

    getTraineeScheduleListData() {
        this._trainingService.GetTraineeScheduleListByUserId().subscribe((res: TraineeScheduleListByUserIdViewModel[]) => {
            this.traineeListData = res;
        });
    };

    getTraineeAssigmentData(TrainingScheduleId: number, AssignmentId: number, Retest: boolean, IsAssignmentRequired: boolean) {
        this._trainingService.GetTrainingScheduleAssignmentForUser(TrainingScheduleId, AssignmentId, Retest, IsAssignmentRequired).subscribe((res: TrainingAssignmentAttemptViewModel[]) => {
            this.assignmentData = res;
            this.ShowAssignment = true;
        });
    };


    onShowAssignment(TrainingScheduleId: number, AssignmentId: number, Retest: boolean, IsAssignmentRequired: boolean, score: number) {
        this.score = score;
        if (!this.ShowAssignment) {
            this.getTraineeAssigmentData(TrainingScheduleId, AssignmentId, Retest, IsAssignmentRequired);
        }
        else this.ShowAssignment = false;
    }

    saveResponse() {
        this._trainingService.SaveTrainingScheduleAssignmentForUser(this.assignmentData).subscribe((res: any) => {

            this.ShowAssignment = false;
            this.getTraineeScheduleListData();
        }, err => { console.log(err);  });
    }


}