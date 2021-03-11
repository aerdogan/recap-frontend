import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerResponseModel } from '../models/customer.ResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private url = environment.apiUrl + "Customers/";

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(this.url + "getlist")
  }

  getById(id:number):Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(this.url + "getbyid?id=" + id)
  }
  
  getCustomerDetails():Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(this.url + "getcustomerdetails")
  }
  
}
