import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor/vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  baseurl = "http://localhost:5000/api/vendors";

  vendors: Vendor[] = [];
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }
  change(vendor: Vendor): Observable<any> {
    return this.http.put(`${this.baseurl}/${vendor.id}`, vendor) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}