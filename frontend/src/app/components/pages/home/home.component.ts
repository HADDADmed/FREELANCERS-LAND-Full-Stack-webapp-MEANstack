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
  cartProducts:any[]=[]
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
<<<<<<< HEAD
        servicesObservable.subscribe((r) => {
              this.services= r;
=======
        servicesObservable.subscribe((serverService) => {
              this.services= serverService;
              console.log(this.services)
>>>>>>> 0a13aaff2f35f7241eb68c59a2b06a0fdb8d00d8
        })
      })
    }
    addToCart(event:any){
      if("cart" in localStorage){
        this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
        let exist=this.cartProducts.find(item=>item.id==event.id)
        if(exist){
          alert("Product already exist!!")
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
