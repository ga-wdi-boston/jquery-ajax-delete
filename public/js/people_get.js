$(document).ready(function(){

  var getPeople = function(data){
    $('#container').html(data);
  };

  $.ajax({
    url: '/people',
    dataType: 'html'
  })
    .done(getPeople)
    .fail(function(jqXHR,textStatus,errorThrown){ alert("Request Failed: "+ textStatus); })
    .always(function(){ alert("Done: "); });
});
