import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

baseurl: string = "http://localhost:6000/"

  constructor( private http: HttpClient ) { }

  list(): Observable<User[]>
  {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }
}