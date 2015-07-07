$(document).ready(function(){
  
  var getPeople = function(data){
    // data will be the contents of the HTTP Response
    // from the server.

    // In this case will be the JSON that represents all the
    // people that the server knows about.
    // Build html for that person and inject into
    // the DOM.
    var personTemplate = function(person){
      return "<div id='" + person.id  + "'>" +
                "<dt>Name</dt><dd>" + person.name + "</dd>" +
                "<dt>Occupation</dt><dd>" + person.occupation + "</dd>" +
                "<dt>Company</dt><dd>" + person.company_name + "</dd>" +
              "</div><hr><br>";
    };

    data.forEach(function(person){
      $("#container").append(personTemplate(person));
    });;
  };

  var errorHandler = function(jqXHR,textStatus,errorThrown){
    var msg = "Request Failed: "+ textStatus;
    alert(msg);
    console.log(msg);
  };

  // JQuery method that will invoke an HTTP Request.

  // Make a HTTP GET request to http://localhost:3333/people
  $.ajax({
    url: '/people',
    dataType: 'json'
    // accepts a function that will act as a callback handler.
  })
    .done(getPeople)
    .fail(errorHandler)
    .always(function(){ console.log('Finished AJAX GET Request'); });
    // We could also have written this as
    //   var request = $.ajax({ ... });
    //   request.done(getPeople);
    //   request.fail(errorHandler);
    //   request.always(function(){ console.log('Finished AJAX GET Request'); });
    // And, of course, we could also have used either named or anonymous functions for any of these callbacks.

});
