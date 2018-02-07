webpackJsonp(["mailbox.module"],{

/***/ "../../../../../src/app/pages/mailbox/mailbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pl-3 pr-3 mail-container\">  \n    <div class=\"col-md-4 bg-white p-1\">\n        <div class=\"form-group mb-0 pt-1 pb-1\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon bg-transparent border-0\">\n                    <i class=\"fa fa-search ml-2 mr-1\"></i>\n                </span>\n                <input class=\"form-control border-0\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search mail...\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn dropdown-toggle no-caret bg-transparent border-0 box-shadow-none\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-ellipsis-v\"></i>\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right box-shadow rounded-0\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'all';getMails();\">All</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'starred';getMails();\">Starred</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'sent';getMails();\">Sent</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'drafts';getMails();\">Drafts</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"type = 'trash';getMails();\">Trash</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"mail-list\" perfect-scrollbar>          \n            <div *ngFor=\"let mail of mails | MailSearch : searchText\" class=\"mail-list-item pb-2 pt-2 pl-1 pr-2 transititon\" (click)=\"viewDetail(mail)\" [ngClass]=\"{'unread': mail.unread, 'selected': mail.selected}\">\n                  <div class=\"media\">\n                      <img *ngIf=\"mail.senderPhoto\" class=\"d-flex mr-3 w-50p\" src=\"{{ mail.senderPhoto }}\">\n                      <img *ngIf=\"!mail.senderPhoto\"class=\"d-flex mr-3 w-50p\" src=\"assets/img/users/default-user.jpg\">\n                      <div class=\"media-body overflow-hidden\">\n                          <div class=\"d-flex justify-content-between\">\n                            <h6 class=\"text-truncate mail-sender\">{{mail.sender}}</h6>                  \n                            <small class=\"mail-date\">{{mail.date}}</small>  \n                          </div>\n                           <p class=\"mail-subject mb-0 text-truncate\">{{mail.subject}}</p>\n                      </div>\n                  </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-8 bg-white mail-view-container\">        \n        <div class=\"d-flex\">\n            <div class=\"mail-view-icons pt-2 pb-2\">              \n                <button class=\"btn btn-secondary rounded-0\" (click)=\"compose()\"><i class=\"fa fa-plus\"></i></button>\n                <button *ngIf=\"mail && type !='trash'\" class=\"btn btn-secondary rounded-0\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></button>\n                <button *ngIf=\"newMail\" class=\"btn btn-secondary rounded-0\" (click)=\"newMail = false;\"><i class=\"fa fa-arrow-left\"></i></button>\n                <button *ngIf=\"mail && type !='trash'\" class=\"btn btn-secondary rounded-0\" (click)=\"changeStarStatus()\"><i class=\"fa\" [ngClass]=\"{'fa-star': mail.starred, 'fa-star-o': !mail.starred}\"></i></button>\n                <button *ngIf=\"mail && type=='trash'\" class=\"btn btn-secondary rounded-0\" (click)=\"restore()\"><i class=\"fa fa-undo\"></i></button>\n                <button *ngIf=\"mail\" class=\"btn btn-secondary rounded-0\"><i class=\"fa fa-exclamation-circle\"></i></button>\n                <button *ngIf=\"mail && type !='trash'\" class=\"btn btn-secondary rounded-0\" (click)=\"delete()\"><i class=\"fa fa-trash\"></i></button>\n                <button class=\"btn btn-secondary rounded-0\"><i class=\"fa fa-refresh\"></i></button>\n                <div *ngIf=\"mail\" class=\"dropdown d-inline-block\">\n                    <button class=\"btn btn-secondary dropdown-toggle rounded-0\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" type=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" >\n                            More\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right box-shadow rounded-0\" aria-labelledby=\"dropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsRead()\">Mark as read</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsUnRead()\">Mark as unread</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"delete()\">Delete</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"mail-view pr-2\" perfect-scrollbar>\n\n            <div *ngIf=\"mail\" class=\"mail-content\">\n                <div class=\"d-flex justify-content-between pt-3\">\n                    <h4 class=\"pull-left\">{{mail.subject}}</h4>\n                    <a href=\"javascript:void(0);\" class=\"pull-right\"><i class=\"fa fa-print text-gray\"></i></a>\n                </div>\n                <hr/>\n                <div class=\"d-flex justify-content-between mb-3\">\n                    <div class=\"d-flex align-items-center\">\n                        <img *ngIf=\"mail.senderPhoto\" class=\"d-flex mr-3 w-50p\" src=\"{{ mail.senderPhoto }}\">\n                        <img *ngIf=\"!mail.senderPhoto\"class=\"d-flex mr-3 w-50p\" src=\"assets/img/users/default-user.jpg\">\n                        <div>\n                            <strong>{{mail.sender}}</strong>\n                            <span *ngIf=\"mail.senderMail\" class=\"email\">&lt;{{mail.senderMail}}&gt;</span><br>\n                            <span class=\"receiver\">to me</span>\n                        </div>\n                    </div>\n                    <span class=\"mail-date\">{{mail.date}} </span>\n                </div>\n                <div [innerHTML]=\"mail.body\"></div>\n                <div class=\"mail-attachments\" *ngIf=\"mail.attachments.length > 0\">\n                    <hr/>\n                    <p>\n                        <strong>{{mail.attachments.length}} attachments</strong> &nbsp;-&nbsp; \n                        <a href=\"javascript:void(0);\">Download all attachments</a>&nbsp;&nbsp;&nbsp;\n                        <a href=\"javascript:void(0);\">View all Images</a>\n                    </p>\n                    <section *ngFor=\"let attachment of mail.attachments; let i = index\" class=\"attachment\">\n                        <img src=\"{{attachment}}\" alt=\"\">\n                        <h5 class=\"title\">image-{{i + 1}}.jpg</h5>\n                        <p>\n                            457K  &nbsp;&nbsp;\n                            <a href=\"javascript:void(0);\">View</a> &nbsp;&nbsp;\n                            <a href=\"javascript:void(0);\">Download</a>\n                        </p>\n                    </section>\n                </div>             \n\n            </div>\n\n            <div *ngIf=\"!mail && !newMail\" class=\"d-flex flex-column align-items-center justify-content-center h-100 empty\">\n                <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>             \n                <p class=\"text-gray\">Select an item to read</p>\n            </div> \n             \n            <form *ngIf=\"newMail\" method=\"get\" action=\"#\" class=\"pt-4\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"To\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Cc / Bcc\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\n                </div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" placeholder=\"Message\" rows=\"10\"></textarea>\n                </div>\n                <div class=\"form-group pull-right\">\n                    <a (click)=\"newMail = false;\" href=\"javascript:void(0)\" class=\"btn btn-secondary\">Cancel</a>\n                    <button class=\"btn btn-main\" type=\"submit\">Send</button>            \n                </div>\n            </form>              \n        \n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/mailbox/mailbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mail-container .fa-search, .mail-container .fa-ellipsis-v {\n  font-size: 22px;\n  color: #888; }\n\n.mail-container .mail-date {\n  white-space: nowrap;\n  padding-top: 1px;\n  padding-left: 4px; }\n\n.mail-list {\n  position: relative;\n  height: 440px; }\n  .mail-list .mail-list-item {\n    border-bottom: 1px solid #ccc;\n    cursor: pointer; }\n    .mail-list .mail-list-item:first-child {\n      border-top: 1px solid #ccc; }\n    .mail-list .mail-list-item:hover {\n      background-color: #f5f5f5; }\n    .mail-list .mail-list-item .mail-sender {\n      line-height: 18px; }\n    .mail-list .mail-list-item .mail-subject {\n      line-height: 22px; }\n    .mail-list .mail-list-item.selected {\n      background-color: #f5f5f5; }\n    .mail-list .mail-list-item.unread .mail-sender, .mail-list .mail-list-item.unread .mail-subject {\n      font-weight: bold; }\n\n.mail-view-container {\n  border-left: 3px solid #f5f5f5; }\n  .mail-view-container .mail-view-icons {\n    border-bottom: 1px solid #ccc;\n    width: 100%; }\n    .mail-view-container .mail-view-icons .fa-star {\n      color: #FE9700; }\n\n.mail-view {\n  position: relative;\n  height: 440px; }\n  .mail-view .empty .fa-envelope-o {\n    font-size: 200px;\n    color: #e8e8e8; }\n  .mail-view .empty p {\n    font-size: 16px; }\n\n@media (max-width: 767px) {\n  .mail-view-container {\n    border-left: none;\n    border-top: 3px solid #f5f5f5; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/mailbox/mailbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mailbox_service__ = __webpack_require__("../../../../../src/app/pages/mailbox/mailbox.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailboxComponent = /** @class */ (function () {
    function MailboxComponent(mailboxService) {
        this.mailboxService = mailboxService;
        this.type = 'all';
    }
    MailboxComponent.prototype.ngOnInit = function () {
        this.getMails();
    };
    MailboxComponent.prototype.getMails = function () {
        switch (this.type) {
            case 'all':
                this.mails = this.mailboxService.getAllMails();
                break;
            case 'starred':
                this.mails = this.mailboxService.getStarredMails();
                break;
            case 'sent':
                this.mails = this.mailboxService.getSentMails();
                break;
            case 'drafts':
                this.mails = this.mailboxService.getDraftMails();
                break;
            case 'trash':
                this.mails = this.mailboxService.getTrashMails();
                break;
            default:
                this.mails = this.mailboxService.getDraftMails();
        }
    };
    MailboxComponent.prototype.viewDetail = function (mail) {
        this.mail = this.mailboxService.getMail(mail.id);
        this.mails.forEach(function (m) { return m.selected = false; });
        this.mail.selected = true;
        this.mail.unread = false;
        this.newMail = false;
    };
    MailboxComponent.prototype.compose = function () {
        this.mail = null;
        this.newMail = true;
    };
    MailboxComponent.prototype.setAsRead = function () {
        this.mail.unread = false;
    };
    MailboxComponent.prototype.setAsUnRead = function () {
        this.mail.unread = true;
    };
    MailboxComponent.prototype.delete = function () {
        this.mail.trash = true;
        this.mail.sent = false;
        this.mail.draft = false;
        this.mail.starred = false;
        this.getMails();
        this.mail = null;
    };
    MailboxComponent.prototype.changeStarStatus = function () {
        this.mail.starred = !this.mail.starred;
        this.getMails();
    };
    MailboxComponent.prototype.restore = function () {
        this.mail.trash = false;
        this.type = 'all';
        this.getMails();
        this.mail = null;
    };
    MailboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mailbox',
            template: __webpack_require__("../../../../../src/app/pages/mailbox/mailbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/mailbox/mailbox.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_1__mailbox_service__["a" /* MailboxService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mailbox_service__["a" /* MailboxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mailbox_service__["a" /* MailboxService */]) === "function" && _a || Object])
    ], MailboxComponent);
    return MailboxComponent;
    var _a;
}());

//# sourceMappingURL=mailbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/mailbox/mailbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxModule", function() { return MailboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mailbox_component__ = __webpack_require__("../../../../../src/app/pages/mailbox/mailbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__mailbox_component__["a" /* MailboxComponent */], pathMatch: 'full' }
];
var MailboxModule = /** @class */ (function () {
    function MailboxModule() {
    }
    MailboxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__["PerfectScrollbarModule"],
                __WEBPACK_IMPORTED_MODULE_5__theme_pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__mailbox_component__["a" /* MailboxComponent */]
            ]
        })
    ], MailboxModule);
    return MailboxModule;
}());

