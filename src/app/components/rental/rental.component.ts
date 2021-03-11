import { Component, OnInit } from '@angular/core';
import { Rental, RentalDetail } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals: Rental[] = [];
  rentaldetails: RentalDetail[] = [];
  dataLoaded = false;

  constructor(private carService: RentalService) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentals() {
    this.carService.getRentals().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

  getRentalDetails() {
    this.carService.getRentalDetails().subscribe((response) => {
      this.rentaldetails = response.data;
      this.dataLoaded = true;
    });
  }

}
