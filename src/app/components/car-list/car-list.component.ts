import { Component, OnInit } from '@angular/core';
import { Car, CarDetail } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { faPen, faTrash, faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cars',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  iconPen = faPen;
  iconTrash = faTrash;
  iconImage = faImage;

  carDetails: CarDetail[] = [];

  dataLoaded = false;
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  deleteCar(car: Car) {
    this.carService.delete(car).subscribe();
  }
}
