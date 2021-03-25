import { RentalDetail } from "./rental";

export class CartItem {
    rental:RentalDetail;
    totalPrice:number;
}

export const CartItems:CartItem[]=[];