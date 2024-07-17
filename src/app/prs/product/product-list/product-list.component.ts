import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(
    private prdsvc: ProductService
  ) {}

  ngOnInit(): void {
    this.prdsvc.list().subscribe({
      next: (res) => {
        console.table(res);
        this.products = res as Product[];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}