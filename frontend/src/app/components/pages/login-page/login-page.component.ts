import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../models-services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    loginForm!:FormGroup;
    isSubmited = false;
    returnUrl = '';
    constructor(
      private formBuilder:FormBuilder,
      private userService:UserService,
      private activatedRoute:ActivatedRoute,
      private router:Router
      ){}
    ngOnInit():void{
      this.loginForm = this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]

      })
       this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
    };

      //loginForm.controls ==> fc.email

      get fc(){
        return this.loginForm.controls;
      }
      submit(){

        this.isSubmited = true;
        if(this.loginForm.invalid) return;
        this.userService.login({
          email:this.fc.email.value,
          password:this.fc.password.value
        }).subscribe(()=>{
          this.router.navigateByUrl(this.returnUrl)
        })
        console.log(this.fc.email.value);



      }



}
