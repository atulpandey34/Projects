"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/map");
var organization_model_1 = require("../organization/organization.model");
var organization_service_1 = require("../organization/organization.service");
var environment_1 = require("../../../environments/environment");
var apiURL = environment_1.environment.apiEndpoint;
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(fb, _OrganizationService, route, router, location) {
        this.fb = fb;
        this._OrganizationService = _OrganizationService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.OrganizationID = 0;
        this.apiEndPoint = apiURL;
        this.apiEndPoint = this.apiEndPoint + "/";
    }
    DocumentComponent.prototype.ngOnInit = function () {
        this.onload();
    };
    DocumentComponent.prototype.onload = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.OrganizationID = params['id']; //log the value of id
            _this.OrganizationID = _this.OrganizationID === undefined ? 0 : _this.OrganizationID;
        });
        this.addhtmltoform();
        if (this.OrganizationID > 0) {
            this._OrganizationService.getSingleOrganization(this.OrganizationID).subscribe(function (res) {
                _this.OrganizationID = res.OrganizationID;
                _this.addhtmltoform(res);
            });
        }
    };
    DocumentComponent.prototype.addhtmltoform = function (model) {
        if (model === void 0) { model = new organization_model_1.OrganizationViewModel(); }
        this.myFormOrganization = this.fb.group({
            OrganizationID: [model.OrganizationID],
            OrganizationName: [model.OrganizationName, [forms_1.Validators.required]],
            Logo: [model.Logo],
            State: [model.State, [forms_1.Validators.required]],
            City: [model.City, [forms_1.Validators.required]],
            AddressLine: [model.AddressLine, [forms_1.Validators.required]],
            IsActive: [model.IsActive, [forms_1.Validators.required]],
        });
    };
    DocumentComponent.prototype.SaveOrganizationFormData = function (data) {
        var _this = this;
        this._OrganizationService.saveOrganization(data).subscribe(function (res) {
            _this.OrganizationID = res.OrganizationID;
            _this.router.navigate(['/pages/organization/' + _this.OrganizationID]);
            _this.saveMaterial(res.OrganizationID);
        });
    };
    DocumentComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.fileName = input.files[0].name;
            this.fileToUpload = input.files[0];
        }
    };
    DocumentComponent.prototype.removeFile = function () {
        this.fileName = '';
        this.fileToUpload = null;
    };
    DocumentComponent.prototype.saveMaterial = function (orgid) {
        var _this = this;
        if (this.fileToUpload != null && this.fileToUpload != undefined) {
            var file = this.fileToUpload;
            var _formData = new FormData();
            _formData.append("FileName", file.name);
            _formData.append("MyFile", file);
            _formData.append("OrganizationID", this.OrganizationID.toString());
            var body = _formData;
            this._OrganizationService.uploadMaterial(body).subscribe(function (res) {
                _this.removeFile();
                _this.router.navigate(['/pages/organization/' + orgid]);
            });
        }
    };
    DocumentComponent.prototype.AddUserToOrganization = function () {
        this.router.navigate(['/pages/user/0/' + this.OrganizationID]);
    };
    __decorate([
        core_1.ViewChild('closeDialog'),
        __metadata("design:type", Object)
    ], DocumentComponent.prototype, "closeDialog", void 0);
    DocumentComponent = __decorate([
        core_1.Component({
            selector: 'app-organization',
            templateUrl: './organization.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['../../../../node_modules/primeng/resources/primeng.min.css',
                "../../../../node_modules/primeng/resources/themes/omega/theme.css",
                '../form-elements/controls/file-uploader/file-uploader.component.scss',],
            providers: [organization_service_1.OrganizationService],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, organization_service_1.OrganizationService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], DocumentComponent);
    return DocumentComponent;
}());
exports.DocumentComponent = DocumentComponent;
//# sourceMappingURL=organization.component.js.map