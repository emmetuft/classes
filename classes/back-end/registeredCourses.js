const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const courses = require("./courses.js");
const Course = courses.model;

// Create a scheme for registered courses
const registeredCoursesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  registeredCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});
  
// Create models for courses and registered courses
const RegisteredCourses = mongoose.model('RegisteredCourses', registeredCoursesSchema);

// Register for a course
router.post('/:id', validUser, async (req, res) => {
  try {
    let newCourse = await Course.findOne({
      _id: req.params.id
    });

    let registeredCoursesList = await RegisteredCourses.findOne({
      user: req.user
    });

    if (registeredCoursesList) {
      await RegisteredCourses.updateOne({
        user: req.user
      }, {
        '$set': {
          registeredCourses: registeredCoursesList.registeredCourses.concat(newCourse)
        }
      });
    }
    else {
      const newRegisteredCoursesList = new RegisteredCourses({
        user: req.user,
        registeredCourses: [newCourse]
      });
      await newRegisteredCoursesList.save();
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
  
// Get all registered courses
router.get('/', validUser, async (req, res) => {
  try {
    let registeredCoursesList = await RegisteredCourses.findOne({
      user: req.user
    }).populate({
      path : 'registeredCourses',
      populate : {
        path : 'instructor'
      }
    });
    if (registeredCoursesList) {
      res.send(registeredCoursesList.registeredCourses);
    }
    else {
      res.send([]);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
  
// Unregister from a course
router.delete('/', validUser, async (req, res) => {
  try {
    let oldCourse = await Course.findOne({
      _id: req.body.course_id
    });

    let registeredCoursesList = await RegisteredCourses.findOne({
      user: req.user
    })

    var index = registeredCoursesList.registeredCourses.indexOf(oldCourse);
    registeredCoursesList.registeredCourses.splice(index, 1);
    registeredCoursesList.save();

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: RegisteredCourses
};