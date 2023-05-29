
import e from "express";
import mongoose from "mongoose";

const  categorySchema = new mongoose.Schema({

    name : {type:String,required:true},
    imgPath : {type:String,required:true},
    services : {type:Array,required:false,Service:[]},
});


const Category = mongoose.model('categories',categorySchema);

export default Category;