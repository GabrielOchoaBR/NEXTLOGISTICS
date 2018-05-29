"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ngx_easy_table_1 = require("ngx-easy-table");
var app_component_1 = require("./app.component");
var view_products_component_1 = require("./view-products/view-products.component");
var http_1 = require("@angular/common/http");
var details_products_component_1 = require("./details-products/details-products.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                view_products_component_1.ViewProductsComponent,
                details_products_component_1.DetailsProductsComponent,
            ],
            imports: [
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                ngx_easy_table_1.TableModule
            ],
            /*providers: [ ProductService, HttpClient ],*/
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map