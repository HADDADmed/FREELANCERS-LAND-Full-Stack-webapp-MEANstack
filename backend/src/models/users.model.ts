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
    pass:{type:String,require:false}
});

const User = mongoose.model('users',userSchema);

export default User;
