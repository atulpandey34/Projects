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
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var pipes_module_1 = require("../../theme/pipes/pipes.module");
var mailbox_component_1 = require("./mailbox.component");
exports.routes = [
    { path: '', component: mailbox_component_1.MailboxComponent, pathMatch: 'full' }
];
var MailboxModule = /** @class */ (function () {
    function MailboxModule() {
    }
    MailboxModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                pipes_module_1.PipesModule
            ],
            declarations: [
                mailbox_component_1.MailboxComponent
            ]
        })
    ], MailboxModule);
    return MailboxModule;
}());
exports.MailboxModule = MailboxModule;
//# sourceMappingURL=mailbox.module.js.map