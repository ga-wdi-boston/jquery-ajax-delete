$(document).ready(function(){

  // This is the callback handler for the Ajax GET
  var getPeople = function(data){
    // data will be the contents of the HTTP Response
    // from the server.

    // In this case will be the JSON that represents all the
    // people that the server knows about.
    // Build html for that person and inject into
    // the DOM.
    var personHTML = '';
    data.forEach(function(person){
      var personHTML = "<div id='" + person.id  + "'> <dt>Name</dt><dd>";
      personHTML += person.name + "</dd>";
      personHTML += "<dt>Occupation</dt><dd>" + person.occupation + "</dd>";
      personHTML += "<dt>Company</dt><dd>" + person.company_name + "</dd>";
      personHTML += "</div><hr><br>";
      $("#container").append(personHTML);


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
    .fail(errorHandler);
});
