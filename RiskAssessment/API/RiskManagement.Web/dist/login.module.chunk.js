webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/pages/login/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center w-100 h-100 login-container\">\r\n    <div class=\"col-xl-4 col-md-6 col-10\">\r\n        <div class=\"card border-0 box-shadow rounded-0\">\r\n            <!--<div class=\"card-header d-flex justify-content-center align-items-center border-0 box-shadow\">\r\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n            </div>-->\r\n            <div class=\"card-block text-center pb-1\">\r\n                <h2>Forgot Pasword</h2>\r\n                \r\n\r\n                <form [formGroup]=\"form\" novalidate (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>User Name </label>\r\n                        <input formControlName=\"UserName\" class=\"form-control validation-field\" (ngModelChange)=\"GetSecurityQuestions()\" placeholder=\"User Name\" type=\"text\">\r\n                        <small *ngIf=\"!form.controls.UserName.valid\" class=\"text-danger\">\r\n                            UserName is required.\r\n                        </small>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" *ngIf=\"securityQuestion1.length >0\">\r\n                        \r\n                        <label>{{securityQuestion1}}</label>\r\n                       \r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"securityQuestion1.length >0\">\r\n                        <label> Answer</label>\r\n                        <input type=\"text\" formControlName=\"SecurityAnswer1\" class=\"form-control  validation-field\">\r\n                        <small *ngIf=\"!form.controls.SecurityAnswer1.valid\" class=\"text-danger\">\r\n                            Security Answer  is required.\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"securityQuestion2.length >0\">\r\n                        \r\n                        \r\n                        <label>{{securityQuestion2}}</label>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"securityQuestion2.length >0\">\r\n                        <label> Answer </label>\r\n                        <input type=\"text\" formControlName=\"SecurityAnswer2\" class=\"form-control  validation-field\">\r\n                        <small *ngIf=\"!form.controls.SecurityAnswer2.valid\" class=\"text-danger\">\r\n                            Security Answer  is required.\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-block\" type=\"submit\">Save</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/pages/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(_UserService, router, fb, _loginService) {
        this._UserService = _UserService;
        this.fb = fb;
        this._loginService = _loginService;
        this.securityQuestion1 = '';
        this.securityQuestion2 = '';
        this.router = router;
        this.form = this.fb.group({
            UserName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]),
            //SecurityQuestion1: ['', Validators.compose([Validators.required])],
            SecurityAnswer1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            //SecurityQuestion2: ['', Validators.compose([Validators.required])],
            SecurityAnswer2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.getSecurityQuestion().subscribe(function (res) {
            _this.securityQuestionList = res;
            _this.securityQuestionList1 = res;
            _this.securityQuestionList2 = res;
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function (values) {
        var _this = this;
        if (this.form.valid) {
            this._loginService.forgotPassword(this.form.value).subscribe(function (res) {
                if (res == "Password sent successfully")
                    _this.router.navigate(['login']);
                else
                    alert("Invalid data");
            });
        }
    };
    ForgotPasswordComponent.prototype.SecurityQuestion1Changesd = function (questionId) {
        this.securityQuestionList2 = this.securityQuestionList;
        this.securityQuestionList2 = this.securityQuestionList2.filter(function (x) { return x.SecurityQuestionID != questionId; });
    };
    ForgotPasswordComponent.prototype.SecurityQuestion2Changesd = function (questionId) {
        this.securityQuestionList1 = this.securityQuestionList;
        this.securityQuestionList1 = this.securityQuestionList1.filter(function (x) { return x.SecurityQuestionID != questionId; });
    };
    ForgotPasswordComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    ForgotPasswordComponent.prototype.GetSecurityQuestions = function () {
        var _this = this;
        this._loginService.getSecurityQuestionOfUser(this.form.controls["UserName"].value).subscribe(function (res) {
            _this.securityQuestion1 = res.SecurityQuestion1;
            _this.securityQuestion2 = res.SecurityQuestion2;
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__("../../../../../src/app/pages/login/forgotpassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _d || Object])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center w-100 h-100 login-container\">\n    <div class=\"col-xl-4 col-md-6 col-10\">\n        <div class=\"card border-0 box-shadow rounded-0\">\n            <div class=\"card-header d-flex justify-content-center align-items-center border-0 box-shadow\">\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"card-block text-center pb-1\">\n                <h2>Member login</h2>\n                <a routerLink=\"/register\" class=\"transition\">Don't have an account? Sign up now!</a>\n\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\n                    <div class=\"form-group\">\n                        <input [formControl]=\"email\" class=\"form-control validation-field\" placeholder=\"User Name\" type=\"text\">                      \n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('required')\">Email is required</small>                              \n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('email')\">Invalid email address</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <input [formControl]=\"password\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\">\n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('required')\">Password is required</small>                              \n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"custom-control custom-checkbox\">\n                            <input class=\"custom-control-input checkbox-main\" [formControl]=\"keepLogin\" type=\"checkbox\">\n                            <span class=\"custom-control-indicator\"></span>\n                            <span class=\"custom-control-description align-middle\">Keep me signed in.</span>\n                        </label>\n                        <a class=\"transition pull-right\" (click)=\"RedirectToForgotPassword()\">Forgot password?</a>                     \n                    </div>\n                    <div class=\"form-group\">\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-block\" type=\"submit\">Sign in</button>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer text-center bg-transparent\">\n                <ul class=\"list-inline mb-0\">\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-facebook fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-twitter fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-google fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n       "

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n  position: absolute; }\n  .login-container .card .card-header {\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n    margin-top: -40px;\n    border-radius: 50%;\n    font-size: 36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/pages/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("../../../../ngx-cookie/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_cookieService, router, fb, _loginService) {
        this._cookieService = _cookieService;
        this._loginService = _loginService;
        this.router = router;
        this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)])],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resetpassword_component__ = __webpack_require__("../../../../../src/app/pages/login/resetpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgotpassword_component__ = __webpack_require__("../../../../../src/app/pages/login/forgotpassword.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_5__resetpassword_component__["a" /* ResetPasswordComponent */], data: { breadcrumb: 'Reset Password' } },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_6__forgotpassword_component__["a" /* ForgotPasswordComponent */], data: { breadcrumb: 'Forgot Password' } }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_5__resetpassword_component__["a" /* ResetPasswordComponent */], __WEBPACK_IMPORTED_MODULE_6__forgotpassword_component__["a" /* ForgotPasswordComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/resetpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center w-100 h-100 login-container\">\r\n    <div class=\"col-xl-4 col-md-6 col-10\">\r\n        <div class=\"card border-0 box-shadow rounded-0\">\r\n            <!--<div class=\"card-header d-flex justify-content-center align-items-center border-0 box-shadow\">\r\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\r\n            </div>-->\r\n            <div class=\"card-block text-center pb-1\">\r\n                <h2>Reset Pasword</h2>\r\n\r\n                <form [formGroup]=\"form\" novalidate (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>New Password </label>\r\n                        <input formControlName=\"Password\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\">\r\n                        <small *ngIf=\"!form.controls.Password.valid\" class=\"text-danger\">\r\n                            Password is required and minimum 8 characters.\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Confirm Password </label>\r\n                        <input formControlName=\"ConfirmPassword\" class=\"form-control validation-field\" placeholder=\"Confirm Password\" type=\"password\">\r\n                        <small *ngIf=\"!form.controls.ConfirmPassword.valid\" class=\"text-danger\">\r\n                            Confirm Password is required and minimum 8 characters.\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Security Question 1</label>\r\n                        <select formControlName=\"SecurityQuestion1\" class=\"form-control  validation-field\" (change)=\"SecurityQuestion1Changesd($event.target.value)\">\r\n                            <option value=\"\">--Select--</option>\r\n                            <option *ngFor=\"let subtitle of securityQuestionList1 \"\r\n                                    value={{subtitle.SecurityQuestionID}}>\r\n                                {{subtitle.Question}}\r\n                            </option>\r\n                        </select>\r\n                        <!--display error message if name is not valid-->\r\n                        <small *ngIf=\"!form.controls.SecurityQuestion1.valid\" class=\"text-danger\">\r\n                            Security Question 1 is required .\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Security Answer 1</label>\r\n                        <input type=\"text\" formControlName=\"SecurityAnswer1\" class=\"form-control  validation-field\">\r\n                        <small *ngIf=\"!form.controls.SecurityAnswer1.valid\" class=\"text-danger\">\r\n                            Security Answer 1 is required.\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Security Question 2</label>\r\n                        <select formControlName=\"SecurityQuestion2\" class=\"form-control  validation-field\" (change)=\"SecurityQuestion2Changesd($event.target.value)\">\r\n                            <option value=\"\">--Select--</option>\r\n                            <option *ngFor=\"let subtitle of securityQuestionList2 \"\r\n                                    value={{subtitle.SecurityQuestionID}}>\r\n                                {{subtitle.Question}}\r\n                            </option>\r\n                        </select>\r\n                        <small *ngIf=\"!form.controls.SecurityQuestion2.valid\" class=\"text-danger\">\r\n                            Security Answer 2 is required.\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Security Answer 2</label>\r\n                        <input type=\"text\" formControlName=\"SecurityAnswer2\" class=\"form-control  validation-field\">\r\n                        <small *ngIf=\"!form.controls.SecurityAnswer2.valid\" class=\"text-danger\">\r\n                            Security Answer 2 is required.\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-block\" type=\"submit\">Set Password</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/resetpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/pages/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_UserService, router, fb, _loginService) {
        this._UserService = _UserService;
        this.fb = fb;
        this._loginService = _loginService;
        this.router = router;
        this.form = this.fb.group({
            Password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)]),
            ConfirmPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8), this.validateConfirmPassword.bind(this)]),
            SecurityQuestion1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            SecurityAnswer1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            SecurityQuestion2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            SecurityAnswer2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
    }
    ResetPasswordComponent.prototype.validateConfirmPassword = function (control) {
        var result = null;
        if (control != undefined) {
            if (control.value == null || control.value == "")
                result = true;
            if (this.form != undefined && this.form.controls["Password"].value != this.form.controls["ConfirmPassword"].value) {
                result = true;
                this.form.controls["Password"].updateValueAndValidity();
            }
        }
        return result ? { 'password': { value: "Invalid" } } : null;
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._UserService.getSecurityQuestionList().subscribe(function (res) {
            _this.securityQuestionList = res;
            _this.securityQuestionList1 = res;
            _this.securityQuestionList2 = res;
        });
    };
    ResetPasswordComponent.prototype.onSubmit = function (values) {
        var _this = this;
        if (this.form.valid) {
            this._loginService.resetPassword(this.form.value).subscribe(function (res) {
                if (res == "Password updated successfully")
                    _this.router.navigate(['pages/dashboard']);
            });
        }
    };
    ResetPasswordComponent.prototype.SecurityQuestion1Changesd = function (questionId) {
        this.securityQuestionList2 = this.securityQuestionList;
        this.securityQuestionList2 = this.securityQuestionList2.filter(function (x) { return x.SecurityQuestionID != questionId; });
    };
    ResetPasswordComponent.prototype.SecurityQuestion2Changesd = function (questionId) {
        this.securityQuestionList1 = this.securityQuestionList;
        this.securityQuestionList1 = this.securityQuestionList1.filter(function (x) { return x.SecurityQuestionID != questionId; });
    };
    ResetPasswordComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__("../../../../../src/app/pages/login/resetpassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _d || Object])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=resetpassword.component.js.map

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map