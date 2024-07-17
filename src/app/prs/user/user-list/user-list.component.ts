import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: User[] = []; //saving into local variable.
  
  constructor(
    private usrsvc: UserService
    ){}
    
  componentTitle = "User List";
  createRoute = '/user/create'; 


    ngOnInit(): void {
      this.usrsvc.list().subscribe({
        next: (res) =>{
          this.users = res as User[];
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
}//end of UserListComponent
