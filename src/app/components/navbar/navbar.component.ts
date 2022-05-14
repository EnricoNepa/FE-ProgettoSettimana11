import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Products } from 'src/app/interface/products';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  buys!:Products[]

  constructor(private cservice:CartService) { }

  ngOnInit(): void {
    this.buys = this.cservice.switchArray()
  }

}
