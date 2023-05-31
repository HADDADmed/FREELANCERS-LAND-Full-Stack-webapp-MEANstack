import { AfterViewInit, Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
export class PrimaryPageComponent implements AfterViewInit{

  cartProducts:any[]=[]
  favoriteProducts:any[]=[]
  services:Service[]=[];
  user!: User;
  constructor(private serviceService:ServiceService,
    activatedRoute:ActivatedRoute,
    private userService:UserService,
    public dialog: MatDialog,
    private router:Router
    ){

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

  ngAfterViewInit(){

    this.changeBgImageDinamicly();
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


  changeBgImage(direction:string) {
    console.log("click in change bg image");
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");


    let landing = document.getElementById("landing");
    console.log(landing!.style.backgroundImage);
    if(landing!.style.backgroundImage == 'url("../../../../assets/images/LandingPic5.png")'){
      landing!.style.backgroundImage = "url(../../../../assets/images/LandingPic6.png)";
      check1?.classList.remove("active");
      check2?.classList.remove("active");
      check3?.classList.add("active");
    }
    else if(landing!.style.backgroundImage == 'url("../../../../assets/images/LandingPic6.png")'){
      landing!.style.backgroundImage = 'url("../../../../assets/images/LandingPic4.png")';
      check1?.classList.remove("active");
      check2?.classList.add("active");
      check3?.classList.remove("active");
    }else if(landing!.style.backgroundImage == 'url("../../../../assets/images/LandingPic4.png")'){
      landing!.style.backgroundImage = 'url("../../../../assets/images/LandingPic5.png")';
      check1?.classList.add("active");
      check2?.classList.remove("active");
      check3?.classList.remove("active");

  }else{
    landing!.style.backgroundImage = 'url("../../../../assets/images/LandingPic5.png")';
    check1?.classList.add("active");
    check2?.classList.remove("active");
    check3?.classList.remove("active");
  }
}

changeBgImageDinamicly() {
  console.log("click in change bg image");
  const check1 = document.getElementById("check1");
  const check2 = document.getElementById("check2");
  const check3 = document.getElementById("check3");
  const landing = document.getElementById("landing");

  const images = [
    "../../../../assets/images/LandingPic5.png",
    "../../../../assets/images/LandingPic6.png",
    "../../../../assets/images/LandingPic4.png"
  ];

  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    landing!.style.backgroundImage = `url(${images[currentIndex]})`;
    check1?.classList.toggle("active", currentIndex === 0);
    check2?.classList.toggle("active", currentIndex === 1);
    check3?.classList.toggle("active", currentIndex === 2);
  }, 3000);
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

search(Term:String):void{
  if (Term) {
     this.router.navigateByUrl('/search/'+Term+'/horizental');
  }
}
}
