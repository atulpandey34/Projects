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
var ValidationsComponent = /** @class */ (function () {
    function ValidationsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ValidationsComponent.prototype.ngOnInit = function () {
        var password = new forms_1.FormControl('', forms_1.Validators.required);
        var certainPassword = new forms_1.FormControl('', ng2_validation_1.CustomValidators.equalTo(password));
        var first = new forms_1.FormControl('', forms_1.Validators.required);
        var second = new forms_1.FormControl('', ng2_validation_1.CustomValidators.notEqualTo(first));
        this.form = this.formBuilder.group({
            required: ['', forms_1.Validators.required],
            minLength: ['', forms_1.Validators.compose([forms_1.Validators.required, ng2_validation_1.CustomValidators.min(3)])],
            maxLength: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(10)])],
            base64: ['', ng2_validation_1.CustomValidators.base64],
            creditCard: ['', ng2_validation_1.CustomValidators.creditCard],
            date: ['', ng2_validation_1.CustomValidators.date],
            dateISO: ['', ng2_validation_1.CustomValidators.dateISO],
            maxDate: ['', ng2_validation_1.CustomValidators.maxDate('2017-09-09')],
            minDate: ['', ng2_validation_1.CustomValidators.minDate('2017-09-09')],
            digits: ['', ng2_validation_1.CustomValidators.digits],
            email: ['', ng2_validation_1.CustomValidators.email],
            equal: ['', ng2_validation_1.CustomValidators.equal('5')],
            notEqual: ['', ng2_validation_1.CustomValidators.notEqual('10')],
            password: password,
            certainPassword: certainPassword,
            first: first,
            second: second,
            greaterThan: ['', ng2_validation_1.CustomValidators.gt(10)],
            greaterThanEqual: ['', ng2_validation_1.CustomValidators.gte(15)],
            lessThan: ['', ng2_validation_1.CustomValidators.lt(10)],
            lessThanEqual: ['', ng2_validation_1.CustomValidators.lte(10)],
            max: ['', ng2_validation_1.CustomValidators.max(10)],
            min: ['', ng2_validation_1.CustomValidators.min(10)],
            number: ['', ng2_validation_1.CustomValidators.number],
            phone: ['', ng2_validation_1.CustomValidators.phone('US')],
            range: ['', ng2_validation_1.CustomValidators.range([10, 20])],
            rangeLength: ['', ng2_validation_1.CustomValidators.rangeLength([5, 9])],
            url: ['', ng2_validation_1.CustomValidators.url]
        });
    };
    ValidationsComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    ValidationsComponent = __decorate([
        core_1.Component({
            selector: 'app-validations',
            templateUrl: './validations.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
    ], ValidationsComponent);
    return ValidationsComponent;
    var _a;
}());
exports.ValidationsComponent = ValidationsComponent;
//# sourceMappingURL=validations.component.js.map