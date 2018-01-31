webpackJsonp(["membership.module"],{

/***/ "../../../../../src/app/pages/membership/membership.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-1\">\r\n    <div class=\"col\">\r\n         <div class=\"form-group\">\r\n            <div class=\"input-group box-shadow\">\r\n                <div class=\"input-group-addon border-top-0 border-left-0 border-bottom-0 rounded-0\"><i class=\"fa fa-search\"></i></div>\r\n                <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search user by name...\" class=\"form-control border-0\">\r\n                <div (click)=\"openModal(modalContent, null)\" class=\"input-group-addon border-top-0 border-right-0 border-bottom-0\"><i class=\"fa fa-user-plus\"></i></div>\r\n                <div (click)=\"toggle('grid')\" class=\"input-group-addon border-top-0 border-right-0 border-bottom-0\"><i class=\"fa fa-th\"></i></div>\r\n                <div (click)=\"toggle('list')\" class=\"input-group-addon border-top-0 border-right-0 border-bottom-0 rounded-0\"><i class=\"fa fa-list\"></i></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='grid'\" class=\"row\">\r\n    <div *ngFor=\"let user of users | UserSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: p }; let i = index;\" class=\"col-xl-4 col-lg-6 mb-4\">\r\n        <div class=\"flip\">\r\n            <div class=\"content\">\r\n                <div class=\"front\">\r\n                    <div class=\"card border-0 box-shadow rounded-0\">\r\n                        <div class=\"card-header border-0 rounded-0 text-muted\">\r\n                            <h5 class=\"mb-0\">\r\n                                <i *ngIf=\"!user.settings.isDeleted\" class=\"fa fa-user mr-2\" [ngClass]=\"{ 'text-success': user.settings.isActive, \r\n                                                                        'text-inverse': !user.settings.isActive}\" placement=\"bottom\" [ngbTooltip]=\"(user.settings.isActive) ? 'active' : 'passive'\"></i>\r\n                                <i *ngIf=\"user.settings.isDeleted\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'deleted'\"></i>\r\n                                {{user.profile.name}} {{user.profile.surname}}\r\n                            </h5>\r\n                            <div class=\"widget-controls\"> \r\n                                <a (click)=\"openMenuAssign($event)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-bars\"></i></a> \r\n                                <a (click)=\"openModal(modalContent, user)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-pencil\"></i></a>             \r\n                                <a (click)=\"deleteUser(user)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-trash\"></i></a> \r\n                            </div>        \r\n                        </div>\r\n                        <div class=\"card-block pt-3\">\r\n                            \r\n                            <div class=\"media\">\r\n                                <div class=\"d-flex flex-column justify-content-center\">\r\n                                    <img *ngIf=\"user.profile.image\" class=\"rounded-circle\" [src]=\"user.profile.image\" width=\"80\">\r\n                                    <img *ngIf=\"!user.profile.image\" class=\"rounded-circle\" src=\"assets/img/users/default-user.jpg\" width=\"80\">\r\n                                    <ul class=\"list-inline mb-0 mt-1 mx-auto fs-12 text-gray\">\r\n                                        <li class=\"list-inline-item mr-0\">\r\n                                            <span class=\"fa-stack\">\r\n                                                <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                                                <i class=\"fa fa-facebook fa-stack-1x\"></i>\r\n                                            </span>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item mr-0\">\r\n                                            <span class=\"fa-stack\">\r\n                                                <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                                                <i class=\"fa fa-twitter fa-stack-1x\"></i>\r\n                                            </span>\r\n                                        </li>\r\n                                        <li class=\"list-inline-item mr-0\">\r\n                                            <span class=\"fa-stack\">\r\n                                                <i class=\"fa fa-square-o fa-stack-2x\"></i>\r\n                                                <i class=\"fa fa-google fa-stack-1x\"></i>\r\n                                            </span>\r\n                                        </li>                                \r\n                                    </ul>\r\n                                </div>                    \r\n                                <div class=\"media-body ml-3\">\r\n                                    <div class=\"row\">  \r\n                                        <div class=\"col-4 text-gray text-right pr-0 font-italic text-truncate\">company:</div>\r\n                                        <div class=\"col-8 pl-2 text-truncate\">{{user.work.company}}</div>                          \r\n                                        <div class=\"col-4 text-gray text-right pr-0 font-italic text-truncate\">position:</div>\r\n                                        <div class=\"col-8 pl-2 text-truncate\">{{user.work.position}}</div>\r\n                                        <div class=\"col-4 text-gray text-right pr-0 font-italic text-truncate\">username:</div>\r\n                                        <div class=\"col-8 pl-2 text-truncate\">{{user.username}}</div>\r\n                                        <div class=\"col-4 text-gray text-right pr-0 font-italic text-truncate\">email:</div>\r\n                                        <div class=\"col-8 pl-2 text-truncate\">{{user.contacts.email}}</div>\r\n                                        <div class=\"col-4 text-gray text-right pr-0 font-italic text-truncate\">joined:</div>\r\n                                        <div class=\"col-8 pl-2 text-truncate fs-12 pt-2p\">{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"back\">\r\n                    <div class=\"card border-0 box-shadow rounded-0\">\r\n                        <div class=\"card-header border-0 rounded-0 text-muted\">\r\n                            <h5 class=\"mb-0\">\r\n                                <i *ngIf=\"!user.settings.isDeleted\" class=\"fa fa-user mr-2\" [ngClass]=\"{ 'text-success': user.settings.isActive, \r\n                                                                        'text-inverse': !user.settings.isActive}\" placement=\"bottom\" [ngbTooltip]=\"(user.settings.isActive) ? 'active' : 'passive'\"></i>\r\n                                <i *ngIf=\"user.settings.isDeleted\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'deleted'\"></i>\r\n                                {{user.profile.name}} {{user.profile.surname}}\r\n                            </h5>\r\n                            <div class=\"widget-controls\"> \r\n                                <a (click)=\"closeMenuAssign($event)\" href=\"javascript:void(0);\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                            </div>        \r\n                        </div>\r\n                        <div class=\"card-block pt-3\">            \r\n                            <ss-multiselect-dropdown id=\"menuSelect{{user.id}}\"\r\n                                [options]=\"menuSelectOptions\" \r\n                                [texts]=\"menuSelectTexts\" \r\n                                [settings]=\"menuSelectSettings\"\r\n                                [(ngModel)]=\"user.menuIds\">\r\n                            </ss-multiselect-dropdown>\r\n                            <div class=\"w-100 text-center pt-3\">\r\n                                <button class=\"btn btn-success\" (click)=\"assignMenuItemsToUser(user)\"> Assign menu items to user </button>\r\n                                <p class=\"text-gray fs-13 mt-2\">Logout and login to see result.</p>\r\n                            </div>                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='list'\" class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"table-responsive bg-white box-shadow\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr> \r\n                        <th></th>\r\n                        <th>Full Name</th> \r\n                        <th>Company</th>                      \r\n                        <th>Position</th>                        \r\n                        <th>Username</th>\r\n                        <th>Email</th>\r\n                        <th>Status</th>\r\n                        <th>Joined</th>                        \r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let user of users | UserSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: p }\">                        \r\n                        <td class=\"align-middle\">\r\n                            <img *ngIf=\"user.profile.image\" class=\"rounded-circle\" [src]=\"user.profile.image\" width=\"40\">\r\n                            <img *ngIf=\"!user.profile.image\" class=\"rounded-circle\" src=\"assets/img/users/default-user.jpg\" width=\"40\">\r\n                        </td>\r\n                        <td class=\"align-middle text-truncate\">{{user.profile.name}} {{user.profile.surname}}</td>\r\n                        <td class=\"align-middle text-truncate\">{{user.work.company}}</td>\r\n                        <td class=\"align-middle text-truncate\">{{user.work.position}}</td>                        \r\n                        <td class=\"align-middle text-truncate\">{{user.username}}</td>\r\n                        <td class=\"align-middle text-truncate\">{{user.contacts.email}}</td>\r\n                        <td class=\"align-middle\">\r\n                            <i *ngIf=\"!user.settings.isDeleted\" class=\"fa fa-user mr-2\" [ngClass]=\"{ 'text-success': user.settings.isActive, \r\n                                                                                                     'text-inverse': !user.settings.isActive}\" placement=\"bottom\" [ngbTooltip]=\"(user.settings.isActive) ? 'active' : 'passive'\"></i>\r\n                            <i *ngIf=\"user.settings.isDeleted\" class=\"fa fa-user mr-2 text-danger\" placement=\"bottom\" [ngbTooltip]=\"'deleted'\"></i>\r\n                        </td>\r\n                        <td class=\"align-middle text-truncate\">{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</td>\r\n                        <td class=\"align-middle\">\r\n                            <div class=\"btn-group\" role=\"group\">\r\n                                <button class=\"btn btn-secondary btn-sm\" (click)=\"openModal(modalContent, user)\"><i class=\"fa fa-pencil\"></i></button>\r\n                                <button class=\"btn btn-secondary btn-sm\" (click)=\"deleteUser(user)\"><i class=\"fa fa-trash\"></i></button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"bg-white text-center\">\r\n            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\r\n        </div>        \r\n    </div>\r\n</div>\r\n\r\n<ng-template #modalContent>\r\n    <div class=\"modal-body bg-gray\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 vertical-tabs\">                \r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"row px-3\">\r\n                    <ul class=\"nav flex-column left col-3 border-0 rounded-0 mr-0 bg-light\">                    \r\n                        <img *ngIf=\"user.profile.image\" class=\"w-100\" [src]=\"user.profile.image\">\r\n                        <img *ngIf=\"!user.profile.image\" class=\"w-100\" src=\"assets/img/users/default-user.jpg\">                \r\n                        <li class=\"nav-item bg-light\">\r\n                            <a class=\"nav-link active\" href=\"#basic\" data-toggle=\"tab\">Basic</a>\r\n                        </li>\r\n                        <li class=\"nav-item bg-light\">\r\n                            <a class=\"nav-link\" href=\"#personal\" data-toggle=\"tab\">Personal</a>\r\n                        </li>                        \r\n                        <li class=\"nav-item bg-light\">\r\n                            <a class=\"nav-link\" href=\"#work\" data-toggle=\"tab\">Work</a>\r\n                        </li>\r\n                        <li class=\"nav-item bg-light\">\r\n                            <a class=\"nav-link\" href=\"#contacts\" data-toggle=\"tab\">Contacts</a>\r\n                        </li>\r\n                        <li class=\"nav-item bg-light\">\r\n                            <a class=\"nav-link\" href=\"#social\" data-toggle=\"tab\">Social life</a>\r\n                        </li>\r\n                        <li class=\"nav-item bg-light\">\r\n                            <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">Settings</a>\r\n                        </li>                 \r\n                    </ul>                    \r\n                    <div class=\"tab-content col-9 border-0\">\r\n                        <div class=\"tab-pane active\" id=\"basic\">                                                \r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Username</label>\r\n                                <input formControlName=\"username\" class=\"form-control validation-field\" type=\"text\">\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.username.touched && form.controls.username.errors?.required\">Username is required</small>                              \r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.username.touched && form.controls.username.errors?.minlength\">Username isn't long enough, minimum of 5 characters</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Password</label>\r\n                                <input formControlName=\"password\" class=\"form-control validation-field\" type=\"password\">\r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.password.touched && form.controls.password.errors?.required\">Password is required</small>                              \r\n                                <small class=\"text-danger\" *ngIf=\"form.controls.password.touched && form.controls.password.errors?.minlength\">Password isn't long enough, minimum of 6 characters</small>\r\n                            </div>                            \r\n                        </div>                  \r\n                        <div class=\"tab-pane\" id=\"personal\" formGroupName=\"profile\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Name</label>\r\n                                <input formControlName=\"name\" class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Surname</label>\r\n                                <input formControlName=\"surname\" class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Birthday</label>\r\n                                <div class=\"input-group\">\r\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" formControlName=\"birthday\" ngbDatepicker #birthdayDp=\"ngbDatepicker\">\r\n                                    <div class=\"input-group-addon\" (click)=\"birthdayDp.toggle()\" >\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray mr-2\">Gender</label>\r\n                                <label *ngFor=\"let gender of genders\" class=\"custom-control custom-radio\">\r\n                                    <input formControlName=\"gender\" type=\"radio\" class=\"custom-control-input radio-dark-gray\" [checked]=\"gender === genderOption\" [value]=\"gender\">\r\n                                    <span class=\"custom-control-indicator\"></span>\r\n                                    <span class=\"custom-control-description text-capitalize\"><i class=\"fa fa-{{gender}}\" aria-hidden=\"true\"></i></span>\r\n                                </label> \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Image</label>\r\n                                <input formControlName=\"image\" class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"work\" formGroupName=\"work\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Company</label>\r\n                                <input formControlName=\"company\" class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Position</label>\r\n                                <input formControlName=\"position\" class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Salary</label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-addon\">$</div>\r\n                                    <input formControlName=\"salary\" class=\"form-control\" type=\"text\">\r\n                                </div>                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"contacts\" formGroupName=\"contacts\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Email</label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-addon\"><i class=\"fa fa-envelope-o\"></i></div>\r\n                                    <input formControlName=\"email\" class=\"form-control\" type=\"text\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Phone</label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></div>\r\n                                    <input formControlName=\"phone\" class=\"form-control\" type=\"text\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Address</label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-addon\"><i class=\"fa fa-map-marker\"></i></div>\r\n                                    <input formControlName=\"address\" class=\"form-control\" type=\"text\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"social\" formGroupName=\"social\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Facebook</label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-addon\"><i class=\"fa fa-facebook\"></i></div>\r\n                                    <input formControlName=\"facebook\" class=\"form-control\" type=\"text\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Twitter</label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-addon\"><i class=\"fa fa-twitter\"></i></div>\r\n                                    <input formControlName=\"twitter\" class=\"form-control\" type=\"text\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"text-gray\">Google</label>\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-addon\"><i class=\"fa fa-google\"></i></div>\r\n                                    <input formControlName=\"google\" class=\"form-control\" type=\"text\">\r\n                                </div>\r\n                            </div>\r\n                        </div> \r\n                        <div class=\"tab-pane\" id=\"settings\" formGroupName=\"settings\">\r\n                            <div class=\"custom-controls-stacked\">\r\n                                <label class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" formControlName=\"isActive\" [value]=\"isActive\"/>\r\n                                    <span class=\"custom-control-indicator\"></span>\r\n                                    <span class=\"custom-control-description\">Active</span>\r\n                                </label>\r\n                                <label class=\"custom-control custom-checkbox\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" formControlName=\"isDeleted\" [value]=\"isDeleted\"/>\r\n                                    <span class=\"custom-control-indicator\"></span>\r\n                                    <span class=\"custom-control-description\">Deleted</span>\r\n                                </label>\r\n                            </div>\r\n                            <label *ngIf=\"user.id\"><span class=\"text-gray\">Registration date:</span> <i>{{user.settings.registrationDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i></label> \r\n                            <label *ngIf=\"user.id\"><span class=\"text-gray\">Last joined date:</span> <i>{{user.settings.joinedDate | date:\"dd MMMM, yyyy 'at' HH:mm\" }}</i> </label>     \r\n                        </div>           \r\n                    </div>\r\n                    <div class=\"col-12 bg-white text-center py-1\">\r\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-success\" type=\"submit\"><span *ngIf=\"!user.id\">Add</span><span *ngIf=\"user.id\">Update</span></button>\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Cancel</button>\r\n                    </div> \r\n                </form> \r\n            </div>\r\n        </div>    \r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/pages/membership/membership.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flip {\n  width: 100%;\n  height: 180px;\n  position: relative;\n  -webkit-perspective: 800px;\n  -o-perspective: 800px;\n  perspective: 800px; }\n  .flip .content {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    transition: -webkit-transform 0.6s;\n    transition: transform 0.6s;\n    transition: transform 0.6s, -webkit-transform 0.6s;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d; }\n    .flip .content div.front, .flip .content div.back {\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      z-index: 0;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden; }\n      .flip .content div.front .card, .flip .content div.back .card {\n        height: 180px; }\n    .flip .content div.back {\n      z-index: 1;\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n      .flip .content div.back .dropdown {\n        width: 100%; }\n        .flip .content div.back .dropdown .dropdown-menu {\n          width: 100%;\n          margin-top: -1px; }\n          .flip .content div.back .dropdown .dropdown-menu a {\n            color: #666; }\n            .flip .content div.back .dropdown .dropdown-menu a .fa-check {\n              color: #378D3B; }\n            .flip .content div.back .dropdown .dropdown-menu a .fa-times {\n              color: #D22E2E; }\n    .flip .content.flipped {\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n\n.z-index-1 {\n  z-index: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/membership/membership.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__membership_model__ = __webpack_require__("../../../../../src/app/pages/membership/membership.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__membership_service__ = __webpack_require__("../../../../../src/app/pages/membership/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_components_menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
            username: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5)])],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)])],
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
            this.user = new __WEBPACK_IMPORTED_MODULE_4__membership_model__["a" /* User */]();
            this.user.profile = new __WEBPACK_IMPORTED_MODULE_4__membership_model__["c" /* UserProfile */]();
            this.user.work = new __WEBPACK_IMPORTED_MODULE_4__membership_model__["f" /* UserWork */]();
            this.user.contacts = new __WEBPACK_IMPORTED_MODULE_4__membership_model__["b" /* UserContacts */]();
            this.user.social = new __WEBPACK_IMPORTED_MODULE_4__membership_model__["e" /* UserSocial */]();
            this.user.settings = new __WEBPACK_IMPORTED_MODULE_4__membership_model__["d" /* UserSettings */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-membership',
            template: __webpack_require__("../../../../../src/app/pages/membership/membership.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/membership/membership.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_5__membership_service__["a" /* MembershipService */], __WEBPACK_IMPORTED_MODULE_6__theme_components_menu_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__membership_service__["a" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__membership_service__["a" /* MembershipService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__theme_components_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__theme_components_menu_menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _e || Object])
    ], MembershipComponent);
    return MembershipComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=membership.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/membership/membership.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipData; });
