import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentalDetailsResponseModel, RentalResponseModel } from '../models/rental.ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private url = environment.apiUrl + "Rentals/";

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.url + "getlist")
  }

  getById(id:number):Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.url + "getbyid?id=" + id)
  }

  getRentalDetails():Observable<RentalDetailsResponseModel> {
    return this.httpClient.get<RentalDetailsResponseModel>(this.url + "getrentaldetails")
  }  

}
