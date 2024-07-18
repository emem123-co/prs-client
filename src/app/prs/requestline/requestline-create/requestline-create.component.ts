import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../system.service';
import { RequestlineService } from '../requestline.service';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrl: './requestline-create.component.css'
})
export class RequestlineCreateComponent {

  isReadonly = false;
  isHidden = false;
  requestline: Requestline = new Requestline();
  products: Product[] = [];

  constructor(
    private sys: SystemService,
    private usrsvc: RequestlineService,
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.usrsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.log("Requestline created successfully!");
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
    let requestId = this.route.snapshot.params["rid"];
    this.requestline.requestId = requestId;
  }
}