import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { CartService } from 'src/app/services/cart.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  
  cards:Card[]=[];
  dataLoaded = false
  paymentForm: FormGroup
  cartTotal: number
  customerId: number
  cardId : number = 0
    
  constructor(
    private formBuilder:FormBuilder, 
    private cartService:CartService,
    private paymentService:PaymentService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.cartService.data.subscribe(response => { 
      this.cartTotal = response.cartTotal,
      this.customerId = response.customerId
    })
    this.createPaymentForm()   
    this.getCardList() 
  }

  createPaymentForm(){
    this.paymentForm = this.formBuilder.group({      
      cardOwnerName:["",Validators.required],
      cardNumber: ["",Validators.required],
      cardExpirationDate :["", Validators.required],
      cardCvv:["",Validators.required],
      saveCard:[""]
    })
  }

  setCurrentCard(card:Card){
    this.paymentForm.setValue({
      cardOwnerName : card.cardOwnerName,
      cardNumber : card.cardNumber,
      cardExpirationDate : card.cardExpirationDate,
      cardCvv : card.cardCvv,
      saveCard : false,
    })
    this.cardId = card.id
  }

  payment(){    
    if(this.paymentForm.valid){
      let paymentModel = Object.assign({},this.paymentForm.value)
      paymentModel.customerId = this.customerId
      paymentModel.total = this.cartTotal
      paymentModel.cardId = this.cardId
      this.paymentService.payment(paymentModel).subscribe(
        response=>{
          this.toastrService.success(response.message,"Ödeme")
          if(paymentModel.saveCard){
            this.paymentService.savecard(paymentModel).subscribe()
          }
        }, 
        responseError=>{
          this.toastrService.error("Ödeme alınamadı","Hata")         
        }
      )
    }
  }

  getCardList() {
    this.paymentService.getCardListByCustomerId(1).subscribe((response) => {
      this.cards = response.data;    
      this.dataLoaded = true;
    });
  }

}
