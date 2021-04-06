<template>
<div class="wrapper">
  <div class="courses">
    <div class="course" v-for="course in courses" :key="course._id">
      <div class="title-row">
        <i class="fas fa-trash-alt" v-on:click="deleteCourse(course)"></i>
        <div class="title">
          <h4>{{ course.title }}</h4>
        </div>
      </div>
      <button class="btn btn-light" v-on:click="viewInstructor(course.instructor)" data-toggle="modal" data-target="#exampleModal">Instructor: {{ course.instructor }}</button>
      <div class="description-container">
        <p class="description">{{ course.description }}</p>
      </div>
      <div class="course-info">
        <p>{{ course.duration }}</p>
        <p>{{ course.time }}</p>
        <p>{{ course.price }}</p>
      </div>
      <button v-if="!checkRegistration(course)" v-bind:id="course._id" class="btn btn-dark" v-on:click="register(course)">Register</button>
      <button v-if="checkRegistration(course)" v-bind:id="course._id" class="btn btn-dark btn-color" v-on:click="register(course)">Registered!</button>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ this.selectedInstructor }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h5>Courses taught:</h5>
          <div v-show="loading">
            <p>Loading courses...</p>
          </div>
          <div v-show="!loading" v-for="course in selectedCourses" :key="course._id">
            <p>{{ course.title }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CourseList',
  props: {
    courses: Array
  },
  data() {
    return {
      registeredCourses: [],
      selectedInstructor: "",
      selectedCourses: [],
      loading: true
    }
  },
  methods: {
    async register(course) {
      var button = document.getElementById(course._id);

      if (button.innerHTML == "Register") {       
        try {
          await axios.post("/api/registration", {
            _id: course._id,
            title: course.title,
            instructor: course.instructor,
            description: course.description,
            time: course.time,
            duration: course.duration,
            price: course.price
          });         
        } catch (error) {
          console.log(error);
        }

        button.innerHTML = "Registered!";
        button.classList.add("btn-color");
      }
    },

    async getRegisteredCourses() {
      try {
        let response = await axios.get("/api/registration");
        this.registeredCourses = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    checkRegistration(course) {
      for (let i = 0; i < this.registeredCourses.length; i++) {
        if (this.registeredCourses[i].title == course.title && this.registeredCourses[i].instructor == course.instructor) {
          return true;
        }
      }
      return false;
    },

    async deleteCourse(course) {
      try {
        await axios.put("/api/instructor/remove/" + course.instructor, {
          course_id: course._id
        });
      } catch (error) {
        console.log(error);
      }

      this.$parent.getCourses();
    },

    async viewInstructor(name) {
      this.loading = true;
      try {
        let response = await axios.get("/api/instructor/" + name);
        let instructor = response.data;

        this.selectedInstructor = instructor.name;
        this.selectedCourses = instructor.courses;
        this.loading = false;
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getRegisteredCourses();
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.courses {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

.course {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  flex-basis: 20%;
  background-color: rgb(240, 241, 243);
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.title-row {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 0 20px 0 20px;
}

h4 {
  font-size: 18px;
}

.description-container {
  height: 140px;
  background-color: rgb(220, 223, 230);
  padding: 10px;
  margin-bottom: 15px;
}

.description {
  font-size: 14px;
}

.btn-dark {
  background-color: #008f95 !important;
  border-color: #008f95 !important;
}

.btn-dark:hover {
  background-color: #015c5f !important;
  border-color: #015c5f !important;
}

.btn-color {
  background-color: #e24e42 !important;
  border-color: #e24e42 !important;
}

.btn-color:hover {
  background-color: #e24e42 !important;
  border-color: #e24e42 !important;
}

.btn-light {
  background-color: #e9b000 !important;
  border-color: #e9b000 !important;
  color: white;
  margin-bottom: 20px;
}

.btn-light:hover {
  background-color: #ce9f11 !important;
  border-color: #ce9f11 !important;
  color: white;
}

.fas:hover {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .course {
    flex-basis: 100%;
  }
}
</style>