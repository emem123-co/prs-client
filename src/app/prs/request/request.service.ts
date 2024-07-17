import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl = "http://localhost:5000/api/requests";

  constructor(
    private http: HttpClient
  ) { }

  listByStatus(status: string): Observable<Request[]> {
    return this.http.get(`${this.baseurl}/status/${status}`) as Observable<Request[]>;
  }
  listForReview(userId: number): Observable<Request[]> {
    return this.http.get(`${this.baseurl}/reviews/${userId}`) as Observable<Request[]>;
  }
  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }
  review(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/review/${request.id}`, request) as Observable<any>;
  }
  approve(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/approve/${request.id}`, request) as Observable<any>;
  }
  reject(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/reject/${request.id}`, request) as Observable<any>;
  }
  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}