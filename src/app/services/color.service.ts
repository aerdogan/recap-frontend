import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})

export class ColorService {
  private url = environment.apiUrl + "Colors/";

  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>> {
    let newPath = this.url + "getlist";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getById(id:number):Observable<ListResponseModel<Color>> {
    let newPath = this.url + "getbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

}
