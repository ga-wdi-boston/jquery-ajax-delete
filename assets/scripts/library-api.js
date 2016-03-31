'use strict';

const books = (success, fail) => {
  console.log('Start request');
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/books',
  })
  .done(success)
  .fail(fail);
  console.log('Request queued');
};

module.exports = {
  books,
};
