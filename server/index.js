import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/user.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://aashish:${mongodbPassword}@cluster0.8bwunfa.mongodb.net/Neptous`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
});

app.use('/', router)

app.listen(process.env.PORT || 5000, function() {
  console.log("Server started on port 3000");
});