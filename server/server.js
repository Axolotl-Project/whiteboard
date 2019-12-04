const express = require('express');
const bodyParser = require('body-parser')
const server = express();
const userController = require('./controllers/controllers.js');


server.use('/', bodyParser.json());
server.use('/', bodyParser.urlencoded({extended: true}));

server.use((req, res, next) => {
  console.log(`************************************************
  CHAOS flow test METHOD:${req.method}, PATH: ${req.url}, BODY: ${JSON.stringify(req.body)}
  ***********************************************`);
  return next();
});


server.get('/', userController.getUsers, (req,res) => {res.send()})

server.post('/signup', userController.signup, userController.createTemplate, userController.getTemplates, (req, res)=>{
  res.send();
})

server.listen(3000, () => console.log('server listening'));