const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Connect to the database
mongoose.connect('mongodb://localhost:27017/courses', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// import the users module and setup its API path
const users = require("./users.js");
app.use("/api/users", users.routes);

// import the courses module and setup its API path
const courses = require("./courses.js");
app.use("/api/courses", courses.routes);

// import the instructors module and setup its API path
const registeredCourses = require("./registeredCourses.js");
app.use("/api/registration", registeredCourses.routes);

// import the instructors module and setup its API path
const instructors = require("./instructors.js");
app.use("/api/instructors", instructors.routes);

app.listen(3005, () => console.log('Server listening on port 3005!'));