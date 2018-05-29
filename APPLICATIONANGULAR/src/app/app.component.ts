import { Component } from '@angular/core';

import { Product } from './../services/product.services';

import { DetailsProductsComponent  } from './details-products/details-products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  _SelectedRow = null;
  
//Get the row selected and send to the detail view
  onSelectedRow(product: any ){
    this._SelectedRow = product;
  }
}
