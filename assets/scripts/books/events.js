'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetBooks = function (event) {
  event.preventDefault();
  // let bookId = $('#get-book-id').val();
  let data = getFormFields(event.target);

  if (data.book.id.length === 0) {
    api.index()
      .done(ui.onSuccess)
      .fail(ui.onError);
  } else {
    api.show(data)
      .done(ui.onSuccess)
      .fail(ui.onError);
  }
};

module.exports = {
  onGetBooks,
};
