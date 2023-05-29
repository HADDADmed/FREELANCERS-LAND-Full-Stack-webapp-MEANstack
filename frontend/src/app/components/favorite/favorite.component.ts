import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { Service } from 'src/app/shared/models/Service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  favoriteItem:any[]=[]
  success:boolean=false
  total:number=0
  a:boolean=false
  services:Service[]=[];
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
    this.getFavorites()
  }
  getFavorites(){
    if("favorite" in localStorage){
      this.favoriteItem=JSON.parse(localStorage.getItem("favorite")!)
    } 
  }
  addAmount(index:number){
    localStorage.setItem("favorite",JSON.stringify(this.favoriteItem))
  }
  minAmount(index:number){
    localStorage.setItem("favorite",JSON.stringify(this.favoriteItem))
  }
  detectChange(){
    localStorage.setItem("favorite",JSON.stringify(this.favoriteItem))
  }
  deleteFavorite(index:number){
    this.favoriteItem.splice(index,1)
    localStorage.setItem("favorite",JSON.stringify(this.favoriteItem))

  }
  clearFavorites(){
    this.favoriteItem=[]
    localStorage.setItem("favorite",JSON.stringify(this.favoriteItem))
  }
}
