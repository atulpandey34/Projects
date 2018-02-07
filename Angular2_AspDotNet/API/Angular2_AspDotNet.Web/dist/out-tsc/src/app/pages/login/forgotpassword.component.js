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
var user_service_1 = require("../user/user.service");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(_UserService, router, fb, _loginService) {
        this._UserService = _UserService;
        this.fb = fb;
        this._loginService = _loginService;
        this.securityQuestion1 = '';
        this.securityQuestion2 = '';
        this.router = router;
        this.form = this.fb.group({
            UserName: new forms_1.FormControl('', [forms_1.Validators.required]),
            //SecurityQuestion1: ['', Validators.compose([Validators.required])],
            SecurityAnswer1: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            //SecurityQuestion2: ['', Validators.compose([Validators.required])],
            SecurityAnswer2: ['', forms_1.Validators.compose([forms_1.Validators.required])],
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
        core_1.Component({
            selector: 'app-forgotpassword',
            templateUrl: './forgotpassword.component.html',
            styleUrls: ['./login.component.scss'],
            providers: [login_service_1.LoginService, user_service_1.UserService],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, login_service_1.LoginService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
    var _a, _b;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgotpassword.component.js.map