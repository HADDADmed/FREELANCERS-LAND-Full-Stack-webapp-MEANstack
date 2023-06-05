import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/models-services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  user!:User;
  constructor(activatedRoute:ActivatedRoute,
    private router:Router,
    private userService:UserService,
    public dialog: MatDialog
    ){

    userService.userObservable.subscribe((newUser)=>{
      this.user  = newUser;
    })

  }
  isAuthenticated(){
    return this.user.token
   }

}
