import { connect } from 'mongoose';
import { MongoClient } from 'mongodb';
import mongoose, { ConnectOptions} from 'mongoose';


function connectToMongodb(connectionUrl: string) {
   mongoose.connect(connectionUrl);
  console.log('Connected succesfuly to MongoDB.');
}

export  function connectToMongodbWithTryCatch(connectionUrl: string) {
try {
   connectToMongodb(connectionUrl+'/Hiver');
}catch (error) { console.error(error); }

}

// export const dbConnect = () => {

    
//     connect('mongodb://localhost:27017/Hiver', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     } as ConnectOptions).then(
//         () => console.log("connect successfully"),
//         err => console.log(err)
//     )
// }