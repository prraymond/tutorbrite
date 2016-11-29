'use strict';

var User = require('../models/users.js').User;

function register(req, res){
  var errors = [];
  if(req.method == "POST"){
    // They are submitting the form. We should check
    // for errors and then create the new user.
    var unsavedUser = User.build({
      username: req.body.username,
    });
    unsavedUser.setPassword(req.body.password, function(){
      unsavedUser.save()
      .then(function(newUser){
        return res.redirect('/');
      })
      .catch(function(err){
        console.log(err);
        return res.render('register.html', {errors: ["Invalid username or password"]});
      });
    });
  }else{
    // They have not yet submitted a form, we should
    // just show them the blank form.
    return res.render('register.html', {errors: errors});
  }
}

function login(req, res) {
  res.render('login.html');
}

module.exports = {
  register: register,
  login: login
};
