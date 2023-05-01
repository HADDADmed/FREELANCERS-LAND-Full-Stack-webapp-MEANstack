import { UserService } from './../../../services/user.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
/**
 *
 */
export class HeaderComponent {

  searchTerm='';
  user!:User;
  constructor(activatedRoute:ActivatedRoute,private router:Router,private userService:UserService){

    activatedRoute.params.subscribe((params)=>{
      if (params.searchTerm) {
        this.searchTerm  = params.searchTerm;
    }})

    userService.userObservable.subscribe((newUser)=>{
      this.user  = newUser;
    })

  }
  search(Term:String):void{
    if (Term) {
       this.router.navigateByUrl('/search/'+Term);
    }
  }

  logout(){
    this.userService.logout();
  }
   isAuthenticated(){
    return this.user.token
   }
}

