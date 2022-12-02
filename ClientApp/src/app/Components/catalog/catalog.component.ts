import { Component } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: Product[] = [
    new Product(1, 'Product 1', 100, 'Product 1 Description', 'https://picsum.photos/200/300'),
    new Product(2, 'Product 2', 200, 'Product 2 Description', 'https://picsum.photos/200/300'),
    new Product(3, 'Product 3', 300, 'Product 3 Description', 'https://picsum.photos/200/300'),
    new Product(4, 'Product 4', 400, 'Product 4 Description', 'https://picsum.photos/200/300'),
    new Product(5, 'Product 5', 500, 'Product 5 Description', 'https://picsum.photos/200/300'),
    new Product(6, 'Product 6', 600, 'Product 6 Description', 'https://picsum.photos/200/300')
  ];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => this.products = products);
  }
}
