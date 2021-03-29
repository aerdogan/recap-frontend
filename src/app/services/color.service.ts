import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel, SingleResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})

export class ColorService {
  private url = environment.apiUrl + "Colors/";

  constructor(private httpClient: HttpClient) { }

  add(color:Color):Observable<ListResponseModel<Color>> {
    let newPath = this.url + "add";
    return this.httpClient.post<ListResponseModel<Color>>(newPath, color);
  }

  update(color:Color):Observable<ListResponseModel<Color>> {
    let newPath = this.url + "update";
    return this.httpClient.post<ListResponseModel<Color>>(newPath, color);
  }

  delete(color:Color):Observable<ListResponseModel<Color>> {
    let newPath = this.url + "delete";
    return this.httpClient.post<ListResponseModel<Color>>(newPath, color);
  }

  getColors():Observable<ListResponseModel<Color>> {
    let newPath = this.url + "getlist";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getById(id:number):Observable<SingleResponseModel<Color>> {
    let newPath = this.url + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }

}
