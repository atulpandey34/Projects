"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var login_service_1 = require("../login/login.service");
var ngx_cookie_1 = require("ngx-cookie");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_cookieService, router, fb, _loginService) {
        this._cookieService = _cookieService;
        this._loginService = _loginService;
        this.router = router;
        this.form = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            'keepLogin': [false]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.keepLogin = this.form.controls['keepLogin'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var token = sessionStorage["apiAuthToken"];
        if (token != undefined && token != null && token != "") {
            this.router.navigate(['pages/dashboard']);
        }
        else {
            var userName = this._cookieService.get("username");
            var password = this._cookieService.get("password");
            if (userName != undefined && userName != null && userName != "")
                this.loginEncryptedUser(userName, password);
        }
    };
    LoginComponent.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this.loginUser(this.form.controls['email'].value, this.form.controls['password'].value);
        }
    };
    LoginComponent.prototype.loginUser = function (username, password) {
        var _this = this;
        this._loginService.loginUser(username, password).subscribe(function (res) {
            if (res.UserId > 0) {
                document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                sessionStorage["UserId"] = res.UserId;
                sessionStorage["apiAuthToken"] = res.Token;
                sessionStorage["RoleId"] = res.RoleList;
                if (_this.form.controls['keepLogin'].value == true || _this.form.controls['keepLogin'].value == "true") {
                    _this.createCookie("username", res.UserName, 7);
                    _this.createCookie("password", res.Password, 7);
                }
                if (res.IsNewUser == true) {
                    _this.router.navigate(['login/resetpassword']);
                }
                else {
                    _this.router.navigate(['pages/dashboard']);
                }
            }
            else {
                alert("Invalid Credentials.");
            }
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    LoginComponent.prototype.RedirectToForgotPassword = function () {
        this.router.navigate(['login/forgotpassword']);
    };
    LoginComponent.prototype.createCookie = function (name, value, days) {
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
    };
    LoginComponent.prototype.loginEncryptedUser = function (username, password) {
        var _this = this;
        this._loginService.loginEncryptedUser(username, password).subscribe(function (res) {
            if (res.UserId > 0) {
                document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
                sessionStorage["UserId"] = res.UserId;
                sessionStorage["apiAuthToken"] = res.Token;
                sessionStorage["RoleId"] = res.RoleList;
                _this.createCookie("username", res.UserName, 7);
                _this.createCookie("password", res.Password, 7);
                if (res.IsNewUser == true) {
                    _this.router.navigate(['login/resetpassword']);
                }
                else {
                    _this.router.navigate(['pages/dashboard']);
                }
            }
            else {
                alert("Invalid Credentials.");
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
            providers: [login_service_1.LoginService],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ngx_cookie_1.CookieService, router_1.Router, forms_1.FormBuilder, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map