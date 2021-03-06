import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{wishlistUrl} from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getWishlist(){
    //return this.http.get(wishlistUrl)

  }
  addToWishlist(productId: any){
return this.http.post(wishlistUrl , { id:productId})
  }

  removeFromWishlist(productId:any){
    return this.http.delete(wishlistUrl + '/' +productId)

  }
}
