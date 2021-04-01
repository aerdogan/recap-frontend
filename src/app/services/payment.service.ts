import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { Payment } from '../models/payment';
import { ListResponseModel, ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  
  private card : Card;
  private url = environment.apiUrl + "Payments/";

  constructor(private httpClient: HttpClient) { }

  payment(payment:Payment, saveCard:boolean):Observable<ResponseModel> {    
    let paymentPath = this.url + "payment"
    if(saveCard)
    {
      let cardPath = this.url + "savecard"
      this.card.customerId = payment.customerId;
      this.card.cardOwnerName = payment.cartOwnerName;
      this.card.cardNumber = payment.cardNumber;
      this.card.cardExpirationDate = payment.expirationDate;
      this.card.cardCvv = payment.cardCvv;
      this.httpClient.post<ResponseModel>(cardPath, this.card)       
    }
    return this.httpClient.post<ResponseModel>(paymentPath, payment)
  }

  getCardListByCustomerId(customerId:number):Observable<ListResponseModel<Card>> {
    let newPath = this.url + "listcards?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }

}
