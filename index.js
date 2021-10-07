const express = require("express");
const app = express();
const ejs = require('ejs');
const home = require('./home.json');
app.use(express.static(__dirname+"/public"));
app.get("/", function(req,res) {
	res.render("index.ejs", {
		req,res,
		radio: home.radio
	})
})
app.get("/radio/:id", function(req,res) {
	res.render("radio.ejs", {
		req,res,radio: home.radio
	})
})
app.listen(3000);