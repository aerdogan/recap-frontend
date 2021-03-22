import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {

  brands : Brand[] = []; // marka listesi
  currentBrand : Brand;  // seçili marka
  brandFilterText = "";  // aramak için yazılan marka
  dataLoaded = false;    // veri yüklenme durumu
  
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();  // bileşen ilk oluştuğunda markaları getir
  }

  // markaları getir
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  // seçili markaya göre filtrelemek için markayı set ediyoruz
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  // seçili markaya göre listedeki elemanın css'ini aktif et 
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  // tüm markaları getirmesi için seçili markayı temizliyoruz 
  clearCurrentBrand(){
    this.currentBrand = null;
  }

  // tüm markalar seçili ise tüm markalar butonunun css'ini aktif et
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

}
