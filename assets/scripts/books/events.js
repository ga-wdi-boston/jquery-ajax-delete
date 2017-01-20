'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api.js');
const ui = require('./ui.js');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault();
  let book = getFormFields(event.target);

  if (book.id.length === 0) {
    api.index()
    .then(ui.onSuccess)
    .catch(ui.onError);
  } else {
    api.show(book.id)
    .then(ui.onSuccess)
    .catch(ui.onError);
  }
};

module.exports = {
  onGetBooks,
};
