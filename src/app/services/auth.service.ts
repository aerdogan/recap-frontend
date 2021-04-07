import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModel, RegisterModel } from '../models/authModel';
import { SingleResponseModel } from '../models/responseModel';
import { TokenDetail, TokenModel } from '../models/tokenModel';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenDetail = new TokenDetail()
  
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

  decodeToken(token:string){
    let helper = new JwtHelperService()    
    let data = helper.decodeToken(token)    
    this.tokenDetail.email = data.email
    this.tokenDetail.username = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    this.tokenDetail.claims = data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  }

  isAuthenticated(){
    let token = this.storageService.get("token")
    if( token ){
      this.decodeToken(token)
      return true;
    }
    else{
      return false;
    }
  }

}
