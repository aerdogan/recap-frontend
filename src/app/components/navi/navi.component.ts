import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  userIcon = faUserCircle

  isAuth:boolean

  constructor(
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated()
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/'])
    this.isAuth = this.authService.isAuthenticated()
  }

}
