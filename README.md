![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# AJAX GET

## Objectives


- Use AJAX to load HTML from a backend server.
- Use AJAX to load JSON from a backend server.

## Prerequisites

- jQuery Event Handling
- HTTP
- JSON
- Asynchronous vs Synchronous.  

## Setup

Install the [Postman](https://goo.gl/mNvTRr) Chrome extension. 

Install the [JSON Prettifier](http://goo.gl/0ueVkS) Chrome extension.

Install the [JSON Formatter](http://goo.gl/ZDLWY0) Chrome extension.


## AJAX

AJAX stands for **Asynchronous Javascript And XML**; it's a system that allows us to **asynchronously make HTTP requests** and **set callbacks** to handle whatever we get back.

> XML is hardly ever used anymore, really; JSON is much more common now.*

Browsers have a native JS function, [XMLHttpRequest](https://en.wikipedia.org/wiki/XMLHttpRequest), that generate an AJAX request. But we're going to use jQuery's _implementation_ of AJAX. We'll use the [$.ajax](http://api.jquery.com/jquery.ajax/) function.

However, in order for our AJAX to work, there needs to be an API behind it, so let's take a look at the API.

### AJAX GET 

First, we're going to start up a **web server** that provides an **Application Program Interface (API)**. The API will consist of a number of **URLs** that can be accessed using the **HTTP methods, [GET, POST, PATCH, PUT and DELETE]**.

The **API** will be for *Person* resources. Each **Resource** has a HTML and JSON **Representation**.

This backend server will also serve up all the static files, (html,js,css, ...) in the public directory.

- Fork and clone this repo.
- Run `bundle install`
- run `rackup -p 3333 people_server.ru` from the root of the repo. This command will start up a server on port 3333.

### We Do
Let's explore what the backend Person API is.  

**Make an HTTP GET request to /people. Get the resource as json.**

```
curl -v -H "Accept: application/json" http://localhost:3333/people
```

**Make an HTTP GET request to /people. Get the resource as HTML.**

```
curl -v -H "Accept: text/html" http://localhost:3333/people
```

**Make an HTTP GET request to /people/3. Get the resource as json.**

```
curl -H 'Accept: application/json' http://localhost:3333/people/3
```

Now do the above again using your browser. **Perhaps uisng the Postman Chrome extension.**

<hr>

OK! Now let's make some more requests to the backend API - this time, however, we're going to do it by using **AJAX** to make a **HTTP GET Request from JS code.**

1. **Create a public/index.html file.**

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>AJAX GET</title>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
      </head>
      <body>
        <header>
          <h1>AJAX GET</h1>
        </header>
        <div id='container'>
          <div id='messagesDiv'></div>
        </div>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/people_get.js"></script>

      </body>
    </html>
    ```

    This is a pretty standard HTML file; it loads jQuery and one other JavaScript file.

2. **Create a public/js/people_get.js file.**

Lets take a look at [JQuery Ajax functions](http://htmldog.com/guides/javascript/intermediate/jqueryajax/) and in particular the [$.ajax](http://api.jquery.com/jquery.ajax/) function.  

```javascript
$(document).ready(function(){
  var getPeople = function(data){
    $('#container').html(data);
  };
  var errorHandler = function(jqXHR,textStatus,errorThrown){
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
    .always(function(){ console.log('Finished AJAX GET Request'); });

  // We could also have written this as
  //   var request = $.ajax({ ... });
  //   request.done(getPeople);
  //   request.fail(errorHandler);
  //   request.always(function(){ console.log('Finished AJAX GET Request'); });  
  // And, of course, we could also have used either named or anonymous functions for any of these callbacks.

}); // end of ready function

```

  Lets review what's going on here.

  * All code is wrapped in our `$(document).ready`, so it will be executed ONLY after the DOM is fully loaded.

  * We called JQuery's `ajax` method, which accepts an object of settings as a parameter, and returns a 'request' object. Let's take a look at 
 

   > _To be precise, it returns a [JQXHR](http://api.jquery.com/Types/#jqXHR) object; for more details, look up `$.ajax` in the jQuery documentation._

  * Then, we called that 'request' object's `done` method, passing in a callback that would used to handle AJAX GET responses from the backend. The `done` method then returns the original 'request' object.
   >_The specific callback above, `getPeople`, takes the data it gets from the server and inserts it, as text, into the #container div._

  * Next, we called that 'request' object's `fails` method, passing in a callback that would be used to process errors.
   >_The specific callback above, `errorHandler` takes the error's status code and creates an alert dialog from it._

  * Finally, we called the 'request' object's `always` method, passing in a callback that we always want to run after the request, whether it was or was not successful.
  >_The `done` and `fail` callbacks are almost always specified, but `always` is only used sometimes. Weird, right?_

3. **Run Our JS and Send the AJAX GET Request.**

  a. Open http://localhost:3333 in your browser. This will load the HTML returned from the API into the page.

  b. Change the representation of the resource we're looking for from HTML to JSON; since JSON representation ('application/json' mime-type) is the default, we just need to remove the dataType property.

  ```
  $.ajax({
      url: '/people',
    })

  ```

  c. Reopen http://localhost:3333 in your browser; this will load the JSON returned from the API into the page.

4. **Use the Response Data to Render HTML**

  To do this, we need to edit our `getPeople` function. Rather than simply plopping our data (which, you might note, has already been converted from JSON to a JS object) into the `#container` div wholesale, let's iterate over each item in our data and append HTML bit by bit. You should have a sense for how to do this part already...

## Expose your local server (optional).

We are running our server on the same machine as our browser and the curl http client. Often, we'll need to expose this server to a client/customer. But they can't access our local server running on our machine.

To get around this we'll use ``ngrok`` to expose our server to the outside world and our client.

* Download [ngrok](https://ngrok.com/)
* Install it.

	```bash
	$ unzip ~/Downloads/ngrok.zip
	$ mv ~/Downloads/ngrok ~/bin/ngrok
	```  
* Run your server in it's own terminal shell, as we did above.  
	```bash
	$ rackup -p 3333 people_server.ru 
	```  
* Open up a new shell and run ngrok.  
	```bash
	$ ngrok http 3333
	```
* Use the public URL to access your local server running on port 3333.  In the browser access the URL. Mine is `http://852247c5.ngrok.io/people/3`. Your's will be different.  
	
	
[ngrok Documentation](https://ngrok.com/docs#getting-started)

*Note: you can view the details of your HTTP request in the browser at ``http://localhost:4040``*

### You Do	

Run the car server on port 4444. *Sadly, no speech from this application.**

```bash
 $ rackup -p 4444 cars_server.ru
```

Explore the API using ``curl``. 

* HTML GET Request to '/cars'
* HTML GET Request to '/cars/2'
* JSON GET Request to '/cars'
* JSON GET Request to '/cars/2'

Explore the API using ``Postman`` in Chrome. 

* HTML GET Request to '/cars'
* HTML GET Request to '/cars/2'
* JSON GET Request to '/cars'
* JSON GET Request to '/cars/2'

Create a HTML page and an Ajax request to retrieve all the cars. This should be a HTTP GET request using JSON. 

Create a list element ``<li id=car-2>Camry</li>`` for each car returned.
