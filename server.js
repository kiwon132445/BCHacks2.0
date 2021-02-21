var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use("/js", express.static(__dirname + '/js'));
app.use("/src/scenes", express.static(__dirname + '/src/scenes'));
app.use("/src", express.static(__dirname + '/src'));
app.use("/assets", express.static(__dirname + '/assets'));


let port = process.env.PORT || 8000;

server.listen(port, function () {
    console.log(`Listening on ${server.address().port}`);
  });