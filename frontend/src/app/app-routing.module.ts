import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizentalScrollServicesComponent } from './servicesDisplay/horizental-scroll-services/horizental-scroll-services.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NewServicePostComponent } from './components/pages/new-service-post/new-service-post.component';
import { EditServiceComponent } from './components/pages/edit-service/edit-service.component';

import { CartsComponent } from './components/carts/carts.component';
import { PrimaryPageComponent } from './components/pages/primary-page/primary-page.component';
import { combineLatest } from 'rxjs';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AcountComponent } from './components/acount/acount.component';
import { VerticalScrollServicesComponent } from './servicesDisplay/vertical-scroll-services/vertical-scroll-services.component';

const routes: Routes = [
  {path:'',component:PrimaryPageComponent},
  {path:'services/horizental',component:HorizentalScrollServicesComponent},
  {path:'search/:searchTerm/horizental',component:HorizentalScrollServicesComponent},
   {path:'services/Vertical',component:VerticalScrollServicesComponent},
  {path:'search/:searchTerm/Vertical',component:VerticalScrollServicesComponent},
  {path:'service/:serviceId',component:ServiceComponent},
  {path:'login',component:LoginPageComponent},
  {path:'services/new',component:NewServicePostComponent},
  {path:'service/edit',component:EditServiceComponent},
  {path:'carts',component:CartsComponent},
  {path:'favorite',component:FavoriteComponent},
  {path:'account',component:AcountComponent},
  {path:"**",redirectTo:"",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
