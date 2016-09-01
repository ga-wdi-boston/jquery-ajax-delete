'use strict';

// const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetBooks = function (event) {
  event.preventDefault();
  let bookId = $('#book-id').val();

  if (bookId.length === 0) {
    api.index()
      .done(ui.onSuccess)
      .fail(ui.onError);
  } else {
    api.show(bookId)
      .done(ui.onSuccess)
      .fail(ui.onError);
  }
};

const onCreateBook = function (event) {
  event.preventDefault();
  api.create(event.target)
    .done(ui.onSuccess)
    .fail(ui.onError);
};

module.exports = {
  onGetBooks,
  onCreateBook
};
