import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //put dummy product : Prodct data
  product: Product | undefined;

  //the product data came from the property binding in the parent component (catalog.component.html)
  @Input() set productData(product: Product | undefined) {
    this.product = product;
  }
  
  constructor() { }


}