var MembershipData = /** @class */ (function () {
    function MembershipData() {
    }
    MembershipData.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                profile: {
                    name: "Ashley",
                    surname: "Ahlberg",
                    birthday: { day: 29, month: 3, year: 1981 },
                    gender: "female",
                    image: "assets/img/profile/ashley.jpg"
                },
                work: {
                    company: "Google",
                    position: "Product designer",
                    salary: 5000
                },
                contacts: {
                    email: "ashley@gmail.com",
                    phone: "(202) 756-9756",
                    address: "Washington"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-10-13T12:20:40.511Z",
                    joinedDate: "2017-04-21T18:25:43.511Z"
                },
                menuIds: []
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                profile: {
                    name: "Bruno",
                    surname: "Vespa",
                    birthday: { day: 20, month: 11, year: 1992 },
                    gender: "male",
                    image: "assets/img/profile/bruno.jpg"
                },
                work: {
                    company: "Dell EMC",
                    position: "Sale manager",
                    salary: 17000
                },
                contacts: {
                    email: "bruno@dell.com",
                    phone: "(415) 231-0332",
                    address: "San Francisco"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-05-20T18:25:43.511Z"
                },
                menuIds: []
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                profile: {
                    name: "Andy",
                    surname: "Warhol",
                    birthday: { day: 21, month: 10, year: 1979 },
                    gender: "male",
                    image: "assets/img/avatars/avatar-3.png"
                },
                work: {
                    company: "Adecco",
                    position: "Product manager",
                    salary: 13000
                },
                contacts: {
                    email: "andy@adecco.com",
                    phone: "(212) 457-2308",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: true,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-06-28T15:25:43.511Z"
                },
                menuIds: []
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                profile: {
                    name: "Julia",
                    surname: "Aniston",
                    birthday: { day: 18, month: 6, year: 1982 },
                    gender: "female",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Apple",
                    position: "Sales manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@apple.com",
                    phone: "(224) 267-1346",
                    address: "Illinois, Chicago"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                },
                menuIds: []
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                profile: {
                    name: "Lusia",
                    surname: "Manuel",
                    birthday: { day: 2, month: 12, year: 1992 },
                    gender: "female",
                    image: "assets/img/avatars/avatar-7.png"
                },
                work: {
                    company: "Alphabet",
                    position: "Office manager",
                    salary: 10000
                },
                contacts: {
                    email: "lusia@alphabet.com",
                    phone: "(224) 267-1346",
                    address: "California, Los Angeles"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-06-28T12:20:40.511Z"
                },
                menuIds: []
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                profile: {
                    name: "Adam",
                    surname: "Sandler",
                    birthday: { day: 24, month: 12, year: 1987 },
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "General Electric",
                    position: "Product manager",
                    salary: 21000
                },
                contacts: {
                    email: "adam@gen-el.com",
                    phone: "(224) 267-1346",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-06-27T14:20:40.511Z"
                },
                menuIds: []
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                profile: {
                    name: "Tereza",
                    surname: "Stiles",
                    birthday: { day: 9, month: 7, year: 1979 },
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Southwest Airlines",
                    position: "Sale manager",
                    salary: 31000
                },
                contacts: {
                    email: "tereza@airlines.com",
                    phone: "(214) 617-2614",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-06-29T15:20:40.511Z"
                },
                menuIds: []
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                profile: {
                    name: "Michael",
                    surname: "Blair",
                    birthday: { day: 15, month: 11, year: 1978 },
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "Microsoft",
                    position: "Software developer",
                    salary: 50000
                },
                contacts: {
                    email: "michael@microsoft.com",
                    phone: "(267) 388-1637",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-06-30T11:30:40.511Z"
                },
                menuIds: []
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                profile: {
                    name: "Michelle",
                    surname: "Ormond",
                    birthday: { day: 18, month: 11, year: 1981 },
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "Starbucks",
                    position: "Sale manager",
                    salary: 15000
                },
                contacts: {
                    email: "michelle@starbucks.com",
                    phone: "(267) 388-1637",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: true,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-03-29T17:20:40.511Z"
                },
                menuIds: []
            }
        ];
        return { users: users };
    };
    return MembershipData;
}());

