import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carimage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';
import { HomeCardColorDirective } from 'src/app/directives/home-card-color.directive'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carDetails : CarDetail[] = [] // araç bilgileri
  carImages : CarImage[] = []  // resim bilgileri

  constructor(private carService: CarService, private carImageService: CarImageService) { }

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
    this.carImageService.getAllImages().subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarImage(carId:number){
    let imageUrl = environment.imagePath
    let car = this.carImages.find(x => x.carId == carId)
    return imageUrl + (car == undefined ? "default.jpg" : car.imagePath)
  }

}
