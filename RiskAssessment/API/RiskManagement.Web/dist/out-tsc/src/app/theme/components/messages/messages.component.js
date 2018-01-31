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
var messages_service_1 = require("./messages.service");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.notificationList = [];
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.getNotificationList = function () {
        var _this = this;
        this.notificationList = [];
        this.messagesService.getAllNotificationList().subscribe(function (res) {
            _this.notificationList = res;
        });
    };
    MessagesComponent.prototype.ngOnInit = function () {
        this.getNotificationList();
        jQuery('#messagesTabs').on('click', '.nav-item a', function () {
            var _this = this;
            setTimeout(function () { return jQuery(_this).closest('.dropdown').addClass('show'); });
        });
    };
    MessagesComponent.prototype.DismissNotification = function (id) {
        var _this = this;
        if (confirm("Sre you sure want to dismiss this notification ?")) {
            this.messagesService.disMissNotification(id).subscribe(function (res) {
                _this.getNotificationList();
            });
        }
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            templateUrl: './messages.component.html',
            styleUrls: ['./messages.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [messages_service_1.MessagesService]
        }),
        __metadata("design:paramtypes", [messages_service_1.MessagesService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map