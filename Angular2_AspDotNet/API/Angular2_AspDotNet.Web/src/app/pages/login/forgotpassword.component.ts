import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { LoginService } from "../login/login.service";
import { ResetPassswordModel, SecurityQustionOfUserModel } from '../login/login.model';
import { UserService } from "../user/user.service";
import { UserViewModel, RoleViewModel, SecurityQuestionModel, OrgaizationViewModel } from '../user/user.model';

@Component({
    selector: 'app-forgotpassword',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService, UserService],
    encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordComponent implements OnInit {
    public router: Router;
    public form: FormGroup;
    securityQuestionList: SecurityQuestionModel[];
    securityQuestionList1: SecurityQuestionModel[];
    securityQuestionList2: SecurityQuestionModel[];
    securityQuestion1: string='';
    securityQuestion2: string='';

    constructor(private _UserService: UserService, router: Router, private fb: FormBuilder, private _loginService: LoginService) {
        this.router = router;
        this.form = this.fb.group({
            UserName: new FormControl('', [Validators.required]),
            //SecurityQuestion1: ['', Validators.compose([Validators.required])],
            SecurityAnswer1: ['', Validators.compose([Validators.required])],
            //SecurityQuestion2: ['', Validators.compose([Validators.required])],
            SecurityAnswer2: ['', Validators.compose([Validators.required])],
        });

    }



    ngOnInit() {

        this._loginService.getSecurityQuestion().subscribe((res: SecurityQuestionModel[]) => {
            this.securityQuestionList = res;
            this.securityQuestionList1 = res;
            this.securityQuestionList2 = res;
        });

    }

    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this._loginService.forgotPassword(this.form.value).subscribe((res: string) => {
                if (res == "Password sent successfully")
                    this.router.navigate(['login']);
                else
                    alert("Invalid data");
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

    GetSecurityQuestions() {
        this._loginService.getSecurityQuestionOfUser(this.form.controls["UserName"].value).subscribe((res: SecurityQustionOfUserModel) => {
            this.securityQuestion1 = res.SecurityQuestion1;
            this.securityQuestion2 = res.SecurityQuestion2;
        });
    }
}



