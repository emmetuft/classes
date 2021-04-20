const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

// Create a scheme for courses
const courseSchema = new mongoose.Schema({
  title: String,
  instructor: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  description: String,
  time: String,
  duration: String,
  price: String
});

// Create models for courses and registered courses
const Course = mongoose.model('Course', courseSchema);

// Create a new course
router.post('/', validUser, async (req, res) => {
  try {
    const course = new Course({
      title: req.body.title,
      instructor: req.user,
      description: req.body.description,
      time: req.body.time,
      duration: req.body.duration,
      price: req.body.price
    });
    await course.save();
    res.send(course);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all the available courses
router.get('/all', async (req, res) => {
  try {
    let courses = await Course.find().populate('instructor');
    res.send(courses);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete a course
router.delete('/:id', validUser, async (req, res) => {
  try {
    await Course.deleteOne({
      _id: req.params.id
    });
    await RegisteredCourse.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: Course
};