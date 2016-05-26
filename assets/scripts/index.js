'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault();
  let bookId = $('#book-id').val();

  if (bookId.length === 0) {
    libraryApi.index()
      .done(ui.onSuccess)
      .fail(ui.onError);
  } else {
    libraryApi.show(bookId)
      .done(ui.onSuccess)
      .fail(ui.onError);
  }
};

// On document ready
$(() => {
  $('#book-request').on('submit', onGetBooks);
});
