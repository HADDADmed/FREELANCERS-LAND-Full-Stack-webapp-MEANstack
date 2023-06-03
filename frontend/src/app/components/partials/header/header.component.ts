import { SERVICES_URL } from './../../../shared/constants/urls';
import { UserService } from './../../../services/user.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegistrationDialogComponent } from '../../dialogs/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
/**
 *
 */
export class HeaderComponent implements OnInit{

  searchTerm='';
  user!:User;

  constructor(activatedRoute:ActivatedRoute,
    private router:Router,
    private userService:UserService,
    public dialog: MatDialog
    ){
    activatedRoute.params.subscribe((params)=>{
      if (params.searchTerm) {
        this.searchTerm  = params.searchTerm;
    }})

    userService.userObservable.subscribe((newUser)=>{
      this.user  = newUser;
    })


     this.scrolling = true;


  }
  search(Term:String):void{
    if (Term) {
       this.router.navigateByUrl('/search/'+Term+'/horizental');
    }
  }

  logout(){
    this.userService.logout();
  }
   isAuthenticated(){
    return this.user.token
   }

   active: boolean = false;
   pathname: string='';

   ngOnInit() {
    this.router.events.subscribe(() => {
      this.pathname = this.router.url;
      this.isActive();
    });
  }
   isActive() {
     return window.scrollY > 0 ? this.active = true : this.active = false;
   }

   // Add the following code to your component or script

changeColor() {

  const navbar = document.getElementById("navbar1"); // Get the navbar element by its ID
  navbar!.style.backgroundColor = "#f5f5f5"; // Change the background color to red
}

@Input() name: string = '';
scrolling!: boolean;

@HostListener('window:scroll', ['$event'])
onScrollEvent(event: Event) {
  if (!this.scrolling && window.scrollY > 0) {
    this.scrolling = true; // Set scrolling flag to true
    this.changeColor(); // Call the changeColor() function to update the navbar color
  } else if (window.scrollY === 0) {
    this.scrolling = false; // Set scrolling flag to false
    // Restore the original navbar color if desired
    const navbar = document.getElementById("navbar1"); // Get the navbar element by its ID
    navbar!.style.backgroundColor = ""; // Reset the background color to the default value or remove inline style
  }
}

    isLoginPageActive(){
      return this.router.url.includes('login')||this.router.url.includes('services/new');
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


    isHomePageActif(): boolean {
      const currentUrl = this.router.url;
      const urlFragments = ['/','/account', '#service', '#portfolio', '#pricing', '#about', '#contact'];
      return urlFragments.every(fragment => !currentUrl.endsWith(fragment));
    }
 }


