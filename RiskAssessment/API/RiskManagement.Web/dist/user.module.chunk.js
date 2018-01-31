webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/pages/user/user.changepassword.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" novalidate (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\r\n    <div class=\"form-group\">\r\n        <label>Old Password </label>\r\n        <input formControlName=\"OldPassword\" class=\"form-control validation-field\" placeholder=\"Old  Password\" type=\"password\">\r\n        <small *ngIf=\"!form.controls.OldPassword.valid\" class=\"text-danger\">\r\n            Old Password is required.\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>New Password </label>\r\n        <input formControlName=\"Password\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\">\r\n        <small *ngIf=\"!form.controls.Password.valid\" class=\"text-danger\">\r\n            Password is required and minimum 8 characters.\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Confirm Password </label>\r\n        <input formControlName=\"ConfirmPassword\" class=\"form-control validation-field\" placeholder=\"Confirm Password\" type=\"password\">\r\n        <small *ngIf=\"!form.controls.ConfirmPassword.valid\" class=\"text-danger\">\r\n            Confirm Password is required and minimum 8 characters.\r\n        </small>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n        <button [disabled]=\"!form.valid\" class=\"btn btn-primary\" type=\"submit\">Set Password</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/user/user.changepassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserChangePasword; });
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





var UserChangePasword = /** @class */ (function () {
    function UserChangePasword(_UserService, router, fb, _loginService) {
        this._UserService = _UserService;
        this.fb = fb;
        this._loginService = _loginService;
        this.router = router;
        this.form = this.fb.group({
            Password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)]),
            ConfirmPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8), this.validateConfirmPassword.bind(this)]),
            OldPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8), this.validatePassword.bind(this)])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resetuserpassword',
            template: __webpack_require__("../../../../../src/app/pages/user/user.changepassword.component.html"),
            //styleUrls: ['./login.component.scss'],
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _d || Object])
    ], UserChangePasword);
    return UserChangePasword;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user.changepassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\r\n    <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"saveeventformdata(myForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label>User Name</label>\r\n            <input type=\"text\" formControlName=\"UserName\" class=\"form-control\">\r\n            <small *ngIf=\"!myForm.controls.UserName.valid\" class=\"text-danger\">\r\n                User Name is required and must be unique.\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>First Name</label>\r\n            <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\">\r\n            <small *ngIf=\"!myForm.controls.FirstName.valid\" class=\"text-danger\">\r\n                First Name is required .\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Last Name</label>\r\n            <input type=\"text\" formControlName=\"LastName\" class=\"form-control\">\r\n            <small *ngIf=\"!myForm.controls.LastName.valid\" class=\"text-danger\">\r\n                Last Name is required .\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" formControlName=\"EmailID\" class=\"form-control\">\r\n            <small *ngIf=\"!myForm.controls.EmailID.valid\" class=\"text-danger\">\r\n                Email is required and must be unique.\r\n            </small>\r\n        </div>\r\n        <div style=\"display:none;\" class=\"form-group\">\r\n            <label>Organization</label>\r\n            <select formControlName=\"OrganizationID\" class=\"form-control\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let subtitle of organizationList \"\r\n                        value={{subtitle.OrganizationID}}>\r\n                    {{subtitle.OrganizationName}}\r\n                </option>\r\n            </select>\r\n            <!--display error message if name is not valid-->\r\n            <small *ngIf=\"!myForm.controls.OrganizationID.valid\" class=\"text-danger\">\r\n                Organization is required .\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Role</label>\r\n            <ss-multiselect-dropdown [options]=\"multiroleList\" \r\n                                     [texts]=\"responsiblePersonTexts\" \r\n                                     [settings]=\"responsiblePersonSettings\" \r\n                                     formControlName=\"RoleList\">\r\n\r\n            </ss-multiselect-dropdown>\r\n            <!--display error message if name is not valid-->\r\n            <small *ngIf=\"!myForm.controls.RoleList.valid\" class=\"text-danger\">\r\n                Role is required .\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Security Question 1</label>\r\n            <select formControlName=\"SecurityQuestion1\" class=\"form-control\" (change)=\"SecurityQuestion1Changesd($event.target.value)\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let subtitle of securityQuestionList1 \"\r\n                        value={{subtitle.SecurityQuestionID}}>\r\n                    {{subtitle.Question}}\r\n                </option>\r\n            </select>\r\n            <!--display error message if name is not valid-->\r\n            <small *ngIf=\"!myForm.controls.SecurityQuestion1.valid\" class=\"text-danger\">\r\n                Security Question 1 is required .\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Security Answer 1</label>\r\n            <input type=\"text\" formControlName=\"SecurityAnswer1\" class=\"form-control\">\r\n            <small *ngIf=\"!myForm.controls.SecurityAnswer1.valid\" class=\"text-danger\">\r\n                Security Answer 1 is required.\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Security Question 2</label>\r\n            <select formControlName=\"SecurityQuestion2\" class=\"form-control\" (change)=\"SecurityQuestion2Changesd($event.target.value)\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let subtitle of securityQuestionList2 \"\r\n                        value={{subtitle.SecurityQuestionID}}>\r\n                    {{subtitle.Question}}\r\n                </option>\r\n            </select>\r\n            <!--display error message if name is not valid-->\r\n            <small *ngIf=\"!myForm.controls.SecurityQuestion2.valid\" class=\"text-danger\">\r\n                Security Question 2 is required .\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Security Answer 2</label>\r\n            <input type=\"text\" formControlName=\"SecurityAnswer2\" class=\"form-control\">\r\n            <small *ngIf=\"!myForm.controls.SecurityAnswer2.valid\" class=\"text-danger\">\r\n                Security Answer 2 is required.\r\n            </small>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Save</button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__ = __webpack_require__("../../../../../src/app/pages/eventactions/eventaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__ = __webpack_require__("../../../../../src/app/pages/meeting/meeting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_model__ = __webpack_require__("../../../../../src/app/pages/user/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserComponent = /** @class */ (function () {
    function UserComponent(_UserService, _meetingService, router, location, _fb, _dataService, route, _masterDataService) {
        this._UserService = _UserService;
        this._meetingService = _meetingService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.orgid = 0;
        this.multiroleList = [];
        this.responsiblePersonTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.responsiblePersonSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true,
            maxHeight: '300px'
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['id']; //log the value of id
            _this.orgid = params['orgid']; //log the value of organization id
        });
        this._UserService.getMultiSelectRoleList(this.orgid).subscribe(function (res) {
            _this.multiroleList = res;
        });
        this._UserService.getSecurityQuestionList().subscribe(function (res) {
            _this.securityQuestionList = res;
            _this.securityQuestionList1 = res;
            _this.securityQuestionList2 = res;
        });
        this._UserService.getOrganizationList().subscribe(function (res) {
            _this.organizationList = res;
        });
        var userModel = new __WEBPACK_IMPORTED_MODULE_9__user_user_model__["b" /* UserViewModel */]();
        userModel.OrganizationID = 1;
        this.addhtmltoform(userModel);
        if (this.userId > 0) {
            this._UserService.getSingleUser(this.userId).subscribe(function (res) {
                _this.addhtmltoform(res);
            });
        }
    };
    UserComponent.prototype.addhtmltoform = function (model) {
        this.myForm = this._fb.group({
            UserID: [model.UserID],
            UserName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](model.UserName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.validateDistinctUserName.bind(this)]),
            FirstName: [model.FirstName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            LastName: [model.LastName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            EmailID: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](model.EmailID, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email, this.validateDistinctEmail.bind(this)]),
            OrganizationID: [model.OrganizationID, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            RoleID: [1],
            RoleList: [model.RoleList, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            SecurityQuestion1: [model.SecurityQuestion1],
            SecurityAnswer2: [model.SecurityAnswer2],
            SecurityAnswer1: [model.SecurityAnswer1],
            SecurityQuestion2: [model.SecurityQuestion2],
            OverRideOrganizationId: [false]
        });
    };
    UserComponent.prototype.validateDistinctEmail = function (control) {
        var _this = this;
        var result = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._UserService.validateUserEmail(control.value, this.myForm.controls["UserID"].value).subscribe(function (res) {
                if (res == false) {
                    result = true;
                    _this.myForm.controls["EmailID"].setErrors({ remote: "Email already exists." });
                }
            });
        }
        else
            result = null;
        return result ? { 'email': { value: control.value } } : null;
    };
    UserComponent.prototype.validateDistinctUserName = function (control) {
        var _this = this;
        var result = null;
        if (control.value == null || control.value == "")
            result = true;
        else if (control.value != "") {
            this._UserService.validateUserName(control.value, this.myForm.controls["UserID"].value).subscribe(function (res) {
                if (res == false) {
                    result = true;
                    _this.myForm.controls["UserName"].setErrors({ remote: "UserName already exists." });
                }
            });
        }
        else
            result = null;
        return result ? { 'userName': { value: control.value } } : null;
    };
    UserComponent.prototype.saveeventformdata = function (data) {
        var _this = this;
        if (this.orgid > 0) {
            data.OverRideOrganizationId = true;
            data.OrganizationID = this.orgid;
        }
        this._UserService.saveUser(data).subscribe(function (res) {
            _this.router.navigate(['/pages/user/list']);
        });
    };
    UserComponent.prototype.SecurityQuestion1Changesd = function (questionId) {
        this.securityQuestionList2 = this.securityQuestionList;
        this.securityQuestionList2 = this.securityQuestionList2.filter(function (x) { return x.SecurityQuestionID != questionId; });
    };
    UserComponent.prototype.SecurityQuestion2Changesd = function (questionId) {
        this.securityQuestionList1 = this.securityQuestionList;
        this.securityQuestionList1 = this.securityQuestionList1.filter(function (x) { return x.SecurityQuestionID != questionId; });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meeting',
            template: __webpack_require__("../../../../../src/app/pages/user/user.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */], __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__["a" /* MeetingDataService */], __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__["a" /* MeetingDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__meeting_meeting_service__["a" /* MeetingDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _h || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userlist_component__ = __webpack_require__("../../../../../src/app/pages/user/userlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_component__ = __webpack_require__("../../../../../src/app/pages/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_changepassword_component__ = __webpack_require__("../../../../../src/app/pages/user/user.changepassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */], pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__userlist_component__["a" /* UserListComponent */], data: { breadcrumb: 'User List' } },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */], data: { breadcrumb: 'User' } },
    { path: 'changepassword', component: __WEBPACK_IMPORTED_MODULE_9__user_user_changepassword_component__["a" /* UserChangePasword */], data: { breadcrumb: 'Change Password' } },
    { path: ':id/:orgid', component: __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */], data: { breadcrumb: 'Edit' } },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */], data: { breadcrumb: 'Edit' } },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__userlist_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_user_changepassword_component__["a" /* UserChangePasword */]
            ]
        })
    ], UserModule);
    return UserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dataTable [value]=\"data\" [lazy]=\"true\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10,20,50]\"\r\n             #dt resizableColumns=\"true\" reorderableColumns=\"true\" [responsive]=\"true\" [totalRecords]=\"totalRecords\" (onLazyLoad)=\"loadCarsLazy($event)\">\r\n    <!--<p-footer></p-footer>-->\r\n    <p-column field=\"UserName\" header=\"User Name\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"FirstName\" header=\"First Name\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"LastName\" header=\"Last Name\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"EmailID\" header=\"Email\" [filter]=\"true\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"InActiveText\" [filter]=\"true\" header=\"Active\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"RoleName\" header=\"Role\" [filter]=\"false\" [sortable]=\"false\"></p-column>\r\n    <p-column styleClass=\"col-button\">\r\n        <ng-template pTemplate=\"header\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <button type=\"button\" pButton icon=\"fa-plus\"  (click)=\"redirectToNewPage()\" label=\"Add\"></button>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template let-meeting=\"rowData\" pTemplate=\"body\">\r\n            <button type=\"button\" title=\"Edit\" pButton (click)=\"redirectToEditPage(meeting)\" icon=\"fa fa-pencil-square-o\"></button>\r\n            <button type=\"button\" title=\"Cancel\" pButton (click)=\"deleteAction(meeting)\" icon=\"fa fa-trash-o\"></button>\r\n            <button type=\"button\" [hidden]=\"!isAdminUser\" title=\"Reset Password\" pButton (click)=\"resetPassword(meeting)\" icon=\"fa fa-key\"></button>\r\n            <button type=\"button\" [hidden]=\"!isAdminUser\" title=\"Inactive\" pButton (click)=\"inactiveUser(meeting)\" icon=\"fa fa-ban\"></button>\r\n        </ng-template>\r\n\r\n    </p-column>\r\n</p-dataTable>"

