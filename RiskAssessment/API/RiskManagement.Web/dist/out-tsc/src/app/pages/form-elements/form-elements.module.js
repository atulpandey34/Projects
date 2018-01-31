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
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_validation_1 = require("ng2-validation");
var ng2_ckeditor_1 = require("ng2-ckeditor");
var directives_module_1 = require("../../theme/directives/directives.module");
var controls_component_1 = require("./controls/controls.component");
var file_uploader_component_1 = require("./controls/file-uploader/file-uploader.component");
var image_uploader_component_1 = require("./controls/image-uploader/image-uploader.component");
var multiple_image_uploader_component_1 = require("./controls/multiple-image-uploader/multiple-image-uploader.component");
var layouts_component_1 = require("./layouts/layouts.component");
var validations_component_1 = require("./validations/validations.component");
var wizard_component_1 = require("./wizard/wizard.component");
var editor_component_1 = require("./editor/editor.component");
exports.routes = [
    { path: '', redirectTo: 'controls', pathMatch: 'full' },
    { path: 'controls', component: controls_component_1.ControlsComponent, data: { breadcrumb: 'Form Controls' } },
    { path: 'layouts', component: layouts_component_1.LayoutsComponent, data: { breadcrumb: 'Layouts' } },
    { path: 'validations', component: validations_component_1.ValidationsComponent, data: { breadcrumb: 'Validations' } },
    { path: 'wizard', component: wizard_component_1.WizardComponent, data: { breadcrumb: 'Wizard' } },
    { path: 'editor', component: editor_component_1.EditorComponent, data: { breadcrumb: 'Editor' } }
];
var FormElementsModule = /** @class */ (function () {
    function FormElementsModule() {
    }
    FormElementsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                ng_bootstrap_1.NgbModule,
                ng2_validation_1.CustomFormsModule,
                ng2_ckeditor_1.CKEditorModule,
                directives_module_1.DirectivesModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                controls_component_1.ControlsComponent,
                file_uploader_component_1.FileUploaderComponent,
                image_uploader_component_1.ImageUploaderComponent,
                multiple_image_uploader_component_1.MultipleImageUploaderComponent,
                layouts_component_1.LayoutsComponent,
                validations_component_1.ValidationsComponent,
                wizard_component_1.WizardComponent,
                editor_component_1.EditorComponent
            ]
        })
    ], FormElementsModule);
    return FormElementsModule;
}());
exports.FormElementsModule = FormElementsModule;
//# sourceMappingURL=form-elements.module.js.map