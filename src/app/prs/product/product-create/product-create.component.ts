import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { SystemService } from '../../../system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  isReadonly = false;
  isHidden = false;
  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(
    //private sys: SystemService,
    private prdsvc: ProductService,
    private vndsvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    this.prdsvc.create(this.product).subscribe({
      next: (res) => {
        console.log("Product created successfully!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  /* ngOnInit(): void {
    if(this.sys.loggedInUser == null) {
      this.router.navigateByUrl("/user/login");
    }
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.vendors = res as Vendor[];
      },
      error: (err) => {
        console.error(err);
      }
    })
  } */
}