import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {

  isReadonly = true;
  isHidden = true;
  user: User = new User();
  verifyRemove: boolean = false;
  

constructor(
  private usrsvc: UserService,
  private router: Router)
{}

save(): void {
  this.usrsvc.list().subscribe({
    next: (res) =>{
      this.router.navigateByUrl("/user/list")
    },
    error: (err) => {
      console.error(err);
    }
  })
}

ngOnInit(): void{}
}


