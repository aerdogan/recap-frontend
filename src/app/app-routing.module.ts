import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"", pathMatch:"full",  component:HomeComponent},

  {path:"cars/:brandId", component:CarComponent},
  {path:"cars/:colorId", component:CarComponent},
  {path:"cars/:brandId/:colorId", component:CarComponent},
  {path:"cars", component:CarComponent},

  {path:"car/add", component:CarAddComponent, canActivate:[LoginGuard] },
  {path:"car/update/:carId", component:CarUpdateComponent, canActivate:[LoginGuard] },
  {path:"carlist", component:CarListComponent, canActivate:[LoginGuard]},

  {path:"brand/add", component:BrandAddComponent , canActivate:[LoginGuard]},
  {path:"brand/update/:brandId", component:BrandUpdateComponent , canActivate:[LoginGuard]},
  {path:"brandlist", component:BrandListComponent, canActivate:[LoginGuard]},

  {path:"color/add", component:ColorAddComponent , canActivate:[LoginGuard]},
  {path:"color/update/:colorId", component:ColorUpdateComponent , canActivate:[LoginGuard]},
  {path:"colorlist", component:ColorListComponent, canActivate:[LoginGuard]},

  {path:"cardetail/:carId", component:CardetailComponent},    
  {path:"cardetail", component:CardetailComponent},

  {path:"customer", component: CustomerComponent},
  
  {path:"cart", component:CartComponent},

  {path:"payment/:saveCard", component:PaymentComponent},
  {path:"payment", component:PaymentComponent},
    
  {path:"rental/add/:carId", component: RentalAddComponent},
  {path:"rental/add", component: RentalAddComponent},
  {path:"rental", component: RentalComponent},

  {path:"login", component:LoginComponent},
  {path:"register", component:LoginComponent},




  {path: 'not-found', component: PageNotFoundComponent},
  {path: 'notfoundurl', redirectTo: '/not-found'},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
