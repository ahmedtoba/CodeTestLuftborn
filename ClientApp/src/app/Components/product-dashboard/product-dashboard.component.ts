import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {
  products: Product[] = [
    new Product(1, 'Product 1', 100, 'Product 1 Description', 'https://picsum.photos/200/300'),
    new Product(2, 'Product 2', 200, 'Product 2 Description', 'https://picsum.photos/200/300'),
    new Product(3, 'Product 3', 300, 'Product 3 Description', 'https://picsum.photos/200/300'),
    new Product(4, 'Product 4', 400, 'Product 4 Description', 'https://picsum.photos/200/300')
  ]
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    //load all products from the service
    this.productService.getAll().subscribe(products => this.products = products);
  }

  addNewProduct() {
    //navigate to the /catalog/product/0 route
    this.router.navigate(['/catalog/product/0']);
  }

  editProduct(product: Product) {
    //navigate to the /catalog/product/:id route
    this.router.navigate(['/catalog/product', product.id]);
  }

  deleteProduct(product: Product) {
    //delete the product from the service
    this.productService.delete(product.id).subscribe(() => {
      //reload the products from the service
      this.productService.getAll().subscribe(products => this.products = products);
    });
  }
}
