import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Food } from './food';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {

  cartProducts :Food[] = [];
  allFood: any;
  selectedFood: any;

  constructor(private foodService: FoodService, private router: Router, private _cartservice:CartService) {
  }

  ngOnInit(): void { 
   
    this.foodService.getAllFood().subscribe(
      (response) => {
        this.allFood = response;
      }
    );
    
 }
 
  openItemModal(food: any){
    //this.router.navigate(['/Cart',food.id]);
    this.selectedFood = food;
    const blocker = document.getElementsByClassName('blocker')[0] as HTMLElement;
    const itemModal = document.getElementsByClassName('itemModal')[0] as HTMLElement;
    blocker.style.display = 'block';
    itemModal.style.display = 'block';
  }
    
  closeItemModal() {
    const blocker = document.getElementsByClassName('blocker')[0] as HTMLElement;
    const itemModal = document.getElementsByClassName('itemModal')[0] as HTMLElement;
    blocker.style.display = 'none';
    itemModal.style.display = 'none';
    this.selectedFood = [];
  }

  addToCart(selectedFood: any) {
    this.cartProducts.push(selectedFood);
    console.log(this.cartProducts);
    this._cartservice.setCartinfo(this.cartProducts)
    this.router.navigate(['/Cart']);
  }

  navigateTo(event: any) {
    const value = event.target.value;
    if (value != 'none') {
        this.router.navigate([value]);
    }
    return false;
}
}
///CURD 
/// Routing-> Some Problem {PUT-> URL, POST->}