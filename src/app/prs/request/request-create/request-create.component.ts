import { Component } from '@angular/core';
import { Request } from '../request.class';
import { Router } from '@angular/router';
import { SystemService } from '../../../system.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrl: './request-create.component.css'
})
export class RequestCreateComponent {

  isReadonly = false;
  isHidden = false;
  request: Request = new Request();

  constructor(
    private sys: SystemService,
    private usrsvc: RequestService,
    private router: Router
  ) {}

  save(): void {
    this.usrsvc.create(this.request).subscribe({
      next: (res) => {
        console.log("Request created successfully!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.sys.checkLogin();
    console.warn("Request.UserId is being auto loaded!")
    this.request.userId = this.sys.loggedInUser?.id ?? 1;
  }
}