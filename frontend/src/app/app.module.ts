import { MatFormFieldModule } from '@angular/material/form-field';
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
<<<<<<< HEAD
import { ScrollDirective } from './scroll.directive';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { NewServicePostComponent } from './components/pages/new-service-post/new-service-post.component';
import { EditServiceComponent } from './components/pages/edit-service/edit-service.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserServicesComponent } from './components/pages/user-services/user-services.component';

=======
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { CartsComponent } from './components/carts/carts.component';
import { SnniperComponent } from './components/partials/snniper/snniper.component';
>>>>>>> 0a13aaff2f35f7241eb68c59a2b06a0fdb8d00d8


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServiceComponent,
    LoginPageComponent,
<<<<<<< HEAD
   ScrollDirective,
   RegistrationComponent,

   EditServiceComponent,
    UserServicesComponent,


  ],
  imports: [

=======
    InputContainerComponent,
    ServicesComponent,
    CartsComponent,
    SnniperComponent,
  ],
  imports: [
    FormsModule,
>>>>>>> 0a13aaff2f35f7241eb68c59a2b06a0fdb8d00d8
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
      timeOut:3000,
      newestOnTop:false,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
