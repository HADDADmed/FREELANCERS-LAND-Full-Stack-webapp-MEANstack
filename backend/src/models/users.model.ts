
import mongoose from "mongoose";
import Service from "./services.model";

const userSchema = new mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    isSeler : {type:Boolean,required:true,default:false},
    token : {type:String,required:false},
    cart: { type:Array,required: true,Service:[]= [] }

});

const User = mongoose.model('users',userSchema);

export default User;
