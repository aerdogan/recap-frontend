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
   
  private url = environment.apiUrl + "Payments/";

  constructor(private httpClient: HttpClient) { }

  payment(payment:Payment):Observable<ResponseModel> {    
    let paymentPath = this.url + "payment"
    return this.httpClient.post<ResponseModel>(paymentPath, payment)
  }

  getCardListByCustomerId(customerId:number):Observable<ListResponseModel<Card>> {
    let newPath = this.url + "listcards?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }

  savecard(payment:Payment):Observable<ResponseModel> { 
    let cardPath = this.url + "savecard"
    return this.httpClient.post<ResponseModel>(cardPath, payment)       
  }

}
