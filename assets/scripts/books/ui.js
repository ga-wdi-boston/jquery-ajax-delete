'use strict';

// don't rely on console displays for real apps! we would normally manipulate
// the content on the page with a success function.
//
// for our application, we'd probably call it "displayBooks"
// or something similar.
const onSuccess = function (data) {
  if (data) { console.log("data is ", data); }
  if (data && data.book) { console.log("The book is (data.book) ", data.book); }
  if (data && data.books) { console.log("All the books are (data.books) ", data.books); }
};

const onError = function (response) {
  console.error(response);
};

module.exports = {
  onSuccess,
  onError,
};
