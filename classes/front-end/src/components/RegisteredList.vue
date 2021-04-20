<template>
<div class="wrapper">
  <div class="courses">
    <div class="course" v-for="course in registeredCourses" :key="course.id">
      <div class="title">
        <h4>{{ course.title }}</h4>
      </div>
      <p>Instructor: {{ course.instructor.firstName }} {{ course.instructor.lastName }}</p>
      <div class="description-container">
        <p class="description">{{ course.description }}</p>
      </div>
      <div class="course-info">
        <p>{{ course.duration }}</p>
        <p>{{ course.time }}</p>
        <p>{{ course.price }}</p>
      </div>
      <button class="btn btn-dark" v-on:click="unregister(course)">Unregister</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisteredList',
  props: {
    registeredCourses: Array
  },

  methods: {
    async unregister(course) {
      try {
        await axios.delete("/api/registration/", {
          course_id: course._id,
        });
        this.$parent.getRegisteredCourses();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
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
  background-color: rgb(198, 220, 221);
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.title {
  height: 40px;
  margin-bottom: 20px;
}

h4 {
  font-size: 18px;
}

.description-container {
  height: 140px;
  background-color: rgb(226, 242, 243);
  padding: 10px;
  margin-bottom: 15px;
}

.description {
  font-size: 14px;
}

@media only screen and (max-width: 600px) {
  .course {
    flex-basis: 100%;
  }
}
</style>