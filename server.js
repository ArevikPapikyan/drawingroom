var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var coordinates = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    io.sockets.emit("drawcircles", coordinates);
    socket.on("get coordinates", function (data) {
        coordinates.push(data);
        io.sockets.emit("drawcircles", coordinates);
    })
});