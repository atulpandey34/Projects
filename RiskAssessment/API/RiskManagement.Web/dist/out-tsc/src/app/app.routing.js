"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var not_found_component_1 = require("./pages/errors/not-found/not-found.component");
exports.routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
    { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, {
    preloadingStrategy: router_1.PreloadAllModules,
});
//# sourceMappingURL=app.routing.js.map