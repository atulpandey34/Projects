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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var eventaction_service_1 = require("../eventactions/eventaction.service");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var Mastereventdata_1 = require("../calendar/Mastereventdata");
var meeting_service_1 = require("../meeting/meeting.service");
var user_service_1 = require("../user/user.service");
var user_model_1 = require("../user/user.model");
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
        var userModel = new user_model_1.UserViewModel();
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
            UserName: new forms_1.FormControl(model.UserName, [forms_1.Validators.required, this.validateDistinctUserName.bind(this)]),
            FirstName: [model.FirstName, forms_1.Validators.required],
            LastName: [model.LastName, forms_1.Validators.required],
            EmailID: new forms_1.FormControl(model.EmailID, [forms_1.Validators.required, forms_1.Validators.email, this.validateDistinctEmail.bind(this)]),
            OrganizationID: [model.OrganizationID, forms_1.Validators.required],
            RoleID: [1],
            RoleList: [model.RoleList, forms_1.Validators.required],
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
        core_1.Component({
            selector: 'app-meeting',
            templateUrl: './user.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css"
            ],
            providers: [eventaction_service_1.EventActionService, Mastereventdata_1.MasterEventDataService, meeting_service_1.MeetingDataService, user_service_1.UserService],
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, meeting_service_1.MeetingDataService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, eventaction_service_1.EventActionService, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, Mastereventdata_1.MasterEventDataService])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c, _d;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map