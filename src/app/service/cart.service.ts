import { Injectable } from '@angular/core';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  buy!:Products[]
  constructor() {
    this.buy = []
  }

  addToArray(obj:Products){
    this.buy.push(obj)
    console.log(this.buy)
  }

  switchArray(){
    return this.buy
  }
}