//# sourceMappingURL=mailbox.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/mailbox/mailbox.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Mail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Mail = /** @class */ (function () {
    function Mail(id, sender, senderPhoto, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        this.id = id;
        this.sender = sender;
        this.senderPhoto = senderPhoto;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
    }
    return Mail;
}());

var Mails = [
    new Mail(1, 'Envato Market', 'assets/img/app/envato.jpg', 'do-not-reply@market.envato.com', 'Your updated item has been approved', '4:08 PM', '<p>Congratulations! Your update to Azimuth - Angular 2 Admin Template on ThemeForest has been approved. ' +
        'You can view your item here: </p>' +
        '<p><a href="http://themeforest.net/item/azimuth-angular-2-admin-template/19182105" target="blank">http://themeforest.net/item/azimuth-angular-2-admin-template/19182105</a></p>' +
        '<p>Thanks for your submission!</p>' +
        '<p>Regards,<br> Envato Market Team</p>', false, [], true, false, false, false, false, false),
    new Mail(2, 'Josiah Fromdahl', 'assets/img/profile/bruno.jpg', 'Reekie8647@gmail.com', 'Useful tool for those who are involved in SEO', '9:47 AM', '<p>Hi, I want to introduce the Website Reviewer is an incredibly useful tool for those who are involved in SEO and web designing. ' +
        'This particular tool will provide you with quick website review and SEO audit of the websites you’ve created so ' +
        'you will be able to determine if and where any changes should be made so you can make it as effective ' +
        'as possible when it comes to getting visitors and keeping them interested. ' +
        'Unlike many similar tools, website reviewer is completely free.</p>', true, ['assets/img/app/snow.jpg', 'assets/img/app/sample.jpg'], true, false, true, false, false, false),
    new Mail(3, 'Google Cloud Platform', 'assets/img/app/google-platform.png', 'CloudPlatform-noreply@google.com', 'Lessons from the field: surviving success with Customer Reliability Engineering', 'Jan 5', '<h4>TRENDING</h4>' +
        '<p>For those who missed the early adoption of Infrastructure as a Service circa 2007,' +
        'this in-depth history stresses why businesses need to begin building around "serverless" architectures.</p>' +
        '<p>A stress test led by Pivotal’s Cloud Foundry team ran 250,000 real-life app containers on Google Compute Engine. ' +
        'GCP made it possible to stand the environment up in hours, and scaled it without pre-planning.</p>' +
        '<p>Dig in to a new site packed with open-source tools and resources that aims to make it easy for anyone to explore, develop, and share AI creations. ' +
        'Play an AI duet, or have your phone guess what you’re drawing.</p>', false, [], false, false, false, false, false, false),
    new Mail(4, 'Microsoft Visual Studio', 'assets/img/app/vs.jpg', 'MVS@e-mail.microsoft.com', 'Welcome to Visual Studio Team Services', '24.12.2016', '<p>Whether your teams develop in Java, .NET, or in multiple languages, Visual Studio Team Services offers an open,' +
        'cloud-hosted development hub. Use your favorite IDE, develop in any language, and empower your teams to iterate ' +
        'rapidly.</p> <p>Rogue security software scams. Rogue security software, also known as "scareware," is software that ' +
        'appears to be beneficial from a security perspective but provides limited or no security, generates erroneous or ' +
        'misleading alerts, or attempts to lure you into participating in fraudulent transactions. These scams can appear ' +
        'in email, online advertisements, your social networking site, search engine results, or even in pop-up windows on ' +
        'your computer that might appear to be part of your operating system, but are not.</p>', false, [], true, false, false, false, false, false),
    new Mail(5, 'Draft', '', '', 'no subject', '4:46 PM', '', false, [], false, false, false, true, false, false),
    new Mail(6, 'Draft', '', '', 'Please confirm your email', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. Phasellus pharetra nunc eu dui hendrerit, quis ullamcorper tortor malesuada. Nullam ante mi, auctor eu nunc vitae, gravida molestie arcu.', false, [], false, false, false, true, false, false),
    new Mail(7, 'MailChimp', 'assets/img/app/mailchimp.jpg', 'hello@mailchimp.com', 'Our 2016 annual report', '22.12.2016', '<p>For our 2016 annual report, we let our design team run wild with our most fun facts and proudest moments from the year. From GIFs in email campaigns to physical tons of infrastructure added to dollars raised for charity, it’s our year in numbers.</p>' +
        '<p>We’re proud of our new features, our customer support tickets solved, and our philanthropy in Atlanta. But we’re even more proud of you and the billions of emails you’ve sent to grow your businesses your way in 2016. Keep up the good work!</p>' +
        '<p>Cheers to the new year,</p>' +
        '<p>MailChimp</p>', false, [], false, false, false, false, false, false),
    new Mail(8, 'Bluehost', 'assets/img/app/bluehost.jpg', 'no-reply@e.bluehost.com', 'Your domain privacy may be at risk', '20.12.2016', '<h4>New ICANN Rules Require Accurate Contact Information</h4>' +
        '<p>Your domain information may be at risk. However, you can protect your information with domain privacy.</p>' +
        '<p>Protect yourself with Domain Privacy.</p>' +
        '<p><small>Only $11.88 per year.**</small></p>' +
        '<p><a href="http://bluehost.com/" target="blank" class="btn btn-success">Get started</a></p>', false, [], false, false, true, false, false, false),
    new Mail(9, 'Vimeo', 'assets/img/users/default-user.jpg', 'vimeo@email.vimeo.com', 'The year\'s best videos and milestones', '20.12.2016', '<h4>Now presenting: 2016\'s best videos</h4>' +
        '<p>Every day, the world\'s best creators upload their videos to Vimeo. And now, the most inventive, most striking, most all-around mind-blowing videos of 2016 are in. Enjoy, wondrous humans.</p>' +
        '<p><a href="https://vimeo.com/blog/post/The-Top-Videos-of-2016?utm_source=email&utm_medium=vimeo-decembernewsletter-201612&utm_campaign=30389" target="blank" class="btn btn-info">See the list</a></p>', false, [], false, false, false, false, false, false),
    new Mail(10, 'Andy Dufresne', 'assets/img/profile/adam.jpg', 'andy.dufresne@gmail.com', 'The Shawshank Redemption', '18.11.2016', '<p>From Wikipedia, the free encyclopedia</p>' +
        '<p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont. and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, ' +
        'a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd "Red" Redding, ' +
        'and finds himself protected by the guards after the warden begins using him in his money-laundering operation.</p>', false, [], false, true, false, false, false, false),
    new Mail(11, 'The Envato Team', 'assets/img/app/envato.jpg', 'donotreply@envato.com', 'Author Driven Pricing on ThemeForest, CodeCanyon and 3DOcean', '05.09.2016', '<h5>Hey Envato Community Members!</h5>' +
        '<p>As many of you know, over the past 12 months we have been rolling out Author Driven Pricing (ADP) across a range of different categories on Envato Market. So far this has included GraphicRiver and a handful of categories within ThemeForest.</p>' +
        '<p>In a few weeks, we\'ll be moving on to the next stage of our Author Driven Pricing project. This will involve introducing ADP to three new areas of Envato Market. These areas are:</p>' +
        '<ul><li>All remaining ThemeForest categories (including WordPress). </li><li>All categories on CodeCanyon.</li><li>All categories on 3DOcean</li></ul>' +
        '<p>We strongly recommend reading the full announcement on our forums where you will find:</p>' +
        '<ul><li>More details about the change.</li><li>How ADP has impacted pricing on previous categories.</li><li>Technical details regarding how to set prices.</li> <li>Why we’ve made the change. </li></ul>' +
        '<p>You will also be able to ask any questions you might have.</p>' +
        '<p>We will send you another email to let you know when this feature goes live.</p>' +
        '<p>All the best,</p>' +
        '<p>The Envato Team</p>', false, [], false, false, false, false, false, false),
    new Mail(12, 'Jonathan Cantu', 'assets/img/avatars/avatar-3.png', 'JCantu@billingsleyco.com', 'Ability to Customize', '02.09.2016', '<p>Hi,</p><p>Upon purchases, will I have the ability to modify color palette, font, etc. beyond your own design?</p><p>Thanks</p>', false, [], false, false, false, false, false, false),
    new Mail(13, 'Jennifer Adam', 'assets/img/profile/julia.jpg', 'jenniferadam2009@gmail.com', 'Guest Post Request - 2016 !!!', '09.05.2016', '<p><b>Hello,</b></p>' +
        '<p>I\'m Jennifer, constant follower of your blog posts and I\'ve liked most of the blog posts written here. I could realize you\'ve already published some great guest posts from different authors with distinct styles ' +
        'and I\'d be privileged if I were provided with an opportunity to delight your blog followers with some informative blog posts.</p>' +
        '<p>I\'m a content expert and I\'ve contributed some sensible and informative articles to surplus niche-specific blogs. I realize the value of content and its part in helping out numerous people out there in the space. </p>', false, [], false, false, false, false, false, false)
];
var MailboxService = /** @class */ (function () {
    function MailboxService() {
    }
    MailboxService.prototype.getAllMails = function () {
        return Mails.filter(function (mail) { return mail.sent == false && mail.draft == false && mail.trash == false; });
    };
    MailboxService.prototype.getStarredMails = function () {
        return Mails.filter(function (mail) { return mail.starred == true; });
    };
    MailboxService.prototype.getSentMails = function () {
        return Mails.filter(function (mail) { return mail.sent == true; });
    };
    MailboxService.prototype.getDraftMails = function () {
        return Mails.filter(function (mail) { return mail.draft == true; });
    };
    MailboxService.prototype.getTrashMails = function () {
        return Mails.filter(function (mail) { return mail.trash == true; });
    };
    MailboxService.prototype.getMail = function (id) {
        return Mails.find(function (mail) { return mail.id === +id; });
    };
    MailboxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MailboxService);
    return MailboxService;
}());

//# sourceMappingURL=mailbox.service.js.map

/***/ })

});
//# sourceMappingURL=mailbox.module.chunk.js.map