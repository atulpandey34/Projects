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
require("widgster");
var WidgetDirective = /** @class */ (function () {
    function WidgetDirective(el) {
        this.$el = jQuery(el.nativeElement);
        jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';
        jQuery(document).on('close.widgster', function (e) {
            var $colWrap = jQuery(e.target).closest(' [class*="col-"]:not(.widget-container)');
            if (!$colWrap.find('.widget').not(e.target).length) {
                $colWrap.remove();
            }
        });
        jQuery(document).on("fullscreened.widgster", function (e) {
            jQuery(e.target).find('div.widget-body').addClass('card-block-scrolling');
        }).on("restored.widgster", function (e) {
            jQuery(e.target).find('div.widget-body').removeClass('card-block-scrolling');
        });
    }
    WidgetDirective.prototype.ngOnInit = function () {
        this.$el.widgster();
    };
    WidgetDirective = __decorate([
        core_1.Directive({
            selector: '[widget]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], WidgetDirective);
    return WidgetDirective;
}());
exports.WidgetDirective = WidgetDirective;
//# sourceMappingURL=widget.directive.js.map