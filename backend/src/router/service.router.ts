import { Router } from "express";
import { sample_Services } from "../data";
import Service from "../models/services.model";



const router = Router();


router.get('/',async (request,response)=>{
  // response.send(sample_Services);
  try{
    const data = await Service.find({});
    console.log("data received from database");
    response.status(200).json(data);
  } 
  catch(error){
    console.log("error in getting data from database",error);
    response.status(500).json({message:"error in getting data from database"});
   }
})
router.get('/service/:serviceID',async (request,response)=>{
  // const serviceID = request.params.serviceID;
  //   const service =  sample_Services.find((service=> service.id ==serviceID ))?? [];
  // response.send(service);
  try{
    const serviceID = request.params.serviceID;
    const data = await Service.findById(serviceID);
    console.log("data received from database");
    response.status(200).json(data);
  } 
  catch(error){
    console.log("error in getting data from database",error);
    response.status(500).json({message:"error in getting data from database"});
   }
})


router.post('/',async (request,response)=>{

  try{
    const data = await Service.create(request.body);
    console.log("servicce was added susccessfuly ",data);
    response.status(200).json(data);
  } 
  catch(error){
    console.log("error in getting data from database",error);
    response.status(500).json({message:"error in getting data from database"});
   }
})


router.delete('/:serviceID',async (request,response)=>{

  try{
    const serviceID = request.params.serviceID;
    const data = await Service.findByIdAndDelete(serviceID);
    console.log("servicce was deleted susccessfuly ",data);
    response.status(200).json(data);
  } 
  catch(error){
    console.log("error in getting data from database",error);
    response.status(500).json({message:"error in getting data from database"});
   }

})

router.put('/:serviceID',async (request,response)=>{

  try{
    const serviceID = request.params.serviceID;
    const data = await Service.findByIdAndUpdate(serviceID,request.body);
    console.log("servicce was updated susccessfuly ",data);
    response.status(200).json(data);
  } 
  catch(error){
    console.log("error in getting data from database",error);
    response.status(500).json({message:"error in getting data from database"});
   }
});

router.get('/search/:searchTerm',(request,response)=>{
    // const searchTerm = request.params.searchTerm;
    //   const services =  sample_Services.filter(service=>service.name.toLowerCase().includes(searchTerm.toLowerCase()))
    // response.send(services);
    const searchTerm = request.params.searchTerm;
    Service.find({name:{$regex:searchTerm,$options:'i'}},(error: any,services: any)=>{
      if (error) {
        console.log("error in getting data from database",error);
        response.status(500).json({message:"error in getting data from database"});
      }else{
        console.log("data received from database by serchTearm ");
        response.status(200).json(services);
      }
    })
})


export  default router;


