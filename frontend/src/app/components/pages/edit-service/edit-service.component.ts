import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/models-services/service.service';
import { UserService } from 'src/app/models-services/user.service';
import { Service } from 'src/app/shared/models/Service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent {
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
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {

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
      user:{name:this.currentUser.name ,email:this.currentUser.email,imgPath:String(this.currentUser.imgPath)}

    }
    this.serviceService.updateService(this.myService).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigateByUrl('/')
      }
    )
  }
}
