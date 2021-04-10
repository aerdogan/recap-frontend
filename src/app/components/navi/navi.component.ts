import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  userIcon = faUserCircle;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuth();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  roleIfExist(claim: string) {
    return this.authService.tokenDetail?.claims?.indexOf(claim) > -1;
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  cartCount() {
    return this.cartService.cartList().length;
  }
}
