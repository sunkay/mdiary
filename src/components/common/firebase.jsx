var Firebase = require('firebase');

module.exports.getFBConditionsHandle = function() {
  var rootUrl = "https://m-diary.firebaseio.com/";

  return new Firebase(rootUrl + 'conditions/');
}
