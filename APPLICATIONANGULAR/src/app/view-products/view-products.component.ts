//Gabriel Ochoa - 28/05/2018

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ConfigurationGlobal } from '../configuration.global';
import { ProductService, Product } from './../../services/product.services';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
  providers: [ ProductService ]  
})

export class ViewProductsComponent implements OnInit {

  configuration;
  @Output() clicked = new EventEmitter();

  //ng2-easy-table columns configuration. 
  columns = [
    { key: 'imagePath', title: 'Image' },
    { key: 'product', title:'Name' },
    { key: 'productCode', title: 'Product Code' },
    { key: 'performanceRating', title: 'Rating' },
    { key: '', title: '' },
  ];
  pagination = {
    limit: 5,
    offset: 1,
    count: null,
  };

  data = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.configuration = ConfigurationGlobal.config;

    const params = `Paging?Rows=${this.pagination.limit}&PageNumber=${this.pagination.offset}`; // see https://github.com/typicode/json-server
    this.getData(params);
  }

  //Get all rows
  getData(params: string) {
    this.configuration.isLoading = true;
    this.productService.getProducts(params).subscribe((response: Array<Product>) => {      
      this.data = (<any>response).value.products;
      this.pagination.count = (<any>response).value.total - this.pagination.limit; // ensure this.pagination.count is set only once and contains count of whole array not just paginated one
      this.pagination = { ...this.pagination };
      this.configuration.isLoading = false;
    },
    error => {
      console.error('ERROR: ', error.message);
    });
  }

  eventEmitted(obj) {
    if (obj.event == "onClick")
      this.clicked.emit( { Product: obj.value.row, Action:'view' } );
    else
      this.pagingEvent(obj);
  }

  //Paging event to get data from the server
  private pagingEvent(obj) {
    this.pagination.limit = obj.value.limit ? obj.value.limit : this.pagination.limit;
    this.pagination.offset = obj.value.page ? obj.value.page : this.pagination.offset;
    this.pagination = { ...this.pagination };
    const params = `Paging?Rows=${this.pagination.limit}&PageNumber=${this.pagination.offset}`; // see https://github.com/typicode/json-server
    this.getData(params);
  }

  //Send data to details products
  updateProduct(obj) {
    this.clicked.emit( { Product: obj, Action:'edit' } );
  }

  //Delete Product
  deleteProduct(row: number) {
    if(confirm("Are you sure to delete the register?")) {
      this.productService.deleteProduct(row);      
      const params = `Paging?Rows=${this.pagination.limit}&PageNumber=${this.pagination.offset}`; // see https://github.com/typicode/json-server
      this.getData(params);
    }
  }
}
