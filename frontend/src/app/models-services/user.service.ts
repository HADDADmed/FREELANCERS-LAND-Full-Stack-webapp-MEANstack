import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/app/shared/models/User';
import { SERVICES_URL, USER_LOGIN_URL ,USER_REGISTER_URL, USER_URL} from '../shared/constants/urls';
import { IUserlogin } from '../shared/interfaces/IUserLogin';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../shared/models/Service';



const USER_KEY ='User'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
    public userObservable:Observable<User>;
  constructor(private http:HttpClient,private toastrService:ToastrService) {
    this.userObservable  =this.userSubject.asObservable()
   }
   findById(id:string):Observable<User>{
    return this.http.get<User>(`${USER_URL}/user/${id}`)
    }

   login(userLogin:IUserlogin):Observable<User>{
      return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
        tap({
          next:(user)=>{
             this.setUserToLocalStorage(user);
              this.userSubject.next(user)
              this.toastrService.success(
                `Welcome ${user.name} to FREELACERS-LAND `,
                `Login successful :)`,
                {positionClass: 'toast-top-center'}
              )
          },
          error:(errorResponse)=>{
            this.toastrService.error(
              errorResponse.error,
              `Login failed :(`,
              {positionClass:'toast-top-center'}
            )
          }
        })
      )
   }
   logout(){

    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
   }
  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user))
  }
  private getUserFromLocalStorage():User{
    const  userJason = localStorage.getItem(USER_KEY)
    if (userJason) return JSON.parse(userJason) as User;
    return  new User();
  }


  register(user: any): Observable<User> {
    const newUser: User = {
      _id: '',
      name: '',
      email: '',
      password: '',
      token: ''
    };

    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = user.password;
      console.log('aruved to register() in user.service.ts');
    return this.http.post<User>(USER_REGISTER_URL, newUser).pipe(
      tap({
        next: (user) => {
          this.toastrService.success(
            `Account created successfully in FREELACERS-LAND`,
            `Success :)`,
            { positionClass: 'toast-top-left' }
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(
            errorResponse.error,
            `Failed to create account :(`,
            { positionClass: 'toast-top-left' }
          );
        }
      })
    );
  }

  addToCart(userId:string,serviceId:string):Observable<User> {


    return this.http.put<User>(`${USER_URL}/cart/${userId}/${serviceId}`, null).pipe(
      tap({
        next: (user) => {
          this.toastrService.success(
            `Service added successfully to cart`,
            `Success :)`,
            { positionClass: 'toast-top-left' }
          );
        },
        error: (errorResponse) => {

          this.toastrService.error(
             undefined,
            `Service Already Existe in cart `,
            { positionClass: 'toast-center-center' }
          );

        }
      })
    );



  }




}
