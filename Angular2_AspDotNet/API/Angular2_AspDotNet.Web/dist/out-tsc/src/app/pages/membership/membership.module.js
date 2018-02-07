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
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var ngx_pagination_1 = require("ngx-pagination");
var pipes_module_1 = require("../../theme/pipes/pipes.module");
var membership_component_1 = require("./membership.component");
var membership_data_1 = require("./membership.data");
exports.routes = [
    { path: '', component: membership_component_1.MembershipComponent, pathMatch: 'full' }
];
var MembershipModule = /** @class */ (function () {
    function MembershipModule() {
    }
    MembershipModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(membership_data_1.MembershipData, { delay: 0 }),
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                ngx_pagination_1.NgxPaginationModule,
                pipes_module_1.PipesModule
            ],
            declarations: [
                membership_component_1.MembershipComponent
            ]
        })
    ], MembershipModule);
    return MembershipModule;
}());
exports.MembershipModule = MembershipModule;
//# sourceMappingURL=membership.module.js.map