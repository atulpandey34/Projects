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
var forms_1 = require("@angular/forms");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_toastr_1 = require("ngx-toastr");
var angular_2_dropdown_multiselect_1 = require("angular-2-dropdown-multiselect");
var pipes_module_1 = require("../theme/pipes/pipes.module");
var pages_routing_1 = require("./pages.routing");
var pages_component_1 = require("./pages.component");
var header_component_1 = require("../theme/components/header/header.component");
var footer_component_1 = require("../theme/components/footer/footer.component");
var sidebar_component_1 = require("../theme/components/sidebar/sidebar.component");
var vertical_menu_component_1 = require("../theme/components/menu/vertical-menu/vertical-menu.component");
var horizontal_menu_component_1 = require("../theme/components/menu/horizontal-menu/horizontal-menu.component");
var breadcrumb_component_1 = require("../theme/components/breadcrumb/breadcrumb.component");
var back_top_component_1 = require("../theme/components/back-top/back-top.component");
var fullscreen_component_1 = require("../theme/components/fullscreen/fullscreen.component");
var applications_component_1 = require("../theme/components/applications/applications.component");
var messages_component_1 = require("../theme/components/messages/messages.component");
var user_menu_component_1 = require("../theme/components/user-menu/user-menu.component");
var flags_menu_component_1 = require("../theme/components/flags-menu/flags-menu.component");
var side_chat_component_1 = require("../theme/components/side-chat/side-chat.component");
var favorites_component_1 = require("../theme/components/favorites/favorites.component");
var blank_component_1 = require("./blank/blank.component");
var search_component_1 = require("./search/search.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
                ngx_toastr_1.ToastrModule.forRoot(),
                ng_bootstrap_1.NgbModule.forRoot(),
                angular_2_dropdown_multiselect_1.MultiselectDropdownModule,
                pipes_module_1.PipesModule,
                pages_routing_1.routing
            ],
            declarations: [
                pages_component_1.PagesComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                sidebar_component_1.SidebarComponent,
                vertical_menu_component_1.VerticalMenuComponent,
                horizontal_menu_component_1.HorizontalMenuComponent,
                breadcrumb_component_1.BreadcrumbComponent,
                back_top_component_1.BackTopComponent,
                fullscreen_component_1.FullScreenComponent,
                applications_component_1.ApplicationsComponent,
                messages_component_1.MessagesComponent,
                user_menu_component_1.UserMenuComponent,
                flags_menu_component_1.FlagsMenuComponent,
                side_chat_component_1.SideChatComponent,
                favorites_component_1.FavoritesComponent,
                blank_component_1.BlankComponent,
                search_component_1.SearchComponent
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map