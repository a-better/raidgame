
//엔트리 애플리케이션 
//최초로 진입하는 애플리케이션 
var express = require('express');
var Engine = require('./engine/engine');
 
var bodyParser = require('body-parser'); 
var app		= express();
var server = app.listen(3000);
app.use(bodyParser.urlencoded({ extended: false }));
engine = new Engine();
engine.network.setConnection(server);


app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './client');

//client->lndex.html
app.use(express.static('client'));
init();
app.post('/:roomId', function(req, res){
	
	user_data = JSON.parse(req.body.user_data);
	console.log(user_data.properties);
	//console.log()
	res.render('room', {roomId : req.params.roomId, 
		nickname : user_data.properties.nickname,
		thumbnail : user_data.properties.thumbnail_image
	});
});
function init() {
	engine.network.setEventHandlers();
	//engine.socket.setBroadcastingLoop();

	// Start game loop
	//setInterval(broadcastingLoop, updateInterval);
};



function onClientDisconnect() {
	//클라이언트가 끊겻을떄, leave pending game이나 remove player 같은걸 실행해줘야함. 
}