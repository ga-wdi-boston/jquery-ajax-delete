'use strict';

const app = require('./app');
const getFormFields = require('../../lib/get-form-fields');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
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
  create,
};
