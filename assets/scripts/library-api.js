'use strict';

const app = require('./app');
const getFormFields = require('../../lib/get-form-fields');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = function (bookId) {
  return $.ajax({
    url: app.host + '/books/' + bookId,
    method: 'GET',
  });
};

const create = function (form) {
  return $.ajax({
    url: app.host + '/books/',
    method: 'POST',
    data: getFormFields(form),
  });
};


module.exports = {
  index,
  show,
  create
};
