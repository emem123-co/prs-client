import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.class'; // '../' moves to the parent folder that encases the folder you are currently i. Use to reach other folders/files outside of the folder you are in. Needs /[foldername] if in a folder within the parent folder. 
import { ProductService } from '../product.service';
import { Vendor } from './../../vendor/vendor.class';
import { VendorService } from './../../vendor/vendor.service';


// './' moves out of the file into the folder that the file is currently in. Use to access files in the same folder. 

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  product: Product = new Product();
  vendors: Vendor[] = []; //need to reference the virtual instance of Vendors within the product class.
  isReadonly = false;
  isHidden = false;
  verifyRemove: boolean = false;

  constructor(
    private pdctsvc: ProductService,
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router)
    {}

    toggleVerifyRemove(): void {
      this.verifyRemove = !this.verifyRemove;
    }
  
    remove(): void {
      this.pdctsvc.remove(this.product.id).subscribe({
        next: (res) => {
          console.log("Product deleted successfully!");
          this.router.navigateByUrl("/product/list");
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  
    change(event: { target: { value: number; }; }): void {
      this.product.price = event.target.value;
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
      console.log("ID is ", id);
      this.pdctsvc.get(id).subscribe({
        next: (res) => {
          console.log(res);
          this.product = res as Product;
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  
    //call methods from pdctsvc here.
}
