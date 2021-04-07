import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel, ResponseModel, SingleResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl + "Users/"

  constructor(private httpClient:HttpClient) { }

  getUserByEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath= this.apiUrl+"getbymail?email="+email
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }

  update(user:User):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl + "update"
    return this.httpClient.post<SingleResponseModel<User>>(newPath,user)
  }

}