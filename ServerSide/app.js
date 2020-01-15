var express = require("express");
var fs = require('fs');
var path = require("path");
var favicon = require("serve-favicon");
var morgan = require("morgan");
var cors = require("cors");
var bodyParser = require('body-parser');
var userRoute = require("./routes/userauth.route")
var chat = require("./routes/chat");

var app = express();
//connecting to mongodb 
//database connection setup
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ChatApplication", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!!'))
  .catch((err) => console.log(err));

//middlewares used
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

//create a write stream in append mode
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
//set up the logger
app.use(morgan('combined', { stream: accessLogStream }))



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});



var port = process.env.PORT || 3000;
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use("/", chat);
app.use("/api", userRoute);

server.listen(port, function (req, res) {
  console.log("You are listening to port 3000");
});

module.exports = app
