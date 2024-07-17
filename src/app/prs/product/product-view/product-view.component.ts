import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.class'; // '../' moves to the parent folder that encases the folder you are currently i. Use to reach other folders/files outside of the folder you are in. Needs /[foldername] if in a folder within the parent folder. 
import { ProductService } from '../product.service';
import { Vendor } from './../../vendor/vendor.class';
import { VendorServices } from './../../vendor/vendor.class';


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

  constructor(
    private pdctsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router)
    {}
  
    //call methods from pdctsvc here.
}
