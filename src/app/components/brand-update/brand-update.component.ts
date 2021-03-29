import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})

export class BrandUpdateComponent implements OnInit {
  
  brand : Brand;
  brandUpdateForm : FormGroup;

  constructor(    
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createBrandUpdateForm()
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getBrandById(params["brandId"])
      }
    })
  }

  createBrandUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      name: ["",Validators.required]
    })
  }

  getBrandById(brandId:number){
    this.brandService.getById(brandId).subscribe((response) => {
      this.brand = response.data;
    });
  }

  updateBrand(){
    if(this.brandUpdateForm.valid){      
      let brandModel = Object.assign({},this.brandUpdateForm.value)
      brandModel.id = this.brand.id
      this.brandService.update(brandModel).subscribe(response=>{
        this.toastrService.success(response.message)
      },responseError=>{
        this.toastrService.success(responseError.message)
      })
    }else{
      this.toastrService.error("Form eksik","Hata")
    }    
  }

}
