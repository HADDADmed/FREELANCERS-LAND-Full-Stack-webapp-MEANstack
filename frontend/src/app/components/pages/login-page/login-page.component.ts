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
    constructor(private formBuilder:FormBuilder){

    }
    ngOnInit():void{
      this.loginForm = this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
      })};

      //loginForm.controls ==> fc.email

      get fc(){
        return this.loginForm.controls;
      }
      submit(){

        this.isSubmited = true;
        if(this.loginForm.invalid) return;
        alert(`email: ${this.fc.email.value} , password: ${this.fc.password.value}`)
      }

}
