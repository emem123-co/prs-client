import { Injectable } from '@angular/core';
import { User } from './prs/user/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User | null = null;

  checkLogin(): void {
    //console.warn("WARNING: Skipping CheckLogin()")
    //return
    if(this.loggedInUser == null) {
      this.router.navigateByUrl("/user/login");
    }
  }

  constructor(
    private router: Router
  ) { }
}