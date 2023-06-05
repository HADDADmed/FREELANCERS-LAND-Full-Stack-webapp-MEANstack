import User from "./../models/users.model";
import jwt from "jsonwebtoken";

import { Router } from "express";
import { sample_Services, sample_users } from "../data";
import Service from "../models/services.model";
import { ObjectId } from "mongodb";

const bcrypt = require("bcrypt")

const router = Router();
router.get('/',async (request,response)=>{
   
     const users = await User.find({});
    response.send(users);
  })

  router.get('/user/:userID',async (request,response)=>{
    const userID = request.params.userID;
    try {
        const user = await User.findById(userID);
        response.send(user);
    } catch (error) {
        console.log("error in getting data from database",error);
        response.status(500).json({message:"error in getting data from database"});
    }
    
  }
  )

  router.put('/user/:userId', async (request, response) => {
    const newUser = request.body;
    const userId = request.params.userId;
    console.log("userId", userId);
    try {
      bcrypt.hash(newUser.password, 10, async (err: any, hash: string) => {
        if (err) {
          console.log("error in hashing password", err);
          response.status(500).json({ message: "error in hashing password" });
          return;
        }
        // Store hash in your password DB.
        console.log("hash", hash);
        newUser.password = hash;
  
        try {
          const data = await User.updateOne({ _id: userId }, newUser);
          console.log("user was updated successfully", data);
          response.status(200).json(data);
        } catch (updateError) {
          console.log("error in updating user", updateError);
          response.status(500).json({ message: "error in updating user" });
        }
      });
    } catch (error) {
      console.log("error in getting data from database", error);
      response.status(500).json({ message: "error in getting data from database" });
    }
  });
  


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
        }else
        {
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
    const newUser1 = new User({name:newUser.name,email:newUser.email,password:newUser.password,imgPath:newUser.imgPath});
    console.log("newUser1 :",newUser1);
    newUser1.pass=newUser1.password;
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
 


// router.delete('/cart/:userId/:serviceID',async (request,response)=>{
//         const serviceID = request.params.serviceID;
//         const userId = request.params.userId;
//         const service1 = await Service.findById(serviceID);
//         const service = { name:service1?.name, price: service1?.price, description: service1?.description, imgPath: service1?.imgPath }
//         try {
//           const user = await User.findById(userId);
//           if (user && user.Cart! && user.Cart!.services) {
//             user.Cart.services = user.Cart.services.filter((s) => s.name !== service.name);
//             await user?.save();
//           }
//         } catch (error) {
//           console.log("Error in getting data from the database", error);
//           response.status(500).json({ message: "Error in getting data from the database" });
//         }
      
//       })

export const userRouter = router;