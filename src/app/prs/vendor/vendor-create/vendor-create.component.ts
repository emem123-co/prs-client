import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../../system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrl: './vendor-create.component.css'
})
export class VendorCreateComponent {

  isReadonly = false;
  isHidden = false;
  vendor: Vendor = new Vendor();

  constructor(
    private sys: SystemService,
    private usrsvc: VendorService,
    private router: Router
  ) {}

  save(): void {
    this.usrsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.log("Vendor created successfully!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    if(this.sys.loggedInUser == null) {
      this.router.navigateByUrl("/user/login");
    }
  }
}