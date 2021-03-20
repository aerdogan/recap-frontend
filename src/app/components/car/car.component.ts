import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car, CarDetail } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  cars: Car[] = [];
  cardetails: CarDetail[] = [];  
  
  brands: Brand[] = [];
  colors: Color[] = [];
  
  carFilterText = "";

  colorFilterText = "0";
  brandFilterText = "0";
  
  dataLoaded = false;

  constructor(private carService: CarService, 
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"] && params["colorId"]){

      } else if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"]);
      } else if (params["colorId"]) {
        this.getCarDetailsByColor(params["colorId"]);
      } else {
        this.getCarDetails();
      }

    });

    this.getBrands();
    this.getColors();

  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
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
