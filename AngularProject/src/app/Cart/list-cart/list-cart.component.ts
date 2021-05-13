import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {
  cartItems: any;
  total: number = 0;
  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
     this.cartItems = this.cartService.getCartItem();
     console.log(this.cartItems);
     for(var i=0; i < this.cartItems.length; i++) {
        this.total = this.total +  this.cartItems[i].foodCost;
     }
  }
}
