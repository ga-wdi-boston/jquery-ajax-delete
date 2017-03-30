[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery AJAX GET Element

## Prerequisites

-   [http-study](https://github.com/ga-wdi-boston/http-study)
-   [json-study](https://github.com/ga-wdi-boston/json-study)
-   [Ajax Get Collection](https://github.com/ga-wdi-boston/jquery-ajax-get-collection)

## Objectives

Make HTTP requests using `curl`, the browser address bar, and AJAX for:

-   A specific resource.

Use response data in future requests

## Preparation


1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create and checkout a new branch (training).
1.  Install dependencies with `npm install`.


You can access the same web server that we set up during [jquery-ajax-get-collection](https://github.com/ga-wdi-boston/jquery-ajax-get-collection). Just leave the server running at the same port.

### If you need to set up the web server from scatch:

We'll make requests of and receive responses from an HTTP server we'll set up
 together:

1.  Open a new terminal (window or tab).
1.  Change into `~/wdi/tmp`.
1.  Fork and clone [library-api-guide](https://github.com/ga-wdi-boston/library-api-guide)
and follow installation instructions listed there.
1.  Once installed, checkout a `jquery-ajax` branch within `library-api`.

We're now ready to make requests.

### GET /books/:id

Retrieve a book from the API

### Demo: Browser Single Book

Entering `http://localhost:4741/books/1` into the chrome address bar.

### Demo: Curl Single Book

We'll use curl to retrieve the one book at a time.

### Code Along: Curl Single Book

Let's write that curl command into a script.

### Lab: AJAX Single Book

Again, take a stepped approach:

1.  Add a text input for a book id to the form in `index.html`.
1.  Retrieve the value of the id, if any, in the submit handler.
1.  Branch on that value in the submit handler.
1.  Add a single book success and fail handler to `assets/scripts/ui.js`.
1.  Add a single book retrieval method to `assets/scripts/library-api.js`.
1.  Invoke the single book retrieval method from the submit handler passing the
 success and fail callbacks.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
