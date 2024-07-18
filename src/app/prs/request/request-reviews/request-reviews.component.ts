import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { SystemService } from '../../../system.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-reviews',
  templateUrl: './request-reviews.component.html',
  styleUrl: './request-reviews.component.css'
})
export class RequestReviewsComponent {

  requests: Request[] = [];

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) {}

  ngOnInit(): void {
    this.sys.checkLogin();
    let userId = this.sys.loggedInUser?.id ?? 1;
    this.reqsvc.listForReview(userId).subscribe({
      next: (res) => {
        console.log(res);
        this.requests = res as Request[];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}