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

// Create a scheme for registered courses
const registeredCourseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  description: String,
  time: String,
  duration: String,
  price: String
});

// Create models for courses and registered courses
const Course = mongoose.model('Course', courseSchema);
const RegisteredCourse = mongoose.model('RegisteredCourse', registeredCourseSchema);

const instructorSchema = new mongoose.Schema({
  name: String,
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

// Create model for instructors
const Instructor = mongoose.model('Instructor', instructorSchema);

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
    await RegisteredCourse.deleteOne({
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

// Register for a course
app.post('/api/registration', async (req, res) => {
  const registeredCourse = new RegisteredCourse({
    _id: req.body._id,
    title: req.body.title,
    instructor: req.body.instructor,
    description: req.body.description,
    time: req.body.time,
    duration: req.body.duration,
    price: req.body.price
  });
  try {
    await registeredCourse.save();
    res.send(registeredCourse);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get all registered courses
app.get('/api/registration', async (req, res) => {
  try {
    let registeredCourses = await RegisteredCourse.find();
    res.send(registeredCourses);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Unregister from a course
app.delete('/api/registration/:id', async (req, res) => {
  try {
    await RegisteredCourse.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Create a new instructor
app.post('/api/instructor', async (req, res) => {
  try {
    let newCourse = await Course.findOne({
      _id: req.body.course_id
    });
  
    const instructor = new Instructor({
      name: req.body.name,
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
app.get('/api/instructor/:name', async (req, res) => {
  try {
    let instructor = await Instructor.findOne({
      name: req.params.name
    });

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
app.put('/api/instructor/:name', async (req, res) => {
  try {
    let newCourse = await Course.findOne({
      _id: req.body.course_id
    });

    let instructor = await Instructor.findOne({
      name: req.params.name
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
app.put('/api/instructor/remove/:name', async (req, res) => {
  try {
    let oldCourse = await Course.findOne({
      _id: req.body.course_id
    });

    let instructor = await Instructor.findOne({
      name: req.params.name
    });

    var index = instructor.courses.indexOf(oldCourse._id);
    instructor.courses.splice(index, 1);
    instructor.save();

    await Course.deleteOne({
      _id: req.body.course_id
    });
    await RegisteredCourse.deleteOne({
      _id: req.body.course_id
    });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));