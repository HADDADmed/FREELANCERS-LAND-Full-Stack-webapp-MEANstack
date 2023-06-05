import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models/Service';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{
  cartService:any[]=[]
  success:boolean=false
  total:number=0
  a:boolean=false
  services:Service[]=[];
  paymentRequest!:google.payments.api.PaymentDataRequest;
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
        console.log(this.services)
      })
    })
  }
  ngOnInit(): void {
    this.getServices()
  
  }
  getServices(){
    if("cart" in localStorage){
      this.cartService=JSON.parse(localStorage.getItem("cart")!)
    }
    // this.paymentRequest={
    //   apiVersion:2,
    //   apiVersionMinor:0,
    //   allowedPaymentMethods:[
    //     {
    //       type:'CARD',
    //       parameters:{
    //         allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
    //         allowedCardNetworks:['MASTERCARD','VISA'],
    //       },
    //       tokenizationSpecification:{
    //         type:'PAYMENT_GATEWAY',
    //         parameters:{
    //           gateway:'example',
    //           gatewayMerchantId:'exampleGatewayMerchantId',
    //         },
    //       },
    //     },
    //   ],
    //   merchantInfo:{
    //     merchantId:'17613812255336763067',
    //     merchantName:'Demo Only (you will no be charged)',
    //   },
    //   transactionInfo:{
    //     totalPriceStatus:'FINAL',
    //     totalPriceLabel:'Total',
    //     totalPrice: this.total.toFixed(2),
    //     currencyCode:'USD',
    //     countryCode:'US',
    //   },
    // };
    this.getTotal()
  }
  addAmount(index:number){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartService))
  }
  minAmount(index:number){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartService))
  }
  detectChange(){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartService))
  }
  getTotal(){
    this.total=0
    for(let x in this.cartService){
      this.total+=this.cartService[x].price
    }
  }
  deleteProduct(index:number){
    this.cartService.splice(index,1)
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartService))

  }
  addCart(){
    let products=this.cartService.map(item=>{
      return {productId:item.id}
    })
    let model={
      userId:5,
      date: new Date,
      products:products
    }
    setTimeout(() => {
      this.success=true
    }, 2000);

  }
  clearProducts(){
    this.cartService=[]
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartService))
  }
  //payment
  // async onLoadPaymentData(event:Event){
  //   const paymentData=(event as CustomEvent<google.payments.api.PaymentData>).detail;
  // }

}




