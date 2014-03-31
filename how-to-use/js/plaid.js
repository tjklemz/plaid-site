/* plaid.js */

var plaid = (function() {

  var orders = [
    [],
    [],
    [],
    ['.copyright', '.export', '.breakpoints', '.extend', '.merge', '.split', '.how-to-use', '.logo'],
  ];

  return function(i, width) {

    var order = orders[i];

    if (order) {
      var p = document.body;

      for (var j = 0, len = order.length; j < len; ++j) {
        p.insertBefore(p.querySelector(order[j]), p.firstChild);
      }
    }
  };

})();


// https://github.com/nathansmith/adapt
// http://adapt.960.gs

var ADAPT_CONFIG = {
  path: 'css/',
  dynamic: true,
  callback: plaid,

  range: [
    '0px    to 480px  = small.css',
    '480px  to 768px  = medium.css',
    '768px  to 1024px  = large.css',
    '1024px            = super.css'
  ]
};
