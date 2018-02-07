"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var StartNGPage = /** @class */ (function () {
    function StartNGPage() {
    }
    StartNGPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    StartNGPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return StartNGPage;
}());
exports.StartNGPage = StartNGPage;
//# sourceMappingURL=app.po.js.map