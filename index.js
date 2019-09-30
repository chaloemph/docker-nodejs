var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res,next){
	res.sendfile('index.html');
});

io.on('connection',function(socket){
	console.log('connection success...');
	socket.on('amang',function(data){
		console.log(data);

		io.emit('amang',data);
	});
});

// setInterval(function(){
// 	// var news = axios.get('http',);
// 	// var temp = news;

// 	io.emit('amang','5555');
// 	console.log('555');
// },1000);

http.listen(8000,function(){
	console.log('run on port 8000');
});