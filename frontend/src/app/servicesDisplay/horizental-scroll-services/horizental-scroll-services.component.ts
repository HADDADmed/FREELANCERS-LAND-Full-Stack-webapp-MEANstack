import { Observable } from 'rxjs';
import { ServiceService } from '../../models-services/service.service';
import { Service } from '../../shared/models/Service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-horizental-scroll-services',
  templateUrl: './horizental-scroll-services.component.html',
  styleUrls: ['./horizental-scroll-services.component.css']
})
export class HorizentalScrollServicesComponent {

     cartProducts:any[]=[]
     favoriteProducts:any[]=[]
     services:Service[]=[];
     constructor(private serviceService:ServiceService,
      activatedRoute:ActivatedRoute,
      private toastr: ToastrService){

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
          this.toastr.warning('Service already exists in your Cart !', 'Error', {
            positionClass: 'toast-top-center' // Change the position here
          });
                }else{
          this.cartProducts.push(event)
          localStorage.setItem("cart",JSON.stringify(this.cartProducts))
          console.log(this.cartProducts)
          this.toastr.success('Added successfully to Your Cart !', 'Error', {
            positionClass: 'toast-top-center' // Change the position here
          });
        }
      }else{
        this.cartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
        this.toastr.success('Added successfully to Your Cart !', 'Error', {
          positionClass: 'toast-top-center' // Change the position here
        });
      }

    }
    addTofavorite(event:any){
      if("favorite" in localStorage){
        this.favoriteProducts=JSON.parse(localStorage.getItem("favorite")!)
        let exist=this.favoriteProducts.find(item=>item._id==event._id)
        if(exist){
          this.toastr.warning('Service already exists!', 'Error', {
            positionClass: 'toast-center-center' // Change the position here
          });
        }else{
          this.favoriteProducts.push(event)
          localStorage.setItem("favorite",JSON.stringify(this.favoriteProducts))
          console.log(this.favoriteProducts)
          this.toastr.success('Added successfully to Your Favorite List !', 'Error', {
            positionClass: 'toast-top-center' // Change the position here
          });
        }
      }else{
        this.favoriteProducts.push(event)
        localStorage.setItem("favorite",JSON.stringify(this.favoriteProducts))
        this.toastr.success('Added successfully to Your Favorite List !', 'Error', {
          positionClass: 'toast-top-center' // Change the position here
        });
      }
    }
  }
