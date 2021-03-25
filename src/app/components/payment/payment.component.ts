import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  
  paymentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    
  }

/*
  doPayment() {
    let rentalModel = Object.assign({}, this.rentalAddForm.value);
    rentalModel.carId = this.currentCar.id;
    this.rentalService.add(rentalModel).subscribe(
      (response) => {
        this.toastrService.success(response.message, 'Başarılı');
      },
      (responseError) => {
        this.toastrService.error(responseError.error.message, 'Hata');
      }
    );
  }
*/

}
