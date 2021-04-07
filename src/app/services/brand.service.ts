import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel, SingleResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  private url = environment.apiUrl + "Brands/";

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>> {
    let newPath = this.url + "getlist";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<SingleResponseModel<Brand>> {
    let newPath = this.url + "add";
    return this.httpClient.post<SingleResponseModel<Brand>>(newPath, brand);
  }

  update(brand:Brand):Observable<SingleResponseModel<Brand>> {
    let newPath = this.url + "update";
    return this.httpClient.post<SingleResponseModel<Brand>>(newPath, brand);
  }

  delete(brand:Brand):Observable<SingleResponseModel<Brand>> {
    let newPath = this.url + "delete";
    return this.httpClient.post<SingleResponseModel<Brand>>(newPath, brand);
  }

  getById(id:number):Observable<SingleResponseModel<Brand>> {
    let newPath = this.url + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }
  
}
