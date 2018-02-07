import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { LoginService } from "../login/login.service";
import { ResetPassswordModel } from '../login/login.model';
import { UserService } from "../user/user.service";
import { UserViewModel, RoleViewModel, SecurityQuestionModel, OrgaizationViewModel } from '../user/user.model';

@Component({
    selector: 'app-resetpassword',
    templateUrl: './resetpassword.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService, UserService],
    encapsulation: ViewEncapsulation.None
})
export class ResetPasswordComponent implements OnInit {
    public router: Router;
    public form: FormGroup;
    securityQuestionList: SecurityQuestionModel[];
    securityQuestionList1: SecurityQuestionModel[];
    securityQuestionList2: SecurityQuestionModel[];

    constructor(private _UserService: UserService, router: Router, private fb: FormBuilder, private _loginService: LoginService) {
        this.router = router;
        this.form = this.fb.group({
            Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
            ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), this.validateConfirmPassword.bind(this)]),
            SecurityQuestion1: ['', Validators.compose([Validators.required])],
            SecurityAnswer1: ['', Validators.compose([Validators.required])],
            SecurityQuestion2: ['', Validators.compose([Validators.required])],
            SecurityAnswer2: ['', Validators.compose([Validators.required])],
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

    ngOnInit() {

        this._UserService.getSecurityQuestionList().subscribe((res: SecurityQuestionModel[]) => {
            this.securityQuestionList = res;
            this.securityQuestionList1 = res;
            this.securityQuestionList2 = res;
        });
    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this._loginService.resetPassword(this.form.value).subscribe((res: string) => {
                if (res == "Password updated successfully")
                    this.router.navigate(['pages/dashboard']);
            });
        }
    }
    SecurityQuestion1Changesd(questionId: number) {
        this.securityQuestionList2 = this.securityQuestionList;
        this.securityQuestionList2 = this.securityQuestionList2.filter(x => x.SecurityQuestionID != questionId);

    }
    SecurityQuestion2Changesd(questionId: number) {
        this.securityQuestionList1 = this.securityQuestionList;
        this.securityQuestionList1 = this.securityQuestionList1.filter(x => x.SecurityQuestionID != questionId);
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }

}



