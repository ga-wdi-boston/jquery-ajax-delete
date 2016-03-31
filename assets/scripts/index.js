'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

// On document ready
$(() => {
  $('#book-form').on('submit', function (event) {
    event.preventDefault();
    let bookId = $('#book-form').find("[name='book-id']").val();
    if (bookId) {

    } else {
      libraryApi.books(ui.getBooksSuccess, ui.getBooksFail);
    }
  });
});
