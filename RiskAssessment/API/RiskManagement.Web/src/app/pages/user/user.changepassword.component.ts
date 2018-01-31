
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { LoginService } from "../login/login.service";
import { ResetPassswordModel } from '../login/login.model';
import { UserService } from "../user/user.service";
import { UserViewModel, RoleViewModel, SecurityQuestionModel, OrgaizationViewModel } from '../user/user.model';

@Component({
    selector: 'app-resetuserpassword',
    templateUrl: './user.changepassword.component.html',
    //styleUrls: ['./login.component.scss'],
    providers: [LoginService, UserService],
    encapsulation: ViewEncapsulation.None
})

export class UserChangePasword implements OnInit {
    public router: Router;
    public form: FormGroup;
    ngOnInit() {
    }
    constructor(private _UserService: UserService, router: Router, private fb: FormBuilder, private _loginService: LoginService) {
        this.router = router;
        this.form = this.fb.group({
            Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
            ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), this.validateConfirmPassword.bind(this)]),
            OldPassword: new FormControl('', [Validators.required, Validators.minLength(8), this.validatePassword.bind(this)])
        });

    }
    validateConfirmPassword(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control != undefined) {
            if (control.value == null || control.value == "")
                result = true;
            if (this.form != undefined && this.form.controls["Password"].value != this.form.controls["ConfirmPassword"].value) {
                result = true;
                this.form.controls["Password"].updateValueAndValidity();
            }


        }
        return result ? { 'password': { value: "Invalid" } } : null;
    }
    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this._UserService.changePassword(this.form.value).subscribe((res: string) => {
                if (res == "done")
                    alert("password changed successfully");
            });
        }
    }

    validatePassword(control: AbstractControl): { [key: string]: any } {
        let result: boolean = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._UserService.verifyPassword(control.value).subscribe((res: boolean) => {
                if (res == false) {
                    result = true;
                    this.form.controls["OldPassword"].setErrors({ remote: "Password doesn't match with old password." });
                }
            });
        }
        else
            result = null;
        return result ? { 'userName': { value: control.value } } : null;
    }
}