//# sourceMappingURL=membership.data.js.map

/***/ }),

/***/ "../../../../../src/app/pages/membership/membership.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UserWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UserSocial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UserSettings; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());

var UserWork = /** @class */ (function () {
    function UserWork() {
    }
    return UserWork;
}());

var UserContacts = /** @class */ (function () {
    function UserContacts() {
    }
    return UserContacts;
}());

var UserSocial = /** @class */ (function () {
    function UserSocial() {
    }
    return UserSocial;
}());

var UserSettings = /** @class */ (function () {
    function UserSettings() {
    }
    return UserSettings;
}());

// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();
// export const users: User[] = [
//   {
//     id: 1,
//     username: "pretty",
//     password: "pretty123",
//     profile: {
//       name: "Ashley",
//       surname: "Ahlberg",
//       birthday: { day: 29, month: 3, year: 1981 },
//       gender: "female",
//       image: "assets/img/profile/ashley.jpg"
//     },
//     work: {
//       company: "Google",
//       position: "Product designer",
//       salary: 5000
//     },
//     contacts:{
//       email: "ashley@gmail.com",
//       phone: "(202) 756-9756",
//       address: "Washington"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: true,
//       isDeleted: false,
//       registrationDate: new Date(year-1, month, day-2, hour, minute),
//       joinedDate: new Date(year, month, day-1, hour, minute)
//     } 
//   },
//   {
//     id: 2,
//     username: "bruno.V",
//     password: "bruno123",
//     profile: {
//       name: "Bruno",
//       surname: "Vespa",
//       birthday: { day: 20, month: 11, year: 1992 },
//       gender: "male",
//       image: "assets/img/profile/bruno.jpg"
//     },
//     work: {
//       company: "Dell EMC",
//       position: "Sale manager",
//       salary: 17000
//     },
//     contacts:{
//       email: "bruno@dell.com",
//       phone: "(415) 231-0332",
//       address: "San Francisco"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: false,
//       isDeleted: false,
//       registrationDate:  new Date(year-3, month-2, day-8, hour, minute),
//       joinedDate:  new Date(year, month, day, hour-2, minute)
//     } 
//   },
//   {
//     id: 3,
//     username: "andy.79",
//     password: "andy123",
//     profile: {
//       name: "Andy",
//       surname: "Warhol",
//       birthday: { day: 21, month: 10, year: 1979 },
//       gender: "male",
//       image: "assets/img/avatars/avatar-3.png"
//     },
//     work: {
//       company: "Adecco",
//       position: "Product manager",
//       salary: 13000
//     },
//     contacts:{
//       email: "andy@adecco.com",
//       phone: "(212) 457-2308",
//       address: "New York"
//     },
//     social: {
//       facebook:"",
//       twitter:"",
//       google:""
//     },
//     settings:{
//       isActive: true,
//       isDeleted: true,
//       registrationDate:  new Date(year-4, month-2, day-3, hour, minute),
//       joinedDate:  new Date(year, month, day, hour-6, minute)
//     } 
//   }
// ]
//# sourceMappingURL=membership.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/membership/membership.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipModule", function() { return MembershipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__membership_component__ = __webpack_require__("../../../../../src/app/pages/membership/membership.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__membership_data__ = __webpack_require__("../../../../../src/app/pages/membership/membership.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__membership_component__["a" /* MembershipComponent */], pathMatch: 'full' }
];
var MembershipModule = /** @class */ (function () {
    function MembershipModule() {
    }
    MembershipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__membership_data__["a" /* MembershipData */], { delay: 0 }),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_9__theme_pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__membership_component__["a" /* MembershipComponent */]
            ]
        })
    ], MembershipModule);
    return MembershipModule;
}());

