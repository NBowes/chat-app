var socket = io();

$('form').on('submit', function(){
  var message = {
     text: $('#message').val(),
     username: $('#initials').val()
  }
  socket.emit('message',message);
    $('#message').val('');
    $('#initials').val('');
  return false;
})

socket.on('message',function(message){
  $('<li>').text(message.username + " says: " + message.text).appendTo('#history');
});
