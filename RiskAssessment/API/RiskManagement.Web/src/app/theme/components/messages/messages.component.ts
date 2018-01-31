import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessagesService } from './messages.service';
import { NotificationViewModel } from './messages.model';
@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
    public messages: Array<Object>;
    public files: Array<Object>;
    public meetings: Array<Object>;
    public notificationList: NotificationViewModel[] = [];
    constructor(private messagesService: MessagesService) {
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();

    }
    getNotificationList() {
        this.notificationList = [];
        this.messagesService.getAllNotificationList().subscribe((res: NotificationViewModel[]) => {
            this.notificationList = res;
        });
    }
    ngOnInit() {
        this.getNotificationList();
        jQuery('#messagesTabs').on('click', '.nav-item a', function () {
            setTimeout(() => jQuery(this).closest('.dropdown').addClass('show'));
        })
    }
    DismissNotification(id: number) {
        if (confirm("Sre you sure want to dismiss this notification ?")) {
            this.messagesService.disMissNotification(id).subscribe(res => {
                this.getNotificationList();
            });
        }
    }
}
