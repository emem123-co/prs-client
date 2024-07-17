import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl = "http://localhost:5000/api/products";

  products: Product[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Product[]>;
  }
  get(id: number): Observable<Product> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>;
  }
  create(product: Product): Observable<Product> {
    return this.http.post(`${this.baseurl}`, product) as Observable<Product>;
  }
  change(product: Product): Observable<any> {
    return this.http.put(`${this.baseurl}/${product.id}`, product) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}