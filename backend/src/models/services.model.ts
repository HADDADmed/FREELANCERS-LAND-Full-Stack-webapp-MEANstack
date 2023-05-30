import mongoose from "mongoose";
import Category from "./categories.module";

const  serviceSchema = new mongoose.Schema({
         name : {type:String,required:true},
            price : {type:Number,required:true},
                description : {type:String,required:true},
                  imgPath : {type:String,required:true},
                    category : {type:String,required:true},
                    userId : {type:String,required:true},
  });
const Service = mongoose.model('services',serviceSchema);

  export default Service;
  