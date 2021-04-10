import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carimage';
import { CarImageService } from 'src/app/services/carimage.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {
  iconTrash = faTrash;

  carImages: CarImage[] = []
  imageRoot = environment.imagePath

  constructor(private activatedRoute: ActivatedRoute, private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsById(params["carId"])
      }
    })
  }

  getCarDetailsById(carId:number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

}
