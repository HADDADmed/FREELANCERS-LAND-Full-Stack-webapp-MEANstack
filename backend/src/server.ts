import  express  from 'express';
import cors from 'cors';
import { sample_Services } from './data';

//cors for   getting request from different server
const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


app.get('/api/services',(request,response)=>{
    response.send(sample_Services);
})

/*
  getServiceBySearchTearm(searchTerm:string):Service[] {
       return this.getAll().filter(service=>service.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getServiceById(serviceId:string):Service{
        return this.getAll().find((service=> service.id ==serviceId ))?? new Service();
  } */
app.get('/api/services/search/:searchTerm',(request,response)=>{
    const searchTerm = request.params.searchTerm;
      const services =  sample_Services.filter(service=>service.name.toLowerCase().includes(searchTerm.toLowerCase()))
    response.send(services);
})
app.get('/api/service/:serviceID',(request,response)=>{
    const serviceID = request.params.serviceID;
      const service =  sample_Services.find((service=> service.id ==serviceID ))?? [];
    response.send(service);
})


app.listen(5000,()=>{
    console.log("server backend r listning to port  5000");
})


