'use strict';

function arraySum(arr) {
  var total = 0;
  arrayArraySum(arr);
  function arrayArraySum(arr) {
    Object.keys(arr).forEach(function(key) {
      (arr[key] === parseInt(arr[key]) ? total+=arr[key] : arrayArraySum(arr[key]) );
    });
  }
  return total;
}

module.exports = arraySum;
