import mongoose, { connect, mongo } from 'mongoose';
import  express  from 'express';
import cors from 'cors';
import { sample_Services, sample_users } from './data';
import  serviceRouter from './router/service.router';
import { userRouter } from './router/user.router';
import dotenv  from 'dotenv';
import {  connectToMongodbWithTryCatch } from './configs/database.config';


const MongoDB_Connection_URL = 'mongodb://0.0.0.0:27017';

dotenv.config();
//connect to MongoDb database
connectToMongodbWithTryCatch(MongoDB_Connection_URL);
const app = express();
app.use(express.json())

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


app.use('/api/services',serviceRouter);
app.use('/api/users',userRouter);



app.listen(5000,()=>{
    console.log("server backend r listning to port  5000");
})


