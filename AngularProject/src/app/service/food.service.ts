import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../MainScreen/list-food/food';
import { ListFoodComponent } from '../MainScreen/list-food/list-food.component';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private FoodList : any;

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/foods';

  
  getAllFood(){
    return this.httpClient.get<Food[]>(this.baseUrl);
    //return this.allProducts;
  }

  getFood(id: number){
  
    return this.httpClient.get<Food>(this.baseUrl+'/'+id);
    
  }
  // Deal with Data Base -> CURD Operation 
  // Parent Class to Others -> Make this class injectasble to other class-> then share information
  getListFood(test:object){
    // this.FoodList.push(test)
    this.FoodList = test;
    console.log("service",this.FoodList)
  }
  getCartItem(){
    return this.FoodList
  }

}
