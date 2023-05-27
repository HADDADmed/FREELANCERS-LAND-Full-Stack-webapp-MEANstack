import mongoose from "mongoose";

const  serviceSchema = new mongoose.Schema({
         name : {type:String,required:true},
            price : {type:Number,required:true},
                description : {type:String,required:true},
                  imgPath : {type:String,required:true},
  });
const Service = mongoose.model('services',serviceSchema);

  export default Service;
  