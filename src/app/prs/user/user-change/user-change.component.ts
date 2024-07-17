import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrl: './user-change.component.css'
})
export class UserChangeComponent {

  isReadonly = false;
  isHidden = false;
  user: User = new User();

constructor(
  private usrsvc: UserService,
  private route: ActivatedRoute,
  private router: Router
){}

  save(): void {
    this.usrsvc.change(this.user).subscribe({
      next: (res) =>{
        this.router.navigateByUrl("/user/list")
        },
      error: (err) => {
        console.error(err);
        }
      })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usrsvc.get(id).subscribe({
      next:(res)=> {
        console.log(res);
        this.user = res as User;
        },
        error: (err) => {
          console.error(err);
        }
    })
  }
}