import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carimage';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { HomeCardColorDirective } from 'src/app/directives/home-card-color.directive'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carDetails : CarDetail[] = [] // araç bilgileri
  carImages : CarImage[] = []  // resim bilgileri

  constructor(private carService: CarService, private carDetailService: CarDetailService) { }

  ngOnInit(): void {
    this.getAllCarDetails()
    this.getAllCarImages()
  }

  getAllCarDetails(){
    this.carService.getCarDetails().subscribe(response =>{
      this.carDetails = response.data
    })
  }

  getAllCarImages(){
    this.carDetailService.getAllImages().subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarImage(carId:number){
    let imageUrl = "https://localhost:44384/images/"
    let car = this.carImages.find(x => x.carId == carId)
    return imageUrl + (car == undefined ? "default.jpg" : car.imagePath)
  }

}
