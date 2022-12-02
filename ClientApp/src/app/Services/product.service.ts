import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BaseUrl = 'http://localhost:5245/api/catalog';
  constructor(private myClient: HttpClient) { }

  getAll() : Observable<Product[]> {
    return this.myClient.get<Product[]>(this.BaseUrl);
  }

  getByID(id: number) : Observable<Product> {
    return this.myClient.get<Product>(`${this.BaseUrl}/${id}`);
  }

  insert(product: Product)
  {
    return this.myClient.post(this.BaseUrl, product);
  }

  update(product: Product){
    return this.myClient.put(`${this.BaseUrl}/${product.id}`, product);
  }

  delete(id: number){
    return this.myClient.delete(`${this.BaseUrl}/${id}`);
  }
}
