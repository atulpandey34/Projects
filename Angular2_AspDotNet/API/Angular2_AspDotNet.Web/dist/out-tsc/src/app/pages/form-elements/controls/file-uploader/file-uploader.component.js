"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent() {
    }
    FileUploaderComponent.prototype.fileChange = function (input) {
        var reader = new FileReader();
        if (input.files.length) {
            this.file = input.files[0].name;
        }
    };
    FileUploaderComponent.prototype.removeFile = function () {
        this.file = '';
    };
    FileUploaderComponent = __decorate([
        core_1.Component({
            selector: 'app-file-uploader',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: './file-uploader.component.html',
            styleUrls: ['./file-uploader.component.scss']
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());
exports.FileUploaderComponent = FileUploaderComponent;
//# sourceMappingURL=file-uploader.component.js.map