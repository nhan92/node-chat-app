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

  // socket.emit('newEmail', {
  //   from: 'nhannt92@gmail,com',
  //   text: 'hey, hey',
  //   createAt: 123
  // });
  socket.emit('newMessage', {
    from: 'John',
    text: 'see u then',
    createAt: 12412
  });
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
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
