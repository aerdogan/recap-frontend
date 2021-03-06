import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carimage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';
import { RentalService } from 'src/app/services/rental.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})

export class CardetailComponent implements OnInit {
  cardetail : CarDetail
  carimages : CarImage[] = []
  imageRoot = environment.imagePath
  isCarAvail: boolean

  constructor( 
    private carService: CarService, 
    private carImageService: CarImageService,
    private rentalService: RentalService,  
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService) {}

  ngOnInit(): void {    
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsById(params["carId"])
        this.getImagesByCarId(params["carId"])
        this.isCarAvailable(params["carId"])
      }
    })
  }

  getCarDetailsById(carId:number){
    this.carService.getCarDetailsById(carId).subscribe(response=>{
      this.cardetail = response.data
    })
  }

  isCarAvailable(carId:number) {
    this.rentalService.isCarAvailable(carId).subscribe(
      response=>{        
        this.isCarAvail = response
      }, 
      responseError=>{
        this.toastrService.error("Bu araç kiralanamaz","Uyarı")         
      }
    );
  }

  getImagesByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe(response=>{
      this.carimages = response.data
    })
  }

  getCurrentImageClass(image:CarImage){
    if(image == this.carimages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }

}