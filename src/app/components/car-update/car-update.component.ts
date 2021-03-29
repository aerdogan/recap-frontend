import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})

export class CarUpdateComponent implements OnInit {

  carUpdateForm : FormGroup;
  car:CarDetail;

  brands: Brand[];
  colors: Color[];

  constructor(
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService,
    private carService:CarService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createCarUpdateForm()
    this.getBrands()
    this.getColors()
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsById(params["carId"])
      }
    })
  }

  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      name: ["",Validators.required],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required]
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data
    })
  }

  updateCar(){
    if(this.carUpdateForm.valid){      
      let carModel = Object.assign({},this.carUpdateForm.value)
      carModel.id = this.car.id;
      this.carService.update(carModel).subscribe(response=>{
        this.toastrService.success(response.message)
      },responseError=>{
        this.toastrService.success(responseError.message)
      })
    }else{
      this.toastrService.error("Form eksik","Hata")
    }    
  }

  getCarDetailsById(carId:number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.car = response.data;
      this.carUpdateForm.controls['colorId'].setValue(this.car.colorId)
      this.carUpdateForm.controls['brandId'].setValue(this.car.brandId)
      this.carUpdateForm.controls['name'].setValue(this.car.name)
      this.carUpdateForm.controls['modelYear'].setValue(this.car.modelYear)
      this.carUpdateForm.controls['dailyPrice'].setValue(this.car.dailyPrice)
      this.carUpdateForm.controls['description'].setValue(this.car.description)
    });
  }

}
