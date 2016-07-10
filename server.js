var express = require("express");
var app = express();
var DEFAULT_PORT = 3030;


var server_port = process.env.OPENSHIFT_NODEJS_PORT || DEFAULT_PORT
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use(express.static(__dirname + '/public'));

var testData = {
	test: 'testData'
}

app.get("/api/test", function(req, res){
	res.send(testData)
})

app.get("*", function(req, res){
	res.sendfile('./public/index.html');
})

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on: " + server_ip_address + ", server_port: " + server_port  )
});