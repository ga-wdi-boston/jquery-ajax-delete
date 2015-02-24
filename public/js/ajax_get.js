$(document).ready(function(){

  var getPerson = function(data){
    $('#messagesDiv').html(data);
  };

  $.ajax({
    url: '/json'
  }).done(getPerson);


});
