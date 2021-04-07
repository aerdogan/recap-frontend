import { Component, OnInit } from '@angular/core';
import { Car, CarDetail } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-cars',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})

export class CarListComponent implements OnInit {
  carDetails: CarDetail[] = [];

  dataLoaded = false;
  constructor( private carService: CarService ) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  deleteCar(car:Car){
    this.carService.delete(car).subscribe();    
  }

}
