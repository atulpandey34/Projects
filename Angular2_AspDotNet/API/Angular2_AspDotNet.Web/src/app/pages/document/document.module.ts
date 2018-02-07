import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { DocumentListComponent } from './documentlist.component';
import { DocumentComponent } from './document.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule, CalendarModule, SharedModule, DataTableModule, MultiSelectModule, SelectItem, CheckboxModule } from 'primeng/primeng';

export const routes = [
    { path: '', component: DocumentComponent, pathMatch: 'full' },
    { path: 'list', component: DocumentListComponent, data: { breadcrumb: 'List' } },
    { path: 'document', component: DocumentComponent, data: { breadcrumb: 'Document' } },
    { path: ':id', component: DocumentComponent, data: { breadcrumb: 'Edit' } },
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
        DocumentComponent,
        DocumentListComponent
    ]
})
export class DocumentModule { }
