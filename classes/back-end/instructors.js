const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const courses = require("./courses.js");
const Course = courses.model;

const instructorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});
  
// Create model for instructors
const Instructor = mongoose.model('Instructor', instructorSchema);

// Create a new instructor
router.post('/', validUser, async (req, res) => {
  try {
    let newCourse = await Course.findOne({
      _id: req.body.course_id
    });

    const instructor = new Instructor({
      user: req.user,
      courses: [newCourse]
    });

    await instructor.save();
    res.send(instructor);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get an instructor and their courses
router.get('/:id', validUser, async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.params.id
    })

    let instructor = await Instructor.findOne({
      user: user
    }).populate('user');

    if (instructor) {
      let currCourses = []
      for (let i = 0; i < instructor.courses.length; i++) {
        let currCourse = await Course.findOne({
          _id: instructor.courses[i]
        });
        currCourses.push(currCourse);
      }
      instructor.courses = currCourses;
    }

    res.send(instructor);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Add a course to an instructor's course list
router.put('/', validUser, async (req, res) => {
  try {
    let newCourse = await Course.findOne({
      _id: req.body.course_id
    });

    let instructor = await Instructor.findOne({
      user: req.user
    });

    let updatedCourses = [newCourse._id];
    for (let i = 0; i < instructor.courses.length; i++) {
      updatedCourses.push(instructor.courses[i]);
    }

    instructor.courses = updatedCourses
    instructor.save();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Remove a course from an instructor's course list
router.put('/remove', validUser, async (req, res) => {
  try {
    let oldCourse = await Course.findOne({
      _id: req.body.course_id
    });

    let instructor = await Instructor.findOne({
      user: req.user
    });

    var index = instructor.courses.indexOf(oldCourse._id);

    instructor.courses.splice(index, 1);
    instructor.save();

    await Course.deleteOne({
      _id: req.body.course_id
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: Instructor
};