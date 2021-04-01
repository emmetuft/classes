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

// Create a model for courses
const Course = mongoose.model('Course', courseSchema);

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

app.listen(3000, () => console.log('Server listening on port 3000!'));