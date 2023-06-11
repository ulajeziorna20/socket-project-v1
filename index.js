const express = require('express')
const app = express()

const http = require('http')
const expressServer = http.createServer(app)

const {Server} =  require('socket.io')

const io = new Server(expressServer)

io.on('connection', function (socket) {
    console.log('new user connected');


    socket.on('disconnect', function (params) {
        console.log('user diconnect');
    })

})


app.get('/', function (req, res) {
    res.sendFile(__dirname + '\\' + 'index.html')
})







expressServer.listen(3002, function () {
    console.log('SEREVER IS NOW RUNNING AT PORT 3002');
})