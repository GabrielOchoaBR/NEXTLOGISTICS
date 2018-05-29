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
var configuration_global_1 = require("../configuration.global");
var product_services_1 = require("./../../services/product.services");
var ViewProductsComponent = /** @class */ (function () {
    function ViewProductsComponent(productService) {
        this.productService = productService;
        this.clicked = new core_1.EventEmitter();
        this.columns = [
            { key: 'imagePath', title: 'Image' },
            { key: 'product', title: 'Name' },
            { key: 'productCode', title: 'Product Code' },
            { key: 'performanceRating', title: 'Rating' },
        ];
        this.data = [];
    }
    ViewProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configuration = configuration_global_1.ConfigurationGlobal.config;
        this.productService.getProducts('').subscribe(function (response) {
            _this.data = response;
        }, function (error) {
            console.error('ERROR: ', error.message);
        });
    };
    ViewProductsComponent.prototype.eventEmitted = function ($event) {
        this.clicked.emit($event.value.row);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ViewProductsComponent.prototype, "clicked", void 0);
    ViewProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-view-products',
            templateUrl: './view-products.component.html',
            styleUrls: ['./view-products.component.css'],
            providers: [product_services_1.ProductService]
        }),
        __metadata("design:paramtypes", [product_services_1.ProductService])
    ], ViewProductsComponent);
    return ViewProductsComponent;
}());
exports.ViewProductsComponent = ViewProductsComponent;
//# sourceMappingURL=view-products.component.js.map