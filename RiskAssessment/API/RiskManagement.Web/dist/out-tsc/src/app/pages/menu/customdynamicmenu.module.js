"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var directives_module_1 = require("../../theme/directives/directives.module");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var primeng_1 = require("primeng/primeng");
var customdynamicmenu_component_1 = require("./customdynamicmenu.component");
var customdynamicmenulist_component_1 = require("./customdynamicmenulist.component");
var dynamicrole_component_1 = require("./dynamicrole.component");
exports.routes = [
    { path: '', component: customdynamicmenu_component_1.CustomDynamicMenuComponent, pathMatch: 'full' },
    { path: 'list', component: customdynamicmenulist_component_1.CustomDynamicMenuListComponent, data: { breadcrumb: 'Menu List' } },
    { path: 'menu', component: customdynamicmenu_component_1.CustomDynamicMenuComponent, data: { breadcrumb: 'Menu' } },
    { path: 'role', component: dynamicrole_component_1.RolesMenuConponent, data: { breadcrumb: 'Role' } },
    { path: ':id', component: customdynamicmenu_component_1.CustomDynamicMenuComponent, data: { breadcrumb: 'Edit' } },
];
var CustomDynamicMenuModule = /** @class */ (function () {
    function CustomDynamicMenuModule() {
    }
    CustomDynamicMenuModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                directives_module_1.DirectivesModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                primeng_1.CalendarModule,
                primeng_1.SharedModule,
                primeng_1.DataTableModule,
                primeng_1.MultiSelectModule,
                primeng_1.CheckboxModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                customdynamicmenu_component_1.CustomDynamicMenuComponent,
                dynamicrole_component_1.RolesMenuConponent,
                customdynamicmenulist_component_1.CustomDynamicMenuListComponent
            ]
        })
    ], CustomDynamicMenuModule);
    return CustomDynamicMenuModule;
}());
exports.CustomDynamicMenuModule = CustomDynamicMenuModule;
//# sourceMappingURL=customdynamicmenu.module.js.map