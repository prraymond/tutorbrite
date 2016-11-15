'use strict';
var path = require('path');
var logger = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var strftime = require('strftime');
var express = require('express');
var User = require('./models/users.js').User;

/*
 * Function that configures an application
 *
 */
module.exports = exports = function(yourApp){
  // Configure our templating engine: nunjucks
  nunjucks.configure('views', {
      autoescape: true,
      express: yourApp
  }).addFilter('prettyDate', function(dateObject) {
      return strftime('%A, %b. %e at %l:%M%P', dateObject);
  });

  // Use 'development' level of logging, ie. verbose
  if (process.env.NODE_ENV !== 'testing') {
    yourApp.use(logger('dev'));
  }

  // Serve images, css, and client-side js about of the
  // directory named 'public'
  yourApp.use(express.static(path.join(__dirname, 'public')));

  // Parse the body of incoming requests by default.
  // This means we can access the parameters of submitted
  // forms and such.
  yourApp.use(bodyParser.urlencoded({extended: true}));
  
  // Parse cookies in requests
  yourApp.use(cookieParser());

  // Use sessions to track users after they log in
  yourApp.use(session({ secret: 'THIS-SECRET-SHOULD-NOT-BE-HERE-KYLE-WRITING-IT' }));
   

  yourApp.use(passport.initialize());
  yourApp.use(passport.session());
  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  

  
};



