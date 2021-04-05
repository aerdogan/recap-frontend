import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup

  isAuth:boolean

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private storageService: StorageService,
    private toastrService : ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm()
    this.isAuth = this.authService.isAuthenticated()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password : ["", Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe( response =>{
        this.toastrService.info(response.message)
        this.storageService.set("token",response.data.token)
        this.router.navigate(['/'])
        this.isAuth = this.authService.isAuthenticated()
      }, responseError =>{
        this.toastrService.error(responseError.error)
      })
    }else{
      this.toastrService.error("Form eksik","Hata")
    }   
  }

}