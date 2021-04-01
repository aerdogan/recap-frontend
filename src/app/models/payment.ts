export interface Payment{
    cartOwnerName:string;
    cardNumber:string;
    expirationDate:string;
    cardCvv:number;
    customerId:number;
    paymentDate:Date;
}

/*
public int Id { get; set; }
public DateTime PaymentDate { get; set; }
public int CustomerId { get; set; }
public int? CardId { get; set; }
public decimal Total { get; set; }
*/