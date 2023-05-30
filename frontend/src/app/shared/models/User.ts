export class User{
  static findOne(arg0: { email: any; }) {
    throw new Error('Method not implemented.');
  }
  static create(newUser1: User) {
    throw new Error('Method not implemented.');
  }

  _id?:string;
  name!:string;
  email!:string;
  password!:string;
  token?:string;
  imgPath?:string;


}
