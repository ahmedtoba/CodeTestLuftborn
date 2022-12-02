import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  id: number = 0;
  edit: boolean = false;

  productForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    //price can't be less than 0
    price: new FormControl(null, [Validators.min(0)]),
    description: new FormControl(null),
    imageUrl: new FormControl(null, [Validators.required])
  });

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //get the id from the url
    this.id = +this.route.snapshot.paramMap.get('id')!;
    //if the id is not 0, then we are in edit mode
    if (this.id) {
      this.edit = true;
      //get the product data from the server
      this.productService.getByID(this.id).subscribe(product => {
        //put the product data in the form
        this.productForm.setValue({
          name: product.name,
          price: product.price,
          description: product.description,
          imageUrl: product.image
        });
      });
    }
  }

  onSubmit() {
    //get the product data from the form
    let product : Product = {
      id: this.id,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      description: this.productForm.value.description,
      image: this.productForm.value.imageUrl
    }
    //if we are in edit mode, then update the product
    if (this.edit) {
      this.productService.update(product).subscribe(() => {
        alert('Product updated successfully');
      });
    }
    //if we are in add mode, then add the product
    else {
      this.productService.insert(product).subscribe(() => {
        alert('Product added successfully');
      });
    }
  }

}
