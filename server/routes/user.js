import express from 'express';
const router = express.Router();
import { Articles } from '../db/index.js';
const verifyToken = require("../middleware/auth");


router.get("/", async function (req, res) {
  try {
    // Retrieve articles from the database using async/await
    const articles = await Articles.find({});

    // Send articles object as a JSON response
    res.json(articles);
  } catch (err) {
    console.error(err);
    // If an error occurs, return a JSON response with an error message and a 500 status code
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/compose', verifyToken, async(req, res) => {
  const articles = new Articles({
    articleTitle: req.body.postTitle,
    articleContent: req.body.postBody
  });

  articles.save()

  res.redirect("/");
})



router.post("/login", async (req, res) =>{
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





router.post('/articles/:articleTitle', function(req, res){
  const userContent = new UserContent({
    userTopic: req.body.topic,
    userContent: req.body.details,
    userID: req.body.identity
  });

  userContent.save()

  res.redirect('/')
})




router.get('/articles/:articleTitle', async function(req, res) {
  try {
    const requestedTitle = req.params.articleTitle;
    const posts = await Articles.findOne({ articleTitle: requestedTitle });

    if (posts) {
      return res.json(posts);
    } else {
      return res.status(404).send('Article not found'); // Handle not found case
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error'); // Handle database error
  }
});

export default router;