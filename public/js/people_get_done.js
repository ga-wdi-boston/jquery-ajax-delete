$(document).ready(function(){

  var getPeople = function(data){
    $('#container').html(data);
  },
      errorHandler = function(jqXHR,textStatus,errorThrown){
        var msg = "Request Failed: "+ textStatus;
        alert(msg);
        console.log(msg);
      };

  $.ajax({
    url: '/people',
    dataType: 'html'
  })
    .done(getPeople)
    .fail(errorHandler)
    .always(function(){ console.log('Finished Ajax GET REQUEST'); });
});
