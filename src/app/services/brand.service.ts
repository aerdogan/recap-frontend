import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BrandResponseModel } from '../models/brand.ResponseModel';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  private url = environment.apiUrl + "Brands/";

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.url + "getlist")
  }

  getById(id:number):Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.url + "getbyid?id=" + id)
  }
  
}
