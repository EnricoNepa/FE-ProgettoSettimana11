import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Products } from 'src/app/interface/products';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  sub!:Subscription
  products!:Products
  errorProd: boolean = true
  loading = false


  constructor(private pservice:ProductsService, private route:ActivatedRoute, cservice:CartService) { }

  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(async (params) => {
      const id = +params['id'];
      this.pservice.getProduct(id).subscribe((ris)=>{
        this.products = ris
        this.loading = false
      }, error => {
        this.errorProd = false
      })
    })
  }

}
