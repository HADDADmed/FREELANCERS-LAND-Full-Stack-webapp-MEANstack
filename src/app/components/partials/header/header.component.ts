import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

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
  constructor(activatedRoute:ActivatedRoute,private router:Router){

    activatedRoute.params.subscribe((params)=>{
      if (params.searchTerm) {
        this.searchTerm  = params.searchTerm;
    }})

  }
  search(Term:String):void{
    if (Term) {
       this.router.navigateByUrl('/search/'+Term);
    }
  }

}

