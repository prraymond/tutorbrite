'use strict';

var sequelize = require('../database');
var passportLocalSequelize = require('passport-local-sequelize');

// A helper to define the User model with username, password fields 
var User = passportLocalSequelize.defineUser(sequelize, {});

module.exports = exports = {
    User: User
};