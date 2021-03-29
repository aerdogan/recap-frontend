import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarsComponent } from './components/cars/cars.component';
import { CartComponent } from './components/cart/cart.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorsComponent } from './components/colors/colors.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full",  component:HomeComponent},
  {path:"carlist/:brandId", component:CarComponent},
  {path:"carlist/:colorId", component:CarComponent},
  {path:"carlist/:brandId/:colorId", component:CarComponent},
  {path:"carlist", component:CarComponent},  

  {path:"car/add", component:CarAddComponent, canActivate:[LoginGuard] },
  {path:"car/update/:carId", component:CarUpdateComponent, canActivate:[LoginGuard] },
  {path:"cars", component:CarsComponent},  

  {path:"brand/add", component:BrandAddComponent , canActivate:[LoginGuard]},
  {path:"brand/update/:brandId", component:BrandUpdateComponent , canActivate:[LoginGuard]},

  {path:"brands", component:BrandsComponent},

  {path:"color/add", component:ColorAddComponent , canActivate:[LoginGuard]},
  {path:"color/update/:colorId", component:ColorUpdateComponent , canActivate:[LoginGuard]},
  {path:"colors", component:ColorsComponent},

  {path:"cardetail/:carId", component:CardetailComponent},    
  {path:"cardetail", component:CardetailComponent},

  {path:"customer", component: CustomerComponent},
  
  {path:"cart", component:CartComponent},

  {path:"payment/:saveCard", component:PaymentComponent},
  {path:"payment", component:PaymentComponent},
    
  {path:"rental/add/:carId", component: RentalAddComponent},
  {path:"rental/add", component: RentalAddComponent},
  {path:"rental", component: RentalComponent},

  {path:"login", component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
