//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")
require('dotenv').config();
const mongodbPassword = process.env.MONGODB_PASSWORD
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express();

const SECRET = process.env.SECRET // DONT FORGET TO PUT IT IN ENVIRONMET VARIABLES
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("public"));

app.use(cookieParser());
//creating the shape of data

const articleSchema = new mongoose.Schema({
  articleTitle: String,
  articleContent: String
})

const userData = new mongoose.Schema({
  userTopic: String,
  userContent: String,
  userID: String
})

//creating the collection.(one database can have multiple collections like userschema, adminschema, courseschema)
//Technically, we call them defining mongoose models
// const (collection name) = mongoose.model('Collection name', schema(shape of data))
const Articles = mongoose.model('Articles', articleSchema)
const UserContent = mongoose.model('UserContent', userData)

mongoose.connect(`mongodb+srv://aashish:${mongodbPassword}@cluster0.8bwunfa.mongodb.net/Neptous`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




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


function verifyToken(req, res, next){
 const jwt_token = req.cookies.jwt_token
 if (!jwt_token) {
  // return res.status(401).json({ message: 'Access denied. No token provided.' });
  res.redirect('/login')
}

try {
  const decoded = jwt.verify(jwt_token, SECRET);
  if(decoded.admin == true){
    next(); // User is authenticated, continue to the next middleware
  }
  else{
    res.redirect('/login')
  }
} catch (error) {
  res.status(400).json({ message: 'Invalid token.' });
}

}


app.get("/compose", verifyToken, function(req, res){
  res.render("compose");
});

app.post("/compose", verifyToken, function(req, res){
  const articles = new Articles({
    articleTitle: req.body.postTitle,
    articleContent: req.body.postBody
  });

  articles.save()

  res.redirect("/");

});

app.post('/login', function(req, res){
  const password = req.body.password;

  if (password === process.env.LOGIN_PASSWORD) {
    // Create a JWT token with user information
    // const token = jwt.sign( password, SECRET, { expiresIn: '1h' });

    const token = jwt.sign({admin: true}, SECRET);
    res.cookie("jwt_token", token, {maxAge: 600000});
    res.redirect('/compose')
  } else {
    res.status(401).json({ message: 'Incorrect password' });
  }
})


app.get("/chat", function(req,res){
  res.redirect('https://discord.gg/JanKxhma3q')
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
  const userContent = new UserContent({
    userTopic: req.body.topic,
    userContent: req.body.details,
    userID: req.body.identity
  });

  userContent.save()
})



app.get('/login', (req, res)=>{
  res.render('login')
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});


