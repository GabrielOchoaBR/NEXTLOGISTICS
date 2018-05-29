import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {TableModule} from 'ngx-easy-table';

import { AppComponent } from './app.component';
import { ViewProductsComponent } from './view-products/view-products.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsProductsComponent } from './details-products/details-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ViewProductsComponent,
    DetailsProductsComponent,    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  /*providers: [ ProductService, HttpClient ],*/
  bootstrap: [ AppComponent ]
})
export class AppModule { }
