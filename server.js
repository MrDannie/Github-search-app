const express = require("express");

const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/Github-search-app"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/Github-search-app/index.html"));
});

app.listen(process.env.port || 8080);
