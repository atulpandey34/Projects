"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var directives_module_1 = require("../../theme/directives/directives.module");
var traininglist_component_1 = require("./traininglist.component");
var training_component_1 = require("./training.component");
var trainer_component_1 = require("./trainer.component");
var trainee_component_1 = require("./trainee.component");
var trainingreport_component_1 = require("./trainingreport.component");
var trainerreport_component_1 = require("./trainerreport.component");
var userreport_component_1 = require("./userreport.component");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var primeng_1 = require("primeng/primeng");
exports.routes = [
    { path: '', component: training_component_1.TrainingComponent, pathMatch: 'full' },
    { path: 'list', component: traininglist_component_1.TrainingListComponent, data: { breadcrumb: 'List' } },
    { path: 'training', component: training_component_1.TrainingComponent, data: { breadcrumb: 'Training' } },
    { path: 'trainer', component: trainer_component_1.TrainerComponent, data: { breadcrumb: 'Trainer' } },
    { path: 'trainee', component: trainee_component_1.TraineeComponent, data: { breadcrumb: 'Trainee' } },
    { path: 'trainingreport', component: trainingreport_component_1.TrainingReportComponent, data: { breadcrumb: 'Training Report' } },
    { path: 'userreport', component: userreport_component_1.UserReportComponent, data: { breadcrumb: 'User Report' } },
    { path: 'trainerreport', component: trainerreport_component_1.TrainerReportComponent, data: { breadcrumb: 'Trainer Report' } },
    { path: ':id', component: training_component_1.TrainingComponent, data: { breadcrumb: 'Edit' } },
];
var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                directives_module_1.DirectivesModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                primeng_1.CalendarModule,
                primeng_1.SharedModule,
                primeng_1.DataTableModule,
                primeng_1.MultiSelectModule,
                primeng_1.CheckboxModule,
                primeng_1.InputTextareaModule,
                primeng_1.RatingModule,
                primeng_1.RadioButtonModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                traininglist_component_1.TrainingListComponent,
                training_component_1.TrainingComponent,
                trainer_component_1.TrainerComponent,
                trainee_component_1.TraineeComponent,
                trainingreport_component_1.TrainingReportComponent,
                trainerreport_component_1.TrainerReportComponent,
                userreport_component_1.UserReportComponent
            ]
        })
    ], TrainingModule);
    return TrainingModule;
}());
exports.TrainingModule = TrainingModule;
//# sourceMappingURL=training.module.js.map