import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserMenuService } from './user-menu.service';
import { UserMenuModel } from './user-menu.model';
import { CookieService, CookieOptions } from 'ngx-cookie';

@Component({

    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss'],
    providers: [UserMenuService],
    encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
    public router: Router;
    LoggedInUserName: string;
    LoggedInUserId: number;
    AddedDate: string;
    constructor(private _cookieService: CookieService,router: Router, private userMenuService: UserMenuService) {
        this.router = router;
    }

    ngOnInit() {
        this.userMenuService.getUserInformation().subscribe((res: UserMenuModel) => {
            this.LoggedInUserId = res.UserId;
            this.AddedDate = res.AddedDate;
            this.LoggedInUserName = res.FirstName + " " + res.LastName;
        });
    }
    Logout() {
        this.userMenuService.logoutUser().subscribe(res => {
            sessionStorage.removeItem("apiAuthToken");
            document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
            this.router.navigate(['login']);
        });
    }
    NavigateToUser() {
        this.router.navigate(['pages/user/' + this.LoggedInUserId]);
    }
    NavigateToChangePassword() {
        this.router.navigate(['pages/user/changepassword']);
    }
}
