import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/shared/models/Service';

@Component({
  selector: 'app-vertical-scroll-services',
  templateUrl: './vertical-scroll-services.component.html',
  styleUrls: ['./vertical-scroll-services.component.css']
})
export class VerticalScrollServicesComponent {
  cartProducts:any[]=[]
  favoriteProducts:any[]=[]
  services:Service[]=[];
  constructor(private serviceService:ServiceService,activatedRoute:ActivatedRoute){

   let servicesObservable:Observable<Service[]>
   activatedRoute.params.subscribe((params)=>{
     if (params.searchTerm) {
       servicesObservable =  this.serviceService.getServiceBySearchTearm(params.searchTerm);
     }
     else{
        servicesObservable = this.serviceService.getAll();
     }

     servicesObservable.subscribe((serverService) => {
           this.services= serverService;
           console.log(this.services)
     })
   })
 }
 addToCart(event:any){
   if("cart" in localStorage){
     this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
     let exist=this.cartProducts.find(item=>item._id==event._id)
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
 addTofavorite(event:any){
   if("favorite" in localStorage){
     this.favoriteProducts=JSON.parse(localStorage.getItem("favorite")!)
     let exist=this.favoriteProducts.find(item=>item._id==event._id)
     if(exist){
       alert("already in your favorite page!!")
     }else{
       this.favoriteProducts.push(event)
       localStorage.setItem("favorite",JSON.stringify(this.favoriteProducts))
       console.log(this.favoriteProducts)
     }
   }else{
     this.favoriteProducts.push(event)
     localStorage.setItem("favorite",JSON.stringify(this.favoriteProducts))
   }

 }
}
