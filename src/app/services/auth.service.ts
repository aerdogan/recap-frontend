import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel, RegisterModel } from '../models/authModel';
import { SingleResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl + "Auth/";

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService) { }

  login(loginModel:LoginModel){
    let newPath = this.url + "login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel)
  }

  register(registerModel : RegisterModel){
    let newPath = this.url + "register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, registerModel)
  }

  logout(){
    this.storageService.remove("token")
  }

  isAuthenticated(){
    if( this.storageService.get("token") ){
      return true;
    }
    else{
      return false;
    }
  }



}
