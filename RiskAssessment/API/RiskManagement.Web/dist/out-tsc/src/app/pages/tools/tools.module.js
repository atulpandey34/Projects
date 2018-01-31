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
var ng2_dragula_1 = require("ng2-dragula");
var angular_resizable_element_1 = require("angular-resizable-element");
var directives_module_1 = require("../../theme/directives/directives.module");
var drag_drop_component_1 = require("./drag-drop/drag-drop.component");
var toaster_component_1 = require("./toaster/toaster.component");
var resizable_component_1 = require("./resizable/resizable.component");
exports.routes = [
    { path: '', redirectTo: 'drag-drop', pathMatch: 'full' },
    { path: 'drag-drop', component: drag_drop_component_1.DragDropComponent, data: { breadcrumb: 'Drag and Drop' } },
    { path: 'resizable', component: resizable_component_1.ResizableComponent, data: { breadcrumb: 'Resizable' } },
    { path: 'toaster', component: toaster_component_1.ToasterComponent, data: { breadcrumb: 'Toaster' } }
];
var ToolsModule = /** @class */ (function () {
    function ToolsModule() {
    }
    ToolsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                ng2_dragula_1.DragulaModule,
                angular_resizable_element_1.ResizableModule,
                directives_module_1.DirectivesModule
            ],
            declarations: [
                drag_drop_component_1.DragDropComponent,
                toaster_component_1.ToasterComponent,
                resizable_component_1.ResizableComponent
            ]
        })
    ], ToolsModule);
    return ToolsModule;
}());
exports.ToolsModule = ToolsModule;
//# sourceMappingURL=tools.module.js.map