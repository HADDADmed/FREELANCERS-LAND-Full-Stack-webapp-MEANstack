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



  cartProducts:any[]=[]
   service!:Service ;
  constructor(private serviceService:ServiceService,activatedRoute:ActivatedRoute){
   activatedRoute.params.subscribe((params)=>{
     if (params.serviceId) {
       serviceService.getServiceById(params.serviceId).subscribe(serverService=>{
        this.service = serverService
       })
     }
   })
  }
   addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
      let exist=this.cartProducts.find(item=>item.id==event.id)
      if(exist){
        alert("Service already exist!!")
      }else{
        this.cartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
        console.log(this.cartProducts)
      } 
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }
    
  }


  }
