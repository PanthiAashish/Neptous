//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")
require('dotenv').config();
const mongodbPassword = process.env.MONGODB_PASSWORD

const app = express();

const SECRET = 'My-secret_key' // DONT FORGET TO PUT IT IN ENVIRONMET VARIABLES

//creating the shape of data
const articleSchema = new mongoose.Schema({
  articleTitle: String,
  articleContent: String
})


//creating the collection.(one database can have multiple collections like userschema, adminschema, courseschema)
//Technically, we call them defining mongoose models
// const (collection name) = mongoose.model('Collection name', schema(shape of data))
const Articles = mongoose.model('Articles', articleSchema)

mongoose.connect(`mongodb+srv://aashish:${mongodbPassword}@cluster0.8bwunfa.mongodb.net/Neptous`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", async function (req, res) {
  try {
    // Retrieve articles from the database using async/await
    const articles = await Articles.find({});

    // Render the "home" template and pass the retrieved articles
    res.render("home", {
      posts: articles
    });
  } catch (err) {
    console.error(err);
    // If an error occurs, you can handle it differently, but don't render the template again here
    res.status(500).send("Internal Server Error");
  }
});





app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const articles = new Articles({
    articleTitle: req.body.postTitle,
    articleContent: req.body.postBody
  });

  articles.save()

  res.redirect("/");

});


app.get("/chat", function(req,res){
  res.redirect('https://discord.gg/ZTB2ZAFp')
})


app.get('/articles/:articleTitle', async function(req, res) {
  try {
    const requestedTitle = _.lowerCase(req.params.articleTitle);
    const posts = await Articles.findOne({ articleTitle: requestedTitle });

    if (posts) {
      return res.render('post', { posts: posts });
    } else {
      return res.status(404).send('Article not found'); // Handle not found case
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error'); // Handle database error
  }
});

app.post('/articles/:articleTitle', function(req, res){
  console.log(req.body.topic)
  res.redirect('/')
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});