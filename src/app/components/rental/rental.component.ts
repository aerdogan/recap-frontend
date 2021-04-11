import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Rental, RentalDetail } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentaldetails: RentalDetail[] = [];
  dataLoaded = false;

  constructor(
    private rentalService: RentalService,
    private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails() {
    this.rentalService.getRentalDetails().subscribe(response => {
      this.rentaldetails = response.data;
      this.dataLoaded = true;
    });
  }

  carIsReturned(carId:number){
    this.rentalService.carIsReturned(carId).subscribe(response => {
      this.toastrService.success(response.message)
      this.getRentalDetails();
    }, responseError=>{
      this.toastrService.success(responseError.message)
    });
  }

}
