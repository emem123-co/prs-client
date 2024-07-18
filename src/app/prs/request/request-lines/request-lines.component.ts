import { Component } from '@angular/core';
import { Request } from '../request.class';
import { SystemService } from '../../../system.service';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrl: './request-lines.component.css'
})
export class RequestLinesComponent {

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

  review(): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        console.log("Request Reviewed successfully!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  edit(rl: Requestline): void {
    this.router.navigateByUrl(`/requestline/change/${rl.id}`)
  }
  remove(rl: Requestline): void {
    this.reqlsvc.remove(rl).subscribe({
      next: (res) => {
        console.log("Requestline Removed successfully!");
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
    this.refresh();
  }
  

}