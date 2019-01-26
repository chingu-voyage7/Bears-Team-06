const express = require("express");
const router = express.Router();
const NewsAPI = require("newsapi");
let api_key = process.env.NEWS_API;
const newsapi = new NewsAPI(api_key);

router.get("/", function(req, res, next) {
  newsapi.v2
    .topHeadlines({
      q: "stock",
      language: "en",
    })
    .then(response => {
      console.log(response);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        data: response,
      });
    })
    .catch(err => {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        data: err,
      });
    });
});

module.exports = router;