/***/ }),

/***/ "../../../../../src/app/pages/user/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__ = __webpack_require__("../../../../../src/app/pages/eventactions/eventaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__ = __webpack_require__("../../../../../src/app/pages/calendar/Mastereventdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_service__ = __webpack_require__("../../../../../src/app/pages/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserListComponent = /** @class */ (function () {
    function UserListComponent(_UserService, router, location, _fb, _dataService, route, _masterDataService) {
        this._UserService = _UserService;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this._dataService = _dataService;
        this.route = route;
        this._masterDataService = _masterDataService;
        this.isAdminUser = sessionStorage["RoleId"].indexOf(1) > -1 ? true : false;
        this.totalRecords = 0;
        this.pageNumber = 1;
        this.sortColumn = "UserName";
        this.sortOrder = "asc";
        this.pageSize = 10;
        this.organizationFilter = '';
        this.roleFilter = '';
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.loadCarsLazy = function (event) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        this.pageNumber = (event.first / event.rows) + 1;
        this.pageSize = event.rows;
        this.sortColumn = event.sortField;
        this.sortOrder = event.sortOrder == 1 ? "asc" : "desc";
        this.organizationFilter = event.filters.OrganizationName == undefined ? '' : event.filters.OrganizationName.value;
        this.roleFilter = event.filters.RoleName == undefined ? '' : event.filters.RoleName.value;
        this.userNameFilter = event.filters.UserName == undefined ? '' : event.filters.UserName.value;
        this.firstNameFilter = event.filters.FirstName == undefined ? '' : event.filters.FirstName.value;
        this.lastNameFilter = event.filters.LastName == undefined ? '' : event.filters.LastName.value;
        this.emailIdFilter = event.filters.EmailID == undefined ? '' : event.filters.EmailID.value;
        if (event.filters.InActiveText != undefined) {
            if (event.filters.InActiveText.value.toLocaleLowerCase() == "yes")
                this.inactiveFilter = true;
            else
                this.inactiveFilter = false;
        }
        else
            this.inactiveFilter = null;
        this.getList(this.pageNumber, this.pageSize, this.sortColumn, this.sortOrder, this.organizationFilter, this.roleFilter, this.userNameFilter, this.firstNameFilter, this.lastNameFilter, this.emailIdFilter, this.inactiveFilter);
    };
    UserListComponent.prototype.getList = function (pageNo, pageSize, sortColumn, sortOrder, organizationFilter, roleFilter, userName, firstName, lastName, emailId, inactiveFilter) {
        var _this = this;
        this._UserService.getAllUser(pageNo, pageSize, sortColumn, sortOrder, organizationFilter, roleFilter, userName, firstName, lastName, emailId, inactiveFilter)
            .subscribe(function (res) {
            _this.totalRecords = res.TotalRecords;
            _this.data = res.UserViewListModel;
        });
    };
    UserListComponent.prototype.redirectToEditPage = function (event) {
        this.router.navigate(['/pages/user/' + event.UserID]);
    };
    UserListComponent.prototype.deleteAction = function (event) {
        var _this = this;
        if (confirm("Are you sure want to delete this user ?")) {
            this._UserService.deleteUser(event.UserID).subscribe(function (res) {
                _this.getList(_this.pageNumber, _this.pageSize, _this.sortColumn, _this.sortOrder, _this.organizationFilter, _this.roleFilter, _this.userNameFilter, _this.firstNameFilter, _this.lastNameFilter, _this.emailIdFilter, _this.inactiveFilter);
            });
        }
    };
    UserListComponent.prototype.redirectToNewPage = function () {
        this.router.navigate(['/pages/user']);
    };
    UserListComponent.prototype.resetPassword = function (event) {
        if (confirm("Are you sure want to reset password for this user ?")) {
            this._UserService.resetPassword(event.UserID).subscribe();
        }
    };
    UserListComponent.prototype.inactiveUser = function (event) {
        var _this = this;
        if (confirm("Are you sure want to change status of this user ?")) {
            this._UserService.inactiveUser(event.UserID, !event.InActive).subscribe(function (res) { _this.getList(_this.pageNumber, _this.pageSize, _this.sortColumn, _this.sortOrder, _this.organizationFilter, _this.roleFilter, _this.userNameFilter, _this.firstNameFilter, _this.lastNameFilter, _this.emailIdFilter, _this.inactiveFilter); });
        }
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meetinglist',
            template: __webpack_require__("../../../../../src/app/pages/user/userlist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../primeng/resources/primeng.min.css"), __webpack_require__("../../../../primeng/resources/themes/omega/theme.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */], __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */], __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eventactions_eventaction_service__["a" /* EventActionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__calendar_Mastereventdata__["a" /* MasterEventDataService */]) === "function" && _g || Object])
    ], UserListComponent);
    return UserListComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=userlist.component.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map