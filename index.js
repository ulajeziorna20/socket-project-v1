const express = require('express')
const app = express()

const http = require('http')
const expressServer = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(expressServer)


// tworzymy połączenie z serwerem poprzez socket.io. W socket.io cokolwiek co ma się zdarzyć nazywa się zdarzeniem. Zdarzenia serwerowe to 
// connect * message * disconnect * reconnect * ping * join * leave
// to sa juz zarezerwowane eventy, nie mozna zmienic ich nazw

// zdarzenia na front których mozemy uzyc poprzez objekt socket to 
// connect * connect_error * connect_timeout * reconnect
io.on('connection', function (socket) {
    console.log('new user connected');

  

})


app.get('/', function (req, res) {
    res.sendFile(__dirname + '\\' + 'index.html')
})







expressServer.listen(3002, function () {
    console.log('SEREVER IS NOW RUNNING AT PORT 3002');
})