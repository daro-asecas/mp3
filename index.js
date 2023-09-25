const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.BACKEND_PORT || 3003;

app.get("/", function(req, res) {
  return res.redirect("/public/home.html");
});

app.use("/public", express.static(__dirname + "/public"));

/** Implementing Simple Music Server using Express JS **/
app.get("/music", function(req, res) {
  // File to be served

  const fileId = req.query.id;
  const file = __dirname + "/music/" + fileId;
  fs.exists(file, function(exists) {
    if (exists) {
      const rstream = fs.createReadStream(file);
      rstream.pipe(res);
    } else {
      res.send("Its a 404");
      res.end();
    }
  });
});
app.get("/download", function(req, res) {
  const fileId = req.query.id;
  const file = __dirname + "/music/" + fileId;
  fs.exists(file, function(exists) {
    if (exists) {
      res.setHeader("Content-disposition", "attachment; filename=" + fileId);
      res.setHeader("Content-Type", "application/audio/mpeg3");
      const rstream = fs.createReadStream(file);
      rstream.pipe(res);
    } else {
      res.send("Its a 404");
      res.end();
    }
  });
});

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});
