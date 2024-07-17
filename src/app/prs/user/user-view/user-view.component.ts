import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {

  isReadonly = true;
  isHidden = true;
  user: User = new User();
  verifyRemove: boolean = false;
  
  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  toggleVerifyRemove(): void {
    this.verifyRemove = !this.verifyRemove;
  }

  remove(): void {
    this.usrsvc.remove(this.user.id).subscribe({
      next: (res) => {
          console.log("User deleted successfully!");
          this.router.navigateByUrl("/user/list");
      },
    error: (err) =>{
      console.error(err);
    }
  })}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    console.log("ID is ", id);
    this.usrsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res as User;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
} //end UserViewComponent