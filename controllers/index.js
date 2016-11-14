'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {

  events.TutorEvent.findAll().then(function(foundEvents){
    console.log('We found ' + foundEvents.length + ' events');
    var contextData = {
      'title': 'Yale SOM tutoring sessions',
      'tagline': 'Learn talents from your classmates',
      'events': foundEvents
    };
    response.render('index.html', contextData);
  });

  
}

module.exports = {
  index: index
};
