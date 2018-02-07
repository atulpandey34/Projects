import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';
import { CustomDynamicMenuComponent } from './customdynamicmenu.component';
import { CustomDynamicMenuListComponent } from './customdynamicmenulist.component';
import { RolesMenuConponent } from './dynamicrole.component';

export const routes = [
    { path: '', component: CustomDynamicMenuComponent, pathMatch: 'full' },
    { path: 'list', component: CustomDynamicMenuListComponent, data: { breadcrumb: 'Menu List' } },
    { path: 'menu', component: CustomDynamicMenuComponent, data: { breadcrumb: 'Menu' } },
    { path: 'role', component: RolesMenuConponent, data: { breadcrumb: 'Role' } },
    { path: ':id', component: CustomDynamicMenuComponent, data: { breadcrumb: 'Edit' } },
    
];

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
        CustomDynamicMenuComponent
        , RolesMenuConponent
        , CustomDynamicMenuListComponent
    ]
})
export class CustomDynamicMenuModule { }
