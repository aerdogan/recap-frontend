import { Injectable } from '@angular/core';
import { CartItem, CartItems } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(cartItem:CartItem){
      CartItems.push(cartItem);
  }

  removeFromCart(cartItem:CartItem){
    let item:CartItem = CartItems.find(c=>c.rental.carId===cartItem.rental.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }

}
