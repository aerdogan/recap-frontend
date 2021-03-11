import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ColorResponseModel } from '../models/color.ResponseModel';

@Injectable({
  providedIn: 'root'
})

export class ColorService {
  private url = environment.apiUrl + "Colors/";

  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.url + "getlist")
  }

  getById(id:number):Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.url + "getbyid?id=" + id)
  }

}
