'use strict';

function register(req, res){
    res.render('register.html');
}

function login(req, res) {
  res.render('login.html');
}

module.exports = {
  register: register,
  login: login
};
