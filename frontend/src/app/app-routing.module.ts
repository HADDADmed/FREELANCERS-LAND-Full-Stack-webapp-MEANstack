import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { CartsComponent } from './components/carts/carts.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'service/:serviceId',component:ServiceComponent},
  {path:'login',component:LoginPageComponent},
  {path:'carts',component:CartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
