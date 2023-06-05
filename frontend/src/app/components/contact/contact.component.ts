import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from} from 'rxjs';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
//import { AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm!:FormGroup
  title:string="Contact"
  submitMessage:string=""
  isSubmited=false
  // private myForm!: AngularFirestoreCollection<any>;
   constructor(private formBuilder:FormBuilder/*,private firstore:AngularFirestore*/) {}
  ngOnInit(): void {
    // this.myForm=this.firstore.collection('enquiry')
    this.contactForm=this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      message:[null,Validators.required],
      subject:[null,Validators.required]
    })
  }
  submitData(value:any){
    //this.myForm.add(value).then(res=>{
      this.submitMessage='Submitted Successfully';
   // })
    // .catch(err=>{
    //   console.log(err)
    // })
    // this.isSubmited=true
  //   setTimeout(() => {
  //     this.isSubmited=false
  //   }, 8000);
   }
}
