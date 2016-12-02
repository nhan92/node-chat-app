var socket = io();

socket.on('connect', function ()  {
  console.log('connected to server');

  // socket.emit('createEmail', {
  //   to: 'nhiennt92@gmail.com',
  //   text: 'hey ho'
  // });
  socket.emit('createMessage', {
    from: 'Nhan',
    text: 'yup'
  });

});

socket.on('disconnect', function ()  {
  console.log('disconnect from server');
});

// socket.on('newEmail', function (email) {
//   console.log('new email', email);
// });
socket.on('newMessage', function(message){
  console.log('newMessage', message);
});
