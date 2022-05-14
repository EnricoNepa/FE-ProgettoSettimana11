import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Products } from 'src/app/interface/products';
import { CartService } from 'src/app/service/cart.service';
import { AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  buys!:Products[]
  totCart:number=0
  form!: FormGroup

  constructor(private cservice:CartService, private fbuilder:FormBuilder) {}

  ngOnInit(): void {
    this.totCart = 0
    this.buys = this.cservice.switchArray()
    this.totCart = this.totaleCarrello()


    this.form = this.fbuilder.group({
      name:[],
      email:[],
      address:[]
    })
  }

  clearCart(){
    this.buys = []
    this.totCart = 0
    console.log(this.form.value)
    alert("Grazie per il tuo acquisto! ❤️")
    window.location.reload();
  }

  totaleCarrello(){
    for(let i=0; i<this.buys.length; i++){
      this.totCart += this.buys[i].price
    }
    return this.totCart
  }

  formCheck(input:string){
    return this.form.get(input) as AbstractControl;
  }
}
