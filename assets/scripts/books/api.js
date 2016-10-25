'use strict';

const app = require('../app.js');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

module.exports = {
  index
};
