import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"", pathMatch:"full",  component:HomeComponent},
  {path:"cars/:brandId", component:CarComponent},
  {path:"cars/:colorId", component:CarComponent},
  {path:"cars/:brandId/:colorId", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cardetail/:carId", component:CardetailComponent},    
  {path:"cardetail", component:CardetailComponent},  
  {path:"customer", component: CustomerComponent},
  {path:"rental/add/:carId", component: RentalAddComponent},
  {path:"rental/add", component: RentalAddComponent},
  {path:"cart", component:CartComponent},
  {path:"rental", component: RentalComponent},  
  {path:"payment", component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
