import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/car';
import { Rental, RentalDetail } from '../models/rental';
import { ListResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private url = environment.apiUrl + "Rentals/";

  constructor(private httpClient: HttpClient) { }

  add(rental:Rental):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "add";
    return this.httpClient.post<ListResponseModel<CarDetail>>(newPath, rental);
  }

  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath = this.url + "getlist";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getById(id:number):Observable<ListResponseModel<Rental>> {
    let newPath = this.url + "getbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  isCarAvailable(carId:number):Observable<boolean> {
    let newPath = this.url + "iscaravailable?carId=" + carId;
    return this.httpClient.get<boolean>(newPath);
  }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.url + "getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }  

}
