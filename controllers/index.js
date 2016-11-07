'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'Yale SOM tutoring sessions',
    'tagline': 'Learn talents from your classmates',
    'events': events.all
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
