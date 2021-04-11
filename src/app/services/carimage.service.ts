import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carimage';
import { ListResponseModel, ResponseModel, SingleResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class CarImageService {

  private url = environment.apiUrl + "CarImages/";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let newPath = this.url + "getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getAllImages():Observable<ListResponseModel<CarImage>> {
    let newPath = this.url + "getlist";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  add(carImage:FormData):Observable<SingleResponseModel<CarImage>> {
    let newPath = this.url + "add";
    return this.httpClient.post<SingleResponseModel<CarImage>>(newPath, carImage );
  }

  deleteImage(carImage:CarImage){
    let newPath = this.url + "delete";
    return this.httpClient.post<ResponseModel>(newPath, carImage);
  }
  
}
