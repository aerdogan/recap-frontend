import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/car';
import { ListResponseModel, ResponseModel, SingleResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private url = environment.apiUrl + "Cars/";

  constructor(private httpClient: HttpClient) { }
 
  // carId'ye göre araç detayları
  getCarDetailsById(carId:number):Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetailsbyid?id=" + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }

  // Markaya göre araç listesi
  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetailsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  // Renge göre araç listesi
  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  // Markaya ve renge göre araç listesi
  getCarDetailsByBrandAndColor(brandId:number, colorId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetailsbybrandidandcolorid?brandId="+ brandId +"&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  
  // Araç Listesi
  getCarDetails():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.url + "getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

}
