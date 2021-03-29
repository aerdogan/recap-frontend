import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  
  private url = environment.apiUrl + "Payments/";

  constructor(private httpClient: HttpClient) { }

  payment(payment:Payment, isSaveCard:boolean):Observable<ResponseModel> {
    let newPath = this.url + "payment"
    return this.httpClient.post<ResponseModel>(newPath, payment) 
  }

}
