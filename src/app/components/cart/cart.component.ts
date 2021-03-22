import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car';
import { CustomerDetail } from 'src/app/models/customer';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  customers: CustomerDetail[] = []; // CustomerDetailDto listesi
  currentCustomer: number;
  currentCar: CarDetail;
  
  totalPrice: number;

  rentDate: Date;
  returnDate: Date;

  dataLoaded = false;

  rentalAddForm : FormGroup;
  constructor(
    private customerService: CustomerService,
    private carService: CarService,
    private rentalService : RentalService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.rentDate = new Date();
    this.returnDate = new Date();

    this.getCustomerDetails();

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
      }
    });
  }

  // form - alan eşleştirme yap
  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carId : ["",Validators.required],
      customerId : ["",Validators.required],
      rentDate : ["",Validators.required]      
    })
  }

  // kira ekle
  add(){
    if(this.rentalAddForm.valid){
      let rentalModel = Object.assign({},this.rentalAddForm.value)
      this.rentalService.add(rentalModel).subscribe (
        response=>{  this.toastrService.success(response.message,"Başarılı")  },
        responseError=> {
          if(responseError.error.Errors.length>0){
            for (let i = 0; i <responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
            }       
          } 
        }
      )      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }    
  }

  // müşterileri getir
  getCustomerDetails() {
    this.customerService.getCustomerDetails().subscribe((response) => {
      this.customers = response.data;
      console.log(response.data);
      this.dataLoaded = true;
    });
  }

  // seçili araç detaylarını getir
  getCarDetailsById(carId:number){
    this.carService.getCarDetailsById(carId).subscribe(response=>{
      this.currentCar = response.data[0];
      console.log(this.currentCar);
    })
  }

  calcTotalPrice(){
   // var diffDays = this.returnDate - this.rentDate;

    //var diffDays:any = Math.floor((this.returnDate - this.rentDate) / (1000 * 60 * 60 * 24));
    console.log( this.returnDate );
    //this.totalPrice = this.currentCar.dailyPrice * 5;
  }

}
