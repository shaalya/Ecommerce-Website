import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CartItems } from '../models/cart-items';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItems():Observable<CartItems[]>{

    return this.http.get<CartItems[]>(cartUrl);


  }


  addProductToCart(product:Product):Observable<any>{
    return this.http.post(cartUrl,{product});
  }

}
