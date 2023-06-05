import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from './../../../shared/models/Order';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/models-services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.css']
})
export class CheckOutPageComponent implements OnInit {

  order:Order = new Order();
  checkOutForm!:FormGroup;
  cartServices:any[]=[]
  total!: number;
  currentUser:any;

  constructor(private formBuilder:FormBuilder,
    private toastr:ToastrService,
    private userService:UserService,) {
      this.getServices()

      this.order.items = this.cartServices;
      this.order.totalPrice = this.total;
      userService.userObservable.subscribe((newUser)=>{
        this.currentUser  = newUser;
      })

    }

    ngOnInit(): void {
      let {name} = this.currentUser;
      this.checkOutForm = this.formBuilder.group({
        name:[name,Validators.required],
        address:['Mesnana',Validators.required],
        phone:['',Validators.required],
        creditCard:['',Validators.required],
        cvv:['',Validators.required],
        expDate:['',Validators.required],


      })

     }
     get fc (){

      return this.checkOutForm.controls;
    }

    createOrder(){
      if(this.checkOutForm.invalid){
        this.toastr.warning('Please fill the form correctly','Error');
        return;
      }
      this.order.name = this.checkOutForm.value.name;
      this.order.address = this.checkOutForm.value.address;
      this.order.createdAt = new Date();
      this.order.status = 'pending';
      console.log(this.order);
    }




  getServices(){
    if("cart" in localStorage){
      this.cartServices=JSON.parse(localStorage.getItem("cart")!)
    }
    this.getTotal()
  }
  addAmount(index:number){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartServices))
  }
  minAmount(index:number){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartServices))
  }
  detectChange(){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartServices))
  }
  getTotal(){
    this.total=0
    for(let x in this.cartServices){
      this.total+=this.cartServices[x].price
    }
  }

}
