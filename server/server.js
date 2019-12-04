const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/controllers');

const app = express();
const path = require('path');

//allows cors errors to be bypassed
app.use(cors());

//body parser to allow req body post from front end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//recieving state userdata from front end at signin
app.put('/signup', userController.signup, userController.createTemplate, (req, res) => {
    //console log to check signin is active 
    // console.log('signup  middleware is functioning');
    // console.log('This is your req body entry: ', req.body);
    // console.log(res.locals.userId);
    console.log("return to sender")
    res.status(200).send();
});

//recieving state userdata from front end at login
app.post('/login', (req, res) => {
    //console log to check login is active 
    console.log('login entry middleware is functioning');
    // console.log('This is your req body entry: ', req.body);
    res.status(200).send();
});


// respond with main app
// app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../public/index.html')));


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.listen(4000, () => {
  console.log('****** Listening on Port 4000 ******');
});
