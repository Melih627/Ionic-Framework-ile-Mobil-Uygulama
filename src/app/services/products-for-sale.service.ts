import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes/product';
import { Observable  } from 'rxjs';
import {  map} from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class ProductsForSaleService {

  constructor( private http: HttpClient, ) { }
  private productsUrl = 'api/AllProducts';

  headers= new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
    
  };
  GetAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  GetProductsByCategory(productname:string): Observable<Product[]> {
    const newURL= `${this.productsUrl}/?ProductName=^${productname}`;
    return this.http.get<Product[]>(newURL);
  }

  PostNewProduct(product): Observable<Product>{

    return this.http.post<Product>(this.productsUrl, product,this.httpOptions).pipe();
    
    
  }


  
}
