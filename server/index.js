import express from 'express';
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://aashish:${mongodbPassword}@cluster0.8bwunfa.mongodb.net/Neptous`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/', userRouter)

app.listen(process.env.PORT || 5000, function() {
  console.log("Server started on port 3000");
});