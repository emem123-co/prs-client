import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrl: './vendor-change.component.css'
})
export class VendorChangeComponent {

  isReadonly = false;
  isHidden = false;
  vendor: Vendor = new Vendor();
  
  constructor(
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.vndsvc.change(this.vendor).subscribe({
      next: (res) => {
        console.log("Vendor changed successfully!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vndsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.vendor = res as Vendor;
      },
      error: (err) => {
        console.error(err);
      }    
    })
  }
}