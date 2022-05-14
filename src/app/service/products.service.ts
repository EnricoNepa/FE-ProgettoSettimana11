import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:4201'

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<Products[]>(`${this.baseUrl}/products`)
  }
  getProduct(id:number){
    return this.http.get<Products>(`${this.baseUrl}/products/${id}`)
  }
}