//# sourceMappingURL=membership.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/membership/membership.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembershipService = /** @class */ (function () {
    function MembershipService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* RequestOptions */]({ headers: this.headers });
        this.url = "api/users";
    }
    MembershipService.prototype.getUsers = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.addUser = function (user) {
        return this.http.post(this.url, user, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.updateUser = function (user) {
        return this.http.put(this.url + "/" + user.id, user, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    MembershipService.prototype.extractData = function (res) {
        var body = res.json();
        if (body)
            return body.data || {};
        else
            return null;
    };
    MembershipService.prototype.handleError = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.message || error);
    };
    MembershipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], MembershipService);
    return MembershipService;
    var _a;
}());

//# sourceMappingURL=membership.service.js.map

/***/ }),

/***/ "../../../../angular-in-memory-web-api/http-status-codes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STATUS_CODE_INFO; });
var STATUS = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANTENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    UPGRADE_REQUIRED: 426,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    PROCESSING: 102,
    MULTI_STATUS: 207,
    IM_USED: 226,
    PERMANENT_REDIRECT: 308,
    UNPROCESSABLE_ENTRY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
/*tslint:disable:quotemark max-line-length one-line */
var STATUS_CODE_INFO = {
    '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
    },
    '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
    },
    '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
    },
    '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
    },
    '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
    },
    '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
    },
    '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
    },
    '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
    },
    '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
    },
    '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
    },
    '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
    },
    '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
    },
    '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
    },
    '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
    },
    '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
    },
    '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
    },
    '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
    },
    '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
    }
};
//# sourceMappingURL=http-status-codes.js.map

