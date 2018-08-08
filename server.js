const express = require('express');
const app = express();

app.use(function(req, res, next) {
  	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Authorization, Content-Type");
	next();
});

app.use(express.static('.'));
//app.use(express.static('/client/compiled'));

app.listen(3000, function () {
  console.log('Application started on port 3000');
});