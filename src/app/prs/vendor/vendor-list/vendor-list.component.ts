import { Component } from '@angular/core';
import { Vendor } from './../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent {

  vendors: Vendor[] =[];

  constructor(
    private vndsvc: VendorService
  ){}
  
  ngOnInit(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
          console.table(res);
          this.vendors = res as Vendor [];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