/***/ }),

/***/ "../../../../angular-in-memory-web-api/in-memory-backend.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createErrorResponse */
/* unused harmony export createObservableResponse */
/* unused harmony export emitResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InMemoryDbService; });
/* unused harmony export InMemoryBackendConfigArgs */
/* unused harmony export removeTrailingSlash */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryBackendConfig; });
/* unused harmony export isSuccess */
/* unused harmony export setStatusText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InMemoryBackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_status_codes__ = __webpack_require__("../../../../angular-in-memory-web-api/http-status-codes.js");





////////////  HELPERS ///////////
/**
 * Create an error Response from an HTTP status code and error message
 */
function createErrorResponse(req, status, message) {
    return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({
        body: { 'error': "" + message },
        url: req.url,
        headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }),
        status: status
    });
}
/**
 * Create an Observable response from response options.
 */
function createObservableResponse(req, resOptions) {
    return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
        emitResponse(responseObserver, req, resOptions);
        return function () { }; // unsubscribe function
    });
}
/**
 * Create a response from response options
 * and tell "ResponseObserver" (an `Observer<Response>`) to emit it.
 * The observer's observable is either completed or in error state after call.
 */
function emitResponse(responseObserver, req, resOptions) {
    resOptions.url = resOptions.url || req.url; // make sure url is set
    resOptions = setStatusText(resOptions);
    var res = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* Response */](resOptions);
    if (isSuccess(res.status)) {
        responseObserver.next(res);
        responseObserver.complete();
    }
    else {
        responseObserver.error(res);
    }
}
/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/
var InMemoryDbService = (function () {
    function InMemoryDbService() {
    }
    return InMemoryDbService;
}());
/**
* Interface for InMemoryBackend configuration options
*/
var InMemoryBackendConfigArgs = (function () {
    function InMemoryBackendConfigArgs() {
    }
    return InMemoryBackendConfigArgs;
}());
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}
/////////////////////////////////
/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/
var InMemoryBackendConfig = (function () {
    function InMemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            // default config:
            caseSensitiveSearch: false,
            defaultResponseOptions: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseResponseOptions */](),
            delay: 500,
            delete404: false,
            passThruUnknownUrl: false,
            post204: true,
            put204: true,
            apiBase: undefined,
            host: undefined,
            rootPath: undefined // default value is actually set in InMemoryBackendService ctor
        }, config);
    }
    InMemoryBackendConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    InMemoryBackendConfig.ctorParameters = function () { return [
        { type: InMemoryBackendConfigArgs, },
    ]; };
    return InMemoryBackendConfig;
}());
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
function isSuccess(status) { return status >= 200 && status < 300; }
;
/**
 * Set the status text in a response:
 */
