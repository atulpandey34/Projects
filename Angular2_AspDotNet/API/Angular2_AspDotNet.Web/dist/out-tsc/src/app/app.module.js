"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var core_2 = require("@agm/core");
var angular_calendar_1 = require("angular-calendar");
var http_2 = require("@angular/common/http");
var app_routing_1 = require("./app.routing");
var app_settings_1 = require("./app.settings");
var app_component_1 = require("./app.component");
var not_found_component_1 = require("./pages/errors/not-found/not-found.component");
var _401_service_1 = require("./pages/errors/401.service");
var ngx_cookie_1 = require("ngx-cookie");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                not_found_component_1.NotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpModule,
                ngx_cookie_1.CookieModule.forRoot(),
                http_2.HttpClientModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
                }),
                angular_calendar_1.CalendarModule.forRoot(),
                app_routing_1.routing
            ],
            providers: [{ provide: http_1.Http, useClass: _401_service_1.AuthenticatedHttpService }, app_settings_1.AppSettings, { provide: core_1.LOCALE_ID, useValue: "en-US" }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map