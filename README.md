![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# AJAX GET

## Objectives

By the end of this, students should be able to:

- Explain the difference between a synchronous and an asynchronous process.
- Explain what AJAX is.
- Use AJAX to load HTML from a backend server.
- Use AJAX to load JSON from a backend server.

## Prerequisites

- jQuery Event Handling
- HTTP
- JSON

## AJAX :: Asynchronous JavaScript

##### _'A is for Asynchronous'_

At a very low level, computers are built on processors, little electrical machines that accept one instruction at a time at more-or-less constant speed. This speed is controlled by a system within the chip called a clock; the clock acts like revolving door, allowing instructions to be entered into the chip only when they're in sync with the clock. This is called a **synchronous** system. However, sometimes things happen _outside_ that are out of sync with the clock (**asynchronous**) and need to be handled immediately by interrupting the normal flow of the program.

What does this all have to do with web development? Well, similar to the chip example, our typical software programs run synchronously. Each command corresponds to some set of instructions at the chip level, and each of these instructions is run one at a time, in order. But sometimes, things happen. Specifically, in the case of JavaScript, **events** happen. When those things happen, JavaScript has tools called **event listeners** which respond to events whenever they might appear, and a system called the **event loop** which inserts the responses to those events into the normal flow of the program. You have seen these already - you've written jQuery code to respond to asynchronous events like clicks and keypresses. But there are more things than user actions that we can be listening to... H

Consider the function `SetTimeout`. `SetTimeout` is one of the most basic asynchronous functions in JavaScript; it sets an event listener to trigger after a certain number of milliseconds (second argument) have passed, and specifies an event-handling function (first argument) to run whenever the timer is up.

```
var sayHello = ƒ(){
  console.log("Say Hello");
};

// 5 seconds
var numMilliseconds = 5000;

setTimeout(sayHello, numMilliseconds);

console.log("Say Goodbye");
```

run this file

```
node async_timeout.js
```

Notice how the sayHello function is being executed asynchronously. We actually wait five seconds before we execute the function passed to setTimeout, causing `"Say Goodbye"` to actually get printed _before_ `"Say Hello"`.

### Asynchronous JavaScript :: Lab

Consider the following recipe for chocolate cake.

> Note: This is not a real recipe! Don't expect it to actually produce cake. :-)

1. Warm up oven to 325 degrees for 10 minutes.
2. Put three eggs in a mixing bowl.
3. Melt a 1/4 pound of chocolate on a very low flame for 5 minutes.
4. Add 2 cups of flour in the mixing bowl and mix vigorously.
5. Add 1/3 stick of melted butter, yep in the mixing bowl.
6. Pour melted chocolate into bowl and mix.
7. Pour contents of bowl into a cake pan.
8. Put cake pan in the over for 25 minutes.

In pairs, walk through how you would follow this Recipe in a synchronous manner. Then, walk through how you would follow this Recipe in a asynchronous manner.

Create two javascript files - `synchronous-cake.js` and `asynchronous-cake.js`. Each of these files should print out every step of the recipe. However, the `synchronous` file should act as if the recipe was being followed synchronously, while the `asynchronous` file should use timeout (replace 1 minute in the recipe with 1 second in your code) to act as if the recipe was being followed asynchronously.

### Additional Resources
> Confused? Watch this video, ["Help, I'm stuck in an event loop."](https://vimeo.com/96425312)

## AJAX

AJAX stands for **Asynchronous Javascript And XML**; it's a system (actually, a set of systems) that allows us to asynchronously make HTTP requests and set callbacks to handle whatever we get back.

> XML is hardly ever used anymore, really; JSON is much more common now.*

In particular, we're going to look at jQuery's _implementation_ of AJAX, through some of its built-in methods (such as `.ajax` and `.get`).
However, in order for our AJAX to work, there needs to be an API behind it, so let's set that up first.

### AJAX GET :: Code-Along

First, we're going to start up a server that provides an API. The API will be for *Person* resources. This backend server will also serve up all the static files, (html,js,css, ...) in the public directory.

- Fork and clone this repo.
- Run `bundle install`
- run `rackup -p 3333 people_server.ru` from the root of the repo. This command will start up a server on port 3333.

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

Now do the above again using your browser.

> You may want to install this [JSON Prettifier](http://goo.gl/0ueVkS) for your browser; it makes JSON more readable.

<hr>

Let's make some more requests to the backend API - this time, however, we're going to do it by using AJAX GET.

> Don't worry! Remember, under the hood, AJAX is just making plain ol' HTTP requests.

#### **Create a public/index.html file.**

```
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

  This is a pretty standard HTML file that just loads jQuery and one other JavaScript file.


#### **Create a public/js/people_get.js file.**

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
    .always(function(){ console.log('Finished AJAX GET Request'); });
});
```

Lets review what's going on here.

  * All code is wrapped in our `$(document).ready`, so it will be executed ONLY after the DOM is fully loaded.

  * We declare a function that will used to handle AJAX GET responses from the backend.

	>All this will do is put the data returned from the server inside the container div.

  * We declare a function that will process errors. Specifically, it gets the error status and creates an alert dialog.

  * Call JQuery's `ajax` method. *Go look up this method from the jQuery online docs*  

#### **Send the AJAX GET Request.**

  a. Open http://localhost:3000 in your browser.

  > This will load the HTML returned from the API into the page.

  b. Change the representation of the resource we're looking for from HTML to JSON**

  ```
  $.ajax({
      url: '/people',
    })

  ```

  Here we have just remove the dataType property. By default, this will ask for a JSON Representation, 'application/json' mime-type.

  c. Go to http://localhost:3000 . This will load the JSON returned from the API into the page.


## AJAX GET :: Lab

Using the JSON returned for all the people make a HTML ordered list of all the people. *Feel free to make it perty*  
