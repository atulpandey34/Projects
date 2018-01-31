import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './resetpassword.component';
import { ForgotPasswordComponent } from './forgotpassword.component';

export const routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'resetpassword', component: ResetPasswordComponent, data: { breadcrumb: 'Reset Password' } },
    { path: 'forgotpassword', component: ForgotPasswordComponent, data: { breadcrumb: 'Forgot Password' } }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent, ResetPasswordComponent, ForgotPasswordComponent]
})

export class LoginModule { }