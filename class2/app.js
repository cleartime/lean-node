var express = require('express');


var app  = express();


app.get('/', function(req,res){
	console.log(req.query)
	res.send('test');
})

app.listen('3994', function(){
  console.log('app is running at port 3000');
})