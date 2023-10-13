const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://aashish:${mongodbPassword}@cluster0.8bwunfa.mongodb.net/Neptous`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

