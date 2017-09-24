var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var app = express();
var PORT = process.env.PORT || 4000;
var User = require("./models/User.js");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect("mongodb://localhost:27017/my_db");
var db = mongoose.connection;

db.on('error', function(err){
	console.log("Mongoose Error", err);
});

db.once('open', function(){
	console.log("Mongoose connection successful.");
});

app.get('*', function(req,res){
	res.sendFile('./public/index.html');
});


app.listen(PORT, function(){
	console.log("Listening on port: " +  PORT);
});