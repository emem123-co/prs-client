import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrl: './product-change.component.css'
})
export class ProductChangeComponent {

  isReadonly = false;
  isHidden = false;
  product: Product = new Product();
  vendors: Vendor[] = [];
  
  constructor(
    private prdsvc: ProductService,
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.prdsvc.change(this.product).subscribe({
      next: (res) => {
        console.log("Product changed successfully!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.vendors = res as Vendor[];
      },
      error: (err) => {
        console.error(err);
      }
    })
    let id = this.route.snapshot.params["id"];
    this.prdsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.product = res as Product;
      },
      error: (err) => {
        console.error(err);
      }    
    })
  }
}