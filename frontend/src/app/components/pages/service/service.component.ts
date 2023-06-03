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
        this.service! = serverService;
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
