import jwt from "jsonwebtoken";

import { Router } from "express";
import { sample_Services, sample_users } from "../data";



const router = Router();
router.get('/',(request,response)=>{
    response.send(sample_users);
  })
router.post('/login',(request,response)=>{
    const {email,password} = request.body;
    const user = sample_users.find(user=>(user.email== email)&&(user.password== password) )
    if (user) {
      response.send(generateTokenResonse(user));
    }else{
      response.status(400).send("username or passsword is not valid")
    }
  })
  
  const generateTokenResonse = (user:any)=>{
            const token =jwt.sign({
              email:user.email
            },'RandomText',{
              expiresIn:"30d"
            })
            user.token= token;
            return user;
  
  }

export const userRouter = router;