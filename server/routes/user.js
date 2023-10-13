const express = require('express');
const router = express.Router();



router.get("/", async function (req, res) {
    try {
      // Retrieve articles from the database using async/await
      const articles = await Articles.find({});
      res.json()
      // Render the "home" template and pass the retrieved articles
    } catch (err) {
      console.error(err);
      // If an error occurs, you can handle it differently, but don't render the template again here
      res.status(500).send("Internal Server Error");
    }
  });