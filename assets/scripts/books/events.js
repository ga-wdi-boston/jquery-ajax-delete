'use strict';

// const getFormFields = require('../../../lib/get-form-fields');

const libraryApi = require('../library-api');
const ui = require('./ui');

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

const onCreateBook = function (event) {
  event.preventDefault();
  libraryApi.create(event.target)
    .done(ui.onSuccess)
    .fail(ui.onError);
};

module.exports = {
  onGetBooks,
  onCreateBook
};
