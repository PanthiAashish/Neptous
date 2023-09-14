const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config();
const mongodbPassword = process.env.MONGODB_PASSWORD

const app = express();

const SECRET = 'My-secret_key' // DONT FORGET TO PUT IT IN ENVIRONMET VARIABLES

//creating the shape of data
const postSchema = new mongoose.Schema({
  postTitle: String,
  postContent: String
})

const Posts = mongoose.model('Posts', postSchema,)

mongoose.connect(`mongodb+srv://aashish:${mongodbPassword}@cluster0.8bwunfa.mongodb.net/`)

