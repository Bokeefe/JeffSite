const express = require('express');
const app = express();
var fs = require("fs");
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
