import { Observable } from 'rxjs';
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

      let servicesObservable:Observable<Service[]>
      activatedRoute.params.subscribe((params)=>{
        if (params.searchTerm) {
          servicesObservable = serviceService.getServiceBySearchTearm(params.searchTerm);
        }
        else{
           servicesObservable = this.serviceService.getAll();
        }
        servicesObservable.subscribe((serverService) => {
              this.services= serverService;
        })
      })






     }
}
