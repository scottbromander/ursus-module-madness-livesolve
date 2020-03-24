// Require express - gives us back a function
const express = require("express");

// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

const currency = require("./currency");

app.get("/currency", function(req, res) {
  const moneyResponse = currency();

  res.send(`Random dollar amount: ${moneyResponse}`);
});

// Start up the server
app.listen(port, function() {
  console.log("listening on port", port);
});
