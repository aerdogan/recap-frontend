import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car, CarDetail } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private url = environment.apiUrl + "Cars/";

  constructor(private httpClient: HttpClient) { }
  
  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.url + "getlist";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsById(carId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetailsbyid?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetailsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

}
