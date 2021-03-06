"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var side_chat_model_1 = require("./side-chat.model");
var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
var chats = [
    new side_chat_model_1.SideChat('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/avatars/avatar-3.png', 'Andy Warhol', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/avatars/avatar-7.png', 'Lusia Manuel', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/users/default-user.jpg', 'unknown', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/avatars/avatar-1.png', 'Jeremi Powell', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/avatars/avatar-8.png', 'Calico Jack', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/avatars/avatar-5.png', 'Michelle Ormond', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new side_chat_model_1.SideChat('assets/img/avatars/avatar-6.png', 'Sean Connery', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left')
];
var talks = [
    new side_chat_model_1.SideChat('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, StartNG is a fully responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), 'right'),
    new side_chat_model_1.SideChat('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute + 3), 'left'),
];
var SideChatService = /** @class */ (function () {
    function SideChatService() {
    }
    SideChatService.prototype.getChats = function () {
        return chats;
    };
    SideChatService.prototype.getTalk = function () {
        return talks;
    };
    SideChatService = __decorate([
        core_1.Injectable()
    ], SideChatService);
    return SideChatService;
}());
exports.SideChatService = SideChatService;
// import {Injectable} from '@angular/core'
// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();
// @Injectable()
// export class SideChatService {
//     private chats = [
//         {
//             image: 'assets/img/profile/ashley.jpg',
//             author: 'Ashley Ahlberg', 
//             authorStatus: 'Online',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/bruno.jpg',
//             author: 'Bruno Vespa', 
//             authorStatus: 'Do not disturb',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/julia.jpg',
//             author: 'Julia Aniston', 
//             authorStatus: 'Away',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/users/default-user.jpg',
//             author: 'unknown',
//             authorStatus: 'Offline',
//             text: 'After you get up and running, you can place Font Awesome icons just about...',
//             time: '1 min ago'
//         },
//         // {
//         //     image: 'michael',
//         //     author: 'Michael Blair',
//         //     text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
//         //     time: '2 hrs ago'
//         // },
//         // {
//         //     image: 'julia',
//         //     author: 'Julia Aniston',
//         //     text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
//         //     time: '10 hrs ago'
//         // },
//         // {
//         //     image: 'bruno',
//         //     author: 'Bruno Vespa',
//         //     text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'tereza',
//         //     author: 'Tereza Stiles',
//         //     text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'adam',
//         //     author: 'Adam Sandler',
//         //     text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
//         //     time: '2 days ago'
//         // },
//     ]; 
//     public getChats():Array<Object> {
//         return this.chats;
//     }
// } 
//# sourceMappingURL=side-chat.service.js.map