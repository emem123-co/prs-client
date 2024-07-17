import { Injectable } from '@angular/core';
import { User } from './prs/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User | null = null;

  constructor() { }

 /*  checkLogin() {
    if(this.loggedInUser?.id == null)

  } */
}
