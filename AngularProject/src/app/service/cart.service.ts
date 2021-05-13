import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCart } from '../Cart/list-cart';

const headeroption = {
  headers: new HttpHeaders({'Content-Type':'application/JSON'})
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: ListCart ={
    foodCost: ' ',
    foodDescription: ' ',
    foodImageUrl: ' ',
    foodName: ' ',
    foodRating: 100000,
    id: 100000

  }
  cartarray:ListCart[] = []
  constructor(private http:HttpClient) { }
  baseURL: string = 'http://localhost:3000/cart'

  setCartinfo(test:any){
    this.cartarray.push(test[0])
    console.log(this.cartarray)
  }
  getCartItem(){
    return this.cartarray;
  }

}
