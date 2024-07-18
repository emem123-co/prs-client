import { Component } from '@angular/core';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../system.service';
import { Requestline } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrl: './request-review-item.component.css'
})
export class RequestReviewItemComponent {

  isReadonly = false;
  isHidden = false;
  request: Request = new Request();

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private reqlsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router

  ) {}

  approve(): void {
    this.reqsvc.approve(this.request).subscribe({
      next: (res) => {
        console.log("Request is APPROVED!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  reject(): void {
    this.reqsvc.reject(this.request).subscribe({
      next: (res) => {
        console.log("Request is REJECTED!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


  refresh(): void {
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

  ngOnInit(): void {
    this.sys.checkLogin();
    this.reqlsvc.get(this.request.id);
    this.refresh();
  }

  
}