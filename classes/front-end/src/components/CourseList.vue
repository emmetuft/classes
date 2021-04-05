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
      <p>Instructor: {{ course.instructor }}</p>
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
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CourseList',
  props: {
    courses: Array
  },

  methods: {
    async register(course) {
      var button = document.getElementById(course._id);

      if (button.innerHTML == "Register") {       
        try {
          let response = await axios.get("/api/registration");
          let registrationLists = response.data;
          if (registrationLists.length > 0) {
            if (registrationLists[0].courses.indexOf(course) == -1) {
              try {
                await axios.put("/api/registration/" + registrationLists[0]._id, {
                  courses: registrationLists[0].courses.push(course)
                });
              } catch (error) {
                console.log(error);
              }
            }
          }
          else {
            try {
              await axios.post("/api/registration", {
                courses: [course]
              })
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }

        button.innerHTML = "Registered!";
        button.classList.add("btn-color");
      }
    },

    checkRegistration(course) {
      if (this.$root.$data.registeredCourses.indexOf(course) == -1) {
        return false;
      }
      return true;
    },

    async deleteCourse(course) {
      try {
        await axios.delete("/api/course/" + course._id);
        this.$parent.getCourses();
        return true;
      } catch (error) {
        console.log(error);
      }
    }
  },

  created() {

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

.fas:hover {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .course {
    flex-basis: 100%;
  }
}
</style>