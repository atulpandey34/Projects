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
var app_settings_1 = require("../../../app.settings");
var side_chat_service_1 = require("./side-chat.service");
var side_chat_model_1 = require("./side-chat.model");
var SideChatComponent = /** @class */ (function () {
    function SideChatComponent(appSettings, sideChatService) {
        this.appSettings = appSettings;
        this.sideChatService = sideChatService;
        this.showHoverableChatItem = false;
        this.showChatWindow = false;
        this.settings = this.appSettings.settings;
        this.chats = sideChatService.getChats();
        this.talks = this.sideChatService.getTalk();
    }
    SideChatComponent.prototype.ngOnInit = function () {
    };
    SideChatComponent.prototype.back = function () {
        this.showChatWindow = false;
        this.talks.shift();
        console.log(this.talks);
        this.talks.length = 2;
    };
    SideChatComponent.prototype.getChat = function (chat) {
        this.searchText = '';
        this.showChatWindow = true;
        this.interlocutor = chat.author;
        this.talks.forEach(function (item) {
            if (item.side == 'left') {
                item.image = chat.image;
            }
        });
        this.talks.unshift(chat);
    };
    SideChatComponent.prototype.addChatItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.talks.push(new side_chat_model_1.SideChat('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newChatText, new Date(), 'right'));
            this.newChatText = '';
            var chatContainer_1 = document.querySelector('.chat-talk-list');
            setTimeout(function () {
                var nodes = chatContainer_1.querySelectorAll('.media');
                var newChatTextHeight = nodes[nodes.length - 1];
                chatContainer_1.scrollTop = chatContainer_1.scrollHeight + newChatTextHeight.clientHeight;
            });
        }
    };
    SideChatComponent = __decorate([
        core_1.Component({
            selector: 'app-side-chat',
            templateUrl: './side-chat.component.html',
            styleUrls: ['./side-chat.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [side_chat_service_1.SideChatService]
        }),
        __metadata("design:paramtypes", [app_settings_1.AppSettings, side_chat_service_1.SideChatService])
    ], SideChatComponent);
    return SideChatComponent;
}());
exports.SideChatComponent = SideChatComponent;
//# sourceMappingURL=side-chat.component.js.map