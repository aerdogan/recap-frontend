import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];  // renk listesi
  currentColor: Color;   // seçili renk
  colorFilterText = "";  // aramak için yazılan renk
  dataLoaded = false;    // veri yüklenme durumu

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors(); // bileşen ilk oluşturulduğunda renkleri getir
  }

  // renkleri getir
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  // seçili renge göre filtrelemek için rengi set ediyoruz
  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  // seçili renge göre listedeki elemanın css'ini aktif ediyoruz
  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }  

  //tüm renkleri getirmesi için seçili rengi temizliyoruz
  clearCurrentBrand(){
    this.currentColor = null;
  }

  // tüm renkler seçili ise tüm renkler butonunun css'ini aktif ediyoruz
  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active";
    } else {
      return "list-group-item";      
    }
  }

}
