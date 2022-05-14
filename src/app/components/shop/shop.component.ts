import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {

  loading = false
  baseUrl = 'http://localhost:4201'
  products!: Products[] | undefined
  myFinalValue!: string;
  sub!:Subscription

  constructor(private pservice:ProductsService, private cservice:CartService) {}



  ngOnInit(): void {
    this.loading = true
    this.sub = this.pservice.get().subscribe(res=>{this.products=res
      console.log(this.products)
      this.loading = false;})
  }

  addToCart(prod: Products){
    this.cservice.addToArray(prod)
  }

}
