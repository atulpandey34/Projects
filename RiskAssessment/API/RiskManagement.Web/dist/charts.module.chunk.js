webpackJsonp(["charts.module"],{

/***/ "../../../../../src/app/pages/charts/bar/bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Vertical Bar Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                  <ngx-charts-bar-vertical\n                        [scheme]=\"colorScheme\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"xAxisLabel\"\n                        [yAxisLabel]=\"yAxisLabel\"\n                        [results]=\"single\"\n                        (select)=\"onSelect($event)\">\n                  </ngx-charts-bar-vertical>                  \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Horizontal Bar Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body pr-5\">\n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-bar-horizontal\n                        [scheme]=\"colorScheme\"\n                        [results]=\"single\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"yAxisLabel\"\n                        [yAxisLabel]=\"xAxisLabel\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-bar-horizontal>                  \n                </div> \n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Grouped Vertical Bar Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-bar-vertical-2d\n                      [scheme]=\"colorScheme\"\n                      [results]=\"multi\"\n                      [gradient]=\"gradient\"\n                      [xAxis]=\"showXAxis\"\n                      [yAxis]=\"showYAxis\"\n                      [legend]=\"showLegend\"\n                      [showXAxisLabel]=\"showXAxisLabel\"\n                      [showYAxisLabel]=\"showYAxisLabel\"\n                      [xAxisLabel]=\"xAxisLabel\"\n                      [yAxisLabel]=\"yAxisLabel\"\n                      (select)=\"onSelect($event)\">\n                    </ngx-charts-bar-vertical-2d>                 \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Grouped Horizontal Bar Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-bar-horizontal-2d\n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"yAxisLabel\"\n                        [yAxisLabel]=\"xAxisLabel\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-bar-horizontal-2d>                \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Stacked Vertical Bar Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-bar-vertical-stacked\n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"xAxisLabel\"\n                        [yAxisLabel]=\"yAxisLabel\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-bar-vertical-stacked>             \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Stacked Horizontal Bar Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-bar-horizontal-stacked\n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"yAxisLabel\"\n                        [yAxisLabel]=\"xAxisLabel\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-bar-horizontal-stacked>           \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Normalized Vertical Bar Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-bar-vertical-normalized\n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"xAxisLabel\"\n                        [yAxisLabel]=\"yAxisLabel\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-bar-vertical-normalized>           \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Normalized Horizontal Bar Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-bar-horizontal-normalized\n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"yAxisLabel\"\n                        [yAxisLabel]=\"xAxisLabel\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-bar-horizontal-normalized>          \n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/charts/bar/bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_data__ = __webpack_require__("../../../../../src/app/pages/charts/charts.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarComponent = /** @class */ (function () {
    function BarComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        Object.assign(this, { single: __WEBPACK_IMPORTED_MODULE_1__charts_data__["c" /* single */], multi: __WEBPACK_IMPORTED_MODULE_1__charts_data__["b" /* multi */] });
    }
    BarComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    BarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bar',
            template: __webpack_require__("../../../../../src/app/pages/charts/bar/bar.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BarComponent);
    return BarComponent;
}());

//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/bubble/bubble.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Bubble Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-bubble-chart\n                        [results]=\"bubble\"\n                        [showGridLines]=\"showGridLines\"\n                        [legend]=\"showLegend\"\n                        [legendTitle]=\"legendTitle\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"xAxisLabel\"\n                        [yAxisLabel]=\"yAxisLabel\"\n                        [autoScale]=\"autoScale\"\n                        [scheme]=\"colorScheme\"\n                        [schemeType]=\"schemeType\"\n                        [roundDomains]=\"roundDomains\"\n                        [tooltipDisabled]=\"tooltipDisabled\"\n                        [minRadius]=\"minRadius\"\n                        [maxRadius]=\"maxRadius\">\n                    </ngx-charts-bubble-chart> \n                </div>\n            </div>\n        </div>\n    </div>   \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/charts/bubble/bubble.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BubbleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_data__ = __webpack_require__("../../../../../src/app/pages/charts/charts.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BubbleComponent = /** @class */ (function () {
    function BubbleComponent() {
        this.legendTitle = 'Legend';
        this.showLegend = true;
        this.tooltipDisabled = false;
        this.showGridLines = true;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.schemeType = 'ordinal';
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Census Date';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Life expectancy [years]';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        Object.assign(this, { bubble: __WEBPACK_IMPORTED_MODULE_1__charts_data__["a" /* bubble */] });
    }
    BubbleComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    BubbleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bubble',
            template: __webpack_require__("../../../../../src/app/pages/charts/bubble/bubble.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], BubbleComponent);
    return BubbleComponent;
}());

//# sourceMappingURL=bubble.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/charts.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bubble; });
var single = [
    {
        name: 'Germany',
        value: 40632
    },
    {
        name: 'United States',
        value: 49737
    },
    {
        name: 'France',
        value: 36745
    },
    {
        name: 'United Kingdom',
        value: 36240
    },
    {
        name: 'Spain',
        value: 33000
    },
    {
        name: 'Italy',
        value: 35800
    }
];
var multi = [
    {
        name: 'Germany',
        series: [
            {
                name: '2017',
                value: 71632
            },
            {
                name: '2010',
                value: 40632
            },
            {
                name: '2000',
                value: 76953
            },
            {
                name: '1990',
                value: 31476
            }
        ]
    },
    {
        name: 'United States',
        series: [
            {
                name: '2017',
                value: 82632
            },
            {
                name: '2010',
                value: 49737
            },
            {
                name: '2000',
                value: 55986
            },
            {
                name: '1990',
                value: 37060
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2017',
                value: 51732
            },
            {
                name: '2010',
                value: 36745
            },
            {
                name: '2000',
                value: 34774
            },
            {
                name: '1990',
                value: 29476
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2017',
                value: 95652
            },
            {
                name: '2010',
                value: 36240
            },
            {
                name: '2000',
                value: 32543
            },
            {
                name: '1990',
                value: 26424
            }
        ]
    }
];
var bubble = [
    {
        name: 'Germany',
        series: [
            {
                name: '2009',
                x: new Date(2009, 0, 1),
                y: 80.3,
                r: 80.4
            },
            {
                name: '2006',
                x: new Date(2006, 0, 1),
                y: 80.3,
                r: 78
            },
            {
                name: '1995',
                x: new Date(1995, 0, 1),
                y: 77.7,
                r: 58.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'United States',
        series: [
            {
                name: '2010',
                x: new Date(2010, 0, 1),
                y: 78.8,
                r: 310
            },
            {
                name: '2005',
                x: new Date(2005, 0, 1),
                y: 76.9,
                r: 283
            },
            {
                name: '1996',
                x: new Date(1996, 0, 1),
                y: 78.7,
                r: 59.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.4,
                r: 253
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2008',
                x: new Date(2008, 0, 1),
                y: 81.4,
                r: 63
            },
            {
                name: '2000',
                x: new Date(2000, 0, 1),
                y: 79.1,
                r: 59.4
            },
            {
                name: '1994',
                x: new Date(1994, 0, 1),
                y: 76.7,
                r: 58.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'United Kingdom',
        series: [
            {
                name: '2007',
                x: new Date(2007, 0, 1),
                y: 80.2,
                r: 62.7
            },
            {
                name: '2003',
                x: new Date(2003, 0, 1),
                y: 77.8,
                r: 58.9
            },
            {
                name: '1995',
                x: new Date(1995, 0, 1),
                y: 78.7,
                r: 59.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.7,
                r: 57.1
            }
        ]
    }
];
//# sourceMappingURL=charts.data.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bar_bar_component__ = __webpack_require__("../../../../../src/app/pages/charts/bar/bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pie_pie_component__ = __webpack_require__("../../../../../src/app/pages/charts/pie/pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__line_line_component__ = __webpack_require__("../../../../../src/app/pages/charts/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bubble_bubble_component__ = __webpack_require__("../../../../../src/app/pages/charts/bubble/bubble.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'bar', pathMatch: 'full' },
    { path: 'bar', component: __WEBPACK_IMPORTED_MODULE_5__bar_bar_component__["a" /* BarComponent */], data: { breadcrumb: 'Bar Charts' } },
    { path: 'pie', component: __WEBPACK_IMPORTED_MODULE_6__pie_pie_component__["a" /* PieComponent */], data: { breadcrumb: 'Pie Charts' } },
    { path: 'line', component: __WEBPACK_IMPORTED_MODULE_7__line_line_component__["a" /* LineComponent */], data: { breadcrumb: 'Line Charts' } },
    { path: 'bubble', component: __WEBPACK_IMPORTED_MODULE_8__bubble_bubble_component__["a" /* BubbleComponent */], data: { breadcrumb: 'Bubble Charts' } }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__bar_bar_component__["a" /* BarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pie_pie_component__["a" /* PieComponent */],
                __WEBPACK_IMPORTED_MODULE_7__line_line_component__["a" /* LineComponent */],
                __WEBPACK_IMPORTED_MODULE_8__bubble_bubble_component__["a" /* BubbleComponent */]
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/line/line.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Line Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-line-chart\n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"xAxisLabel\"\n                        [yAxisLabel]=\"yAxisLabel\"\n                        [autoScale]=\"autoScale\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-line-chart>                  \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Area Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-area-chart\n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"xAxisLabel\"\n                        [yAxisLabel]=\"yAxisLabel\"\n                        [autoScale]=\"autoScale\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-area-chart>                  \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Stacked Area Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-area-chart-stacked                     \n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"xAxisLabel\"\n                        [yAxisLabel]=\"yAxisLabel\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-area-chart-stacked>                  \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xl-6 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Normalized Area Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-area-chart-normalized\n                        [scheme]=\"colorScheme\"\n                        [results]=\"multi\"\n                        [gradient]=\"gradient\"\n                        [xAxis]=\"showXAxis\"\n                        [yAxis]=\"showYAxis\"\n                        [legend]=\"showLegend\"\n                        [showXAxisLabel]=\"showXAxisLabel\"\n                        [showYAxisLabel]=\"showYAxisLabel\"\n                        [xAxisLabel]=\"xAxisLabel\"\n                        [yAxisLabel]=\"yAxisLabel\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-area-chart-normalized>                  \n                </div>\n            </div>\n        </div>\n    </div>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/charts/line/line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_data__ = __webpack_require__("../../../../../src/app/pages/charts/charts.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineComponent = /** @class */ (function () {
    function LineComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.autoScale = true;
        Object.assign(this, { single: __WEBPACK_IMPORTED_MODULE_1__charts_data__["c" /* single */], multi: __WEBPACK_IMPORTED_MODULE_1__charts_data__["b" /* multi */] });
    }
    LineComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    LineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-line',
            template: __webpack_require__("../../../../../src/app/pages/charts/line/line.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LineComponent);
    return LineComponent;
}());

//# sourceMappingURL=line.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/pie/pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Pie Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-pie-chart\n                        [scheme]=\"colorScheme\"\n                        [results]=\"single\"\n                        [legend]=\"showLegend\"\n                        [explodeSlices]=\"explodeSlices\"\n                        [labels]=\"showLabels\"\n                        [doughnut]=\"doughnut\"\n                        [gradient]=\"gradient\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-pie-chart>          \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Advanced Pie Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-advanced-pie-chart\n                        [scheme]=\"colorScheme\"\n                        [results]=\"single\"\n                        [gradient]=\"gradient\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-advanced-pie-chart>       \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Pie Grid Chart</h5>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">              \n                <div class=\"w-100 h-300p\">\n                    <ngx-charts-pie-grid\n                        [scheme]=\"colorScheme\"\n                        [results]=\"single\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-pie-grid>      \n                </div>\n            </div>\n        </div>\n    </div>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/charts/pie/pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_data__ = __webpack_require__("../../../../../src/app/pages/charts/charts.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieComponent = /** @class */ (function () {
    function PieComponent() {
        this.showLegend = true;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        Object.assign(this, { single: __WEBPACK_IMPORTED_MODULE_1__charts_data__["c" /* single */] });
    }
    PieComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    PieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pie',
            template: __webpack_require__("../../../../../src/app/pages/charts/pie/pie.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PieComponent);
    return PieComponent;
}());

//# sourceMappingURL=pie.component.js.map

/***/ })

});
//# sourceMappingURL=charts.module.chunk.js.map