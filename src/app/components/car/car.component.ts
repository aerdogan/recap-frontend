import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/car';
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

  carDetails: CarDetail[] = []; // araç listesi

  brands: Brand[] = [];
  colors: Color[] = [];
  
  carFilter = "";
  currentBrand:number;
  currentColor:number;

  dataLoaded = false;

  constructor(private carService: CarService, 
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getBrands(); // açılır kutu için markaları getir
    this.getColors(); // açılır kutu için renkleeri getir

    this.activatedRoute.queryParams.subscribe(params => {
      if(params["brandId"] && params["colorId"]){
        this.getCarDetailsByBrandAndColor(params["brandId"], params["colorId"]);
      } else if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"]);
      } else if (params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"]);
      } else {
        this.getCarDetails();
      }
    });
  }

  // markaları getir
  getBrands() { 
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  //renkleri getir
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  // markaya göre araç bilgilerini getir
  getCarDetailsByBrand(brandId:number) {
    this.carService.getCarDetailsByBrand(brandId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  // renge göre araç bilgilerini getir
  getCarDetailsByColor(colorId:number) {
    this.carService.getCarDetailsByColor(colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  
  // marka ve renge göre araç bilgilerini getir
  getCarDetailsByBrandAndColor(brandId:number, colorId:number) {
    this.carService.getCarDetailsByBrandAndColor(brandId, colorId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  // araç detaylarını getir
  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  
}
