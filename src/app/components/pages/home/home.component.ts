import { ServiceService } from './../../../services/service.service';
import { Service } from './../../../shared/models/Service';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../shared/models/Product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



     products:Product[]= [];
     services:Service[]=[];
     constructor(private serviceService:ServiceService,activatedRoute:ActivatedRoute){
      activatedRoute.params.subscribe((params)=>{
        if (params.searchTerm) {
          this.services = serviceService.getServiceBySearchTearm(params.searchTerm);
        }else{
          this.services = this.serviceService.getAll();
        }
      })






     }
}
