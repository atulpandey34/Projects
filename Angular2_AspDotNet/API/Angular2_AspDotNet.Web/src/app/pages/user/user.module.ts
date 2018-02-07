import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { UserListComponent } from './userlist.component';
import { UserComponent } from './user.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserChangePasword } from '../user/user.changepassword.component';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';

export const routes = [
    { path: '', component: UserComponent, pathMatch: 'full' },
    { path: 'list', component: UserListComponent, data: { breadcrumb: 'User List' } },
    { path: 'user', component: UserComponent, data: { breadcrumb: 'User' } },
    { path: 'changepassword', component: UserChangePasword, data: { breadcrumb: 'Change Password' } },
    { path: ':id/:orgid', component: UserComponent, data: { breadcrumb: 'Edit' } },
    { path: ':id', component: UserComponent, data: { breadcrumb: 'Edit' } },
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectivesModule,
        MultiselectDropdownModule,
        NgbModule.forRoot(),
        CalendarModule,
        SharedModule,
        DataTableModule,
        MultiSelectModule,
        CheckboxModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        UserListComponent,
        UserComponent,
        UserChangePasword
    ]
})
export class UserModule { }
