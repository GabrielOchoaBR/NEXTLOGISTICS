import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { ProductService, Product } from './../../services/product.services';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css'],
  providers: [ ProductService ]
})

export class DetailsProductsComponent implements OnInit {

  @Input() SelectedRow : any; 
  
  SelectedProduct: Product = {} as Product;

  isDisabled = true;
  isUpdating = false; 

  constructor(private productService: ProductService) { 
    this.SelectedProduct = { imagePath: '' } as Product;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.SelectedRow != undefined && (<any>changes.SelectedRow).currentValue != undefined)
    {
      this.SelectedProduct = (<any>changes.SelectedRow).currentValue.Product;

      if ((<any>changes.SelectedRow).currentValue.Action == 'view')
      {
        this.isDisabled = true;
        this.isUpdating = false;
      }
      else
      {
        this.isDisabled = false;
        this.isUpdating = true;
        event.stopPropagation();
      }
    }
  }

  onNew() {
    this.isDisabled = false;
    this.isUpdating = false;

    this.clearInterface();
  }

  onCancel() {
    this.clearInterface();    

    this.isDisabled = true;
  }

  onSubmit(form: any): void {  

    if (form.row == '')
      form.row = 0;      
    if (form.costPrice == '')
      form.costPrice = 0;
    if (form.originalSell == '')
      form.originalSell = 0;

    if (!this.isUpdating) {
      this.onSave(form as Product);
    }
    else{

      if (form.productCode != '')
        this.SelectedProduct.productCode = form.productCode;
      if (form.performanceRating != '')
        this.SelectedProduct.performanceRating = form.performanceRating;
      if (form.product != '')
        this.SelectedProduct.product = form.product;
      if (form.originalSell == 0)
      this.SelectedProduct.costPrice = form.costPrice;
      if (form.costPrice == 0)
        this.SelectedProduct.originalSell = form.originalSell;
      if (form.category1 != '')
        this.SelectedProduct.category1 = form.category1;
      if (form.category2 != '')
        this.SelectedProduct.category2 = form.category2;
      if (form.category3 != '')
        this.SelectedProduct.category3 = form.category3;
      if (form.category4 != '')
        this.SelectedProduct.category4 = form.category4;

      this.onUpdate(this.SelectedProduct);
  }

  this.onCancel();
  
}

  onUpdate(newProduct: Product) {
    this.productService.updateProduct(newProduct);    
  }

  onSave(newProduct: Product) {
    this.productService.saveNewProduct(newProduct);    
  }

  clearInterface() {
    this.SelectedProduct = {} as Product;
    
    this.SelectedProduct.imagePath = '';
    this.SelectedProduct.productCode = null;
    this.SelectedProduct.performanceRating = null;
    this.SelectedProduct.product = null;
    this.SelectedProduct.costPrice = null;
    this.SelectedProduct.originalSell = null;
    this.SelectedProduct.category1 = null;
    this.SelectedProduct.category2 = null;
    this.SelectedProduct.category3 = null;
    this.SelectedProduct.category4 = null;
  }
}
