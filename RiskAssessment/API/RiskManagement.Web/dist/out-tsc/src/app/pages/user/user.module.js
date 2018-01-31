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
var userlist_component_1 = require("./userlist.component");
var user_component_1 = require("./user.component");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var user_changepassword_component_1 = require("../user/user.changepassword.component");
var primeng_1 = require("primeng/primeng");
exports.routes = [
    { path: '', component: user_component_1.UserComponent, pathMatch: 'full' },
    { path: 'list', component: userlist_component_1.UserListComponent, data: { breadcrumb: 'User List' } },
    { path: 'user', component: user_component_1.UserComponent, data: { breadcrumb: 'User' } },
    { path: 'changepassword', component: user_changepassword_component_1.UserChangePasword, data: { breadcrumb: 'Change Password' } },
    { path: ':id/:orgid', component: user_component_1.UserComponent, data: { breadcrumb: 'Edit' } },
    { path: ':id', component: user_component_1.UserComponent, data: { breadcrumb: 'Edit' } },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
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
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                userlist_component_1.UserListComponent,
                user_component_1.UserComponent,
                user_changepassword_component_1.UserChangePasword
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map