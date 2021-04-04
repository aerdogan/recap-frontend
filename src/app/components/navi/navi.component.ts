import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  user= faUserCircle

  isAuth:boolean

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
  }

}
