const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));
io.on('connection', (socket) => {
  console.log('new user connected');


  socket.emit('newMessage', {
    from: 'John',
    text: 'see u then',
    createAt: 12412
  });
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createAt: new Date().getTime()
    });
  });
  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });
  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});
server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