function setStatusText(options) {
    try {
        var statusCode = __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["b" /* STATUS_CODE_INFO */][options.status];
        options['statusText'] = statusCode ? statusCode.text : 'Unknown Status';
        return options;
    }
    catch (err) {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({
            status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].INTERNAL_SERVER_ERROR,
            statusText: 'Invalid Server Operation'
        });
    }
}
////////////  InMemoryBackendService ///////////
/**
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected InMemoryDataService service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create `InMemoryDataService` class that implements `InMemoryDataService`.
 * Call `forRoot` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpModule }           from '@angular/http';
 * import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    InMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
var InMemoryBackendService = (function () {
    function InMemoryBackendService(injector, inMemDbService, config) {
        this.injector = injector;
        this.inMemDbService = inMemDbService;
        this.config = new InMemoryBackendConfig();
        this.resetDb();
        var loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host
        this.config.rootPath = loc.pathname; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config || {});
        this.setPassThruBackend();
    }
    InMemoryBackendService.prototype.createConnection = function (req) {
        var response;
        try {
            response = this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var options = createErrorResponse(req, __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].INTERNAL_SERVER_ERROR, "" + err);
            response = this.addDelay(createObservableResponse(req, options));
        }
        return {
            readyState: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ReadyState */].Done,
            request: req,
            response: response
        };
    };
    ////  protected /////
    /**
     * Process Request and return an Observable of Http Response object
     * in the manner of a RESTy web api.
     *
     * Expect URI pattern in the form :base/:collectionName/:id?
     * Examples:
     *   // for store with a 'customers' collection
     *   GET api/customers          // all customers
     *   GET api/customers/42       // the character with id=42
     *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
     *   GET api/customers.json/42  // ignores the ".json"
     *
     * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
     * Examples:
     *     POST commands/resetDb,
     *     GET/POST commands/config - get or (re)set the config
     *
     *   HTTP overrides:
     *     If the injected inMemDbService defines an HTTP method (lowercase)
     *     The request is forwarded to that method as in
     *     `inMemDbService.get(httpMethodInterceptorArgs)`
     *     which must return an `Observable<Response>`
     */
    InMemoryBackendService.prototype.handleRequest = function (req) {
        var parsed = this.inMemDbService['parseUrl'] ?
            // parse with override method
            this.inMemDbService['parseUrl'](req.url) :
            // parse with default url parser
            this.parseUrl(req.url);
        var base = parsed.base, collectionName = parsed.collectionName, id = parsed.id, query = parsed.query, resourceUrl = parsed.resourceUrl;
        var collection = this.db[collectionName];
        var reqInfo = {
            req: req,
            base: base,
            collection: collection,
            collectionName: collectionName,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, id),
            query: query,
            resourceUrl: resourceUrl
        };
        var reqMethodName = __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */][req.method || 0].toLowerCase();
        var resOptions;
        if (/commands\/$/i.test(reqInfo.base)) {
            return this.commands(reqInfo);
        }
        else if (this.inMemDbService[reqMethodName]) {
            // InMemoryDbService has an overriding interceptor for this HTTP method; call it
            // The interceptor result must be an Observable<Response>
            var interceptorArgs = {
                requestInfo: reqInfo,
                db: this.db,
                config: this.config,
                passThruBackend: this.passThruBackend
            };
            var interceptorResponse = this.inMemDbService[reqMethodName](interceptorArgs);
            return this.addDelay(interceptorResponse);
        }
        else if (reqInfo.collection) {
            // request is for a collection created by the InMemoryDbService
            return this.addDelay(this.collectionHandler(reqInfo));
        }
        else if (this.passThruBackend) {
            // Passes request thru to a "real" backend which returns an Observable<Response>
            // BAIL OUT with this Observable<Response>
            return this.passThruBackend.createConnection(req).response;
        }
        else {
            // can't handle this request
            resOptions = createErrorResponse(req, __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NOT_FOUND, "Collection '" + collectionName + "' not found");
            return this.addDelay(createObservableResponse(req, resOptions));
        }
    };
    /**
     * Add configured delay to response observable unless delay === 0
     */
    InMemoryBackendService.prototype.addDelay = function (response) {
        var delay = this.config.delay;
        return delay === 0 ? response : response.delay(delay || 500);
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    InMemoryBackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.paramsMap.forEach(function (value, name) {
            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), caseSensitive) }); });
        });
        var len = conditions.length;
        if (!len) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(function (row) {
            var ok = true;
            var i = len;
            while (ok && i) {
                i -= 1;
                var cond = conditions[i];
                ok = cond.rx.test(row[cond.name]);
            }
            return ok;
        });
    };
    InMemoryBackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    InMemoryBackendService.prototype.collectionHandler = function (reqInfo) {
        var _this = this;
        var req = reqInfo.req;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            var resOptions;
            switch (req.method) {
                case __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get:
                    resOptions = _this.get(reqInfo);
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Post:
                    resOptions = _this.post(reqInfo);
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Put:
                    resOptions = _this.put(reqInfo);
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Delete:
                    resOptions = _this.delete(reqInfo);
                    break;
                default:
                    resOptions = createErrorResponse(req, __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].METHOD_NOT_ALLOWED, 'Method not allowed');
                    break;
            }
            // If `inMemDbService.responseInterceptor` exists, let it morph the response options
            if (_this.inMemDbService['responseInterceptor']) {
                resOptions = _this.inMemDbService['responseInterceptor'](resOptions, reqInfo);
            }
            emitResponse(responseObserver, reqInfo.req, resOptions);
            return function () { }; // unsubscribe function
        });
    };
    /**
     * When the last segment of the `base` path is "commands", the `collectionName` is the command
     * Example URLs:
     *   commands/resetdb   // Reset the "database" to its original state
     *   commands/config (GET) // Return this service's config object
     *   commands/config (!GET) // Update the config (e.g. delay)
     *
     * Commands are "hot", meaning they are always executed immediately
     * whether or not someone subscribes to the returned observable
     *
     * Usage:
     *   http.post('commands/resetdb', undefined);
     *   http.get('commands/config');
     *   http.post('commands/config', '{"delay":1000}');
     */
    InMemoryBackendService.prototype.commands = function (reqInfo) {
        var command = reqInfo.collectionName.toLowerCase();
        var method = reqInfo.req.method;
        var resOptions;
        switch (command) {
            case 'resetdb':
                this.resetDb();
                resOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({ status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].OK });
                break;
            case 'config':
                if (method === __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestMethod */].Get) {
                    resOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({
                        body: this.clone(this.config),
                        status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].OK
                    });
                }
                else {
                    // Be nice ... any other method is a config update
                    var body = JSON.parse(reqInfo.req.text() || '{}');
                    Object.assign(this.config, body);
                    this.setPassThruBackend();
                    resOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({ status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NO_CONTENT });
                }
                break;
            default:
                resOptions = createErrorResponse(reqInfo.req, __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return createObservableResponse(reqInfo.req, resOptions);
    };
    InMemoryBackendService.prototype.delete = function (_a) {
        var id = _a.id, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, req = _a.req;
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return createErrorResponse(req, __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        var exists = this.removeById(collection, id);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({
            headers: headers,
            status: (exists || !this.config.delete404) ? __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NO_CONTENT : __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NOT_FOUND
        });
    };
    InMemoryBackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) { return item.id === id; });
    };
    InMemoryBackendService.prototype.genId = function (collection) {
        // assumes numeric ids
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
    };
    InMemoryBackendService.prototype.get = function (_a) {
        var id = _a.id, query = _a.query, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, req = _a.req;
        var data = collection;
        // tslint:disable-next-line:triple-equals
        if (id != undefined && id !== '') {
            data = this.findById(collection, id);
        }
        else if (query) {
            data = this.applyQuery(collection, query);
        }
        if (!data) {
            return createErrorResponse(req, __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({
            body: { data: this.clone(data) },
            headers: headers,
            status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].OK
        });
    };
    InMemoryBackendService.prototype.getLocation = function (href) {
        if (!href.startsWith('http')) {
            // get the document iff running in browser
            var doc = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
            href = href.startsWith('/') ? base + href : base + '/' + href;
        }
        var uri = this.parseuri(href);
        var loc = {
            host: uri.host,
            protocol: uri.protocol,
            port: uri.port,
            pathname: uri.path,
            search: uri.query ? '?' + uri.query : ''
        };
        return loc;
    };
    ;
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    InMemoryBackendService.prototype.parseuri = function (str) {
        // tslint:disable-next-line:max-line-length
        var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port',
            'relative', 'path', 'directory', 'file', 'query', 'anchor'];
        var m = URL_REGEX.exec(str);
        var uri = {};
        var i = 14;
        while (i--) {
            uri[key[i]] = m[i] || '';
        }
        return uri;
    };
    InMemoryBackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) { return item.id === id; });
    };
    // tries to parse id as number if collection item.id is a number.
    // returns the original param id otherwise.
    InMemoryBackendService.prototype.parseId = function (collection, id) {
        // tslint:disable-next-line:triple-equals
        if (!collection || id == undefined) {
            return undefined;
        }
        var isNumberId = collection[0] && typeof collection[0].id === 'number';
        if (isNumberId) {
            var idNum = parseFloat(id);
            return isNaN(idNum) ? id : idNum;
        }
        return id;
    };
    /**
     * Parses the request URL into a `ParsedUrl` object.
     * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
     *
     * Configuring the `apiBase` yields the most interesting changes to `parseUrl` behavior:
     *   When apiBase=undefined and url='http://localhost/api/collection/42'
     *     {base: 'api/', collectionName: 'collection', id: '42', ...}
     *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
     *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
     *   When apiBase='/' and url='http://localhost/collection'
     *     {base: '/', collectionName: 'collection', id: undefined, ...}
     *
     * The actual api base segment values are ignored. Only the number of segments matters.
     * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
     *
     * To replace this default method, assign your alternative to your InMemDbService['parseUrl']
     */
    InMemoryBackendService.prototype.parseUrl = function (url) {
        try {
            var loc = this.getLocation(url);
            var drop = this.config.rootPath.length;
            var urlRoot = '';
            if (loc.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            var path = loc.pathname.substring(drop);
            var pathSegments = path.split('/');
            var segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            var apiBase = void 0;
            // tslint:disable-next-line:triple-equals
            if (this.config.apiBase == undefined) {
                apiBase = pathSegments[segmentIx++];
            }
            else {
                apiBase = removeTrailingSlash(this.config.apiBase.trim());
                if (apiBase) {
                    segmentIx = apiBase.split('/').length;
                }
                else {
                    segmentIx = 0; // no api base at all; unwise but allowed.
                }
            }
            apiBase = apiBase + '/';
            var collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            var id = pathSegments[segmentIx++];
            var query = loc.search && new __WEBPACK_IMPORTED_MODULE_1__angular_http__["l" /* URLSearchParams */](loc.search.substr(1));
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { base: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl };
        }
        catch (err) {
            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
            throw new Error(msg);
        }
    };
    InMemoryBackendService.prototype.post = function (_a) {
        var collection = _a.collection, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl;
        var item = JSON.parse(req.text());
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            item.id = id || this.genId(collection);
        }
        // ignore the request id, if any. Alternatively,
        // could reject request if id differs from item.id
        id = item.id;
        var existingIx = this.indexOf(collection, id);
        var body = { data: this.clone(item) };
        if (existingIx > -1) {
            collection[existingIx] = item;
            var res = this.config.post204 ?
                { headers: headers, status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NO_CONTENT } :
                { headers: headers, body: body, status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].OK }; // successful; return entity
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */](res);
        }
        else {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({ headers: headers, body: body, status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].CREATED });
        }
    };
    InMemoryBackendService.prototype.put = function (_a) {
        var id = _a.id, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, req = _a.req;
        var item = JSON.parse(req.text());
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return createErrorResponse(req, __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        // tslint:disable-next-line:triple-equals
        if (id != item.id) {
            return createErrorResponse(req, __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].BAD_REQUEST, "\"" + collectionName + "\" id does not match item.id");
        }
        var existingIx = this.indexOf(collection, id);
        var body = { data: this.clone(item) };
        if (existingIx > -1) {
            collection[existingIx] = item;
            var res = this.config.put204 ?
                { headers: headers, status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].NO_CONTENT } :
                { headers: headers, body: body, status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].OK }; // successful; return entity
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */](res);
        }
        else {
            collection.push(item);
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]({ headers: headers, body: body, status: __WEBPACK_IMPORTED_MODULE_4__http_status_codes__["a" /* STATUS */].CREATED });
        }
    };
    InMemoryBackendService.prototype.removeById = function (collection, id) {
        var ix = this.indexOf(collection, id);
        if (ix > -1) {
            collection.splice(ix, 1);
            return true;
        }
        return false;
    };
    /**
     * Reset the "database" to its original state
     */
    InMemoryBackendService.prototype.resetDb = function () {
        this.db = this.inMemDbService.createDb();
    };
    InMemoryBackendService.prototype.setPassThruBackend = function () {
        this.passThruBackend = undefined;
        if (this.config.passThruUnknownUrl) {
            try {
                // copied from @angular/http/backends/xhr_backend
                var browserXhr = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BrowserXhr */]);
                var baseResponseOptions = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* ResponseOptions */]);
                var xsrfStrategy = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_http__["n" /* XSRFStrategy */]);
                this.passThruBackend = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["m" /* XHRBackend */](browserXhr, baseResponseOptions, xsrfStrategy);
            }
            catch (ex) {
                ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
                throw ex;
            }
        }
    };
    InMemoryBackendService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    InMemoryBackendService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: InMemoryDbService, },
        { type: InMemoryBackendConfigArgs, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [InMemoryBackendConfig,] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
    ]; };
    return InMemoryBackendService;
}());
//# sourceMappingURL=in-memory-backend.service.js.map

