import { ServiceService } from './../../../services/service.service';
import { Service } from './../../../shared/models/Service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
