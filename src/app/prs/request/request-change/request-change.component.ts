import { Component } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrl: './request-change.component.css'
})
export class RequestChangeComponent {

  isReadonly = false;
  isHidden = false;
  request: Request = new Request();
  
  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.log("Request changed successfully!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.request = res as Request;
      },
      error: (err) => {
        console.error(err);
      }    
    })
  }
}