'use strict';

const events = require('./books/events');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

// On document ready
$(() => {
  $('#book-request').on('submit', events.onGetBooks);
});
