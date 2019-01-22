const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "You are in / page!",
    });
});

module.exports=router;