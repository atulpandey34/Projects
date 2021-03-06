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
var ng2_validation_1 = require("ng2-validation");
var WizardComponent = /** @class */ (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.details = {};
        var password = new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)]));
        var confirmPassword = new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.equalTo(password)]));
        this.steps = [
            { name: 'Account Information', icon: 'fa-lock', active: true, valid: false, hasError: false },
            { name: 'Personal Information', icon: 'fa-user', active: false, valid: false, hasError: false },
            { name: 'Payment Information', icon: 'fa-credit-card', active: false, valid: false, hasError: false },
            { name: 'Confirm Your Details', icon: 'fa-check-square-o', active: false, valid: false, hasError: false }
        ];
        this.accountForm = this.formBuilder.group({
            'username': ['', forms_1.Validators.required],
            'password': password,
            'confirmPassword': confirmPassword,
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.email])]
        });
        this.personalForm = this.formBuilder.group({
            'salutation': [''],
            'firstname': ['', forms_1.Validators.required],
            'lastname': ['', forms_1.Validators.required],
            'gender': [''],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.email])],
            'phone': ['', forms_1.Validators.required],
            'zipcode': ['', forms_1.Validators.required],
            'country': ['', forms_1.Validators.required],
            'state': [''],
            'address': ['']
        });
        this.paymentForm = this.formBuilder.group({
            'cardtype': ['', forms_1.Validators.required],
            'cardnumber': ['', forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.creditCard])],
            'cvc': ['', forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.number])],
            'expirymonth': ['', forms_1.Validators.required],
            'expiryyear': ['', forms_1.Validators.required]
        });
    }
    WizardComponent.prototype.next = function () {
        var accountForm = this.accountForm;
        var personalForm = this.personalForm;
        var paymentForm = this.paymentForm;
        if (this.steps[this.steps.length - 1].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index < steps.length - 1) {
                if (step.active) {
                    if (step.name == 'Account Information') {
                        if (accountForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Personal Information') {
                        if (personalForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                    if (step.name == 'Payment Information') {
                        if (paymentForm.valid) {
                            step.active = false;
                            step.valid = true;
                            steps[index + 1].active = true;
                            return true;
                        }
                        else {
                            step.hasError = true;
                        }
                    }
                }
            }
        });
        this.details.username = this.accountForm.value.username;
        this.details.fullname = this.personalForm.value.firstname + " " + this.personalForm.value.lastname;
        this.details.gender = this.personalForm.value.gender;
        this.details.email = this.personalForm.value.email;
        this.details.phone = this.personalForm.value.phone;
        this.details.country = this.personalForm.value.country;
        this.details.zipcode = this.personalForm.value.zipcode;
        this.details.address = this.personalForm.value.address;
        this.details.cardtype = this.paymentForm.value.cardtype;
        this.details.cardnumber = this.paymentForm.value.cardnumber;
    };
    WizardComponent.prototype.prev = function () {
        if (this.steps[0].active)
            return false;
        this.steps.some(function (step, index, steps) {
            if (index != 0) {
                if (step.active) {
                    step.active = false;
                    steps[index - 1].active = true;
                    return true;
                }
            }
        });
    };
    WizardComponent.prototype.confirm = function () {
        this.steps.forEach(function (step) { return step.valid = true; });
        this.confirmed = true;
    };
    WizardComponent = __decorate([
        core_1.Component({
            selector: 'app-wizard',
            templateUrl: './wizard.component.html',
            styleUrls: ['./wizard.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], WizardComponent);
    return WizardComponent;
}());
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map