'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'Yale SOM tutoring site',
    'tagline': 'You can use this platform to learn talent from your peers',
    'events': events.all
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
