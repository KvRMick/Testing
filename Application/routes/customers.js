var express = require('express');
var router = express.Router();
var customers = require('../public/mockdata/customers.json');

module.exports =  function () {
    console.log("customers")
	router
		.route('/')
		.get((req, res, next) => {
            console.log("ran")
            // res.send("<h1>customers</h1>")
            next()
    })
}