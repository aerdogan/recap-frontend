import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarImage } from 'src/app/models/carimage';
import { CarImageService } from 'src/app/services/carimage.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {
  iconTrash = faTrash
  imageRoot = environment.imagePath
  carImages: CarImage[] = []
  
  carId: number
  imageFile : any

  constructor(
    private activatedRoute: ActivatedRoute, 
    private carImageService:CarImageService,
    private formBuilder:FormBuilder,
    private http: HttpClient,
    private router:Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.carId = params["carId"]
        this.getCarDetailsById(params["carId"])
      }
    })
  }

  getCarDetailsById(carId:number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  deleteImage(carImage:CarImage){
    this.carImageService.deleteImage(carImage).subscribe(response=>{
      this.getCarDetailsById(this.carId)
      this.toastrService.success("Resim silindi","Başarılı")
    }, responseError => {
      this.toastrService.error("Resim silinemedi!","Hata")
    })
  }

  addImage(){
    const carImage: FormData = new FormData();
    carImage.append('CarId', this.carId.toString());
    carImage.append("imageFile", this.imageFile, this.imageFile.name);
    this.carImageService.add( carImage ).subscribe(response=>{
      this.toastrService.success(response.message)
      this.getCarDetailsById(this.carId)
    },responseError=>{
      this.toastrService.error(responseError.error.message)
    })
  }

  fileSelected(event:any) {
    this.imageFile = event.target.files[0]
    event.target.nextElementSibling.innerText=this.imageFile.name
  }

}