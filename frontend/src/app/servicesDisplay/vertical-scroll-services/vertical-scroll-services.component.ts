import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/models-services/service.service';
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

  @Input() data:any={}
  @Output() item=new EventEmitter()
  @Output() itemf=new EventEmitter()
  toastr: any;
  add(){
    this.item.emit(this.data)
  }
  addf(){
    this.itemf.emit(this.data)
  }
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
      this.toastr.warning('Service already exists In Your Cart !', 'Error', {
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

 scrollAmount = 700; // Amount of scroll in pixels
  scrollDuration = 400; // Duration of the scroll animation in milliseconds

  leftScroll() {
    const list = document.getElementById('product-items'); // Get the element to scroll
    const scrollLeft = list!.scrollLeft; // Get the current scroll position
    const targetScrollLeft = scrollLeft - this.scrollAmount; // Calculate the target scroll position

    this.animateScroll(list!, scrollLeft, targetScrollLeft); // Initiate the scroll animation
  }

  rightScroll() {
    const list = document.getElementById('product-items'); // Get the element to scroll
    const scrollLeft = list!.scrollLeft; // Get the current scroll position
    const targetScrollLeft = scrollLeft + this.scrollAmount; // Calculate the target scroll position

    this.animateScroll(list!, scrollLeft, targetScrollLeft); // Initiate the scroll animation
  }

  animateScroll(element: HTMLElement, start: number, end: number) {
    const startTime = performance.now(); // Get the start time of the animation

    const scroll = () => {
      const currentTime = performance.now(); // Get the current time
      const timeElapsed = currentTime - startTime; // Calculate the elapsed time
      const scrollProgress = this.easeInOutQuad(timeElapsed, start, end - start); // Calculate the scroll position based on the elapsed time

      element.scrollLeft = scrollProgress; // Update the scroll position of the element

      if (timeElapsed < this.scrollDuration) {
        requestAnimationFrame(scroll); // Continue the animation until the duration is reached
      }
    };

    requestAnimationFrame(scroll); // Start the animation
  }

  easeInOutQuad(t: number, b: number, c: number) {
    t /= this.scrollDuration / 2;
    if (t < 1) return c / 2 * t * t + b; // Easing equation for the first half of the animation
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b; // Easing equation for the second half of the animation
  }
}
