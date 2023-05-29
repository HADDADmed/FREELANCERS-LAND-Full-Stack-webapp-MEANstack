import User from "./../models/users.model";
import jwt from "jsonwebtoken";

import { Router } from "express";
import { sample_Services, sample_users } from "../data";
import Service from "../models/services.model";

const bcrypt = require("bcrypt")

const router = Router();
router.get('/',(request,response)=>{
    response.send(sample_users);
  })
// router.post('/login',(request,response)=>{
//     const {email,plainPassword} = request.body;
    
//     if (user) {
//       response.send(generateTokenResonse(user));
//     }else{
//       response.status(400).send("username or passsword is not valid")
//     }
//   })

router.post('/login',async (request,response)=>{
       
    const {email,password} = request.body;
    console.log("email",email);
    try{
        const data = await User.findOne({email:email});
        if (data) {
            console.log("data",data);
            bcrypt.compare(password, data.password, function(err:any, result:Boolean) {
                console.log("result : ",result);
                if(result){
                response.send(generateTokenResonse(data));
                }else{
                response.status(400).send("username or passsword is not valid")
                }
            });
        }else{
            response.status(400).send("username or passsword is not valid")
        }

}   
catch(error){
    console.log("error in getting data from database",error);
    response.status(500).json({message:"error in getting data from database"});
    }})


  
  const generateTokenResonse = (user:any)=>{
            const token =jwt.sign({
              email:user.email
            },'RandomText',{
              expiresIn:"30d"
            })
            user.token= token;
            return user;
  
  }


  router.post('/register',async (request,response)=>{
    const newUser = request.body;
    const newUser1 = new User({name:newUser.name,email:newUser.email,password:newUser.password,cart:[]});
    console.log("newUser1 :",newUser1);
    try{
        bcrypt.hash(newUser1.password, 10, async (err:any, hash:string) => {
                // Store hash in your password DB.
                console.log("hash", hash);
                newUser1.password = hash;
                const data = await User.create(newUser1);
                console.log("user was added susccessfuly ",data);
                response.status(200).json(data);
            });
    }
    catch(error){
        console.log("error in getting data from database",error);
        response.status(500).json({message:"error in getting data from database"});
    }
    
  })

/// add item to cart
router.put('/addtocart/:UserId/:ServiceId',async (request,response)=>{
  const {UserId,ServiceId} = request.params;
  console.log("UserId",UserId);
  console.log("ServiceId",ServiceId);
  try{
      const user = await User.findById(UserId);
      const service = await Service.findById(ServiceId);
      console.log("user",user);
      console.log("service",service);
      if (user && service) {
        user.cart.push(service);
        const data = await User.findByIdAndUpdate(UserId,user);
        console.log("user was added susccessfuly ",data);
        response.status(200).json(data);
      }else{
        response.status(400).json({message:"user or service not found"});
      }
  }
  catch(error){
      console.log("error in getting data from database",error);
      response.status(500).json({message:"error in getting data from database"});
  }})



export const userRouter = router;