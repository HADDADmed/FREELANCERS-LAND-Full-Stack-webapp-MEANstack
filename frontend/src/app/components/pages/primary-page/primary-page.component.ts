import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { UserService } from 'src/app/services/user.service';
import { Service } from 'src/app/shared/models/Service';
import { User } from 'src/app/shared/models/User';
import { RegistrationDialogComponent } from '../../dialogs/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-primary-page',
  templateUrl: './primary-page.component.html',
  styleUrls: ['./primary-page.component.scss']
})
export class PrimaryPageComponent {

  cartProducts:any[]=[]
  favoriteProducts:any[]=[]
  services:Service[]=[];
  bgImage:string="../../../../assets/images/LandigPic.png"
  user!: User;
  constructor(private serviceService:ServiceService,activatedRoute:ActivatedRoute,private userService:UserService,public dialog: MatDialog){

    let servicesObservable:Observable<Service[]>=  this.serviceService.getAll();
    activatedRoute.params.subscribe(()=>{

      servicesObservable.subscribe((serverService) => {
          this.services= serverService;
            console.log(this.services)
      })
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user  = newUser;
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


  changBgImage(){

    let landing = document.getElementById("landing") as HTMLImageElement;

    if(this.bgImage=="../../../../assets/images/LandigPic2.png"){

       this.bgImage="../../../../assets/images/landig.png"
    }else{
      this.bgImage="../../../../assets/images/LandigPic.png"
    }
  }

  isAuthenticated(){

    return this.user.token;
   }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '260px';
    dialogConfig.height = '520px';
    dialogConfig.position = {
      'top': '95px',
      'right': '200px'
    };
    const dialogRef = this.dialog.open(RegistrationDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
}
logout(){
  this.userService.logout();
}
}
