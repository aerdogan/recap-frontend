import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetailsResponseModel, CarResponseModel } from '../models/car.ResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private url = environment.apiUrl + "Cars/";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.url + "getlist")
  }

  getById(id:number):Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.url + "getbyid?id=" + id)
  }

  getByBrandId(brandId:number):Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.url + "getcarsbybrandid?brandId=" + brandId)
  }

  getByColorId(colorId:number):Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.url + "getcarsbycolorid?brandId=" + colorId)
  }

  getCarDetails():Observable<CarDetailsResponseModel> {
    return this.httpClient.get<CarDetailsResponseModel>(this.url + "getcardetails")
  }

}
