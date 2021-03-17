import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer, CustomerDetail } from '../models/customer';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private url = environment.apiUrl + "Customers/";

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>> {
    let newPath = this.url + "getlist";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getById(id:number):Observable<ListResponseModel<Customer>> {
    let newPath = this.url + "getbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  
  getCustomerDetails():Observable<ListResponseModel<CustomerDetail>> {
    let newPath = this.url + "getcustomerdetails";
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newPath);
  }
  
}
