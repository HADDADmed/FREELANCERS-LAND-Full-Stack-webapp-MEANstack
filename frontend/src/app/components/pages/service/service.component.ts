import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/shared/models/Service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {


   

   service!:Service ;
  constructor(private serviceService:ServiceService,activatedRoute:ActivatedRoute){
   activatedRoute.params.subscribe((params)=>{
     if (params.serviceId) {
       this.service = serviceService.getServiceById(params.serviceId);
     }
   })



  }
}
