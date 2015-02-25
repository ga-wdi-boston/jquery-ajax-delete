![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ajax GET

## Objectives

By the end of this, students should be able to:

- Introduced to Asynchronous processing.
- Know what AJAX is.
- Know how to load JSON from a backend server.
- Know how to load HTML from a backend server.

## Setup

- Fork and clone
- Run `bundle install`


## Remote Server.

Here we're going to start up a server that provides an API. The API will be for *Person* resources.

This backend server will also serve up all the static files, (html,js,css, ...) in the public directory.


### Startup a the server on port 3333.

```
rackup -p 3333 people_server.ru
```

### Backend API

Let's explore what the backend Person API is.  

**Make a HTTP GET request to /people. Get the resource as json.**

```
curl -v -H "Accept: application/json" http://localhost:3333/people
```

**Make a HTTP GET request to /people. Get the resource as HTML.**

```
curl -v -H "Accept: text/html" http://localhost:3333/people 
```

**Make a HTTP GET request to /people/3. Get the resource as json.**

```
curl -H 'Accept: application/json' http://localhost:3333/people/3
```

## Ajax GET

We are going to make more requests to the backend API. This time we are going to make an Ajax GET request, 

*Yep, it is just a plain ole HTTP Request*

### Create a public/index.html file.  

```
<html>
  <head>
    <title>Ajax GET</title>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
  </head>
  <body>
    <header>
      <h1>Ajax GET</h1>
    </header>
    <div id='container'>
      <div id='messagesDiv'></div>
    </div>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/people_get.js"></script>

  </body>
</html>
```

Pretty standard HTML file that just loads jquery and one other javascript file.


#### Create a public/js/people_get.js file.  

```
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
```

Lets review what is going on here!

* All code is wrapped in document ready so it will be executed ONLY after the DOM is fully loaded.
* We declare a function that will used to handle Ajax GET responses from the backend. 

	*All it does in put the data returned from the server inside the container div.*  
	
* We declare a function that will process errors.  

	*Gets the error status and creates an alert dialog*  
	
* Call JQuery's ajax method. *Go look up this method from the JQuery online docs*  

### Send the Ajax GET Request.

**Go to http://localhost:3000.**

This will load the HTML returned from the API into the page.

** Change the representation of the resource we're looking for from HTML to JSON**

```
$.ajax({
    url: '/people',
  })

```

Here we have just remove the dataType property. By default, this will ask for a JSON Representation, 'application/json' mime-type.

**Go to http://localhost:3000.**

This will load the JSON returned from the API into the page.


## Lab 

Using the JSON returned for all the people make a HTML ordered list of all the people. *Feel free to make it perty*  

