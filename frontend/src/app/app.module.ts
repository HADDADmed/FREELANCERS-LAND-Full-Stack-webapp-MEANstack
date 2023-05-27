import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { CartsComponent } from './components/carts/carts.component';
import { SnniperComponent } from './components/partials/snniper/snniper.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServiceComponent,
    LoginPageComponent,
    InputContainerComponent,
    ServicesComponent,
    CartsComponent,
    SnniperComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
      timeOut:3000,
      newestOnTop:false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
