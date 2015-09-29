'use strict';

function longestString(arr) {
  var longString = '';
  Object.keys(arr).forEach(function(key) {
    ((typeof arr[key]) === 'string' ? stringLength(arr[key]) : longString = longString );
  });
  function stringLength(string) {
    (string.length > longString.length ? longString = string : longString = longString );
  }
  return longString;
}

module.exports = longestString;
