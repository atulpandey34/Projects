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
var login_component_1 = require("./login.component");
var resetpassword_component_1 = require("./resetpassword.component");
var forgotpassword_component_1 = require("./forgotpassword.component");
exports.routes = [
    { path: '', component: login_component_1.LoginComponent, pathMatch: 'full' },
    { path: 'resetpassword', component: resetpassword_component_1.ResetPasswordComponent, data: { breadcrumb: 'Reset Password' } },
    { path: 'forgotpassword', component: forgotpassword_component_1.ForgotPasswordComponent, data: { breadcrumb: 'Forgot Password' } }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [login_component_1.LoginComponent, resetpassword_component_1.ResetPasswordComponent, forgotpassword_component_1.ForgotPasswordComponent]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map