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
import { ScrollDirective } from './scroll.directive';
import { NewServicePostComponent } from './components/pages/new-service-post/new-service-post.component';
import { EditServiceComponent } from './components/pages/edit-service/edit-service.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserServicesComponent } from './components/pages/user-services/user-services.component';
import { CartsComponent } from './components/carts/carts.component';
import { SnniperComponent } from './components/partials/snniper/snniper.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { RegistrationDialogComponent } from './components/dialogs/registration-dialog/registration-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { PrimaryPageComponent } from './components/pages/primary-page/primary-page.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { AcountComponent } from './components/acount/acount.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServiceComponent,
    LoginPageComponent,
   ScrollDirective,
   EditServiceComponent,
    UserServicesComponent,
    SnniperComponent,
    ServicesComponent,
    CartsComponent,
    RegistrationDialogComponent,
    PrimaryPageComponent,
    FavoriteComponent,
    RegistrationComponent,
    AcountComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
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
