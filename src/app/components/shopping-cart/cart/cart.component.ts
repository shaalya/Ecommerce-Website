
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class CartComponent implements OnInit {
cartItems=[
 
 {productName:'',productId:0, qty: 0, price: 0 }
  //{id:2,productId:1,productName:'test2',qty:4,price:100,},
 //{id:3,productId:1,productName:'test3',qty:4,price:100,},
  //{id:5,productId:1,productName:'test4',qty:5,price:100,}
];

cartTotal=0
  constructor(private msg:MessengerService  ) { }
 
  ngOnInit () 
  {
    this.msg.getMsg().subscribe((product:Product) =>{
      this.addProductToCart(product)

    
    })
   
  }
 addProductToCart(product:Product){
   let productExists=false
   for(let i in this.cartItems){
    if(this.cartItems[i].productId === product.id){
      this.cartItems[i].qty++
      productExists=true
      break;
    }

    }
   if(!productExists){
    this.cartItems.push({
      productId:product.id,
  productName:product.name,
  qty:1,
  price:product.price
    })
   }

    this.cartTotal=0
      this.cartItems.forEach(item=>{
        this.cartTotal+=(item.qty*item.price)
      })
    
     }
    }