/***/ }),

/***/ "../../../../angular-in-memory-web-api/in-memory-web-api.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export inMemoryBackendServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryWebApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__in_memory_backend_service__ = __webpack_require__("../../../../angular-in-memory-web-api/in-memory-backend.service.js");



// AoT requires factory to be exported
function inMemoryBackendServiceFactory(injector, dbService, options) {
    var backend = new __WEBPACK_IMPORTED_MODULE_2__in_memory_backend_service__["b" /* InMemoryBackendService */](injector, dbService, options);
    return backend;
}
var InMemoryWebApiModule = (function () {
    function InMemoryWebApiModule() {
    }
    /**
    *  Prepare in-memory-web-api in the root/boot application module
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * InMemoryWebApiModule.forRoot(dbCreator);
    * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    InMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: InMemoryWebApiModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__in_memory_backend_service__["c" /* InMemoryDbService */], useClass: dbCreator },
                { provide: __WEBPACK_IMPORTED_MODULE_2__in_memory_backend_service__["a" /* InMemoryBackendConfig */], useValue: options },
            ]
        };
    };
    InMemoryWebApiModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    // Must useFactory for AoT
                    // https://github.com/angular/angular/issues/11178
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["m" /* XHRBackend */],
                            useFactory: inMemoryBackendServiceFactory,
                            deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_2__in_memory_backend_service__["c" /* InMemoryDbService */], __WEBPACK_IMPORTED_MODULE_2__in_memory_backend_service__["a" /* InMemoryBackendConfig */]] }]
                },] },
    ];
    /** @nocollapse */
    InMemoryWebApiModule.ctorParameters = function () { return []; };
    return InMemoryWebApiModule;
}());
//# sourceMappingURL=in-memory-web-api.module.js.map

