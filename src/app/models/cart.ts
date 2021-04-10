export class CartItem {
  carId: number;
  customerId: number;
  rentDate: Date;
  numberOfDate: number;
  brandName: string;
  colorName: string;
  modelYear: number;
  dailyPrice: number;
  totalPrice: number;
}

export const CartItems: CartItem[] = [];

export class CartSummary {
  customerId:number;
  cartTotal:number;
}