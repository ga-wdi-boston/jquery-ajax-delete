'use strict';

const getBooksSuccess = (data) => {
  console.log(data.books);
};

const getBooksFail = (error) => {
  console.error(error);
};

module.exports = {
  getBooksFail,
  getBooksSuccess,
};
