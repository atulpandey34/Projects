import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { LoginService } from "../login/login.service";
import { LggedInUserModel } from '../login/login.model';
import { CookieService, CookieOptions } from 'ngx-cookie';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    public router: Router;
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public keepLogin: AbstractControl;
    cookieOptions: any;

    constructor(private _cookieService: CookieService, router: Router, fb: FormBuilder, private _loginService: LoginService) {
        this.router = router;
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            'keepLogin': [false]
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.keepLogin = this.form.controls['keepLogin'];
    }
    ngOnInit() {
        let token = sessionStorage["apiAuthToken"];
        if (token != undefined && token != null && token != "") {
            this.router.navigate(['pages/dashboard']);
        }
        else {
            var userName = this._cookieService.get("username");
            var password = this._cookieService.get("password");
            if (userName != undefined && userName != null && userName != "")
                this.loginEncryptedUser(userName, password);
        }
    }
    public onSubmit(values: Object): void {
        if (this.form.valid) {
            this.loginUser(this.form.controls['email'].value, this.form.controls['password'].value);

        }
    }
    loginUser(username: string, password: string) {
        this._loginService.loginUser(username, password).subscribe((res: LggedInUserModel) => {
            if (res.UserId > 0) {
                document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                sessionStorage["UserId"] = res.UserId;
                sessionStorage["apiAuthToken"] = res.Token;
                sessionStorage["RoleId"] = res.RoleList;
                if (this.form.controls['keepLogin'].value == true || this.form.controls['keepLogin'].value == "true") {
                    this.createCookie("username", res.UserName,7);
                    this.createCookie("password", res.Password,7);
                }
                if (res.IsNewUser == true) {
                    this.router.navigate(['login/resetpassword']);
                }
                else {
                    this.router.navigate(['pages/dashboard']);
                }
            }
            else {
                alert("Invalid Credentials.");
            }
        });
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
    RedirectToForgotPassword() {
        this.router.navigate(['login/forgotpassword']);
    }
    createCookie(name: string, value: string, days: number) {
        //this.cookieOptions.domain = window.location.hostname;
        //this.cookieOptions.expires = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
        //this.cookieOptions.httpOnly = true;
        //this.cookieOptions.path = window.location.pathname;
        //this.cookieOptions.secure = false;
        //this.cookieOptions.storeUnencoded = true;
        var expires = "";
        
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
        //this._cookieService.put(key, value);

    }
    loginEncryptedUser(username: string, password: string) {
        this._loginService.loginEncryptedUser(username, password).subscribe((res: LggedInUserModel) => {
            if (res.UserId > 0) {
                document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                
                sessionStorage["UserId"] = res.UserId;
                sessionStorage["apiAuthToken"] = res.Token;
                sessionStorage["RoleId"] = res.RoleList;
                

                this.createCookie("username", res.UserName, 7);
                this.createCookie("password", res.Password,7);

                if (res.IsNewUser == true) {
                    this.router.navigate(['login/resetpassword']);
                }
                else {
                    this.router.navigate(['pages/dashboard']);
                }
            }
            else {
                alert("Invalid Credentials.");
            }
        });
    }
}
