'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
<<<<<<< HEAD
    'title': 'Yale SOM tutoring sessions',
    'tagline': 'Learn talents from your classmates',
=======
    'title': 'Yale SOM tutoring site',
    'tagline': 'You can use this platform to learn talent from your peers',
>>>>>>> 280281061a1bae8eb12ffef0e0b4937b0e524c28
    'events': events.all
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
