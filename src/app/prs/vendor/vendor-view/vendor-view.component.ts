import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from './../vendor.service';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrl: './vendor-view.component.css'
})
export class VendorViewComponent {

  isReadonly = true;
  isHidden = true;
  vendor: Vendor = new Vendor();
  verifyRemove: boolean = false;

  constructor(
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  toggleVerifyRemove(): void {
    this.verifyRemove = !this.verifyRemove;
  }

  remove(): void {
    this.vndsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.log("Vendor deleted successfully!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    console.log("ID is ", id);
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