import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css'],
})
export class RegistrationDialogComponent {

  NewUserForm!:FormGroup;
  isSubmitted:boolean= false;
  NewUser:User = {
    name:'',
    email: '',
    password: '',
  };
  


  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<RegistrationDialogComponent>,
      private userService:UserService,
      private formBuilder:FormBuilder
      ) {  // Initialize NewUser object
        this.NewUser = {
          name:'',
          email: '',
          password: '',
        
        }; }

  

  ngOnInit() {
      this.NewUserForm = this.formBuilder.group({
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required],
        
      })

  }

  get fc(){
    return this.NewUserForm.controls;
  }
  save() {
    this.isSubmitted = true;
    if (this.NewUserForm.invalid) return;
  
    this.NewUser = {  
      _id:'',
      name:this.fc.name.value,
      email:this.fc.email.value,
      password:this.fc.password.value,
      token:''
    }

    console.log(this.NewUser);
    
    this.userService.register({  
      _id:'',
      name:this.fc.name.value,
      email:this.fc.email.value,
      password:this.fc.password.value,
      token:''
    }).subscribe(() => {
      console.log("send to user service");
      
    });
    this.dialogRef.close(this.NewUserForm.value);
  }
  

  // Set properties of NewUser
  // this.NewUser.name = this.NewUserForm.controls.name.value;
  // this.NewUser.email = this.NewUserForm.controls.email.value;
  // this.NewUser.password = this.NewUserForm.controls.password.value;
  close() {
      this.dialogRef.close();
  }
}
