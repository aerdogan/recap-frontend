import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, FormBuilder, Validators,} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User;

  userForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createUserForm();
    this.getUserByEmail();
  }

  getUserByEmail(){    
    this.userService.getUserByEmail("test@test.com").subscribe(response=>{
      this.user = response.data
      this.userForm.setValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email
      })
    });
  }

  createUserForm(){
    this.userForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
    })
  }

  update(){
    if(this.userForm.valid){
      let userModel = Object.assign({},this.userForm.value)
      this.userService.update(userModel).subscribe(response=>{
        this.toastrService.success("Profil güncellendi")
      },responseError=>{
        this.toastrService.error("Güncelleme yapılamadı", "Hata")
      })
    }
  }

}