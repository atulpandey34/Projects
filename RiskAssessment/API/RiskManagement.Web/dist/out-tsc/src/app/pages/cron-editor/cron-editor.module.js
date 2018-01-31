"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var cron_editor_component_1 = require("./cron-editor.component");
var cron_time_picker_component_1 = require("./cron-time-picker.component");
var CronEditorModule = /** @class */ (function () {
    function CronEditorModule() {
    }
    CronEditorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            exports: [cron_editor_component_1.CronGenComponent, cron_time_picker_component_1.TimePickerComponent],
            declarations: [cron_editor_component_1.CronGenComponent, cron_time_picker_component_1.TimePickerComponent]
        })
    ], CronEditorModule);
    return CronEditorModule;
}());
exports.CronEditorModule = CronEditorModule;
//# sourceMappingURL=cron-editor.module.js.map