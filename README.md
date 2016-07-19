[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery AJAX GET

## Prerequisites

-   [http-study](https://github.com/ga-wdi-boston/http-study)
-   [json-study](https://github.com/ga-wdi-boston/json-study)

## Objectives

Make HTTP requests using `curl`, the browser address bar, and AJAX for:

-   A resource collection.
-   A specific resource.

Use response data in future requests

## Preparation

Set up the client:

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create and checkout a new branch (training).
1.  Install dependencies with `npm install`.

We'll make requests of and receive responses from an HTTP server we'll set up
 together:

1.  Open a new terminal (window or tab).
1.  Change into `~/wdi/tmp`.
1.  Fork and clone [library-api](https://github.com/ga-wdi-boston/library-api).
1.  Change into the new directory.
1.  Install dependencies with `bundle install`.
1.  Add secrets to `config/secrets.yml`.
1.  Create a database with `rake db:create`.
1.  Create a database schema with `rake db:migrate`
1.  Add data to the database with `rake db:seed db:example`
1.  Run the HTTP server with `rails server`.

We're now ready to make requests.

## Retrieving data from an API

### AJAX

What's in a name?

AJAX at [MDN](https://developer.mozilla.org/en-US/docs/AJAX).

The [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/) interface.

### Components of HTTP

1.  URL structure
1.  Request verbs
1.  HTTP request and response

### Connecting to the library-api

#### GET /books

Retrieve a list of books from the API

##### Browser book collection demonstration

Entering `http://localhost:3000/books` into the chrome address bar.

##### Browser book collection code along

If not already installed in chrome, let's add a [JSON formatting utility](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en).

##### Curl book collection demonstration

`curl` is a command line utility for making http requests.  We'll use curl to
 retrieve the book collection.

##### Curl book collection code along

Let's write that curl command into a script.

##### AJAX book collection code along

We'll take a stepped approach:

1.  Add a form to `index.html`.
1.  Add a submit input to the form.
1.  Add a submit handler to the form in the document ready event in
 `assets/scripts/index.js`.
1.  Add a collection success and fail handler to `assets/scripts/ui.js`.
1.  Add a book collection retrieval method to `assets/scripts/library-api.js`.
1.  Invoke the collection retrieval method from the submit handler passing the
 success and fail callbacks.

#### GET /books/:id

Retrieve a book from the API

##### Browser single book demonstration

Entering `http://localhost:3000/books/1` into the chrome address bar.

##### Browser single book code along

Entering `http://localhost:3000/books/<integer>` into the chrome address bar.

##### Curl single book demonstration

We'll use curl to retrieve the one book at a time.

##### Curl single book code along

Let's write that curl command into a script.

##### AJAX single book code along

Again, we'll take a stepped approach:

1.  Add a text input for a book id to the form in `index.html`.
1.  Retrieve the value of the id, if any, in the submit handler.
1.  Branch on that value in the submit handler.
1.  Add a single book success and fail handler to `assets/scripts/ui.js`.
1.  Add a single book retrieval method to `assets/scripts/library-api.js`.
1.  Invoke the single book retrieval method from the submit handler passing the
 success and fail callbacks.

#### The "A" in AJAX

The A in AJAX stands for asynchronous.
Let's explore some implications of asynchronous behavior.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
