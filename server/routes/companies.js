const express = require("express");
const router = express.Router();
const axios = require("axios");

//Full route
///api/companies/search?text=""
router.get("/search", async (req, res, next) => {
  console.log("Here inside search");
  try {
    const searchText = JSON.parse(req.query.text);
    const link = `http://d.yimg.com/aq/autoc?query=${searchText}&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks`;
    const response = await axios.get(link);

    const responseWithCallbackRemoved = response.data.replace(
      /^YAHOO\.util\.ScriptNodeDataSource\.callbacks\(|\)$/g,
      "",
    );
    const responseWithBracketRemoved = responseWithCallbackRemoved.replace(
      /\)|\;/g,
      "",
    );
    const responseJSON = JSON.parse(responseWithBracketRemoved);
    const results = responseJSON.ResultSet.Result;

    if (results.length === 0) res.status(200).send([]);

    let companies = [];
    results.map(company => {
      const name = `${company.name}(${company.exch})`;
      const symbol = company.symbol;
      companies.push({ name, symbol });
    });
    res.status(200).send(companies);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Some error occured" });
  }
});

module.exports = router;
