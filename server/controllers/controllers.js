const models = require('../models/models.js');
const { User } = models;
const { Template } = models;
const userController = {};

const bcrypt = require('bcryptjs');

// const templateController = {};

//api.get('/signup', userController.signup, usercOntorller.makeCookie, userController.intializeTemplates, userController.singup...)


userController.signup = (req, res, next) => {
  // console.log(req.body);
  const {firstName, lastName, email, password} = req.body;
  //bcrypt functionality to turn the password to a hash
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      User.create({firstName: firstName, lastName: lastName, email: email, password: hash})
    })
  })
  const userIdToAssign = User.find({email: email}, '_id');
  res.locals.userId = userIdToAssign;
  next(); 
  //the next middleware will handle the creation of the cookies
  //after that, another middleware will create the entry for that user in the templates collection
}

userController.createTemplate = (req, res, next) => {
  console.log(res.locals.userId);
  const userId = res.locals;
  Template.create({userId: userId, arrayOfTemplates: []});
  next();
}

userController.login = (req, res, next) => {
  if (req.session) return next();
  const {password, email} = req.body;
  User.find({email: email}, 'password', (err, hashDoc) => {
    bcrypt.compare(password, hashDoc, (err, result) => {
      if (!result) return alert("This password and email combination do not exist in our database.");
      if (err) return next(err);
      else if (result === "true") return next();
    });
  });
}

userController.getTemplates = (req,res,next) => {
  //assuming the user id has been stored on the cookie
  const userCookieId = req.cookie;
  Template.find({userId: userCookieId} ,'arrayOfTemplates', (err, doc) => {
  console.log(doc);
  next();
  }
)}





// a mongoose middleware for a doc in the tempates table when the user signs up

module.exports = userController;