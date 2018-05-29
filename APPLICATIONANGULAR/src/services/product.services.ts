import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private productsUrl = 'http://localhost:5000/api/products/';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  getProducts(params): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsUrl + params);
  }

  updateProduct(Product: Product) {
    let body = JSON.stringify(Product);            

    return this.http.put(this.productsUrl + Product.row, body, {headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  saveNewProduct(Product: Product) {
    let body = JSON.stringify(Product);            

    return this.http.post(this.productsUrl, body, {headers: this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  deleteProduct(Row: number) {

    return this.http.delete(this.productsUrl + Row, {headers: this.headers}).toPromise()
            .then(this.extractData)
            .catch(this.handleError);

  }

  extractData(result: Response) {
    return result || {};
  }

    handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json() || 'Server Error');
  }
}

export interface Product {
  row: number,
  imagePath: string,
  productCode: string,
  product: string,
  season: string,
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  category5: string;
  originalSell: number;
  performanceRank: number;
  performanceRating: string;
  conversionRate: number;
  returnRate: number;
  clickThroughRate: number;
  impression: number;
  costPrice: number;
  fPMD: string;
  tDSales: number;
  tDRcvdUnits: number;
  sOH: number;
  wOS: number;
  tDST: number;
  weeksInStore: number;
  imagePathThumbnail: string;
  imagePathTile: string;
  _Count: number;
  previousWos: number;
  details: string;
}