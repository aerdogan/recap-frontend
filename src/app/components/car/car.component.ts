import { Component, OnInit } from '@angular/core';
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

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
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
