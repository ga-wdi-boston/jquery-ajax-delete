'use strict';

// don't rely on console displays for real apps! we would normally manipulate
// the content on the page with a success function.
//
// for our application, we'd probably call it "displayBooks"
// or something similar.
const onSuccess = function (data) {
  if (data.book) {
    console.log(data.book);
  } else if (data.books) {
    console.table(data.books);
  } else {
    console.log('Success!');
  }
};

const onError = function (response) {
  console.error(response);
};

module.exports = {
  onSuccess,
  onError,
};
