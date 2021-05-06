import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food.service';
import { Food } from './food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {

  cartProducts: Food[] = [];
  total: number = 0;
  allFood!: Food[];

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit(): void { 
   
    this.foodService.getAllFood().subscribe(
      (response) => {
        console.log(response);
        this.allFood = response;
      }
    );
    
 }
    addToCart(food: Food){
      console.log("%%%%%%%%%5",this.cartProducts.push(food))
    this.foodService.getListFood(food)
      // console.log(this.cartProducts);
      this.total = this.total + food.foodCost;
     // console.log(this.foodService.getFood(food.id));
      this.router.navigate(['/Cart',food.id]);
      console.log("list-Food Component ",this.foodService.getCartItem())
    }
    
    
}
///CURD 
/// Routing-> Some Problem {PUT-> URL, POST->}