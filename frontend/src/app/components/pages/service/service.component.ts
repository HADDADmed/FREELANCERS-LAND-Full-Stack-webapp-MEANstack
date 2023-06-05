import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/models-services/service.service';
import { Service } from 'src/app/shared/models/Service';
import { PaymentDialogComponent } from '../../dialogs/payment-dialog/payment-dialog.component';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/models-services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers: [UserService],
})
export class ServiceComponent{



  cartProducts:any[]=[]
   cart:any[]= [];
   user!:User;
   service!:Service ;
   favoriteProducts:any[]=[]

  constructor(private serviceService:ServiceService,
         activatedRoute:ActivatedRoute,
         @Inject(UserService) private userService:UserService,
         private toastr: ToastrService
         ){
   activatedRoute.params.subscribe((params)=>{
     if (params.serviceId) {
       serviceService.getServiceById(params.serviceId).subscribe(serverService=>{
        this.service! = serverService;
       })
     }
   })
      userService.userObservable.subscribe((newUser: User)=>{
    this.user  = newUser;
  })

  }
   addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
      let exist=this.cartProducts.find(item=>item.id==event.id)
      if(exist){
        this.toastr.warning('Service already exists!', 'Error', {
          positionClass: 'toast-center-center' // Change the position here
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
    // if (this.user!.Cart!.services ) {

    //     this.userService.addToCart(String(this.user._id), event._id).subscribe((res) => {
    //       console.log(res);
    //     } );
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
  changeColor() {

    const navbar = document.getElementById("navbar1"); // Get the navbar element by its ID
    navbar!.style.backgroundColor = "#f5f5f5"; // Change the background color to red
  }


  changePrice(pack: string) {
    let offerPrice = document.getElementById('offer-price');
    let salePrice = document.getElementById('sale-price');
    if (pack === 'S') {
      offerPrice!.textContent =  '$ '+String(this.service.price) ; // Set price for Basic pack
      salePrice!.textContent =  '$ '+String(this.service.price +100) ; // Set price for Basic pack
    } else if (pack === 'M') {
      offerPrice!.textContent =  '$ '+String(this.service.price + 100); // Set price for Basic pack
      salePrice!.textContent =  '$ '+String(this.service.price +200) ; // Set price for Basic pack
    } else if (pack === 'L') {
      offerPrice!.textContent =  '$ '+String(this.service.price + 200) // Set price for Premium pack
      salePrice!.textContent =  '$ '+String(this.service.price +300) ; // Set price for Basic pack
    }
  }

  changImageToMain(path: string) {
    let mainImage = document.getElementById('product-main-image');
    console.log(mainImage)
     mainImage!.setAttribute('src', path);
     console.log(mainImage)
  }

  }
