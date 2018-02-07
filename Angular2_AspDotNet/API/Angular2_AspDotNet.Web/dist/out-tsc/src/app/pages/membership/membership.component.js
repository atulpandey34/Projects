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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_toastr_1 = require("ngx-toastr");
var membership_model_1 = require("./membership.model");
var membership_service_1 = require("./membership.service");
var menu_service_1 = require("../../theme/components/menu/menu.service");
var MembershipComponent = /** @class */ (function () {
    function MembershipComponent(fb, toastrService, membershipService, menuService, modalService) {
        var _this = this;
        this.fb = fb;
        this.toastrService = toastrService;
        this.membershipService = membershipService;
        this.menuService = menuService;
        this.modalService = modalService;
        this.type = 'grid';
        this.genders = ['male', 'female'];
        this.menuSelectSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: true,
            showCheckAll: true,
            showUncheckAll: true
        };
        this.menuSelectTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'menu item selected',
            checkedPlural: 'menu items selected',
            searchPlaceholder: 'Find menu item...',
            defaultTitle: 'Select menu items for user',
            allSelected: 'All selected',
        };
        this.menuSelectOptions = [];
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.menuItems.forEach(function (item) {
            var menu = {
                id: item.id,
                name: item.title
            };
            _this.menuSelectOptions.push(menu);
        });
    }
    MembershipComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.form = this.fb.group({
            id: null,
            username: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            password: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            profile: this.fb.group({
                name: null,
                surname: null,
                birthday: null,
                gender: null,
                image: null
            }),
            work: this.fb.group({
                company: null,
                position: null,
                salary: null
            }),
            contacts: this.fb.group({
                email: null,
                phone: null,
                address: null
            }),
            social: this.fb.group({
                facebook: null,
                twitter: null,
                google: null
            }),
            settings: this.fb.group({
                isActive: null,
                isDeleted: null,
                registrationDate: null,
                joinedDate: null
            }),
            menuIds: null
        });
    };
    MembershipComponent.prototype.getUsers = function () {
        var _this = this;
        this.membershipService.getUsers().subscribe(function (users) {
            return _this.users = users;
        });
    };
    MembershipComponent.prototype.addUser = function (user) {
        var _this = this;
        this.membershipService.addUser(user).subscribe(function (user) {
            _this.getUsers();
        });
    };
    MembershipComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.membershipService.updateUser(user).subscribe(function (user) {
            _this.getUsers();
        });
    };
    MembershipComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.membershipService.deleteUser(user.id).subscribe(function (result) {
            return _this.getUsers();
        });
    };
    MembershipComponent.prototype.toggle = function (type) {
        this.type = type;
    };
    MembershipComponent.prototype.openMenuAssign = function (event) {
        var parent = event.target.parentNode;
        while (parent) {
            parent = parent.parentNode;
            if (parent.classList.contains('content')) {
                parent.classList.add('flipped');
                parent.parentNode.parentNode.classList.add('z-index-1');
                break;
            }
        }
    };
    MembershipComponent.prototype.closeMenuAssign = function (event) {
        var parent = event.target.parentNode;
        while (parent) {
            parent = parent.parentNode;
            if (parent.classList.contains('content')) {
                parent.classList.remove('flipped');
                parent.parentNode.parentNode.classList.remove('z-index-1');
                break;
            }
        }
    };
    MembershipComponent.prototype.assignMenuItemsToUser = function (user) {
        this.updateUser(user);
        sessionStorage.setItem('userMenuItems', JSON.stringify(user.menuIds));
        this.toastrService.success('Please, logout and login to see result.', 'Successfully assigned !');
    };
    MembershipComponent.prototype.openModal = function (modalContent, user) {
        var _this = this;
        if (user) {
            this.user = user;
            this.form.setValue(user);
            this.genderOption = user.profile.gender;
        }
        else {
            this.user = new membership_model_1.User();
            this.user.profile = new membership_model_1.UserProfile();
            this.user.work = new membership_model_1.UserWork();
            this.user.contacts = new membership_model_1.UserContacts();
            this.user.social = new membership_model_1.UserSocial();
            this.user.settings = new membership_model_1.UserSettings();
        }
        this.modalRef = this.modalService.open(modalContent, { container: '.app' });
        this.modalRef.result.then(function (result) {
            _this.form.reset();
            _this.genderOption = null;
        }, function (reason) {
            _this.form.reset();
            _this.genderOption = null;
        });
    };
    MembershipComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    MembershipComponent.prototype.onSubmit = function (user) {
        if (this.form.valid) {
            if (user.id) {
                this.updateUser(user);
            }
            else {
                this.addUser(user);
            }
            this.modalRef.close();
        }
    };
    MembershipComponent = __decorate([
        core_1.Component({
            selector: 'app-membership',
            templateUrl: './membership.component.html',
            styleUrls: ['./membership.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [membership_service_1.MembershipService, menu_service_1.MenuService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof ngx_toastr_1.ToastrService !== "undefined" && ngx_toastr_1.ToastrService) === "function" && _b || Object, membership_service_1.MembershipService,
            menu_service_1.MenuService, typeof (_c = typeof ng_bootstrap_1.NgbModal !== "undefined" && ng_bootstrap_1.NgbModal) === "function" && _c || Object])
    ], MembershipComponent);
    return MembershipComponent;
    var _a, _b, _c;
}());
exports.MembershipComponent = MembershipComponent;
//# sourceMappingURL=membership.component.js.map