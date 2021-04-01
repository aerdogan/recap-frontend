export interface Card{
    id:number;
    customerId:number;
    cardOwnerName:string;
    cardNumber:string;
    cardExpirationDate:string;
    cardCvv:number;
}

export class CartSummary {
    customerId:number;
    cartTotal:number;
}