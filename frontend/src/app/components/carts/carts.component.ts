import { User } from 'src/app/shared/models/User';
import { Component, Inject, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models/Service';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/models-services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/models-services/user.service';
@Component({
  selector: 'app-cart',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{
  cartService:any[]=[]
  success:boolean=false
  userLocal:any;
  user!:User;
  total:number=0
  a:boolean=false
  services:Service[]=[];
  constructor(private serviceService:ServiceService,
    private router:Router,
    activatedRoute:ActivatedRoute,
    @Inject(UserService) private userService:UserService
    ){
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

    userService.userObservable.subscribe((newUser)=>{
          this.userLocal  = newUser;
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

    setTimeout(() => {
      this.router.navigateByUrl('/checkout')
      this.success=true
    }, 3000);

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




