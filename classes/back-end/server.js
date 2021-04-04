const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Connect to the database
mongoose.connect('mongodb://localhost:27017/courses', {
  useNewUrlParser: true
});

// Create a scheme for courses
const courseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  description: String,
  time: String,
  duration: String,
  price: String
});

// Create a scheme for registration lists
const registrationListSchema = new mongoose.Schema({
  courses: Array
});

// Create models for courses and registration lists
const Course = mongoose.model('Course', courseSchema);
const RegistrationList = mongoose.model('RegistrationList', registrationListSchema);

// Create a new course
app.post('/api/course', async (req, res) => {
    const course = new Course({
      title: req.body.title,
      instructor: req.body.instructor,
      description: req.body.description,
      time: req.body.time,
      duration: req.body.duration,
      price: req.body.price
    });
    try {
      await course.save();
      res.send(course);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

// Get a list of all the available courses
app.get('/api/courses', async (req, res) => {
    try {
      let courses = await Course.find();
      res.send(courses);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

// Delete a course
app.delete('/api/course/:id', async (req, res) => {
  try {
    await Course.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Edit a course
app.put('/api/course/:id', async (req, res) => {
  try {
    let course = await Course.findOne({
      _id: req.params.id
    });
    course.title = req.body.title,
    course.instructor = req.body.instructor,
    course.description = req.body.description,
    course.time = req.body.time,
    course.duration = req.body.duration,
    course.price = req.body.price
    course.save();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

// Create a new registration list
app.post('/api/registration', async (req, res) => {
  const registrationList = new RegistrationList({
    courses: req.body.courses
  });
  try {
    await registrationList.save();
    res.send(registrationList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get courses from a registration list
app.get('/api/registration/:id', async (req, res) => {
  try {
    let registrationList = await RegistrationList.findOne({
      _id: req.params.id
    });
    res.send(registrationList.courses);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Add a course to a registration list
app.put('/api/registration/:id', async (req, res) => {
  try {
    let registrationList = await RegistrationList.findOne({
      _id: req.params.id
    });
    registrationList.courses = req.body.courses
    registrationList.save();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

app.listen(3001, () => console.log('Server listening on port 3001!'));