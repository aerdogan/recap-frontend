import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class CarDetailService {

  private url = environment.apiUrl + "CarImages/";

  constructor(private httpClient: HttpClient) { }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let newPath = this.url + "getbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

}
