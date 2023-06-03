import { User } from 'src/app/shared/models/User';
export class Service{
  _id?:string;
  name!:string;
  price!:number;
  description!:string;
  imgPath!:string;
  category!:string;
  user!:{
    name: string;
    email: string;
    imgPath: string;
  };
}
