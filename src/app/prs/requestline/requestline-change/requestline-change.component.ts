import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrl: './requestline-change.component.css'
})
export class RequestlineChangeComponent {

  isReadonly = false;
  isHidden = false;
  requestline: Requestline = new Requestline();
  products: Product[] = [];

  constructor(
    private sys: SystemService,
    private reqlsvc: RequestlineService,
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    //this.requestline.productId = Number(this.requestline.productId);
    this.reqlsvc.change(this.requestline).subscribe({
      next: (res) => {
        console.log("Requestline changed successfully!");
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.sys.checkLogin();
    this.prdsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res as Product[];
      },
      error: (err) => {
        console.error(err);
      }
    })
    let id = this.route.snapshot.params["id"];
    this.reqlsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.requestline = res as Requestline;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}