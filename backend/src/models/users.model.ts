import { CartsComponent } from './../../../frontend/src/app/components/carts/carts.component';

import mongoose, { Types } from "mongoose";
import Service from "./services.model";
import { ObjectId } from 'mongodb';

const userSchema = new mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    isSeler : {type:Boolean,required:true,default:false},
    token : {type:String,required:false},
    imgPath : {type:String,required:false},
    // Cart:{
    //     services: [{
    //         _id: {type:S,required:true},
    //         name: {type:String,required:true},
    //         price: {type:Number,required:true},
    //         description: {type:String,required:true},
    //         imgPath: {type:String,required:true},
    //     }] 
    // }
});

const User = mongoose.model('users',userSchema);

export default User;
