const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();

//configuraciones del servidor
app.use(express.static(path.basename('public')));
app.use(require('./routes/app.routes'));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

//modulos para el funcionamieto de los sockets
const server = http.createServer(app);
const io = socketio(server);

//acciones del socket
require('./controllers/sockets')(io);

//exportacion de los modulos
module.exports = {
    app,
    server
}