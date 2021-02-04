import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service';
import {CartService} from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: Product | any;
  addedToWishlist:boolean=false;

  constructor(
    private msg :MessengerService,
    private cartService:CartService,
    private wishlistService:WishlistService
    ) { }

  ngOnInit() {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })
 
  }
  handleAddToWishlist(){
this.wishlistService.addToWishlist(this.productItem.id).subscribe(()=>{
  this.addedToWishlist=true;
  //turing heart to solid heart
})
  }
  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist=false;
    })
  }


}
