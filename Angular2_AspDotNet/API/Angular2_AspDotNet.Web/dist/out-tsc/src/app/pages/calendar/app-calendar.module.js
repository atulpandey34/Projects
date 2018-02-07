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
var angular_calendar_1 = require("angular-calendar");
var directives_module_1 = require("../../theme/directives/directives.module");
var app_calendar_component_1 = require("./app-calendar.component");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
exports.routes = [
    { path: '', component: app_calendar_component_1.AppCalendarComponent, pathMatch: 'full' }
];
var AppCalendarModule = /** @class */ (function () {
    function AppCalendarModule() {
    }
    AppCalendarModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_calendar_1.CalendarModule,
                directives_module_1.DirectivesModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                app_calendar_component_1.AppCalendarComponent
            ]
        })
    ], AppCalendarModule);
    return AppCalendarModule;
}());
exports.AppCalendarModule = AppCalendarModule;
//# sourceMappingURL=app-calendar.module.js.map