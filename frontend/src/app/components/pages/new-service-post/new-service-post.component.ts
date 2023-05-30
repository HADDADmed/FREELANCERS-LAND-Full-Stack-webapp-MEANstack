import { UserService } from './../../../services/user.service';
import { ServiceService } from './../../../services/service.service';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/shared/models/Service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-new-service-post',
  templateUrl: './new-service-post.component.html',
  styleUrls: ['./new-service-post.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,FormsModule,ReactiveFormsModule]
})
export class NewServicePostComponent {

  NewServiceForm!:FormGroup;
  isSubmited = false;
  myService!:Service;
  name!:String;
  description!:String;
  price!:String;
  returnUrl = '';
  imgPath!:String;
  currentUser!:User;



  constructor(private formBuilder:FormBuilder,
    private serviceService:ServiceService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private userService:UserService) {

      userService.userObservable.subscribe((newUser)=>{
        this.currentUser  = newUser;
      })

    }

  ngOnInit():void{
    this.NewServiceForm = this.formBuilder.group({
      name:['',[Validators.required]],
      price:['',Validators.required],
      description:['',Validators.required],
      category:['',Validators.required],
      imgPath:['',Validators.required]

    })

  };
  // submit1(){
  //   console.log("click!!!!1");
  //   this.name = (<HTMLInputElement>document.getElementById("name")).value;
  //   console.log(this.name);
  //   console.log(this.description);
  //   console.log(this.price);
  //   console.log(this.imgPath);
  // }


    get fc(){
        return this.NewServiceForm.controls;
      }
    submit(){
        console.log("click in submit fyunction");
        console.log(this.fc.name.value);
        console.log(this.fc.description.value);
        console.log(this.fc.price.value);
        console.log(this.fc.imgPath.value);

        this.isSubmited = true;
        if(this.NewServiceForm.invalid) return;

        this.myService = {

          name:this.fc.name.value,
          description:this.fc.description.value,
          price:this.fc.price.value,
          imgPath:this.fc.imgPath.value,
          category:this.fc.category.value,
          userId: String(this.currentUser._id)
        }
        this.serviceService.saveService(this.myService).subscribe(
          (data)=>{
            console.log(data);
            this.router.navigateByUrl('/')
          }
        )
}
}
