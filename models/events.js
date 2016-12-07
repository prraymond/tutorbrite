'use strict';

var sequelize = require('../database');
var Sequelize = require('sequelize');

var TutorEvent = sequelize.define('tutorevent', {
  id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  name: {type: Sequelize.STRING},
  location: {type: Sequelize.STRING},
  description: {type: Sequelize.TEXT},
  imageUrl: {type: Sequelize.STRING, validate: {isUrl: true}},
  date: Sequelize.DATE,
});

TutorEvent.sync();

/**
 * An Array of all the events
 */
var allEvents = [
  {
    id: 0,
    title: 'SOM House Party',
    // Note that JavaScript months are zero-indexed,
    // so, month zero is January. This is Jan 17th
    // 2013 at 4:30pm local time.
    date:   new Date(2016, 0, 17, 16, 30, 0),
    image: 'http://www.mp3poolonline.com/blog/wp-content/uploads/2016/03/house-party-guff.com_.jpg',
    location: 'Kyle \'s house',
    attending: ['kyle.jensen@yale.edu', 'kim.kardashian@yale.edu']
  },
  {
    id: 1,
    title: 'BBQ party for hackers and nerds',
    date:   new Date(2015, 8, 1, 19, 0, 0),
    image: 'http://www.myncbc.org/church/assets/images/News_Media/BBQ.jpg',
    location: 'Miles\' house',
    attending: ['kyle.jensen@yale.edu', 'kim.kardashian@yale.edu']
  },
  {
    id: 2,
    title: 'BBQ for managers',
    date:   new Date(2015, 9, 20, 18, 0, 0),
    image: 'http://i.imgur.com/CJLrRqh.gif',
    location: 'Barry Nalebuff\'s house',
    attending: ['kim.kardashian@yale.edu'],
  },
  {
    id: 4,
    title: 'Cooking lessons for the busy business student',
    date:   new Date(2014, 8, 2, 19, 0, 0),
    image: 'http://i.imgur.com/02KT9.gif',
    location: 'Yale Farm',
    attending: ['homer.simpson@yale.edu'],
  }
];


/**
 * Returns the first event that has a particular id.
 */
function getById (id) {
  for (var i = allEvents.length - 1; i >= 0; i--) {
    if (id === allEvents[i].id){
      return allEvents[i];
    }
  }
  return null;
}

module.exports = exports = {
  // all: allEvents,
  // getById: getById,
  sequelize: sequelize,
  TutorEvent: TutorEvent
};