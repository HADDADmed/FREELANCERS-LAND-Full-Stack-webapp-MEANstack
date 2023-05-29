import { User } from 'src/app/shared/models/User';

import { Injectable } from '@angular/core';
import { Service } from '../shared/models/Service';
import { sample_SErvices } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SERVICES_BY_SEARCH_URL, SERVICES_URL, SERVICE_BY_ID_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient,private toastrService:ToastrService) { }
  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(SERVICES_URL);
  }
  getServiceBySearchTearm(searchTerm:string): Observable<Service[]> {
       return this.http.get<Service[]>(SERVICES_BY_SEARCH_URL+searchTerm)
  }
  getServiceById(serviceId:string):Observable<Service>{
        return this.http.get<Service>(SERVICE_BY_ID_URL+serviceId)

  }

  saveService(myService:Service):Observable<Service>{
    console.log("click in save service");
    return this.http.post<Service>(SERVICES_URL,myService).pipe(
      tap({
        next:(myService)=>{
            this.toastrService.success(
              `Service ${myService.name} added to ur services successfully `,
              ` success :)`,
              {positionClass: 'toast-top-left'}
            )
        },
        error:(errorResponse)=>{
          this.toastrService.error(
            errorResponse.error,
            `failed to add Service :(`,
            {positionClass: 'toast-top-left'}
          )
        }
      })
    )

  }
  updateService(myService:Service):Observable<Service>{
    return this.http.put<Service>(SERVICES_URL,myService).pipe(
      tap({
        next:(myService)=>{
            this.toastrService.success(
              `Service ${myService.name} updated successfully `,
              ` success :)`,
              {positionClass: 'toast-top-left'}
            )
        },
        error:(errorResponse)=>{
          this.toastrService.error(
            errorResponse.error,
            `failed to update Service :(`,
            {positionClass: 'toast-top-left'}
          )
        }
      })
    )

  }

  addtoCart(myService:Observable<Service>,user:User):Observable<Service>{
    let cart:any[]=[]
    user.cart.push(myService)
    let newUserUpdate = user
    newUserUpdate.cart.push(myService)

    localStorage.setItem("cart",JSON.stringify(cart))
    return this.http.put<Service>(SERVICES_URL,myService).pipe(
      tap({
        next:(myService)=>{
            this.toastrService.success(
              `Service ${myService.name} updated successfully `,
              ` success :)`,
              {positionClass: 'toast-top-left'}
            )
        },
        error:(errorResponse)=>{
          this.toastrService.error(
            errorResponse.error,
            `failed to update Service :(`,
            {positionClass: 'toast-top-left'}
          )
        }
      })
    )
  }
}
