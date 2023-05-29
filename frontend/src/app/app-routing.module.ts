import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NewServicePostComponent } from './components/pages/new-service-post/new-service-post.component';
import { EditServiceComponent } from './components/pages/edit-service/edit-service.component';

import { CartsComponent } from './components/carts/carts.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'service/:serviceId',component:ServiceComponent},
  {path:'login',component:LoginPageComponent},
  {path:'services/new',component:NewServicePostComponent},
  {path:'service/edit',component:EditServiceComponent},
  {path:'carts',component:CartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
