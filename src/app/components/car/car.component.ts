import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarDetail } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  cars: Car[] = [];
  cardetails: CarDetail[] = [];
  dataLoaded = false;

  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      
      if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"])
      } else if (params["colorId"]) {
        this.getCarDetailsByColor(params["colorId"])
      } else {
        this.getCarDetails();
      }

    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByBrand(brandId:number) {
    this.carService.getCarDetailsByBrand(brandId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetailsByColor(colorId:number) {
    this.carService.getCarDetailsByColor(colorId).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }
}
