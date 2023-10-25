import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/user.js';
import dotenv from 'dotenv';
dotenv.config()
const mongodbPassword = process.env.MONGODB_PASSWORD
const PORT = process.env.PORT || 3000

const app = express();
// let allowedOrigins = ['http://localhost:3000/',
// 'http://localhost:5173/']

// app.use(cors({
//   origin: function(origin, callback){

//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
app.use(cors())
app.use(express.json());


mongoose.connect(`mongodb+srv://aashish:${mongodbPassword}@cluster0.8bwunfa.mongodb.net/Neptous`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
});

app.use('/', router)

app.listen(PORT, function() {
  console.log(`Server started on port${PORT}`);
});