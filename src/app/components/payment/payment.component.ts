import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  
  paymentForm: FormGroup
  cartTotal: number
  saveCard: boolean
  
  constructor(
    private formBuilder:FormBuilder, 
    private cartService:CartService,
    private paymentService:PaymentService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createPaymentForm()
    this.cartService.cartSummary.subscribe(response => { this.cartTotal = response })
  }

  createPaymentForm(){
    this.paymentForm = this.formBuilder.group({      
      cartOwnerName:["",Validators.required],
      cardNumber: ["",Validators.required],
      expirationDate:["", Validators.required],
      cardCvv:["",Validators.required],
      saveCard:[""]
    })
  }

  payment(){    
    if(this.paymentForm.valid){
      let paymentModel = Object.assign({},this.paymentForm.value)
      this.saveCard = this.paymentForm.value.saveCard
      this.paymentService.payment(paymentModel, this.saveCard).subscribe(
        response=>{
          this.toastrService.success(response.message,"Ödeme başarılı")
        }, 
        responseError=>{
          this.toastrService.error("Hata","Ödeme hatalı")         
        }
      )
    }
  }

}
