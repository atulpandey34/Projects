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
var UserChangePasword = /** @class */ (function () {
    function UserChangePasword(_UserService, router, fb, _loginService) {
        this._UserService = _UserService;
        this.fb = fb;
        this._loginService = _loginService;
        this.router = router;
        this.form = this.fb.group({
            Password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)]),
            ConfirmPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), this.validateConfirmPassword.bind(this)]),
            OldPassword: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), this.validatePassword.bind(this)])
        });
    }
    UserChangePasword.prototype.ngOnInit = function () {
    };
    UserChangePasword.prototype.validateConfirmPassword = function (control) {
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
    UserChangePasword.prototype.onSubmit = function (values) {
        if (this.form.valid) {
            this._UserService.changePassword(this.form.value).subscribe(function (res) {
                if (res == "done")
                    alert("password changed successfully");
            });
        }
    };
    UserChangePasword.prototype.validatePassword = function (control) {
        var _this = this;
        var result = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._UserService.verifyPassword(control.value).subscribe(function (res) {
                if (res == false) {
                    result = true;
                    _this.form.controls["OldPassword"].setErrors({ remote: "Password doesn't match with old password." });
                }
            });
        }
        else
            result = null;
        return result ? { 'userName': { value: control.value } } : null;
    };
    UserChangePasword = __decorate([
        core_1.Component({
            selector: 'app-resetuserpassword',
            templateUrl: './user.changepassword.component.html',
            //styleUrls: ['./login.component.scss'],
            providers: [login_service_1.LoginService, user_service_1.UserService],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, forms_1.FormBuilder, login_service_1.LoginService])
    ], UserChangePasword);
    return UserChangePasword;
}());
exports.UserChangePasword = UserChangePasword;
//# sourceMappingURL=user.changepassword.component.js.map