/***/ }),

/***/ "../../../../angular-in-memory-web-api/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_status_codes__ = __webpack_require__("../../../../angular-in-memory-web-api/http-status-codes.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__in_memory_backend_service__ = __webpack_require__("../../../../angular-in-memory-web-api/in-memory-backend.service.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__in_memory_web_api_module__ = __webpack_require__("../../../../angular-in-memory-web-api/in-memory-web-api.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__in_memory_web_api_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: config.itemsPerPage || 0,
            currentPage: config.currentPage || 1,
            totalItems: config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    return PaginatePipe;
}());
PaginatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'paginate',
                pure: false
            },] },
];
/** @nocollapse */
PaginatePipe.ctorParameters = function () { return [
    { type: PaginationService, },
]; };

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */ var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < p.getCurrent()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    return PaginationControlsComponent;
}());
PaginationControlsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'pagination-controls',
                template: DEFAULT_TEMPLATE,
                styles: [DEFAULT_STYLES],
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
PaginationControlsComponent.ctorParameters = function () { return []; };
PaginationControlsComponent.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    return PaginationControlsDirective;
}());
PaginationControlsDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'pagination-template,[pagination-template]',
                exportAs: 'paginationApi'
            },] },
];
/** @nocollapse */
PaginationControlsDirective.ctorParameters = function () { return [
    { type: PaginationService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
PaginationControlsDirective.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    return NgxPaginationModule;
}());
NgxPaginationModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [
                    PaginatePipe,
                    PaginationControlsComponent,
                    PaginationControlsDirective
                ],
                providers: [PaginationService],
                exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            },] },
];
/** @nocollapse */
NgxPaginationModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

});
//# sourceMappingURL=membership.module.chunk.js.map